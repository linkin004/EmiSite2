import { useState } from 'react';
import { useSeoMeta } from '@unhead/react';
import { Navigation } from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mail, MessageCircle, Clock, Send, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/useToast';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useSeoMeta({
    title: 'Contact Me - Creative Learning Hub',
    description: 'Get in touch with questions, suggestions, or to discuss custom educational resources for your child.',
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I will get back to you within 24 hours.",
    });

    setFormData({
      name: '',
      email: '',
      subject: '',
      category: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Me',
      description: 'Send me a message anytime',
      contact: 'hello@creativelearninghub.com',
      color: 'text-green-400'
    },
    {
      icon: MessageCircle,
      title: 'Quick Response',
      description: 'I typically respond within',
      contact: '24 hours',
      color: 'text-purple-400'
    },
    {
      icon: Clock,
      title: 'Best Times to Reach Me',
      description: 'Monday - Friday',
      contact: '9 AM - 5 PM EST',
      color: 'text-green-400'
    }
  ];

  const faqItems = [
    {
      question: 'How do I download the worksheets?',
      answer: 'After browsing our Class Content section, simply click the download button on any resource. All materials are provided as PDF files for easy printing.'
    },
    {
      question: 'Can you create custom worksheets for my child?',
      answer: 'Absolutely! I love creating personalized learning materials. Contact me with your specific needs, your child age, and learning goals.'
    },
    {
      question: 'Are the materials suitable for homeschooling?',
      answer: 'Yes! All resources are designed to be parent-friendly with clear instructions and can easily be incorporated into any homeschool curriculum.'
    },
    {
      question: 'How often do you add new content?',
      answer: 'I add new worksheets and coloring sheets weekly. Follow along to stay updated on the latest additions to our resource library.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-display">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have questions, suggestions, or need custom resources? I would love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white text-2xl font-display">Send Me a Message</CardTitle>
                <CardDescription className="text-gray-300">
                  Fill out the form below and I will get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white">Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                        className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-green-500"
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                        className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-green-500"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="category" className="text-white">Category</Label>
                    <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                      <SelectTrigger className="bg-gray-700 border-gray-600 text-white focus:border-green-500">
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-700 border-gray-600">
                        <SelectItem value="general">General Question</SelectItem>
                        <SelectItem value="custom">Custom Resource Request</SelectItem>
                        <SelectItem value="technical">Technical Support</SelectItem>
                        <SelectItem value="feedback">Feedback & Suggestions</SelectItem>
                        <SelectItem value="collaboration">Collaboration Opportunity</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-white">Subject *</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      required
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-green-500"
                      placeholder="Brief description of your message"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-white">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      required
                      rows={6}
                      className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-green-500 resize-none"
                      placeholder="Tell me more about what you need or what is on your mind..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white transition-all duration-200 hover:scale-105"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & FAQ */}
          <div className="space-y-6">
            {/* Contact Information */}
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white font-display">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  return (
                    <div key={info.title} className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className={`h-5 w-5 ${info.color}`} />
                      </div>
                      <div>
                        <h3 className="text-white font-medium">{info.title}</h3>
                        <p className="text-gray-400 text-sm">{info.description}</p>
                        <p className="text-green-400 font-medium">{info.contact}</p>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* FAQ */}
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white font-display">Frequently Asked Questions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {faqItems.map((faq) => (
                  <div key={faq.question} className="border-b border-gray-700 last:border-b-0 pb-4 last:pb-0">
                    <h3 className="text-white font-medium mb-2">{faq.question}</h3>
                    <p className="text-gray-300 text-sm">{faq.answer}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Tips */}
            <Card className="bg-gradient-to-r from-green-500/10 to-purple-500/10 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white flex items-center font-display">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                  Quick Tips
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Be specific about your child age and learning level</li>
                  <li>• Include any special requirements or preferences</li>
                  <li>• Feel free to attach examples or references</li>
                  <li>• Do not hesitate to ask about bulk or custom pricing</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}