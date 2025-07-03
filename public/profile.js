const form = document.getElementById('profileForm');
const message = document.getElementById('message');
const openModalBtn = document.getElementById('openClassModal');
const clearClassBtn = document.getElementById('clearClass');
const classImageSelected = document.getElementById('classImageSelected');
const classModal = document.getElementById('classModal');
const closeModalBtn = document.getElementById('closeClassModal');
const classList = document.getElementById('classList');
const classSearch = document.getElementById('classSearch');
const classesInput = document.getElementById('classes');
const classSelector = document.querySelector('.class-selector');

// Listado de clases simuladas
const classes = [
    { name: 'Furious Blade (FB)', image: 'images/Furious%20Blade%20(FB).png' },
    { name: 'Gembliss (GV)', image: 'images/Gembliss%20(GV).png' },
    { name: 'Genesis (GN)', image: 'images/Genesis%20(GN).png' },
    { name: 'Herrscher (HR)', image: 'images/Herrscher%20(HR).png' },
    { name: 'Immortal (IM)', image: 'images/Immortal%20(IM).png' },
    { name: 'Innocent (IN)', image: 'images/Innocent%20(IN).png' },
    { name: 'Knight Emperor (KE)', image: 'images/Knight%20Emperor%20(KE).png' },
    { name: 'Liberator (LB)', image: 'images/Liberator%20(LB).png' },
    { name: 'Lord Azoth (LA)', image: 'images/Lord%20Azoth%20(LA).png' },
    { name: 'Mad Paradox (MP)', image: 'images/Mad%20Paradox%20(MP).png' },
    { name: 'Metamorphy (MtM)', image: 'images/Metamorphy%20(MtM).png' },
    { name: 'Minerva (MN)', image: 'images/Minerva%20(MN).png' },
    { name: 'Mischief (MC)', image: 'images/Mischief%20(MC).png' },
    { name: 'Morpheus (MO)', image: 'images/Morpheus%20(MO).png' },
    { name: 'Nisha Labyrinth (NL)', image: 'images/Nisha%20Labyrinth%20(NL).png' },
    { name: 'Nova Imperator (NI)', image: 'images/Nova%20Imperator%20(NI).png' },
    { name: 'Nyx Pieta (NP)', image: 'images/Nyx%20Pieta%20(NP).png' },
    { name: 'Opferung (OP)', image: 'images/Opferung%20(OP).png' },
    { name: 'Overmind (OM)', image: 'images/Overmind%20(OM).png' },
    { name: 'Oz Sorcerer (Oz)', image: 'images/Oz%20Sorcerer%20(Oz).png' },
    { name: 'Prime Operator (PO)', image: 'images/Prime%20Operator%20(PO).png' },
    { name: 'Prophetess (PH)', image: 'images/Prophetess%20(PH).png' },
    { name: 'Radiant Soul (RaS)', image: 'images/Radiant%20Soul%20(RaS).png' },
    { name: 'Rage Hearts (RH)', image: 'images/Rage%20Hearts%20(RH).png' },
    { name: 'Revenant (RV)', image: 'images/Revenant%20(RV).png' },
    { name: 'Richter (RI)', image: 'images/Richter%20(RI).png' },
    { name: 'Rune Master (RM)', image: 'images/Rune%20Master%20(RM).png' },
    { name: 'Shakti (SH)', image: 'images/Shakti%20(SH).png' },
    { name: 'Surya (SU)', image: 'images/Surya%20(SU).png' },
    { name: 'Tempest Burster (TB)', image: 'images/Tempest%20Burster%20(TB).png' },
    { name: 'Twilight (TW)', image: 'images/Twilight%20(TW).png' },
    { name: 'Twins Picaro (TP)', image: 'images/Twins%20Picaro%20(TP).png' },
    { name: 'Achlys (AC)', image: 'images/Achlys%20(AC).png' },
    { name: 'Adrestia (AD)', image: 'images/Adrestia%20(AD).png' },
    { name: 'Aether Sage (AeS)', image: 'images/Aether%20Sage%20(AeS).png' },
    { name: 'Anemos (AN)', image: 'images/Anemos%20(AN).png' },
    { name: 'Apsara (ApS)', image: 'images/Apsara%20(ApS).png' },
    { name: 'Avarice (AV)', image: 'images/Avarice%20(AV).png' },
    { name: 'Black Massacre (BlM)', image: 'images/Black%20Massacre%20(BlM).png' },
    { name: 'Bloody Queen (BQ)', image: 'images/Bloody%20Queen%20(BQ).png' },
    { name: 'Bluhen (BL)', image: 'images/Bluhen%20(BL).png' },
    { name: 'Catastrophe (CaT)', image: 'images/Catastrophe%20(CaT).png' },
    { name: 'Celestia (CL)', image: 'images/Celestia%20(CL).png' },
    { name: 'Centurion (CeT)', image: 'images/Centurion%20(CeT).png' },
    { name: 'Code Antithese (CA)', image: 'images/Code%20Antithese%20(CA).png' },
    { name: 'Code Escencia (CE)', image: 'images/Code%20Escencia%20(CE).png' },
    { name: 'Code Sariel (CS)', image: 'images/Code%20Sariel%20(CS).png' },
    { name: 'Code Ultimate (CU)', image: 'images/Code%20Ultimate%20(CU).png' },
    { name: 'Comet Crusader (CC)', image: 'images/Comet%20Crusader%20(CC).png' },
    { name: 'Daybreaker (DAB)', image: 'images/Daybreaker%20(DAB).png' },
    { name: 'Demersio (DEM)', image: 'images/Demersio%20(DEM).png' },
    { name: 'Devi', image: 'images/Devi.png' },
    { name: 'Diangelion (DI)', image: 'images/Diangelion%20(DI).png' },
    { name: 'Dius Aer (DA)', image: 'images/Dius%20Aer%20(DA).png' },
    { name: 'Dominator (Dom)', image: 'images/Dominator%20(Dom).png' },
    { name: 'Doombringer (DB)', image: 'images/Doombringer%20(DB).png' },
    { name: 'Empire Sword (ES)', image: 'images/Empire%20Sword%20(ES).png' },
    { name: 'Eternity Winner (EtW)', image: 'images/Eternity%20Winner%20(EtW).png' },
    { name: 'Fatal Phantom (FP)', image: 'images/Fatal%20Phantom%20(FP).png' },
    { name: 'Flame Lord (FL)', image: 'images/Flame%20Lord%20(FL).png' }
];

