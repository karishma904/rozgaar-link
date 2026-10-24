// ==========================================================================
// DATA LAYER: Engineering Technical Services Platform ("TechFixr")
// ==========================================================================

// ============================================================
// MACHINE & FAULT IDENTIFICATION DATA
// Organized by engineering discipline category
// ============================================================
const ENGINEERING_FAULT_DATA = {

  // --- Electrical Engineering ---
  'cat-electrical': [
    {
      id: 'eq-ac', name: 'Air Conditioner', icon: '❄️',
      parts: [
        'Compressor Fault', 'Fan Motor Fault', 'PCB / Control Board Fault',
        'Capacitor Fault', 'Gas / Refrigerant Leak', 'Thermostat Fault',
        'Wiring / Electrical Fault', 'Remote / Display Panel Fault',
        'Entire Unit Not Working', 'Not Sure / Other Fault'
      ]
    },
    {
      id: 'eq-wm', name: 'Washing Machine', icon: '🫧',
      parts: [
        'Motor Fault', 'Dryer / Spin Function Fault', 'Drum Fault',
        'Water Inlet Valve Fault', 'Drain Pump Fault', 'Belt Fault',
        'Control Board Fault', 'Wiring or Electrical Fault',
        'Entire Machine Fault', 'Not Sure / Other Fault'
      ]
    },
    {
      id: 'eq-fridge', name: 'Refrigerator', icon: '🧊',
      parts: [
        'Compressor Fault', 'Thermostat Fault', 'Defrost Timer Fault',
        'Door Gasket / Seal Fault', 'Evaporator Fan Fault',
        'Capacitor / Relay Fault', 'Control Board Fault',
        'Entire Unit Not Cooling', 'Not Sure / Other Fault'
      ]
    },
    {
      id: 'eq-motor', name: 'Electric Motor', icon: '⚙️',
      parts: [
        'Winding Fault (Burnt Coil)', 'Bearing Fault', 'Capacitor Fault',
        'Overload Relay Fault', 'Shaft / Coupling Fault',
        'Starter / Contactor Fault', 'Insulation Failure',
        'Motor Not Starting', 'Not Sure / Other Fault'
      ]
    },
    {
      id: 'eq-generator', name: 'Generator / DG Set', icon: '🔋',
      parts: [
        'Starting System Fault', 'AVR (Voltage Regulator) Fault', 'Alternator Fault',
        'Fuel System Fault', 'Cooling System Fault', 'Control Panel Fault',
        'Battery / Charging Fault', 'Governor Fault',
        'Entire Generator Failure', 'Not Sure / Other Fault'
      ]
    },
    {
      id: 'eq-panel', name: 'Electrical Panel / MCB Board', icon: '⚡',
      parts: [
        'MCB / Breaker Tripping', 'Earth Leakage (ELCB Fault)', 'Fuse Blown',
        'Loose / Burnt Wiring', 'Neutral Fault', 'Overload Fault',
        'Phase Failure', 'Bus Bar Fault', 'Not Sure / Other Fault'
      ]
    },
    {
      id: 'eq-pump-elec', name: 'Water Pump (Electrical)', icon: '💧',
      parts: [
        'Motor Fault', 'Capacitor Fault', 'Impeller Fault',
        'Pressure Switch Fault', 'Wiring / Starter Fault',
        'Pump Not Priming', 'Low Pressure Issue', 'Not Sure / Other Fault'
      ]
    },
    {
      id: 'eq-other-elec', name: 'Other Electrical Equipment', icon: '🔌',
      parts: ['Electrical Wiring Issue', 'Power Supply Fault', 'Component Failure', 'Not Sure / Other Fault']
    }
  ],

  // --- Electronics Engineering ---
  'cat-electronics': [
    {
      id: 'eq-cctv', name: 'CCTV / Surveillance System', icon: '📹',
      parts: [
        'Camera Not Working', 'DVR / NVR Fault', 'Hard Disk Fault',
        'Power Supply Fault', 'Cabling / Signal Fault', 'Mobile Streaming Not Working',
        'Night Vision Fault', 'Not Sure / Other Fault'
      ]
    },
    {
      id: 'eq-computer', name: 'Computer / Laptop', icon: '💻',
      parts: [
        'Motherboard Fault', 'Power Supply Fault', 'RAM Fault', 'SSD / HDD Fault',
        'Display / Screen Fault', 'Battery Fault', 'Keyboard / Touchpad Fault',
        'Overheating Issue', 'OS / Software Issue', 'Not Sure / Other Fault'
      ]
    },
    {
      id: 'eq-ups', name: 'UPS / Inverter', icon: '🔋',
      parts: [
        'Battery Fault', 'Charging Circuit Fault', 'Inverter Output Fault',
        'Control Board Fault', 'Display Fault', 'Not Sure / Other Fault'
      ]
    },
    {
      id: 'eq-plc', name: 'PLC / Industrial Controller', icon: '🖥️',
      parts: [
        'I/O Module Fault', 'CPU Fault', 'Communication Fault', 'Power Supply Fault',
        'Programming / Software Issue', 'Sensor Wiring Fault', 'Not Sure / Other Fault'
      ]
    },
    {
      id: 'eq-telecom', name: 'Networking / Telecom Equipment', icon: '📡',
      parts: [
        'Router / Switch Fault', 'Cable / Wiring Fault', 'Signal Interference',
        'Power Adapter Fault', 'Port Failure', 'Not Sure / Other Fault'
      ]
    },
    {
      id: 'eq-other-elx', name: 'Other Electronics Equipment', icon: '🔧',
      parts: ['Circuit Board Fault', 'Component Failure', 'Wiring Issue', 'Not Sure / Other Fault']
    }
  ],

  // --- Mechanical Engineering ---
  'cat-mechanical': [
    {
      id: 'eq-pump-mech', name: 'Centrifugal / Industrial Pump', icon: '🌀',
      parts: [
        'Impeller Wear / Damage', 'Bearing Failure', 'Shaft Seal Leak',
        'Cavitation Issue', 'Coupling Fault', 'Casing Crack',
        'Vibration / Noise Issue', 'Not Sure / Other Fault'
      ]
    },
    {
      id: 'eq-compressor', name: 'Air Compressor', icon: '💨',
      parts: [
        'Piston / Valve Fault', 'Belt Wear / Breakage', 'Oil Leak',
        'Safety Valve Fault', 'Motor Overheating', 'Pressure Not Building',
        'Noise / Vibration Issue', 'Not Sure / Other Fault'
      ]
    },
    {
      id: 'eq-hvac', name: 'HVAC / Industrial Ventilation', icon: '🌬️',
      parts: [
        'Blower Motor Fault', 'Duct Blockage', 'Coil Fouling',
        'Damper / Actuator Fault', 'Refrigerant Issue', 'Control System Fault',
        'Entire System Not Working', 'Not Sure / Other Fault'
      ]
    },
    {
      id: 'eq-industrial', name: 'Industrial Machinery / Production Equipment', icon: '🏭',
      parts: [
        'Gearbox / Transmission Fault', 'Hydraulic System Fault', 'Pneumatic System Fault',
        'Belt / Chain Drive Fault', 'Bearing Failure', 'Coupling / Shaft Fault',
        'Lubrication System Issue', 'Not Sure / Other Fault'
      ]
    },
    {
      id: 'eq-vehicle', name: 'Vehicle / Automotive (Mechanical)', icon: '🚗',
      parts: [
        'Engine Fault', 'Gearbox / Transmission Fault', 'Brake System Fault',
        'Suspension / Steering Fault', 'Cooling System Fault', 'Exhaust Fault',
        'Battery / Electrical Fault', 'Not Sure / Other Fault'
      ]
    },
    {
      id: 'eq-other-mech', name: 'Other Mechanical Equipment', icon: '⚙️',
      parts: ['Mechanical Wear Issue', 'Alignment Problem', 'Lubrication Issue', 'Structural Fault', 'Not Sure / Other Fault']
    }
  ],

  // --- Civil Engineering ---
  'cat-civil': [
    {
      id: 'eq-structure', name: 'Building Structure / Foundation', icon: '🏗️',
      parts: [
        'Cracks in Wall / Foundation', 'Roof Slab Damage', 'Column / Beam Defect',
        'Settlement / Subsidence Issue', 'Waterproofing Failure', 'Not Sure / Other Fault'
      ]
    },
    {
      id: 'eq-drainage', name: 'Drainage / Sewerage System', icon: '🌊',
      parts: [
        'Drain Blockage', 'Pipe Burst / Leak', 'Sewer Line Fault',
        'Manhole Overflow', 'Storm Drain Issue', 'Not Sure / Other Fault'
      ]
    },
    {
      id: 'eq-waterdist', name: 'Water Supply / Distribution', icon: '🚰',
      parts: [
        'Pipeline Leak', 'Valve Failure', 'Pressure Issue', 'Contamination Issue',
        'Pump Station Fault', 'Water Tank Damage', 'Not Sure / Other Fault'
      ]
    },
    {
      id: 'eq-concrete', name: 'Concrete / RCC Work', icon: '🧱',
      parts: [
        'Crack in Concrete', 'Spalling / Deterioration', 'Rebar Corrosion',
        'Surface Delamination', 'Construction Defect', 'Not Sure / Other Fault'
      ]
    },
    {
      id: 'eq-road', name: 'Road / Pavement', icon: '🛣️',
      parts: [
        'Pothole / Crack', 'Surface Degradation', 'Drainage Issue',
        'Retaining Wall Damage', 'Erosion / Landslip', 'Not Sure / Other Fault'
      ]
    },
    {
      id: 'eq-other-civil', name: 'Other Civil Structure / Site', icon: '🏛️',
      parts: ['Structural Defect', 'Material Failure', 'Drainage Issue', 'Not Sure / Other Fault']
    }
  ],

  // --- Computer & IT Engineering ---
  'cat-it': [
    {
      id: 'eq-server', name: 'Server / Rack Equipment', icon: '🖧',
      parts: [
        'Hardware Failure (HDD / RAM / CPU)', 'Power Supply Fault', 'Overheating Issue',
        'Network / NIC Fault', 'OS / Software Crash', 'RAID Fault', 'Not Sure / Other Fault'
      ]
    },
    {
      id: 'eq-network', name: 'Network Infrastructure', icon: '🌐',
      parts: [
        'Router / Switch Fault', 'Cabling Fault', 'Firewall Issue',
        'DNS / IP Config Issue', 'Bandwidth / Speed Problem', 'Not Sure / Other Fault'
      ]
    },
    {
      id: 'eq-software', name: 'Software / Application System', icon: '💾',
      parts: [
        'Application Crash', 'Database Fault', 'Integration Issue',
        'Performance Issue', 'Security / Vulnerability', 'Deployment Issue', 'Not Sure / Other Fault'
      ]
    },
    {
      id: 'eq-embedded', name: 'Embedded / IoT System', icon: '📟',
      parts: [
        'Firmware Issue', 'Sensor Fault', 'Communication Protocol Fault',
        'Power Management Issue', 'Hardware Fault', 'Not Sure / Other Fault'
      ]
    },
    {
      id: 'eq-other-it', name: 'Other IT / Computer System', icon: '🖥️',
      parts: ['Software Issue', 'Hardware Failure', 'Network Problem', 'Not Sure / Other Fault']
    }
  ]
};

