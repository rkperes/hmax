interface FeatureBulletProps {
  text: string;
  icon?: string; // unicode character or emoji
}

export function FeatureBullet({ text, icon = "✓" }: FeatureBulletProps) {
  return (
    <div className="flex items-start gap-3">
      <span className="text-hydromax-hydro font-bold text-lg flex-shrink-0 mt-1">
        {icon}
      </span>
      <span className="text-hydromax-max">{text}</span>
    </div>
  );
}
