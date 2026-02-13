// ==========================================
// 1. DATOS BASE DEL MUNDO
// ==========================================
const worldData = {
    Lerindel: { bonus: { fue: 4, des: 2, con: 4, int: 4, sab: 1, car: 2 }, razas: { humanos: ["herrero","brujo","mago","hechicero","paladín","caballero","enano","guardián","bardo","explorador","asesino","arqueros"], elfos: ["herrero","brujo","mago","hechicero","paladín","caballero","bardo","explorador","arqueros"], "semi elfos": ["herrero","brujo","mago","hechicero","paladín","caballero","enano","guardián","bardo","explorador","arqueros"] } },
    Thaloria: { bonus: { fue: 3, des: 4, con: 1, int: 3, sab: 1, car: 2 }, razas: { humanos: ["herrero","brujo","mago","hechicero","paladín","caballero","enano","guardián","bardo","explorador","asesino","arqueros"], elfos: ["herrero","brujo","mago","hechicero","paladín","caballero","bardo","explorador","arqueros"], "semi elfos": ["herrero","brujo","mago","hechicero","paladín","caballero","enano","guardián","bardo","explorador","arqueros"], demanimal: ["herrero", "caballero", "enano", "guardián", "guerrero", "explorador"] } },
    Lordenbell: { bonus: { fue: 0, des: 4, con: 2, int: 1, sab: 4, car: 2 }, razas: { humanos: ["herrero","brujo","mago","hechicero","paladín","caballero","enano","guardián","bardo","explorador","asesino","espía","arqueros"], elfos: ["herrero","brujo","mago","hechicero","paladín","caballero","bardo","explorador","espía","arqueros"], "semi elfos": ["herrero","brujo","mago","hechicero","paladín","caballero","enano","guardián","bardo","explorador","arqueros"], dralfenn: ["herrero","brujo","hechicero","paladín","caballero","enano","guardián","explorador","asesino","espía"], demonios: ["herrero","brujo","hechicero","caballero","enano","guardián","explorador","asesino","espía"] } },
    Arvandor: { bonus: { fue: 2, des: 1, con: 1, int: 3, sab: 2, car: 4 }, razas: { humanos: ["herrero","brujo","mago","hechicero","paladín","caballero","enano","guardián","bardo","explorador","asesino","espía","guerrero","arqueros"], elfos: ["herrero","mago","hechicero","paladín","caballero","guardián","bardo","explorador","arqueros"] } },
    Glatius: { bonus: { fue: 2, des: 1, con: 4, int: 3, sab: 4, car: 1 }, razas: { humanos: ["herrero","brujo","mago","hechicero","paladín","caballero","enano","guardián","bardo","explorador","asesino","espía","alquimista","arquero"], bestiaris: ["herrero","caballero","guardián","bardo","explorador","asesino","guerreros","arqueros"], demanimal: ["herrero","brujo","mago","hechicero","paladín","caballero","enano","guardián","bardo","explorador","asesino","espía"] } },
    Draventhia: { bonus: { fue: 3, des: 1, con: 3, int: 2, sab: 2, car: 2 }, razas: { humanos: ["herrero","brujo","mago","hechicero","paladín","caballero","enano","guardián","bardo","explorador","asesino","espía","alquimista","arquero"], droides: ["herrero","hechicero","caballero","guardián","explorador","asesino","espía","alquimista"], "semi elfos": ["herrero","brujo","mago","hechicero","paladín","caballero","enano","guardián","bardo","explorador","asesino","espía","alquimista","arquero"], dralfenn: ["herrero","brujo","mago","hechicero","paladín","caballero","enano","guardián","explorador","asesino","espía","alquimista"] } },
    "Vareth-Nor": { bonus: { fue: 3, des: 2, con: 2, int: 3, sab: 1, car: 3 }, razas: { humanos: ["herrero","brujo","mago","hechicero","paladín","caballero","enano","guardián","bardo","explorador","asesino","arqueros"], elfos: ["herrero","mago","hechicero","paladín","caballero","guardián","bardo","explorador","arqueros"], "semi elfos": ["herrero","brujo","mago","hechicero","paladín","caballero","enano","guardián","bardo","explorador","arqueros"], droide: ["herrero","hechicero","paladín","caballero","guardián"], demonios: ["herrero","brujo","mago","hechicero","paladín","caballero","enano","guardián","bardo","explorador","asesino","arqueros"], demanimal: ["herrero","brujo","mago","hechicero","paladín","caballero","enano","guardián","bardo","explorador","asesino","arqueros"] } },
    Idmael: { bonus: { fue: 2, des: 4, con: 1, int: 3, sab: 4, car: 3 }, razas: { demonios: ["herrero","brujo","mago","caballero","guardián","explorador","asesino","espía","alquimista","arquero"], droide: ["herrero","brujo","mago","caballero","guardián","explorador","asesino","espía","alquimista","arquero"], elfos: ["herrero","brujo","mago","hechicero","explorador","asesino","alquimista","arquero"], dralfenn: ["herrero","brujo","explorador","asesino","espía","alquimista","arquero"], esqueletos: ["brujo","hechicero","caballero","guardián","asesino","alquimista","arquero"] } },
    Fjorheim: { bonus: { fue: 3, des: 4, con: 2, int: 3, sab: 4, car: 1 }, razas: { humanos: ["herrero","brujo","mago","hechicero","paladín","caballero","enano","guardián","bardo","explorador","asesino","espía","alquimista","arquero"], elfos: ["herrero","brujo","mago","hechicero","paladín","caballero","guardián","bardo","explorador","alquimista","arquero"], "semi elfos": ["herrero","brujo","mago","hechicero","paladín","caballero","enano","guardián","bardo","explorador","asesino","espía","alquimista","arquero"] } },
    Nivalis: { bonus: { fue: 3, des: 4, con: 2, int: 4, sab: 2, car: 2 }, razas: { humanos: ["herrero","brujo","mago","hechicero","paladín","caballero","enano","guardián","bardo","explorador","asesino","espía","alquimista","arquero"] } }
};

