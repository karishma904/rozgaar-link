// ==========================================================================
// STATE MANAGEMENT & REACTIVE STORE — Engineering Technical Platform
// ==========================================================================

class AppState {
  constructor() {
    this.role = 'customer'; // 'customer' | 'worker' | 'coop' | 'admin'
    this.activeCustomerTab = 'home'; // 'home' | 'bookings' | 'services' | 'messages' | 'profile'
    this.isFullScreen = false;

    // Search and Category Filters
    this.selectedCategoryId = 'cat-all';
    this.searchQuery = '';

    // Customer Location
    this.currentLocation = INITIAL_DATA.customer.activeLocation;
    this.savedAddresses = [...INITIAL_DATA.customer.savedAddresses];

    // Services & Categories
    this.categories = [...INITIAL_DATA.categories];
    this.services = [...INITIAL_DATA.services];
    this.workers = [...INITIAL_DATA.workers];
    this.cooperatives = [...INITIAL_DATA.cooperatives];
    this.sparePartsInventory = [...INITIAL_DATA.sparePartsInventory];

    // Active Booking (Real-time Lifecycle State)
    this.activeBooking = JSON.parse(JSON.stringify(INITIAL_DATA.initialActiveBooking));
    this.bookingHistory = [...INITIAL_DATA.bookingHistory];

    // Booking Flow Wizard Draft
    this.wizard = {
      // Steps:
      // 1: Machine / Equipment Selection
      // 2: Faulty Part Selection
      // 3: Problem Description & Photo Upload
      // 4: Worker Grade Selection
      // 5: Available Workers & Schedule
      // 6: Price Review & Confirmation
      step: 1,
      service: this.services[0], // Default electrical service
      // Fault identification fields
      selectedMachine: null,       // { id, name, icon }
      selectedFaultyPart: null,    // string
      requirementText: '',
      photoUrl: null,
      aiDiagnosis: null,
      selectedGrade: 'A',
      selectedWorker: this.workers[0],
      selectedDate: 'Today',
      selectedSlot: 'In 30 Mins (Immediate)',
      address: this.currentLocation.address,
      customSpares: []
    };

    // Official Organization details (Loaded from LocalStorage or INITIAL_DATA)
    const savedOrg = localStorage.getItem('techfixr_organization');
    this.organization = savedOrg ? JSON.parse(savedOrg) : JSON.parse(JSON.stringify(INITIAL_DATA.organization));

    // Role-Based Authentication & Session Persistence
    const savedUser = localStorage.getItem('techfixr_auth_user');
    const savedToken = localStorage.getItem('techfixr_auth_token');
    if (savedUser && savedToken) {
      try {
        this.currentUser = JSON.parse(savedUser);
        this.authToken = savedToken;
      } catch (e) {
        this.currentUser = INITIAL_DATA.authUsers[0];
        this.authToken = 'AUTH-TOKEN-' + Date.now();
      }
    } else {
      // Default to verified customer Kartikey
      this.currentUser = INITIAL_DATA.authUsers[0];
      this.authToken = 'AUTH-TOKEN-' + Date.now();
      localStorage.setItem('techfixr_auth_user', JSON.stringify(this.currentUser));
      localStorage.setItem('techfixr_auth_token', this.authToken);
    }

    // Worker State
    this.workerState = {
      isOnline: true,
      earningsToday: 1850,
      earningsWeek: 11400,
      welfareContribution: 1250,
      pendingRequests: [
        {
          id: "REQ-7782",
          service: "AC Repair — Capacitor Fault",
          customer: "Aditya Sharma",
          location: "ALARD University Campus, Block B, Hinjawadi",
          distance: "1.4 km",
          estimatedPay: "₹520",
          grade: "GRADE A",
          urgent: true,
          faultReport: { machine: "Air Conditioner", suspectedPart: "Capacitor Fault" }
        }
      ]
    };

    // Cooperative State
    this.coopState = {
      pendingVerifications: [
        { id: "APPL-902", name: "Suresh Chandra", trade: "Electrical Engineer (Industrial)", experience: "6 years", coopAssignedGrade: "B", status: "Pending ID Review" },
        { id: "APPL-905", name: "Mukesh Rajput", trade: "Mechanical Engineer (HVAC)", experience: "9 years", coopAssignedGrade: "A", status: "Trade Test Passed" }
      ],
      totalWelfareFund: "₹4,82,500",
      activeDispatches: 18
    };

    // Notifications
    this.notifications = [
      { id: "notif-1", title: "Engineer Rajesh Kumar is On The Way", time: "2 mins ago", read: false, type: "gps" },
      { id: "notif-2", title: "Engineering Store: Capacitor (45µF) Dispatched", time: "8 mins ago", read: false, type: "part" },
      { id: "notif-3", title: "Service Request Confirmed: ID #ENG-2026-88219", time: "15 mins ago", read: true, type: "booking" }
    ];

    // Active Modal Sheet
    this.activeModal = null; // null | 'location' | 'worker-profile' | 'more-menu' | 'notifications' | 'emergency' | 'ai-helper' | 'new-service' | 'fault-report' | 'sign-in' | 'edit-org' | 'auth-error-dialog'
    this.modalExtraData = null;

    // Subscribed listeners
    this.listeners = [];
  }

  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  notify() {
    this.listeners.forEach(fn => fn(this));
  }

