
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-secondary/20">
      <div className="container px-4 mx-auto text-center z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold tracking-tight text-primary mb-6"
        >
          AI Agency Hub
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
        >
          The premier marketplace for AI agents that transform your business operations
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg transition-all hover:bg-primary/90">
            Explore Agents
          </button>
          <button className="px-8 py-3 bg-secondary text-secondary-foreground rounded-lg transition-all hover:bg-secondary/90">
            Learn More
          </button>
        </motion.div>
      </div>
      <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px] [mask-image:radial-gradient(white,transparent_70%)]" />
    </section>
  );
};

export default HeroSection;
