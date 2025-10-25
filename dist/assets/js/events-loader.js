// Script para cargar y renderizar eventos dinámicamente
let eventsData = [];
let currentFilter = 'all';

// Cargar eventos desde JSON (comentar si usas datos embebidos en el HTML)
async function loadEventsFromJSON() {
    try {
        const response = await fetch('/assets/js/events-data.json');
        const data = await response.json();
        eventsData = data.events;
        renderEvents();
    } catch (error) {
        console.error('Error cargando eventos:', error);
    }
}

// Función para renderizar eventos
function renderEvents(filter = 'all') {
    const container = document.getElementById('events-container');
    const noEventsMsg = document.getElementById('no-events');
    
    if (!container) return;
    
    // Filtrar eventos
    const filteredEvents = filter === 'all' 
        ? eventsData 
        : eventsData.filter(event => event.category === filter);

    // Limpiar contenedor
    container.innerHTML = '';

    // Mostrar/ocultar mensaje de "no hay eventos"
    if (filteredEvents.length === 0) {
        if (noEventsMsg) noEventsMsg.classList.remove('hidden');
        return;
    } else {
        if (noEventsMsg) noEventsMsg.classList.add('hidden');
    }

    // Renderizar eventos
    filteredEvents.forEach(event => {
        const eventCard = createEventCard(event);
        container.appendChild(eventCard);
    });
}

// Función para crear tarjeta de evento
function createEventCard(event) {
    const card = document.createElement('div');
    card.className = 'group bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl hover:border-gray-300 transition-all duration-300';
    card.setAttribute('data-aos', 'fade-up');

    const categoryColors = {
        running: 'bg-blue-500/10 text-blue-600',
        triatlon: 'bg-purple-500/10 text-purple-600',
        ciclismo: 'bg-green-500/10 text-green-600',
        trail: 'bg-orange-500/10 text-orange-600'
    };

    const categoryNames = {
        running: 'Running',
        triatlon: 'Triatlón',
        ciclismo: 'Ciclismo',
        trail: 'Trail Running'
    };

    const formatDate = (dateStr) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateStr).toLocaleDateString('es-ES', options);
    };

    const targetAttr = event.linkType === 'external' ? 'target="_blank" rel="noopener noreferrer"' : '';
    const externalIcon = event.linkType === 'external' ? '<i class="fas fa-external-link-alt ml-1 text-xs"></i>' : '';

    card.innerHTML = `
        <div class="relative h-48 overflow-hidden">
            <img src="${event.image}" alt="${event.title}" 
                 class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                 onerror="this.src='/assets/images/hero/hero-1.jpg'">
            <div class="absolute top-4 left-4">
                <span class="${categoryColors[event.category]} font-semibold rounded-full text-xs py-1.5 px-3">
                    ${categoryNames[event.category]}
                </span>
            </div>
        </div>
        <div class="p-6">
            <h3 class="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                ${event.title}
            </h3>
            <div class="space-y-2 mb-4">
                <div class="flex items-center text-sm text-gray-600">
                    <i class="fas fa-calendar-alt w-5 text-primary"></i>
                    <span>${formatDate(event.date)}</span>
                </div>
                <div class="flex items-center text-sm text-gray-600">
                    <i class="fas fa-map-marker-alt w-5 text-primary"></i>
                    <span>${event.location}</span>
                </div>
                <div class="flex items-center text-sm text-gray-600">
                    <i class="fas fa-users w-5 text-primary"></i>
                    <span>${event.participants.toLocaleString('es-ES')} participantes</span>
                </div>
            </div>
            <a href="${event.link}" ${targetAttr}
               class="inline-flex items-center justify-center w-full bg-orange-400 text-white font-medium rounded-lg py-2.5 px-4 hover:bg-orange-500 transition-colors">
                Ver Resultados ${externalIcon}
            </a>
        </div>
    `;

    return card;
}

// Función para filtrar eventos
function filterEvents(category) {
    currentFilter = category;
    
    // Actualizar botones activos
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active', 'bg-primary', 'text-white', 'border-primary');
    });
    event.target.classList.add('active', 'bg-primary', 'text-white', 'border-primary');
    
    // Renderizar eventos filtrados
    renderEvents(category);
}

// Inicializar al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    // Opción 1: Cargar desde JSON externo
    loadEventsFromJSON();
    
    // Opción 2: O usar datos embebidos (comentar loadEventsFromJSON() arriba)
    // eventsData = [...]; // tus datos aquí
    // renderEvents();
});

