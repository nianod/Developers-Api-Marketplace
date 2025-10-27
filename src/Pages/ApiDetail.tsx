import { useParams, Link} from 'react-router-dom'
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getAPIDetails } from '../Data/Mockdata';
import { Star, TrendingUp, Check, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const ApiDetail = () => {
  const { id } = useParams<{ id: string }>();
  const api = id ? getAPIDetails(id) : null;

  if (!api) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold">API Not Found</h1>
          <Link to="/explore">
            <Button>Back to Explore</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
     
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-6"
        >
          <Link to="/explore">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Explore
            </Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="flex-1">
              <h1 className="mb-2 text-4xl font-bold">{api.name}</h1>
              <p className="mb-4 text-xl text-muted-foreground">{api.description}</p>
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 fill-warning text-warning" />
                  <span className="font-semibold">{api.rating}</span>
                  <span className="text-muted-foreground">({api.reviews} reviews)</span>
                </div>
                <div className="flex items-center gap-1">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  <span>{api.popularity}% popularity</span>
                </div>
                <Badge variant="outline">{api.category}</Badge>
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
            </div>
            <div className="flex gap-3">
              <Button size="lg" className="gradient-primary">
                Subscribe
              </Button>
              <Button size="lg" variant="outline">
                Try Playground
              </Button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="bg-secondary">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="endpoints">Endpoints</TabsTrigger>
              <TabsTrigger value="pricing">Pricing</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle>About this API</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{api.longDescription}</p>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardHeader>
                  <CardTitle>Quick Stats</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Endpoints</p>
                      <p className="text-2xl font-bold">{api.endpoints}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Provider</p>
                      <p className="text-2xl font-bold">{api.provider}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Rating</p>
                      <p className="text-2xl font-bold">{api.rating}/5</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Reviews</p>
                      <p className="text-2xl font-bold">{api.reviews}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="endpoints" className="space-y-4">
              {api.apiEndpoints.map((endpoint, index) => (
                <Card key={index} className="border-border bg-card">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Badge variant="outline" className="font-mono">
                        {endpoint.method}
                      </Badge>
                      <code className="text-sm">{endpoint.endpoint}</code>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{endpoint.description}</p>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="pricing" className="space-y-6">
              <div className="grid gap-6 md:grid-cols-3">
                {api.pricingTiers.map((tier, index) => (
                  <Card
                    key={index}
                    className={`border-border bg-card ${
                      index === 1 ? "border-primary shadow-lg" : ""
                    }`}
                  >
                    <CardHeader>
                      <CardTitle>{tier.name}</CardTitle>
                      <div className="mt-4">
                        <span className="text-4xl font-bold">{tier.price}</span>
                      </div>
                      <CardDescription>{tier.requests}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {tier.features.map((feature, fIndex) => (
                          <li key={fIndex} className="flex items-center gap-2">
                            <Check className="h-5 w-5 text-success" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button className="mt-6 w-full" variant={index === 1 ? "default" : "outline"}>
                        Choose Plan
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="reviews" className="space-y-4">
              {api.userReviews.map((review) => (
                <Card key={review.id} className="border-border bg-card">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{review.user}</CardTitle>
                        <CardDescription>{review.date}</CardDescription>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-warning text-warning" />
                        <span className="font-semibold">{review.rating}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{review.comment}</p>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
};

export default ApiDetail;