const INITIAL_DATA = {
  // Official Organization Information (Verified: alarduniversity.edu.in)
  organization: {
    id: "ORG-ALARD-01",
    name: "ALARD University, Pune",
    shortName: "ALARD University",
    campus: "ALARD Knowledge Park",
    address: "ALARD Knowledge Park, Survey No. 47 and 50, Near Rajiv Gandhi IT Park, Marunji, Hinjawadi, Pune, Maharashtra 411057, India",
    city: "Pune",
    state: "Maharashtra",
    pincode: "411057",
    verified: true,
    officialWebsite: "https://alarduniversity.edu.in",
    verifiedSource: "Official University Portal (alarduniversity.edu.in)",
    lastUpdated: "2026-10-24"
  },

  // Role-Based Authenticatable Accounts
  authUsers: [
    {
      id: "CUST-9014",
      name: "Kartikey",
      email: "kartikey@alard.edu.in",
      role: "customer",
      roleLabel: "Customer",
      password: "Password@123",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80",
      phone: "+91 98765 43210",
      organization: "ALARD University, Pune",
      allowedRoles: ["customer"]
    },
    {
      id: "WRK-MTH-101",
      name: "Rajesh Kumar",
      email: "rajesh.kumar@techfixr.org",
      role: "worker",
      roleLabel: "Senior Electrical Engineer",
      password: "Password@123",
      avatar: "assets/worker_rajesh.jpg",
      phone: "+91 94123 45678",
      grade: "A",
      organization: "ALARD Engineering & Technical Services Society",
      allowedRoles: ["worker"]
    },
    {
      id: "ADMIN-ALARD-01",
      name: "Corporate Administrator",
      email: "admin@alard.edu.in",
      role: "admin",
      roleLabel: "Corporate Admin",
      password: "Password@123",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      phone: "+91 20 2765 8900",
      organization: "ALARD University, Pune",
      allowedRoles: ["admin", "coop"]
    }
  ],

  customer: {
    id: "CUST-9014",
    name: "Kartikey",
    phone: "+91 98765 43210",
    email: "kartikey@alard.edu.in",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80",
    rating: 4.95,
    totalBookings: 18,
    activeLocation: {
      id: "loc-1",
      label: "Campus",
      address: "ALARD University, ALARD Knowledge Park, Survey No. 47 & 50, Near Rajiv Gandhi IT Park, Marunji, Hinjawadi, Pune, Maharashtra 411057, India",
      city: "Pune",
      pincode: "411057",
      isDefault: true
    },
    savedAddresses: [
      { id: "loc-1", label: "Campus", address: "ALARD University, ALARD Knowledge Park, Survey No. 47 & 50, Near Rajiv Gandhi IT Park, Marunji, Hinjawadi, Pune, Maharashtra 411057, India", pincode: "411057", isDefault: true },
      { id: "loc-2", label: "Academic Block", address: "Academic Block, Dept. of Engineering, ALARD University, Marunji, Hinjawadi, Pune", pincode: "411057", isDefault: false },
      { id: "loc-3", label: "Off-Campus Residence", address: "Hinjawadi Phase 2, Near Rajiv Gandhi IT Park, Pune", pincode: "411057", isDefault: false }
    ],
    walletBalance: 850
  },

  cooperatives: [
    {
      id: "COOP-MTH-01",
      name: "ALARD Technical & Engineering Professionals Cooperative",
      shortName: "ALARD Tech Coop",
      registrationNo: "MH-PUN-COOP-4102/2016",
      established: 2016,
      totalWorkers: 340,
      activeWorkers: 184,
      welfareFundPool: "₹4,82,500",
      rating: 4.88,
      address: "ALARD Knowledge Park, Survey No. 47 & 50, Hinjawadi, Pune, MH",
      contact: "+91 20 2765 8912"
    },
    {
      id: "COOP-BRAJ-02",
      name: "Braj Technical & Electronics Engineers Cooperative",
      shortName: "Braj Tech Engg Coop",
      registrationNo: "UP-MTH-COOP-6721/2018",
      established: 2018,
      totalWorkers: 215,
      activeWorkers: 142,
      welfareFundPool: "₹2,95,000",
      rating: 4.85,
      address: "Vrindavan Link Road, Chhatikara, Mathura",
      contact: "+91 565 255 1199"
    },
    {
      id: "COOP-YAMUNA-03",
      name: "Yamuna Civil & Mechanical Engineers Society",
      shortName: "Yamuna Civil-Mech Coop",
      registrationNo: "UP-MTH-COOP-8830/2020",
      established: 2020,
      totalWorkers: 180,
      activeWorkers: 98,
      welfareFundPool: "₹1,90,400",
      rating: 4.79,
      address: "Raya Road, Near Old Bridge, Mathura",
      contact: "+91 565 246 3320"
    }
  ],

  categories: [
    { id: "cat-all",        name: "All Services",          icon: "grid",           description: "All engineering & technical services" },
    { id: "cat-electrical", name: "Electrical Engg",       icon: "zap",            description: "Electrical systems, motors, generators, panels" },
    { id: "cat-electronics",name: "Electronics & IT Engg", icon: "cpu",            description: "Electronics, CCTV, computers, PLC, networking" },
    { id: "cat-mechanical", name: "Mechanical Engg",       icon: "tool",           description: "Pumps, compressors, HVAC, industrial machinery" },
    { id: "cat-civil",      name: "Civil Engg",            icon: "layers",         description: "Structures, drainage, water supply, concrete" },
    { id: "cat-it",         name: "Computer & IT Engg",    icon: "monitor",        description: "Servers, networks, software, embedded systems" },
    { id: "cat-emergency",  name: "Emergency SOS",         icon: "alert-triangle", description: "Priority dispatch for urgent engineering crises" }
  ],

  services: [
    // ELECTRICAL ENGINEERING
    {
      id: "srv-elec-inst",
      categoryId: "cat-electrical",
      categoryName: "ELECTRICAL ENGINEERING",
      name: "Electrical Installation & Repair",
      shortDesc: "Wiring, switchboards, MCBs, earthing, load balancing & safety checks",
      fullDesc: "Comprehensive domestic and industrial electrical repair by licensed cooperative engineers. Includes load testing, short-circuit troubleshooting, switchboard installation, and safety earthing checks.",
      icon: "zap",
      basePrice: 299,
      duration: "60–90 mins",
      isPopular: true,
      isEmergency: true,
      popularTag: "Most Requested",
      gradePricing: { A: 549, B: 399, C: 299 },
      requirementsPlaceholder: "e.g., Sparks from DB panel, MCB tripping repeatedly, wiring upgrade needed."
    },
    {
      id: "srv-motor",
      categoryId: "cat-electrical",
      categoryName: "ELECTRICAL ENGINEERING",
      name: "Electric Motor Repair",
      shortDesc: "Winding rewind, bearing replacement, capacitor fix, starter & overload relay",
      fullDesc: "Expert motor repair for domestic and industrial motors. Winding testing, insulation resistance check, bearing replacement, and starter contactor repair.",
      icon: "activity",
      basePrice: 399,
      duration: "60–120 mins",
      isPopular: true,
      isEmergency: false,
      popularTag: "Industrial Grade",
      gradePricing: { A: 699, B: 499, C: 399 },
      requirementsPlaceholder: "e.g., 5 HP induction motor humming but not starting, burnt smell from winding."
    },
    {
      id: "srv-generator",
      categoryId: "cat-electrical",
      categoryName: "ELECTRICAL ENGINEERING",
      name: "Generator / DG Set Repair",
      shortDesc: "AVR fault, alternator, governor, control panel & startup diagnostics",
      fullDesc: "Complete DG set repair covering AVR calibration, alternator testing, fuel system inspection, cooling system check, and control panel repair.",
      icon: "zap",
      basePrice: 499,
      duration: "90–180 mins",
      isPopular: false,
      isEmergency: true,
      gradePricing: { A: 849, B: 649, C: 499 },
      requirementsPlaceholder: "e.g., Generator starts but trips within 30 seconds, low voltage output."
    },
    {
      id: "srv-ac-engg",
      categoryId: "cat-electrical",
      categoryName: "ELECTRICAL ENGINEERING",
      name: "AC / Refrigerator Repair & Diagnostics",
      shortDesc: "Compressor, PCB, gas refill, thermostat, capacitor & HVAC diagnostics",
      fullDesc: "High-pressure foam cleaning, cooling coil check, compressor amp testing, PCB circuit repair, and refrigerant leak detection with warranty.",
      icon: "wind",
      basePrice: 349,
      duration: "60–90 mins",
      isPopular: true,
      isEmergency: true,
      popularTag: "High Demand",
      gradePricing: { A: 599, B: 449, C: 349 },
      requirementsPlaceholder: "e.g., AC blowing warm air, outdoor unit vibrating loudly, compressor not starting."
    },
    {
      id: "srv-wm-repair",
      categoryId: "cat-electrical",
      categoryName: "ELECTRICAL ENGINEERING",
      name: "Washing Machine Repair",
      shortDesc: "Motor, drum, drain pump, inlet valve, belt, PCB & spin cycle repair",
      fullDesc: "Automatic and semi-automatic washing machine repairs. Inlet valve clean, pulsator gear replacement, drum bearing balancing, and PCB circuit testing.",
      icon: "refresh-cw",
      basePrice: 299,
      duration: "60 mins",
      isPopular: false,
      isEmergency: false,
      gradePricing: { A: 549, B: 399, C: 299 },
      requirementsPlaceholder: "e.g., Machine stopping mid-drain with E4 error code, drum not rotating."
    },
    {
      id: "srv-panel",
      categoryId: "cat-electrical",
      categoryName: "ELECTRICAL ENGINEERING",
      name: "Electrical Panel & MCB Board Service",
      shortDesc: "MCB upgrade, ELCB fitting, busbar repair, phase failure & earthing",
      fullDesc: "Panel board servicing including MCB replacement, earth leakage circuit breaker installation, busbar tightening, and complete safety audit.",
      icon: "zap",
      basePrice: 349,
      duration: "60–90 mins",
      isPopular: false,
      isEmergency: true,
      gradePricing: { A: 599, B: 449, C: 349 },
      requirementsPlaceholder: "e.g., ELCB tripping randomly, phase failure on DB, burning smell from panel."
    },
    {
      id: "srv-pump",
      categoryId: "cat-electrical",
      categoryName: "ELECTRICAL ENGINEERING",
      name: "Water Pump Installation & Repair",
      shortDesc: "Motor, capacitor, impeller, pressure switch & starter repair",
      fullDesc: "Domestic and agricultural pump repair. Motor winding check, capacitor replacement, impeller servicing, and pressure switch calibration.",
      icon: "droplet",
      basePrice: 299,
      duration: "60 mins",
      isPopular: true,
      isEmergency: false,
      gradePricing: { A: 549, B: 399, C: 299 },
      requirementsPlaceholder: "e.g., Submersible pump running but no water flow, humming noise."
    },

    // ELECTRONICS & IT ENGINEERING
    {
      id: "srv-cctv",
      categoryId: "cat-electronics",
      categoryName: "ELECTRONICS & IT ENGINEERING",
      name: "CCTV / Surveillance System",
      shortDesc: "Camera setup, DVR configuration, mobile streaming & cabling",
      fullDesc: "Security surveillance installation and troubleshooting for homes, factories, and offices.",
      icon: "video",
      basePrice: 349,
      duration: "90 mins",
      isPopular: true,
      isEmergency: false,
      popularTag: "Security Tech",
      gradePricing: { A: 599, B: 449, C: 349 },
      requirementsPlaceholder: "e.g., Camera 2 offline on mobile app, DVR hard disk error."
    },
    {
      id: "srv-comp",
      categoryId: "cat-electronics",
      categoryName: "ELECTRONICS & IT ENGINEERING",
      name: "Computer / Laptop Repair",
      shortDesc: "OS reinstall, SSD upgrade, thermal paste, display & battery replacement",
      fullDesc: "Hardware and software troubleshooting by certified computer engineers.",
      icon: "monitor",
      basePrice: 299,
      duration: "60 mins",
      isPopular: true,
      isEmergency: false,
      gradePricing: { A: 549, B: 399, C: 299 },
      requirementsPlaceholder: "e.g., Windows bluescreen crash, laptop overheating, SSD upgrade."
    },
    {
      id: "srv-ups",
      categoryId: "cat-electronics",
      categoryName: "ELECTRONICS & IT ENGINEERING",
      name: "UPS / Inverter Repair",
      shortDesc: "Battery replacement, charging circuit, inverter output & control board",
      fullDesc: "Home and industrial UPS/inverter diagnostics, battery bank replacement, and charging circuit repair.",
      icon: "battery",
      basePrice: 249,
      duration: "45 mins",
      isPopular: false,
      isEmergency: false,
      gradePricing: { A: 449, B: 349, C: 249 },
      requirementsPlaceholder: "e.g., UPS beeping continuously, battery not charging, output voltage low."
    },
    {
      id: "srv-plc",
      categoryId: "cat-electronics",
      categoryName: "ELECTRONICS & IT ENGINEERING",
      name: "PLC / Industrial Controls Repair",
      shortDesc: "I/O module, CPU, HMI, control panel wiring & software diagnostics",
      fullDesc: "Industrial automation repair: PLC I/O testing, HMI troubleshooting, relay panel servicing, and PLC program backup & restore.",
      icon: "cpu",
      basePrice: 599,
      duration: "120 mins",
      isPopular: false,
      isEmergency: true,
      gradePricing: { A: 999, B: 749, C: 599 },
      requirementsPlaceholder: "e.g., PLC I/O module not responding, HMI frozen, machine line stopped."
    },

    // MECHANICAL ENGINEERING
    {
      id: "srv-pump-mech",
      categoryId: "cat-mechanical",
      categoryName: "MECHANICAL ENGINEERING",
      name: "Industrial Pump Repair",
      shortDesc: "Impeller, bearing, shaft seal, cavitation diagnosis & alignment",
      fullDesc: "Centrifugal and positive displacement pump repair. Impeller wear assessment, bearing replacement, mechanical seal servicing, and shaft alignment.",
      icon: "droplet",
      basePrice: 499,
      duration: "90–180 mins",
      isPopular: true,
      isEmergency: false,
      gradePricing: { A: 849, B: 649, C: 499 },
      requirementsPlaceholder: "e.g., Pump vibrating badly, low flow output, mechanical seal leaking."
    },
    {
      id: "srv-compressor",
      categoryId: "cat-mechanical",
      categoryName: "MECHANICAL ENGINEERING",
      name: "Air Compressor Service",
      shortDesc: "Piston, valve, belt, oil leak, pressure build-up & safety valve",
      fullDesc: "Reciprocating and screw compressor repair. Valve grinding, belt replacement, oil leak fixing, safety relief valve testing, and pressure calibration.",
      icon: "wind",
      basePrice: 449,
      duration: "90–150 mins",
      isPopular: false,
      isEmergency: false,
      gradePricing: { A: 749, B: 549, C: 449 },
      requirementsPlaceholder: "e.g., Compressor not building pressure, excessive oil in air, noisy operation."
    },
    {
      id: "srv-hvac-mech",
      categoryId: "cat-mechanical",
      categoryName: "MECHANICAL ENGINEERING",
      name: "HVAC / Industrial Ventilation",
      shortDesc: "Blower, duct, coil, damper, refrigerant & industrial cooling system",
      fullDesc: "Industrial HVAC commissioning and repair. Duct cleaning, coil servicing, damper actuator repair, and refrigerant handling.",
      icon: "wind",
      basePrice: 549,
      duration: "120 mins",
      isPopular: false,
      isEmergency: false,
      gradePricing: { A: 899, B: 699, C: 549 },
      requirementsPlaceholder: "e.g., Industrial chiller not cooling, cooling tower fan vibrating."
    },
    {
      id: "srv-machinery",
      categoryId: "cat-mechanical",
      categoryName: "MECHANICAL ENGINEERING",
      name: "Industrial Machinery Repair",
      shortDesc: "Gearbox, hydraulics, pneumatics, belt drive & precision alignment",
      fullDesc: "Factory and industrial machinery repair including gearbox overhaul, hydraulic system servicing, pneumatic circuit repair, and precision shaft alignment.",
      icon: "tool",
      basePrice: 699,
      duration: "2–6 hours",
      isPopular: true,
      isEmergency: true,
      popularTag: "Industrial",
      gradePricing: { A: 1199, B: 899, C: 699 },
      requirementsPlaceholder: "e.g., CNC machine hydraulic pump failing, gearbox oil leak, conveyor belt slipping."
    },

    // CIVIL ENGINEERING
    {
      id: "srv-structural",
      categoryId: "cat-civil",
      categoryName: "CIVIL ENGINEERING",
      name: "Structural Assessment & Repair",
      shortDesc: "Crack diagnosis, foundation check, RCC, waterproofing & slab repair",
      fullDesc: "Civil structural evaluation and repair. Crack mapping, foundation settlement assessment, RCC repair, waterproofing application, and non-destructive testing.",
      icon: "layers",
      basePrice: 599,
      duration: "2–4 hours",
      isPopular: true,
      isEmergency: false,
      popularTag: "Structural Safety",
      gradePricing: { A: 999, B: 749, C: 599 },
      requirementsPlaceholder: "e.g., Cracks appearing in load-bearing wall, roof slab dampness."
    },
    {
      id: "srv-plumbing-civil",
      categoryId: "cat-civil",
      categoryName: "CIVIL ENGINEERING",
      name: "Drainage & Water Supply Repair",
      shortDesc: "Drain blockage, pipe burst, sewer line, water tank & supply system",
      fullDesc: "Civil drainage and water supply system repair. CCTV drain inspection, pipe relining, sewer line root clearing, and water tank leakage repair.",
      icon: "droplet",
      basePrice: 399,
      duration: "60–180 mins",
      isPopular: true,
      isEmergency: true,
      popularTag: "Emergency Ready",
      gradePricing: { A: 699, B: 499, C: 399 },
      requirementsPlaceholder: "e.g., Underground sewer pipe blocked, water supply pipeline burst."
    },
    {
      id: "srv-concrete",
      categoryId: "cat-civil",
      categoryName: "CIVIL ENGINEERING",
      name: "Concrete & Masonry Repair",
      shortDesc: "Spalling, rebar corrosion, grouting, floor levelling & tile repair",
      fullDesc: "Concrete repair and masonry restoration. Epoxy injection for cracks, rebar corrosion treatment, polymer-modified mortar application, and floor levelling.",
      icon: "layers",
      basePrice: 449,
      duration: "2–4 hours",
      isPopular: false,
      isEmergency: false,
      gradePricing: { A: 749, B: 549, C: 449 },
      requirementsPlaceholder: "e.g., Concrete spalling on parking deck, rebar exposed on bridge column."
    },

    // COMPUTER & IT ENGINEERING
    {
      id: "srv-server",
      categoryId: "cat-it",
      categoryName: "COMPUTER & IT ENGINEERING",
      name: "Server / Data Centre Support",
      shortDesc: "Hardware diagnosis, RAID recovery, OS restore & network config",
      fullDesc: "On-site server troubleshooting including hardware fault diagnosis, RAID rebuild, OS recovery, and network configuration.",
      icon: "monitor",
      basePrice: 699,
      duration: "120 mins",
      isPopular: true,
      isEmergency: true,
      popularTag: "Enterprise",
      gradePricing: { A: 1199, B: 899, C: 699 },
      requirementsPlaceholder: "e.g., Server not booting, RAID array degraded, data centre network down."
    },
    {
      id: "srv-network",
      categoryId: "cat-it",
      categoryName: "COMPUTER & IT ENGINEERING",
      name: "Network Infrastructure Setup & Repair",
      shortDesc: "LAN, Wi-Fi, structured cabling, firewall & VPN configuration",
      fullDesc: "Enterprise and campus network design, structured cabling installation, router/switch configuration, firewall setup, and network troubleshooting.",
      icon: "activity",
      basePrice: 499,
      duration: "90–180 mins",
      isPopular: false,
      isEmergency: false,
      gradePricing: { A: 849, B: 649, C: 499 },
      requirementsPlaceholder: "e.g., Office network very slow, VLAN misconfiguration, Wi-Fi dead zones."
    },
    {
      id: "srv-embedded",
      categoryId: "cat-it",
      categoryName: "COMPUTER & IT ENGINEERING",
      name: "Embedded & IoT System Repair",
      shortDesc: "Firmware, sensor, communication protocol & hardware debugging",
      fullDesc: "Embedded system and IoT device repair including firmware flashing, sensor calibration, communication protocol debugging, and PCB-level diagnosis.",
      icon: "cpu",
      basePrice: 449,
      duration: "60–120 mins",
      isPopular: false,
      isEmergency: false,
      gradePricing: { A: 749, B: 549, C: 449 },
      requirementsPlaceholder: "e.g., Arduino/Raspberry Pi not booting, IoT sensor returning wrong readings."
    }
  ],

  // WORKER GRADES SPECIFICATION
  grades: {
    A: {
      code: "GRADE A",
      badgeTitle: "Senior Engineer",
      stars: 5,
      starsText: "★★★★★",
      experienceText: "8+ Years Experience",
      verificationLevel: "Licensed Professional Engineer (PE) / Govt Certified",
      serviceTier: "Premium Senior Engineer Tier",
      description: "Highly experienced senior engineers with professional certifications, licensed trade credentials, and extensive field experience (1,000+ jobs). Best for complex and critical engineering problems.",
      multiplier: 1.5,
      priceAddon: 150
    },
    B: {
      code: "GRADE B",
      badgeTitle: "Certified Engineer",
      stars: 4.5,
      starsText: "★★★★☆",
      experienceText: "4–7 Years Experience",
      verificationLevel: "Cooperative Verified & Trade Certified",
      serviceTier: "Standard Certified Tier",
      description: "Experienced, thoroughly vetted engineers with proven track records (500+ jobs). Ideal balance of technical skill, reliability, and cooperative value.",
      multiplier: 1.2,
      priceAddon: 80
    },
    C: {
      code: "GRADE C",
      badgeTitle: "Junior Engineer",
      stars: 4.2,
      starsText: "★★★★☆",
      experienceText: "1–3 Years Experience",
      verificationLevel: "Cooperative Apprentice / Diploma Certified",
      serviceTier: "Basic Technical Tier",
      description: "Trained and verified junior engineers guided by senior cooperative mentors. Fully insured, motivated, and suitable for standard technical tasks.",
      multiplier: 1.0,
      priceAddon: 0
    }
  },

  // ENGINEERING WORKER PROFILES
  workers: [
    {
      id: "WRK-MTH-101",
      name: "Rajesh Kumar",
      phone: "+91 94123 45678",
      avatar: "assets/worker_rajesh.jpg",
      grade: "A",
      cooperativeId: "COOP-MTH-01",
      cooperativeName: "Mathura Engineering Professionals Cooperative",
      primaryService: "Electrical Installation & Repair",
      serviceIds: ["srv-elec-inst", "srv-ac-engg", "srv-motor", "srv-panel", "srv-generator"],
      rating: 4.96,
      ratingCount: 312,
      completedJobs: 1420,
      experience: "9 years",
      distance: "1.4 km",
      eta: "8 mins",
      isOnline: true,
      languages: ["Hindi", "Braj Bhasha", "Basic English"],
      skills: ["High-Voltage Wiring", "Inverter/Solar Systems", "PCB Diagnostics", "Motor Rewinding", "Generator Commissioning"],
      hourlyRate: 350,
      badges: ["Licensed Electrician (ITI + Govt Trade Cert)", "Police Clearance 2026", "Cooperative Executive Member", "Zero-Accident Safety Award"],
      bio: "Senior Electrical Engineer with 9 years in Mathura & Vrindavan. Specialised in HV safety, industrial motor repair, and generator commissioning. Proud cooperative member.",
      reviews: [
        { customer: "Dr. Alok Verma", date: "2 days ago", rating: 5, comment: "Rajesh ji identified the faulty capacitor immediately. Solved 3-day mystery in 20 minutes! Very respectful." },
        { customer: "Pooja Singhal", date: "Last week", rating: 5, comment: "Punctual, professional, carried all genuine spares. Highly recommend Grade A service." }
      ]
    },
    {
      id: "WRK-BRAJ-201",
      name: "Amit Verma",
      phone: "+91 98971 12345",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=250&q=80",
      grade: "B",
      cooperativeId: "COOP-BRAJ-02",
      cooperativeName: "Braj Technical & Electronics Engineers Cooperative",
      primaryService: "Electrical Installation & Repair",
      serviceIds: ["srv-elec-inst", "srv-ac-engg", "srv-panel", "srv-wm-repair"],
      rating: 4.82,
      ratingCount: 140,
      completedJobs: 680,
      experience: "5 years",
      distance: "2.8 km",
      eta: "18 mins",
      isOnline: true,
      languages: ["Hindi", "English"],
      skills: ["Switchboard Upgrades", "MCB Box Replacement", "AC Diagnostics", "Washing Machine PCB"],
      hourlyRate: 260,
      badges: ["Trade Diploma (Braj Poly)", "Cooperative Verified", "Safety Insured"],
      bio: "Dependable electrical engineer with 5 years experience across residential and commercial properties in Mathura.",
      reviews: [
        { customer: "Neha Gupta", date: "5 days ago", rating: 5, comment: "Polite and solved the tripping fuse problem quickly. Great value." }
      ]
    },
    {
      id: "WRK-BRAJ-202",
      name: "Sandeep Tiwari",
      phone: "+91 97600 44211",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=250&q=80",
      grade: "A",
      cooperativeId: "COOP-BRAJ-02",
      cooperativeName: "Braj Technical & Electronics Engineers Cooperative",
      primaryService: "CCTV / Surveillance System",
      serviceIds: ["srv-cctv", "srv-comp", "srv-plc", "srv-ups", "srv-network"],
      rating: 4.89,
      ratingCount: 198,
      completedJobs: 890,
      experience: "8 years",
      distance: "1.8 km",
      eta: "12 mins",
      isOnline: true,
      languages: ["Hindi", "English"],
      skills: ["CCTV Installation", "Network Configuration", "PLC Programming", "Industrial Automation", "Server Setup"],
      hourlyRate: 380,
      badges: ["B.Tech Electronics (Verified)", "CCNA Certified", "PLC Siemens Certified", "Police Verified"],
      bio: "Senior Electronics & IT Engineer. 8 years experience in industrial automation, CCTV systems, and enterprise networking. Cooperative's top-rated electronics specialist.",
      reviews: [
        { customer: "Factory Manager, Vrindavan Industrial Estate", date: "Yesterday", rating: 5, comment: "Fixed the PLC fault that had shut down our entire production line. Exceptional expertise." }
      ]
    },
    {
      id: "WRK-YAM-301",
      name: "Deepak Singh",
      phone: "+91 98372 90123",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=250&q=80",
      grade: "C",
      cooperativeId: "COOP-YAMUNA-03",
      cooperativeName: "Yamuna Civil & Mechanical Engineers Society",
      primaryService: "Electrical Installation & Repair",
      serviceIds: ["srv-elec-inst", "srv-wm-repair", "srv-pump"],
      rating: 4.74,
      ratingCount: 65,
      completedJobs: 190,
      experience: "2 years",
      distance: "3.2 km",
      eta: "22 mins",
      isOnline: true,
      languages: ["Hindi"],
      skills: ["Domestic Wiring", "Socket Replacement", "Pump Repair", "Appliance Repair"],
      hourlyRate: 199,
      badges: ["ITI Diploma (Electrician)", "Cooperative Vocational Trainee", "ID Verified"],
      bio: "Enthusiastic junior electrical engineer trained by senior cooperative mentors. Fast, courteous, and affordable for standard domestic electrical tasks.",
      reviews: [
        { customer: "Rahul Yadav", date: "1 week ago", rating: 4.5, comment: "Very humble, fixed pump starter and switchboard socket neatly." }
      ]
    },
    {
      id: "WRK-YAM-302",
      name: "Harish Chandra Mishra",
      phone: "+91 94101 55678",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=250&q=80",
      grade: "A",
      cooperativeId: "COOP-YAMUNA-03",
      cooperativeName: "Yamuna Civil & Mechanical Engineers Society",
      primaryService: "Industrial Machinery Repair",
      serviceIds: ["srv-machinery", "srv-pump-mech", "srv-compressor", "srv-hvac-mech"],
      rating: 4.97,
      ratingCount: 420,
      completedJobs: 2150,
      experience: "14 years",
      distance: "2.5 km",
      eta: "15 mins",
      isOnline: true,
      languages: ["Hindi", "English"],
      skills: ["Gearbox Overhaul", "Hydraulic Systems", "Industrial Pump Repair", "Shaft Alignment", "Compressor Servicing"],
      hourlyRate: 420,
      badges: ["B.E. Mechanical (Agra Univ)", "Certified Maintenance Engineer", "Zero-Downtime Safety Award"],
      bio: "14-year veteran Mechanical Engineer. Expert in gearbox, hydraulics, industrial machinery, and precision alignment. Cooperative's highest-rated mechanical specialist.",
      reviews: [
        { customer: "Plant Manager, Krishna Industries Mathura", date: "4 days ago", rating: 5, comment: "Aligned our centrifugal pump perfectly. Vibration gone completely. Outstanding work." }
      ]
    },
    {
      id: "WRK-MTH-103",
      name: "Dr. Kavya Sharma",
      phone: "+91 98970 88214",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=250&q=80",
      grade: "A",
      cooperativeId: "COOP-MTH-01",
      cooperativeName: "Mathura Engineering Professionals Cooperative",
      primaryService: "Structural Assessment & Repair",
      serviceIds: ["srv-structural", "srv-plumbing-civil", "srv-concrete"],
      rating: 4.94,
      ratingCount: 160,
      completedJobs: 940,
      experience: "10 years",
      distance: "1.9 km",
      eta: "10 mins",
      isOnline: true,
      languages: ["Hindi", "English"],
      skills: ["Structural Analysis", "Non-Destructive Testing", "RCC Repair", "Waterproofing", "Drainage Design"],
      hourlyRate: 400,
      badges: ["M.Tech Civil (IIT Roorkee)", "Licensed Structural Engineer", "MoRTH Empanelled"],
      bio: "Senior Civil Engineer with 10 years in structural assessment, RCC repair, and infrastructure project management. Cooperative's lead civil specialist.",
      reviews: [
        { customer: "Housing Society Committee, Mathura", date: "Last month", rating: 5, comment: "Diagnosed the foundation crack issue precisely and recommended the most cost-effective repair. Professional and trustworthy." }
      ]
    }
  ],

  // COOPERATIVE DARK STORE / SPARE PARTS INVENTORY
  sparePartsInventory: [
    {
      id: "PART-CAP-45",
      name: "45µF Heavy-Duty AC Run Capacitor",
      category: "AC & Electrical",
      compatibility: "1.0T – 2.0T Split & Window ACs",
      coopPrice: 420,
      mrp: 650,
      stockCount: 48,
      warehouse: "Hinjawadi Central Store (ALARD Knowledge Park)",
      deliveryTime: "10–15 mins",
      inStock: true,
      partNumber: "CAP-450V-45UF-AL"
    },
    {
      id: "PART-MCB-32",
      name: "Havells 32A C-Curve Dual Pole MCB",
      category: "Electrical",
      compatibility: "Main DB & Heavy Load Inverter lines",
      coopPrice: 380,
      mrp: 520,
      stockCount: 65,
      warehouse: "Hinjawadi Central Store (ALARD Knowledge Park)",
      deliveryTime: "10–12 mins",
      inStock: true,
      partNumber: "MCB-DP-32A-10KA"
    },
    {
      id: "PART-BEARING-6205",
      name: "SKF 6205 Deep Groove Ball Bearing",
      category: "Mechanical",
      compatibility: "Electric Motors, Pumps & Industrial Machinery",
      coopPrice: 310,
      mrp: 480,
      stockCount: 42,
      warehouse: "Yamuna Mech Hub, Mathura",
      deliveryTime: "15 mins",
      inStock: true,
      partNumber: "SKF-6205-2RS"
    },
    {
      id: "PART-SW-MOD",
      name: "Anchor Roma 16A Modular Switch & Socket Set",
      category: "Electrical",
      compatibility: "Geyser, AC & Heavy Load appliances",
      coopPrice: 220,
      mrp: 320,
      stockCount: 110,
      warehouse: "Hinjawadi Central Store (ALARD Knowledge Park)",
      deliveryTime: "10 mins",
      inStock: true,
      partNumber: "ROMA-16A-CMB"
    },
    {
      id: "PART-SEAL-MECH",
      name: "Standard Mechanical Seal (25mm)",
      category: "Mechanical",
      compatibility: "Centrifugal pumps & industrial rotating equipment",
      coopPrice: 850,
      mrp: 1400,
      stockCount: 22,
      warehouse: "Yamuna Mech Hub, Mathura",
      deliveryTime: "15 mins",
      inStock: true,
      partNumber: "SEAL-25MM-CR"
    }
  ],

  // INITIAL ACTIVE BOOKING FOR REAL-TIME SIMULATION
  initialActiveBooking: {
    id: "ENG-2026-88219",
    serviceId: "srv-ac-engg",
    serviceName: "AC / Refrigerator Repair & Diagnostics",
    categoryName: "ELECTRICAL ENGINEERING",
    workerId: "WRK-MTH-101",
    workerName: "Rajesh Kumar",
    workerAvatar: "assets/worker_rajesh.jpg",
    workerGrade: "A",
    workerPhone: "+91 94123 45678",
    cooperativeName: "Mathura Engineering Professionals Cooperative",
    cooperativeReg: "UP-MTH-COOP-4102/2014",
    location: "Campus: ALARD University, Marunji, Hinjawadi, Pune 411057",
    scheduledTime: "Today • Immediate Priority",
    createdAt: "2026-10-02 20:15",

    currentStageIndex: 2,
    eta: "8 mins",
    distance: "1.4 km",
    speed: "28 km/h",

    // Structured fault report
    faultReport: {
      machine: "Air Conditioner",
      suspectedPart: "Capacitor Fault",
      description: "Split AC outdoor condenser humming but fan not rotating. Indoor unit blows warm air."
    },

    pricing: {
      baseCharge: 349,
      gradeAddon: 150,
      gradeTitle: "GRADE A Senior Engineer",
      partRequired: true,
      selectedPart: {
        id: "PART-CAP-45",
        name: "45µF Heavy-Duty AC Run Capacitor",
        price: 420,
        warehouse: "Cooperative Engineering Dark Store #1",
        runnerETA: "Delivered on site"
      },
      cooperativeWelfareFund: 45,
      platformTechFee: 35,
      taxGST: 40,
      total: 1039
    },

    customerRequirement: "Machine: Air Conditioner | Suspected Part: Capacitor | Problem: Split AC outdoor condenser humming but fan not rotating. Indoor unit blows ambient warm air.",
    customerPhoto: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80",

    beforeVerification: {
      uploaded: true,
      photo: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80",
      workerNotes: "Inspected condenser assembly: Old 45uF capacitor bulged with dielectric leak. Contactor points need cleaning. Replacement part required from cooperative inventory.",
      timestamp: "20:25 PM",
      isApprovedByCustomer: true
    },

    afterVerification: {
      uploaded: false,
      photo: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=600&q=80",
      workerNotes: "New 45uF capacitor installed with insulated spade lugs. Refrigerant pressure stable at 128 PSI. Amp draw normal at 5.2A. Air vent temperature measured 15.8°C.",
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
  },

  // BOOKING HISTORY
  bookingHistory: [
    {
      id: "ENG-2026-79110",
      serviceName: "Electrical Panel & MCB Board Service",
      workerName: "Rajesh Kumar",
      workerGrade: "A",
      date: "Sep 24, 2026",
      status: "COMPLETED",
      amount: 499,
      cooperative: "Mathura Engineering Professionals Cooperative",
      rating: 5
    },
    {
      id: "ENG-2026-64192",
      serviceName: "Industrial Pump Bearing Replacement",
      workerName: "Harish Chandra Mishra",
      workerGrade: "A",
      date: "Aug 18, 2026",
      status: "COMPLETED",
      amount: 849,
      cooperative: "Yamuna Civil & Mechanical Engineers Society",
      rating: 5
    },
    {
      id: "ENG-2026-51203",
      serviceName: "CCTV Installation (16-Camera System)",
      workerName: "Sandeep Tiwari",
      workerGrade: "A",
      date: "Jul 11, 2026",
      status: "COMPLETED",
      amount: 1200,
      cooperative: "Braj Technical & Electronics Engineers Cooperative",
      rating: 5
    }
  ],

  // EMERGENCY CATEGORIES — Engineering specific
  emergencyCategories: [
    { id: "emg-elec", title: "Electrical Emergency", desc: "Sparks, burning smell, power cut", icon: "zap", responseTime: "Under 12 mins" },
    { id: "emg-motor", title: "Motor / Generator Failure", desc: "Production stoppeddue to equipment failure", icon: "activity", responseTime: "Under 20 mins" },
    { id: "emg-structural", title: "Structural Emergency", desc: "Cracks, collapse risk, flooding", icon: "alert-triangle", responseTime: "Under 15 mins" },
    { id: "emg-network", title: "Network / Server Down", desc: "Critical IT outage, data loss risk", icon: "monitor", responseTime: "Under 15 mins" },
    { id: "emg-hvac", title: "HVAC / Cooling Failure", desc: "Server room cooling down, AC failure", icon: "wind", responseTime: "Under 20 mins" }
  ],

  // AI INTELLIGENCE SYSTEM STATS
  aiInsights: {
    matchingAccuracy: "99.4%",
    avgResponseTime: "11.8 mins",
    demandPrediction: "High Demand Expected Tomorrow for AC & Electrical Services (Temperature 39°C)",
    fairPricingCompliance: "100% (No Surge Pricing Detected)",
    fakeReviewFlags: "0 Detected (100% Cooperative Vetted Reviews)",
    photoDiagnosticsAccuracy: "96.2% on Electrical & Mechanical Faults"
  }
};
