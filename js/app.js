// app.js - Logic for Solutions Showcase Drawer Layout

// UI Elements
const typoListContainer = document.getElementById('typo-list');
const dynamicBg = document.getElementById('dynamic-bg');
const mediaContainer = document.getElementById('dynamic-media-container');

// Sidebar Elements
const catBtns = document.querySelectorAll('.cat-btn');
const hoverInfoBox = document.getElementById('hover-info-box');
const hoverTitle = document.getElementById('hover-title');
const hoverDesc = document.getElementById('hover-desc');
const hoverTags = document.getElementById('hover-tags');
const hoverClickHint = document.getElementById('hover-click-hint');

// Drawer Elements
const drawer = document.getElementById('case-study-drawer');
const drawerOverlay = document.getElementById('drawer-overlay');
const closeDrawerBtn = document.getElementById('closeDrawerBtn');
const drawerContentArea = document.getElementById('drawer-content-area');

// Fullscreen Playground Elements
const fullscreenPlayground = document.getElementById('fullscreen-playground');
const closeFsBtn = document.getElementById('closeFsBtn');
const fsContent = document.getElementById('fs-content');
const fsTitle = document.getElementById('fs-title');

// Render the Typographic List
function renderTypoList(filter = 'all') {
    typoListContainer.innerHTML = '';
    
    const filteredData = portfolioData.filter(item => filter === 'all' || item.category === filter);
    
    filteredData.forEach((item, index) => {
        const itemNumber = String(index + 1).padStart(2, '0');
        
        const typoItem = document.createElement('div'); // changed to div
        typoItem.className = 'typo-item group';
        typoItem.innerHTML = `
            <div class="flex items-baseline space-x-6">
                <span class="text-xl font-bold opacity-30 tracking-widest">${itemNumber}</span>
                <span class="typo-title">${item.title}</span>
            </div>
            <div class="flex items-center space-x-4 mt-2">
                <span class="text-sm font-semibold tracking-widest uppercase text-accent">${item.category}</span>
                <span class="w-1 h-1 bg-white/30 rounded-full"></span>
                <span class="text-sm text-secondary truncate">${item.tags.join(' \u2022 ')}</span>
            </div>
            <div class="read-case-study">
                Leggi il Case Study <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </div>
        `;
        
        // Hover Events for Background & Sidebar
        typoItem.addEventListener('mouseenter', () => {
            swapBackgroundMedia(item);
            updateSidebarInfo(item);
        });

        // Click Event to open Drawer or Fullscreen
        typoItem.addEventListener('click', () => {
            if (item.category === 'Playground' && item.drawerMedia && ['iframe', 'model-viewer', '360-image'].includes(item.drawerMedia[0].type)) {
                openFullscreen(item);
            } else {
                openDrawer(item);
            }
        });

        typoListContainer.appendChild(typoItem);
    });
    
    resetSidebarInfo();

    if(filteredData.length > 0) {
        swapBackgroundMedia(filteredData[0]);
    } else {
        dynamicBg.style.backgroundColor = '#050505'; 
        mediaContainer.style.opacity = '0';
    }
}

// Category Switching
catBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        catBtns.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        const filterValue = e.target.dataset.filter;
        renderTypoList(filterValue);
        document.getElementById('right-content').scrollTo({ top: 0, behavior: 'smooth' });
    });
});

// Swap Background Media (Hover Effect)
function swapBackgroundMedia(item) {
    mediaContainer.style.opacity = '0';
    
    setTimeout(() => {
        mediaContainer.innerHTML = ''; 
        
        if (item.videoUrl) {
            if (item.videoUrl.includes('mp4')) {
                const video = document.createElement('video');
                video.src = item.videoUrl;
                video.autoplay = true;
                video.muted = true;
                video.loop = true;
                video.playsInline = true;
                mediaContainer.appendChild(video);
            }
        } else if (item.imageUrl) {
            const img = document.createElement('img');
            img.src = item.imageUrl;
            mediaContainer.appendChild(img);
        } else {
             dynamicBg.style.backgroundColor = '#2b2875';
             return;
        }

        requestAnimationFrame(() => {
            mediaContainer.style.opacity = '1';
        });

    }, 400); 
}

