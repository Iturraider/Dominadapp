// --- DATOS DEL PLAN ---
const PLAN_DATA = [
    // SEMANA 1
    { w: 1, d: 'Lunes', type: 'Tradicional', task: '3 series de (Max - 1 rep)', desc: 'Descansa 2-3 min. No llegues al fallo total.' },
    { w: 1, d: 'Martes', type: 'Asistencia', task: '3 series de 5 Negativas (5s)', desc: 'Salta y baja controlando en 5 segundos.' },
    { w: 1, d: 'Miércoles', type: 'Cluster', task: '4 bloques (1+1+1 reps)', desc: '1 rep, descansa 20s, 1 rep, descansa 20s, 1 rep. Luego descansa 2 min.' },
    { w: 1, d: 'Jueves', type: 'Activación', task: '3 series de 30s Colgado', desc: 'Solo colgarse de la barra. Activa escápulas.' },
    { w: 1, d: 'Viernes', type: 'EMOM', task: 'EMOM 10\' (1 rep)', desc: 'Cada minuto haz 1 repetición. Descansa lo que sobre del minuto.' },

    // SEMANA 2
    { w: 2, d: 'Lunes', type: 'Tradicional', task: '4 series de (Max - 1 rep)', desc: 'Mismo esfuerzo, una serie más.' },
    { w: 2, d: 'Martes', type: 'Asistencia', task: '4 series de 5 Negativas (5s)', desc: 'Mantén el control en la bajada.' },
    { w: 2, d: 'Miércoles', type: 'Cluster', task: '5 bloques (1+1+1 reps)', desc: 'Aumentamos un bloque completo.' },
    { w: 2, d: 'Jueves', type: 'Activación', task: '4 series de 30s Colgado', desc: 'Mejora tu agarre.' },
    { w: 2, d: 'Viernes', type: 'EMOM', task: 'EMOM 12\' (1 rep)', desc: '2 minutos más de trabajo total.' },

    // SEMANA 3
    { w: 3, d: 'Lunes', type: 'Tradicional', task: '4 series al Fallo Técnico', desc: 'Para cuando la técnica empiece a fallar.' },
    { w: 3, d: 'Martes', type: 'Asistencia', task: '4 series de 6 Negativas (4s)', desc: 'Bajada un poco más rápida, más repeticiones.' },
    { w: 3, d: 'Miércoles', type: 'Cluster', task: '6 bloques (1+1+1 reps)', desc: 'Descanso entre micro-reps baja a 15s.' },
    { w: 3, d: 'Jueves', type: 'Activación', task: '4 series de 45s Colgado', desc: 'Aguanta fuerte.' },
    { w: 3, d: 'Viernes', type: 'EMOM', task: 'EMOM 10\' (2 reps)', desc: 'Doble de trabajo por minuto. Si fallas, baja a 1.' },

    // SEMANA 4 (DESCARGA)
    { w: 4, d: 'Lunes', type: 'Tradicional', task: '2 series suaves (2 reps)', desc: 'Semana de descarga. Disfrútalo.' },
    { w: 4, d: 'Martes', type: 'Asistencia', task: '2 series de 5 Negativas (3s)', desc: 'Muy suave.' },
    { w: 4, d: 'Miércoles', type: 'Cluster', task: '3 bloques (1+1 reps)', desc: 'Solo práctica técnica.' },
    { w: 4, d: 'Jueves', type: 'Activación', task: '2 series de 30s Colgado', desc: 'Activa y vete a casa.' },
    { w: 4, d: 'Viernes', type: 'EMOM', task: 'EMOM 5\' (1 rep)', desc: 'Casi un calentamiento.' },

    // SEMANA 5
    { w: 5, d: 'Lunes', type: 'Tradicional', task: '5 series al Fallo Técnico', desc: 'Volvemos fuerte.' },
    { w: 5, d: 'Martes', type: 'Asistencia', task: '5 series (3 Remos + 3 Negativas)', desc: 'Combinada.' },
    { w: 5, d: 'Miércoles', type: 'Cluster', task: '4 bloques (2+1 reps)', desc: 'Primera micro-serie de 2 reps seguidas.' },
    { w: 5, d: 'Jueves', type: 'Activación', task: '5 series de 45s Colgado', desc: 'Grip de acero.' },
    { w: 5, d: 'Viernes', type: 'EMOM', task: 'EMOM 12\' (2 reps)', desc: 'Resistencia pura.' },

    // SEMANA 6
    { w: 6, d: 'Lunes', type: 'Tradicional', task: '5 series Récord (Max + 1)', desc: 'Intenta sacar una más que la semana pasada.' },
    { w: 6, d: 'Martes', type: 'Asistencia', task: '5 series (5 Remos + 4 Negativas)', desc: 'Volumen alto.' },
    { w: 6, d: 'Miércoles', type: 'Cluster', task: '5 bloques (2+1 reps)', desc: 'Descanso entre micros 15s.' },
    { w: 6, d: 'Jueves', type: 'Activación', task: '5 series (30s Colgado + Core)', desc: 'Añade elevaciones de piernas.' },
    { w: 6, d: 'Viernes', type: 'EMOM', task: 'EMOM 10\' (3 reps)', desc: 'El gran salto. Es duro.' },

    // SEMANA 7
    { w: 7, d: 'Lunes', type: 'Tradicional', task: '6 series al Fallo Técnico', desc: 'Volumen máximo.' },
    { w: 7, d: 'Martes', type: 'Asistencia', task: '6 series (5 Remos + 5 Negativas)', desc: 'Destruye la espalda.' },
    { w: 7, d: 'Miércoles', type: 'Cluster', task: '6 bloques (2+2 reps)', desc: 'Cluster muy denso.' },
    { w: 7, d: 'Jueves', type: 'Activación', task: '5 series (45s Colgado + Core)', desc: 'Último empujón.' },
    { w: 7, d: 'Viernes', type: 'EMOM', task: 'EMOM 12\' (3 reps)', desc: 'Prueba de fuego.' },

    // SEMANA 8
    { w: 8, d: 'Lunes', type: 'Tradicional', task: 'TEST MÁXIMO', desc: 'Descansa bien y prueba tu máximo de dominadas estrictas.' },
    { w: 8, d: 'Martes', type: 'Descanso', task: 'Descanso', desc: 'Recuperación.' },
    { w: 8, d: 'Miércoles', type: 'Descanso', task: 'Descanso', desc: 'Recuperación.' },
    { w: 8, d: 'Jueves', type: 'Descanso', task: 'Descanso', desc: 'Recuperación.' },
    { w: 8, d: 'Viernes', type: 'Descanso', task: 'Descanso', desc: 'Recuperación.' },
];