const armamentData = {
    herrero: { green: ["Maza", "Hacha", "Escudo"], yellow: ["Espada larga"] },
    caballero: { green: ["Espada larga", "Mandoble", "Alabarda", "Escudo"], yellow: ["Ballesta"] },
    paladín: { green: ["Espada larga", "Maza", "Escudo"], yellow: ["Vara mágica"] },
    asesino: { green: ["Daga", "Daga doble", "Espada corta"], yellow: ["Arco corto"] },
    bardo: { green: ["Vara mágica", "Daga", "Instrumento"], yellow: ["Espada corta"] },
    mago: { green: ["Báculo", "Libro mágico", "Orbe"], yellow: ["Daga"] },
    hechicero: { green: ["Vara mágica", "Orbe", "Daga ritual"], yellow: ["Báculo"] },
    brujo: { green: ["Daga ritual", "Orbe", "Báculo"], yellow: ["Espada corta"] },
    arqueros: { green: ["Arco largo", "Arco corto", "Ballesta"], yellow: ["Daga"] },
    guardián: { green: ["Escudo", "Espada larga", "Lanza"], yellow: ["Mandoble"] },
    guerrero: { green: ["Hacha", "Mandoble", "Maza"], yellow: ["Arco corto"] },
    explorador: { green: ["Arco corto", "Lanza", "Daga"], yellow: ["Hacha"] },
    espía: { green: ["Daga", "Ballesta"], yellow: ["Vara mágica"] }
};

const RANGOS_LISTA = ["ANTIFONO", "SEMIDIOS", "DIOS", "TITAN", "DIOS TITAN", "BERSER", "BERSERKER", "CELESTIAL", "DIVINO", "DEIDAD"];

