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
    language: "English Dominant",
    basecamp: "Saintlo Ottawa Jail Hostel (75 Nicholas St)",
    sleepPreference: "Nocturnal Power Operator (Sleeps during quiet day hours when dorms are empty)",
    moveInDeadline: "Sunday, Sept 6 (Move-in to stop daily hostel bleed)",
    
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

  // 6. COMPLETE 7-DAY OPERATIONAL SPRINT (NOCTURNAL OPERATOR SPRINT)
  sevenDayPlan: [
    // --- DAY 1 (WEDNESDAY NIGHT / THURSDAY EARLY MORNING): NOCTURNAL POWER RUN ---
    {
      dayNum: 1,
      dayLabel: "Day 1 (Wed Night)",
      theme: "Nocturnal Power Architecture: Fun at The Loft, AI Cash Grind & Landlord Inbox Dominance",
      keyMilestone: "Socialize at The Loft (20m away) + Earn $80–$150 USD on AI tasks + Blast 15 rooms for #1 landlord inbox position",
      pathCoords: [
        [45.4252, -75.6918], // Dollarama (CF Rideau Centre Level 1)
        [45.4255, -75.6885], // The Loft (14 Waller St - 20m from hostel)
        [45.4251, -75.6892]  // Basecamp Lounge (75 Nicholas St)
      ],
      schedule: [
        {
          id: "d1-1",
          time: "07:15 PM – 08:00 PM",
          phase: "🎧 Dollarama Errand (Closes 9 PM) & Gear Up",
          locationName: "Dollarama (CF Rideau Level 1)",
          coords: [45.4252, -75.6918],
          mission: "Head down to Level 1 Dollarama before 9 PM. Buy $4.50 wired earphones with mic + a bottle of water. Stay dry inside the mall.",
          whoToTalkTo: "Cashier",
          scriptTitle: "Earphone Lookup",
          scriptText: "Excuse me, where are the wired phone earphones located?",
          badgeColor: "#06b6d4",
          actionTag: "Quick Errand"
        },
        {
          id: "d1-2",
          time: "08:00 PM – 11:30 PM",
          phase: "🎲 Social Unwind & Gaming @ The Loft",
          locationName: "The Loft / Level One Pub (14 Waller St)",
          coords: [45.4255, -75.6885],
          mission: "Walk 20m behind the hostel into The Loft ($9 cover). Play board games/video games, chat with friendly local techies and university students, grab a drink, and enjoy a lively rainy evening indoors!",
          whoToTalkTo: "Game Hosts & Open Tables",
          scriptTitle: "Social Table Drop-In Script",
          scriptText: "Hey! Mind if I jump in for the next round? I'm Jordan, just moved into Ottawa working in AI.",
          badgeColor: "#f43f5e",
          actionTag: "Social & Fun"
        },
        {
          id: "d1-3",
          time: "11:30 PM – 03:00 AM",
          phase: "💻 Deep Night AI Cash Grind ($80–$150 USD Earned)",
          locationName: "Quiet Jail Hostel Lounge (75 Nicholas St)",
          coords: [45.4251, -75.6892],
          mission: "The hostel lounge is empty and silent. Plug in your new earphones. Complete DataAnnotation.tech starter test and grind 3 hours of high-paying prompt/code evaluations ($20–$40/hr USD).",
          whoToTalkTo: "AI Tasking Queue",
          scriptTitle: "High-Focus AI Sprint",
          scriptText: "Maintain razor-sharp attention to factuality and reasoning rubrics.",
          badgeColor: "#10b981",
          actionTag: "Cash Grind"
        },
        {
          id: "d1-4",
          time: "03:00 AM – 05:00 AM",
          phase: "🏠 Landlord Inbox Domination (15 Inquiries Queued)",
          locationName: "Hostel Lounge Desk",
          coords: [45.4251, -75.6892],
          mission: "Send 15 personalized room inquiries on PadMapper and Facebook Housing groups for Sandy Hill / Centretown. Landlords will wake up at 7:00 AM with your message at the very top of their inbox!",
          whoToTalkTo: "Landlords on PadMapper & FB Groups",
          scriptTitle: "Morning Top-of-Inbox Landlord Script",
          scriptText: "Hi! I saw your room listing in Sandy Hill/Centretown and love the location. I'm Jordan, a friendly, quiet remote tech builder in Ottawa looking to move in this weekend (by Sept 5/6). Very clean, reliable, auto-pay rent on the 1st, strictly outdoor smoker. Can I come view the room Thursday afternoon after 1:30 PM?",
          badgeColor: "#f59e0b",
          actionTag: "Housing Domination"
        },
        {
          id: "d1-5",
          time: "05:00 AM – 10:45 AM",
          phase: "😴 Morning Quiet Sleep Window (Dorm Is Empty)",
          locationName: "Hostel Bunk (75 Nicholas St)",
          coords: [45.4251, -75.6892],
          mission: "Sleep 5.5 hours while tourists wake up and leave the dorm empty and peaceful. Elevate foot on a pillow. Set alarm for 10:45 AM.",
          whoToTalkTo: "Pure Rest",
          scriptTitle: "Rest Reset",
          scriptText: "Wake up at 10:45 AM, shower, and walk 2 minutes to your 11:50 AM appointment at 158 Rideau St.",
          badgeColor: "#8b5cf6",
          actionTag: "Quiet Sleep"
        }
      ]
    },

    // --- DAY 2 (THURSDAY, SEPT 3): CLINIC APPOINTMENT (11:50 AM) & ROOM WALKTHROUGHS ---
    {
      dayNum: 2,
      dayLabel: "Day 2 (Thu)",
      theme: "11:50 AM Clinic Appointment (158 Rideau) & Room Viewings",
      keyMilestone: "Toe treated at Downtown Urgent Care (11:50 AM) + 3 room walkthroughs in Sandy Hill",
      pathCoords: [
        [45.4251, -75.6892], // Basecamp
        [45.4268, -75.6902], // Downtown Urgent Care (158 Rideau St @ 11:50 AM)
        [45.4258, -75.6925], // Shoppers Drug Mart (Rideau Centre)
        [45.4230, -75.6790], // Somerset St E Viewings
        [45.4180, -75.6940], // Centretown Viewings
        [45.4251, -75.6892]  // Basecamp Return
      ],
      schedule: [
        {
          id: "d2-1",
          time: "10:45 AM – 11:30 AM",
          phase: "Wakeup, Hydration & Clinic Departure",
          locationName: "Basecamp (75 Nicholas St)",
          coords: [45.4251, -75.6892],
          mission: "Wake up, shower, drink 500ml water, grab health card/ID. Check incoming replies from your 15 landlord messages.",
          whoToTalkTo: "Landlord Replies",
          scriptTitle: "Quick Confirmation",
          scriptText: "Confirm afternoon walkthrough times for 1:30 PM, 2:30 PM, and 3:30 PM.",
          badgeColor: "#06b6d4",
          actionTag: "Morning Prep"
        },
        {
          id: "d2-2",
          time: "11:35 AM – 12:45 PM",
          phase: "🏥 APPOINTMENT: Downtown Urgent Care (11:50 AM)",
          locationName: "Downtown Urgent Care (158 Rideau St)",
          coords: [45.4268, -75.6902],
          mission: "Walk 2 minutes up Nicholas/Waller to 158 Rideau St. Check in at 11:35 AM for your 11:50 AM appointment. Get infected toe nail examined, treated, and get antibiotic prescription.",
          whoToTalkTo: "Clinic Receptionist & Physician",
          scriptTitle: "Appointment Check-in Script",
          scriptText: "Good morning! I'm Jordan, checking in for my 11:50 AM appointment for an infected toe nail. Here is my health card / ID.",
          badgeColor: "#ef4444",
          actionTag: "Confirmed Clinic"
        },
        {
          id: "d2-3",
          time: "12:45 PM – 01:30 PM",
          phase: "Rx Fill & Shawarma Recovery Lunch",
          locationName: "Shoppers Drug Mart & 3 Brothers Shawarma",
          coords: [45.4258, -75.6925],
          mission: "Fill antibiotic prescription at Shoppers. Grab high-protein lunch at 3 Brothers Shawarma to fuel up for afternoon room viewings.",
          whoToTalkTo: "Pharmacist",
          scriptTitle: "Pharmacy Script",
          scriptText: "Hi! Dropping off this antibiotic prescription from Downtown Urgent Care. Also grabbing a pack of sterile non-stick gauze.",
          badgeColor: "#06b6d4",
          actionTag: "Rx & Fuel"
        },
        {
          id: "d2-4",
          time: "01:30 PM – 05:30 PM",
          phase: "Sandy Hill & Centretown Room Viewings (3 Stops)",
          locationName: "Sandy Hill (Somerset E / Nelson / Chapel)",
          coords: [45.4230, -75.6790],
          mission: "Attend 3 in-person room walkthroughs. Inspect: Wi-Fi signal, room locks, kitchen cleanliness, noise level, and outdoor smoking patio.",
          whoToTalkTo: "Landlords & Current Housemates",
          scriptTitle: "In-Person Viewing Script",
          scriptText: "The room looks great. Are all utilities and high-speed internet included in the $850? Also, just confirming outdoor smoking on the back patio is fine? If I apply today with first and last month's rent, could I move in this Saturday, Sept 5th?",
          badgeColor: "#10b981",
          actionTag: "Room Walkthrough"
        },
        {
          id: "d2-5",
          time: "06:30 PM – 09:30 PM",
          phase: "Lease Review & Backup Applications",
          locationName: "Basecamp Lounge",
          coords: [45.4251, -75.6892],
          mission: "Rank today's 3 rooms. Send deposit commitment to top choice.",
          whoToTalkTo: "Top Landlord Choice",
          scriptTitle: "Deposit Commitment Script",
          scriptText: "Hi! I really liked the room on [Street]. I'm ready to e-transfer the standard deposit and sign the Ontario Standard Form Lease tonight to secure move-in for this weekend.",
          badgeColor: "#f59e0b",
          actionTag: "Lease Prep"
        }
      ]
    },

    // --- DAY 3 (FRIDAY, SEPT 4): LEASE SIGN & DEPOSIT LOCK ---
    {
      dayNum: 3,
      dayLabel: "Day 3 (Fri)",
      theme: "Secure Shelter: Sign Lease & Pay Deposit",
      keyMilestone: "CRITICAL: Lock down your room & sign lease today! Move-in scheduled for tomorrow.",
      pathCoords: [
        [45.4251, -75.6892], // Basecamp
        [45.4190, -75.6980], // Centretown (Bank & Metcalfe)
        [45.4230, -75.6790], // Sandy Hill Landlord Office
        [45.4251, -75.6892]  // Basecamp Return
      ],
      schedule: [
        {
          id: "d3-1",
          time: "09:00 AM – 12:00 PM",
          phase: "Final Room Walkthrough & Decision",
          locationName: "Top Choice Room (Sandy Hill / Centretown)",
          coords: [45.4230, -75.6790],
          mission: "Walk through top room choice. Verify landlord is legitimate (matches property ownership / building management).",
          whoToTalkTo: "Landlord / Primary Leaseholder",
          scriptTitle: "Standard Lease Verification",
          scriptText: "I'd love to confirm we're using the standard Ontario Form of Lease. I have first and last month's rent ready for transfer upon lease signing.",
          badgeColor: "#10b981",
          actionTag: "Lock Shelter"
        },
        {
          id: "d3-2",
          time: "01:00 PM – 04:00 PM",
          phase: "Sign Ontario Standard Lease & Pay Deposit",
          locationName: "Basecamp / Landlord Location",
          coords: [45.4251, -75.6892],
          mission: "Sign lease agreement. Transfer first and last month deposit ($1,600). Receive keys / set key handover time for Saturday morning.",
          whoToTalkTo: "Landlord",
          scriptTitle: "Key Handover Script",
          scriptText: "Deposit has been sent! What time tomorrow morning can I meet you to collect keys and move my bags in?",
          badgeColor: "#06b6d4",
          actionTag: "Sign & Secure"
        },
        {
          id: "d3-3",
          time: "05:00 PM – 09:00 PM",
          phase: "Celebrate Housing & Pack Bags at Basecamp",
          locationName: "Jail Basecamp (75 Nicholas St)",
          coords: [45.4251, -75.6892],
          mission: "Housing is locked down! Pack bags, inform hostel front desk of Saturday checkout, and do 2 hours of AI tasks to replenish buffer.",
          whoToTalkTo: "Hostel Reception",
          scriptTitle: "Hostel Checkout Notice",
          scriptText: "Hi, just letting you know I will be checking out tomorrow (Saturday) morning by 11:00 AM. Thank you!",
          badgeColor: "#3b82f6",
          actionTag: "Checkout Prep"
        }
      ]
    },

    // --- DAY 4 (SATURDAY, SEPT 5): MOVE-IN DAY ---
    {
      dayNum: 4,
      dayLabel: "Day 4 (Sat)",
      theme: "Move-In Day: Stop Daily Hostel Bleed",
      keyMilestone: "SHELTER ACHIEVED! Move bags into permanent room ($800/mo vs $45/night)",
      pathCoords: [
        [45.4251, -75.6892], // Basecamp Checkout
        [45.4230, -75.6790], // Move to Sandy Hill Room
        [45.4270, -75.6850], // Loblaws / Giant Tiger Grocery Run
        [45.4230, -75.6790]  // New Permanent Home
      ],
      schedule: [
        {
          id: "d4-1",
          time: "09:30 AM – 11:00 AM",
          phase: "Hostel Checkout & Key Collection",
          locationName: "75 Nicholas St ➔ New Room",
          coords: [45.4251, -75.6892],
          mission: "Check out of Saintlo Jail Hostel. Walk bags to your new room in Sandy Hill/Centretown. Collect keys from landlord.",
          whoToTalkTo: "Landlord / Housemates",
          scriptTitle: "Move-In Greeting",
          scriptText: "Hey everyone! I'm Jordan, just moving my bags into room #2. Really excited to be here!",
          badgeColor: "#10b981",
          actionTag: "Move-In"
        },
        {
          id: "d4-2",
          time: "12:00 PM – 03:00 PM",
          phase: "Room Setup & Gigabit Wi-Fi Test",
          locationName: "New Room (Permanent Base)",
          coords: [45.4230, -75.6790],
          mission: "Unpack, set up desk, connect laptop to Bell Fibe Wi-Fi, test audio/camera with new earphones.",
          whoToTalkTo: "Housemates (Wi-Fi password & kitchen shelf)",
          scriptTitle: "Housemate Kitchen Script",
          scriptText: "Hey, which shelf in the fridge and pantry is free for me to use? Also, where do we keep recycling?",
          badgeColor: "#06b6d4",
          actionTag: "Setup Home"
        },
        {
          id: "d4-3",
          time: "04:00 PM – 07:00 PM",
          phase: "🥗 Master $50 Grocery Run (1-Week Staples)",
          locationName: "Giant Tiger (98 George) / Loblaws (Rideau)",
          coords: [45.4270, -75.6850],
          mission: "Buy 1 week of performance staples: eggs, oats, peanut butter, chicken breast, sweet potatoes, broccoli, bananas. Keep grocery total under $50.",
          whoToTalkTo: "Cashier",
          scriptTitle: "Budget Grocery Strategy",
          scriptText: "Stick strictly to staple whole foods to keep weekly food spend under $40–$50.",
          badgeColor: "#f59e0b",
          actionTag: "Budget Fuel"
        }
      ]
    },

    // --- DAY 5 (SUNDAY, SEPT 6): SETTLE & AI INCOME SPRINT ---
    {
      dayNum: 5,
      dayLabel: "Day 5 (Sun)",
      theme: "Permanent Base Settled & AI Income Sprint",
      keyMilestone: "Complete 5 hours of remote AI tasks ($125–$200 USD earned from home desk)",
      pathCoords: [
        [45.4230, -75.6790], // Home Desk
        [45.4260, -75.6750], // Strathcona Park Walk
        [45.4230, -75.6790]  // Home Desk
      ],
      schedule: [
        {
          id: "d5-1",
          time: "09:00 AM – 02:00 PM",
          phase: "5-Hour Remote AI Task Sprint",
          locationName: "New Room Desk",
          coords: [45.4230, -75.6790],
          mission: "Work 5 focused hours on DataAnnotation / Outlier. Payout target: $125–$200 USD ($170–$270 CAD) earned directly from your room.",
          whoToTalkTo: "AI Model Evaluation Queue",
          scriptTitle: "Deep Tasking",
          scriptText: "Maintain deep focus in 90-minute blocks with short stretch breaks.",
          badgeColor: "#10b981",
          actionTag: "Cash Sprint"
        },
        {
          id: "d5-2",
          time: "03:00 PM – 05:00 PM",
          phase: "Decompress Walk in Strathcona Park",
          locationName: "Strathcona Park (Rideau River)",
          coords: [45.4260, -75.6750],
          mission: "Walk along the Rideau River path in Sandy Hill. Celebrate having a secure roof over your head and steady runway!",
          whoToTalkTo: "Local park walkers",
          scriptTitle: "Mental Reset",
          scriptText: "Take in the fresh air and river view. You successfully transitioned from hostel to permanent home in 4 days.",
          badgeColor: "#8b5cf6",
          actionTag: "Mental Reset"
        }
      ]
    },

    // --- DAY 6 (MONDAY, SEPT 7 - LABOUR DAY HOLIDAY): LOW-BURN STRATEGY ---
    {
      dayNum: 6,
      dayLabel: "Day 6 (Mon)",
      theme: "Labour Day: Low-Burn & Portfolio Prep",
      keyMilestone: "Polish 2 live AI demo links to launch Tuesday tech blitz",
      pathCoords: [
        [45.4230, -75.6790], // Home
        [45.4255, -75.6885], // The Loft / ByWard
        [45.4230, -75.6790]  // Home
      ],
      schedule: [
        {
          id: "d6-1",
          time: "10:00 AM – 02:00 PM",
          phase: "AI Demo Polishing & GitHub README Cleanup",
          locationName: "Home Desk",
          coords: [45.4230, -75.6790],
          mission: "Clean up live deployment URLs for your AI tools (Vercel/Netlify), write crisp 3-sentence descriptions for Tuesday pitches.",
          whoToTalkTo: "Independent Building",
          scriptTitle: "Portfolio Readiness",
          scriptText: "Ensure all demo links load fast on mobile and desktop with working live features.",
          badgeColor: "#06b6d4",
          actionTag: "Tech Build"
        },
        {
          id: "d6-2",
          time: "03:00 PM – 07:00 PM",
          phase: "Holiday Social Meetup or Remote Tasks",
          locationName: "The Loft / Rideau Canal",
          coords: [45.4255, -75.6885],
          mission: "Casual afternoon gaming at The Loft or additional 2 hours of remote AI tasks to stack savings.",
          whoToTalkTo: "Local Gamers / Community",
          scriptTitle: "Casual Networking",
          scriptText: "Hey! What game are you playing? Mind if I jump in for the next round?",
          badgeColor: "#f43f5e",
          actionTag: "Social"
        }
      ]
    },

    // --- DAY 7 (TUESDAY, SEPT 8): TECH BLITZ & FIRST BUSINESS WEEK ---
    {
      dayNum: 7,
      dayLabel: "Day 7 (Tue)",
      theme: "Full Business Week Tech & Staffing Blitz",
      keyMilestone: "Pitch 10 Ottawa tech founders & check in with Altis Recruitment with shelter 100% locked",
      pathCoords: [
        [45.4230, -75.6790], // Home
        [45.4095, -75.7230], // Bayview Yards (Invest Ottawa)
        [45.4210, -75.6980], // Altis Recruitment Downtown
        [45.4230, -75.6790]  // Home
      ],
      schedule: [
        {
          id: "d7-1",
          time: "08:30 AM – 12:00 PM",
          phase: "Bayview Yards Startup Blitz",
          locationName: "Bayview Yards (7 Bayview Station Rd)",
          coords: [45.4095, -75.7230],
          mission: "Take Line 1 LRT to Bayview. Work from the open startup cafe. Pitch 5 early-stage founders on AI workflow automation contracting.",
          whoToTalkTo: "Invest Ottawa Startup Founders",
          scriptTitle: "Bayview Founder Pitch",
          scriptText: "Hi! I build custom AI workflow automations and rapid prototypes with modern LLM tools. Are you looking for any fast technical support or internal tool prototyping?",
          badgeColor: "#06b6d4",
          actionTag: "Tech Blitz"
        },
        {
          id: "d7-2",
          time: "01:30 PM – 04:30 PM",
          phase: "Altis / ExcelHR Downtown Check-in",
          locationName: "Altis Recruitment (100 Queen St)",
          coords: [45.4210, -75.6980],
          mission: "Follow up with government and corporate staffing recruiters on entry-level tech and data contract roles.",
          whoToTalkTo: "Staffing Recruiter",
          scriptTitle: "Recruiter In-Person Follow-up",
          scriptText: "Hi, I submitted my application for tech/data contracting. I'm settled permanently in Sandy Hill with full-time availability and ready for immediate placement.",
          badgeColor: "#10b981",
          actionTag: "Staffing Blitz"
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
