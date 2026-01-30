'use client';

interface EventFilterProps {
  currentFilter: string;
  onFilterChange: (filter: string) => void;
}

export default function EventFilter({ currentFilter, onFilterChange }: EventFilterProps) {
  const filters = [
    { id: 'all', label: 'Todos' },
    { id: 'running', label: 'Running' },
    { id: 'triatlon', label: 'Triatlón' },
    { id: 'ciclismo', label: 'Ciclismo' },
    { id: 'trail', label: 'Trail' },
  ];

  return (
    <div className="flex flex-wrap items-center gap-4 mb-12">
      <p className="font-semibold">Filtrar por:</p>
      <div className="flex flex-wrap items-center gap-2">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => onFilterChange(filter.id)}
            className={`border rounded-md text-xs font-medium tracking-wider transition-all duration-150 hover:shadow-lg hover:border-primary py-2 px-4 ${
              currentFilter === filter.id
                ? 'bg-primary text-white border-primary'
                : 'border-gray-300'
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>
    </div>
  );
}
