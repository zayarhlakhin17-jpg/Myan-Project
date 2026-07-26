/**
 * Design: Aurora Scholar — Statistics Section
 * Enhanced with section aurora glow, animated counters, Myanmar-specific labels
 */
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Users, Building, Award, Sparkles } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: 1000,
    suffix: "+",
    label: "Students Guided",
    color: "text-blue-400",
    glow: "bg-blue-500/10",
  },
  {
    icon: Building,
    value: 50,
    suffix: "+",
    label: "Universities Mapped",
    color: "text-cyan-400",
    glow: "bg-cyan-500/10",
  },
  {
    icon: Award,
    value: 100,
    suffix: "+",
    label: "Scholarships Found",
    color: "text-purple-400",
    glow: "bg-purple-500/10",
  },
  {
    icon: Sparkles,
    value: 99,
    suffix: "%",
    label: "AI-Powered",
    color: "text-amber-400",
    glow: "bg-amber-500/10",
  },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [hasStarted, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section id="about" className="relative py-24">
      {/* Section aurora glow */}
      <div className="aurora-glow w-[400px] h-[400px] bg-cyan-500/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ animationDelay: "-7s" }} />

      <div className="container relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`glass-card rounded-2xl p-6 text-center transition-all duration-300 hover:scale-105 group`}
            >
              <div className={`w-12 h-12 mx-auto rounded-xl ${stat.glow} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className={stat.color} size={24} />
              </div>
              <div className="text-3xl lg:text-4xl font-bold font-display text-white mb-1">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
