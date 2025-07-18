import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Star, Vault, Users, TrendingUp, Eye } from "lucide-react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Reclaim", href: "/reclaim", icon: Star },
    { name: "Vaults", href: "/vaults", icon: Vault },
    { name: "Sanctum", href: "/sanctum", icon: Eye },
    { name: "Custodians", href: "/movement", icon: Users },
    { name: "Partner", href: "/invest", icon: TrendingUp }
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-cosmic/80 backdrop-blur-md border-b border-primary/20"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div
              className="w-10 h-10 border-2 border-primary rounded-full flex items-center justify-center"
              whileHover={{ rotate: 180, scale: 1.1 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <Star className="w-5 h-5 text-primary" />
            </motion.div>
            <span className="text-2xl font-serif font-bold bg-gradient-gold bg-clip-text text-transparent">
              RECLAIM
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <Link
                    to={item.href}
                    className="group flex items-center space-x-2 text-foreground hover:text-primary transition-colors duration-300"
                  >
                    <Icon className="w-4 h-4 group-hover:animate-pulse" />
                    <span className="font-medium">{item.name}</span>
                    <motion.div
                      className="h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                      style={{ width: "100%" }}
                    />
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              asChild
              className="bg-gradient-gold text-primary-foreground hover:scale-105 transition-all duration-300 shadow-gold"
            >
              <Link to="/reclaim">
                Begin Reclaim
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-primary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className={`md:hidden overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}
          initial={false}
          animate={{
            height: isOpen ? "auto" : 0,
            opacity: isOpen ? 1 : 0
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="pt-6 pb-4 space-y-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className="flex items-center space-x-3 text-foreground hover:text-primary transition-colors duration-300 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              );
            })}
            <div className="pt-4">
              <Button
                asChild
                className="w-full bg-gradient-gold text-primary-foreground"
              >
                <Link to="/reclaim" onClick={() => setIsOpen(false)}>
                  Begin Reclaim
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};