// --- ESTADO Y VARIABLES ---
let state = {
    progress: {} // { "w1-d1": true, ... }
};

let timerData = {
    interval: null,
    timeLeft: 0,
    totalTime: 0,
    running: false,
    type: 'normal', // normal, emom, cluster
    roundsTotal: 0,
    roundCurrent: 1
};

// --- INICIALIZACIÓN ---

window.addEventListener('load', () => {
    loadProgress();
    refreshUI();
    registerSW();

    // Ocultar loading inmediatamente ya que es local
    const loader = document.getElementById('loading-overlay');
    if (loader) loader.classList.add('hidden');
});

function loadProgress() {
    try {
        const saved = localStorage.getItem('dominadas_progress');
        if (saved) {
            state.progress = JSON.parse(saved);
        }
    } catch (e) {
        console.error("Error cargando progreso", e);
    }
}

function saveProgress() {
    try {
        localStorage.setItem('dominadas_progress', JSON.stringify(state.progress));
    } catch (e) {
        console.error("Error guardando progreso", e);
    }
}

async function registerSW() {
    if ('serviceWorker' in navigator) {
        try {
            await navigator.serviceWorker.register('./sw.js');
            console.log('Service Worker registrado');
        } catch (e) {
            console.log('Service Worker falló', e);
        }
    }
}

// --- LÓGICA UI ---

function refreshUI() {
    // 1. Calcular estadísticas
    const totalDays = PLAN_DATA.filter(p => p.type !== 'Descanso').length;
    const completedDays = Object.values(state.progress).filter(v => v).length;
    const percent = Math.min(100, Math.round((completedDays / totalDays) * 100));

    // 2. Determinar Semana Actual (Basado en días completados / 5)
    let currentWeek = Math.floor(completedDays / 5) + 1;
    if (currentWeek > 8) currentWeek = 8;

    // 3. Determinar el Día Actual de la semana real
    const daysMap = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    const todayIndex = new Date().getDay();
    const todayName = daysMap[todayIndex];

    // 4. Buscar el ejercicio de HOY
    let todayWorkout = PLAN_DATA.find(p => p.w === currentWeek && p.d === todayName);

    let isRestDay = false;
    if (!todayWorkout) {
        if (todayName === 'Sábado' || todayName === 'Domingo') {
            isRestDay = true;
            todayWorkout = PLAN_DATA.find(p => p.w === currentWeek && p.d === 'Lunes');
        } else {
            todayWorkout = PLAN_DATA[0];
        }
    }

    // Actualizar DOM
    const weekDisplay = document.getElementById('week-display');
    if (weekDisplay) weekDisplay.textContent = currentWeek;

    const dateDisplay = document.getElementById('current-date-display');
    if (dateDisplay) dateDisplay.textContent = todayName;

    const progressPercent = document.getElementById('progress-percent');
    if (progressPercent) progressPercent.textContent = `${percent}%`;

    const progressBar = document.getElementById('progress-bar-fill');
    if (progressBar) progressBar.style.width = `${percent}%`;

    renderWorkoutCard(todayWorkout, currentWeek, isRestDay);
    renderFullTable();
}