const SKILLS_CONFIG = [
    { n: "ACROBACIA", a: "des" }, { n: "ATLETISMO", a: "fue" }, { n: "CONOCIMIENTO ARCANO", a: "int" },
    { n: "ENGAÑO", a: "car" }, { n: "HISTORIA", a: "int" }, { n: "INTERPRETACION", a: "car" },
    { n: "IMTIMIDACION", a: "car" }, { n: "INVESTIGACION", a: "int" }, { n: "JUEGO DE MANOS", a: "des" },
    { n: "MEDICINA", a: "sab" }, { n: "NATURALEZA", a: "int" }, { n: "PERCEPCION", a: "sab" },
    { n: "PERSPICACIA", a: "sab" }, { n: "PERSUACION", a: "car" }, { n: "RELIGION", a: "int" },
    { n: "SIGILO", a: "des" }, { n: "SUPERVIVENCIA", a: "sab" }, { n: "TRATO CON LOS ANIMALES", a: "sab" }
];

const spellsData = [
    { nombre: "Bola de Fuego I", clase: ["mago", "hechicero"], dmg: "2d4", info: "Hechizo Nivel 1", lvl: 1 },
    { nombre: "Bola de Agua I", clase: ["mago", "hechicero"], dmg: "2d4", info: "Hechizo Nivel 1", lvl: 1 },
    { nombre: "Rayo Oscuro", clase: ["brujo"], dmg: "2d4", info: "Hechizo Nivel 1", lvl: 1 },
    { nombre: "Maldición Menor", clase: ["brujo"], dmg: "Debilidad", info: "Hechizo Nivel 1", lvl: 1 },
    { nombre: "Cura Leve", clase: ["paladín", "bardo"], dmg: "1d6", info: "Hechizo Nivel 1", lvl: 1 },
    { nombre: "Explosión Ígnea", clase: ["mago", "hechicero"], dmg: "4d4", info: "Hechizo Nivel 2", lvl: 2 },
    { nombre: "Tormenta de Sombras", clase: ["brujo"], dmg: "3d6", info: "Hechizo Nivel 2", lvl: 2 },
    { nombre: "Plegaria Divina", clase: ["paladín"], dmg: "2d8", info: "Hechizo Nivel 2", lvl: 2 },
    { nombre: "Juicio Final", clase: ["paladín"], dmg: "5d10", info: "Hechizo Nivel 3", lvl: 3 },
    { nombre: "Desintegrar", clase: ["mago", "brujo"], dmg: "10d6", info: "Hechizo Nivel 3", lvl: 3 }
];

// ==========================================
// 2. LÓGICA DEL PERSONAJE
// ==========================================
let personajeActual = {
    nombre: "", region: "", raza: "", subclase: "",
    stats: { fue: 10, des: 10, con: 10, int: 10, sab: 10, car: 10 },
    skills: {}, 
    puntosSkillDisponibles: 15,
    hp: 10, hpMax: 10,
    nivel: 1, exp: 0, rango: "ANTIFONO",
    hechizos: [], slotsTotales: 2,
    oro: 0, inventario: []
};

SKILLS_CONFIG.forEach(s => personajeActual.skills[s.n] = 0);

function actualizarRazas() {
    const reg = document.getElementById("region").value;
    const razaSelect = document.getElementById("raza");
    razaSelect.innerHTML = '<option value="">-- Selecciona Raza --</option>';
    if (reg) {
        Object.keys(worldData[reg].razas).forEach(r => razaSelect.innerHTML += `<option value="${r}">${r.toUpperCase()}</option>`);
        razaSelect.disabled = false;
        const bonus = worldData[reg].bonus;
        ["fuerza","destreza","constitucion","inteligencia","sabiduria","carisma"].forEach(s => document.getElementById(`bonus-${s}`).textContent = bonus[s.substring(0,3)]);
        calcularReglasDnD();
    }
}

function actualizarSubclases() {
    const reg = document.getElementById("region").value;
    const raza = document.getElementById("raza").value;
    const subSelect = document.getElementById("subclase");
    subSelect.innerHTML = '<option value="">-- Selecciona Subclase --</option>';
    if (raza) {
        worldData[reg].razas[raza].forEach(s => subSelect.innerHTML += `<option value="${s}">${s.toUpperCase()}</option>`);
        subSelect.disabled = false;
    }
}