  setRole(newRole, bypassCheck = false) {
    if (!bypassCheck && newRole !== 'customer') {
      // Authorization route guard: verify currentUser has permission for this role
      if (!this.currentUser) {
        this.openModal('sign-in', { selectedRole: newRole === 'worker' ? 'worker' : 'admin', authError: 'Authentication required. Please sign in to access this workspace.' });
        return;
      }
      const allowed = this.currentUser.allowedRoles || [this.currentUser.role];
      if (newRole === 'worker' && !allowed.includes('worker')) {
        this.openModal('auth-error-dialog', {
          title: 'Engineer Portal Access Restricted',
          message: `Your account (${this.currentUser.email}) is signed in as a ${this.currentUser.roleLabel || 'Customer'}. Access to the Engineer Portal requires an authorized Engineer account.`,
          requiredRole: 'worker'
        });
        return;
      }
      if ((newRole === 'coop' || newRole === 'admin') && !allowed.includes('admin') && !allowed.includes('coop')) {
        this.openModal('auth-error-dialog', {
          title: 'Corporate Admin Access Restricted',
          message: `Your account (${this.currentUser.email}) does not have Corporate Admin clearance. Access to corporate administration and management tools requires a verified administrator account.`,
          requiredRole: 'admin'
        });
        return;
      }
    }

    this.role = newRole;
    this.notify();
  }

  // Authentication: Authenticate against authorized provider records
  login(targetRole, email, password) {
    if (!email || !email.trim()) {
      return { success: false, error: 'Please enter your registered email or username.' };
    }
    if (!password || !password.trim()) {
      return { success: false, error: 'Please enter your account password.' };
    }

    const cleanEmail = email.trim().toLowerCase();
    const user = INITIAL_DATA.authUsers.find(u => u.email.toLowerCase() === cleanEmail);

    if (!user) {
      return { success: false, error: `Authentication Failed: No account registered with "${email}".` };
    }

    if (user.password !== password.trim()) {
      return { success: false, error: 'Authentication Failed: Incorrect password. Please verify your credentials.' };
    }

    // Role authorization check: verify user has permissions for the selected role
    const allowed = user.allowedRoles || [user.role];
    if (targetRole === 'worker' && !allowed.includes('worker')) {
      return {
        success: false,
        error: `Authorization Error: Account "${user.name}" (${user.roleLabel}) is not authorized for the Engineer Portal. Please select Customer or sign in with engineer credentials.`
      };
    }
    if (targetRole === 'admin' && !allowed.includes('admin') && !allowed.includes('coop')) {
      return {
        success: false,
        error: `Authorization Error: Account "${user.name}" (${user.roleLabel}) does not possess Corporate Admin clearance.`
      };
    }
    if (targetRole === 'customer' && !allowed.includes('customer')) {
      return {
        success: false,
        error: `Authorization Error: Account "${user.name}" is not registered for Customer access.`
      };
    }

    // Establish authenticated session
    this.currentUser = user;
    this.authToken = 'TOKEN-' + Date.now();
    localStorage.setItem('techfixr_auth_user', JSON.stringify(user));
    localStorage.setItem('techfixr_auth_token', this.authToken);

    // Route to the appropriate workspace
    if (targetRole === 'customer') {
      this.role = 'customer';
      this.activeCustomerTab = 'home';
    } else if (targetRole === 'worker') {
      this.role = 'worker';
    } else if (targetRole === 'admin') {
      this.role = 'coop';
    }

    this.notifications.unshift({
      id: `notif-${Date.now()}`,
      title: `Signed in successfully as ${user.name} (${user.roleLabel})`,
      time: 'Just now',
      read: false,
      type: 'auth'
    });

    this.closeModal();
    this.notify();
    return { success: true, user };
  }

