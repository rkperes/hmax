interface StatItemProps {
  value: string;
  label: string;
  divider?: boolean;
}

export function StatItem({ value, label, divider = true }: StatItemProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex flex-col">
        <span className="text-3xl font-bold text-hydromax-hydro">{value}</span>
        <span className="text-sm text-hydromax-max mt-1">{label}</span>
      </div>
      {divider && (
        <div className="hidden sm:block h-12 w-px bg-hydromax-dark-700" />
      )}
    </div>
  );
}
