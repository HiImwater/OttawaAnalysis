/**
 * LifeGuide AI: Master Mobile-First Controller & Spatial Canvas
 * Single-Screen Unified Life OS with Zero Clutter
 */

(function () {
  'use strict';

  const state = {
    leafletMap: null,
    currentDay: 1,
    activeTab: 'map', // 'map' | 'action' | 'housing' | 'notes' | 'nutrition'
    
    // GPS & Compass State
    userCoords: null,
    userHeading: 0,
    userGpsMarker: null,
    userGpsCircle: null,
    dynamicUserRouteLine: null,

    // Map Markers & Layers
    markersMap: {},
    routePolyline: null,
    routeGlowPolyline: null,
    customPinMarkers: [],

    // Drawing State
    drawingMode: null,
    activeDrawColor: '#06b6d4',
    isDrawing: false,
    currentDrawingPoints: [],
    tempPolyline: null,
    drawnLayers: [],

    // Food, Amenities & 24/7 Layers
    foodDirectoryMarkers: [],
    amenitiesDirectoryMarkers: [],
    twentyFourSevenMarkers: []
  };

  window.state = state;

  document.addEventListener('DOMContentLoaded', () => {
    initLeafletMap();
    initMobileNavigation();
    initOmniDrawer();
    initMapDrawingEngine();
    initLifeBrainSync();
    initManualNotepad();
    initHousingPipeline();
    initDirectionalGps();
    initModals();

    // Render Initial Day
    renderActiveDay(1);
    
    // On mobile start in clean map mode
    if (window.innerWidth <= 860) {
      setMobileTab('map');
    }
  });

  // 1. LEAFLET GIS MAP (PERMANENT BASE)
  function initLeafletMap() {
    const mapContainer = document.getElementById('map-container');
    if (!mapContainer) return;

    const basecampCoords = [45.4251, -75.6892]; // Saintlo Jail (75 Nicholas St)
    state.leafletMap = L.map('map-container', {
      center: basecampCoords,
      zoom: 15,
      zoomControl: false,
      attributionControl: false
    });

    window.leafletMap = state.leafletMap;

    // Esri World Dark Gray Canvas Base (Zero API Key Requirement)
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
      maxZoom: 16,
      attribution: 'Tiles &copy; Esri'
    }).addTo(state.leafletMap);

    // Esri Reference Overlay (Crisp Street Labels)
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Reference/MapServer/tile/{z}/{y}/{x}', {
      maxZoom: 16
    }).addTo(state.leafletMap);

    // Jail Basecamp Marker
    const jailIcon = L.divIcon({
      className: 'jail-marker-wrapper',
      html: `
        <div style="background: #f59e0b; border: 2px solid #ffffff; width: 28px; height: 28px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 13px; box-shadow: 0 0 14px #f59e0b;">
          🏰
        </div>
      `,
      iconSize: [28, 28],
      iconAnchor: [14, 14]
    });

    const jailMarker = L.marker(basecampCoords, { icon: jailIcon }).addTo(state.leafletMap);
    jailMarker.bindPopup(`
      <div style="padding: 4px; font-family: var(--font-sans);">
        <h4 style="color: #f59e0b; font-size: 0.95rem; margin-bottom: 2px;">🏰 SAINTLO JAIL BASECAMP</h4>
        <p style="font-size: 0.78rem; color: #cbd5e1;">75 Nicholas St • 1862 Carleton County Gaol</p>
        <div style="font-size: 0.72rem; color: #06b6d4;">24/7 Desk: +1 (613) 235-2595</div>
      </div>
    `);

    loadSavedSpatialDrawings();
    loadSavedCustomPins();
  }

  // 2. STREAMLINED NAVIGATION (MOBILE DOCK + DESKTOP TABS)
  function initMobileNavigation() {
    const dockBtns = document.querySelectorAll('.dock-nav-btn');
    const desktopTabs = document.querySelectorAll('.deck-tab');
    const dragHandle = document.getElementById('sheetDragHandle');
    const sheet = document.getElementById('telemetrySheet');

    // Mobile Dock Clicks
    dockBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const tab = btn.getAttribute('data-mobile-tab');
        setMobileTab(tab);
      });
    });

    // Desktop Tab Clicks
    desktopTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const deck = tab.getAttribute('data-deck');
        activateDeckPanel(deck);
      });
    });

    // Sheet Drag Zone Toggle
    if (dragHandle && sheet) {
      dragHandle.addEventListener('click', () => {
        sheet.classList.toggle('sheet-minimized');
        if (sheet.classList.contains('sheet-minimized')) {
          setDockActive('map');
        }
      });
    }
  }

  function setMobileTab(tabName) {
    state.activeTab = tabName;
    const sheet = document.getElementById('telemetrySheet');

    setDockActive(tabName);

    if (tabName === 'map') {
      if (sheet) sheet.classList.add('sheet-minimized');
      if (state.leafletMap) state.leafletMap.invalidateSize();
    } else {
      if (sheet) sheet.classList.remove('sheet-minimized');
      activateDeckPanel(tabName);
    }
  }

  function setDockActive(tabName) {
    document.querySelectorAll('.dock-nav-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-mobile-tab') === tabName);
    });
  }

  function activateDeckPanel(deckName) {
    // Map tab maps to action panel
    const panelKey = deckName === 'map' ? 'Action' : (deckName.charAt(0).toUpperCase() + deckName.slice(1));
    
    document.querySelectorAll('.deck-tab').forEach(t => {
      t.classList.toggle('active', t.getAttribute('data-deck') === deckName);
    });

    document.querySelectorAll('.deck-panel').forEach(p => {
      p.classList.toggle('active', p.id === `deckPanel${panelKey}`);
    });
  }

  // 3. OMNI-STREAM SLIDE-DOWN DRAWER
  function initOmniDrawer() {
    const drawer = document.getElementById('omniDrawer');
    const openBtn = document.getElementById('openOmniModalBtn');
    const closeBtn = document.getElementById('closeOmniDrawerBtn');
    const input = document.getElementById('omniInputField');
    const submitBtn = document.getElementById('omniSubmitBtn');
    const tags = document.querySelectorAll('.omni-tag');

    const openDrawer = () => {
      if (drawer) drawer.classList.add('open');
      if (input) {
        input.focus();
        input.value = '';
      }
    };

    const closeDrawer = () => {
      if (drawer) drawer.classList.remove('open');
    };

    if (openBtn) openBtn.addEventListener('click', openDrawer);
    if (closeBtn) closeBtn.addEventListener('click', closeDrawer);

    const handleOmniSubmit = () => {
      const text = input?.value.trim();
      if (!text) return;

      const result = window.LifeBrain.parseOmniInput(text);
      if (result && result.message) {
        showToast(result.message);
        closeDrawer();

        if (result.type === 'housing' && result.lead) {
          addHousingMarkerToMap(result.lead);
          state.leafletMap.flyTo(result.lead.coords, 16);
          setMobileTab('housing');
        } else if (result.type === 'custom_pin' && result.pin) {
          addCustomPinToMap(result.pin);
          state.leafletMap.flyTo(result.pin.coords, 16);
          setMobileTab('map');
        }
      }
    };

    if (submitBtn) submitBtn.addEventListener('click', handleOmniSubmit);
    if (input) {
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') handleOmniSubmit();
      });
    }

    tags.forEach(t => {
      t.addEventListener('click', () => {
        const prefix = t.getAttribute('data-prefix');
        if (input) {
          input.value = prefix;
          input.focus();
        }
      });
    });
  }

  // 4. MAP DRAWING SUITE
  function initMapDrawingEngine() {
    const penBtn = document.getElementById('drawPenBtn');
    const circleBtn = document.getElementById('drawCircleBtn');
    const pinBtn = document.getElementById('dropPinBtn');
    const clearBtn = document.getElementById('clearDrawingsBtn');
    const colorDots = document.querySelectorAll('.tool-color');
    const mapEl = document.getElementById('map-container');
    const toggle247Btn = document.getElementById('toggle247PinsBtn');
    const deck247Btn = document.getElementById('deckShow247Btn');
    const foodToggleBtn = document.getElementById('toggleFoodPinsBtn');
    const amenitiesToggleBtn = document.getElementById('toggleAmenitiesPinsBtn');
    const deckAmenitiesBtn = document.getElementById('deckShowAmenitiesBtn');

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

    if (toggle247Btn) {
      toggle247Btn.addEventListener('click', () => {
        toggle247DirectoryLayer(toggle247Btn);
      });
    }

    if (deck247Btn) {
      deck247Btn.addEventListener('click', () => {
        setMobileTab('map');
        toggle247DirectoryLayer(toggle247Btn);
      });
    }

    if (foodToggleBtn) {
      foodToggleBtn.addEventListener('click', () => {
        toggleFoodDirectoryLayer(foodToggleBtn);
      });
    }

    if (amenitiesToggleBtn) {
      amenitiesToggleBtn.addEventListener('click', () => {
        toggleAmenitiesDirectoryLayer(amenitiesToggleBtn);
      });
    }

    if (deckAmenitiesBtn) {
      deckAmenitiesBtn.addEventListener('click', () => {
        setMobileTab('map');
        toggleAmenitiesDirectoryLayer(amenitiesToggleBtn);
      });
    }

    if (penBtn) penBtn.addEventListener('click', () => setDrawingTool('pen'));
    if (circleBtn) circleBtn.addEventListener('click', () => setDrawingTool('circle'));
    if (pinBtn) pinBtn.addEventListener('click', () => setDrawingTool('pin'));

    colorDots.forEach(dot => {
      dot.addEventListener('click', () => {
        colorDots.forEach(d => d.classList.remove('active'));
        dot.classList.add('active');
        state.activeDrawColor = dot.getAttribute('data-color');
      });
    });

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
          radius: 130,
          color: state.activeDrawColor,
          fillColor: state.activeDrawColor,
          fillOpacity: 0.15,
          weight: 2
        }).addTo(state.leafletMap);
        state.drawnLayers.push(circle);
        saveCurrentDrawings();
        showToast("⭕ Circled search zone added!");
      } else if (state.drawingMode === 'pin') {
        const label = prompt("Enter label for this map pin:", "Search Spot");
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
          radius: d.radius || 130,
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
        <p style="font-size: 0.76rem; color: #94a3b8;">Custom landmark</p>
      </div>
    `);
    state.customPinMarkers.push(marker);
  }

  // FOOD DIRECTORY MAP LAYER TOGGLE
  function toggleFoodDirectoryLayer(btn) {
    if (!state.leafletMap || !window.OTTAWA_DATA || !window.OTTAWA_DATA.foodMapDirectory) return;

    if (state.foodDirectoryMarkers.length > 0) {
      state.foodDirectoryMarkers.forEach(m => m.remove());
      state.foodDirectoryMarkers = [];
      if (btn) btn.classList.remove('active');
      showToast("🥗 Food spots layer hidden");
    } else {
      window.OTTAWA_DATA.foodMapDirectory.forEach(item => {
        const foodIcon = L.divIcon({
          className: 'food-pin-wrapper',
          html: `
            <div style="background: #0b0f19; border: 2px solid #f59e0b; border-radius: 50%; width: 30px; height: 30px; display: flex; align-items: center; justify-content: center; font-size: 14px; box-shadow: 0 0 12px #f59e0b;">
              ${item.icon || '🥗'}
            </div>
          `,
          iconSize: [30, 30],
          iconAnchor: [15, 15]
        });

        const marker = L.marker(item.coords, { icon: foodIcon }).addTo(state.leafletMap);
        marker.bindPopup(`
          <div style="padding: 4px; font-family: var(--font-sans);">
            <div style="font-size: 0.68rem; color: #f59e0b; font-family: var(--font-mono); font-weight: 700;">${item.categoryName}</div>
            <h4 style="color: #fff; font-size: 0.95rem; margin: 2px 0;">${item.name}</h4>
            <p style="font-size: 0.78rem; color: #cbd5e1; margin-bottom: 2px;">${item.hours} • ${item.priceRange}</p>
            <p style="font-size: 0.74rem; color: #94a3b8; line-height: 1.35; margin-bottom: 4px;">${item.topPicks}</p>
            <div style="font-size: 0.7rem; color: #06b6d4; border-top: 1px solid rgba(255,255,255,0.08); padding-top: 3px;">📍 ${item.distance} • ${item.address}</div>
          </div>
        `);
        state.foodDirectoryMarkers.push(marker);
      });

      if (btn) btn.classList.add('active');
      showToast("🥗 Food spots active (Tap pins for menus & hours)");
    }
  }

  // FREE RESTROOMS & WATER REFILL MAP LAYER TOGGLE
  function toggleAmenitiesDirectoryLayer(btn) {
    if (!state.leafletMap || !window.OTTAWA_DATA || !window.OTTAWA_DATA.amenitiesMapDirectory) return;

    if (state.amenitiesDirectoryMarkers.length > 0) {
      state.amenitiesDirectoryMarkers.forEach(m => m.remove());
      state.amenitiesDirectoryMarkers = [];
      if (btn) btn.classList.remove('active');
      showToast("🚻 Restrooms & Water layer hidden");
    } else {
      window.OTTAWA_DATA.amenitiesMapDirectory.forEach(item => {
        const isWater = item.type === 'water';
        const borderColor = isWater ? '#06b6d4' : '#3b82f6';
        const amenityIcon = L.divIcon({
          className: 'amenity-pin-wrapper',
          html: `
            <div style="background: #0b0f19; border: 2px solid ${borderColor}; border-radius: 50%; width: 30px; height: 30px; display: flex; align-items: center; justify-content: center; font-size: 14px; box-shadow: 0 0 12px ${borderColor};">
              ${item.icon || '🚻'}
            </div>
          `,
          iconSize: [30, 30],
          iconAnchor: [15, 15]
        });

        const marker = L.marker(item.coords, { icon: amenityIcon }).addTo(state.leafletMap);
        marker.bindPopup(`
          <div style="padding: 4px; font-family: var(--font-sans);">
            <div style="font-size: 0.68rem; color: #06b6d4; font-family: var(--font-mono); font-weight: 700;">${item.categoryLabel}</div>
            <h4 style="color: #fff; font-size: 0.95rem; margin: 2px 0;">${item.name}</h4>
            <p style="font-size: 0.78rem; color: #10b981; font-weight: 700; margin-bottom: 2px;">${item.access} • ${item.hours}</p>
            <p style="font-size: 0.74rem; color: #cbd5e1; line-height: 1.35; margin-bottom: 4px;">📍 ${item.floorDetails}</p>
            <div style="font-size: 0.7rem; color: #f59e0b; border-top: 1px solid rgba(255,255,255,0.08); padding-top: 3px;">💡 ${item.proTip}</div>
          </div>
        `);
        state.amenitiesDirectoryMarkers.push(marker);
      });

      if (btn) btn.classList.add('active');
      showToast("🚻 Free Restrooms & 💧 Water Refills active!");
    }
  }

  // 24/7 NOCTURNAL DIRECTORY MAP LAYER TOGGLE
  function toggle247DirectoryLayer(btn) {
    if (!state.leafletMap || !window.OTTAWA_DATA || !window.OTTAWA_DATA.twentyFourSevenDirectory) return;

    if (state.twentyFourSevenMarkers.length > 0) {
      state.twentyFourSevenMarkers.forEach(m => m.remove());
      state.twentyFourSevenMarkers = [];
      if (btn) btn.classList.remove('active');
      showToast("🌙 24/7 spots layer hidden");
    } else {
      window.OTTAWA_DATA.twentyFourSevenDirectory.forEach(item => {
        const markerIcon = L.divIcon({
          className: 'night-pin-wrapper',
          html: `
            <div style="background: #0b0f19; border: 2px solid #8b5cf6; border-radius: 50%; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; font-size: 15px; box-shadow: 0 0 14px #8b5cf6;">
              ${item.icon || '🌙'}
            </div>
          `,
          iconSize: [32, 32],
          iconAnchor: [16, 16]
        });

        const marker = L.marker(item.coords, { icon: markerIcon }).addTo(state.leafletMap);
        marker.bindPopup(`
          <div style="padding: 4px; font-family: var(--font-sans);">
            <div style="font-size: 0.68rem; color: #a78bfa; font-family: var(--font-mono); font-weight: 700;">${item.categoryBadge}</div>
            <h4 style="color: #fff; font-size: 0.95rem; margin: 2px 0;">${item.name}</h4>
            <p style="font-size: 0.78rem; color: #10b981; font-weight: 700; margin-bottom: 2px;">🟢 ${item.openStatus}</p>
            <p style="font-size: 0.74rem; color: #cbd5e1; line-height: 1.35; margin-bottom: 4px;">${item.features}</p>
            <div style="font-size: 0.72rem; color: #a78bfa; background: rgba(139,92,246,0.12); border: 1px solid rgba(139,92,246,0.25); border-radius: 4px; padding: 4px 6px; margin-bottom: 4px; font-style: italic;">
              "${item.nocturnalVibe}"
            </div>
            <div style="font-size: 0.7rem; color: #06b6d4; border-top: 1px solid rgba(255,255,255,0.08); padding-top: 3px;">📍 ${item.distance} • ${item.address}</div>
          </div>
        `);
        state.twentyFourSevenMarkers.push(marker);
      });

      if (btn) btn.classList.add('active');
      showToast("🌙 24/7 Nocturnal Radar Active (Tap pins for Wi-Fi & outlets)");
    }
  }

  // 5. LIFEBRAIN SYNC
  function initLifeBrainSync() {
    if (!window.LifeBrain) return;

    window.LifeBrain.subscribe((brainState) => {
      renderHeaderStats(brainState);
      renderNextBestAction(brainState);
      renderHousingPipeline(brainState);
      renderExpensesFeed(brainState);
    });

    renderHeaderStats(window.LifeBrain.state);
    renderNextBestAction(window.LifeBrain.state);
    renderHousingPipeline(window.LifeBrain.state);
    renderExpensesFeed(window.LifeBrain.state);
    renderNutritionProtocol();
  }

  function renderHeaderStats(brainState) {
    const headerLiquid = document.getElementById('headerLiquidVal');
    const deckLiquid = document.getElementById('deckLiquidVal');
    const formatted = `$${brainState.finances.liquidDebit.toFixed(0)}`;
    if (headerLiquid) headerLiquid.textContent = formatted;
    if (deckLiquid) deckLiquid.textContent = `$${brainState.finances.liquidDebit.toFixed(2)}`;
  }

  function renderNextBestAction(brainState) {
    const nextAction = window.LifeBrain.getNextBestAction();
    const tag = document.getElementById('nextActionTag');
    const title = document.getElementById('nextActionTitle');
    const desc = document.getElementById('nextActionDesc');
    const script = document.getElementById('nextActionScriptText');

    if (tag) tag.textContent = nextAction.tag;
    if (title) title.textContent = nextAction.title;
    if (desc) desc.textContent = nextAction.actionText;
    if (script) script.textContent = `"${nextAction.script}"`;
  }

  // 6. MANUAL NOTEPAD
  function initManualNotepad() {
    const textarea = document.getElementById('manualNotepadTextarea');
    const saveBadge = document.getElementById('notepadSaveBadge');
    const copyBtn = document.getElementById('copyNotepadBtn');
    const clearBtn = document.getElementById('clearNotepadBtn');
    const chips = document.querySelectorAll('.template-chip');

    if (textarea && window.LifeBrain) {
      textarea.value = window.LifeBrain.state.notepad.content || '';
      let timeout = null;
      textarea.addEventListener('input', () => {
        if (saveBadge) saveBadge.textContent = "⏳ Saving...";
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          window.LifeBrain.saveNotepad(textarea.value);
          if (saveBadge) saveBadge.textContent = "🟢 Auto-saved";
        }, 500);
      });
    }

    if (copyBtn && textarea) {
      copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(textarea.value);
        showToast("📋 Notes copied!");
      });
    }

    if (clearBtn && textarea) {
      clearBtn.addEventListener('click', () => {
        if (confirm("Clear scratchpad?")) {
          textarea.value = '';
          window.LifeBrain.saveNotepad('');
          showToast("🧹 Notepad cleared.");
        }
      });
    }

    chips.forEach(c => {
      c.addEventListener('click', () => {
        const tmpl = c.getAttribute('data-template');
        if (textarea && tmpl) {
          textarea.value += '\n' + tmpl.replace(/\\n/g, '\n');
          window.LifeBrain.saveNotepad(textarea.value);
          showToast("📝 Template inserted!");
        }
      });
    });
  }

  // 7. HOUSING PIPELINE
  function initHousingPipeline() {
    const addBtn = document.getElementById('openAddRoomModalBtn');
    if (addBtn) {
      addBtn.addEventListener('click', () => {
        const title = prompt("Listing title (e.g. 'Room on Chapel St'):", "Room on Nelson St");
        if (!title) return;
        const price = parseFloat(prompt("Monthly Rent ($ CAD):", "850")) || 850;
        const address = prompt("Address / Area:", "Sandy Hill, Ottawa");
        const notes = prompt("Notes:", "All-inclusive, outdoor smoking on patio");

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
        showToast(`🏠 Housing lead added!`);
      });
    }
  }

  function renderHousingPipeline(brainState) {
    const list = document.getElementById('housingPipelineList');
    if (!list) return;

    const leads = brainState.housingPipeline || [];
    list.innerHTML = leads.map(lead => `
      <div class="housing-card">
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
          <button class="btn-compact primary" onclick="window.zoomToHousingLead('${lead.id}')">📍 Map</button>
        </div>
      </div>
    `).join('');

    list.querySelectorAll('.housing-status-select').forEach(select => {
      select.addEventListener('change', (e) => {
        const leadId = select.getAttribute('data-id');
        window.LifeBrain.updateLeadStatus(leadId, e.target.value);
        showToast(`🏠 Status updated!`);
      });
    });
  }

  window.zoomToHousingLead = function (leadId) {
    const lead = window.LifeBrain.state.housingPipeline.find(h => h.id === leadId);
    if (lead && state.leafletMap) {
      setMobileTab('map');
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
      </div>
    `);
  }

  function renderExpensesFeed(brainState) {
    const list = document.getElementById('deckExpensesList');
    if (!list) return;

    const expenses = brainState.finances.expenses || [];
    if (expenses.length === 0) {
      list.innerHTML = '<div style="font-size: 0.74rem; color: var(--text-dim);">No expenses logged yet.</div>';
      return;
    }

    list.innerHTML = expenses.map(exp => `
      <div class="expense-row">
        <span>${exp.label}</span>
        <span class="text-rose">-$${exp.amount.toFixed(2)}</span>
      </div>
    `).join('');
  }

  function renderNutritionProtocol() {
    const list = document.getElementById('nutritionWindowsList');
    if (list && window.OTTAWA_DATA && window.OTTAWA_DATA.nutritionProtocol) {
      list.innerHTML = window.OTTAWA_DATA.nutritionProtocol.map(w => `
        <div class="nutrition-window-card">
          <div class="nutr-window-header">
            <span class="nutr-window-title">${w.windowName}</span>
            <span class="nutr-window-time">${w.time}</span>
          </div>
          <div class="nutr-window-food">${w.recommendedFoods}</div>
          <div class="nutr-window-science">💡 ${w.scienceReasoning}</div>
        </div>
      `).join('');
    }
  }

  // 8. 7-DAY SCHEDULE & WAYPOINTS
  function renderActiveDay(dayNum) {
    state.currentDay = dayNum;
    if (!window.OTTAWA_DATA) return;

    const dayData = window.OTTAWA_DATA.sevenDayPlan.find(d => d.dayNum === dayNum) || window.OTTAWA_DATA.sevenDayPlan[0];

    document.querySelectorAll('.day-pill').forEach(btn => {
      btn.classList.toggle('active', parseInt(btn.getAttribute('data-day')) === dayNum);
    });

    renderScheduleFeed(dayData);
    renderMapPathAndMarkers(dayData);
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
        weight: 6,
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

  window.zoomToWaypoint = function (index) {
    const dayData = window.OTTAWA_DATA.sevenDayPlan.find(d => d.dayNum === state.currentDay);
    if (dayData && dayData.schedule[index] && state.leafletMap) {
      const item = dayData.schedule[index];
      setMobileTab('map');
      state.leafletMap.flyTo(item.coords, 17);
      if (state.markersMap[item.id]) {
        state.markersMap[item.id].openPopup();
      }
    }
  };

  // 9. DIRECTIONAL GPS COMPASS
  function initDirectionalGps() {
    const gpsBtn = document.getElementById('gpsLocateBtn');
    if (!gpsBtn) return;

    gpsBtn.addEventListener('click', () => {
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
      alert("Geolocation is not supported.");
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
  }

  // 10. MODALS & UTILITIES
  function initModals() {
    const loreModal = document.getElementById('loreModalOverlay');
    const openLoreBtn = document.getElementById('openLoreModalBtn');
    const closeLoreBtn = document.getElementById('closeLoreModalBtn');
    const zoomClinicBtn = document.getElementById('zoomClinicBtn');
    const copyScriptBtn = document.getElementById('copyNextActionScriptBtn');

    if (openLoreBtn && loreModal) openLoreBtn.addEventListener('click', () => loreModal.style.display = 'flex');
    if (closeLoreBtn && loreModal) closeLoreBtn.addEventListener('click', () => loreModal.style.display = 'none');
    if (loreModal) {
      loreModal.addEventListener('click', (e) => {
        if (e.target === loreModal) loreModal.style.display = 'none';
      });
    }

    if (zoomClinicBtn && state.leafletMap) {
      zoomClinicBtn.addEventListener('click', () => {
        setMobileTab('map');
        state.leafletMap.flyTo([45.4268, -75.6902], 17);
        showToast("🏥 Centered on Downtown Urgent Care (158 Rideau St)");
      });
    }

    if (copyScriptBtn) {
      copyScriptBtn.addEventListener('click', () => {
        const scriptText = document.getElementById('nextActionScriptText')?.textContent?.replace(/^"|"$/g, '');
        if (scriptText) {
          navigator.clipboard.writeText(scriptText);
          showToast("📋 Script copied!");
        }
      });
    }

    document.querySelectorAll('.day-pill').forEach(btn => {
      btn.addEventListener('click', () => {
        const day = parseInt(btn.getAttribute('data-day'));
        renderActiveDay(day);
      });
    });
  }

  function showToast(msg) {
    let toast = document.getElementById('appToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'appToast';
      toast.style.cssText = `
        position: fixed;
        bottom: calc(65px + env(safe-area-inset-bottom, 0px));
        left: 50%;
        transform: translateX(-50%);
        background: rgba(9, 12, 20, 0.95);
        border: 1px solid #06b6d4;
        color: #fff;
        padding: 8px 16px;
        border-radius: 9999px;
        font-family: var(--font-sans);
        font-size: 0.8rem;
        font-weight: 700;
        z-index: 9999;
        box-shadow: 0 10px 30px rgba(0,0,0,0.85);
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
    }, 3000);
  }

})();