function renderWorkoutCard(workout, week, isWeekend) {
    const container = document.getElementById('workout-card');
    if (!container) return;

    if (isWeekend) {
        container.innerHTML = `
            <div class="p-8 text-center bg-blue-50">
                <h3 class="text-2xl font-bold text-blue-800 mb-2">🎉 ¡Fin de Semana!</h3>
                <p class="text-gray-600 mb-4">Día de recuperación activa. Come bien y duerme 8 horas.</p>
                <p class="text-sm text-gray-500">Próximo entreno: Lunes, Semana ${week}</p>
            </div>
        `;
        return;
    }

    const id = `w${workout.w}-${workout.d}`;
    const isDone = state.progress[id] === true;

    // Botón de timer según tipo
    let timerBtnHtml = '';
    const btnBaseClass = "flex-1 py-4 rounded-2xl font-bold transition active:scale-95 touch-manipulation";

    if (workout.type === 'Tradicional' || workout.type === 'Asistencia') {
        timerBtnHtml = `<button onclick="window.setupTimer('normal', 120)" class="${btnBaseClass} bg-gray-100 hover:bg-gray-200 text-gray-700">⏱️ Descanso (2:00)</button>`;
    } else if (workout.type === 'Cluster') {
        timerBtnHtml = `<button onclick="window.setupTimer('cluster', 15)" class="${btnBaseClass} bg-purple-100 hover:bg-purple-200 text-purple-700">⚡ Cluster (15s)</button>`;
    } else if (workout.type === 'EMOM') {
        timerBtnHtml = `<button onclick="window.setupTimer('emom', 60)" class="${btnBaseClass} bg-orange-100 hover:bg-orange-200 text-orange-700">🔥 EMOM (60s)</button>`;
    }

    // Botón de estado
    const statusBtn = isDone
        ? `<button onclick="window.toggleDay('${id}')" class="w-full bg-green-500 hover:bg-green-600 text-white py-5 rounded-2xl font-bold shadow-lg shadow-green-200 transition active:scale-95 touch-manipulation text-lg">¡COMPLETADO! ✅</button>`
        : `<button onclick="window.toggleDay('${id}')" class="w-full bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-2xl font-bold shadow-lg shadow-blue-200 transition active:scale-95 touch-manipulation text-lg">MARCAR COMO HECHO</button>`;

    container.innerHTML = `
        <div class="p-6 md:p-8">
            <div class="flex items-center justify-between mb-4">
                <span class="px-3 py-1 text-xs font-bold uppercase tracking-wide rounded-full ${getTypeColor(workout.type)}">
                    ${workout.type}
                </span>
                <span class="text-gray-400 text-sm">Semana ${workout.w}</span>
            </div>
            
            <h3 class="text-2xl md:text-3xl font-bold text-gray-800 mb-2 leading-tight">${workout.task}</h3>
            <p class="text-gray-600 mb-8 border-l-4 border-gray-200 pl-4 italic">${workout.desc}</p>
            
            <div class="flex flex-col gap-3">
                <div class="flex gap-3 mb-2">
                    ${timerBtnHtml}
                </div>
                ${statusBtn}
            </div>
        </div>
    `;
}

function getTypeColor(type) {
    switch (type) {
        case 'Tradicional': return 'bg-blue-100 text-blue-700';
        case 'Cluster': return 'bg-purple-100 text-purple-700';
        case 'EMOM': return 'bg-orange-100 text-orange-700';
        case 'Asistencia': return 'bg-teal-100 text-teal-700';
        case 'Activación': return 'bg-yellow-100 text-yellow-700';
        default: return 'bg-gray-100 text-gray-700';
    }
}

function renderFullTable() {
    const tbody = document.getElementById('plan-table-body');
    if (!tbody) return;
    let html = '';

    PLAN_DATA.forEach(item => {
        const id = `w${item.w}-${item.d}`;
        const isDone = state.progress[id];
        const statusIcon = isDone ? '✅' : '⚪';
        const rowClass = isDone ? 'bg-green-50' : '';

        html += `
            <tr class="hover:bg-gray-50 active:bg-gray-100 transition cursor-pointer ${rowClass}" onclick="window.toggleDay('${id}')">
                <td class="py-4 px-4 font-bold text-gray-500 text-lg">${item.w}</td>
                <td class="py-4 px-4 text-gray-800 font-medium">${item.d}</td>
                <td class="py-4 px-4">
                    <div class="text-sm font-bold text-gray-700">${item.type}</div>
                    <div class="text-xs text-gray-500 truncate max-w-[150px] md:max-w-none">${item.task}</div>
                </td>
                <td class="py-4 px-4 text-center">
                    <span class="text-xl">${statusIcon}</span>
                </td>
            </tr>
        `;
    });
    tbody.innerHTML = html;
}

