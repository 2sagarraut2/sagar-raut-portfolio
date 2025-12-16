
import {
  Sparkles,
  Zap,
  Target,
  Users,
  MonitorSmartphone,
  Server,
  Database,
  Cloudy,
  Braces,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

export const ICONS = {
  Sparkles,
  Zap,
  Target,
  Users,
  MonitorSmartphone,
  Server,
  Database,
  Cloudy,
  Braces,
} satisfies Record<string, LucideIcon>;

export type IconName = keyof typeof ICONS;
