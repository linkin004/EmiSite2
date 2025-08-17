import { useState } from 'react';
import { useSeoMeta } from '@unhead/react';
import { Navigation } from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Download, BookOpen, Palette, Star, Filter, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

export function ClassContent() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  useSeoMeta({
    title: 'Class Content & Resources - Creative Learning Hub',
    description: 'Browse our collection of educational worksheets, coloring sheets, and learning resources for all ages.',
  });

  const worksheets = [
    {
      id: 1,
      title: 'Math Adventures: Addition & Subtraction',
      description: 'Fun math problems with colorful illustrations to make numbers exciting.',
      category: 'math',
      ageGroup: '6-8 years',
      difficulty: 'Beginner',
      rating: 5,
      downloads: 1250,
      preview: '/api/placeholder/300/200'
    },
    {
      id: 2,
      title: 'Reading Comprehension: Animal Stories',
      description: 'Engaging stories about animals with comprehension questions.',
      category: 'reading',
      ageGroup: '7-10 years',
      difficulty: 'Intermediate',
      rating: 5,
      downloads: 980,
      preview: '/api/placeholder/300/200'
    },
    {
      id: 3,
      title: 'Science Explorers: Weather Patterns',
      description: 'Learn about different weather phenomena through interactive activities.',
      category: 'science',
      ageGroup: '8-12 years',
      difficulty: 'Intermediate',
      rating: 4,
      downloads: 756,
      preview: '/api/placeholder/300/200'
    },
    {
      id: 4,
      title: 'Creative Writing: Story Starters',
      description: 'Prompts and templates to inspire young writers.',
      category: 'writing',
      ageGroup: '9-12 years',
      difficulty: 'Advanced',
      rating: 5,
      downloads: 642,
      preview: '/api/placeholder/300/200'
    }
  ];

  const coloringSheets = [
    {
      id: 1,
      title: 'Magical Unicorns',
      description: 'Beautiful unicorn designs perfect for creative expression.',
      category: 'fantasy',
      ageGroup: '4-10 years',
      complexity: 'Simple',
      rating: 5,
      downloads: 2100,
      preview: '/api/placeholder/300/200'
    },
    {
      id: 2,
      title: 'Ocean Adventures',
      description: 'Underwater scenes with fish, dolphins, and sea creatures.',
      category: 'nature',
      ageGroup: '5-12 years',
      complexity: 'Medium',
      rating: 5,
      downloads: 1800,
      preview: '/api/placeholder/300/200'
    },
    {
      id: 3,
      title: 'Space Exploration',
      description: 'Rockets, planets, and astronauts for future space explorers.',
      category: 'space',
      ageGroup: '6-12 years',
      complexity: 'Medium',
      rating: 4,
      downloads: 1450,
      preview: '/api/placeholder/300/200'
    },
    {
      id: 4,
      title: 'Mandala Patterns',
      description: 'Intricate mandala designs for relaxation and focus.',
      category: 'patterns',
      ageGroup: '10+ years',
      complexity: 'Complex',
      rating: 5,
      downloads: 890,
      preview: '/api/placeholder/300/200'
    }
  ];

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'math', label: 'Math' },
    { value: 'reading', label: 'Reading' },
    { value: 'science', label: 'Science' },
    { value: 'writing', label: 'Writing' },
    { value: 'fantasy', label: 'Fantasy' },
    { value: 'nature', label: 'Nature' },
    { value: 'space', label: 'Space' },
    { value: 'patterns', label: 'Patterns' }
  ];

  const filteredWorksheets = worksheets.filter(item =>
    (selectedCategory === 'all' || item.category === selectedCategory) &&
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredColoringSheets = coloringSheets.filter(item =>
    (selectedCategory === 'all' || item.category === selectedCategory) &&
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const ResourceCard = ({ item, type }: { item: typeof worksheets[0] | typeof coloringSheets[0], type: 'worksheet' | 'coloring' }) => (
    <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 hover:shadow-xl group">
      <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-800 rounded-t-lg flex items-center justify-center">
        {type === 'worksheet' ? (
          <BookOpen className="h-12 w-12 text-green-400" />
        ) : (
          <Palette className="h-12 w-12 text-purple-400" />
        )}
      </div>
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-white text-lg group-hover:text-green-400 transition-colors">
            {item.title}
          </CardTitle>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-sm text-gray-300">{item.rating}</span>
          </div>
        </div>
        <CardDescription className="text-gray-300">
          {item.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="bg-gray-700 text-gray-300">
              {item.ageGroup}
            </Badge>
            <Badge variant="outline" className="border-purple-500 text-purple-400">
              {type === 'worksheet' ? (item as typeof worksheets[0]).difficulty : (item as typeof coloringSheets[0]).complexity}
            </Badge>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-400">
              {item.downloads.toLocaleString()} downloads
            </span>
            <Button
              size="sm"
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white transition-all duration-200 hover:scale-105"
            >
              <Download className="h-4 w-4 mr-2" />
              Download
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Learning Resources
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our collection of educational worksheets and creative coloring sheets designed to inspire and educate
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-green-500"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-gray-800 border border-gray-700 text-white rounded-md px-3 py-2 focus:border-green-500 focus:outline-none"
              >
                {categories.map(category => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Content Tabs */}
        <Tabs defaultValue="worksheets" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-gray-800 border border-gray-700">
            <TabsTrigger
              value="worksheets"
              className="data-[state=active]:bg-green-500 data-[state=active]:text-white text-gray-300"
            >
              <BookOpen className="h-4 w-4 mr-2" />
              Worksheets ({filteredWorksheets.length})
            </TabsTrigger>
            <TabsTrigger
              value="coloring"
              className="data-[state=active]:bg-purple-500 data-[state=active]:text-white text-gray-300"
            >
              <Palette className="h-4 w-4 mr-2" />
              Coloring Sheets ({filteredColoringSheets.length})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="worksheets" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredWorksheets.map((worksheet) => (
                <ResourceCard key={worksheet.id} item={worksheet} type="worksheet" />
              ))}
            </div>
            {filteredWorksheets.length === 0 && (
              <div className="text-center py-12">
                <BookOpen className="h-16 w-16 text-gray-600 mx-auto mb-4" />
                <p className="text-gray-400 text-lg">No worksheets found matching your criteria.</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="coloring" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredColoringSheets.map((sheet) => (
                <ResourceCard key={sheet.id} item={sheet} type="coloring" />
              ))}
            </div>
            {filteredColoringSheets.length === 0 && (
              <div className="text-center py-12">
                <Palette className="h-16 w-16 text-gray-600 mx-auto mb-4" />
                <p className="text-gray-400 text-lg">No coloring sheets found matching your criteria.</p>
              </div>
            )}
          </TabsContent>
        </Tabs>

        {/* Featured Section */}
        <section className="mt-16 p-8 bg-gradient-to-r from-green-500/10 to-purple-500/10 rounded-xl border border-gray-700">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Need Something Custom?
            </h2>
            <p className="text-gray-300 mb-6">
              Can't find exactly what you're looking for? I create custom worksheets and activities tailored to your specific needs.
            </p>
            <Button
              asChild
              className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white transition-all duration-200 hover:scale-105"
            >
              <a href="/contact">Request Custom Content</a>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}