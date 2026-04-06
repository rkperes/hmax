interface ProductCardProps {
  category: string;
  name: string;
  capacityRange: string;
  description: string;
  specs: string[];
  href?: string;
}

export function ProductCard({
  category,
  name,
  capacityRange,
  description,
  specs,
  href = "#",
}: ProductCardProps) {
  return (
    <div className="flex flex-col h-full bg-hydromax-dark-900 border border-hydromax-dark-700 rounded-lg p-6 hover:border-hydromax-hydro transition-colors duration-200">
      {/* Category Badge */}
      <div className="mb-4">
        <span className="inline-block px-3 py-1 bg-hydromax-hydro bg-opacity-20 text-hydromax-hydro text-xs font-semibold rounded uppercase tracking-wide">
          {category}
        </span>
      </div>

      {/* Product Name */}
      <h3 className="text-2xl font-bold mb-2">{name}</h3>

      {/* Capacity */}
      <p className="text-hydromax-hydro font-semibold text-lg mb-3">
        {capacityRange}
      </p>

      {/* Description */}
      <p className="text-hydromax-max text-sm mb-4 flex-grow">{description}</p>

      {/* Specs */}
      <ul className="space-y-2 mb-6 text-sm text-hydromax-max">
        {specs.map((spec, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <span className="text-hydromax-hydro flex-shrink-0">•</span>
            <span>{spec}</span>
          </li>
        ))}
      </ul>

      {/* Link */}
      <a
        href={href}
        className="text-hydromax-hydro font-semibold text-sm hover:opacity-80 transition-opacity"
      >
        Ver detalhes →
      </a>
    </div>
  );
}