// --- ACCIONES GLOBALES ---

window.toggleFullPlan = function () {
    const el = document.getElementById('full-plan-container');
    const icon = document.getElementById('arrow-icon');
    el.classList.toggle('hidden');
    icon.style.transform = el.classList.contains('hidden') ? 'rotate(0deg)' : 'rotate(180deg)';
}

window.toggleDay = function (id) {
    const currentState = state.progress[id] || false;
    const newState = !currentState;

    state.progress[id] = newState;
    saveProgress();
    refreshUI();
}

// --- TEMPORIZADOR LOGIC ---

window.setupTimer = function (type, seconds) {
    timerData.type = type;
    timerData.totalTime = seconds;
    timerData.timeLeft = seconds;
    timerData.running = false;
    timerData.roundsTotal = (type === 'emom') ? 10 : (type === 'cluster' ? 5 : 1);
    timerData.roundCurrent = 1;

    updateTimerDisplay();
    document.getElementById('timer-modal').classList.remove('hidden');
    document.getElementById('timer-modal').classList.add('flex');

    let label = "Descanso";
    let sub = "Recupera el aliento";
    if (type === 'cluster') { label = "Micro-Descanso"; sub = "Solo 15s, prepárate rápido"; }
    if (type === 'emom') { label = "EMOM Ronda 1"; sub = "Haz tus repeticiones y espera"; }

    document.getElementById('timer-label').textContent = label;
    document.getElementById('timer-subtext').textContent = sub;
    document.getElementById('btn-timer-toggle').textContent = "INICIAR";
    document.getElementById('btn-timer-toggle').className = "flex-1 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl shadow-lg transition transform active:scale-95";
}

window.closeTimer = function () {
    clearInterval(timerData.interval);
    document.getElementById('timer-modal').classList.add('hidden');
    document.getElementById('timer-modal').classList.remove('flex');
}

window.resetTimer = function () {
    clearInterval(timerData.interval);
    timerData.running = false;
    timerData.timeLeft = timerData.totalTime;
    updateTimerDisplay();
    document.getElementById('btn-timer-toggle').textContent = "INICIAR";
    document.getElementById('btn-timer-toggle').classList.remove('bg-red-500', 'hover:bg-red-600');
    document.getElementById('btn-timer-toggle').classList.add('bg-blue-600', 'hover:bg-blue-700');
}

window.toggleTimer = function () {
    const btn = document.getElementById('btn-timer-toggle');

    if (timerData.running) {
        // Pause
        clearInterval(timerData.interval);
        timerData.running = false;
        btn.textContent = "CONTINUAR";
        btn.classList.remove('bg-red-500', 'hover:bg-red-600');
        btn.classList.add('bg-blue-600', 'hover:bg-blue-700');
    } else {
        // Start
        timerData.running = true;
        btn.textContent = "PAUSAR";
        btn.classList.remove('bg-blue-600', 'hover:bg-blue-700');
        btn.classList.add('bg-red-500', 'hover:bg-red-600');

        timerData.interval = setInterval(() => {
            timerData.timeLeft--;
            updateTimerDisplay();

            if (timerData.timeLeft <= 0) {
                // Fin del tiempo
                if (timerData.type === 'emom' || timerData.type === 'cluster') {
                    playBeep();
                    window.resetTimer();
                    document.getElementById('timer-subtext').textContent = "¡Tiempo! Siguiente ronda.";
                } else {
                    playBeep();
                    window.resetTimer();
                    document.getElementById('timer-subtext').textContent = "¡Descanso terminado!";
                }
            }
        }, 1000);
    }
}

function updateTimerDisplay() {
    const m = Math.floor(timerData.timeLeft / 60).toString().padStart(2, '0');
    const s = (timerData.timeLeft % 60).toString().padStart(2, '0');
    document.getElementById('timer-value').textContent = `${m}:${s}`;

    const pct = (timerData.timeLeft / timerData.totalTime) * 100;
    document.getElementById('timer-bar').style.width = `${pct}%`;
}

function playBeep() {
    try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.frequency.value = 800;
        osc.start();
        gain.gain.exponentialRampToValueAtTime(0.00001, ctx.currentTime + 0.5);
        osc.stop(ctx.currentTime + 0.5);
    } catch (e) {
        console.log("Audio not supported or blocked");
    }
}
