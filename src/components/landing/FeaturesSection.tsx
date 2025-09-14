import { Bot, Shield, Target, BarChart3, Users, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function FeaturesSection() {
  const features = [
    {
      icon: Bot,
      title: "AI-Powered Matching",
      description: "Advanced algorithms match candidates with suitable internships based on skills, location, and preferences.",
      color: "text-primary"
    },
    {
      icon: Shield,
      title: "Transparent Allocation",
      description: "Fair and transparent selection process with real-time tracking and status updates.",
      color: "text-trust"
    },
    {
      icon: Target,
      title: "Smart Recommendations",
      description: "Personalized internship recommendations based on profile analysis and career goals.",
      color: "text-success"
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Comprehensive analytics for administrators to monitor placements and track success metrics.",
      color: "text-warning"
    },
    {
      icon: Users,
      title: "Diversity Focus",
      description: "Built-in affirmative action tracking to ensure inclusive opportunities for all backgrounds.",
      color: "text-accent"
    },
    {
      icon: Clock,
      title: "Real-time Updates",
      description: "Instant notifications and updates on application status, interviews, and placements.",
      color: "text-primary"
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Revolutionizing Internship Allocation
          </h2>
          <p className="text-lg text-muted-foreground">
            Our AI-based smart allocation engine ensures fair, efficient, and optimal matching 
            between candidates and internship opportunities across various sectors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="card-government interactive-hover animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4`}>
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}