  logout() {
    localStorage.removeItem('techfixr_auth_user');
    localStorage.removeItem('techfixr_auth_token');
    this.currentUser = null;
    this.authToken = null;
    this.role = 'customer';
    this.activeCustomerTab = 'home';
    this.notifications.unshift({
      id: `notif-${Date.now()}`,
      title: 'Signed out of TechFixr session',
      time: 'Just now',
      read: false,
      type: 'auth'
    });
    this.closeModal();
    this.notify();
  }

  // Organization Address & Details Management (Restricted to Corporate Admin)
  updateOrganization(updatedDetails) {
    if (!this.currentUser || (!this.currentUser.allowedRoles.includes('admin') && !this.currentUser.allowedRoles.includes('coop'))) {
      return { success: false, error: 'Unauthorized: Only Corporate Administrators can modify university and organization configurations.' };
    }

    if (!updatedDetails.name || updatedDetails.name.trim().length < 3) {
      return { success: false, error: 'Institution Name must be at least 3 characters.' };
    }
    if (!updatedDetails.address || updatedDetails.address.trim().length < 10) {
      return { success: false, error: 'Full Address must be at least 10 characters long.' };
    }
    if (!updatedDetails.pincode || !/^\d{6}$/.test(updatedDetails.pincode.trim())) {
      return { success: false, error: 'Please enter a valid 6-digit Indian PIN code.' };
    }

    this.organization = {
      ...this.organization,
      name: updatedDetails.name.trim(),
      address: updatedDetails.address.trim(),
      city: updatedDetails.city ? updatedDetails.city.trim() : this.organization.city,
      pincode: updatedDetails.pincode.trim(),
      lastUpdated: new Date().toISOString().split('T')[0]
    };

    localStorage.setItem('techfixr_organization', JSON.stringify(this.organization));

    // Keep active and default campus location updated
    if (this.currentLocation && this.currentLocation.id === 'loc-1') {
      this.currentLocation.address = this.organization.address;
    }
    if (this.savedAddresses && this.savedAddresses[0]) {
      this.savedAddresses[0].address = this.organization.address;
    }

    this.notifications.unshift({
      id: `notif-${Date.now()}`,
      title: `Organization Updated: ${this.organization.name}`,
      time: 'Just now',
      read: false,
      type: 'admin'
    });

    this.closeModal();
    this.notify();
    return { success: true, organization: this.organization };
  }

  setCustomerTab(tabName) {
    this.activeCustomerTab = tabName;
    this.notify();
  }

  toggleFullScreen() {
    this.isFullScreen = !this.isFullScreen;
    this.notify();
  }

  setCategory(catId) {
    this.selectedCategoryId = catId;
    this.notify();
  }

  setSearchQuery(q) {
    this.searchQuery = q;
    this.notify();
  }

  setLocation(loc) {
    this.currentLocation = loc;
    INITIAL_DATA.customer.activeLocation = loc;
    this.notify();
  }

  openModal(modalName, extraData = null) {
    this.activeModal = modalName;
    this.modalExtraData = extraData;
    this.notify();
  }

