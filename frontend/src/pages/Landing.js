import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Ship, 
  Package, 
  Users, 
  Target,
  Eye,
  Heart,
  Shield,
  Clock,
  Globe,
  Leaf,
  Anchor,
  Award,
  Send,
  Phone,
  Mail,
  MapPin
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

// URL de la imagen de certificaciones
const CERTIFICATIONS_IMAGE = 'https://customer-assets.emergentagent.com/job_seaprocure/artifacts/w84djjvg_image.png';

// Datos de los ejecutivos
const ejecutivos = [
  {
    id: 1,
    nombre: 'Carlos Mendoza García',
    puesto: 'Ejecutivo de Proyectos',
    email: 'carlos.mendoza@mardecortez.com',
    telefono: '+52 622 123 4501',
    foto: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face'
  },
  {
    id: 2,
    nombre: 'María Elena Rodríguez',
    puesto: 'Ejecutiva de Proyectos',
    email: 'maria.rodriguez@mardecortez.com',
    telefono: '+52 622 123 4502',
    foto: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face'
  },
  {
    id: 3,
    nombre: 'Roberto Sánchez López',
    puesto: 'Ejecutivo de Proyectos',
    email: 'roberto.sanchez@mardecortez.com',
    telefono: '+52 622 123 4503',
    foto: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face'
  },
  {
    id: 4,
    nombre: 'Ana Patricia Flores',
    puesto: 'Ejecutiva de Proyectos',
    email: 'ana.flores@mardecortez.com',
    telefono: '+52 622 123 4504',
    foto: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face'
  },
  {
    id: 5,
    nombre: 'Fernando Ortiz Ramírez',
    puesto: 'Ejecutivo de Proyectos',
    email: 'fernando.ortiz@mardecortez.com',
    telefono: '+52 622 123 4505',
    foto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face'
  },
  {
    id: 6,
    nombre: 'Gabriela Torres Vega',
    puesto: 'Ejecutiva de Proyectos',
    email: 'gabriela.torres@mardecortez.com',
    telefono: '+52 622 123 4506',
    foto: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=400&fit=crop&crop=face'
  }
];

