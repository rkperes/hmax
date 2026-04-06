interface SectorCardProps {
  name: string;
  description: string;
  icon?: string;
}

export function SectorCard({
  name,
  description,
  icon = "▹",
}: SectorCardProps) {
  return (
    <div className="p-6 border-l-4 border-transparent hover:border-hydromax-hydro bg-hydromax-dark-900 rounded transition-all duration-200 hover:bg-hydromax-dark-800">
      <div className="text-3xl text-hydromax-hydro mb-3">{icon}</div>
      <h3 className="text-lg font-bold mb-2">{name}</h3>
      <p className="text-sm text-hydromax-max">{description}</p>
    </div>
  );
}