  closeModal() {
    this.activeModal = null;
    this.modalExtraData = null;
    this.notify();
  }

  // Booking Flow Steps
  startBookingForService(serviceId) {
    const srv = this.services.find(s => s.id === serviceId) || this.services[0];
    this.wizard.service = srv;
    this.wizard.step = 1; // Always start at Machine Selection
    this.wizard.selectedMachine = null;
    this.wizard.selectedFaultyPart = null;
    this.wizard.requirementText = '';
    this.wizard.photoUrl = null;
    this.wizard.aiDiagnosis = null;
    this.wizard.selectedGrade = 'A';
    this.wizard.selectedWorker = this.workers.find(w => w.serviceIds.includes(srv.id) && w.grade === 'A') || this.workers[0];
    this.setCustomerTab('booking-wizard');
    this.notify();
  }

  setWizardMachine(machine) {
    this.wizard.selectedMachine = machine;
    this.wizard.selectedFaultyPart = null;
    this.notify();
  }

  setWizardFaultyPart(part) {
    this.wizard.selectedFaultyPart = part;
    this.notify();
  }

  setWizardGrade(grade) {
    this.wizard.selectedGrade = grade;
    const suitableWorker = this.workers.find(w => w.grade === grade && (w.serviceIds.includes(this.wizard.service.id) || w.primaryService.toLowerCase().includes(this.wizard.service.name.toLowerCase()))) 
      || this.workers.find(w => w.grade === grade) 
      || this.workers[0];
    this.wizard.selectedWorker = suitableWorker;
    this.notify();
  }

  setWizardWorker(workerId) {
    const wrk = this.workers.find(w => w.id === workerId);
    if (wrk) {
      this.wizard.selectedWorker = wrk;
      this.wizard.selectedGrade = wrk.grade;
    }
    this.notify();
  }

  setWizardSchedule(date, slot) {
    this.wizard.selectedDate = date;
    this.wizard.selectedSlot = slot;
    this.notify();
  }

  simulateAIPhotoDiagnosis(sampleType = 'ac-capacitor') {
    if (sampleType === 'ac-capacitor') {
      this.wizard.photoUrl = 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80';
      this.wizard.aiDiagnosis = {
        detectedIssue: "Blown Dual Run Capacitor & Contact Oxidation",
        confidence: "98.4%",
        estimatedDuration: "45 mins",
        suggestedGrade: "GRADE A Master Craftsman (High Voltage Safety)",
        predictedPart: "45µF Heavy-Duty AC Run Capacitor (Stock in Cooperative Dark Store #1)",
        predictedPartPrice: 420
      };
      this.wizard.requirementText = "AC outdoor fan stalled with buzzing noise. AI confirmed capacitor breakdown.";
    } else if (sampleType === 'water-leak') {
      this.wizard.photoUrl = 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=600&q=80';
      this.wizard.aiDiagnosis = {
        detectedIssue: "High-Pressure CPVC Joint Hairline Crack",
        confidence: "95.1%",
        estimatedDuration: "40 mins",
        suggestedGrade: "GRADE B Certified Journeyman",
        predictedPart: "Astral CPVC High-Pressure Pipe Joint Set",
        predictedPartPrice: 190
      };
      this.wizard.requirementText = "Concealed leak behind kitchen wall cabinet.";
    }
    this.notify();
  }

