import { ArrowRight, Users, Award, Briefcase, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function HeroSection() {
  const stats = [
    { icon: Users, label: "Registered Candidates", value: "25,000+", color: "text-trust" },
    { icon: Briefcase, label: "Internship Opportunities", value: "5,000+", color: "text-primary" },
    { icon: Award, label: "Successful Placements", value: "18,500+", color: "text-success" },
    { icon: TrendingUp, label: "Partner Organizations", value: "500+", color: "text-warning" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-hero text-white">
      <div className="absolute inset-0 bg-black/10"></div>
      
      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          {/* Government Badge */}
          <div className="flex justify-center">
            <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2">
              <span className="text-sm font-medium">Government of India Initiative</span>
            </div>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              AI-Powered Smart
              <br />
              <span className="text-accent">Internship Allocation</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Connecting talented youth with perfect internship opportunities through 
              intelligent matching and transparent allocation under the PM Internship Scheme
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-lg">
              Apply for Internship
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Learn More
            </Button>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 card-elevated animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 text-center">
                  <stat.icon className={`h-8 w-8 mx-auto mb-3 ${stat.color}`} />
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}