// Valores corporativos - keys for translation
const valoresKeys = [
  { icon: Shield, key: 'trust' },
  { icon: Clock, key: 'efficiency' },
  { icon: Globe, key: 'reach' },
  { icon: Users, key: 'teamwork' },
  { icon: Leaf, key: 'sustainability' },
  { icon: Heart, key: 'service' }
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
  const [selectedEjecutivo, setSelectedEjecutivo] = useState(null);

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
            <Link to="/servicios">
              <Button size="lg" className="bg-secondary hover:bg-secondary/80 text-secondary-foreground px-8 py-6 text-lg font-semibold shadow-lg" data-testid="services-btn">
                <Package className="mr-2 h-5 w-5" />
                {t('landing.hero.servicesBtn')}
              </Button>
            </Link>
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

      {/* Quiénes Somos - Historia */}
      <div className="py-20 px-4 bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <Anchor className="h-6 w-6 text-secondary" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">{t('about.history.title')}</h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>{t('about.history.p1')}</p>
                <p>{t('about.history.p2')}</p>
                <p>{t('about.history.p3')}</p>
                <p className="text-lg font-medium text-foreground italic border-l-4 border-secondary pl-4 py-2 bg-secondary/5 rounded-r">
                  {t('about.history.quote')}
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&h=500&fit=crop" 
                alt="Puerto marítimo" 
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-secondary text-secondary-foreground p-6 rounded-xl shadow-xl">
                <p className="text-4xl font-bold">30+</p>
                <p className="text-sm">{t('footer.yearsExperience')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Misión */}
      <div className="py-20 px-4 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img 
                src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=600&h=500&fit=crop" 
                alt="Operaciones portuarias" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">{t('about.mission.title')}</h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>{t('about.mission.intro')}</p>
                <p className="font-medium text-foreground">{t('about.mission.commitment')}</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    </div>
                    <span>{t('about.mission.item1')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    </div>
                    <span>{t('about.mission.item2')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    </div>
                    <span>{t('about.mission.item3')}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    </div>
                    <span>{t('about.mission.item4')}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Visión */}
      <div className="py-20 px-4 bg-background">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <Eye className="h-6 w-6 text-secondary" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">{t('about.vision.title')}</h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>{t('about.vision.p1')}</p>
                <p>{t('about.vision.p2')}</p>
                <p>{t('about.vision.p3')}</p>
              </div>
              <div className="mt-8 p-6 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl border border-primary/10">
                <p className="text-lg font-semibold text-foreground text-center italic">
                  "{t('about.hero.badge')}"
                </p>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=600&h=500&fit=crop" 
                alt="Visión futura" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Valores */}
      <div className="py-20 px-4 ocean-gradient">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                <Heart className="h-6 w-6 text-white" />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">{t('about.values.title')}</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              {t('about.values.subtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {valoresKeys.map((valor, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
                    <valor.icon className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{t(`about.values.${valor.key}.title`)}</h3>
                  <p className="text-white/70">{t(`about.values.${valor.key}.desc`)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Mexican Ports Section */}
      <div className="py-24 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="ports-heading">
              {t('landing.ports.title')}
            </h2>
            <p className="text-xl text-muted-foreground">
              {t('landing.ports.subtitle')}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* Guaymas */}
            <Card className="card-hover overflow-hidden group" data-testid="port-guaymas">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1770325529145-28d4be2866f4?w=400&h=300&fit=crop" 
                  alt="Guaymas Port"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">Guaymas</h3>
                  <p className="text-white/80 text-sm">Sonora</p>
                </div>
              </div>
            </Card>
            
            {/* Topolobampo */}
            <Card className="card-hover overflow-hidden group" data-testid="port-topolobampo">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1769031929621-8f7989213604?w=400&h=300&fit=crop" 
                  alt="Topolobampo Port"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">Topolobampo</h3>
                  <p className="text-white/80 text-sm">Sinaloa</p>
                </div>
              </div>
            </Card>
            
            {/* Mazatlán */}
            <Card className="card-hover overflow-hidden group" data-testid="port-mazatlan">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1594485803100-06e659d20b17?w=400&h=300&fit=crop" 
                  alt="Mazatlán Port"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">Mazatlán</h3>
                  <p className="text-white/80 text-sm">Sinaloa</p>
                </div>
              </div>
            </Card>
            
            {/* Rosarito */}
            <Card className="card-hover overflow-hidden group" data-testid="port-rosarito">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1578982300147-69917167e0bb?w=400&h=300&fit=crop" 
                  alt="Rosarito Port"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">Rosarito</h3>
                  <p className="text-white/80 text-sm">Baja California</p>
                </div>
              </div>
            </Card>
            
            {/* Ensenada */}
            <Card className="card-hover overflow-hidden group" data-testid="port-ensenada">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1701887370883-f3865600c94b?w=400&h=300&fit=crop" 
                  alt="Ensenada Port"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">Ensenada</h3>
                  <p className="text-white/80 text-sm">Baja California</p>
                </div>
              </div>
            </Card>
            
            {/* Santa Rosalía */}
            <Card className="card-hover overflow-hidden group" data-testid="port-santa-rosalia">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/5648855/pexels-photo-5648855.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop" 
                  alt="Santa Rosalía Port"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">Santa Rosalía</h3>
                  <p className="text-white/80 text-sm">Baja California Sur</p>
                </div>
              </div>
            </Card>
            
            {/* La Paz */}
            <Card className="card-hover overflow-hidden group" data-testid="port-la-paz">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/36284328/pexels-photo-36284328.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop" 
                  alt="La Paz Port"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">La Paz</h3>
                  <p className="text-white/80 text-sm">Baja California Sur</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Ejecutivos */}
      <div className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Users className="h-6 w-6 text-primary" />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-4">{t('about.team.title')}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('about.team.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ejecutivos.map((ejecutivo) => (
              <Card 
                key={ejecutivo.id} 
                className="overflow-hidden card-hover cursor-pointer group"
                onClick={() => setSelectedEjecutivo(selectedEjecutivo === ejecutivo.id ? null : ejecutivo.id)}
                data-testid={`ejecutivo-${ejecutivo.id}`}
              >
                <div className="relative">
                  <img 
                    src={ejecutivo.foto} 
                    alt={ejecutivo.nombre}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-bold">{ejecutivo.nombre}</h3>
                    <p className="text-white/80">{ejecutivo.puesto}</p>
                  </div>
                </div>
                
                <CardContent className={`p-0 overflow-hidden transition-all duration-300 ${selectedEjecutivo === ejecutivo.id ? 'max-h-40' : 'max-h-0'}`}>
                  <div className="p-4 space-y-3 bg-muted/50">
                    <div className="flex items-center gap-3">
                      <Mail className="h-4 w-4 text-secondary" />
                      <a href={`mailto:${ejecutivo.email}`} className="text-sm hover:text-secondary transition-colors">
                        {ejecutivo.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-4 w-4 text-secondary" />
                      <a href={`tel:${ejecutivo.telefono}`} className="text-sm hover:text-secondary transition-colors">
                        {ejecutivo.telefono}
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Información de contacto corporativo */}
          <div className="mt-16 text-center">
            <Card className="max-w-xl mx-auto bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/10">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">{t('about.contact.title')}</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-center gap-3">
                    <Mail className="h-5 w-5 text-secondary" />
                    <span className="text-lg">contacto@mardecortez.com</span>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <Phone className="h-5 w-5 text-secondary" />
                    <span className="text-lg">+52 622 123 4500</span>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <MapPin className="h-5 w-5 text-secondary" />
                    <span className="text-lg">Alfonso Iberri 302-336, Centro, 85400 Guaymas, Son.</span>
                  </div>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  {t('about.contact.domain')}
                </p>
              </CardContent>
            </Card>

            {/* Mapa de Google Maps */}
            <div className="mt-8 max-w-4xl mx-auto">
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1744.0!2d-110.884652!3d27.925739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDU1JzMyLjciTiAxMTDCsDUzJzA0LjciVw!5e0!3m2!1ses!2smx!4v1704067200000!5m2!1ses!2smx"
                      width="100%"
                      height="400"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Ubicación Mar de Cortez - Guaymas, Sonora"
                      className="w-full"
                    />
                    <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-lg max-w-xs">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-sm">{t('landing.hero.title')}</p>
                          <p className="text-xs text-muted-foreground">
                            Alfonso Iberri 302-336<br />
                            Centro, 85400 Guaymas, Son.
                          </p>
                          <a 
                            href="https://www.google.com/maps/search/?api=1&query=27.925739,-110.884652"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-secondary hover:underline mt-1 inline-block"
                          >
                            {t('about.contact.viewMap')}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Certifications Section */}
      <div className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
              <Award className="h-6 w-6 text-secondary" />
            </div>
            <h2 className="text-3xl font-bold">{t('about.certifications')}</h2>
          </div>
          <Card className="overflow-hidden">
            <CardContent className="p-8">
              <img 
                src={CERTIFICATIONS_IMAGE}
                alt={t('about.certifications')}
                className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
                data-testid="certifications-image"
              />
            </CardContent>
          </Card>
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
