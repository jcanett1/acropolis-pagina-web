import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Ship, 
  Package, 
  TrendingUp, 
  Users, 
  Info,
  Apple,
  Wine,
  Compass,
  Wrench,
  Home,
  LifeBuoy,
  ChevronRight,
  Star,
  Quote,
  Send,
  Phone,
  Mail,
  MapPin,
  Clock
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { API } from '@/App';
import Footer from '@/components/Footer';
import LanguageSelector from '@/components/LanguageSelector';
import { useLanguage } from '@/i18n/LanguageContext';

// Imágenes de barcos mercantes y puertos
const heroImages = [
  'https://images.unsplash.com/photo-1724597500306-a4cbb7d1324e',
  'https://images.unsplash.com/photo-1703977883249-d959f2b0c1ae',
  'https://images.unsplash.com/photo-1637464019106-2789e949c28a',
  'https://images.unsplash.com/photo-1761910502116-9c1c0fb3620b',
  'https://images.unsplash.com/photo-1703226741497-6de4f67c6e11',
  'https://images.unsplash.com/photo-1753483395880-46dc1c2ece54',
];

// Service categories with icons
const serviceCategories = [
  { key: 'provisions', icon: Apple, color: 'bg-green-500' },
  { key: 'personal', icon: Wine, color: 'bg-purple-500' },
  { key: 'navigation', icon: Compass, color: 'bg-blue-500' },
  { key: 'consumables', icon: Wrench, color: 'bg-orange-500' },
  { key: 'cabin', icon: Home, color: 'bg-teal-500' },
  { key: 'rescue', icon: LifeBuoy, color: 'bg-red-500' },
];

