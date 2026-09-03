/**
 * Ottawa Personal AI Builder & Relocation Data Hub
 * 7-Day Rapid Action Plan Edition (Nocturnal Power & Day-Sleep Architecture)
 */

const OTTAWA_DATA = {
  userProfile: {
    name: "Jordan",
    role: "AI Builder & Tech Operator",
    superpower: "Rapid Prototyping & Generative Workflows (5x speed)",
    targetRent: "$700 – $950 / mo ($800 optimal)",
    targetAreas: "Sandy Hill / Centretown",
    smokerStatus: "Smoker (Strictly Outdoors / Respectful of indoor smoke-free spaces)",
    basecamp: "Saintlo Ottawa Jail Hostel (75 Nicholas St - 10-Bed Dorm)",
    hostelCheckoutDate: "Monday, Sept 7 (5 nights remaining)",
    housingStatus: "Searching for Room (Move-in by Sept 7)",
    sleepPreference: "Nocturnal Power Operator (Sleeps during quiet day hours when dorms are empty)",
    
    // Confirmed Medical Appointment
    clinicAppointment: {
      venue: "Downtown Urgent Care - Family Practice and Walk-in Clinic",
      address: "158 Rideau Street, Ottawa, ON",
      phone: "+1 (613) 482-9051",
      dateTime: "Thursday, September 3, 2026 @ 11:50 AM",
      checkInTime: "11:35 AM",
      coords: [45.4268, -75.6902],
      distanceFromBasecamp: "220 m (3 min walk)"
    },

    // Financial Architecture
    finances: {
      liquidDebit: 3000,       // $3,000 CAD in debit / checking
      creditAvailable: 2500,   // $2,500 CAD in credit line
      cashReserveHome: 3000,   // $3,000 CAD cash back home
      totalLiquidityBuffer: 8500, // $8,500 total financial safety net
      guaranteedMonthlyIncome: 1300 // $1,300/mo guaranteed inflow
    },
    
    cashStrategy: "Daily Pay Temp Staffing Agencies + Remote AI Tasking (No Restaurants)"
  },

  // FOOD RECOMMENDATION MAP DIRECTORY (BREAKFAST, LUNCH, DINNER, LATE NIGHT)
  foodMapDirectory: [
    // --- BREAKFAST & MORNING FUEL ---
    {
      id: "food-b1",
      name: "Saintlo Jail Free Breakfast",
      mealType: "breakfast",
      categoryName: "🍳 Free Hostel Breakfast",
      address: "75 Nicholas St (Hostel Kitchen)",
      hours: "07:30 AM – 10:00 AM",
      priceRange: "$0.00 (Included)",
      coords: [45.4251, -75.6892],
      distance: "0 m (Inside Basecamp)",
      topPicks: "Bagels with peanut butter, toast, whole grain cereal, black coffee, orange juice",
      nutritionGoal: "Zero-cost morning carbs & caffeine before daily sprint",
      icon: "🍳"
    },
    {
      id: "food-b2",
      name: "Happy Goat Coffee Co.",
      mealType: "breakfast",
      categoryName: "☕ Artisan Coffee & Workspace",
      address: "229 Rideau St / Sandy Hill",
      hours: "07:00 AM – 06:00 PM",
      priceRange: "$3.50 – $8.00",
      coords: [45.4278, -75.6865],
      distance: "350 m (4 min walk)",
      topPicks: "Cold brew / Americano + spinach & egg breakfast wrap",
      nutritionGoal: "High-grade clean caffeine for deep morning flow state",
      icon: "☕"
    },
    {
      id: "food-b3",
      name: "Bridgehead Coffee Dalhousie",
      mealType: "breakfast",
      categoryName: "☕ Coffee & Fast Fuel",
      address: "224 Dalhousie St",
      hours: "07:00 AM – 05:00 PM",
      priceRange: "$4.00 – $9.00",
      coords: [45.4290, -75.6905],
      distance: "450 m (5 min walk)",
      topPicks: "Fair-trade dark roast, oatmeal with seeds, artisan muffin",
      nutritionGoal: "Slow-release carbs and mental priming",
      icon: "☕"
    },
    {
      id: "food-b4",
      name: "Tim Hortons Rideau",
      mealType: "breakfast",
      categoryName: "🥯 24/7 Cheap Breakfast",
      address: "201 Rideau St",
      hours: "Open 24/7",
      priceRange: "$2.50 – $6.00",
      coords: [45.4272, -75.6872],
      distance: "280 m (3 min walk)",
      topPicks: "Egg & cheese English muffin + large black coffee ($4.20)",
      nutritionGoal: "Fast, reliable budget protein at any hour",
      icon: "🥯"
    },

    // --- LUNCH & MIDDAY BRAIN BOOST ---
    {
      id: "food-l1",
      name: "Farm Boy (CF Rideau Level 1)",
      mealType: "lunch",
      categoryName: "🥗 Fresh Hot Bar & Whole Foods",
      address: "50 Rideau St (Mall Level 1)",
      hours: "08:00 AM – 09:00 PM",
      priceRange: "$7.00 – $14.00",
      coords: [45.4258, -75.6920],
      distance: "180 m (2 min walk)",
      topPicks: "Hot salad bar, grilled chicken breast, sushi rolls, fresh berry bowls",
      nutritionGoal: "Clean micronutrients, high protein, zero sluggish food coma",
      icon: "🥗"
    },
    {
      id: "food-l2",
      name: "Giant Tiger (ByWard Market)",
      mealType: "lunch",
      categoryName: "🛒 Ultra-Budget Grocery Hub",
      address: "98 George St",
      hours: "08:00 AM – 09:00 PM",
      priceRange: "$2.00 – $7.00",
      coords: [45.4285, -75.6912],
      distance: "400 m (5 min walk)",
      topPicks: "18-pk eggs ($5.99), bananas ($0.79/lb), peanut butter, bread, canned tuna",
      nutritionGoal: "Maximum nutrient density per dollar spent",
      icon: "🛒"
    },
    {
      id: "food-l3",
      name: "Loblaws Rideau",
      mealType: "lunch",
      categoryName: "🍗 Deli Counter & Groceries",
      address: "363 Rideau St",
      hours: "07:00 AM – 10:00 PM",
      priceRange: "$6.00 – $13.00",
      coords: [45.4310, -75.6820],
      distance: "800 m (9 min walk)",
      topPicks: "Whole rotisserie chicken ($12.99 = 3 meals), fresh sub counter, Greek yogurt",
      nutritionGoal: "Bulk protein supply to refrigerate at hostel",
      icon: "🍗"
    },

    // --- DINNER & TISSUE RECOVERY ---
    {
      id: "food-d1",
      name: "3 Brothers Shawarma & Poutine",
      mealType: "dinner",
      categoryName: "🥙 High-Protein Shawarma Plate",
      address: "160 Rideau St (Corner of Rideau/Waller)",
      hours: "11:00 AM – 03:00 AM",
      priceRange: "$14.00 – $18.00",
      coords: [45.4270, -75.6880],
      distance: "220 m (3 min walk)",
      topPicks: "Chicken shawarma plate with salad, extra garlic sauce, hummus & potatoes",
      nutritionGoal: "45g+ protein + allicin in garlic for antimicrobial toe healing",
      icon: "🥙"
    },
    {
      id: "food-d2",
      name: "El Furniture Warehouse",
      mealType: "dinner",
      categoryName: "🍔 All-Item Budget Dining ($7–$10)",
      address: "77 Clarence St (ByWard Market)",
      hours: "11:00 AM – 02:00 AM",
      priceRange: "$6.95 – $9.95",
      coords: [45.4288, -75.6928],
      distance: "450 m (5 min walk)",
      topPicks: "Works burger, quinoa power bowl, street tacos, spicy wings",
      nutritionGoal: "Super cheap sit-down hot meals in lively social setting",
      icon: "🍔"
    },
    {
      id: "food-d3",
      name: "Shawarma Palace Rideau",
      mealType: "dinner",
      categoryName: "🥙 Legendary Giant Portions",
      address: "464 Rideau St",
      hours: "11:00 AM – 01:00 AM",
      priceRange: "$15.00 – $19.00",
      coords: [45.4330, -75.6780],
      distance: "1.1 km (12 min walk / bus)",
      topPicks: "Mixed Shawarma Platter (Huge portion — easily saves half for next day)",
      nutritionGoal: "Massive calorie & protein reload (2 meals for $17)",
      icon: "🥙"
    },

    // --- LATE NIGHT & DECOMPRESSION ---
    {
      id: "food-n1",
      name: "The Loft / Level One Pub",
      mealType: "latenight",
      categoryName: "🎮 Late Night Food & Chill",
      address: "14 Waller St (Next to Hostel)",
      hours: "Open til 01:00 AM – 02:00 AM",
      priceRange: "$6.00 – $16.00",
      coords: [45.4255, -75.6885],
      distance: "20 m (15 sec walk)",
      topPicks: "Loaded nachos, craft grilled cheese, fries, hot cider",
      nutritionGoal: "Nocturnal social unwinding 20 steps from bed",
      icon: "🎮"
    },
    {
      id: "food-n2",
      name: "Elgin Street Diner",
      mealType: "latenight",
      categoryName: "🥞 24/7 Iconic All-Night Diner",
      address: "374 Elgin St",
      hours: "Open 24 Hours / 7 Days",
      priceRange: "$10.00 – $18.00",
      coords: [45.4145, -75.6890],
      distance: "1.4 km (15 min walk / quick bus)",
      topPicks: "All-day breakfast skillet, famous smoked meat poutine, bottomless coffee",
      nutritionGoal: "Late-night booth with power outlets & warm comfort food",
      icon: "🥞"
    },
    {
      id: "food-n3",
      name: "Zak's Diner ByWard Market",
      mealType: "latenight",
      categoryName: "🍔 24/7 Classic Retro Diner",
      address: "14 Byward Market Square",
      hours: "Open 24 Hours",
      priceRange: "$12.00 – $19.00",
      coords: [45.4278, -75.6935],
      distance: "400 m (5 min walk)",
      topPicks: "Burgers, milkshakes, breakfast combos at 3 AM",
      nutritionGoal: "Safe, dry, illuminated late night oasis in the Market",
    }
  ],

  // FREE PUBLIC RESTROOMS & CLEAN WATER REFILL STATIONS DIRECTORY
  amenitiesMapDirectory: [
    {
      id: "amenity-1",
      name: "Saintlo Jail Basecamp Kitchen & Lounge",
      type: "both", // 'bathroom' | 'water' | 'both'
      categoryLabel: "🏰 Basecamp Guest Restrooms & Filtered Water",
      address: "75 Nicholas St",
      hours: "24 Hours / 7 Days",
      access: "100% Free for Guests",
      coords: [45.4251, -75.6892],
      distance: "0 m (Inside Basecamp)",
      floorDetails: "Ground floor kitchen sink & 2nd floor restrooms",
      proTip: "Fill up your water bottle before heading out for the day.",
      icon: "💧"
    },
    {
      id: "amenity-2",
      name: "CF Rideau Centre Level 1 (Near Farm Boy)",
      type: "both",
      categoryLabel: "🚻 Spotless Mall Restroom & 💧 Water Refill",
      address: "50 Rideau St (Level 1 Concourse)",
      hours: "10:00 AM – 09:00 PM (Sun til 6 PM)",
      access: "100% Free Public Access",
      coords: [45.4258, -75.6920],
      distance: "180 m (2 min walk)",
      floorDetails: "Level 1 hallway next to Farm Boy & Shoppers Drug Mart",
      proTip: "Touchless cold filtered Elkay bottle refill station right outside the washroom door.",
      icon: "🚻"
    },
    {
      id: "amenity-3",
      name: "CF Rideau Centre Level 2 (Dining Hall)",
      type: "both",
      categoryLabel: "🚻 Food Court Restroom & 💧 Water Refill",
      address: "50 Rideau St (Level 2 Food Court)",
      hours: "10:00 AM – 09:00 PM",
      access: "100% Free Public Access",
      coords: [45.4255, -75.6925],
      distance: "200 m (3 min walk)",
      floorDetails: "Level 2 Dining Hall beside Subway / A&W",
      proTip: "Clean high-volume multi-stall washroom with quick water fountain.",
      icon: "🚻"
    },
    {
      id: "amenity-4",
      name: "National Arts Centre (NAC) Public Atrium",
      type: "both",
      categoryLabel: "🏛️ Luxury Public Restrooms & Water",
      address: "1 Elgin St (Corner of Elgin & Wellington)",
      hours: "07:00 AM – 10:00 PM Daily",
      access: "100% Free Public Cultural Space",
      coords: [45.4235, -75.6935],
      distance: "320 m (4 min walk across canal)",
      floorDetails: "Main ground floor glass atrium lounge",
      proTip: "Warmest, quietest, cleanest public washrooms downtown with comfortable lounge couches and free public Wi-Fi.",
      icon: "🏛️"
    },
    {
      id: "amenity-5",
      name: "uOttawa University Centre (UCU)",
      type: "both",
      categoryLabel: "🎓 Campus Public Restrooms & Cold Water",
      address: "85 University Private (Sandy Hill)",
      hours: "07:00 AM – 11:00 PM Daily",
      access: "100% Free Public Campus Building",
      coords: [45.4230, -75.6830],
      distance: "450 m (5 min walk)",
      floorDetails: "Level 1 & Level 2 main concourse",
      proTip: "Refrigerated filtered water bottle stations on every floor; zero commercial pressure.",
      icon: "💧"
    },
    {
      id: "amenity-6",
      name: "uOttawa FSS Social Sciences Tower",
      type: "both",
      categoryLabel: "🎓 Modern High-Tech Washrooms & Water",
      address: "120 University Private (Sandy Hill)",
      hours: "07:00 AM – 10:00 PM",
      access: "100% Free Public Campus Access",
      coords: [45.4215, -75.6835],
      distance: "550 m (6 min walk)",
      floorDetails: "Main lobby next to the 6-story living green wall",
      proTip: "Ultra-modern, air conditioned/heated, beautiful indoor plant wall with fast Elkay water refiller.",
      icon: "🚻"
    },
    {
      id: "amenity-7",
      name: "Ottawa Public Library (Main Branch)",
      type: "both",
      categoryLabel: "📚 Public Library Restrooms & Water",
      address: "120 Metcalfe St (Corner of Metcalfe & Laurier)",
      hours: "10:00 AM – 08:00 PM (Mon-Thu), til 6 PM (Fri-Sat)",
      access: "100% Free City Public Library",
      coords: [45.4195, -75.6965],
      distance: "750 m (8 min walk / quick bus)",
      floorDetails: "All floors beside elevators",
      proTip: "Clean private cubicles, water fountains, and free study desks with electrical outlets.",
      icon: "📚"
    },
    {
      id: "amenity-8",
      name: "ByWard Market Hall Building",
      type: "bathroom",
      categoryLabel: "🛒 Historic Market Public Washrooms",
      address: "55 Byward Market Square",
      hours: "09:00 AM – 06:00 PM Daily",
      access: "100% Free Public Access",
      coords: [45.4280, -75.6925],
      distance: "350 m (4 min walk)",
      floorDetails: "Ground floor center hallway inside the brick market hall",
      proTip: "Good quick stop when exploring ByWard Market fruit stands and street food.",
      icon: "🚻"
    }
  ],

  // 24/7 NOCTURNAL MASTER DIRECTORY (SPOTS OPEN ALL NIGHT)
  twentyFourSevenDirectory: [
    {
      id: "247-esd",
      name: "Elgin Street Diner (ESD)",
      category: "24/7 Diner & Outpost",
      categoryBadge: "🥞 24/7 Iconic Food & Work",
      address: "374 Elgin St",
      distance: "1.4 km (15 min night stroll / quick bus)",
      coords: [45.4145, -75.6890],
      openStatus: "Open 24 Hours / 365 Days",
      features: "Bottomless coffee refills ($3.50), famous smoked meat poutine, breakfast all night, power outlets in booths, high-speed Wi-Fi, clean customer restrooms.",
      nocturnalVibe: "Legendary nocturnal hub in Ottawa. Safe, bustling, well-lit, friendly staff used to late-night coders and night owls.",
      icon: "🥞"
    },
    {
      id: "247-zaks",
      name: "Zak's Diner (ByWard Market)",
      category: "24/7 Retro Diner",
      categoryBadge: "🍔 24/7 Diner & Restrooms",
      address: "14 Byward Market Square",
      distance: "400 m (5 min walk)",
      coords: [45.4278, -75.6935],
      openStatus: "Open 24 Hours",
      features: "Burgers, milkshakes, all-day breakfast skillets at 3:00 AM, booths, restrooms.",
      nocturnalVibe: "Bright neon retro atmosphere right in ByWard Market. 5-minute walk from basecamp.",
      icon: "🍔"
    },
    {
      id: "247-timhortons",
      name: "Tim Hortons Rideau",
      category: "24/7 Budget Fuel & Coffee",
      categoryBadge: "🥯 24/7 Coffee & Sandwiches",
      address: "201 Rideau St (Corner of Rideau & Cumberland)",
      distance: "280 m (3 min walk)",
      coords: [45.4272, -75.6872],
      openStatus: "Open 24 Hours / 7 Days",
      features: "$2.50 large coffee, breakfast sandwiches ($4.20), bottled juices, quick grab-and-go counter.",
      nocturnalVibe: "Fast, reliable, cheap caffeine and hot carb reload at 4:00 AM.",
      icon: "🥯"
    },
    {
      id: "247-mcdonalds",
      name: "McDonald's Rideau",
      category: "24/7 Fast Food",
      categoryBadge: "🍟 24/7 Takeout Window",
      address: "99 Rideau St",
      distance: "250 m (3 min walk)",
      coords: [45.4262, -75.6910],
      openStatus: "Open 24 Hours",
      features: "Late-night takeout window, hot coffee, cheap burger/fry combos, apple pies.",
      nocturnalVibe: "Quick late night calorie fix right beside the mall entrance.",
      icon: "🍟"
    },
    {
      id: "247-circlek",
      name: "Circle K / Quickie Convenience (Rideau)",
      category: "24/7 Convenience & Hydration",
      categoryBadge: "🏪 24/7 Cold Drinks & Snacks",
      address: "255 Rideau St (Corner of Rideau & King Edward)",
      distance: "350 m (4 min walk)",
      coords: [45.4282, -75.6855],
      openStatus: "Open 24 Hours",
      features: "Large 1.5L cold water bottles ($2.29), energy drinks, protein bars, potato chips, tobacco, 24/7 ATM cash machine.",
      nocturnalVibe: "Essential midnight pit-stop for hydration, snacks, and emergency supplies.",
      icon: "🏪"
    },
    {
      id: "247-quickie-elgin",
      name: "Quickie Convenience Elgin",
      category: "24/7 Convenience",
      categoryBadge: "🏪 24/7 Snacks & Essentials",
      address: "248 Elgin St",
      distance: "1.1 km (12 min walk)",
      coords: [45.4175, -75.6905],
      openStatus: "Open 24 Hours",
      features: "Cold drinks, snacks, ice, basic toiletries, ATM.",
      nocturnalVibe: "Well-lit late night convenience store on the Elgin strip.",
      icon: "🏪"
    },
    {
      id: "247-hostel-lounge",
      name: "Saintlo Jail Basecamp Lounge & Kitchen",
      category: "24/7 Nocturnal Tech Sanctuary",
      categoryBadge: "🏰 24/7 Wi-Fi, Desks & Free Water",
      address: "75 Nicholas St (Basecamp)",
      distance: "0 m (Home Base)",
      coords: [45.4251, -75.6892],
      openStatus: "24/7 Secure Guest Access",
      features: "Gigabit Bell Fibe Wi-Fi, wall power outlets, heated indoor seating, free filtered water tap, 24/7 guest restrooms, on-duty 24/7 front desk security.",
      nocturnalVibe: "Dead silent between 12:00 AM and 07:00 AM. The optimal, zero-cost nocturnal command center in Ottawa.",
      icon: "🏰"
    },
    {
      id: "247-3brothers",
      name: "3 Brothers Shawarma (Late Night Anchor)",
      category: "Late-Night Hot Food (Til 3 AM)",
      categoryBadge: "🥙 Open til 3:00 AM",
      address: "160 Rideau St (Corner of Rideau/Waller)",
      distance: "220 m (3 min walk)",
      coords: [45.4270, -75.6880],
      openStatus: "Open Daily til 03:00 AM",
      features: "Hot high-protein chicken shawarma platters, garlic potatoes, poutine, cold drinks.",
      nocturnalVibe: "Go-to late-night hot protein reload 220m from your dorm.",
      icon: "🥙"
    },
    {
      id: "247-theloft",
      name: "The Loft & Level One Game Pub",
      category: "Late-Night Social (Til 1–2 AM)",
      categoryBadge: "🎮 Open til 1:00 AM – 2:00 AM",
      address: "14 Waller St (Next to Hostel)",
      distance: "20 m (15 sec walk)",
      coords: [45.4255, -75.6885],
      openStatus: "Open til 01:00 AM (Sun-Thu) / 02:00 AM (Fri-Sat)",
      features: "Late night gaming, craft drinks, hot cider, nachos, friendly tech & student crowd.",
      nocturnalVibe: "20 steps behind the hostel. Zero weather exposure.",
      icon: "🎮"
    },
    {
      id: "247-health811",
      name: "Ontario Health 811 (24/7 Medical Hotline)",
      category: "24/7 Medical Nurse Triage",
      categoryBadge: "📞 24/7 Free Health Advice",
      address: "Phone: Dial 811 (Toll-Free in Ontario)",
      distance: "Available Anywhere via Phone",
      coords: [45.4215, -75.6972],
      openStatus: "24 Hours / 7 Days / 365 Days",
      features: "Speak directly with a Registered Nurse at 3:00 AM for free health advice regarding your toe healing, medications, or symptom triage.",
      nocturnalVibe: "Instant free medical guidance from your phone without leaving bed.",
      icon: "📞"
    }
  ],

  // 1. 24/7 & LATE NIGHT SPOTS (WALKING DISTANCE FROM 75 NICHOLAS)
  lateNightSpots: [
    {
      name: "The Loft Board Game Lounge / Level One Pub",
      address: "14 Waller St (20m from Jail Basecamp)",
      hours: "Open til 1:00 AM – 2:00 AM",
      type: "Socializing, board games, video games, craft drinks & food",
      vibe: "Warm, dry, bustling techie & student hangout next door",
      coords: [45.4255, -75.6885]
    },
    {
      name: "3 Brothers Shawarma & Poutine",
      address: "160 Rideau St (220m from Basecamp)",
      hours: "Open til 3:00 AM",
      type: "High-protein chicken shawarma plates & poutine",
      vibe: "Fast, filling, right on Rideau",
      coords: [45.4270, -75.6880]
    },
    {
      name: "Elgin Street Diner",
      address: "374 Elgin St (1.4 km walk / quick transit)",
      hours: "Open 24 Hours / 7 Days a Week",
      type: "Iconic 24/7 diner, breakfast all day, coffee, booth workspace",
      vibe: "Classic late-night Ottawa institution",
      coords: [45.4145, -75.6890]
    }
  ],

  // 2. CHRONO-NUTRITION & SCIENCE-BASED MEAL TIMING PROTOCOL
  nutritionProtocol: [
    {
      windowId: "nutr-1",
      windowName: "Window 1: Wake-Up Fuel",
      time: "01:30 PM – 02:30 PM",
      theme: "Dopamine Priming & Glucose Stability",
      macros: "30g Protein • 45g Slow Carbs • 15g Healthy Fats",
      recommendedFoods: "3 Scrambled/Boiled Eggs + 1 cup Rolled Oats with berries/peanut butter OR Greek Yogurt bowl + 500ml water with pinch of salt.",
      scienceReasoning: "High-tyrosine protein primes dopamine synthesis for deep mental focus; oats provide 4+ hours of steady glycogen without insulin spikes.",
      localSource: "Hostel Breakfast Bar (75 Nicholas) or Farm Boy (CF Rideau Level 1)",
      coords: [45.4252, -75.6918]
    },
    {
      windowId: "nutr-2",
      windowName: "Window 2: Focus Booster",
      time: "04:30 PM – 05:30 PM",
      theme: "Sustained Cognitive Flow & Anti-Inflammatory",
      macros: "10g Protein • 25g Carbs • 14g Omega Fats",
      recommendedFoods: "Handful of raw almonds/walnuts + 1 apple or banana + 1 square 70%+ dark chocolate + 500ml water / green tea.",
      scienceReasoning: "Flavonoids in dark chocolate enhance cerebral blood flow; omega-3s in walnuts support neuronal membranes without sluggish digestion.",
      localSource: "Giant Tiger (98 George St) or Happy Goat Cafe Counter",
      coords: [45.4265, -75.6790]
    },
    {
      windowId: "nutr-3",
      windowName: "Window 3: Evening Recovery Dinner",
      time: "07:30 PM – 08:30 PM",
      theme: "Tissue Repair & Toe Infection Healing",
      macros: "45g Protein • 50g Complex Carbs • 18g Fats",
      recommendedFoods: "Option A: 3 Brothers Chicken Shawarma Plate (extra salad, garlic, hummus, rice/potatoes). Option B: Chicken Breast / Canned Tuna + Sweet Potato + Broccoli.",
      scienceReasoning: "Complete amino acid matrix accelerates cellular wound repair in your toe nail; allium in garlic provides natural antimicrobial synergy.",
      localSource: "3 Brothers Shawarma (160 Rideau St) or Loblaws (200 Rideau St)",
      coords: [45.4270, -75.6880]
    },
    {
      windowId: "nutr-4",
      windowName: "Window 4: Night Decompression",
      time: "10:30 PM – 11:30 PM",
      theme: "Sleep Architecture Optimization",
      macros: "8g Protein • 10g Carbs • 10g Healthy Fats",
      recommendedFoods: "Hot Chamomile or Peppermint Tea + 1 tbsp natural peanut butter OR handful of pumpkin seeds.",
      scienceReasoning: "Magnesium in pumpkin seeds activates GABA receptors for nervous system calm; tryptophan converts to melatonin for restorative REM sleep.",
      localSource: "Loblaws / Dollarama / Hostel Kitchen",
      coords: [45.4251, -75.6892]
    }
  ],

  // 3. URGENT CLINICS & LOCAL ESSENTIAL ERRANDS
  essentialErrands: [
    {
      id: "errand-clinic-1",
      category: "health",
      categoryLabel: "🏥 Confirmed Appointment",
      title: "Downtown Urgent Care (158 Rideau St)",
      subtitle: "Thu Sept 3 @ 11:50 AM • 220m (3 min walk)",
      distance: "220 m (3 min walk)",
      coords: [45.4268, -75.6902],
      badge: "Thu 11:50 AM",
      badgeColor: "#ef4444",
      description: "Confirmed Appointment for Thursday, Sept 3 at 11:50 AM. Full medical assessment for your infected toe nail, cleaning/drainage, and antibiotic prescription.",
      keyDetails: "158 Rideau Street (Corner of Rideau & Waller/Nicholas). Phone: 613-482-9051. Arrive at 11:35 AM to check in.",
      proTip: "Check in with reception, show your ID/health card, and use the waiting room time to send 5 landlord inquiries.",
      actionLinks: [
        { label: "Clinic Website", url: "https://www.mdconnected.ca/downtown" },
        { label: "Open in Maps", url: "https://maps.apple.com/?q=158+Rideau+Street+Ottawa" }
      ]
    },
    {
      id: "errand-pharmacy-1",
      category: "health",
      categoryLabel: "💊 Pharmacy & Care",
      title: "Shoppers Drug Mart (Rideau Centre / 322 Rideau)",
      subtitle: "50 Rideau St (200m) or 322 Rideau St (300m)",
      distance: "200 m (3 min walk)",
      coords: [45.4258, -75.6925],
      badge: "Rx & Antibiotics",
      badgeColor: "#06b6d4",
      description: "Fill clinic prescriptions, get Polysporin/bandage dressings for your toe, or consult the on-duty pharmacist directly.",
      keyDetails: "Open 8:00 AM – 10:00 PM. Full pharmacy counter and health essentials.",
      proTip: "Buy sterile gauze pads and medical tape right after your 158 Rideau clinic visit.",
      actionLinks: [
        { label: "Open in Maps", url: "https://maps.apple.com/?q=Shoppers+Drug+Mart+50+Rideau+Ottawa" }
      ]
    },
    {
      id: "errand-earphones-1",
      category: "errands",
      categoryLabel: "🎧 Cheap Tech Gear",
      title: "Dollarama (CF Rideau Centre Level 1)",
      subtitle: "50 Rideau St • $4 – $5 Earphones • 200m",
      distance: "200 m (3 min walk)",
      coords: [45.4252, -75.6918],
      badge: "Open til 9 PM",
      badgeColor: "#10b981",
      description: "Cheapest place downtown to buy functional wired earphones with microphone for $4.00 – $5.00. Open until 9:00 PM inside the mall!",
      keyDetails: "Located inside CF Rideau Centre (Lower level near food court). Open until 9:00 PM tonight.",
      proTip: "Grab a $4.50 pair of wired earbuds with mic before heading back to basecamp.",
      actionLinks: [
        { label: "Open in Maps", url: "https://maps.apple.com/?q=Dollarama+Rideau+Centre+Ottawa" }
      ]
    }
  ],

  // 4. TEMP STAFFING AGENCIES (DAILY & WEEKLY PAY IN OTTAWA)
  tempAgencies: [
    {
      name: "PeopleReady Ottawa",
      address: "1485 Laperriere Ave #102, Ottawa, ON",
      phone: "+1 (613) 728-6677",
      payout: "Daily Pay via JobStack App / Direct Deposit",
      type: "General labor, logistics, event setup, light industrial",
      howToApply: "Download 'JobStack' app on iOS/Android, complete ID verification, or call/walk in at 7:00 AM.",
      coords: [45.3780, -75.7440]
    },
    {
      name: "Labor Tek Personnel Services",
      address: "1390 Prince of Wales Dr #100, Ottawa, ON",
      phone: "+1 (613) 741-1128",
      payout: "Weekly & Rapid Direct Deposit",
      type: "Warehouse, assembly, packaging, skilled & general labor",
      howToApply: "Register online at labortek.com or call 613-741-1128 at 6:30 AM for day dispatch.",
      coords: [45.3710, -75.7020]
    },
    {
      name: "Altis Recruitment (Downtown Office)",
      address: "100 Queen St #1100, Ottawa, ON",
      phone: "+1 (613) 230-5393",
      payout: "Bi-weekly / Contract Rates ($22–$35/hr)",
      type: "Government temp clerical, data entry, tech support",
      howToApply: "Upload resume to altisrecruitment.com (mention tech & data skills).",
      coords: [45.4210, -75.6980]
    }
  ],

  // 5. REMOTE AI EVALUATION & TASK PLATFORMS
  aiPlatforms: [
    {
      name: "DataAnnotation.tech",
      payoutRate: "$20.00 – $40.00+ / hour (USD)",
      payoutFrequency: "Cash out every 7 days via PayPal",
      workType: "AI prompt response evaluation, fact-checking, coding chatbot testing",
      howToJoin: "Go to dataannotation.tech, take the 45-min starter assessment immediately. If passed, projects unlock instantly.",
      url: "https://www.dataannotation.tech/"
    },
    {
      name: "Outlier.ai",
      payoutRate: "$25.00 – $45.00 / hour (USD)",
      payoutFrequency: "Weekly automatic PayPal / AirTM payout",
      workType: "Code generation evaluation, reasoning verification, LLM fine-tuning tasks",
      howToJoin: "Sign up on outlier.ai as a Software Engineer / Generalist trainer.",
      url: "https://outlier.ai/"
    }
  ],

  // 6. COMPLETE 7-DAY OPERATIONAL SPRINT (WITH MAP FOOD WAYPOINTS FOR EVERY DAY)
  sevenDayPlan: [
    // --- DAY 1 (WEDNESDAY NIGHT): NOCTURNAL SPRINT & LATE-NIGHT DINNER ---
    {
      dayNum: 1,
      dayLabel: "Day 1 (Wed)",
      theme: "Nocturnal Power Sprint & Late-Night Recovery Fuel",
      keyMilestone: "High-protein Shawarma Dinner + Social @ The Loft + Overnight Landlord Outreach",
      pathCoords: [
        [45.4252, -75.6918], // Dollarama
        [45.4270, -75.6880], // 3 Brothers Shawarma (Dinner)
        [45.4255, -75.6885], // The Loft (Late Night)
        [45.4251, -75.6892]  // Jail Basecamp
      ],
      schedule: [
        {
          id: "d1-1",
          time: "07:15 PM – 08:00 PM",
          phase: "🎧 Dollarama Errand (Gear Up)",
          locationName: "Dollarama (CF Rideau Level 1)",
          coords: [45.4252, -75.6918],
          mission: "Buy $4.50 wired earphones with mic + water bottle. Stay dry inside mall.",
          badgeColor: "#06b6d4",
          actionTag: "Gear Up"
        },
        {
          id: "d1-2",
          time: "08:00 PM – 09:00 PM",
          phase: "🍗 DINNER: 3 Brothers Chicken Shawarma Plate",
          locationName: "3 Brothers Shawarma (160 Rideau St • 220m)",
          coords: [45.4270, -75.6880],
          mission: "High-protein chicken plate with salad, rice, and garlic sauce. Garlic provides allicin (natural antimicrobial) to support toe healing.",
          badgeColor: "#10b981",
          actionTag: "Dinner Fuel"
        },
        {
          id: "d1-3",
          time: "09:00 PM – 11:30 PM",
          phase: "🎲 Social Unwind & Gaming @ The Loft",
          locationName: "The Loft / Level One Pub (14 Waller St • 20m)",
          coords: [45.4255, -75.6885],
          mission: "Walk 20 steps behind hostel into The Loft ($9 cover). Play board games/video games, chat with friendly students/techies, grab a hot cider.",
          badgeColor: "#f43f5e",
          actionTag: "Social Fun"
        },
        {
          id: "d1-4",
          time: "11:30 PM – 03:00 AM",
          phase: "💻 Deep Night Focus & AI Tasking",
          locationName: "Jail Hostel Lounge (75 Nicholas St)",
          coords: [45.4251, -75.6892],
          mission: "Lounge is dead quiet. Plug in new earphones, test AI evaluation platforms in high focus.",
          badgeColor: "#10b981",
          actionTag: "Focus Sprint"
        },
        {
          id: "d1-5",
          time: "03:00 AM – 05:00 AM",
          phase: "🏠 Landlord Top-of-Inbox Outreach",
          locationName: "Hostel Desk (75 Nicholas St)",
          coords: [45.4251, -75.6892],
          mission: "Send 15 room messages on PadMapper / FB Marketplace for Sandy Hill. Landlords wake up with your message at the top of inbox at 7 AM!",
          badgeColor: "#f59e0b",
          actionTag: "Housing Domination"
        }
      ]
    },

    // --- DAY 2 (THURSDAY, SEPT 3): CLINIC (11:50 AM), FRESH LUNCH & VIEWINGS ---
    {
      dayNum: 2,
      dayLabel: "Day 2 (Thu)",
      theme: "11:50 AM Clinic Appointment, Fresh Farm Boy Lunch & Room Viewings",
      keyMilestone: "Toe treated at 158 Rideau + Farm Boy salad bar + 3 room walkthroughs in Sandy Hill",
      pathCoords: [
        [45.4251, -75.6892], // Basecamp Breakfast
        [45.4268, -75.6902], // Downtown Urgent Care (11:50 AM)
        [45.4258, -75.6920], // Farm Boy (Lunch)
        [45.4230, -75.6790], // Sandy Hill Viewings
        [45.4330, -75.6780]  // Shawarma Palace (Dinner)
      ],
      schedule: [
        {
          id: "d2-1",
          time: "09:30 AM – 10:30 AM",
          phase: "🍳 BREAKFAST: Saintlo Free Breakfast Kitchen",
          locationName: "Saintlo Jail Kitchen (75 Nicholas St)",
          coords: [45.4251, -75.6892],
          mission: "Bagels with peanut butter, whole grain toast, orange juice, and hot coffee ($0.00 free hostel breakfast). Hydrate 500ml water.",
          badgeColor: "#f59e0b",
          actionTag: "Free Breakfast"
        },
        {
          id: "d2-2",
          time: "11:35 AM – 12:45 PM",
          phase: "🏥 CLINIC: Downtown Urgent Care (11:50 AM)",
          locationName: "Downtown Urgent Care (158 Rideau St)",
          coords: [45.4268, -75.6902],
          mission: "Walk 2 minutes to 158 Rideau St. Check in at 11:35 AM for 11:50 AM appointment. Toe examination & antibiotic prescription.",
          badgeColor: "#ef4444",
          actionTag: "Confirmed Clinic"
        },
        {
          id: "d2-3",
          time: "12:45 PM – 01:30 PM",
          phase: "🥗 LUNCH: Farm Boy Hot Salad & Protein Bar",
          locationName: "Farm Boy (CF Rideau Level 1 • 180m)",
          coords: [45.4258, -75.6920],
          mission: "Fresh salad bar with grilled chicken breast + fresh berry bowl ($8–$11). Clean micronutrients for cell repair without heavy food coma.",
          badgeColor: "#10b981",
          actionTag: "Clean Lunch"
        },
        {
          id: "d2-4",
          time: "01:30 PM – 05:30 PM",
          phase: "🏠 Sandy Hill & Centretown Room Walkthroughs",
          locationName: "Sandy Hill (Somerset E / Nelson / Chapel)",
          coords: [45.4230, -75.6790],
          mission: "Attend 3 room viewings. Inspect Wi-Fi signal, room locks, kitchen cleanliness, outdoor smoking patio, and lease terms.",
          badgeColor: "#06b6d4",
          actionTag: "Room Walkthrough"
        },
        {
          id: "d2-5",
          time: "07:00 PM – 08:30 PM",
          phase: "🥙 DINNER: Shawarma Palace Giant Platter",
          locationName: "Shawarma Palace (464 Rideau St)",
          coords: [45.4330, -75.6780],
          mission: "Legendary giant mixed platter ($16.50). Huge portion that easily provides dinner tonight plus refrigerated leftovers for tomorrow.",
          badgeColor: "#10b981",
          actionTag: "Dinner Feast"
        }
      ]
    },

    // --- DAY 3 (FRIDAY, SEPT 4): COFFEE, GROCERY SPRINT & LEASE LOCK ---
    {
      dayNum: 3,
      dayLabel: "Day 3 (Fri)",
      theme: "Morning Artisan Coffee, Budget Grocery Sprint & Room Lease Lock",
      keyMilestone: "Select top room, verify Ontario Standard Lease, and sign agreement",
      pathCoords: [
        [45.4290, -75.6905], // Bridgehead Dalhousie (Breakfast)
        [45.4285, -75.6912], // Giant Tiger (Lunch & Snacks)
        [45.4230, -75.6790], // Landlord Office
        [45.4288, -75.6928]  // El Furniture Warehouse (Dinner)
      ],
      schedule: [
        {
          id: "d3-1",
          time: "09:30 AM – 10:30 AM",
          phase: "☕ BREAKFAST: Bridgehead Coffee & Artisan Wrap",
          locationName: "Bridgehead Coffee (224 Dalhousie St)",
          coords: [45.4290, -75.6905],
          mission: "Fair-trade dark roast coffee + egg & cheese breakfast wrap ($6.50). Prime mental focus in quiet cafe workspace.",
          badgeColor: "#06b6d4",
          actionTag: "Cafe Breakfast"
        },
        {
          id: "d3-2",
          time: "01:00 PM – 02:00 PM",
          phase: "🛒 LUNCH: Giant Tiger Market Fuel",
          locationName: "Giant Tiger (98 George St)",
          coords: [45.4285, -75.6912],
          mission: "Grab quick nutritious staples: Greek yogurt, bananas ($0.79/lb), almonds, and whole wheat pita ($5.00 total).",
          badgeColor: "#f59e0b",
          actionTag: "Budget Lunch"
        },
        {
          id: "d3-3",
          time: "02:30 PM – 05:00 PM",
          phase: "🏠 Sign Lease & Transfer Deposit ($1,600)",
          locationName: "Selected Room / Sandy Hill",
          coords: [45.4230, -75.6790],
          mission: "Sign Ontario Standard Form of Lease. E-transfer standard first/last month deposit ($1,500–$1,700). Arrange key pickup for move-in.",
          badgeColor: "#10b981",
          actionTag: "Sign Lease"
        },
        {
          id: "d3-4",
          time: "07:00 PM – 08:30 PM",
          phase: "🍔 DINNER: El Furniture Warehouse ($7.95 Feast)",
          locationName: "El Furniture Warehouse (77 Clarence St)",
          coords: [45.4288, -75.6928],
          mission: "Celebrate housing lock with an all-item $7.95 works burger or quinoa power bowl. High-energy lively ByWard Market vibe.",
          badgeColor: "#f43f5e",
          actionTag: "Celebration Dinner"
        }
      ]
    },

    // --- DAY 4 (SATURDAY, SEPT 5): MOVE PREP, FOOD COURT & 3 BROTHERS ---
    {
      dayNum: 4,
      dayLabel: "Day 4 (Sat)",
      theme: "Move-In Preparation, Quick Food Court Fuel & Shawarma Reload",
      keyMilestone: "Pack bags, verify key pickup time, and confirm move-in logistics",
      pathCoords: [
        [45.4251, -75.6892], // Basecamp Breakfast
        [45.4258, -75.6920], // Rideau Food Court (Lunch)
        [45.4270, -75.6880], // 3 Brothers Shawarma (Dinner)
        [45.4255, -75.6885]  // The Loft (Late Night)
      ],
      schedule: [
        {
          id: "d4-1",
          time: "09:30 AM – 10:30 AM",
          phase: "🍳 BREAKFAST: Saintlo Free Hostel Breakfast",
          locationName: "Hostel Kitchen (75 Nicholas St)",
          coords: [45.4251, -75.6892],
          mission: "Toast with peanut butter, cereal, bananas, hot tea ($0.00).",
          badgeColor: "#f59e0b",
          actionTag: "Free Breakfast"
        },
        {
          id: "d4-2",
          time: "01:30 PM – 02:30 PM",
          phase: "🍜 LUNCH: Rideau Centre Dining Hall",
          locationName: "Rideau Centre Food Court (Level 2)",
          coords: [45.4258, -75.6920],
          mission: "Fast, filling midday fuel: Subway 6-inch sub or Thai Express chicken pad sew ($9–$12).",
          badgeColor: "#06b6d4",
          actionTag: "Quick Lunch"
        },
        {
          id: "d4-3",
          time: "07:30 PM – 08:45 PM",
          phase: "🥙 DINNER: 3 Brothers Chicken Shawarma Plate",
          locationName: "3 Brothers Shawarma (160 Rideau St)",
          coords: [45.4270, -75.6880],
          mission: "Hot chicken shawarma plate with garlic potatoes and hummus ($15.99).",
          badgeColor: "#10b981",
          actionTag: "Dinner"
        },
        {
          id: "d4-4",
          time: "11:00 PM – 01:00 AM",
          phase: "🎮 LATE NIGHT: The Loft Game Pub",
          locationName: "The Loft (14 Waller St • 20m)",
          coords: [45.4255, -75.6885],
          mission: "Late night warm cider and snacks while socializing.",
          badgeColor: "#f43f5e",
          actionTag: "Late Night"
        }
      ]
    },

    // --- DAY 5 (SUNDAY, SEPT 6): ARTISAN CAFE, LOBLAWS HAUL & HOME DINNER ---
    {
      dayNum: 5,
      dayLabel: "Day 5 (Sun)",
      theme: "Sunday Artisan Coffee, Loblaws Whole-Food Haul & First Home Meal",
      keyMilestone: "Complete $50 grocery cart & stock new apartment fridge",
      pathCoords: [
        [45.4278, -75.6865], // Happy Goat Coffee (Breakfast)
        [45.4310, -75.6820], // Loblaws Rideau (Grocery Haul)
        [45.4230, -75.6790], // New Home Kitchen
        [45.4145, -75.6890]  // Elgin Street Diner
      ],
      schedule: [
        {
          id: "d5-1",
          time: "10:00 AM – 11:00 AM",
          phase: "☕ BREAKFAST: Happy Goat Cold Brew & Pastry",
          locationName: "Happy Goat Coffee (229 Rideau St)",
          coords: [45.4278, -75.6865],
          mission: "Artisan cold brew coffee + spinach/feta breakfast pastry ($6.50).",
          badgeColor: "#06b6d4",
          actionTag: "Sunday Coffee"
        },
        {
          id: "d5-2",
          time: "01:30 PM – 03:00 PM",
          phase: "🛒 LUNCH & HAUL: Loblaws Rotisserie & $50 Grocery Run",
          locationName: "Loblaws Rideau (363 Rideau St)",
          coords: [45.4310, -75.6820],
          mission: "Buy whole rotisserie chicken ($12.99) for lunch + stock weekly cart: eggs, oats, sweet potatoes, broccoli, peanut butter.",
          badgeColor: "#10b981",
          actionTag: "Grocery Haul"
        },
        {
          id: "d5-3",
          time: "07:00 PM – 08:30 PM",
          phase: "🥗 DINNER: Home-Cooked Protein & Veggies",
          locationName: "New Apartment Kitchen (Sandy Hill)",
          coords: [45.4230, -75.6790],
          mission: "Cook chicken breast, baked sweet potato, and steamed broccoli ($4.00 home cost). Zero restaurant markup!",
          badgeColor: "#10b981",
          actionTag: "Home Cooking"
        },
        {
          id: "d5-4",
          time: "11:30 PM – 01:00 AM",
          phase: "🥞 LATE NIGHT: Elgin Street Diner (Optional Outpost)",
          locationName: "Elgin Street Diner (374 Elgin St)",
          coords: [45.4145, -75.6890],
          mission: "Late night coffee refill or poutine treat in iconic 24/7 booth.",
          badgeColor: "#f59e0b",
          actionTag: "24/7 Diner"
        }
      ]
    },

    // --- DAY 6 (MONDAY, SEPT 7): CHECKOUT HOSTEL, MOVE IN & FRESH FUEL ---
    {
      dayNum: 6,
      dayLabel: "Day 6 (Mon)",
      theme: "Hostel Checkout, Move Bags into Room & Settling Fuel",
      keyMilestone: "OFFICIAL MOVE-IN DAY! Checkout of 10-bed dorm, unpack in private room",
      pathCoords: [
        [45.4251, -75.6892], // Final Hostel Breakfast & Checkout
        [45.4230, -75.6790], // Move to New Room
        [45.4258, -75.6920], // Farm Boy (Lunch)
        [45.4288, -75.6928]  // El Furniture (Dinner)
      ],
      schedule: [
        {
          id: "d6-1",
          time: "09:30 AM – 11:00 AM",
          phase: "🍳 BREAKFAST & CHECKOUT: Final Hostel Morning",
          locationName: "Saintlo Jail Hostel (75 Nicholas St)",
          coords: [45.4251, -75.6892],
          mission: "Final free breakfast at hostel. Check out of 10-bed dorm by 11:00 AM. Walk bags over to your new room.",
          badgeColor: "#10b981",
          actionTag: "Hostel Checkout"
        },
        {
          id: "d6-2",
          time: "01:30 PM – 02:30 PM",
          phase: "🥗 LUNCH: Farm Boy Hot Counter",
          locationName: "Farm Boy (CF Rideau Level 1)",
          coords: [45.4258, -75.6920],
          mission: "Grab hot grilled chicken, roasted vegetables, and fresh juice ($10.00).",
          badgeColor: "#06b6d4",
          actionTag: "Move-In Fuel"
        },
        {
          id: "d6-3",
          time: "07:00 PM – 08:30 PM",
          phase: "🍔 DINNER: El Furniture Warehouse ($7.95)",
          locationName: "El Furniture Warehouse (77 Clarence St)",
          coords: [45.4288, -75.6928],
          mission: "Celebrate Day 1 in your permanent home with a cheap, delicious $7.95 burger & salad.",
          badgeColor: "#f43f5e",
          actionTag: "Dinner"
        }
      ]
    },

    // --- DAY 7 (TUESDAY, SEPT 8): FIRST BUSINESS WEEK TECH BLITZ FUEL ---
    {
      dayNum: 7,
      dayLabel: "Day 7 (Tue)",
      theme: "First Business Week: Tech Blitz, Founder Coffee & High-Performance Fuel",
      keyMilestone: "Pitch 10 Ottawa tech founders & visit Bayview Yards with stable home base",
      pathCoords: [
        [45.4278, -75.6865], // Happy Goat Coffee (Breakfast)
        [45.4095, -75.7230], // Bayview Yards Cafe (Lunch)
        [45.4270, -75.6880]  // 3 Brothers Shawarma (Dinner)
      ],
      schedule: [
        {
          id: "d7-1",
          time: "08:30 AM – 09:30 AM",
          phase: "☕ BREAKFAST: Happy Goat Double Espresso & Wrap",
          locationName: "Happy Goat Coffee (229 Rideau St)",
          coords: [45.4278, -75.6865],
          mission: "High-grade morning espresso to prime mental focus before founder pitch blitz ($5.50).",
          badgeColor: "#06b6d4",
          actionTag: "Tech Breakfast"
        },
        {
          id: "d7-2",
          time: "01:00 PM – 02:00 PM",
          phase: "🥗 LUNCH: Bayview Yards Startup Cafe",
          locationName: "Bayview Yards (7 Bayview Station Rd)",
          coords: [45.4095, -75.7230],
          mission: "Fresh sandwich and iced tea while networking with early-stage AI/tech founders at Invest Ottawa hub.",
          badgeColor: "#10b981",
          actionTag: "Startup Lunch"
        },
        {
          id: "d7-3",
          time: "07:00 PM – 08:30 PM",
          phase: "🥙 DINNER: 3 Brothers High-Protein Shawarma",
          locationName: "3 Brothers Shawarma (160 Rideau St)",
          coords: [45.4270, -75.6880],
          mission: "Chicken shawarma plate reload (45g protein) to cap off successful Week 1 relocation sprint.",
          badgeColor: "#10b981",
          actionTag: "Dinner Feast"
        }
      ]
    }
  ],

  // 7. UNIFIED INTEL ITEMS
  intelItems: [
    {
      id: "meetup-2",
      category: "meetups",
      categoryLabel: "🎲 Social & Night Hangout",
      title: "The Loft / Level One Game Pub",
      subtitle: "14 Waller St • 20m from Jail Basecamp",
      distance: "20 m (1 min walk)",
      coords: [45.4255, -75.6885],
      badge: "Open til 1 AM",
      badgeColor: "#f43f5e",
      description: "Ottawa's #1 social hub for techies, gamers, and university crowds. $9 cover to play over 1,000 games. Warm, friendly, zero rain exposure (20m behind hostel).",
      keyDetails: "Open til 1:00 AM. Great craft beer, snacks, and open community tables.",
      proTip: "Ask the staff to seat you at an open drop-in table—easiest way in Ottawa to make instant local friends.",
      actionLinks: [
        { label: "The Loft Website", url: "https://www.theloftlounge.ca/" }
      ]
    },
    {
      id: "diner-1",
      category: "latenight",
      categoryLabel: "🥞 24/7 Food & Work",
      title: "Elgin Street Diner (ESD)",
      subtitle: "374 Elgin St • 24/7 Legendary Diner",
      distance: "1.4 km (or quick #5 / #14 bus)",
      coords: [45.4145, -75.6890],
      badge: "Open 24/7",
      badgeColor: "#f59e0b",
      description: "Ottawa's famous 24-hour diner. Great booths, coffee refills, late-night poutine, and high-energy nocturnal vibe.",
      keyDetails: "Open 24 hours a day, 365 days a year.",
      proTip: "Great late-night coding/writing outpost if you want a change of scenery from the hostel.",
      actionLinks: [
        { label: "Open in Maps", url: "https://maps.apple.com/?q=Elgin+Street+Diner+Ottawa" }
      ]
    },
    {
      id: "nutr-spot-1",
      category: "nutrition",
      categoryLabel: "🥗 Late Night Fuel",
      title: "3 Brothers Shawarma (160 Rideau St)",
      subtitle: "220m • Open til 3:00 AM",
      distance: "220 m (3 min walk)",
      coords: [45.4270, -75.6880],
      badge: "Open til 3 AM",
      badgeColor: "#10b981",
      description: "Best high-protein meal near basecamp. Chicken Shawarma Plate with salad, garlic sauce, and hummus for 45g+ protein and immune-boosting allium.",
      keyDetails: "Open late til 3:00 AM.",
      proTip: "Great late-night recharge spot.",
      actionLinks: [
        { label: "Open in Maps", url: "https://maps.apple.com/?q=3+Brothers+Shawarma+160+Rideau+Ottawa" }
      ]
    },
    {
      id: "house-1",
      category: "housing",
      categoryLabel: "🏠 Room Target",
      title: "Sandy Hill (uOttawa Border)",
      subtitle: "$750 – $900 / mo • All-Inclusive",
      distance: "600m (7 min walk)",
      coords: [45.4230, -75.6790],
      badge: "Top Value",
      badgeColor: "#10b981",
      description: "Immediate proximity to uOttawa campus, makerspaces, and Bell Fibe Gigabit internet. High turnover of private rooms in shared Victorian student/young pro houses with back patios.",
      keyDetails: "Best streets: Somerset St E, Nelson, Chapel, Osgoode. Walk to Rideau LRT in under 6 mins.",
      proTip: "Mention in your message that you smoke strictly outdoors on the patio and are clean and quiet.",
      actionLinks: [
        { label: "PadMapper <$950", url: "https://www.padmapper.com/apartments/ottawa-on/sandy-hill?price-max=950" },
        { label: "uOttawa FB Housing", url: "https://www.facebook.com/groups/uottawahousing/" }
      ]
    },
    {
      id: "house-2",
      category: "housing",
      categoryLabel: "🏠 Room Target",
      title: "Centretown & Golden Triangle",
      subtitle: "$800 – $950 / mo • Brick Walkups",
      distance: "1.1 km (14 min walk)",
      coords: [45.4180, -75.6940],
      badge: "Urban Core",
      badgeColor: "#06b6d4",
      description: "Heart of Ottawa's young professional scene. Walk to Elgin Street restaurants, coffee shops, and Rideau Canal trails.",
      keyDetails: "Best streets: MacLaren, Gilmour, Cooper, Cartier. Close to Parliament LRT and Bank St buses.",
      proTip: "Highlight that you pay rent automatically on the 1st and work remotely in tech.",
      actionLinks: [
        { label: "PadMapper Centretown", url: "https://www.padmapper.com/apartments/ottawa-on/centretown?price-max=950" },
        { label: "Ottawa Rentals FB", url: "https://www.facebook.com/groups/ottawahousingrentals/" }
      ]
    },
    {
      id: "health-1",
      category: "health",
      categoryLabel: "🏥 Confirmed Appointment",
      title: "Downtown Urgent Care (158 Rideau St)",
      subtitle: "Thu Sept 3 @ 11:50 AM • 220m",
      distance: "220 m (3 min walk)",
      coords: [45.4268, -75.6902],
      badge: "Thu 11:50 AM",
      badgeColor: "#ef4444",
      description: "Your confirmed appointment clinic for Thursday Sept 3 at 11:50 AM. 3-minute walk from 75 Nicholas St. Full medical evaluation for your infected toe nail and prescription for antibiotics.",
      keyDetails: "158 Rideau St (Corner of Waller). Phone: 613-482-9051. Arrive at 11:35 AM.",
      proTip: "Bring ID / health card. Use waiting time to blast landlord messages.",
      actionLinks: [
        { label: "Clinic Website", url: "https://www.mdconnected.ca/downtown" },
        { label: "Open in Maps", url: "https://maps.apple.com/?q=158+Rideau+Street+Ottawa" }
      ]
    },
    {
      id: "errand-1",
      category: "errands",
      categoryLabel: "🎧 Cheap Earphones",
      title: "Dollarama (CF Rideau Centre)",
      subtitle: "200m • $4–$5 Wired Earphones",
      distance: "200 m (3 min walk)",
      coords: [45.4252, -75.6918],
      badge: "Open til 9 PM",
      badgeColor: "#10b981",
      description: "Level 1 of CF Rideau Centre. Grab $4.50 wired earphones with mic so you can take landlord calls and code with focus.",
      keyDetails: "Opens til 9:00 PM tonight. Cheap charging cables, toiletries, and snacks.",
      proTip: "Located near the lower concourse inside Rideau Centre.",
      actionLinks: [
        { label: "Open in Maps", url: "https://maps.apple.com/?q=Dollarama+Rideau+Centre+Ottawa" }
      ]
    }
  ],

  hostelInfo: {
    name: "Saintlo Ottawa Jail Hostel (Former Carleton County Gaol)",
    address: "75 Nicholas Street, Ottawa, ON K1N 7B9",
    coords: [45.4251, -75.6892],
    phone: "+1 (613) 235-2595",
    frontDesk: "24/7 On-Site Reception",
    builtYear: 1862
  }
};

if (typeof window !== 'undefined') {
  window.OTTAWA_DATA = OTTAWA_DATA;
}
