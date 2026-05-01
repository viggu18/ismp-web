import { create } from 'zustand';

interface OnboardingState {
  // Profile Step
  bio: string;
  location: string;
  selectedNiches: string[];
  
  // Socials Step
  connectedSocials: string[];
  
  // Rates Step
  rates: {
    reels: number | '';
    stories: number | '';
    carousel: number | '';
  };

  // Actions
  setProfileData: (data: Partial<Pick<OnboardingState, 'bio' | 'location' | 'selectedNiches'>>) => void;
  toggleSocial: (platform: string) => void;
  setRate: (type: keyof OnboardingState['rates'], value: number | '') => void;
}

export const useOnboardingStore = create<OnboardingState>((set) => ({
  bio: '',
  location: '',
  selectedNiches: [],
  connectedSocials: [],
  rates: {
    reels: '',
    stories: '',
    carousel: ''
  },
  
  setProfileData: (data) => set((state) => ({ ...state, ...data })),
  
  toggleSocial: (platform) => set((state) => {
    const isConnected = state.connectedSocials.includes(platform);
    return {
      connectedSocials: isConnected 
        ? state.connectedSocials.filter(p => p !== platform)
        : [...state.connectedSocials, platform]
    };
  }),

  setRate: (type, value) => set((state) => ({
    rates: { ...state.rates, [type]: value }
  }))
}));
