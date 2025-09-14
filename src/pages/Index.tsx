import { useState } from "react";
import { Header } from "@/components/navigation/Header";
import { HeroSection } from "@/components/landing/HeroSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { ApplicantDashboard } from "@/components/dashboard/ApplicantDashboard";
import { AdminDashboard } from "@/components/dashboard/AdminDashboard";
import { ContactSupport } from "@/components/forms/ContactSupport";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Shield, Settings } from "lucide-react";

type UserRole = 'guest' | 'applicant' | 'admin';
type CurrentView = 'landing' | 'applicant-dashboard' | 'admin-dashboard' | 'support';

const Index = () => {
  const [userRole, setUserRole] = useState<UserRole>('guest');
  const [currentView, setCurrentView] = useState<CurrentView>('landing');
  const [userName] = useState("Priya Sharma");

  const handleRoleLogin = (role: UserRole, view: CurrentView) => {
    setUserRole(role);
    setCurrentView(view);
  };

  const renderMainContent = () => {
    switch (currentView) {
      case 'applicant-dashboard':
        return <ApplicantDashboard />;
      case 'admin-dashboard':
        return <AdminDashboard />;
      case 'support':
        return <ContactSupport />;
      default:
        return (
          <>
            <HeroSection />
            <FeaturesSection />
            
            {/* Role Selection for Demo */}
            <section className="py-20 bg-background">
              <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                    Choose Your Dashboard
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Experience the platform from different perspectives
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                  <Card className="card-government interactive-hover text-center">
                    <CardHeader>
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Users className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle>Applicant Portal</CardTitle>
                      <CardDescription>
                        For students and graduates seeking internship opportunities
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Badge className="mb-4 bg-primary text-primary-foreground">Student View</Badge>
                      <Button 
                        className="w-full" 
                        onClick={() => handleRoleLogin('applicant', 'applicant-dashboard')}
                      >
                        View Applicant Dashboard
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="card-government interactive-hover text-center">
                    <CardHeader>
                      <div className="w-16 h-16 bg-trust/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Shield className="h-8 w-8 text-trust" />
                      </div>
                      <CardTitle>Admin Portal</CardTitle>
                      <CardDescription>
                        For administrators managing the allocation system
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Badge className="mb-4 bg-trust text-trust-foreground">Admin View</Badge>
                      <Button 
                        variant="outline" 
                        className="w-full border-trust text-trust hover:bg-trust hover:text-trust-foreground"
                        onClick={() => handleRoleLogin('admin', 'admin-dashboard')}
                      >
                        View Admin Dashboard
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="card-government interactive-hover text-center">
                    <CardHeader>
                      <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Settings className="h-8 w-8 text-accent" />
                      </div>
                      <CardTitle>Support Center</CardTitle>
                      <CardDescription>
                        Get help and assistance with your application
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Badge className="mb-4 bg-accent text-accent-foreground">Support</Badge>
                      <Button 
                        variant="outline" 
                        className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                        onClick={() => setCurrentView('support')}
                      >
                        Contact Support
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header userRole={userRole} userName={userName} />
      
      {/* Navigation for logged-in users */}
      {userRole !== 'guest' && (
        <div className="bg-secondary/30 border-b border-border">
          <div className="container mx-auto px-4 py-3">
            <div className="flex gap-2">
              <Button 
                variant={currentView === 'landing' ? 'default' : 'ghost'} 
                size="sm"
                onClick={() => setCurrentView('landing')}
              >
                Home
              </Button>
              {userRole === 'applicant' && (
                <Button 
                  variant={currentView === 'applicant-dashboard' ? 'default' : 'ghost'} 
                  size="sm"
                  onClick={() => setCurrentView('applicant-dashboard')}
                >
                  Dashboard
                </Button>
              )}
              {userRole === 'admin' && (
                <Button 
                  variant={currentView === 'admin-dashboard' ? 'default' : 'ghost'} 
                  size="sm"
                  onClick={() => setCurrentView('admin-dashboard')}
                >
                  Admin Panel
                </Button>
              )}
              <Button 
                variant={currentView === 'support' ? 'default' : 'ghost'} 
                size="sm"
                onClick={() => setCurrentView('support')}
              >
                Support
              </Button>
            </div>
          </div>
        </div>
      )}

      <main className={currentView === 'landing' ? '' : 'container mx-auto px-4 py-8'}>
        {renderMainContent()}
      </main>

      {/* Footer for landing page */}
      {currentView === 'landing' && (
        <footer className="bg-secondary/50 border-t border-border py-8">
          <div className="container mx-auto px-4 text-center">
            <p className="text-muted-foreground">
              © 2024 Prime Minister's Internship Scheme | Ministry of Corporate Affairs, Government of India
            </p>
          </div>
        </footer>
      )}
    </div>
  );
};

export default Index;
