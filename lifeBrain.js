/**
 * LifeBrain AI: Autonomous Inference, Dynamic Memory & NLP Entity Extraction Engine
 * Self-evolving personal life state store with localStorage persistence.
 */

class LifeBrainEngine {
  constructor() {
    this.STORAGE_KEY = 'lifeguide_brain_state_v1';
    this.state = this.loadState();
    this.listeners = [];
  }

  // Initial Default State
  getDefaultState() {
    return {
      version: '1.0.0',
      user: {
        name: 'Jordan',
        role: 'AI Builder & Tech Operator',
        basecamp: 'Saintlo Ottawa Jail Hostel (75 Nicholas St)',
        coords: [45.4251, -75.6892],
        sleepPreference: 'Nocturnal Operator (Sleeps during quiet day hours)',
        smokerStatus: 'Smoker (Strictly Outdoors)'
      },
      finances: {
        liquidDebit: 3000.00,       // Starts at $3,000 CAD
        creditAvailable: 2500.00,
        cashReserveHome: 3000.00,
        guaranteedMonthlyIncome: 1300.00,
        targetRent: 800.00,
        expenses: [
          { id: 'exp-init-1', label: 'Dollarama Earphones', amount: 4.50, category: 'tech', date: new Date().toISOString() }
        ]
      },
      health: {
        toeCondition: 'Infected Toe Nail (Appt Thu Sept 3 @ 11:50 AM)',
        clinicAppointment: {
          venue: 'Downtown Urgent Care - Family Practice & Walk-in Clinic',
          address: '158 Rideau St, Ottawa, ON',
          phone: '+1 (613) 482-9051',
          dateTime: 'Thursday, Sept 3 @ 11:50 AM (Check-in 11:35 AM)',
          coords: [45.4268, -75.6902],
          status: 'confirmed'
        },
        painLevel: 4, // 1-10
        totalWalkedMeters: 0,
        lastRestTime: null,
        logs: [
          { timestamp: new Date().toISOString(), note: 'Confirmed 11:50 AM appointment at 158 Rideau St. Keeping foot elevated when resting.' }
        ]
      },
      housingPipeline: [
        {
          id: 'house-1',
          title: 'Sandy Hill Victorian Student/Young Pro Room',
          address: 'Somerset St E / Nelson St, Sandy Hill',
          price: 850,
          coords: [45.4230, -75.6790],
          status: 'Inquiry Sent', // 'Inquiry Sent', 'Viewing Set', 'Top Choice', 'Lease Signed'
          landlordContact: 'Via PadMapper',
          notes: 'Outdoor patio for smoking, Bell Fibe internet included, 600m from hostel.',
          tags: ['Sandy Hill', 'Patio', 'Utilities Inc']
        },
        {
          id: 'house-2',
          title: 'Centretown Brick Walkup Room',
          address: 'MacLaren St / Metcalfe St, Centretown',
          price: 800,
          coords: [45.4180, -75.6940],
          status: 'Inquiry Sent',
          landlordContact: 'Via FB Housing',
          notes: 'Clean, quiet, close to Bank St and Elgin St.',
          tags: ['Centretown', 'Quiet', 'Budget']
        }
      ],
      notepad: {
        content: `# 📝 Jordan's Quick Scratchpad & Mission Notes
• Hostel Wi-Fi: Saintlo-Guest / Password: at reception
• Thu 11:35 AM: Walk to 158 Rideau St (Downtown Urgent Care) for 11:50 AM toe appt
• Move-in Target: Sunday Sept 6 ($800/mo budget)
• Landlord Questions:
  - Are all utilities + gigabit Wi-Fi included?
  - Is outdoor smoking on the back patio fine?
  - Standard Ontario Lease Form ready?
`,
        lastSaved: new Date().toISOString()
      },
      spatialDrawings: [], // User freehand vector strokes & circles
      customPins: []      // User dropped map markers
    };
  }

  // Load state from localStorage with fallback to default
  loadState() {
    try {
      const saved = localStorage.getItem(this.STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return { ...this.getDefaultState(), ...parsed };
      }
    } catch (e) {
      console.warn('LifeBrain: Failed to load state from localStorage', e);
    }
    return this.getDefaultState();
  }

