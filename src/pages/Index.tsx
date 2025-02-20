
import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import SearchBar from "@/components/SearchBar";
import AgentCard from "@/components/AgentCard";

const demoAgents = [
  {
    name: "LeadGenius",
    description: "AI-powered lead generation and qualification system",
    category: "Sales",
    price: "$99/month",
    image: "/placeholder.svg"
  },
  {
    name: "AnalyticsAI",
    description: "Advanced business analytics and forecasting",
    category: "Analytics",
    price: "$149/month",
    image: "/placeholder.svg"
  },
  {
    name: "SupportBot Pro",
    description: "24/7 customer support automation",
    category: "Support",
    price: "$79/month",
    image: "/placeholder.svg"
  },
  {
    name: "ProjectMind",
    description: "AI project management and resource optimization",
    category: "Management",
    price: "$199/month",
    image: "/placeholder.svg"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      
      <main className="container mx-auto px-4 py-16">
        <div className="mb-16">
          <SearchBar />
        </div>

        <section>
          <h2 className="text-3xl font-bold text-center mb-12">Featured AI Agents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {demoAgents.map((agent, index) => (
              <AgentCard key={index} {...agent} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