function calcularReglasDnD() {
    ["fuerza","destreza","constitucion","inteligencia","sabiduria","carisma"].forEach(s => {
        const d = parseInt(document.getElementById(`dado-${s}`).value) || 0;
        const b = parseInt(document.getElementById(`bonus-${s}`).textContent) || 0;
        const mod = Math.floor(((d + b) - 10) / 2);
        document.getElementById(`final-${s}`).textContent = (mod >= 0 ? "+" : "") + mod;
    });
}

function crearPersonaje() {
    personajeActual.nombre = document.getElementById("nombre").value || "Héroe";
    personajeActual.region = document.getElementById("region").value;
    personajeActual.raza = document.getElementById("raza").value;
    personajeActual.subclase = document.getElementById("subclase").value;
    if (!personajeActual.region || !personajeActual.raza || !personajeActual.subclase) return alert("Completa los datos.");
    document.getElementById("seccion-identidad").classList.add("hidden");
    document.getElementById("seccion-atributos").classList.remove("hidden");
}

function irASkills() {
    ["fuerza","destreza","constitucion","inteligencia","sabiduria","carisma"].forEach(s => {
        const d = parseInt(document.getElementById(`dado-${s}`).value) || 0;
        const b = parseInt(document.getElementById(`bonus-${s}`).textContent) || 0;
        personajeActual.stats[s.substring(0,3)] = d + b;
    });
    const modCon = Math.floor((personajeActual.stats.con - 10) / 2);
    personajeActual.hpMax = 10 + modCon;
    personajeActual.hp = personajeActual.hpMax;
    document.getElementById("seccion-atributos").classList.add("hidden");
    document.getElementById("seccion-skills").classList.remove("hidden");
    renderRepartoSkills();
}

function renderRepartoSkills() {
    const cont = document.getElementById("lista-skills-reparto");
    cont.innerHTML = "";
    SKILLS_CONFIG.forEach(s => {
        cont.innerHTML += `<div class="skill-reparto-card"><span>${s.n}</span><div class="btns"><button onclick="cambiarSkill('${s.n}', -1)">-</button><strong id="val-${s.n}">${personajeActual.skills[s.n]}</strong><button onclick="cambiarSkill('${s.n}', 1)">+</button></div></div>`;
    });
    document.getElementById("puntos-disponibles").textContent = personajeActual.puntosSkillDisponibles;
}

function cambiarSkill(nombre, delta) {
    if (delta > 0 && personajeActual.puntosSkillDisponibles > 0) { personajeActual.skills[nombre]++; personajeActual.puntosSkillDisponibles--; }
    else if (delta < 0 && personajeActual.skills[nombre] > 0) { personajeActual.skills[nombre]--; personajeActual.puntosSkillDisponibles++; }
    renderRepartoSkills();
}

function irAHechizos() {
    document.getElementById("seccion-skills").classList.add("hidden");
    document.getElementById("seccion-hechizos").classList.remove("hidden");
    renderSeleccionHechizos();
}

function renderSeleccionHechizos() {
    const cont = document.getElementById("contenedor-seleccion-hechizos");
    cont.innerHTML = "";
    spellsData.filter(h => h.lvl === 1 && h.clase.includes(personajeActual.subclase)).forEach((h, i) => {
        cont.innerHTML += `<div class="spell-card-select"><input type="checkbox" id="spell-init-${i}" onchange="validarSlotsInit(this, '${h.nombre}')"><label for="spell-init-${i}"><strong>${h.nombre}</strong><br><small>${h.dmg}</small></label></div>`;
    });
}

let hechizosPreselección = [];
function validarSlotsInit(cb, nombre) {
    if (cb.checked) {
        if (hechizosPreselección.length < 2) hechizosPreselección.push(nombre);
        else { cb.checked = false; alert("Solo 2 hechizos de inicio."); }
    } else { hechizosPreselección = hechizosPreselección.filter(h => h !== nombre); }
}

