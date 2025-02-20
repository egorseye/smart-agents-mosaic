
import { motion } from "framer-motion";

interface AgentCardProps {
  name: string;
  description: string;
  category: string;
  price: string;
  image: string;
}

const AgentCard = ({ name, description, category, price, image }: AgentCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
    >
      <div className="aspect-video relative overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>
      <div className="p-6">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground mb-3">
          {category}
        </span>
        <h3 className="text-xl font-semibold mb-2 text-primary">{name}</h3>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        <div className="flex items-center justify-between">
          <span className="font-medium text-primary">{price}</span>
          <button className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm hover:bg-primary/90 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default AgentCard;
