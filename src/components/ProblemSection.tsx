import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { AlertTriangle, DollarSign, Clock, Earth } from "lucide-react";

export const ProblemSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    {
      icon: DollarSign,
      value: "$2T+",
      label: "Sleeping Capital",
      description: "Unclaimed across global registries"
    },
    {
      icon: Clock,
      value: "25M+",
      label: "Forgotten Accounts",
      description: "In banks, crypto wallets, 401k plans"
    },
    {
      icon: AlertTriangle,
      value: "89%",
      label: "Never Searched",
      description: "People unaware of their dormant wealth"
    },
    {
      icon: Earth,
      value: "0%",
      label: "Planetary Impact",
      description: "Current wealth recovery helps Earth"
    }
  ];

  return (
    <section ref={ref} className="py-24 bg-gradient-mystic">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <h2 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            <span className="text-foreground">The </span>
            <span className="bg-gradient-gold bg-clip-text text-transparent">
              Forgotten
            </span>
            <span className="text-foreground"> Crisis</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Across the globe, trillions in wealth lay dormant—forgotten bank accounts, 
            abandoned crypto wallets, unclaimed inheritances. While the Earth cries out 
            for healing, this sleeping capital remains trapped in bureaucratic vaults.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: "easeInOut"
                }}
              >
                <motion.div
                  className="w-20 h-20 mx-auto mb-6 bg-card border border-primary/20 rounded-full flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon className="w-8 h-8 text-primary" />
                </motion.div>
                <motion.h3
                  className="text-4xl md:text-5xl font-serif font-bold text-primary mb-2"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                >
                  {stat.value}
                </motion.h3>
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  {stat.label}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {stat.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Problem Narrative */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-primary/10">
            <blockquote className="text-2xl md:text-3xl font-serif text-center leading-relaxed text-foreground">
              "While forests burn and oceans rise, 
              <span className="text-primary font-bold"> $2 trillion sleeps</span> 
              in forgotten vaults—waiting to be 
              <span className="bg-gradient-gold bg-clip-text text-transparent font-bold"> awakened</span> 
              for planetary healing."
            </blockquote>
            <div className="flex justify-center mt-8">
              <motion.div
                className="w-16 h-1 bg-gradient-gold rounded-full"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 1, delay: 1.2 }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};