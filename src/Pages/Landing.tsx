import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SearchBar from "@/components/SearchBar";
import CategoryBadge from "@/components/CategoryBadge";
import ApiCard from "@/components/ApiCard";
import { categories, mockAPIs } from "@/data/mockData";
import { ArrowRight, Code, Zap, Shield, Quote } from "lucide-react";
import { motion } from "framer-motion";

const Landing = () => {
  const featuredAPIs = mockAPIs.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container relative mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl text-center"
          >
            <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl">
              Discover & Integrate
              <span className="text-gradient"> Powerful APIs</span>
            </h1>
            <p className="mb-8 text-xl text-muted-foreground">
              Access thousands of APIs for AI, finance, weather, and more.
              Build faster with the tools developers trust.
            </p>
            <div className="mx-auto mb-8 max-w-2xl">
              <SearchBar placeholder="Search for APIs (e.g., AI, payment, weather)..." />
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link to="/explore">
                <Button size="lg" className="gradient-primary group">
                  Explore APIs
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/signup">
                <Button size="lg" variant="outline">
                  Start Building
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold">Browse by Category</h2>
            <p className="text-lg text-muted-foreground">
              Find the perfect API for your project
            </p>
          </motion.div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <CategoryBadge {...category} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured APIs */}
      <section className="bg-secondary/30 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold">Featured APIs</h2>
            <p className="text-lg text-muted-foreground">
              Most popular APIs used by developers worldwide
            </p>
          </motion.div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredAPIs.map((api, index) => (
              <ApiCard key={api.id} api={api} index={index} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/explore">
              <Button variant="outline" size="lg">
                View All APIs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold">Why Choose APIHub?</h2>
          </motion.div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                icon: Code,
                title: "Easy Integration",
                description:
                  "Clear documentation and SDKs for all major languages. Get started in minutes.",
              },
              {
                icon: Zap,
                title: "Lightning Fast",
                description:
                  "Built for performance with global CDN and 99.9% uptime guarantee.",
              },
              {
                icon: Shield,
                title: "Secure & Reliable",
                description:
                  "Enterprise-grade security with OAuth, API keys, and rate limiting.",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-shadow rounded-xl border border-border bg-card p-8 text-center"
              >
                <div className="mx-auto mb-4 inline-block gradient-primary rounded-lg p-3">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="mb-3 text-xl font-bold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-secondary/30 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold">Loved by Developers</h2>
          </motion.div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Alex Thompson",
                role: "Full Stack Developer",
                comment:
                  "APIHub made it incredibly easy to find and integrate the APIs I needed. Saved me weeks of development time!",
              },
              {
                name: "Maria Garcia",
                role: "Product Manager",
                comment:
                  "The marketplace is well-organized and the documentation is excellent. Our team can prototype faster than ever.",
              },
              {
                name: "David Kim",
                role: "Startup Founder",
                comment:
                  "From payment processing to AI models, everything we need is here. The pricing is transparent and fair.",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-shadow rounded-xl border border-border bg-card p-6"
              >
                <Quote className="mb-4 h-8 w-8 text-primary" />
                <p className="mb-4 text-muted-foreground">{testimonial.comment}</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="gradient-primary glow-primary mx-auto max-w-4xl rounded-2xl p-12 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold text-white">
              Ready to Build Something Amazing?
            </h2>
            <p className="mb-8 text-xl text-white/90">
              Join thousands of developers building with APIHub
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link to="/signup">
                <Button size="lg" variant="secondary">
                  Get Started Free
                </Button>
              </Link>
              <Link to="/explore">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Browse APIs
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