// Mostrar modal
openModalBtn.addEventListener('click', () => {
    classModal.style.display = 'block';
    loadClasses('');
});

// Cerrar modal
closeModalBtn.addEventListener('click', () => {
    classModal.style.display = 'none';
});

// Cerrar modal clickeando fuera
window.addEventListener('click', (e) => {
    if (e.target === classModal) {
        classModal.style.display = 'none';
    }
});

// Filtrar clases
classSearch.addEventListener('input', (e) => {
    loadClasses(e.target.value);
});

// Cargar listado de clases en el modal
function loadClasses(filter) {
    classList.innerHTML = '';

    const filteredClasses = classes.filter(c =>
        c.name.toLowerCase().includes(filter.toLowerCase())
    );

    filteredClasses.forEach(c => {
        const div = document.createElement('div');
        div.className = 'class-item';
        div.innerHTML = `<img src="${c.image}" alt="${c.name}"><span>${c.name}</span>`;
        div.addEventListener('click', () => {
            selectClass(c);
        });
        classList.appendChild(div);
    });
}

// Seleccionar clase
function selectClass(c) {
    classesInput.value = c.name;

    // Crear contenedor seleccionado
    const selectedDiv = document.createElement('div');
    selectedDiv.className = 'selected-class';
    selectedDiv.innerHTML = `
        <img src="${c.image}" alt="${c.name}">
        <span>${c.name}</span>
        <button type="button" class="clear-btn">×</button>
    `;

    // Borrar cualquier selección previa
    const prevSelected = document.querySelector('.selected-class');
    if (prevSelected) prevSelected.remove();

    // Agregar al DOM
    classSelector.appendChild(selectedDiv);

    // Cerrar modal y ocultar "+"
    classModal.style.display = 'none';
    openModalBtn.style.display = 'none';

    // Configurar X
    selectedDiv.querySelector('.clear-btn').addEventListener('click', () => {
        selectedDiv.remove();
        classesInput.value = '';
        openModalBtn.style.display = 'inline-block';
    });
}

// Guardar perfil
// Guardar perfil
form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = {
        username: localStorage.getItem('username'),
        nickname: form.nickname.value.trim(),
        classes: classesInput.value.trim(),
    };

    try {
        const response = await fetch('/profile', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });

        const result = await response.json();

        if (response.ok) {
            message.style.color = 'green';
            message.textContent = result.message;
            form.reset();

            // Limpiar selección
            const prevSelected = document.querySelector('.selected-class');
            if (prevSelected) prevSelected.remove();
            classesInput.value = '';
            openModalBtn.style.display = 'inline-block';

            // Redirigir a dashboard
            window.location.href = 'dashboard.html';
        } else {
            message.style.color = 'red';
            message.textContent = result.error || 'Error desconocido';
        }
    } catch (err) {
        message.style.color = 'red';
        message.textContent = 'Error al conectar con el servidor';
    }
});