  // Persist state to localStorage
  saveState() {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.state));
      this.notifyListeners();
    } catch (e) {
      console.error('LifeBrain: Failed to save state to localStorage', e);
    }
  }

  // Event Subscription
  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  notifyListeners() {
    this.listeners.forEach(fn => {
      try { fn(this.state); } catch (err) { console.error('LifeBrain listener error:', err); }
    });
  }

  // --- NLP ENTITY EXTRACTION & OMNI-STREAM PARSER ---
  parseOmniInput(rawText) {
    if (!rawText || typeof rawText !== 'string') return null;
    const text = rawText.trim();
    const lower = text.toLowerCase();
    const result = {
      type: 'general_note',
      rawText: text,
      message: '',
      actionTaken: false
    };

    // 1. FINANCIAL / EXPENSE PARSER
    // Patterns: "spent 15 on food", "bought 4.50 coffee", "paid 20 for taxi", "$14.50 lunch"
    const expenseRegex = /(?:spent|paid|bought|cost|\$)\s*(\$?\d+(?:\.\d{1,2})?)\s*(?:on|for|at)?\s*(.*)/i;
    const matchExpense = text.match(expenseRegex);

    if (matchExpense) {
      const amountStr = matchExpense[1].replace('$', '');
      const amount = parseFloat(amountStr);
      let label = matchExpense[2] || 'Logged Expense';
      label = label.trim() || 'Direct Expense';

      if (!isNaN(amount) && amount > 0) {
        this.addExpense(label, amount);
        result.type = 'expense';
        result.message = `💰 Logged -$${amount.toFixed(2)} for "${label}". Liquid balance: $${this.state.finances.liquidDebit.toFixed(2)}`;
        result.actionTaken = true;
        return result;
      }
    }

    // 2. HOUSING LEAD PARSER
    // Patterns: "found room on Nelson for 820", "room on Chapel 800", "housing lead: 900 Somerset"
    const housingRegex = /(?:room|house|apt|apartment|place|listing|found room)\s*(?:on|at|in)?\s*([a-zA-Z0-9\s]+?)\s*(?:for|\$|at|\@)?\s*(\$?\d{3,4})?(.*)/i;
    const matchHousing = text.match(housingRegex);

    if (matchHousing && (lower.includes('room') || lower.includes('house') || lower.includes('listing') || lower.includes('rent'))) {
      const location = matchHousing[1].trim();
      const priceStr = (matchHousing[2] || '').replace('$', '');
      const price = parseFloat(priceStr) || 850;
      const extraNotes = (matchHousing[3] || '').trim();

      // Estimate coordinates based on known Ottawa street landmarks
      const coords = this.inferStreetCoords(location);

      const newLead = {
        id: 'house-' + Date.now(),
        title: `Room on ${location}`,
        address: `${location}, Ottawa, ON`,
        price: price,
        coords: coords,
        status: 'Inquiry Sent',
        landlordContact: 'Direct Log',
        notes: extraNotes || 'Logged via Omni-Stream',
        tags: ['New Lead', `$${price}/mo`]
      };

      this.state.housingPipeline.unshift(newLead);
      this.saveState();

      result.type = 'housing';
      result.message = `🏠 Added new housing lead on "${location}" ($${price}/mo) to your map & pipeline!`;
      result.lead = newLead;
      result.actionTaken = true;
      return result;
    }

    // 3. HEALTH & TOE STATUS PARSER
    if (lower.includes('toe') || lower.includes('pain') || lower.includes('swelling') || lower.includes('clinic') || lower.includes('hurt') || lower.includes('healed') || lower.includes('better')) {
      let painLevel = this.state.health.painLevel;
      const painMatch = text.match(/(\d+)\s*(?:\/|\s*out of\s*)?10/);
      if (painMatch) {
        painLevel = parseInt(painMatch[1]);
      } else if (lower.includes('better') || lower.includes('less')) {
        painLevel = Math.max(1, painLevel - 1);
      } else if (lower.includes('worse') || lower.includes('hurts') || lower.includes('throbbing')) {
        painLevel = Math.min(10, painLevel + 1);
      }

      this.state.health.painLevel = painLevel;
      this.state.health.logs.unshift({
        timestamp: new Date().toISOString(),
        note: text
      });
      this.saveState();

      result.type = 'health';
      result.message = `🦶 Health Logged: "${text}". Pain Index: ${painLevel}/10. (Appt: Thu 11:50 AM @ 158 Rideau)`;
      result.actionTaken = true;
      return result;
    }

    // 4. MAP CUSTOM PIN DROPPER
    // Patterns: "pin: dispensary on rideau", "mark spot: quiet cafe on elgin", "save: landmark at..."
    if (lower.startsWith('pin:') || lower.startsWith('mark:') || lower.startsWith('spot:') || lower.startsWith('save:')) {
      const pinLabel = text.replace(/^(pin:|mark:|spot:|save:)/i, '').trim();
      const userCoords = window.state && window.state.userCoords ? window.state.userCoords : this.state.user.coords;
      
      const newPin = {
        id: 'pin-' + Date.now(),
        label: pinLabel,
        coords: [userCoords[0] + (Math.random() - 0.5) * 0.002, userCoords[1] + (Math.random() - 0.5) * 0.002],
        timestamp: new Date().toISOString()
      };

      this.state.customPins.push(newPin);
      this.saveState();

      result.type = 'custom_pin';
      result.message = `📍 Dropped custom marker: "${pinLabel}" on your live map!`;
      result.pin = newPin;
      result.actionTaken = true;
      return result;
    }

    // 5. DEFAULT: APPEND TO NOTEPAD
    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    this.state.notepad.content += `\n• [${timestamp}] ${text}`;
    this.state.notepad.lastSaved = new Date().toISOString();
    this.saveState();

    result.type = 'notepad';
    result.message = `📝 Note saved to Scratchpad: "${text}"`;
    result.actionTaken = true;
    return result;
  }

  // Spatial inference helper for Ottawa streets
  inferStreetCoords(streetName) {
    const s = streetName.toLowerCase();
    if (s.includes('nelson')) return [45.4245, -75.6810];
    if (s.includes('chapel')) return [45.4260, -75.6780];
    if (s.includes('somerset')) return [45.4230, -75.6790];
    if (s.includes('wilbrod')) return [45.4265, -75.6790];
    if (s.includes('maclaren')) return [45.4180, -75.6940];
    if (s.includes('elgin')) return [45.4160, -75.6900];
    if (s.includes('rideau')) return [45.4270, -75.6880];
    if (s.includes('bank')) return [45.4150, -75.6950];
    if (s.includes('daly') || s.includes('besserer')) return [45.4260, -75.6860];
    // Default to Sandy Hill area near basecamp
    return [45.4240 + (Math.random() - 0.5) * 0.005, -75.6830 + (Math.random() - 0.5) * 0.005];
  }

  // Financial methods
  addExpense(label, amount) {
    this.state.finances.liquidDebit = Math.max(0, this.state.finances.liquidDebit - amount);
    this.state.finances.expenses.unshift({
      id: 'exp-' + Date.now(),
      label: label,
      amount: amount,
      date: new Date().toISOString()
    });
    this.saveState();
  }

  // Housing pipeline methods
  updateLeadStatus(leadId, newStatus) {
    const lead = this.state.housingPipeline.find(h => h.id === leadId);
    if (lead) {
      lead.status = newStatus;
      this.saveState();
    }
  }

  addHousingLead(lead) {
    this.state.housingPipeline.unshift(lead);
    this.saveState();
  }

  // Notepad methods
  saveNotepad(content) {
    this.state.notepad.content = content;
    this.state.notepad.lastSaved = new Date().toISOString();
    this.saveState();
  }

  // Drawing methods
  saveDrawings(drawings) {
    this.state.spatialDrawings = drawings;
    this.saveState();
  }

  clearDrawings() {
    this.state.spatialDrawings = [];
    this.saveState();
  }

  // Next Best Action Inference
  getNextBestAction() {
    const hour = new Date().getHours();
    const hasClinicTomorrow = true; // Thursday Sept 3 @ 11:50 AM

    if (hour >= 20 || hour < 4) {
      return {
        tag: '🌙 Nocturnal Focus & Fuel',
        title: 'Bunker Chill: Hot Shawarma & AI Tasking / Landlord Outreach',
        actionText: 'Elevate your toe in the quiet hostel lounge or grab a 24/7 booth at Elgin Street Diner. Queue 10-15 room inquiries for Sandy Hill landlords.',
        btnLabel: 'View 24/7 Map & Outposts',
        script: 'Hi! I saw your room listing in Sandy Hill and have first/last rent ready immediately. Can I view it Thursday afternoon? - Jordan',
        urgencyColor: '#06b6d4'
      };
    } else if (hour >= 4 && hour < 10) {
      return {
        tag: '😴 Quiet Day Sleep',
        title: 'Sleep in Quiet Empty Dorm (Until 10:45 AM)',
        actionText: 'Hostel dorms are empty and dead quiet right now. Elevate your foot, hydrate, and wake up at 10:45 AM for your clinic appointment.',
        btnLabel: 'Set Alarm 10:45 AM',
        script: 'Resting foot for 11:50 AM clinic appointment at 158 Rideau.',
        urgencyColor: '#8b5cf6'
      };
    } else if (hour >= 10 && hour <= 12) {
      return {
        tag: '🏥 URGENT: Clinic Appointment',
        title: 'Downtown Urgent Care (158 Rideau St)',
        actionText: 'Appointment is at 11:50 AM. Check in at reception at 11:35 AM with photo ID / health card to get your toe treated and antibiotics prescribed.',
        btnLabel: 'Open Clinic Route (220m)',
        script: "Good morning! I'm Jordan, checking in for my 11:50 AM appointment for an infected toe nail.",
        urgencyColor: '#ef4444'
      };
    } else {
      return {
        tag: '🏠 Afternoon Housing Viewings',
        title: 'Attend In-Person Room Walkthroughs',
        actionText: 'Walk through top 3 room choices in Sandy Hill / Centretown. Inspect Wi-Fi, locks, and confirm outdoor smoking on patio.',
        btnLabel: 'View Housing Deck',
        script: 'The room looks great! Are all utilities included in the $800? I can transfer first/last deposit tonight.',
        urgencyColor: '#10b981'
      };
    }
  }
}

// Global Singleton Instance
if (typeof window !== 'undefined') {
  window.LifeBrain = new LifeBrainEngine();
}
