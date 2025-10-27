import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import type { API } from "../Data/Mockdata";

interface ApiCardProps {
  api: API;
  index?: number;
}

const ApiCard = ({ api, index = 0 }: ApiCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
    >
      <Link to={`/api/${api.id}`}>
        <Card className="card-shadow h-full border-border bg-card transition-all hover:border-primary/50">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <CardTitle className="text-lg">{api.name}</CardTitle>
                <CardDescription className="mt-1 text-sm">
                  {api.shortDescription}
                </CardDescription>
              </div>
              <Badge
                variant={
                  api.pricing === "Free"
                    ? "secondary"
                    : api.pricing === "Paid"
                    ? "default"
                    : "outline"
                }
              >
                {api.pricing}
              </Badge>
            </div>

          </CardHeader>

          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-warning text-warning" />
                  <span className="font-medium text-foreground">{api.rating}</span>
                  <span>({api.reviews})</span>
                </div>
                
                <div className="flex items-center gap-1">
                  <TrendingUp className="h-4 w-4" />
                  <span>{api.popularity}% popular</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">by {api.provider}</span>
                <Badge variant="outline" className="text-xs">
                  {api.category}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
};

export default ApiCard;