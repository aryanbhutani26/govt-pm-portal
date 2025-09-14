import { useState } from "react";
import { BarChart3, Users, Briefcase, TrendingUp, Plus, Filter, Download } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";

export function AdminDashboard() {
  const [selectedPeriod, setSelectedPeriod] = useState("this-month");

  const stats = [
    {
      title: "Total Applications",
      value: "2,847",
      change: "+12.5%",
      changeType: "positive",
      icon: Users
    },
    {
      title: "Active Internships",
      value: "156",
      change: "+8.2%",
      changeType: "positive", 
      icon: Briefcase
    },
    {
      title: "Successful Matches",
      value: "1,234",
      change: "+15.3%",
      changeType: "positive",
      icon: TrendingUp
    },
    {
      title: "Completion Rate",
      value: "87.3%",
      change: "+2.1%",
      changeType: "positive",
      icon: BarChart3
    }
  ];

  const recentMatches = [
    { id: 1, candidate: "Rahul Kumar", position: "Software Developer", company: "Tech Corp", match: 94, status: "Accepted" },
    { id: 2, candidate: "Priya Patel", position: "Marketing Analyst", company: "Growth Inc", match: 89, status: "Pending" },
    { id: 3, candidate: "Amit Singh", position: "Data Scientist", company: "AI Solutions", match: 92, status: "Interview" },
    { id: 4, candidate: "Sneha Reddy", position: "UI/UX Designer", company: "Design Studio", match: 88, status: "Accepted" },
    { id: 5, candidate: "Karan Sharma", position: "Business Analyst", company: "Consulting Firm", match: 91, status: "Pending" }
  ];

  const internshipSlots = [
    { id: 1, company: "TechCorp India", position: "Full Stack Developer", slots: 25, filled: 18, location: "Bangalore" },
    { id: 2, company: "Marketing Plus", position: "Digital Marketing", slots: 15, filled: 12, location: "Mumbai" },
    { id: 3, company: "Data Insights", position: "Data Analyst", slots: 20, filled: 8, location: "Delhi" },
    { id: 4, company: "Design Hub", position: "UI/UX Designer", slots: 10, filled: 7, location: "Pune" }
  ];

  const diversityMetrics = [
    { category: "Gender Distribution", male: 58, female: 42 },
    { category: "Category-wise", general: 45, obc: 27, sc: 16, st: 12 },
    { category: "Regional Distribution", north: 35, south: 28, west: 22, east: 15 }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Accepted": return "bg-success text-success-foreground";
      case "Pending": return "bg-warning text-warning-foreground";
      case "Interview": return "bg-trust text-trust-foreground";
      default: return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-muted-foreground">Monitor and manage the PM Internship Scheme allocation</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Filters
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Internship
          </Button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="card-government">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className={`text-sm ${stat.changeType === 'positive' ? 'text-success' : 'text-destructive'}`}>
                    {stat.change} from last month
                  </p>
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Dashboard Tabs */}
      <Tabs defaultValue="matches" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="matches">Recent Matches</TabsTrigger>
          <TabsTrigger value="slots">Slot Management</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="diversity">Diversity Tracking</TabsTrigger>
        </TabsList>

        {/* Recent Matches */}
        <TabsContent value="matches" className="space-y-6">
          <Card className="card-government">
            <CardHeader>
              <CardTitle>Recent AI Matches</CardTitle>
              <CardDescription>Latest candidate-internship matches generated by the AI engine</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentMatches.map((match) => (
                  <div key={match.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-secondary/50 transition-colors">
                    <div className="flex-1">
                      <div className="font-medium">{match.candidate}</div>
                      <div className="text-sm text-muted-foreground">{match.position} at {match.company}</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-center">
                        <div className="text-lg font-bold text-primary">{match.match}%</div>
                        <div className="text-xs text-muted-foreground">Match</div>
                      </div>
                      <Badge className={`badge-status ${getStatusColor(match.status)}`}>
                        {match.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Slot Management */}
        <TabsContent value="slots" className="space-y-6">
          <Card className="card-government">
            <CardHeader>
              <CardTitle>Internship Slot Management</CardTitle>
              <CardDescription>Monitor and manage available internship positions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {internshipSlots.map((slot) => (
                  <div key={slot.id} className="p-4 border border-border rounded-lg space-y-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium">{slot.position}</h4>
                        <p className="text-sm text-muted-foreground">{slot.company} • {slot.location}</p>
                      </div>
                      <Badge variant="outline">{slot.filled}/{slot.slots} filled</Badge>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Allocation Progress</span>
                        <span>{Math.round((slot.filled / slot.slots) * 100)}%</span>
                      </div>
                      <Progress value={(slot.filled / slot.slots) * 100} className="h-2" />
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">View Details</Button>
                      <Button variant="outline" size="sm">Manage Candidates</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Analytics */}
        <TabsContent value="analytics" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="card-government">
              <CardHeader>
                <CardTitle>Application Trends</CardTitle>
                <CardDescription>Monthly application and placement statistics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center text-muted-foreground">
                  <BarChart3 className="h-16 w-16 mb-4" />
                  <div className="text-center">
                    <p>Analytics Chart Placeholder</p>
                    <p className="text-sm">Integration with charting library</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-government">
              <CardHeader>
                <CardTitle>Success Metrics</CardTitle>
                <CardDescription>Key performance indicators for the program</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Match Accuracy</span>
                    <span className="font-semibold">94.2%</span>
                  </div>
                  <Progress value={94.2} className="h-2" />
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Completion Rate</span>
                    <span className="font-semibold">87.3%</span>
                  </div>
                  <Progress value={87.3} className="h-2" />
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Satisfaction Score</span>
                    <span className="font-semibold">4.6/5</span>
                  </div>
                  <Progress value={92} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Diversity Tracking */}
        <TabsContent value="diversity" className="space-y-6">
          <Card className="card-government">
            <CardHeader>
              <CardTitle>Affirmative Action Tracking</CardTitle>
              <CardDescription>Monitor diversity and inclusion metrics across the program</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                {diversityMetrics.map((metric, index) => (
                  <div key={index} className="space-y-4">
                    <h4 className="font-medium">{metric.category}</h4>
                    <div className="space-y-3">
                      {metric.category === "Gender Distribution" && (
                        <>
                          <div className="flex justify-between items-center">
                            <span className="text-sm">Male</span>
                            <span className="font-semibold">{metric.male}%</span>
                          </div>
                          <Progress value={metric.male} className="h-2" />
                          <div className="flex justify-between items-center">
                            <span className="text-sm">Female</span>
                            <span className="font-semibold">{metric.female}%</span>
                          </div>
                          <Progress value={metric.female} className="h-2" />
                        </>
                      )}
                      {metric.category === "Category-wise" && (
                        <>
                          {Object.entries(metric).filter(([key]) => key !== 'category').map(([key, value]) => (
                            <div key={key} className="space-y-1">
                              <div className="flex justify-between items-center">
                                <span className="text-sm capitalize">{key.toUpperCase()}</span>
                                <span className="font-semibold">{value}%</span>
                              </div>
                              <Progress value={value as number} className="h-2" />
                            </div>
                          ))}
                        </>
                      )}
                      {metric.category === "Regional Distribution" && (
                        <>
                          {Object.entries(metric).filter(([key]) => key !== 'category').map(([key, value]) => (
                            <div key={key} className="space-y-1">
                              <div className="flex justify-between items-center">
                                <span className="text-sm capitalize">{key}</span>
                                <span className="font-semibold">{value}%</span>
                              </div>
                              <Progress value={value as number} className="h-2" />
                            </div>
                          ))}
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}