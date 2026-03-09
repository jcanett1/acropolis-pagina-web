import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Ship, Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';
import { toast } from 'sonner';
import { useLanguage } from '@/i18n/LanguageContext';
import LanguageSelector from '@/components/LanguageSelector';

export default function Footer() {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const currentYear = new Date().getFullYear();

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    toast.success(t('landing.access.success'));
    setEmail('');
  };

  return (
    <footer className="bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white" data-testid="footer">
      <div className="max-w-7xl mx-auto px-5 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Section */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Ship className="w-10 h-10 text-blue-500" />
              <span className="text-2xl font-bold">{t('landing.hero.title')}</span>
            </div>
            <p className="text-white/70 leading-relaxed text-sm">
              {t('footer.description')}
            </p>
            <div className="flex gap-3 pt-2">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white/80 hover:bg-blue-500 hover:text-white hover:-translate-y-0.5 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white/80 hover:bg-blue-500 hover:text-white hover:-translate-y-0.5 transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white/80 hover:bg-blue-500 hover:text-white hover:-translate-y-0.5 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white/80 hover:bg-blue-500 hover:text-white hover:-translate-y-0.5 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold">{t('footer.quickLinks')}</h3>
            <nav className="flex flex-col gap-2.5">
              <Link to="/" className="text-white/70 text-sm hover:text-white hover:translate-x-1 transition-all duration-300">
                {t('footer.home')}
              </Link>
              <a href="#about" className="text-white/70 text-sm hover:text-white hover:translate-x-1 transition-all duration-300">
                {t('footer.aboutUs')}
              </a>
              <Link to="/servicios" className="text-white/70 text-sm hover:text-white hover:translate-x-1 transition-all duration-300">
                {t('footer.ourServices')}
              </Link>
            </nav>
            {/* Language Selector in Footer */}
            <div className="mt-4">
              <LanguageSelector variant="outline" className="w-full justify-start" />
            </div>
          </div>

          {/* Services with Images */}
          <div className="flex flex-col gap-4 lg:col-span-2">
            <h3 className="text-lg font-semibold">{t('footer.services')}</h3>
            <p className="text-blue-400 text-sm font-medium mb-2">
              {t('footer.communication247')}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              <Link to="/servicios" className="group relative rounded-lg overflow-hidden h-20">
                <img 
                  src="https://images.unsplash.com/photo-1650012048722-c81295ccbe79?w=200&h=150&fit=crop" 
                  alt="Provisions"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <span className="absolute bottom-2 left-2 text-white text-xs font-medium">
                  {t('footer.provisions')}
                </span>
              </Link>
              <Link to="/servicios" className="group relative rounded-lg overflow-hidden h-20">
                <img 
                  src="https://images.unsplash.com/photo-1536118253180-b885be68d20b?w=200&h=150&fit=crop" 
                  alt="Personal Articles"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <span className="absolute bottom-2 left-2 text-white text-xs font-medium">
                  {t('footer.personalArticles')}
                </span>
              </Link>
              <Link to="/servicios" className="group relative rounded-lg overflow-hidden h-20">
                <img 
                  src="https://images.unsplash.com/photo-1568615354554-8328579fe87e?w=200&h=150&fit=crop" 
                  alt="Navigation Equipment"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <span className="absolute bottom-2 left-2 text-white text-xs font-medium">
                  {t('footer.navigationEquipment')}
                </span>
              </Link>
              <Link to="/servicios" className="group relative rounded-lg overflow-hidden h-20">
                <img 
                  src="https://images.unsplash.com/photo-1764114441097-6a475eca993d?w=200&h=150&fit=crop" 
                  alt="Consumables"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <span className="absolute bottom-2 left-2 text-white text-xs font-medium">
                  {t('footer.consumables')}
                </span>
              </Link>
              <Link to="/servicios" className="group relative rounded-lg overflow-hidden h-20">
                <img 
                  src="https://images.unsplash.com/photo-1651902387099-787f4a62a3e3?w=200&h=150&fit=crop" 
                  alt="Cabin"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <span className="absolute bottom-2 left-2 text-white text-xs font-medium">
                  {t('footer.cabin')}
                </span>
              </Link>
              <Link to="/servicios" className="group relative rounded-lg overflow-hidden h-20">
                <img 
                  src="https://images.unsplash.com/photo-1758716147082-c2d332b1aed9?w=200&h=150&fit=crop" 
                  alt="Rescue Equipment"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <span className="absolute bottom-2 left-2 text-white text-xs font-medium">
                  {t('footer.rescueEquipment')}
                </span>
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold">{t('footer.contactUs')}</h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3 text-white/70">
                <MapPin className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm">Alfonso Iberri 302-336<br />Centro, 85400 Guaymas, Son.<br />México</span>
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <Phone className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <a href="tel:+526221234500" className="text-sm hover:text-blue-500 transition-colors duration-300">
                  +52 (622) 123-4500
                </a>
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <Mail className="w-5 h-5 text-blue-500 flex-shrink-0" />
                <div className="flex flex-col">
                  <a href="mailto:acropolis@hotmail.com" className="text-sm hover:text-blue-500 transition-colors duration-300">
                    acropolis@hotmail.com
                  </a>
                  <a href="mailto:sales@gscacropolis.com" className="text-sm hover:text-blue-500 transition-colors duration-300">
                    sales@gscacropolis.com
                  </a>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="pt-4">
              <h4 className="text-sm font-medium mb-3">{t('footer.newsletter')}</h4>
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <input
                  type="email"
                  placeholder={t('footer.yourEmail')}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white text-sm placeholder:text-white/50 focus:outline-none focus:border-blue-500 transition-all duration-300"
                  data-testid="newsletter-input"
                />
                <button
                  type="submit"
                  className="w-12 h-12 bg-blue-500 border-none rounded-lg text-white cursor-pointer flex items-center justify-center hover:bg-blue-600 hover:scale-105 transition-all duration-300"
                  data-testid="newsletter-submit"
                >
                  <Mail className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-black/20">
        <div className="max-w-7xl mx-auto px-5 py-5 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <p className="text-white/60 text-sm">
            © {currentYear} {t('landing.hero.title')}. {t('footer.rights')}
          </p>
          <div className="flex gap-6 justify-center">
            <a href="#" className="text-white/60 text-sm hover:text-white transition-colors duration-300">
              {t('footer.privacyPolicy')}
            </a>
            <a href="#" className="text-white/60 text-sm hover:text-white transition-colors duration-300">
              {t('footer.termsConditions')}
            </a>
            <a href="#" className="text-white/60 text-sm hover:text-white transition-colors duration-300">
              {t('footer.cookies')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