  confirmNewBooking() {
    const newId = `ENG-2026-${Math.floor(10000 + Math.random() * 90000)}`;
    const gradeInfo = INITIAL_DATA.grades[this.wizard.selectedGrade];
    const base = this.wizard.service.basePrice;
    const gradeAddon = gradeInfo.priceAddon;
    const coopWelfare = 45;
    const platformFee = 30;
    const gst = Math.round((base + gradeAddon) * 0.05);

    this.activeBooking = {
      id: newId,
      serviceId: this.wizard.service.id,
      serviceName: this.wizard.service.name,
      categoryName: this.wizard.service.categoryName,
      workerId: this.wizard.selectedWorker.id,
      workerName: this.wizard.selectedWorker.name,
      workerAvatar: this.wizard.selectedWorker.avatar,
      workerGrade: this.wizard.selectedGrade,
      workerPhone: this.wizard.selectedWorker.phone,
      cooperativeName: this.wizard.selectedWorker.cooperativeName,
      cooperativeReg: "UP-MTH-COOP-4102/2014",
      location: this.wizard.address,
      scheduledTime: `${this.wizard.selectedDate} • ${this.wizard.selectedSlot}`,
      createdAt: "Just now",
      currentStageIndex: 1, // Worker Accepted
      eta: "12 mins",
      distance: "1.8 km",
      speed: "30 km/h",
      pricing: {
        baseCharge: base,
        gradeAddon: gradeAddon,
        gradeTitle: `${gradeInfo.code} ${gradeInfo.badgeTitle}`,
        partRequired: false,
        selectedPart: null,
        cooperativeWelfareFund: coopWelfare,
        platformTechFee: platformFee,
        taxGST: gst,
        total: base + gradeAddon + coopWelfare + platformFee + gst
      },
      faultReport: {
        machine: this.wizard.selectedMachine ? this.wizard.selectedMachine.name : 'Not Specified',
        suspectedPart: this.wizard.selectedFaultyPart || 'Not Sure',
        description: this.wizard.requirementText || 'Standard repair and diagnostics requested.'
      },
      customerRequirement: `Machine: ${this.wizard.selectedMachine ? this.wizard.selectedMachine.name : 'N/A'} | Suspected Part: ${this.wizard.selectedFaultyPart || 'Not Sure'} | Problem: ${this.wizard.requirementText || 'Standard repair and diagnostics requested.'}`,
      customerPhoto: this.wizard.photoUrl || "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80",
      beforeVerification: {
        uploaded: true,
        photo: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80",
        workerNotes: "Inspected domestic circuit and components. Ready for customer sign-off.",
        timestamp: "Just now",
        isApprovedByCustomer: false
      },
      afterVerification: {
        uploaded: false,
        photo: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=600&q=80",
        workerNotes: "Repairs finalized and safety earthing verified.",
        timestamp: null,
        isApprovedByCustomer: false
      },
      paymentDetails: {
        status: "PENDING",
        method: "UPI (Google Pay)",
        transactionId: null,
        paidAt: null
      },
      ratingFeedback: {
        rating: 5,
        aspects: { serviceQuality: 5, workerBehaviour: 5, timeliness: 5, workQuality: 5 },
        review: "",
        tipAmount: 50,
        submitted: false
      }
    };

    // Add notification
    this.notifications.unshift({
      id: `notif-${Date.now()}`,
      title: `Booking Confirmed: #${newId}`,
      time: "Just now",
      read: false,
      type: "booking"
    });

    this.setCustomerTab('lifecycle');
    this.notify();
  }

  // Active Booking Lifecycle Stage Controller
  setBookingStage(stageIndex) {
    if (!this.activeBooking) return;
    this.activeBooking.currentStageIndex = Math.max(0, Math.min(stageIndex, 9));
    
    // Auto-update substates based on stage
    if (stageIndex >= 3) {
      this.activeBooking.beforeVerification.uploaded = true;
    }
    if (stageIndex >= 6) {
      this.activeBooking.afterVerification.uploaded = true;
      this.activeBooking.afterVerification.timestamp = "Just completed";
    }
    if (stageIndex >= 8) {
      this.activeBooking.paymentDetails.status = "COMPLETED";
      this.activeBooking.paymentDetails.transactionId = `TXN-UPI-${Math.floor(100000000 + Math.random() * 900000000)}`;
      this.activeBooking.paymentDetails.paidAt = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    }
    this.notify();
  }

  advanceBookingStage() {
    if (!this.activeBooking) return;
    this.setBookingStage(this.activeBooking.currentStageIndex + 1);
  }

  approveBeforeWork() {
    if (!this.activeBooking) return;
    this.activeBooking.beforeVerification.isApprovedByCustomer = true;
    this.notifications.unshift({
      id: `notif-${Date.now()}`,
      title: "Before-Work Photos Approved by Customer",
      time: "Just now",
      read: false,
      type: "verification"
    });
    this.notify();
  }