function mostrarTablero() {
    personajeActual.hechizos = spellsData.filter(s => hechizosPreselección.includes(s.nombre));
    document.getElementById("seccion-hechizos").classList.add("hidden");
    document.getElementById("seccion-tablero").classList.remove("hidden");
    actualizarDashboard();
}

function actualizarDashboard() {
    document.getElementById("dash-nombre").textContent = personajeActual.nombre;
    document.getElementById("dash-raza-clase").textContent = `${personajeActual.raza} | ${personajeActual.subclase}`;
    document.getElementById("dash-hp-actual").textContent = personajeActual.hp;
    document.getElementById("dash-hp-max").textContent = personajeActual.hpMax;
    document.getElementById("barra-vida").style.width = (personajeActual.hp / personajeActual.hpMax * 100) + "%";
    document.getElementById("dash-oro").textContent = personajeActual.oro;

    // INICIATIVA Y CA BASADAS EN REGLAS D&D
    const modDes = Math.floor((personajeActual.stats.des - 10) / 2);
    document.getElementById("dash-iniciativa").textContent = (modDes >= 0 ? "+" : "") + modDes;
    document.getElementById("dash-ca").textContent = 10 + modDes;

    const mini = document.getElementById("panel-atributos-mini");
    mini.innerHTML = "";
    for (let s in personajeActual.stats) mini.innerHTML += `<div class="stat-mini-box"><b>${s.toUpperCase()}</b><span>${personajeActual.stats[s]}</span></div>`;

    const miArma = armamentData[personajeActual.subclase];
    const armaCont = document.getElementById("lista-armas");
    armaCont.innerHTML = "";
    if (miArma) {
        miArma.green.forEach(a => armaCont.innerHTML += `<div class="weapon-tag green">🟢 ${a}</div>`);
        miArma.yellow.forEach(a => armaCont.innerHTML += `<div class="weapon-tag yellow">🟡 ${a}</div>`);
    }

    renderSkillsTab();
    renderMagiaTab();
    actualizarDashboardNivel();
}

function renderMagiaTab() {
    personajeActual.slotsTotales = 2 + Math.floor((personajeActual.nivel - 1) / 3);
    document.getElementById("dash-slots-totales").textContent = personajeActual.slotsTotales;
    document.getElementById("dash-slots-usados").textContent = personajeActual.hechizos.length;

    const lista = document.getElementById("dash-lista-hechizos");
    lista.innerHTML = personajeActual.hechizos.map(h => `<div class="spell-item"><strong>${h.nombre}</strong> <span class="lvl-tag">Niv.${h.lvl}</span><br><small>${h.dmg} - ${h.info}</small></div>`).join("");

    const aprenderSec = document.getElementById("contenedor-aprendizaje");
    const aprenderLista = document.getElementById("lista-hechizos-disponibles");
    aprenderLista.innerHTML = "";
    
    if (personajeActual.hechizos.length < personajeActual.slotsTotales) {
        aprenderSec.style.display = "block";
        const maxLvlPermitido = 1 + Math.floor((personajeActual.nivel - 1) / 10);
        const disponibles = spellsData.filter(s => s.clase.includes(personajeActual.subclase) && s.lvl <= maxLvlPermitido && !personajeActual.hechizos.find(h => h.nombre === s.nombre));
        
        if (disponibles.length > 0) {
            disponibles.forEach(s => {
                aprenderLista.innerHTML += `<div class="spell-learn-card"><span>${s.nombre} (Niv.${s.lvl})</span><button onclick="aprenderHechizo('${s.nombre}')">Aprender</button></div>`;
            });
        } else { aprenderLista.innerHTML = "<p>No hay más hechizos disponibles para tu rango.</p>"; }
    } else { aprenderSec.style.display = "none"; }
}

function aprenderHechizo(nombre) {
    personajeActual.hechizos.push(spellsData.find(s => s.nombre === nombre));
    actualizarDashboard();
}

