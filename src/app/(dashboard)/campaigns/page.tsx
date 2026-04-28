'use client';
import React, { useState, useEffect } from 'react';
import { CampaignCard, CampaignData } from '@/components/campaigns/CampaignCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, SlidersHorizontal, MapPin, DollarSign, Loader2 } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';

const mockCampaigns: CampaignData[] = [
  {
    id: '1',
    brandName: 'Nike',
    brandAvatar: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=200&h=200',
    title: 'Summer Running Collection',
    description: 'Looking for fitness influencers to showcase our new lightweight summer running gear. Must be able to shoot high-quality outdoor video.',
    platforms: ['Instagram', 'TikTok'],
    deliverables: ['1 Reel', '2 Stories'],
    budget: '$1,000 - $2,500',
    deadline: 'Aug 15',
  },
  {
    id: '2',
    brandName: 'Glossier',
    title: 'Skincare Routine Feature',
    description: 'Seeking beauty creators with an engaged audience for an authentic GRWM video featuring our core skincare set.',
    platforms: ['TikTok', 'YouTube'],
    deliverables: ['1 Dedicated Video'],
    budget: '$500 - $1,200',
    deadline: 'Sep 01',
  },
  {
    id: '3',
    brandName: 'TechStyle',
    brandAvatar: 'https://images.unsplash.com/photo-1550009158-9ebf6d250406?auto=format&fit=crop&q=80&w=200&h=200',
    title: 'New Gadget Unboxing',
    description: 'We are launching a new smart home device and need tech reviewers to do a comprehensive unboxing and honest review.',
    platforms: ['YouTube'],
    deliverables: ['1 Review Video', '1 Short'],
    budget: '$2,000+',
    deadline: 'Oct 10',
  },
  {
    id: '4',
    brandName: 'FreshEats',
    title: 'Healthy Meal Prep Series',
    description: 'Partnering with food and lifestyle creators to share simple 15-minute meal prep ideas using our new organic sauces.',
    platforms: ['Instagram'],
    deliverables: ['3 Reels'],
    budget: '$800 - $1,500',
    location: 'US Only',
  },
];

export default function BrowseCampaignsPage() {
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
          <h1 className="text-3xl md:text-4xl font-heading font-black tracking-tight text-slate-900 dark:text-white">Discover Campaigns</h1>
          <p className="text-slate-500 dark:text-slate-400 text-lg">Find the perfect brand partnerships that match your niche.</p>
        </div>
        
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 h-4 w-4" />
            <Input 
              placeholder="Search campaigns..." 
              className="pl-9 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 focus-visible:ring-primary/20 h-11"
            />
          </div>
          
          <Sheet>
            <SheetTrigger render={
              <Button variant="outline" className="h-11 px-4 gap-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800">
                <SlidersHorizontal size={16} />
                <span className="hidden sm:inline">Filters</span>
              </Button>
            } />
            <SheetContent className="w-full sm:max-w-md bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl">
              <SheetHeader className="text-left space-y-1 pb-6 border-b border-slate-200 dark:border-slate-800">
                <SheetTitle className="text-2xl font-black font-heading">Filter Campaigns</SheetTitle>
                <SheetDescription>
                  Narrow down your search to find the perfect fit.
                </SheetDescription>
              </SheetHeader>
              <div className="py-6 space-y-8">
                <div className="space-y-4">
                  <h3 className="font-bold text-sm uppercase tracking-wider text-slate-500">Platform</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Instagram', 'YouTube', 'TikTok', 'X', 'LinkedIn'].map(p => (
                      <Badge key={p} variant="outline" className="cursor-pointer hover:bg-primary hover:text-white transition-colors py-1.5 px-3">{p}</Badge>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="font-bold text-sm uppercase tracking-wider text-slate-500">Minimum Budget</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {['$100+', '$500+', '$1,000+', '$5,000+'].map(b => (
                      <Button key={b} variant="outline" className="justify-start text-muted-foreground">{b}</Button>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="font-bold text-sm uppercase tracking-wider text-slate-500">Niche</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Fashion', 'Beauty', 'Tech', 'Fitness', 'Food', 'Travel', 'Finance', 'Lifestyle'].map(p => (
                      <Badge key={p} variant="secondary" className="cursor-pointer hover:bg-secondary/80 transition-colors py-1.5 px-3 bg-secondary/10 text-secondary">{p}</Badge>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 flex gap-3">
                <Button variant="outline" className="flex-1">Reset</Button>
                <Button className="flex-1">Apply Filters</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {/* Categories / Quick Filters */}
      <div className="flex gap-2 overflow-x-auto pb-2 custom-scrollbar">
        {['All', 'Fashion', 'Beauty', 'Tech', 'Fitness', 'Food', 'Travel'].map((cat, i) => (
          <Button 
            key={cat} 
            variant={i === 0 ? "default" : "secondary"} 
            className={`rounded-full px-5 transition-all ${i === 0 ? 'bg-primary hover:bg-primary-light text-primary-foreground font-bold shadow-md shadow-primary/20' : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 font-medium text-slate-600 dark:text-slate-300'}`}
          >
            {cat}
          </Button>
        ))}
      </div>

      {/* Campaign Grid */}
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="flex flex-col space-y-3 bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 h-[320px]">
              <div className="flex gap-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2 flex-1">
                  <Skeleton className="h-4 w-[100px]" />
                  <Skeleton className="h-6 w-[200px]" />
                </div>
              </div>
              <Skeleton className="h-[80px] w-full mt-4" />
              <div className="flex gap-2 mt-4">
                <Skeleton className="h-6 w-[80px] rounded-full" />
                <Skeleton className="h-6 w-[80px] rounded-full" />
              </div>
              <div className="mt-auto flex justify-between">
                <Skeleton className="h-8 w-[100px]" />
                <Skeleton className="h-8 w-[100px]" />
              </div>
            </div>
          ))}
        </div>
      ) : (
        mockCampaigns.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 px-4 text-center bg-white/50 dark:bg-slate-900/50 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700">
            <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-4">
              <Search className="h-8 w-8 text-slate-400" />
            </div>
            <h3 className="text-xl font-bold font-heading text-slate-900 dark:text-white mb-2">No campaigns found</h3>
            <p className="text-slate-500 max-w-md">We couldn't find any campaigns matching your current filters. Try adjusting your search criteria.</p>
            <Button variant="outline" className="mt-6">Clear all filters</Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockCampaigns.map((campaign) => (
              <CampaignCard key={campaign.id} campaign={campaign} />
            ))}
          </div>
        )
      )}
    </div>
  );
}
