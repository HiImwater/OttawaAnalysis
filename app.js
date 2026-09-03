/**
 * LifeGuide AI: Controller & Interactive Spatial Canvas Engine
 * Unified Single-Screen Life Cockpit with Freehand Map Drawing, Omni-Stream NLP & State Sync
 */

(function () {
  'use strict';

  // Global UI & Map State
  const state = {
    leafletMap: null,
    currentDay: 1,
    activeFilter: 'battleplan',
    activeDeck: 'copilot',
    
    // GPS & Compass State
    userCoords: null,
    userHeading: 0,
    userGpsMarker: null,
    userGpsCircle: null,
    dynamicUserRouteLine: null,
    arrivedVenueId: null,
    totalDistanceWalkedMeters: 0,
    lastPosition: null,

    // Map Layers & Markers
    markersMap: {},
    routePolyline: null,
    routeGlowPolyline: null,
    customPinMarkers: [],

    // Freehand Drawing Engine State
    drawingMode: null, // null | 'pen' | 'circle' | 'pin'
    activeDrawColor: '#06b6d4',
    isDrawing: false,
    currentDrawingPoints: [],
    tempPolyline: null,
    drawnLayers: []
  };

  window.state = state;

  // --- INITIALIZATION ON DOM READY ---
  document.addEventListener('DOMContentLoaded', () => {
    initClock();
    initLeafletMap();
    initLifeBrainSync();
    initOmniStream();
    initMapDrawingEngine();
    initDeckNavigation();
    initManualNotepad();
    initHousingPipeline();
    initRunwayDeck();
    initChronoNutritionDeck();
    initDirectionalGps();
    initModals();

    // Render Initial Day
    renderActiveDay(1);
    showToast("🧠 LifeGuide AI Cockpit Initialized!");
  });

  // 1. LIVE CLOCK (OTTAWA TIME)
  function initClock() {
    const clockEl = document.getElementById('liveClockText');
    const update = () => {
      const now = new Date();
      if (clockEl) {
        clockEl.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      }
    };
    update();
    setInterval(update, 10000);
  }

  // 2. LEAFLET MAP INITIALIZATION (PERSISTENT CORE)
  function initLeafletMap() {
    const mapContainer = document.getElementById('map-container');
    if (!mapContainer) return;

    // Center on Saintlo Ottawa Jail Hostel (75 Nicholas St)
    const basecampCoords = [45.4251, -75.6892];
    state.leafletMap = L.map('map-container', {
      center: basecampCoords,
      zoom: 15,
      zoomControl: false,
      attributionControl: false
    });

    window.leafletMap = state.leafletMap;

    // Esri World Dark Gray Canvas Base (Zero API Keys, Pure Native Dark Cartography)
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
      maxZoom: 16,
      attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ'
    }).addTo(state.leafletMap);

    // Esri World Dark Gray Reference Overlay (Crisp Street Labels & Boundaries)
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Reference/MapServer/tile/{z}/{y}/{x}', {
      maxZoom: 16
    }).addTo(state.leafletMap);

    // Zoom Controls at Top Left
    L.control.zoom({ position: 'topleft' }).addTo(state.leafletMap);

    // Basecamp Pulse Marker (75 Nicholas St)
    const jailIcon = L.divIcon({
      className: 'jail-marker-wrapper',
      html: `
        <div style="position: relative; width: 34px; height: 34px; display: flex; align-items: center; justify-content: center;">
          <div style="position: absolute; inset: 0; border-radius: 50%; background: rgba(245, 158, 11, 0.4); animation: pulse 2s infinite;"></div>
          <div style="width: 24px; height: 24px; border-radius: 50%; background: #f59e0b; border: 2px solid #ffffff; display: flex; align-items: center; justify-content: center; font-size: 12px; box-shadow: 0 0 14px #f59e0b;">
            🏰
          </div>
        </div>
      `,
      iconSize: [34, 34],
      iconAnchor: [17, 17]
    });

    const jailMarker = L.marker(basecampCoords, { icon: jailIcon }).addTo(state.leafletMap);
    jailMarker.bindPopup(`
      <div style="padding: 4px; font-family: var(--font-sans);">
        <h4 style="color: #f59e0b; font-size: 0.95rem; margin-bottom: 2px;">🏰 SAINTLO JAIL BASECAMP</h4>
        <p style="font-size: 0.8rem; color: #cbd5e1; margin-bottom: 4px;">75 Nicholas St • 1862 Carleton County Gaol</p>
        <div style="font-size: 0.72rem; color: #06b6d4;">24/7 Reception: +1 (613) 235-2595</div>
      </div>
    `);

    // Load persisted user drawings & custom pins
    loadSavedSpatialDrawings();
    loadSavedCustomPins();
  }

  // 3. LIFEBRAIN SYNC: Update HUD whenever state mutates
  function initLifeBrainSync() {
    if (!window.LifeBrain) return;

    // Subscribe to state changes
    window.LifeBrain.subscribe((brainState) => {
      renderHeaderStats(brainState);
      renderNextBestAction(brainState);
      renderHousingPipeline(brainState);
      renderRunwayStats(brainState);
      renderExpensesFeed(brainState);
    });

    // Initial render
    renderHeaderStats(window.LifeBrain.state);
    renderNextBestAction(window.LifeBrain.state);
  }

  function renderHeaderStats(brainState) {
    const liquidEl = document.getElementById('headerLiquidVal');
    const deckLiquidEl = document.getElementById('deckLiquidVal');
    const clinicEl = document.getElementById('headerClinicVal');

    const formattedLiquid = `$${brainState.finances.liquidDebit.toFixed(2)}`;
    if (liquidEl) liquidEl.textContent = formattedLiquid;
    if (deckLiquidEl) deckLiquidEl.textContent = formattedLiquid;
    if (clinicEl) clinicEl.textContent = "Thu 11:50 AM";
  }

  function renderNextBestAction(brainState) {
    const nextAction = window.LifeBrain.getNextBestAction();
    const tagEl = document.getElementById('nextActionTag');
    const titleEl = document.getElementById('nextActionTitle');
    const descEl = document.getElementById('nextActionDesc');
    const scriptEl = document.getElementById('nextActionScriptText');

    if (tagEl) {
      tagEl.textContent = nextAction.tag;
      tagEl.style.borderColor = nextAction.urgencyColor;
      tagEl.style.color = nextAction.urgencyColor;
    }
    if (titleEl) titleEl.textContent = nextAction.title;
    if (descEl) descEl.textContent = nextAction.actionText;
    if (scriptEl) scriptEl.textContent = `"${nextAction.script}"`;
  }

  // 4. OMNI-INPUT STREAM CONTROLLER ("DO EVERYTHING" BAR)
  function initOmniStream() {
    const input = document.getElementById('omniInputField');
    const submitBtn = document.getElementById('omniSubmitBtn');
    const quickChips = document.querySelectorAll('.quick-tag-chip');

    const handleStreamSubmit = () => {
      const text = input.value.trim();
      if (!text) return;

      const result = window.LifeBrain.parseOmniInput(text);
      if (result && result.message) {
        showToast(result.message);
        input.value = '';

        // If a new pin or housing lead was created, animate map to it
        if (result.type === 'housing' && result.lead) {
          addHousingMarkerToMap(result.lead);
          state.leafletMap.flyTo(result.lead.coords, 16);
        } else if (result.type === 'custom_pin' && result.pin) {
          addCustomPinToMap(result.pin);
          state.leafletMap.flyTo(result.pin.coords, 16);
        }
      }
    };

    if (submitBtn) submitBtn.addEventListener('click', handleStreamSubmit);
    if (input) {
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') handleStreamSubmit();
      });
    }

    // Quick Action Chips Click
    quickChips.forEach(chip => {
      chip.addEventListener('click', () => {
        const prefix = chip.getAttribute('data-prefix');
        if (input) {
          input.value = prefix;
          input.focus();
        }
      });
    });

    // Copy Next Best Action Script
    const copyScriptBtn = document.getElementById('copyNextActionScriptBtn');
    if (copyScriptBtn) {
      copyScriptBtn.addEventListener('click', () => {
        const scriptText = document.getElementById('nextActionScriptText')?.textContent?.replace(/^"|"$/g, '');
        if (scriptText) {
          navigator.clipboard.writeText(scriptText);
          showToast("📋 Script copied to clipboard!");
        }
      });
    }
  }

  // 5. MAP FREEHAND DRAWING & SPATIAL ANNOTATION SUITE
  function initMapDrawingEngine() {
    const penBtn = document.getElementById('drawPenBtn');
    const circleBtn = document.getElementById('drawCircleBtn');
    const pinBtn = document.getElementById('dropPinBtn');
    const clearBtn = document.getElementById('clearDrawingsBtn');
    const colorDots = document.querySelectorAll('.color-dot');
    const mapEl = document.getElementById('map-container');

    // Tool Toggles
    const setDrawingTool = (tool) => {
      if (state.drawingMode === tool) {
        state.drawingMode = null;
        [penBtn, circleBtn, pinBtn].forEach(b => b?.classList.remove('active'));
        if (state.leafletMap) state.leafletMap.dragging.enable();
        if (mapEl) mapEl.style.cursor = '';
        showToast("✋ Map Pan Mode");
      } else {
        state.drawingMode = tool;
        [penBtn, circleBtn, pinBtn].forEach(b => b?.classList.remove('active'));
        
        if (tool === 'pen') penBtn?.classList.add('active');
        if (tool === 'circle') circleBtn?.classList.add('active');
        if (tool === 'pin') pinBtn?.classList.add('active');

        if (state.leafletMap) state.leafletMap.dragging.disable();
        if (mapEl) mapEl.style.cursor = 'crosshair';
        showToast(`✏️ Drawing Tool: ${tool.toUpperCase()} Active`);
      }
    };

    if (penBtn) penBtn.addEventListener('click', () => setDrawingTool('pen'));
    if (circleBtn) circleBtn.addEventListener('click', () => setDrawingTool('circle'));
    if (pinBtn) pinBtn.addEventListener('click', () => setDrawingTool('pin'));

    // Color Selector
    colorDots.forEach(dot => {
      dot.addEventListener('click', () => {
        colorDots.forEach(d => d.classList.remove('active'));
        dot.classList.add('active');
        state.activeDrawColor = dot.getAttribute('data-color');
      });
    });

    // Clear Drawings
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        state.drawnLayers.forEach(layer => {
          if (state.leafletMap.hasLayer(layer)) layer.remove();
        });
        state.drawnLayers = [];
        window.LifeBrain.clearDrawings();
        showToast("🧹 Map drawings cleared!");
      });
    }

    // Leaflet Mouse / Touch Handlers for Freehand Drawing
    state.leafletMap.on('mousedown touchstart', (e) => {
      if (!state.drawingMode) return;

      const latlng = e.latlng;
      if (!latlng) return;

      if (state.drawingMode === 'pen') {
        state.isDrawing = true;
        state.currentDrawingPoints = [latlng];
        state.tempPolyline = L.polyline([latlng], {
          color: state.activeDrawColor,
          weight: 4,
          opacity: 0.9,
          className: 'user-drawn-glow'
        }).addTo(state.leafletMap);
      } else if (state.drawingMode === 'circle') {
        const circle = L.circle(latlng, {
          radius: 120,
          color: state.activeDrawColor,
          fillColor: state.activeDrawColor,
          fillOpacity: 0.15,
          weight: 2
        }).addTo(state.leafletMap);

        state.drawnLayers.push(circle);
        saveCurrentDrawings();
        showToast("⭕ Circled search zone added!");
      } else if (state.drawingMode === 'pin') {
        const label = prompt("Enter label for this custom map marker:", "Search Spot");
        if (label) {
          const customPin = {
            id: 'pin-' + Date.now(),
            label: label,
            coords: [latlng.lat, latlng.lng],
            timestamp: new Date().toISOString()
          };
          window.LifeBrain.state.customPins.push(customPin);
          window.LifeBrain.saveState();
          addCustomPinToMap(customPin);
          showToast(`📍 Marker "${label}" dropped!`);
        }
      }
    });

    state.leafletMap.on('mousemove touchmove', (e) => {
      if (!state.isDrawing || state.drawingMode !== 'pen' || !state.tempPolyline) return;
      const latlng = e.latlng;
      if (latlng) {
        state.currentDrawingPoints.push(latlng);
        state.tempPolyline.setLatLngs(state.currentDrawingPoints);
      }
    });

    state.leafletMap.on('mouseup touchend', () => {
      if (state.isDrawing && state.tempPolyline) {
        state.isDrawing = false;
        state.drawnLayers.push(state.tempPolyline);
        saveCurrentDrawings();
        state.tempPolyline = null;
        state.currentDrawingPoints = [];
      }
    });
  }

  function saveCurrentDrawings() {
    const serialized = state.drawnLayers.map(layer => {
      if (layer instanceof L.Polyline && !(layer instanceof L.Circle)) {
        return {
          type: 'polyline',
          latlngs: layer.getLatLngs().map(ll => [ll.lat, ll.lng]),
          color: layer.options.color
        };
      } else if (layer instanceof L.Circle) {
        return {
          type: 'circle',
          latlng: [layer.getLatLng().lat, layer.getLatLng().lng],
          radius: layer.getRadius(),
          color: layer.options.color
        };
      }
      return null;
    }).filter(Boolean);

    window.LifeBrain.saveDrawings(serialized);
  }

  function loadSavedSpatialDrawings() {
    const drawings = window.LifeBrain.state.spatialDrawings || [];
    drawings.forEach(d => {
      if (d.type === 'polyline') {
        const poly = L.polyline(d.latlngs, {
          color: d.color || '#06b6d4',
          weight: 4,
          opacity: 0.9,
          className: 'user-drawn-glow'
        }).addTo(state.leafletMap);
        state.drawnLayers.push(poly);
      } else if (d.type === 'circle') {
        const circle = L.circle(d.latlng, {
          radius: d.radius || 120,
          color: d.color || '#06b6d4',
          fillColor: d.color || '#06b6d4',
          fillOpacity: 0.15,
          weight: 2
        }).addTo(state.leafletMap);
        state.drawnLayers.push(circle);
      }
    });
  }

  function loadSavedCustomPins() {
    const pins = window.LifeBrain.state.customPins || [];
    pins.forEach(pin => addCustomPinToMap(pin));
  }

  function addCustomPinToMap(pin) {
    const pinIcon = L.divIcon({
      className: 'custom-pin-wrapper',
      html: `
        <div style="background: #07090e; border: 2px solid #3b82f6; border-radius: 50%; width: 28px; height: 28px; display: flex; align-items: center; justify-content: center; font-size: 13px; box-shadow: 0 0 12px #3b82f6;">
          📍
        </div>
      `,
      iconSize: [28, 28],
      iconAnchor: [14, 14]
    });

    const marker = L.marker(pin.coords, { icon: pinIcon }).addTo(state.leafletMap);
    marker.bindPopup(`
      <div style="padding: 4px; font-family: var(--font-sans);">
        <h4 style="color: #3b82f6; font-size: 0.9rem; margin-bottom: 2px;">📍 ${pin.label}</h4>
        <p style="font-size: 0.76rem; color: #94a3b8;">Custom user marked landmark</p>
      </div>
    `);
    state.customPinMarkers.push(marker);
  }

  // 6. DECK NAVIGATION TABS (Co-Pilot, Notepad, Housing, Runway, Nutrition, Plan)
  function initDeckNavigation() {
    const deckTabs = document.querySelectorAll('.deck-tab');
    const deckPanels = document.querySelectorAll('.deck-panel');

    deckTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const deckName = tab.getAttribute('data-deck');
        state.activeDeck = deckName;

        deckTabs.forEach(t => t.classList.remove('active'));
        deckPanels.forEach(p => p.classList.remove('active'));

        tab.classList.add('active');
        const targetPanel = document.getElementById(`deckPanel${deckName.charAt(0).toUpperCase() + deckName.slice(1)}`);
        if (targetPanel) targetPanel.classList.add('active');
      });
    });

    // Mobile View Bar Switcher
    const mobileNavBtns = document.querySelectorAll('.mobile-nav-btn');
    mobileNavBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const view = btn.getAttribute('data-view');
        if (!view) return;
        mobileNavBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const sidebar = document.getElementById('cockpitSidebar');
        const main = document.getElementById('cockpitMain');

        if (view === 'map') {
          if (sidebar) sidebar.style.display = 'none';
          if (main) main.style.display = 'flex';
          state.leafletMap.invalidateSize();
        } else if (view === 'deck') {
          if (sidebar) sidebar.style.display = 'flex';
          if (main) main.style.display = 'none';
        } else if (view === 'notes') {
          if (sidebar) sidebar.style.display = 'flex';
          if (main) main.style.display = 'none';
          // Activate notepad tab
          document.querySelector('.deck-tab[data-deck="notepad"]')?.click();
        }
      });
    });
  }

  // 7. MANUAL NOTEPAD & AUTO-SAVE
  function initManualNotepad() {
    const textarea = document.getElementById('manualNotepadTextarea');
    const saveBadge = document.getElementById('notepadSaveBadge');
    const copyBtn = document.getElementById('copyNotepadBtn');
    const clearBtn = document.getElementById('clearNotepadBtn');
    const insertBtns = document.querySelectorAll('.notepad-insert-btn');

    if (textarea && window.LifeBrain) {
      textarea.value = window.LifeBrain.state.notepad.content || '';

      // Debounced Auto-Save
      let timeout = null;
      textarea.addEventListener('input', () => {
        if (saveBadge) saveBadge.textContent = "⏳ Saving...";
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          window.LifeBrain.saveNotepad(textarea.value);
          if (saveBadge) saveBadge.textContent = "🟢 Auto-saved";
        }, 600);
      });
    }

    if (copyBtn && textarea) {
      copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(textarea.value);
        showToast("📋 Notepad copied to clipboard!");
      });
    }

    if (clearBtn && textarea) {
      clearBtn.addEventListener('click', () => {
        if (confirm("Clear all scratchpad notes?")) {
          textarea.value = '';
          window.LifeBrain.saveNotepad('');
          showToast("🧹 Notepad cleared.");
        }
      });
    }

    insertBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const template = btn.getAttribute('data-template');
        if (textarea && template) {
          textarea.value += '\n' + template.replace(/\\n/g, '\n');
          window.LifeBrain.saveNotepad(textarea.value);
          showToast("📝 Template inserted!");
        }
      });
    });
  }

  // 8. HOUSING PIPELINE CONTROLLER
  function initHousingPipeline() {
    renderHousingPipeline(window.LifeBrain.state);

    const addBtn = document.getElementById('openAddRoomModalBtn');
    if (addBtn) {
      addBtn.addEventListener('click', () => {
        const title = prompt("Enter listing title / street name (e.g. 'Room on Chapel St'):", "Room on Nelson St");
        if (!title) return;
        const price = parseFloat(prompt("Monthly Rent ($ CAD):", "850")) || 850;
        const address = prompt("Address / Area:", "Sandy Hill, Ottawa");
        const notes = prompt("Landlord notes / patio info:", "Outdoor patio, all-inclusive");

        const coords = window.LifeBrain.inferStreetCoords(title + ' ' + address);
        const newLead = {
          id: 'house-' + Date.now(),
          title: title,
          address: address || 'Sandy Hill, Ottawa',
          price: price,
          coords: coords,
          status: 'Inquiry Sent',
          landlordContact: 'Direct Entry',
          notes: notes || 'Direct Entry',
          tags: ['Manual Entry', `$${price}/mo`]
        };

        window.LifeBrain.addHousingLead(newLead);
        addHousingMarkerToMap(newLead);
        showToast(`🏠 Housing lead "${title}" added!`);
      });
    }
  }

  function renderHousingPipeline(brainState) {
    const list = document.getElementById('housingPipelineList');
    if (!list) return;

    const leads = brainState.housingPipeline || [];
    list.innerHTML = leads.map(lead => `
      <div class="housing-card" id="card-${lead.id}">
        <div class="housing-card-top">
          <div>
            <div class="housing-card-title">${lead.title}</div>
            <div class="housing-card-address">${lead.address}</div>
          </div>
          <div class="housing-card-price">$${lead.price}/mo</div>
        </div>
        <div class="housing-card-notes">${lead.notes}</div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 4px;">
          <select class="housing-status-select" data-id="${lead.id}">
            <option value="Inquiry Sent" ${lead.status === 'Inquiry Sent' ? 'selected' : ''}>📩 Inquiry Sent</option>
            <option value="Viewing Set" ${lead.status === 'Viewing Set' ? 'selected' : ''}>📅 Viewing Set</option>
            <option value="Top Choice" ${lead.status === 'Top Choice' ? 'selected' : ''}>⭐ Top Choice</option>
            <option value="Lease Signed" ${lead.status === 'Lease Signed' ? 'selected' : ''}>✅ Lease Signed</option>
          </select>
          <button class="action-btn primary" onclick="window.zoomToHousingLead('${lead.id}')">
            📍 View Map
          </button>
        </div>
      </div>
    `).join('');

    // Bind Status Selectors
    list.querySelectorAll('.housing-status-select').forEach(select => {
      select.addEventListener('change', (e) => {
        const leadId = select.getAttribute('data-id');
        window.LifeBrain.updateLeadStatus(leadId, e.target.value);
        showToast(`🏠 Status updated to "${e.target.value}"`);
      });
    });
  }

  window.zoomToHousingLead = function (leadId) {
    const lead = window.LifeBrain.state.housingPipeline.find(h => h.id === leadId);
    if (lead && state.leafletMap) {
      state.leafletMap.flyTo(lead.coords, 16);
      showToast(`📍 Centered on ${lead.title}`);
    }
  };

  function addHousingMarkerToMap(lead) {
    const houseIcon = L.divIcon({
      className: 'housing-pin-wrapper',
      html: `
        <div style="background: #07090e; border: 2px solid #10b981; border-radius: 50%; width: 30px; height: 30px; display: flex; align-items: center; justify-content: center; font-size: 14px; box-shadow: 0 0 14px #10b981;">
          🏠
        </div>
      `,
      iconSize: [30, 30],
      iconAnchor: [15, 15]
    });

    const marker = L.marker(lead.coords, { icon: houseIcon }).addTo(state.leafletMap);
    marker.bindPopup(`
      <div style="padding: 4px; font-family: var(--font-sans);">
        <h4 style="color: #10b981; font-size: 0.95rem; margin-bottom: 2px;">🏠 ${lead.title}</h4>
        <p style="font-size: 0.8rem; color: #cbd5e1;">$${lead.price}/month • ${lead.address}</p>
        <p style="font-size: 0.74rem; color: #94a3b8; margin: 4px 0;">${lead.notes}</p>
        <div style="font-size: 0.72rem; color: #06b6d4;">Status: ${lead.status}</div>
      </div>
    `);
  }

  // 9. FINANCIAL RUNWAY & CASH FLOW ENGINE
  function initRunwayDeck() {
    renderRunwayStats(window.LifeBrain.state);
    renderExpensesFeed(window.LifeBrain.state);

    const rentInput = document.getElementById('deckRentInput');
    const incomeInput = document.getElementById('deckIncomeInput');
    const aiHoursInput = document.getElementById('deckAiHoursInput');

    [rentInput, incomeInput, aiHoursInput].forEach(inp => {
      if (inp) inp.addEventListener('input', () => renderRunwayStats(window.LifeBrain.state));
    });
  }

  function renderRunwayStats(brainState) {
    const rentVal = parseFloat(document.getElementById('deckRentInput')?.value) || 800;
    const baseIncome = parseFloat(document.getElementById('deckIncomeInput')?.value) || 1300;
    const aiHours = parseFloat(document.getElementById('deckAiHoursInput')?.value) || 10;
    
    // Remote AI Task Income ($34 CAD/hr)
    const aiMonthlyIncome = aiHours * 34 * 4.33;
    const totalIncome = baseIncome + aiMonthlyIncome;

    // Monthly Burn: Rent + $250 Groceries + $65 Transit + $50 Phone + $90 Misc
    const baselineBurn = rentVal + 250 + 65 + 50 + 90;
    const netCashFlow = totalIncome - baselineBurn;

    const breakdownEl = document.getElementById('deckCashFlowBreakdown');
    const statusEl = document.getElementById('deckRunwayStatus');

    if (statusEl) {
      if (netCashFlow >= 0) {
        statusEl.textContent = `🟢 Surplus (+$${Math.round(netCashFlow)}/mo)`;
        statusEl.className = 'runway-val-big text-emerald';
      } else {
        statusEl.textContent = `🔴 Deficit (-$${Math.round(Math.abs(netCashFlow))}/mo)`;
        statusEl.className = 'runway-val-big text-rose';
      }
    }

    if (breakdownEl) {
      breakdownEl.innerHTML = `
        <div style="display: flex; justify-content: space-between;">
          <span>• Guaranteed Base:</span> <span class="text-cyan">+$${baseIncome.toFixed(0)}</span>
        </div>
        <div style="display: flex; justify-content: space-between;">
          <span>• AI Task Inflow (${aiHours}h/wk):</span> <span class="text-emerald">+$${aiMonthlyIncome.toFixed(0)}</span>
        </div>
        <div style="display: flex; justify-content: space-between;">
          <span>• Total Living Expenses:</span> <span class="text-rose">-$${baselineBurn.toFixed(0)}</span>
        </div>
        <div style="border-top: 1px solid rgba(255,255,255,0.1); padding-top: 4px; margin-top: 4px; display: flex; justify-content: space-between; font-weight: 800;">
          <span>NET MONTHLY FLOW:</span> 
          <span class="${netCashFlow >= 0 ? 'text-emerald' : 'text-rose'}">${netCashFlow >= 0 ? '+' : '-'}$${Math.abs(Math.round(netCashFlow))}/mo</span>
        </div>
      `;
    }
  }

  function renderExpensesFeed(brainState) {
    const list = document.getElementById('deckExpensesList');
    if (!list) return;

    const expenses = brainState.finances.expenses || [];
    if (expenses.length === 0) {
      list.innerHTML = '<div style="font-size: 0.76rem; color: var(--text-dim);">No expenses logged yet.</div>';
      return;
    }

    list.innerHTML = expenses.map(exp => `
      <div class="expense-row">
        <span>${exp.label}</span>
        <span class="text-rose">-$${exp.amount.toFixed(2)}</span>
      </div>
    `).join('');
  }

  // 10. CHRONO-NUTRITION & TOE HEALTH CARE
  function initChronoNutritionDeck() {
    const list = document.getElementById('nutritionWindowsList');
    const zoomClinicBtn = document.getElementById('zoomClinicMapBtn');

    if (list && window.OTTAWA_DATA && window.OTTAWA_DATA.nutritionProtocol) {
      list.innerHTML = window.OTTAWA_DATA.nutritionProtocol.map(w => `
        <div class="nutrition-window-card">
          <div class="nutr-window-header">
            <span class="nutr-window-title">${w.windowName}</span>
            <span class="nutr-window-time">${w.time}</span>
          </div>
          <div style="font-size: 0.7rem; color: var(--text-muted); font-family: var(--font-mono);">${w.macros}</div>
          <div class="nutr-window-food">${w.recommendedFoods}</div>
          <div class="nutr-window-science">💡 ${w.scienceReasoning}</div>
        </div>
      `).join('');
    }

    if (zoomClinicBtn && state.leafletMap) {
      zoomClinicBtn.addEventListener('click', () => {
        state.leafletMap.flyTo([45.4268, -75.6902], 17);
        showToast("🏥 Centered on Downtown Urgent Care (158 Rideau St)");
      });
    }
  }

  // 11. DIRECTIONAL GPS & HARDWARE COMPASS ENGINE
  function initDirectionalGps() {
    const gpsBtn = document.getElementById('gpsLocateBtn');
    if (!gpsBtn) return;

    gpsBtn.addEventListener('click', () => {
      // Request Device Orientation on iOS Safari
      if (typeof DeviceOrientationEvent !== 'undefined' && typeof DeviceOrientationEvent.requestPermission === 'function') {
        DeviceOrientationEvent.requestPermission()
          .then(permissionState => {
            if (permissionState === 'granted') {
              window.addEventListener('deviceorientation', handleOrientationUpdate, true);
              startGpsWatch();
            } else {
              startGpsWatch();
            }
          })
          .catch(() => startGpsWatch());
      } else if (window.DeviceOrientationEvent) {
        window.addEventListener('deviceorientation', handleOrientationUpdate, true);
        startGpsWatch();
      } else {
        startGpsWatch();
      }
    });
  }

  function handleOrientationUpdate(event) {
    let heading = 0;
    if (event.webkitCompassHeading) {
      heading = Math.round(event.webkitCompassHeading);
    } else if (event.alpha) {
      heading = Math.round(360 - event.alpha);
    }
    state.userHeading = heading;
    updateCompassRadarRotation(heading);
  }

  function updateCompassRadarRotation(deg) {
    const cone = document.getElementById('userGpsRadarCone');
    const tip = document.getElementById('userGpsArrowTip');
    if (cone) cone.style.transform = `rotate(${deg}deg)`;
    if (tip) tip.style.transform = `rotate(${deg}deg)`;
  }

  function startGpsWatch() {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported on this browser.");
      return;
    }

    showToast("🛰️ Connecting to GPS satellites...");

    navigator.geolocation.getCurrentPosition(
      (pos) => updateGpsPosition(pos, true),
      (err) => console.warn("GPS Initial error:", err),
      { enableHighAccuracy: true, timeout: 8000 }
    );

    navigator.geolocation.watchPosition(
      (pos) => updateGpsPosition(pos, false),
      (err) => console.warn("GPS Watch error:", err),
      { enableHighAccuracy: true, maximumAge: 2000, timeout: 10000 }
    );
  }

  function updateGpsPosition(position, centerMap) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const accuracy = position.coords.accuracy;

    state.userCoords = [lat, lng];

    if (state.lastPosition) {
      const distDelta = calculateDistance(state.lastPosition[0], state.lastPosition[1], lat, lng);
      if (distDelta > 3 && distDelta < 300) {
        state.totalDistanceWalkedMeters += distDelta;
      }
    }
    state.lastPosition = [lat, lng];

    if (position.coords.heading !== null && !isNaN(position.coords.heading) && position.coords.heading > 0) {
      state.userHeading = Math.round(position.coords.heading);
      updateCompassRadarRotation(state.userHeading);
    }

    if (!state.leafletMap) return;

    if (!state.userGpsMarker) {
      const directionalIcon = L.divIcon({
        className: 'user-directional-gps-wrapper',
        html: `
          <div class="user-gps-container">
            <div class="user-gps-radar-cone" id="userGpsRadarCone" style="transform: rotate(${state.userHeading}deg)"></div>
            <div class="user-gps-dot">
              <div class="user-gps-arrow-tip" id="userGpsArrowTip" style="transform: rotate(${state.userHeading}deg)"></div>
            </div>
          </div>
        `,
        iconSize: [60, 60],
        iconAnchor: [30, 30]
      });

      state.userGpsMarker = L.marker([lat, lng], { icon: directionalIcon, zIndexOffset: 1000 }).addTo(state.leafletMap);
      state.userGpsCircle = L.circle([lat, lng], {
        radius: accuracy,
        color: '#06b6d4',
        fillColor: '#06b6d4',
        fillOpacity: 0.1,
        weight: 1
      }).addTo(state.leafletMap);

      showToast("🧭 Directional Compass & GPS Locked!");
    } else {
      state.userGpsMarker.setLatLng([lat, lng]);
      state.userGpsCircle.setLatLng([lat, lng]);
      state.userGpsCircle.setRadius(accuracy);
    }

    if (centerMap) {
      state.leafletMap.flyTo([lat, lng], 16, { duration: 1.0 });
    }

    // Run SpatialOptimizerEngine
    SpatialOptimizerEngine.evaluate(lat, lng);
  }

  // 12. SPATIAL OPTIMIZER & GUIDANCE ENGINE
  const SpatialOptimizerEngine = {
    evaluate(userLat, userLng) {
      const banner = document.getElementById('sidebarCopilotBanner');
      if (!banner || !window.OTTAWA_DATA) return;

      const dayData = window.OTTAWA_DATA.sevenDayPlan.find(d => d.dayNum === state.currentDay) || window.OTTAWA_DATA.sevenDayPlan[0];
      const items = dayData.schedule;

      const scored = items.map(item => {
        const dist = calculateDistance(userLat, userLng, item.coords[0], item.coords[1]);
        const walkMins = Math.max(1, Math.round(dist / 80));
        return { ...item, dist, walkMins };
      });

      scored.sort((a, b) => a.dist - b.dist);
      const nearest = scored[0];
      const isArrived = nearest.dist <= 45;

      const hour = new Date().getHours();
      let wellnessText = "💧 Stay hydrated: Drink 500ml water to support healing.";
      if (hour >= 13 && hour <= 15) {
        wellnessText = "🥗 Window 1 Fuel: 3 eggs + oatmeal/Greek yogurt + 500ml water for dopamine.";
      } else if (hour >= 16 && hour <= 18) {
        wellnessText = "🥗 Window 2 Focus: Raw almonds + dark chocolate + green tea.";
      } else if (hour >= 19 && hour <= 21) {
        wellnessText = "🥗 Window 3 Dinner: 3 Brothers Shawarma plate (protein + garlic for toe healing).";
      } else if (hour >= 22 || hour < 6) {
        wellnessText = "🥗 Window 4 Decompression: Chamomile tea + peanut butter/pumpkin seeds.";
      }

      this.renderDynamicGuidanceLine(userLat, userLng, nearest.coords);

      banner.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
          <span style="font-size: 0.72rem; color: var(--cyan); font-family: var(--font-mono); font-weight: 700;">
            ${isArrived ? '📍 ARRIVED AT DESTINATION' : '🧭 ACTIVE TARGET'}
          </span>
          <span style="font-size: 0.76rem; font-family: var(--font-mono); color: var(--amber); font-weight: 700;">
            ${isArrived ? 'On-Site' : `${Math.round(nearest.dist)}m • ~${nearest.walkMins} min walk`}
          </span>
        </div>
        <div style="font-size: 0.95rem; font-weight: 800; color: #fff;">${nearest.phase}</div>
        <div style="font-size: 0.78rem; color: #cbd5e1; line-height: 1.35; margin: 4px 0;">${nearest.mission}</div>
        <div style="font-size: 0.72rem; color: var(--text-dim); border-top: 1px solid rgba(255,255,255,0.06); padding-top: 4px; margin-top: 4px;">
          ${wellnessText}
        </div>
      `;
    },

    renderDynamicGuidanceLine(userLat, userLng, targetCoords) {
      if (!state.leafletMap) return;
      if (state.dynamicUserRouteLine && state.leafletMap.hasLayer(state.dynamicUserRouteLine)) {
        state.dynamicUserRouteLine.remove();
      }

      state.dynamicUserRouteLine = L.polyline([[userLat, userLng], targetCoords], {
        color: '#06b6d4',
        weight: 3,
        dashArray: '4, 8',
        opacity: 0.9
      }).addTo(state.leafletMap);
    }
  };

  // 13. RENDER ACTIVE DAY & WAYPOINTS
  function renderActiveDay(dayNum) {
    state.currentDay = dayNum;
    if (!window.OTTAWA_DATA) return;

    const dayData = window.OTTAWA_DATA.sevenDayPlan.find(d => d.dayNum === dayNum) || window.OTTAWA_DATA.sevenDayPlan[0];

    // Update Day Tabs
    document.querySelectorAll('.day-tab-btn').forEach(btn => {
      btn.classList.toggle('active', parseInt(btn.getAttribute('data-day')) === dayNum);
    });

    renderScheduleFeed(dayData);
    renderMapPathAndMarkers(dayData);
    renderHorizontalTimeline(dayData);
  }

  function renderScheduleFeed(dayData) {
    const list = document.getElementById('intelFeedList');
    if (!list) return;

    list.innerHTML = dayData.schedule.map((item, idx) => `
      <div class="feed-item-card" onclick="window.zoomToWaypoint(${idx})">
        <div class="feed-item-header">
          <span class="feed-item-title">${idx + 1}. ${item.phase}</span>
          <span class="feed-item-badge" style="background: ${item.badgeColor}22; color: ${item.badgeColor}; border: 1px solid ${item.badgeColor};">
            ${item.time}
          </span>
        </div>
        <div class="feed-item-desc">${item.mission}</div>
        <div style="font-size: 0.72rem; color: var(--cyan); font-family: var(--font-mono);">
          📍 ${item.locationName}
        </div>
      </div>
    `).join('');
  }

  function renderMapPathAndMarkers(dayData) {
    if (!state.leafletMap) return;

    Object.values(state.markersMap).forEach(m => {
      if (state.leafletMap.hasLayer(m)) m.remove();
    });
    state.markersMap = {};

    if (state.routePolyline && state.leafletMap.hasLayer(state.routePolyline)) {
      state.routePolyline.remove();
      state.routeGlowPolyline.remove();
    }

    if (dayData.pathCoords && dayData.pathCoords.length > 1) {
      state.routeGlowPolyline = L.polyline(dayData.pathCoords, {
        color: '#06b6d4',
        weight: 7,
        opacity: 0.35
      }).addTo(state.leafletMap);

      state.routePolyline = L.polyline(dayData.pathCoords, {
        color: '#22d3ee',
        weight: 3,
        dashArray: '8, 8',
        opacity: 0.95
      }).addTo(state.leafletMap);
    }

    dayData.schedule.forEach((item, index) => {
      const markerIcon = L.divIcon({
        className: 'numbered-marker-wrapper',
        html: `<div class="waypoint-num-marker">${index + 1}</div>`,
        iconSize: [26, 26],
        iconAnchor: [13, 13]
      });

      const marker = L.marker(item.coords, { icon: markerIcon }).addTo(state.leafletMap);
      marker.bindPopup(`
        <div style="padding: 4px; font-family: var(--font-sans);">
          <h4 style="color: #06b6d4; font-size: 0.95rem; margin-bottom: 2px;">${index + 1}. ${item.phase}</h4>
          <p style="font-size: 0.78rem; color: #cbd5e1; margin-bottom: 4px;">${item.time} • ${item.locationName}</p>
          <p style="font-size: 0.76rem; color: #94a3b8;">${item.mission}</p>
        </div>
      `);
      state.markersMap[item.id] = marker;
    });
  }

  function renderHorizontalTimeline(dayData) {
    const track = document.getElementById('timelineScrollTrack');
    if (!track) return;

    track.innerHTML = dayData.schedule.map((item, idx) => `
      <div class="timeline-node" onclick="window.zoomToWaypoint(${idx})">
        <span style="font-weight: 700; color: var(--cyan);">${idx + 1}.</span>
        <span>${item.time}</span>
      </div>
    `).join('');
  }

  window.zoomToWaypoint = function (index) {
    const dayData = window.OTTAWA_DATA.sevenDayPlan.find(d => d.dayNum === state.currentDay);
    if (dayData && dayData.schedule[index] && state.leafletMap) {
      const item = dayData.schedule[index];
      state.leafletMap.flyTo(item.coords, 17);
      if (state.markersMap[item.id]) {
        state.markersMap[item.id].openPopup();
      }
    }
  };

  // 14. MODALS & UTILITIES
  function initModals() {
    const loreModal = document.getElementById('loreModalOverlay');
    const openLoreBtn = document.getElementById('mobileNavLore');
    const closeLoreBtn = document.getElementById('closeLoreModalBtn');

    if (openLoreBtn && loreModal) openLoreBtn.addEventListener('click', () => loreModal.style.display = 'flex');
    if (closeLoreBtn && loreModal) closeLoreBtn.addEventListener('click', () => loreModal.style.display = 'none');
    if (loreModal) {
      loreModal.addEventListener('click', (e) => {
        if (e.target === loreModal) loreModal.style.display = 'none';
      });
    }

    // Day Tab Buttons
    document.querySelectorAll('.day-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const day = parseInt(btn.getAttribute('data-day'));
        renderActiveDay(day);
      });
    });
  }

  // Toast Notification
  function showToast(msg) {
    let toast = document.getElementById('appToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'appToast';
      toast.style.cssText = `
        position: fixed;
        bottom: 24px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(9, 12, 20, 0.95);
        border: 1px solid #06b6d4;
        color: #fff;
        padding: 10px 18px;
        border-radius: 9999px;
        font-family: var(--font-sans);
        font-size: 0.84rem;
        font-weight: 600;
        z-index: 9999;
        box-shadow: 0 10px 30px rgba(0,0,0,0.8);
        pointer-events: none;
        transition: opacity 0.3s ease;
      `;
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.style.opacity = '1';
    clearTimeout(toast._timeout);
    toast._timeout = setTimeout(() => {
      toast.style.opacity = '0';
    }, 3200);
  }

  // Haversine Distance in Meters
  function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371e3;
    const φ1 = lat1 * Math.PI / 180;
    const φ2 = lat2 * Math.PI / 180;
    const Δφ = (lat2 - lat1) * Math.PI / 180;
    const Δλ = (lon2 - lon1) * Math.PI / 180;

    const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
      Math.cos(φ1) * Math.cos(φ2) *
      Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }

})();
