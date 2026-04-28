import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MapPin, Calendar, DollarSign, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface CampaignData {
  id: string;
  brandName: string;
  brandAvatar?: string;
  title: string;
  description: string;
  platforms: string[];
  deliverables: string[];
  budget: string;
  location?: string;
  deadline?: string;
}

export function CampaignCard({ campaign }: { campaign: CampaignData }) {
  return (
    <Card className="group overflow-hidden border-border/50 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 bg-surface flex flex-col h-full">
      <CardHeader className="p-5 pb-4 gap-4 flex-row items-start space-y-0">
        <Avatar className="w-12 h-12 border border-border">
          <AvatarImage src={campaign.brandAvatar} alt={campaign.brandName} />
          <AvatarFallback className="bg-primary/10 text-primary font-heading font-bold">
            {campaign.brandName.substring(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div className="flex-1 space-y-1">
          <p className="text-sm font-medium text-muted-foreground">{campaign.brandName}</p>
          <h3 className="font-heading font-bold text-lg leading-tight group-hover:text-primary transition-colors">
            {campaign.title}
          </h3>
        </div>
      </CardHeader>
      
      <CardContent className="p-5 pt-0 flex-1 flex flex-col gap-4">
        <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
          {campaign.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto pt-2">
          {campaign.platforms.map((p) => (
            <Badge key={p} variant="secondary" className="bg-secondary/10 text-secondary hover:bg-secondary/20">
              {p}
            </Badge>
          ))}
          {campaign.deliverables.map((d) => (
            <Badge key={d} variant="outline" className="border-border text-foreground">
              {d}
            </Badge>
          ))}
        </div>

        <div className="flex items-center gap-4 text-xs font-medium text-muted-foreground pt-2">
          <div className="flex items-center gap-1.5 bg-background px-2.5 py-1.5 rounded-md border border-border/50">
            <DollarSign size={14} className="text-primary" />
            <span className="text-foreground">{campaign.budget}</span>
          </div>
          {campaign.deadline && (
            <div className="flex items-center gap-1.5">
              <Calendar size={14} />
              <span>{campaign.deadline}</span>
            </div>
          )}
          {campaign.location && (
            <div className="flex items-center gap-1.5">
              <MapPin size={14} />
              <span>{campaign.location}</span>
            </div>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="p-5 pt-0 mt-auto">
        <Button className="w-full font-bold group-hover:bg-primary group-hover:text-primary-foreground transition-all gap-2" variant="outline">
          View Campaign <ExternalLink size={16} />
        </Button>
      </CardFooter>
    </Card>
  );
}