// Update the Sidebar Info Box on Hover
function updateSidebarInfo(item) {
    if(window.innerWidth <= 1024) return;
    
    hoverInfoBox.classList.remove('visible');
    
    setTimeout(() => {
        hoverTitle.textContent = item.title;
        hoverDesc.textContent = item.description;
        hoverTags.innerHTML = item.tags.map(tag => `<span class="px-2 py-1 bg-white/10 text-white rounded text-[0.6rem] font-bold uppercase tracking-wider">${tag}</span>`).join('');
        hoverClickHint.style.opacity = '1';
        
        hoverInfoBox.classList.add('visible');
    }, 200);
}

function resetSidebarInfo() {
    hoverInfoBox.classList.remove('visible');
    setTimeout(() => {
        hoverTitle.textContent = "Esplora le Soluzioni";
        hoverDesc.textContent = "Scorri i nostri Case Study a destra per scoprire come trasformiamo i processi in valore misurabile.";
        hoverTags.innerHTML = '';
        hoverClickHint.style.opacity = '0';
        hoverInfoBox.classList.add('visible');
    }, 200);
}

// Drawer Logic (The Readability Engine)
function openDrawer(item) {
    // Populate the drawer
    drawerContentArea.innerHTML = `
        <div class="flex flex-wrap gap-2 mb-6">
            ${item.tags.map(tag => `<span class="px-3 py-1 bg-white/5 border border-white/10 text-white rounded-full text-xs font-bold uppercase tracking-wider">${tag}</span>`).join('')}
        </div>
        
        <h2>${item.title}</h2>
        
        <p class="text-xl font-light text-white mt-4 border-l-4 border-primary pl-4 mb-12">
            ${item.description}
        </p>

        <h3>La Sfida (The Challenge)</h3>
        <p>${item.challenge || 'Informazioni non disponibili in questo momento.'}</p>

        <h3>La Soluzione MORE</h3>
        <p>${item.solution || 'Lavorazione customizzata basata sulle direttive del cliente.'}</p>

        <h3>L'Impatto (The Result)</h3>
        
        <!-- Tabella Metriche Generata Dinamicamente -->
        ${item.metrics && item.metrics.length > 0 ? `
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
                ${item.metrics.map(m => `
                    <div class="metric-card ${m.isHighlight ? 'border-accent/30 bg-accent/5' : ''}">
                        <div class="text-3xl font-black ${m.isHighlight ? 'text-accent' : 'text-white'} mb-2">${m.value}</div>
                        <div class="text-sm font-bold uppercase tracking-wider text-secondary">${m.label}</div>
                    </div>
                `).join('')}
            </div>
        ` : '<p>Dati non disponibili</p>'}

        <!-- Media Generati Dinamicamente -->
        ${item.drawerMedia && item.drawerMedia.length > 0 ? `
            <div class="mt-12 pt-8 border-t border-white/10">
                <h3 class="!mt-0 mb-6 text-white text-sm uppercase tracking-widest opacity-50">Media Overview</h3>
                <div class="flex flex-col gap-8">
                    ${item.drawerMedia.map(media => {
                        if(media.type === 'video') {
                            return `<video src="${media.url}" controls controlsList="nodownload" autoplay muted loop class="w-full rounded-xl shadow-2xl border border-white/5"></video>`;
                        } else if(media.type === 'image') {
                            return `<img src="${media.url}" class="w-full rounded-xl shadow-2xl border border-white/5">`;
                        } else if(media.type === 'iframe') {
                            return `<div class="w-full aspect-video rounded-xl shadow-2xl border border-white/5 overflow-hidden"><iframe src="${media.url}" class="w-full h-full border-0" allow="xr-spatial-tracking; vr; ar; fullscreen"></iframe></div>`;
                        } else if(media.type === 'youtube') {
                            return `<div class="w-full aspect-video rounded-xl shadow-2xl border border-white/5 overflow-hidden"><iframe src="https://www.youtube.com/embed/${media.url}" class="w-full h-full border-0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`;
                        }
                        return '';
                    }).join('')}
                </div>
            </div>
        ` : ''}
    `;

    // Open animations
    drawerOverlay.classList.add('open');
    drawer.classList.add('open');
    
    // Smoothly scale down main content slightly (Wow effect)
    document.getElementById('right-content').style.transform = 'scale(0.95) translateX(-2%)';
}

