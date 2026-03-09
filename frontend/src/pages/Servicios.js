import { Link } from 'react-router-dom';
import { 
  Ship, 
  Apple,
  Wine,
  Compass,
  Wrench,
  Home,
  LifeBuoy,
  ChevronRight,
  Star,
  Quote,
  ArrowLeft,
  Send
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Footer from '@/components/Footer';
import LanguageSelector from '@/components/LanguageSelector';
import { useLanguage } from '@/i18n/LanguageContext';

// Service categories with icons and images
const serviceCategories = [
  { 
    key: 'provisions', 
    icon: Apple, 
    color: 'bg-green-500',
    image: 'https://images.unsplash.com/photo-1650012048722-c81295ccbe79?w=400&h=200&fit=crop'
  },
  { 
    key: 'personal', 
    icon: Wine, 
    color: 'bg-purple-500',
    image: 'https://images.unsplash.com/photo-1536118253180-b885be68d20b?w=400&h=200&fit=crop'
  },
  { 
    key: 'navigation', 
    icon: Compass, 
    color: 'bg-blue-500',
    image: 'https://images.unsplash.com/photo-1568615354554-8328579fe87e?w=400&h=200&fit=crop'
  },
  { 
    key: 'consumables', 
    icon: Wrench, 
    color: 'bg-orange-500',
    image: 'https://images.unsplash.com/photo-1764114441097-6a475eca993d?w=400&h=200&fit=crop'
  },
  { 
    key: 'cabin', 
    icon: Home, 
    color: 'bg-teal-500',
    image: 'https://images.unsplash.com/photo-1651902387099-787f4a62a3e3?w=400&h=200&fit=crop'
  },
  { 
    key: 'rescue', 
    icon: LifeBuoy, 
    color: 'bg-red-500',
    image: 'https://images.unsplash.com/photo-1758716147082-c2d332b1aed9?w=400&h=200&fit=crop'
  },
];

export default function Servicios() {
  const { t } = useLanguage();

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
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-white py-4 px-6 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Ship className="h-8 w-8" />
            <span className="text-2xl font-bold">{t('landing.hero.title')}</span>
          </Link>
          <div className="flex gap-4 items-center">
            <LanguageSelector variant="ghost" className="text-white hover:bg-white/10" />
            <Link to="/">
              <Button variant="ghost" className="text-white hover:bg-white/10">
                <ArrowLeft className="mr-2 h-4 w-4" />
                {t('common.back')}
              </Button>
            </Link>
            <a href="#contact-services">
              <Button className="bg-secondary hover:bg-secondary/80 text-secondary-foreground">
                <Send className="mr-2 h-4 w-4" />
                {t('landing.hero.contactBtn')}
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Hero Section for Services */}
      <div className="relative py-24 px-4 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1920&h=1080&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A]/90 to-[#1E293B]/85"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6">
            <Ship className="h-5 w-5 text-secondary" />
            <span className="text-white/90 font-medium">{t('landing.services.breadcrumb')}</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6" data-testid="services-page-heading">
            {t('landing.services.title')}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-4xl mx-auto mb-8">
            {t('landing.services.subtitle')}
          </p>
          <a href="#contact-services">
            <Button size="lg" className="bg-secondary hover:bg-secondary/80 text-secondary-foreground">
              {t('landing.hero.contactBtn')}
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      </div>

      {/* What We Offer Section */}
      <div className="py-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{t('landing.services.whatWeOffer')}</h2>
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
                  {/* Image Header */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={service.image}
                      alt={t(`landing.services.${service.key}.title`)}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3">
                      <div className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center`}>
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-white">{t(`landing.services.${service.key}.title`)}</h4>
                    </div>
                  </div>
                  {/* Items List */}
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

      {/* Contact CTA Section */}
      <div id="contact-services" className="py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">{t('landing.contact.subtitle')}</h2>
          <p className="text-muted-foreground mb-8 text-lg">
            {t('landing.contact.description')}
          </p>
          <p className="text-primary font-semibold mb-8">
            {t('landing.contact.availability')}
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/#contact">
              <Button size="lg" className="bg-secondary hover:bg-secondary/80">
                <Send className="mr-2 h-5 w-5" />
                {t('landing.contact.submit')}
              </Button>
            </Link>
            <Link to="/">
              <Button size="lg" variant="outline">
                {t('common.back')}
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
