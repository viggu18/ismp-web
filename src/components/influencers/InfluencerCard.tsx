import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Instagram, Youtube, Twitter, Star, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface InfluencerData {
  id: string;
  name: string;
  handle: string;
  avatar: string;
  coverImage?: string;
  bio: string;
  niches: string[];
  rating: number;
  platforms: {
    name: 'Instagram' | 'YouTube' | 'TikTok' | 'Twitter';
    followers: string;
    engagement: string;
  }[];
}

const platformIcons = {
  Instagram: <Instagram size={14} />,
  YouTube: <Youtube size={14} />,
  Twitter: <Twitter size={14} />,
  TikTok: <span className="text-[10px] font-bold">TT</span>
};

export function InfluencerCard({ influencer }: { influencer: InfluencerData }) {
  return (
    <Card className="group overflow-hidden border-border/50 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 bg-surface flex flex-col relative h-full">
      {/* Cover Image */}
      <div className="h-24 bg-gradient-to-r from-primary/10 to-secondary/10 relative overflow-hidden">
        {influencer.coverImage && (
          <img 
            src={influencer.coverImage} 
            alt="Cover" 
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
          />
        )}
        <button className="absolute top-3 right-3 p-2 bg-white/50 backdrop-blur-md rounded-full text-muted-foreground hover:text-red-500 hover:bg-white transition-colors">
          <Heart size={16} />
        </button>
      </div>

      <CardContent className="p-5 pt-0 flex-1 flex flex-col">
        {/* Avatar & Header */}
        <div className="flex justify-between items-end -mt-10 mb-3 relative z-10">
          <Avatar className="w-20 h-20 border-4 border-surface shadow-sm">
            <AvatarImage src={influencer.avatar} alt={influencer.name} />
            <AvatarFallback className="bg-secondary/10 text-secondary text-xl font-heading font-black">
              {influencer.name.substring(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="flex items-center gap-1 bg-surface border border-border/50 px-2.5 py-1 rounded-full shadow-sm mb-1">
            <Star size={14} className="text-warning fill-warning" />
            <span className="text-xs font-bold">{influencer.rating.toFixed(1)}</span>
          </div>
        </div>

        {/* Info */}
        <div className="space-y-1 mb-4">
          <h3 className="font-heading font-bold text-lg leading-tight group-hover:text-primary transition-colors">
            {influencer.name}
          </h3>
          <p className="text-sm font-medium text-muted-foreground">{influencer.handle}</p>
        </div>

        <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed mb-4">
          {influencer.bio}
        </p>

        {/* Niches */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {influencer.niches.slice(0, 3).map((niche) => (
            <Badge key={niche} variant="secondary" className="bg-slate-100 text-slate-600 hover:bg-slate-200 text-[10px] font-semibold px-2 py-0.5">
              {niche}
            </Badge>
          ))}
          {influencer.niches.length > 3 && (
            <Badge variant="secondary" className="bg-slate-100 text-slate-600 hover:bg-slate-200 text-[10px] font-semibold px-2 py-0.5">
              +{influencer.niches.length - 3}
            </Badge>
          )}
        </div>

        {/* Platforms (Bottom Align) */}
        <div className="mt-auto grid grid-cols-2 gap-2 pt-4 border-t border-border/50">
          {influencer.platforms.slice(0, 2).map((platform) => (
            <div key={platform.name} className="flex flex-col gap-0.5">
              <div className="flex items-center gap-1.5 text-muted-foreground">
                {platformIcons[platform.name] || <Star size={14} />}
                <span className="text-[10px] font-medium uppercase tracking-wider">{platform.name}</span>
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="font-bold text-sm text-foreground">{platform.followers}</span>
                <span className="text-[10px] text-success font-medium">({platform.engagement})</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>

      {/* Hover Actions Overlay */}
      <div className="absolute inset-0 bg-white/95 dark:bg-slate-950/95 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 gap-3 z-20">
        <Button className="w-full font-bold shadow-lg shadow-primary/20" variant="default">
          Invite to Campaign
        </Button>
        <Button className="w-full font-bold" variant="outline">
          View Full Profile
        </Button>
      </div>
    </Card>
  );
}
