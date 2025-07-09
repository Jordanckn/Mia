'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { 
  Zap,
  Brain,
  Video,
  BarChart3,
  Calendar,
  Check,
  Users,
  TrendingUp,
  Globe,
  Sparkles,
  Instagram,
  Youtube,
  Linkedin,
  Twitter,
} from 'lucide-react';

const platforms = [
  { name: 'Instagram', icon: Instagram, gradient: 'from-pink-500 to-orange-500' },
  { name: 'TikTok', icon: Video, gradient: 'from-black to-red-500' },
  { name: 'YouTube', icon: Youtube, gradient: 'from-red-500 to-red-600' },
  { name: 'LinkedIn', icon: Linkedin, gradient: 'from-blue-600 to-blue-700' },
  { name: 'Twitter', icon: Twitter, gradient: 'from-blue-400 to-blue-500' },
];

const features = [
  {
    icon: Brain,
    key: 'aiGeneration',
    gradient: 'var(--grad-iris-sunrise)'
  },
  {
    icon: Calendar,
    key: 'scheduling',
    gradient: 'var(--grad-aurora-mint)'
  },
  {
    icon: BarChart3,
    key: 'analytics',
    gradient: 'var(--grad-cosmic-purple)'
  },
  {
    icon: Globe,
    key: 'multiChannel',
    gradient: 'var(--grad-nebula-blue)'
  }
];


