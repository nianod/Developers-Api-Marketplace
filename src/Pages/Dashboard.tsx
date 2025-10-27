import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, TrendingUp, Users, Activity } from "lucide-react";
import { motion } from "framer-motion";

const Dashboard = () => {
  const myAPIs = [
    { id: "1", name: "My Weather API", category: "Weather", status: "Active", requests: "12.5K" },
    { id: "2", name: "Currency Converter", category: "Finance", status: "Active", requests: "8.2K" },
  ];

  const stats = [
    { label: "Total APIs", value: "2", icon: Activity, color: "text-primary" },
    { label: "Total Requests", value: "20.7K", icon: TrendingUp, color: "text-success" },
    { label: "Active Users", value: "156", icon: Users, color: "text-accent" },
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 flex items-center justify-between"
        >
          <div>
            <h1 className="mb-2 text-4xl font-bold">Developer Dashboard</h1>
            <p className="text-lg text-muted-foreground">Manage your APIs and track analytics</p>
          </div>
          <Button className="gradient-primary">
            <Plus className="mr-2 h-5 w-5" />
            Create API
          </Button>
        </motion.div>

        {/* Stats */}
        <div className="mb-8 grid gap-6 md:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="border-border bg-card">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                      <p className="mt-2 text-3xl font-bold">{stat.value}</p>
                    </div>
                    <div className={`rounded-lg bg-secondary p-3 ${stat.color}`}>
                      <stat.icon className="h-6 w-6" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* My APIs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="mb-6 text-2xl font-bold">My APIs</h2>
          <div className="space-y-4">
            {myAPIs.map((api) => (
              <Card key={api.id} className="border-border bg-card">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle>{api.name}</CardTitle>
                      <CardDescription className="mt-1">{api.category}</CardDescription>
                    </div>
                    <Badge variant="outline" className="text-success border-success">
                      {api.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      <div>
                        <p className="text-sm text-muted-foreground">Requests this month</p>
                        <p className="text-xl font-bold">{api.requests}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        View Analytics
                      </Button>
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
