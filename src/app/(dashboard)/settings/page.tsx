import React from 'react';
import { Camera, CheckCircle2, Plus, Trophy } from 'lucide-react';

export default function ProfileSettingsPage() {
  return (
    <div className="p-12 max-w-6xl mx-auto">
      <div className="mb-16">
        <h1 className="text-4xl font-extrabold tracking-tight text-on-surface mb-2">Personal Info</h1>
        <p className="text-on-surface-variant text-lg max-w-2xl">Manage your public profile and professional identity within the marketplace ecosystem.</p>
      </div>

      <div className="grid grid-cols-12 gap-12">
        {/* Left Column: Form */}
        <div className="col-span-12 lg:col-span-8 space-y-12">
          {/* Avatar Upload Section */}
          <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-outline-variant/10 flex items-center gap-8">
            <img alt="Large Profile Avatar" className="w-32 h-32 rounded-xl object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6thbbvi-sJgoz-DTTv4ZOO3ivOGeAog9CCGT4ZUmZcYCKNJC_bV3LlwJH16mE0pujxio8t8ynR8c00QG-GWVGzjjf9sMuofqCkDFg3um-_pJyFRmLI02aIRSMkamrPLuKHbPkrSBVe2e8RO5xkhEQCBmZ9u7cWgpzm9o95X14rO5cFbXpmIjsUfdH13jMM-QCLFCbw-Txa1T3umOEUiOCHA9B6_h9zS94bCtRyy3NozevYz0t7qElLjNRcwj7YvEsGcLzTXogAKmD" />
            <div>
              <h3 className="text-xl font-bold mb-2 text-on-surface">Profile Avatar</h3>
              <p className="text-sm text-on-surface-variant mb-4">JPG, GIF or PNG. Max size of 800K</p>
              <div className="flex gap-4">
                <button className="bg-gradient-to-br from-primary to-primary-light text-white px-6 py-2 rounded-lg font-semibold text-sm shadow-sm active:scale-95 transition-all outline-none">Upload New</button>
                <button className="bg-surface-container-high text-on-surface-variant px-6 py-2 rounded-lg font-semibold text-sm hover:bg-surface-container-highest transition-colors outline-none">Remove</button>
              </div>
            </div>
          </div>

          {/* Details Form */}
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-8">
              {[{ label: 'First Name', value: 'Alex', type: 'text' }, { label: 'Last Name', value: 'Rivera', type: 'text' }].map((f, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <label className="text-sm font-bold tracking-wider uppercase text-on-surface-variant">{f.label}</label>
                  <input className="bg-surface-container-high border-none rounded-lg p-4 focus:ring-2 focus:ring-primary/20 transition-all font-medium outline-none text-on-surface" type={f.type} defaultValue={f.value} />
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-8">
              {[{ label: 'Email Address', value: 'alex.rivera@creator.com', type: 'email' }, { label: 'Phone Number', value: '+1 (555) 902-4411', type: 'tel' }].map((f, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <label className="text-sm font-bold tracking-wider uppercase text-on-surface-variant">{f.label}</label>
                  <input className="bg-surface-container-high border-none rounded-lg p-4 focus:ring-2 focus:ring-primary/20 transition-all font-medium outline-none text-on-surface" type={f.type} defaultValue={f.value} />
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold tracking-wider uppercase text-on-surface-variant">Professional Bio</label>
              <textarea className="bg-surface-container-high border-none rounded-lg p-4 focus:ring-2 focus:ring-primary/20 transition-all font-medium resize-none outline-none text-on-surface" rows={4} defaultValue="Elite content creator specializing in high-fashion editorial and minimalist lifestyle. Partnering with global brands to bridge the gap between aesthetics and performance."></textarea>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-8 flex items-center justify-between">
            <button className="bg-gradient-to-br from-primary to-primary-light text-white px-10 py-4 rounded-xl font-bold text-lg shadow-md active:scale-95 transition-transform outline-none">
              Save Changes
            </button>
            <button className="text-error font-bold flex items-center gap-2 hover:bg-error-container/20 px-4 py-2 rounded-lg transition-colors outline-none">
              Deactivate Account
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-span-12 lg:col-span-4 space-y-8">
          {/* Connected Accounts */}
          <div className="bg-surface-container-low p-8 rounded-xl border-l-4 border-primary">
            <h3 className="text-xl font-bold mb-6 text-on-surface">Connected Accounts</h3>
            <div className="space-y-4">
              {[
                { handle: '@arivera_style', followers: '1.2M Followers', iconBg: 'bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600' },
                { handle: '@alex.rivera', followers: '850K Followers', iconBg: 'bg-black' },
              ].map((acc, i) => (
                <div key={i} className="bg-surface-container-lowest p-4 rounded-xl flex items-center justify-between shadow-sm border border-outline-variant/10">
                  <div className="flex items-center gap-4">
                    <div className={`w-10 h-10 ${acc.iconBg} rounded-full flex items-center justify-center text-white`}>
                      <Camera size={16} />
                    </div>
                    <div>
                      <p className="font-bold text-sm text-on-surface">{acc.handle}</p>
                      <p className="text-xs text-on-surface-variant">{acc.followers}</p>
                    </div>
                  </div>
                  <CheckCircle2 size={20} className="text-secondary fill-secondary text-white" />
                </div>
              ))}
              <button className="w-full mt-4 flex items-center justify-center gap-2 py-3 border-2 border-dashed border-outline-variant rounded-xl text-on-surface-variant hover:bg-white transition-all font-semibold text-sm outline-none">
                <Plus size={16} />
                Add Platform
              </button>
            </div>
          </div>

          {/* Elite Status Badge */}
          <div className="relative overflow-hidden bg-gradient-to-br from-primary to-primary-light p-8 rounded-xl text-white">
            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            <Trophy size={40} className="mb-4 text-white" />
            <h4 className="text-2xl font-black leading-tight mb-2 text-white">Elite Status Confirmed</h4>
            <p className="text-white/80 text-sm leading-relaxed mb-6">Your account is currently in the top 1% of the marketplace. You have priority access to premium briefs and early-bird payouts.</p>
            <a className="text-white font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all" href="#">
              View Benefits
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