export default function Home() {
  const t = useTranslations();
  const [isGenerating, setIsGenerating] = useState(false);
  const [currentPlatform, setCurrentPlatform] = useState(0);
  const [contentInput, setContentInput] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPlatform((prev) => (prev + 1) % platforms.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleGenerate = () => {
    if (contentInput.trim()) {
      setIsGenerating(true);
      setTimeout(() => setIsGenerating(false), 3000);
    }
  };

  const pricingTiers = [
    {
      key: 'starter',
      popular: false
    },
    {
      key: 'professional',
      popular: true
    },
    {
      key: 'enterprise',
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-[#050510] text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-[#050510]/80 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">Mia</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">
                {t('navigation.features')}
              </a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">
                {t('navigation.pricing')}
              </a>
              <a href="#analytics" className="text-gray-300 hover:text-white transition-colors">
                {t('navigation.analytics')}
              </a>
              <LanguageSwitcher />
              <button className="btn-g">{t('navigation.getStarted')}</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className="text-center animate-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
              {t('hero.title')}
              <br />
              <span className="gradient-text">{t('hero.titleHighlight')}</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto text-balance">
              {t('hero.subtitle')}
            </p>
            
            {/* Content Generation Interface */}
            <div className="card-glass p-8 max-w-4xl mx-auto mb-12 nebula-glow">
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="flex-1">
                  <input
                    type="text"
                    value={contentInput}
                    onChange={(e) => setContentInput(e.target.value)}
                    placeholder={t('hero.inputPlaceholder')}
                    className="w-full px-6 py-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <button
                  onClick={handleGenerate}
                  disabled={isGenerating || !contentInput.trim()}
                  className="btn-g px-8 py-4 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {isGenerating ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      {t('hero.generating')}
                    </>
                  ) : (
                    <>
                      <Zap className="w-5 h-5" />
                      {t('hero.generateButton')}
                    </>
                  )}
                </button>
              </div>
              
              {/* Platform Selector */}
              <div className="mt-6 flex flex-wrap gap-3 justify-center">
                {platforms.map((platform, index) => (
                  <div
                    key={platform.name}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                      index === currentPlatform
                        ? 'bg-white/20 border-2 border-purple-500'
                        : 'bg-white/5 border border-white/10 hover:bg-white/10'
                    }`}
                  >
                    <platform.icon className={`w-5 h-5 ${
                      index === currentPlatform ? 'text-purple-400' : 'text-gray-400'
                    }`} />
                    <span className="text-sm font-medium">{platform.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold aurora-text mb-2">10M+</div>
                <div className="text-gray-400">{t('stats.contentGenerated')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">5+</div>
                <div className="text-gray-400">{t('stats.platforms')}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold aurora-text mb-2">99.9%</div>
                <div className="text-gray-400">{t('stats.uptime')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-[#0d0d2b]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">{t('features.title')}</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('features.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card-glass p-6 hover:transform hover:scale-105 transition-all duration-300">
                <div className="mb-4">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: feature.gradient }}
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {t(`features.${feature.key}.title`)}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {t(`features.${feature.key}.description`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section id="analytics" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              {t('dashboard.title')} <span className="aurora-text">{t('dashboard.titleHighlight')}</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('dashboard.subtitle')}
            </p>
          </div>

          <div className="card-glass p-8 rounded-3xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Metrics Cards */}
              <div className="lg:col-span-2 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="card-glass p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-400">{t('dashboard.totalReach')}</p>
                        <p className="text-2xl font-bold">2.4M</p>
                      </div>
                      <TrendingUp className="w-8 h-8 text-green-400" />
                    </div>
                  </div>
                  <div className="card-glass p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-400">{t('dashboard.engagementRate')}</p>
                        <p className="text-2xl font-bold">8.7%</p>
                      </div>
                      <Users className="w-8 h-8 text-blue-400" />
                    </div>
                  </div>
                  <div className="card-glass p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-400">{t('dashboard.contentGenerated')}</p>
                        <p className="text-2xl font-bold">156</p>
                      </div>
                      <Sparkles className="w-8 h-8 text-purple-400" />
                    </div>
                  </div>
                </div>

                {/* Chart Placeholder */}
                <div className="card-glass p-6">
                  <h3 className="text-lg font-semibold mb-4">{t('dashboard.performanceOverview')}</h3>
                  <div className="h-64 flex items-center justify-center text-gray-400">
                    <div className="text-center">
                      <BarChart3 className="w-12 h-12 mx-auto mb-2 opacity-50" />
                      <p>{t('dashboard.interactiveCharts')}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Activity Feed */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">{t('dashboard.recentActivity')}</h3>
                <div className="space-y-3 max-h-96 overflow-y-auto scroll-fade">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="card-glass p-4 flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full pulse-glow" />
                      <div className="flex-1">
                        <p className="text-sm">{t('dashboard.activityItem')}</p>
                        <p className="text-xs text-gray-400">2 {t('dashboard.timeAgo')}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-[#0d0d2b]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              {t('pricing.title')} <span className="gradient-text">{t('pricing.titleHighlight')}</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('pricing.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div 
                key={index}
                className={`card-glass p-8 relative ${
                  tier.popular ? 'border-2 border-purple-500 nebula-glow' : ''
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      {t('pricing.mostPopular')}
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{t(`pricing.${tier.key}.name`)}</h3>
                  <p className="text-gray-400 mb-4">{t(`pricing.${tier.key}.description`)}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold gradient-text">{t(`pricing.${tier.key}.price`)}</span>
                    <span className="text-gray-400">{t(`pricing.${tier.key}.period`)}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {(t.raw(`pricing.${tier.key}.features`) as string[]).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 rounded-xl font-medium transition-all ${
                  tier.popular 
                    ? 'btn-g' 
                    : 'bg-white/5 border border-white/20 hover:bg-white/10 text-white'
                }`}>
                  {t('navigation.getStarted')}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#050510] border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold gradient-text">Mia</span>
              </div>
              <p className="text-gray-400">
                {t('footer.tagline')}
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">{t('footer.product')}</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">{t('footer.links.features')}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t('footer.links.pricing')}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t('footer.links.api')}</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">{t('footer.company')}</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">{t('footer.links.about')}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t('footer.links.blog')}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t('footer.links.careers')}</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">{t('footer.support')}</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">{t('footer.links.helpCenter')}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t('footer.links.contact')}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">{t('footer.links.status')}</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Mia. {t('footer.copyright')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}