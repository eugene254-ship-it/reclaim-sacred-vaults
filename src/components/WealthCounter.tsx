import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { TrendingUp, Users, DollarSign, Globe } from "lucide-react";

export const WealthCounter = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [counters, setCounters] = useState({
    totalReclaimed: 0,
    activeUsers: 0,
    projectsFunded: 0,
    countriesActive: 0
  });

  const targetValues = {
    totalReclaimed: 847532000, // $847.5M
    activeUsers: 12847,
    projectsFunded: 234,
    countriesActive: 28
  };

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000; // 2 seconds
    const intervals = 60; // Update 60 times
    const stepTime = duration / intervals;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / intervals;
      
      setCounters({
        totalReclaimed: Math.floor(targetValues.totalReclaimed * progress),
        activeUsers: Math.floor(targetValues.activeUsers * progress),
        projectsFunded: Math.floor(targetValues.projectsFunded * progress),
        countriesActive: Math.floor(targetValues.countriesActive * progress)
      });

      if (currentStep >= intervals) {
        clearInterval(timer);
        setCounters(targetValues);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView]);

  const formatCurrency = (value: number) => {
    if (value >= 1000000000) {
      return `$${(value / 1000000000).toFixed(1)}B`;
    } else if (value >= 1000000) {
      return `$${(value / 1000000).toFixed(1)}M`;
    } else if (value >= 1000) {
      return `$${(value / 1000).toFixed(1)}K`;
    }
    return `$${value}`;
  };

  const stats = [
    {
      icon: DollarSign,
      label: "Total Reclaimed",
      value: formatCurrency(counters.totalReclaimed),
      description: "And counting every second...",
      color: "text-primary"
    },
    {
      icon: Users,
      label: "Active Custodians",
      value: counters.activeUsers.toLocaleString(),
      description: "Guardians awakening wealth",
      color: "text-blue-400"
    },
    {
      icon: Globe,
      label: "Projects Funded",
      value: counters.projectsFunded.toLocaleString(),
      description: "Regenerative initiatives launched",
      color: "text-green-400"
    },
    {
      icon: TrendingUp,
      label: "Countries Active",
      value: counters.countriesActive.toLocaleString(),
      description: "Global movement spreading",
      color: "text-purple-400"
    }
  ];

  return (
    <section ref={ref} className="py-24 bg-gradient-cosmic relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary-glow rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            <span className="text-foreground">Live </span>
            <span className="bg-gradient-gold bg-clip-text text-transparent">
              Reclamation
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Watch wealth awaken in real-time as custodians across the globe 
            discover forgotten fortunes and direct them toward planetary healing.
          </p>
        </motion.div>

        {/* Counter Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                className="text-center group"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ 
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeInOut"
                }}
              >
                <motion.div
                  className="relative mb-6"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Glowing Background */}
                  <motion.div
                    className="absolute inset-0 bg-card rounded-2xl border border-primary/20"
                    whileHover={{ 
                      boxShadow: "0 0 30px hsl(45 100% 70% / 0.2)",
                      borderColor: "hsl(45 100% 70% / 0.4)"
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <div className="relative p-8">
                    {/* Icon */}
                    <motion.div
                      className="w-16 h-16 mx-auto mb-4 bg-gradient-mystic rounded-full flex items-center justify-center"
                      initial={{ rotate: 0 }}
                      animate={isInView ? { rotate: 360 } : {}}
                      transition={{ 
                        duration: 1.5,
                        delay: index * 0.1 + 0.5,
                        ease: "easeInOut"
                      }}
                    >
                      <Icon className={`w-8 h-8 ${stat.color}`} />
                    </motion.div>

                    {/* Value */}
                    <motion.h3
                      className={`text-4xl md:text-5xl font-serif font-bold mb-2 ${stat.color}`}
                    >
                      {stat.value}
                    </motion.h3>

                    {/* Label */}
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      {stat.label}
                    </h4>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground">
                      {stat.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Live Status Indicator */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="inline-flex items-center space-x-3 bg-card/50 backdrop-blur-sm rounded-full px-6 py-3 border border-primary/20">
            <motion.div
              className="w-3 h-3 bg-green-400 rounded-full"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [1, 0.7, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <span className="text-foreground font-medium">
              Live Updates • Refreshed Every 30 Seconds
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};