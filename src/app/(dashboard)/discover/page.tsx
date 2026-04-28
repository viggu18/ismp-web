'use client';
import React, { useState, useEffect } from 'react';
import { InfluencerCard, InfluencerData } from '@/components/influencers/InfluencerCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, SlidersHorizontal, ChevronDown } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

const mockInfluencers: InfluencerData[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    handle: '@sarah.creates',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200',
    coverImage: 'https://images.unsplash.com/photo-1616469829581-73993eb86b02?auto=format&fit=crop&q=80&w=600&h=200',
    bio: 'NYC-based lifestyle & fashion creator. Passionate about sustainable living and vintage aesthetics.',
    niches: ['Fashion', 'Lifestyle', 'Sustainability'],
    rating: 4.9,
    platforms: [
      { name: 'Instagram', followers: '125K', engagement: '4.2%' },
      { name: 'TikTok', followers: '340K', engagement: '8.5%' }
    ]
  },
  {
    id: '2',
    name: 'David Chen',
    handle: '@davidtech',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200',
    bio: 'Tech reviews, unboxings, and setup tours. Breaking down complex gadgets for everyday consumers.',
    niches: ['Tech', 'Gadgets', 'Productivity'],
    rating: 4.7,
    platforms: [
      { name: 'YouTube', followers: '850K', engagement: '6.1%' },
      { name: 'Twitter', followers: '120K', engagement: '2.4%' }
    ]
  },
  {
    id: '3',
    name: 'Elena Rodriguez',
    handle: '@elenafit',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200&h=200',
    coverImage: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=600&h=200',
    bio: 'Certified personal trainer. Home workouts, nutrition tips, and realistic fitness journeys.',
    niches: ['Fitness', 'Health', 'Nutrition', 'Wellness'],
    rating: 5.0,
    platforms: [
      { name: 'Instagram', followers: '450K', engagement: '5.8%' },
      { name: 'YouTube', followers: '200K', engagement: '4.9%' }
    ]
  },
  {
    id: '4',
    name: 'Marcus Cook',
    handle: '@marcus.eats',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200',
    bio: 'Quick recipes and restaurant reviews. Food is my love language. Based in Chicago.',
    niches: ['Food', 'Travel', 'Cooking'],
    rating: 4.8,
    platforms: [
      { name: 'TikTok', followers: '1.2M', engagement: '11.2%' },
      { name: 'Instagram', followers: '300K', engagement: '3.5%' }
    ]
  }
];

export default function DiscoverPage() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate network loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="p-6 lg:p-10 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2">
          <h1 className="text-3xl md:text-4xl font-heading font-black tracking-tight text-slate-900 dark:text-white">Discover Creators</h1>
          <p className="text-slate-500 dark:text-slate-400 text-lg">Browse vetted influencers ready to elevate your brand.</p>
        </div>
        
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 h-4 w-4" />
            <Input 
              placeholder="Search by name, niche, or keyword..." 
              className="pl-9 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 focus-visible:ring-primary/20 h-11"
            />
          </div>
          <Button variant="outline" className="h-11 px-4 gap-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800">
            <SlidersHorizontal size={16} />
            <span className="hidden sm:inline">Filters</span>
          </Button>
        </div>
      </div>

      {/* Advanced Filters Bar */}
      <div className="flex flex-wrap items-center gap-3 py-2">
        {['Platform', 'Followers', 'Engagement Rate', 'Location', 'Price Range'].map((filter) => (
          <Button key={filter} variant="outline" className="h-9 px-3 text-xs font-medium border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 gap-2 hover:bg-slate-50 dark:hover:bg-slate-800">
            {filter} <ChevronDown size={14} className="text-slate-400" />
          </Button>
        ))}
        <Button variant="ghost" className="h-9 px-3 text-xs font-bold text-primary hover:text-primary-light hover:bg-primary/5 ml-auto">
          Clear Filters
        </Button>
      </div>

      {/* Influencer Grid */}
      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div key={i} className="flex flex-col space-y-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 h-[400px] overflow-hidden">
              <Skeleton className="h-24 w-full rounded-none" />
              <div className="px-5 pb-5 flex flex-col flex-1">
                <div className="flex justify-between items-end -mt-10 mb-3 relative z-10">
                  <Skeleton className="h-20 w-20 rounded-full border-4 border-white dark:border-slate-900" />
                  <Skeleton className="h-6 w-12 rounded-full" />
                </div>
                <Skeleton className="h-6 w-3/4 mb-2" />
                <Skeleton className="h-4 w-1/2 mb-4" />
                <Skeleton className="h-10 w-full mb-4" />
                <div className="flex gap-2 mb-4">
                  <Skeleton className="h-5 w-16 rounded-full" />
                  <Skeleton className="h-5 w-16 rounded-full" />
                </div>
                <div className="mt-auto grid grid-cols-2 gap-2 pt-4 border-t border-slate-200 dark:border-slate-800">
                  <Skeleton className="h-10 w-full" />
                  <Skeleton className="h-10 w-full" />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {mockInfluencers.map((influencer) => (
            <InfluencerCard key={influencer.id} influencer={influencer} />
          ))}
        </div>
      )}
    </div>
  );
}
