import { useSeoMeta } from '@unhead/react';
import { Navigation } from '@/components/Navigation';
import { Home } from '@/pages/Home';

const Index = () => {
  useSeoMeta({
    title: 'Creative Learning Hub - Independent Teaching & Resources',
    description: 'Discover engaging worksheets, coloring sheets, and online classes designed to make learning fun and creative.',
  });

  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <Home />
    </div>
  );
};

export default Index;