  selectSparePart(partId) {
    if (!this.activeBooking) return;
    const part = this.sparePartsInventory.find(p => p.id === partId);
    if (part) {
      this.activeBooking.pricing.partRequired = true;
      this.activeBooking.pricing.selectedPart = {
        id: part.id,
        name: part.name,
        price: part.coopPrice,
        warehouse: part.warehouse,
        runnerETA: "10 mins (Cooperative Express Delivery)"
      };
      // Recalculate total
      const p = this.activeBooking.pricing;
      p.total = p.baseCharge + p.gradeAddon + p.selectedPart.price + p.cooperativeWelfareFund + p.platformTechFee + p.taxGST;

      this.notifications.unshift({
        id: `notif-${Date.now()}`,
        title: `Spare Part Approved: ${part.name} (₹${part.coopPrice})`,
        time: "Just now",
        read: false,
        type: "part"
      });
    }
    this.notify();
  }

  skipSparePart() {
    if (!this.activeBooking) return;
    this.activeBooking.pricing.partRequired = false;
    this.activeBooking.pricing.selectedPart = null;
    const p = this.activeBooking.pricing;
    p.total = p.baseCharge + p.gradeAddon + p.cooperativeWelfareFund + p.platformTechFee + p.taxGST;
    this.notify();
  }

  approveAfterWork() {
    if (!this.activeBooking) return;
    this.activeBooking.afterVerification.isApprovedByCustomer = true;
    this.notifications.unshift({
      id: `notif-${Date.now()}`,
      title: "Work Completion Verified by Customer",
      time: "Just now",
      read: false,
      type: "verification"
    });
    this.notify();
  }

  completeDigitalPayment(method) {
    if (!this.activeBooking) return;
    this.activeBooking.paymentDetails.status = "COMPLETED";
    this.activeBooking.paymentDetails.method = method;
    this.activeBooking.paymentDetails.transactionId = `TXN-UPI-${Math.floor(100000000 + Math.random() * 900000000)}`;
    this.activeBooking.paymentDetails.paidAt = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    this.notifications.unshift({
      id: `notif-${Date.now()}`,
      title: `Payment Successful: ₹${this.activeBooking.pricing.total} via ${method}`,
      time: "Just now",
      read: false,
      type: "payment"
    });

    this.setBookingStage(8); // Move to Invoice
  }

  submitRating(rating, reviewText, tip) {
    if (!this.activeBooking) return;
    this.activeBooking.ratingFeedback.rating = rating;
    this.activeBooking.ratingFeedback.review = reviewText;
    this.activeBooking.ratingFeedback.tipAmount = tip;
    this.activeBooking.ratingFeedback.submitted = true;

    // AI Platform Update
    this.notifications.unshift({
      id: `notif-${Date.now()}`,
      title: "Cooperative AI Platform: Worker Quality Index & Welfare Bonus Updated",
      time: "Just now",
      read: false,
      type: "ai"
    });

    this.setBookingStage(9); // Completed
  }

  // Worker Side Actions
  toggleWorkerOnline() {
    this.workerState.isOnline = !this.workerState.isOnline;
    this.notify();
  }

  acceptWorkerJob(requestId) {
    this.workerState.pendingRequests = this.workerState.pendingRequests.filter(r => r.id !== requestId);
    this.notifications.unshift({
      id: `notif-${Date.now()}`,
      title: `Worker Rajesh Kumar Accepted Job #${requestId}`,
      time: "Just now",
      read: false,
      type: "job"
    });
    this.notify();
  }

  // Admin Dynamic Service Addition
  addNewService(newService) {
    this.services.unshift(newService);
    this.notifications.unshift({
      id: `notif-${Date.now()}`,
      title: `New Cooperative Service Published: ${newService.name}`,
      time: "Just now",
      read: false,
      type: "admin"
    });
    this.notify();
  }
}

// Global App State Instance
const appStore = new AppState();
