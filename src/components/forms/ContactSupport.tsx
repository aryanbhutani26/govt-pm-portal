import { useState } from "react";
import { Send, Phone, Mail, MessageCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

export function ContactSupport() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Support request submitted:", formData);
  };

  const supportChannels = [
    {
      icon: Phone,
      title: "Phone Support",
      description: "Toll-free helpline available 9 AM to 6 PM",
      contact: "1800-123-4567",
      availability: "Mon-Fri, 9 AM - 6 PM"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Get detailed assistance via email",
      contact: "support@pminternship.gov.in",
      availability: "24/7 Response"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Instant help through our chat system",
      contact: "Chat Now",
      availability: "Mon-Fri, 10 AM - 5 PM"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Contact Support</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Need help with your internship application or have questions about the PM Internship Scheme? 
          Our support team is here to assist you.
        </p>
      </div>

      {/* Support Channels */}
      <div className="grid md:grid-cols-3 gap-6">
        {supportChannels.map((channel, index) => (
          <Card key={index} className="card-government interactive-hover text-center">
            <CardContent className="p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <channel.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{channel.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{channel.description}</p>
              <div className="space-y-2">
                <p className="font-medium text-primary">{channel.contact}</p>
                <Badge variant="secondary" className="text-xs">{channel.availability}</Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Contact Form */}
      <Card className="card-government max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Submit a Support Request</CardTitle>
          <CardDescription>
            Fill out the form below and our team will get back to you within 24 hours
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="application">Application Issues</SelectItem>
                  <SelectItem value="technical">Technical Problems</SelectItem>
                  <SelectItem value="profile">Profile & Documents</SelectItem>
                  <SelectItem value="matching">Matching & Recommendations</SelectItem>
                  <SelectItem value="general">General Inquiry</SelectItem>
                  <SelectItem value="complaint">Complaint</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                placeholder="Brief description of your issue"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Please provide detailed information about your issue or question..."
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
            </div>

            <Button type="submit" className="w-full">
              <Send className="mr-2 h-4 w-4" />
              Submit Support Request
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* FAQ Section */}
      <Card className="card-government">
        <CardHeader>
          <CardTitle>Frequently Asked Questions</CardTitle>
          <CardDescription>Quick answers to common questions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h4 className="font-medium mb-2">How do I check my application status?</h4>
              <p className="text-muted-foreground text-sm">
                You can check your application status by logging into your dashboard and navigating to the "My Applications" section.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">What documents are required for application?</h4>
              <p className="text-muted-foreground text-sm">
                You need to upload your resume, educational certificates, identity proof, and any relevant project portfolios.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">How does the AI matching system work?</h4>
              <p className="text-muted-foreground text-sm">
                Our AI analyzes your skills, education, preferences, and location to match you with the most suitable internship opportunities.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Can I apply to multiple internships?</h4>
              <p className="text-muted-foreground text-sm">
                Yes, you can apply to multiple internships, but we recommend focusing on positions that best match your skills and interests.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}