export default function Landing() {
  const { t } = useLanguage();
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Carrusel automático de imágenes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${API}/contact-messages`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contactForm)
      });

      if (!response.ok) {
        throw new Error('Error al enviar mensaje');
      }

      toast.success(t('landing.contact.success'));
      setContactForm({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      toast.error(t('landing.contact.error'));
    } finally {
      setLoading(false);
    }
  };

  // Get service items as array
  const getServiceItems = (key) => {
    const items = t(`landing.services.${key}.items`);
    return Array.isArray(items) ? items : [];
  };

  // Get testimonials
  const getTestimonials = () => {
    const reviews = t('landing.testimonials.reviews');
    return Array.isArray(reviews) ? reviews : [];
  };

  return (
    <div className="min-h-screen">
      {/* Language Selector - Fixed position */}
      <div className="fixed top-4 right-4 z-50">
        <LanguageSelector variant="ghost" className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border border-white/20" />
      </div>
      
      {/* Hero Section with Image Carousel */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Images Container */}
        {heroImages.map((image, index) => (
          <div
            key={index}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: index === currentImageIndex ? 1 : 0,
              zIndex: index === currentImageIndex ? 1 : 0,
            }}
          />
        ))}
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A]/85 to-[#1E293B]/75 z-10"></div>
        
        {/* Content */}
        <div className="relative z-20 text-center px-4 max-w-5xl">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6">
            <Ship className="h-5 w-5 text-secondary" />
            <span className="text-white/90 font-medium">{t('landing.hero.badge')}</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-in slide-in-from-bottom-4 duration-700" data-testid="hero-heading">
            {t('landing.hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed animate-in slide-in-from-bottom-4 duration-700 delay-150" data-testid="hero-description">
            {t('landing.hero.subtitle')}
          </p>
          <div className="flex gap-4 justify-center flex-wrap animate-in slide-in-from-bottom-4 duration-700 delay-300">
            <Link to="/quienes-somos">
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold" data-testid="about-btn">
                <Info className="mr-2 h-5 w-5" />
                {t('landing.hero.aboutBtn')}
              </Button>
            </Link>
            <a href="#services">
              <Button size="lg" className="bg-secondary hover:bg-secondary/80 text-secondary-foreground px-8 py-6 text-lg font-semibold shadow-lg" data-testid="services-btn">
                <Package className="mr-2 h-5 w-5" />
                {t('landing.hero.servicesBtn')}
              </Button>
            </a>
            <a href="#contact">
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold" data-testid="contact-btn">
                <Send className="mr-2 h-5 w-5" />
                {t('landing.hero.contactBtn')}
              </Button>
            </a>
          </div>
          
          {/* Image Indicators */}
          <div className="flex gap-2 justify-center mt-12">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentImageIndex 
                    ? 'bg-white w-8' 
                    : 'bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div id="services" className="py-24 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <span>{t('landing.services.breadcrumb')}</span>
          </div>

          {/* Services Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="services-heading">
              {t('landing.services.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              {t('landing.services.subtitle')}
            </p>
            <a href="#contact">
              <Button size="lg" className="bg-secondary hover:bg-secondary/80">
                {t('landing.hero.contactBtn')}
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>

          {/* What We Offer */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">{t('landing.services.whatWeOffer')}</h3>
            <p className="text-2xl font-semibold text-primary mb-2">{t('landing.services.empowerTitle')}</p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('landing.services.empowerSubtitle')}
            </p>
          </div>

          {/* Service Categories Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((service) => (
              <Card key={service.key} className="card-hover overflow-hidden group" data-testid={`service-${service.key}`}>
                <CardContent className="p-0">
                  <div className={`${service.color} p-6 flex items-center gap-4 transition-all group-hover:scale-105`}>
                    <div className="w-14 h-14 bg-white/20 rounded-lg flex items-center justify-center">
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-white">{t(`landing.services.${service.key}.title`)}</h4>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-2">
                      {getServiceItems(service.key).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                          <ChevronRight className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground" data-testid="features-heading">
            {t('landing.features.title')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="card-hover" data-testid="feature-cloud">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Ship className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{t('landing.features.cloud.title')}</h3>
                <p className="text-muted-foreground">
                  {t('landing.features.cloud.desc')}
                </p>
              </CardContent>
            </Card>
            <Card className="card-hover" data-testid="feature-management">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Package className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{t('landing.features.management.title')}</h3>
                <p className="text-muted-foreground">
                  {t('landing.features.management.desc')}
                </p>
              </CardContent>
            </Card>
            <Card className="card-hover" data-testid="feature-tracking">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{t('landing.features.tracking.title')}</h3>
                <p className="text-muted-foreground">
                  {t('landing.features.tracking.desc')}
                </p>
              </CardContent>
            </Card>
            <Card className="card-hover" data-testid="feature-suppliers">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{t('landing.features.suppliers.title')}</h3>
                <p className="text-muted-foreground">
                  {t('landing.features.suppliers.desc')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-24 px-4 ocean-gradient">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" data-testid="testimonials-heading">
              {t('landing.testimonials.title')}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {getTestimonials().map((review, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20" data-testid={`testimonial-${index}`}>
                <CardContent className="p-6">
                  <Quote className="w-10 h-10 text-secondary/50 mb-4" />
                  <p className="text-white/90 mb-6 italic leading-relaxed">
                    "{review.text}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                      <span className="text-xl font-bold text-white">{review.name?.charAt(0) || 'U'}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-white">{review.name}</p>
                      <p className="text-white/70 text-sm">{review.company}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mt-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="py-24 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-4" data-testid="contact-heading">
                {t('landing.contact.title')}
              </h2>
              <h3 className="text-2xl font-semibold text-primary mb-6">
                {t('landing.contact.subtitle')}
              </h3>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                {t('landing.contact.description')}
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="font-semibold">{t('landing.contact.availability')}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="text-muted-foreground">Alfonso Iberri 302-336</p>
                    <p className="text-muted-foreground">Centro, 85400 Guaymas, Son.</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <a href="tel:+526221234500" className="hover:text-secondary transition-colors">
                      +52 (622) 123-4500
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <a href="mailto:contacto@mardecortez.com" className="hover:text-secondary transition-colors">
                      contacto@mardecortez.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="shadow-2xl" data-testid="contact-form">
              <CardContent className="p-8">
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">{t('landing.contact.name')}</Label>
                    <Input
                      id="name"
                      placeholder={t('landing.contact.namePlaceholder')}
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      required
                      data-testid="contact-name-input"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">{t('landing.contact.email')}</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder={t('landing.contact.emailPlaceholder')}
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        required
                        data-testid="contact-email-input"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">{t('landing.contact.phone')}</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder={t('landing.contact.phonePlaceholder')}
                        value={contactForm.phone}
                        onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                        data-testid="contact-phone-input"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">{t('landing.contact.message')}</Label>
                    <Textarea
                      id="message"
                      placeholder={t('landing.contact.messagePlaceholder')}
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      required
                      rows={5}
                      data-testid="contact-message-input"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full" 
                    disabled={loading}
                    data-testid="submit-contact-btn"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    {loading ? t('landing.contact.submitting') : t('landing.contact.submit')}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