function renderSkillsTab() {
    const cont = document.getElementById("dash-lista-skills");
    cont.innerHTML = "";
    const badge = document.getElementById("badge-puntos-skill");
    badge.textContent = personajeActual.puntosSkillDisponibles > 0 ? personajeActual.puntosSkillDisponibles : "";
    SKILLS_CONFIG.forEach(s => {
        const modAttr = Math.floor((personajeActual.stats[s.a] - 10) / 2);
        const total = modAttr + personajeActual.skills[s.n];
        cont.innerHTML += `<div class="skill-final-row"><span>${s.n} <small>(${s.a.toUpperCase()})</small></span><div class="skill-val-box">${personajeActual.puntosSkillDisponibles > 0 ? `<button onclick="subirSkillDash('${s.n}')">+</button>` : ''}<span class="total-val">${total >= 0 ? "+" : ""}${total}</span></div></div>`;
    });
}

function subirSkillDash(n) {
    if(personajeActual.puntosSkillDisponibles > 0) { personajeActual.skills[n]++; personajeActual.puntosSkillDisponibles--; actualizarDashboard(); }
}

function sumarExp() {
    const xp = parseInt(document.getElementById("input-exp-ganada").value) || 0;
    personajeActual.exp += xp;
    while (personajeActual.exp >= personajeActual.nivel * 100) {
        personajeActual.nivel++;
        personajeActual.puntosSkillDisponibles += 1;
        const subidaVida = (personajeActual.nivel % 10 === 0) ? 7 : 5;
        personajeActual.hpMax += subidaVida;
        personajeActual.hp = personajeActual.hpMax;
        alert(`¡NIVEL ${personajeActual.nivel}! +1 Pto Habilidad y +${subidaVida} HP.`);
    }
    actualizarDashboard();
    document.getElementById("input-exp-ganada").value = "";
}

function actualizarDashboardNivel() {
    document.getElementById("dash-nivel").textContent = personajeActual.nivel;
    document.getElementById("dash-exp").textContent = `${personajeActual.exp} / ${personajeActual.nivel * 100} XP`;
    let rIdx = Math.floor((personajeActual.nivel - 1) / 10);
    personajeActual.rango = RANGOS_LISTA[Math.min(rIdx, RANGOS_LISTA.length - 1)];
    document.getElementById("dash-rango").textContent = personajeActual.rango;
    document.getElementById("barra-exp").style.width = ((personajeActual.exp % 100)) + "%";
}

function modificarOro(tipo) {
    const cant = parseInt(document.getElementById("input-oro-mod").value) || 0;
    if (tipo === 'sumar') personajeActual.oro += cant;
    else personajeActual.oro = Math.max(0, personajeActual.oro - cant);
    actualizarDashboard();
    document.getElementById("input-oro-mod").value = "";
}

function modificarVidaDM(tipo) {
    const cant = parseInt(document.getElementById("input-modificar-vida").value) || 0;
    if (tipo === 'restar') personajeActual.hp = Math.max(0, personajeActual.hp - cant);
    else personajeActual.hp = Math.min(personajeActual.hpMax, personajeActual.hp + cant);
    actualizarDashboard();
    document.getElementById("input-modificar-vida").value = "";
}

function agregarAlInventario() {
    const item = document.getElementById("input-item-nombre").value;
    if (item) { personajeActual.inventario.push(item); document.getElementById("input-item-nombre").value = ""; renderInv(); }
}
function renderInv() {
    document.getElementById("lista-inventario-libre").innerHTML = personajeActual.inventario.map((it, i) => `<div class="inv-item"><span>${it}</span><button onclick="personajeActual.inventario.splice(${i},1);renderInv()">X</button></div>`).join("");
}
function cambiarTab(tab) {
    document.querySelectorAll('.tab-content').forEach(t => t.classList.add('hidden'));
    document.querySelectorAll('.tab-v2').forEach(b => b.classList.remove('active'));
    document.getElementById('tab-' + tab).classList.remove('hidden');
    event.currentTarget.classList.add('active');
}
function cargarAvatar(input) {
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = e => document.getElementById('img-avatar').src = e.target.result;
        reader.readAsDataURL(input.files[0]);
    }
}