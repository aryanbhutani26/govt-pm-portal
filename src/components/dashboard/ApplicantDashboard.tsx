import { useState } from "react";
import { User, MapPin, GraduationCap, Briefcase, Star, Calendar, Bell } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";

export function ApplicantDashboard() {
  const [profileCompletion] = useState(75);

  const recommendations = [
    {
      id: 1,
      title: "Software Development Intern",
      company: "Tech Solutions Pvt Ltd",
      location: "Bangalore, Karnataka",
      match: 95,
      duration: "6 months",
      stipend: "₹25,000/month",
      skills: ["React", "JavaScript", "Node.js"],
      deadline: "2024-01-15"
    },
    {
      id: 2,
      title: "Digital Marketing Intern",
      company: "Growth Marketing Inc",
      location: "Mumbai, Maharashtra", 
      match: 88,
      duration: "4 months",
      stipend: "₹20,000/month",
      skills: ["SEO", "Social Media", "Analytics"],
      deadline: "2024-01-20"
    },
    {
      id: 3,
      title: "Data Analyst Intern",
      company: "Data Insights Corp",
      location: "Delhi, NCR",
      match: 82,
      duration: "5 months",
      stipend: "₹22,000/month",
      skills: ["Python", "SQL", "Power BI"],
      deadline: "2024-01-25"
    }
  ];

  const applications = [
    { id: 1, company: "Tech Innovators", position: "UI/UX Design Intern", status: "Under Review", date: "2024-01-10" },
    { id: 2, company: "StartupXYZ", position: "Marketing Intern", status: "Interview Scheduled", date: "2024-01-08" },
    { id: 3, company: "Data Corp", position: "Research Intern", status: "Applied", date: "2024-01-05" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Under Review": return "bg-warning text-warning-foreground";
      case "Interview Scheduled": return "bg-trust text-trust-foreground";
      case "Applied": return "bg-muted text-muted-foreground";
      default: return "bg-secondary text-secondary-foreground";
    }
  };

  const getMatchColor = (match: number) => {
    if (match >= 90) return "text-success";
    if (match >= 80) return "text-trust";
    return "text-warning";
  };

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <Card className="card-government bg-gradient-card">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl">Welcome back, Priya Sharma!</CardTitle>
              <CardDescription>Your profile is {profileCompletion}% complete</CardDescription>
            </div>
            <div className="flex items-center space-x-2">
              <Bell className="h-5 w-5 text-warning" />
              <Badge className="bg-warning text-warning-foreground">3 New Matches</Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Progress value={profileCompletion} className="h-3" />
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm">
                <User className="mr-2 h-4 w-4" />
                Complete Profile
              </Button>
              <Button variant="outline" size="sm">
                <GraduationCap className="mr-2 h-4 w-4" />
                Add Education
              </Button>
              <Button variant="outline" size="sm">
                <Briefcase className="mr-2 h-4 w-4" />
                Add Skills
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Dashboard Tabs */}
      <Tabs defaultValue="recommendations" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
          <TabsTrigger value="applications">My Applications</TabsTrigger>
          <TabsTrigger value="profile">Profile</TabsTrigger>
        </TabsList>

        {/* Recommendations Tab */}
        <TabsContent value="recommendations" className="space-y-6">
          <div className="grid gap-6">
            {recommendations.map((internship) => (
              <Card key={internship.id} className="card-government interactive-hover">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl">{internship.title}</CardTitle>
                      <CardDescription className="text-base">{internship.company}</CardDescription>
                    </div>
                    <div className="text-right">
                      <div className={`text-2xl font-bold ${getMatchColor(internship.match)}`}>
                        {internship.match}%
                      </div>
                      <div className="text-sm text-muted-foreground">Match</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="mr-2 h-4 w-4" />
                        {internship.location}
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="mr-2 h-4 w-4" />
                        Duration: {internship.duration}
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Star className="mr-2 h-4 w-4" />
                        Stipend: {internship.stipend}
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <div className="text-sm font-medium mb-2">Required Skills:</div>
                        <div className="flex flex-wrap gap-2">
                          {internship.skills.map((skill, idx) => (
                            <Badge key={idx} variant="secondary">{skill}</Badge>
                          ))}
                        </div>
                      </div>
                      <div className="text-sm text-destructive">
                        Deadline: {internship.deadline}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3 mt-6">
                    <Button className="flex-1">
                      Apply Now
                    </Button>
                    <Button variant="outline">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Applications Tab */}
        <TabsContent value="applications" className="space-y-6">
          <Card className="card-government">
            <CardHeader>
              <CardTitle>My Applications</CardTitle>
              <CardDescription>Track the status of your internship applications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {applications.map((app) => (
                  <div key={app.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-secondary/50 transition-colors">
                    <div>
                      <div className="font-medium">{app.position}</div>
                      <div className="text-sm text-muted-foreground">{app.company}</div>
                      <div className="text-xs text-muted-foreground">Applied: {app.date}</div>
                    </div>
                    <Badge className={`badge-status ${getStatusColor(app.status)}`}>
                      {app.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Profile Tab */}
        <TabsContent value="profile" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="card-government">
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>Update your basic details</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Full Name</label>
                    <p className="text-muted-foreground">Priya Sharma</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Email</label>
                    <p className="text-muted-foreground">priya.sharma@email.com</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Location</label>
                    <p className="text-muted-foreground">Mumbai, Maharashtra</p>
                  </div>
                  <Button variant="outline" size="sm">Edit Profile</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="card-government">
              <CardHeader>
                <CardTitle>Education & Skills</CardTitle>
                <CardDescription>Showcase your qualifications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium">Education</label>
                    <p className="text-muted-foreground">B.Tech Computer Science - IIT Mumbai</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Skills</label>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {["React", "JavaScript", "Python", "UI/UX"].map((skill, idx) => (
                        <Badge key={idx} variant="secondary">{skill}</Badge>
                      ))}
                    </div>
                  </div>
                  <Button variant="outline" size="sm">Add More</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}