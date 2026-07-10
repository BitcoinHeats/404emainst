import {
  Landmark,
  House,
  MapPin,
  TrendingUp,
  Car,
  Route,
  Users,
  Heart,
  type LucideIcon,
} from 'lucide-react';

const ICONS: Record<string, LucideIcon> = {
  landmark: Landmark,
  home: House,
  pin: MapPin,
  chart: TrendingUp,
  car: Car,
  route: Route,
  trending: TrendingUp,
  users: Users,
  heart: Heart,
};

export function FeatureIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = ICONS[name] ?? Landmark;
  return <Icon className={className} aria-hidden="true" />;
}
