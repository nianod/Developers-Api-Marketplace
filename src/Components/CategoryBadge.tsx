import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface CategoryBadgeProps {
  name: string;
  icon: string;
  count: number;
  onClick?: () => void;
}

const CategoryBadge = ({ name, icon, count, onClick }: CategoryBadgeProps) => {
  const IconComponent = (Icons[icon as keyof typeof Icons] || Icons.Box) as LucideIcon;

  return (
    <motion.button
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="w-full"
    >
      <div className="card-shadow flex items-center gap-3 rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/50">
        <div className="gradient-primary rounded-lg p-2">
          <IconComponent className="h-5 w-5 text-white" />
        </div>
        <div className="flex-1 text-left">
          <p className="font-semibold">{name}</p>
          <p className="text-xs text-muted-foreground">{count} APIs</p>
        </div>
      </div>
    </motion.button>
  );
};

export default CategoryBadge;
