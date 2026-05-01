"use client";
import React, { useEffect } from 'react';
import { MdCameraAlt, MdCheckCircle, MdLock, MdMusicNote, MdArrowForward, MdPlayCircle, MdClose, MdKeyboardBackspace } from 'react-icons/md';
import { useOnboardingStore } from '@/store/onboardingStore';
import { useUser } from '@/store/authStore';
import { useRouter, useSearchParams } from 'next/navigation';

export default function SocialsStep() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const user = useUser();
  const { connectedSocials, toggleSocial } = useOnboardingStore();

  const isConnected = (platform: string) => connectedSocials.includes(platform);

  // Listen for OAuth callbacks
  useEffect(() => {
    const success = searchParams.get('success');
    const platform = searchParams.get('platform');
    const error = searchParams.get('error');

    if (success === 'true' && platform && !isConnected(platform)) {
      toggleSocial(platform);
      // Clean up URL
      router.replace('/onboarding/socials');
    }

    if (error) {
      alert(`OAuth Error for ${platform}: ${error}\n\nPlease check your .env configuration or developer portal settings.`);
      router.replace('/onboarding/socials');
    }
  }, [searchParams, toggleSocial, isConnected, router]);

  const handleConnectClick = (platform: string) => {
    if (isConnected(platform)) {
      toggleSocial(platform); // Local disconnect simulation
    } else {
      if (!user?.id) {
        alert("You must be logged in to connect social accounts.");
        return;
      }
      // REAL OAuth Redirect Flow
      const backendUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';
      window.location.href = `${backendUrl}/social-auth/${platform}?userId=${user.id}`;
    }
  };

  return (
    <div className="pb-8">
      {/* Header Section */}
      <header className="mb-12">
        <div className="flex items-center gap-2 mb-4">
          <span className="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-fixed text-xs font-bold tracking-wider uppercase">Step 04</span>
          <span className="h-px w-12 bg-outline-variant/30"></span>
          <span className="text-sm text-outline font-medium">Identity &amp; Reach</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-on-surface mb-4 leading-tight">
          Connect Your <span className="text-primary italic">Digital Influence</span>
        </h1>
        <p className="text-on-surface-variant text-lg max-w-2xl leading-relaxed">
          Sync your accounts to unlock automated reporting, verify your audience demographics, and receive premium campaign invitations based on real-time data.
        </p>
      </header>

      {/* Bento Grid Social Selection */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12">
        {/* Instagram */}
        <div 
          className={`md:col-span-8 group relative overflow-hidden p-8 rounded-xl shadow-sm transition-all duration-300 border ${
            isConnected('instagram') ? 'bg-primary/5 border-primary/30' : 'bg-surface-container-lowest border-outline-variant/10 hover:-translate-y-1'
          }`}
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex gap-6 items-center">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045] flex items-center justify-center text-white shrink-0 shadow-inner">
                <MdCameraAlt className="text-3xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-on-surface mb-1">Instagram</h3>
                {isConnected('instagram') ? (
                  <>
                    <p className="text-sm text-on-surface-variant">Profile: <span className="font-semibold text-primary">@creator_studio</span></p>
                    <div className="flex gap-4 mt-3">
                      <div className="flex flex-col">
                        <span className="text-[10px] uppercase tracking-widest text-outline">Followers</span>
                        <span className="text-sm font-bold text-on-surface">142K</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] uppercase tracking-widest text-outline">Engagement</span>
                        <span className="text-sm font-bold text-on-surface">4.2%</span>
                      </div>
                    </div>
                  </>
                ) : (
                  <p className="text-sm text-on-surface-variant">Sync visual portfolio and Reels metrics.</p>
                )}
              </div>
            </div>
            {isConnected('instagram') ? (
              <button onClick={() => handleConnectClick('instagram')} className="flex items-center gap-2 bg-secondary/10 hover:bg-secondary/20 transition-colors px-4 py-2 rounded-full shrink-0">
                <MdCheckCircle className="text-secondary text-sm" />
                <span className="text-secondary text-xs font-bold uppercase tracking-wider">Connected</span>
              </button>
            ) : (
              <button onClick={() => handleConnectClick('instagram')} className="px-6 py-2 rounded-lg bg-surface-container-highest hover:bg-surface-container-high transition-colors text-on-surface font-bold text-sm shrink-0">Connect</button>
            )}
          </div>
        </div>

        {/* Security Trust Module */}
        <div className="md:col-span-4 bg-gradient-to-br from-primary to-primary-light text-white p-8 rounded-xl flex flex-col justify-between shadow-sm">
          <MdLock className="text-3xl mb-4 text-white/90" />
          <div>
            <h4 className="text-lg font-bold mb-2">Vault Security</h4>
            <p className="text-sm text-white/80 leading-snug">We use encrypted OAuth handshakes. We never see or store your social passwords.</p>
          </div>
        </div>

        {/* TikTok */}
        <div className={`md:col-span-4 p-8 rounded-xl transition-all duration-300 border text-center md:text-left ${
            isConnected('tiktok') ? 'bg-primary/5 border-primary/30' : 'bg-surface-container-low border-transparent hover:border-outline-variant/30 hover:-translate-y-1'
          }`}
        >
          <div className="w-12 h-12 bg-black dark:bg-white rounded-lg flex items-center justify-center text-white dark:text-black mb-6 mx-auto md:mx-0 shadow-inner">
            <MdMusicNote className="text-2xl" />
          </div>
          <h3 className="text-lg font-bold mb-2 text-on-surface">TikTok</h3>
          <p className="text-sm text-on-surface-variant mb-6">Connect for viral content tracking.</p>
          <button 
            onClick={() => handleConnectClick('tiktok')}
            className={`w-full py-3 px-4 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-all outline-none ${
            isConnected('tiktok') ? 'bg-secondary/10 text-secondary hover:bg-secondary/20' : 'bg-surface-container-lowest text-primary hover:bg-primary/5 shadow-sm'
          }`}>
            {isConnected('tiktok') ? 'Connected' : 'Connect'} {!isConnected('tiktok') && <MdArrowForward className="text-sm" />}
          </button>
        </div>

        {/* YouTube */}
        <div className={`md:col-span-4 p-8 rounded-xl transition-all duration-300 border text-center md:text-left ${
            isConnected('youtube') ? 'bg-primary/5 border-primary/30' : 'bg-surface-container-low border-transparent hover:border-outline-variant/30 hover:-translate-y-1'
          }`}
        >
          <div className="w-12 h-12 bg-[#FF0000] rounded-lg flex items-center justify-center text-white mb-6 mx-auto md:mx-0 shadow-inner">
            <MdPlayCircle className="text-2xl" />
          </div>
          <h3 className="text-lg font-bold mb-2 text-on-surface">YouTube</h3>
          <p className="text-sm text-on-surface-variant mb-6">Sync long-form data statistics.</p>
          <button 
            onClick={() => handleConnectClick('youtube')}
            className={`w-full py-3 px-4 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-all outline-none ${
            isConnected('youtube') ? 'bg-secondary/10 text-secondary hover:bg-secondary/20' : 'bg-surface-container-lowest text-primary hover:bg-primary/5 shadow-sm'
          }`}>
            {isConnected('youtube') ? 'Connected' : 'Connect'} {!isConnected('youtube') && <MdArrowForward className="text-sm" />}
          </button>
        </div>

        {/* Twitter / X */}
        <div className={`md:col-span-4 p-8 rounded-xl transition-all duration-300 border text-center md:text-left ${
            isConnected('twitter') ? 'bg-primary/5 border-primary/30' : 'bg-surface-container-low border-transparent hover:border-outline-variant/30 hover:-translate-y-1'
          }`}
        >
          <div className="w-12 h-12 bg-[#0F1419] dark:bg-white rounded-lg flex items-center justify-center text-white dark:text-black mb-6 mx-auto md:mx-0 shadow-inner">
            <MdClose className="text-2xl" />
          </div>
          <h3 className="text-lg font-bold mb-2 text-on-surface">Twitter / X</h3>
          <p className="text-sm text-on-surface-variant mb-6">Verify textual engagement.</p>
          <button 
            onClick={() => handleConnectClick('twitter')}
            className={`w-full py-3 px-4 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-all outline-none ${
            isConnected('twitter') ? 'bg-secondary/10 text-secondary hover:bg-secondary/20' : 'bg-surface-container-lowest text-primary hover:bg-primary/5 shadow-sm'
          }`}>
            {isConnected('twitter') ? 'Connected' : 'Connect'} {!isConnected('twitter') && <MdArrowForward className="text-sm" />}
          </button>
        </div>
      </div>

      {/* Navigation Actions - STICKY */}
      <footer className="sticky bottom-0 bg-background/95 backdrop-blur-md z-40 pt-4 pb-4 border-t border-outline-variant/20 flex flex-col md:flex-row justify-between items-center gap-4">
        <button 
          onClick={() => router.push('/onboarding/profile')}
          className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2 font-semibold"
        >
          <MdKeyboardBackspace className="text-xl" /> Back to Profile
        </button>
        <div className="flex gap-4 w-full md:w-auto">
          <button className="px-6 py-3 bg-surface-container-high text-on-surface-variant font-bold rounded-lg hover:bg-surface-container-highest transition-colors">
            Skip
          </button>
          <button 
            onClick={() => router.push('/onboarding/rates')}
            className="w-full md:w-auto px-8 py-3 bg-gradient-to-br from-primary to-primary-light text-white font-bold rounded-lg shadow-md hover:scale-[1.02] active:scale-95 transition-all"
          >
            Continue to Rates
          </button>
        </div>
      </footer>
    </div>
  );
}