function closeDrawer() {
    drawer.classList.remove('open');
    drawerOverlay.classList.remove('open');
    
    // Reset main content
    document.getElementById('right-content').style.transform = 'scale(1) translateX(0)';
    
    setTimeout(() => {
        drawerContentArea.innerHTML = '';
    }, 600); // Wait for transition
}

closeDrawerBtn.addEventListener('click', closeDrawer);
drawerOverlay.addEventListener('click', closeDrawer);
document.addEventListener('keydown', e => { 
    if (e.key === 'Escape' && drawer.classList.contains('open')) closeDrawer(); 
});

// Fullscreen Logic
function openFullscreen(item) {
    fsTitle.textContent = item.title;
    const media = item.drawerMedia[0];
    
    if (media.type === 'iframe') {
        fsContent.innerHTML = `<iframe src="${media.url}" class="w-full h-full border-0" allow="xr-spatial-tracking; vr; ar; fullscreen" allowfullscreen></iframe>`;
    } else if (media.type === 'model-viewer') {
        fsContent.innerHTML = `
            <model-viewer 
                src="https://raw.githubusercontent.com/diegoUE8/b-here-vercel/id4ex/docs/models/NeilArmstrong.glb" 
                ios-src="https://raw.githubusercontent.com/diegoUE8/b-here-vercel/id4ex/docs/models/NeilArmstrong.usdz" 
                environment-image="https://raw.githubusercontent.com/diegoUE8/b-here-vercel/id4ex/docs/textures/envMap/studio.hdr" 
                auto-rotate 
                camera-controls 
                ar ar-modes="webxr scene-viewer quick-look" 
                class="w-full h-full bg-[#111]"
            >
                <button slot="ar-button" class="absolute bottom-16 left-1/2 -translate-x-1/2 bg-accent text-black font-bold px-8 py-3 rounded-full shadow-[0_0_20px_#00c3ff] tracking-widest uppercase text-sm active:scale-95 transition-transform z-50 flex items-center gap-3">
                    <svg class="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
                    Try in AR
                </button>
            </model-viewer>
        `;
    } else if (media.type === '360-image') {
        fsContent.innerHTML = `
        <a-scene embedded class="w-full h-full" vr-mode-ui="enabled: true">
            <a-assets>
                <img id="pano" src="${media.url}" crossorigin="anonymous">
            </a-assets>
            <a-sky src="#pano" rotation="0 -90 0"></a-sky>
            <a-camera look-controls="reverseMouseDrag: true" wasd-controls-enabled="false"></a-camera>
        </a-scene>
        <div class="absolute bottom-8 left-1/2 -translate-x-1/2 pointer-events-none z-10 opacity-70">
            <span class="bg-black/80 px-4 py-2 rounded-full text-white text-xs uppercase tracking-widest backdrop-blur-sm shadow-xl">Clicca e trascina per ruotare la visuale</span>
        </div>`;
    }
    
    fullscreenPlayground.classList.remove('hidden');
    // slight delay for transition
    requestAnimationFrame(() => {
        fullscreenPlayground.classList.remove('opacity-0');
        fullscreenPlayground.classList.add('opacity-100');
    });
}

function closeFullscreen() {
    fullscreenPlayground.classList.remove('opacity-100');
    fullscreenPlayground.classList.add('opacity-0');
    setTimeout(() => {
        fullscreenPlayground.classList.add('hidden');
        fsContent.innerHTML = ''; // clear memory
    }, 500);
}

closeFsBtn.addEventListener('click', closeFullscreen);
document.addEventListener('keydown', e => { 
    if (e.key === 'Escape' && !fullscreenPlayground.classList.contains('hidden')) closeFullscreen(); 
});

// Init
document.addEventListener('DOMContentLoaded', () => {
    renderTypoList('all');
});
