import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Code2, Search, User } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg"
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="gradient-primary rounded-lg p-2">
            <Code2 className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-bold">API<span className="text-gradient">Hub</span></span>
        </Link>

        <div className="flex items-center gap-6">
          <Link
            to="/explore"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive("/explore") ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Explore
          </Link>
          <Link
            to="/dashboard"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive("/dashboard") ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Dashboard
          </Link>
          <Link
            to="/docs"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive("/docs") ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Docs
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <Link to="/login">
            <Button variant="ghost" size="sm">
              Login
            </Button>
          </Link>
          <Link to="/signup">
            <Button size="sm" className="gradient-primary">
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;