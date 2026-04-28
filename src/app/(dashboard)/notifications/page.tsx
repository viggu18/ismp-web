'use client';
import React, { useState, useEffect } from 'react';
import { Bell, CheckCheck, Info, Megaphone, DollarSign, FileText, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { api } from '@/lib/api';

interface ApiResponse<T> { data: T; message: string; }

// Maps backend NotificationType enum values to icons + colours
const typeConfig: Record<string, { icon: React.ElementType; color: string; bg: string }> = {
  CAMPAIGN_INVITE: { icon: Megaphone, color: 'text-primary', bg: 'bg-primary/10' },
  APPLICATION_RECEIVED: { icon: FileText, color: 'text-secondary', bg: 'bg-secondary/10' },
  APPLICATION_ACCEPTED: { icon: CheckCheck, color: 'text-success', bg: 'bg-success/10' },
  APPLICATION_REJECTED: { icon: Info, color: 'text-error', bg: 'bg-error/10' },
  OFFER_RECEIVED: { icon: DollarSign, color: 'text-primary', bg: 'bg-primary/10' },
  OFFER_ACCEPTED: { icon: CheckCheck, color: 'text-success', bg: 'bg-success/10' },
  OFFER_REJECTED: { icon: Info, color: 'text-error', bg: 'bg-error/10' },
  PAYMENT_RELEASED: { icon: DollarSign, color: 'text-success', bg: 'bg-success/10' },
  CONTENT_SUBMITTED: { icon: FileText, color: 'text-secondary', bg: 'bg-secondary/10' },
  CONTENT_APPROVED: { icon: CheckCheck, color: 'text-success', bg: 'bg-success/10' },
  CONTENT_REJECTED: { icon: Info, color: 'text-error', bg: 'bg-error/10' },
  VERIFICATION_APPROVED: { icon: ShieldCheck, color: 'text-success', bg: 'bg-success/10' },
  VERIFICATION_REJECTED: { icon: ShieldCheck, color: 'text-error', bg: 'bg-error/10' },
};

const defaultConfig = { icon: Bell, color: 'text-slate-500', bg: 'bg-slate-100' };

function timeAgo(dateStr: string) {
  const diff = Date.now() - new Date(dateStr).getTime();
  const m = Math.floor(diff / 60000);
  if (m < 1) return 'just now';
  if (m < 60) return `${m}m ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h ago`;
  return `${Math.floor(h / 24)}d ago`;
}

interface Notification {
  id: string;
  type: string;
  title: string;
  body: string;
  isRead: boolean;
  createdAt: string;
  metadata?: Record<string, unknown>;
}

// Mock data that mirrors the real backend shape — swap `fetch` call in when auth is wired up
const MOCK: Notification[] = [
  { id: '1', type: 'CAMPAIGN_INVITE', title: 'New Campaign Invite', body: 'Luxe Fragrances invited you to their Spring Editorial campaign.', isRead: false, createdAt: new Date(Date.now() - 2 * 60000).toISOString() },
  { id: '2', type: 'APPLICATION_RECEIVED', title: 'Application Received', body: 'A creator applied to your "Minimalist Living Series" campaign.', isRead: false, createdAt: new Date(Date.now() - 35 * 60000).toISOString() },
  { id: '3', type: 'OFFER_ACCEPTED', title: 'Offer Accepted', body: 'Elena Rodriguez accepted your collaboration offer.', isRead: false, createdAt: new Date(Date.now() - 2 * 3600000).toISOString() },
  { id: '4', type: 'PAYMENT_RELEASED', title: 'Payment Released', body: '$1,200 has been released to your account for "Autumn Look Book".', isRead: true, createdAt: new Date(Date.now() - 5 * 3600000).toISOString() },
  { id: '5', type: 'CONTENT_SUBMITTED', title: 'Content Ready for Review', body: 'Marcus Cook submitted deliverables for the Street Food campaign.', isRead: true, createdAt: new Date(Date.now() - 24 * 3600000).toISOString() },
  { id: '6', type: 'VERIFICATION_APPROVED', title: 'Profile Verified', body: 'Your profile has been verified. You now have a verified badge.', isRead: true, createdAt: new Date(Date.now() - 3 * 86400000).toISOString() },
];

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [usingMock, setUsingMock] = useState(false);

  useEffect(() => {
    const token = typeof window !== 'undefined' ? localStorage.getItem('ismp_token') : null;
    if (!token) {
      setNotifications(MOCK);
      setUsingMock(true);
      setIsLoading(false);
      return;
    }
    api.get<ApiResponse<Notification[]>>('/notifications')
      .then(res => setNotifications(res.data))
      .catch(() => { setNotifications(MOCK); setUsingMock(true); })
      .finally(() => setIsLoading(false));
  }, []);

  const unreadCount = notifications.filter(n => !n.isRead).length;

  function markAllRead() {
    setNotifications(prev => prev.map(n => ({ ...n, isRead: true })));
    if (!usingMock) {
      notifications.filter(n => !n.isRead)
        .forEach(n => api.post(`/notifications/${n.id}/read`).catch(() => {}));
    }
  }

  function markRead(id: string) {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, isRead: true } : n));
    if (!usingMock) api.post(`/notifications/${id}/read`).catch(() => {});
  }

  return (
    <div className="p-6 lg:p-10 max-w-3xl mx-auto space-y-8 animate-in fade-in duration-500">
      {/* Header */}
      <div className="flex items-end justify-between">
        <div className="space-y-1">
          <h1 className="text-3xl font-heading font-black tracking-tight text-slate-900 dark:text-white">Notifications</h1>
          <p className="text-slate-500 dark:text-slate-400">
            {unreadCount > 0 ? (
              <><Badge className="bg-primary text-white font-bold mr-2">{unreadCount}</Badge>unread</>
            ) : 'All caught up!'}
          </p>
        </div>
        {unreadCount > 0 && (
          <Button variant="ghost" size="sm" className="text-primary hover:text-primary font-bold gap-2" onClick={markAllRead}>
            <CheckCheck size={16} /> Mark all read
          </Button>
        )}
      </div>

      {/* List */}
      <div className="space-y-2">
        {isLoading ? (
          Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="flex gap-4 p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
              <Skeleton className="w-11 h-11 rounded-full flex-shrink-0" />
              <div className="flex-1 space-y-2">
                <Skeleton className="h-4 w-1/3" />
                <Skeleton className="h-3 w-3/4" />
              </div>
              <Skeleton className="h-3 w-12" />
            </div>
          ))
        ) : notifications.length === 0 ? (
          <div className="text-center py-20 text-slate-400">
            <Bell size={40} className="mx-auto mb-4 opacity-30" />
            <p className="font-medium">No notifications yet</p>
          </div>
        ) : (
          notifications.map(n => {
            const cfg = typeConfig[n.type] ?? defaultConfig;
            const Icon = cfg.icon;
            return (
              <button
                key={n.id}
                onClick={() => markRead(n.id)}
                className={`w-full text-left flex gap-4 p-4 rounded-xl border transition-all duration-200 group ${n.isRead
                    ? 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 opacity-70 hover:opacity-100'
                    : 'border-primary/20 bg-primary/5 dark:bg-primary/10 hover:bg-primary/10'
                  }`}
              >
                <div className={`w-11 h-11 rounded-full flex-shrink-0 flex items-center justify-center ${cfg.bg}`}>
                  <Icon size={18} className={cfg.color} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="font-semibold text-sm text-slate-900 dark:text-white">{n.title}</p>
                    {!n.isRead && <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />}
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-2">{n.body}</p>
                </div>
                <span className="text-[10px] text-slate-400 whitespace-nowrap mt-0.5 flex-shrink-0">{timeAgo(n.createdAt)}</span>
              </button>
            );
          })
        )}
      </div>

      {usingMock && (
        <p className="text-center text-xs text-slate-400 pt-2 pb-6">
          Showing preview data &mdash; live notifications load after you sign in.
          Backend: <code className="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded font-mono">GET {process.env.NEXT_PUBLIC_API_URL}/notifications</code>
        </p>
      )}
    </div>
  );
}
