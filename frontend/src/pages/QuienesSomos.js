import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Ship, 
  Target, 
  Eye, 
  Heart, 
  Shield, 
  Clock, 
  Globe, 
  Users, 
  Leaf,
  Mail,
  Phone,
  ArrowLeft,
  Anchor,
  Award,
  MapPin
} from 'lucide-react';
import Footer from '@/components/Footer';

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

// Valores corporativos
const valores = [
  {
    icon: Shield,
    titulo: 'Confianza y Seguridad',
    descripcion: 'La base de 30 años de relaciones duraderas con nuestros clientes y socios.'
  },
  {
    icon: Clock,
    titulo: 'Eficiencia y Puntualidad',
    descripcion: 'Entregas a tiempo, cada vez. Comprometidos con la continuidad de sus operaciones.'
  },
  {
    icon: Globe,
    titulo: 'Alcance y Conexión',
    descripcion: 'Fortaleza en nuestra red de proveedores y puertos aliados en toda la región.'
  },
  {
    icon: Users,
    titulo: 'Trabajo en Equipo',
    descripcion: 'Colaboración interna y con socios para lograr resultados excepcionales.'
  },
  {
    icon: Leaf,
    titulo: 'Sostenibilidad',
    descripcion: 'Compromiso con prácticas responsables y el cuidado del medio ambiente marino.'
  },
  {
    icon: Heart,
    titulo: 'Servicio Personalizado',
    descripcion: 'Atención dedicada y soluciones adaptadas a las necesidades de cada cliente.'
  }
];

export default function QuienesSomos() {
  const [selectedEjecutivo, setSelectedEjecutivo] = useState(null);

  return (
    <div className="min-h-screen bg-background">
      {/* Header con navegación */}
      <div className="bg-primary text-white py-4 px-6 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Ship className="h-8 w-8" />
            <span className="text-2xl font-bold">Mar de Cortez</span>
          </Link>
          <div className="flex gap-4">
            <Link to="/">
              <Button variant="ghost" className="text-white hover:bg-white/10">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver al Inicio
              </Button>
            </Link>
            <Link to="/login">
              <Button className="bg-secondary hover:bg-secondary/80 text-secondary-foreground">
                Iniciar Sesión
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative py-24 px-4 overflow-hidden">
        {/* Imagen de fondo de oficina */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop')`,
          }}
        />
        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A]/90 to-[#1E293B]/85"></div>
        {/* Efectos decorativos */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6">
            <Award className="h-5 w-5 text-secondary" />
            <span className="text-white/90 font-medium">30 Años de Experiencia</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6" data-testid="about-heading">
            Quiénes Somos
          </h1>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-4xl mx-auto">
            Tu puerto seguro, en cualquier puerto.
          </p>
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
                <h2 className="text-3xl font-bold text-foreground">Nuestra Historia</h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Somos el <strong className="text-foreground">enlace estratégico y el proveedor de confianza</strong> para la navegación mercante en la región. Con <strong className="text-foreground">30 años de trayectoria ininterrumpida</strong>, nos hemos consolidado como el socio integral para los buques que arriban a nuestro puerto.
                </p>
                <p>
                  Ofrecemos soluciones logísticas, de abastecimiento y servicios auxiliares con los más altos estándares de <strong className="text-foreground">eficiencia, seguridad y puntualidad</strong>.
                </p>
                <p>
                  Nuestra fortaleza se basa en una extensa red de clientes y proveedores de primer nivel, y en acuerdos de colaboración con puertos hermanos. Esto nos permite garantizar un suministro rápido, competitivo y confiable, sin importar la escala o urgencia de la demanda.
                </p>
                <p className="text-lg font-medium text-foreground italic border-l-4 border-secondary pl-4 py-2 bg-secondary/5 rounded-r">
                  "Somos más que un proveedor; somos un partner comprometido con la continuidad operativa de sus viajes."
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
                <p className="text-sm">Años de experiencia</p>
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
                <h2 className="text-3xl font-bold text-foreground">Nuestra Misión</h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Nuestra misión es ser el <strong className="text-foreground">socio de abastecimiento y servicios preferido</strong> para las flotas mercantes, tanto en nuestro puerto base como en la red de puertos aliados.
                </p>
                <p className="font-medium text-foreground">Nos comprometemos a:</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    </div>
                    <span>Proveer soluciones logísticas integrales (avituallamiento, combustible, repuestos, provisiones) con calidad, puntualidad y competitividad.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    </div>
                    <span>Fortalecer y expandir continuamente nuestra red de colaboración con otros puertos y proveedores certificados.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    </div>
                    <span>Operar con los más altos estándares de seguridad, ética y sostenibilidad.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    </div>
                    <span>Anticiparnos a las necesidades del sector con un servicio personalizado y flexible.</span>
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
                <h2 className="text-3xl font-bold text-foreground">Nuestra Visión</h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Aspiramos a ser reconocidos, en los próximos cinco años, como la <strong className="text-foreground">red de abastecimiento marítimo más confiable y de mayor cobertura en la región</strong>.
                </p>
                <p>
                  Seremos el puente indispensable entre los buques mercantes y los recursos que necesitan en cualquier puerto de nuestra alianza.
                </p>
                <p>
                  <strong className="text-foreground">Lideraremos la innovación en servicios portuarios</strong>, siendo el referente en eficiencia, alcance y partnership estratégico para las navieras del mundo.
                </p>
              </div>
              <div className="mt-8 p-6 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl border border-primary/10">
                <p className="text-lg font-semibold text-foreground text-center italic">
                  "30 años conectando el mar con lo que necesitas"
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
            <h2 className="text-4xl font-bold text-white mb-4">Nuestros Valores</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Los principios que guían cada una de nuestras acciones y decisiones
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {valores.map((valor, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-4">
                    <valor.icon className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{valor.titulo}</h3>
                  <p className="text-white/70">{valor.descripcion}</p>
                </CardContent>
              </Card>
            ))}
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
            <h2 className="text-4xl font-bold text-foreground mb-4">Nuestro Equipo Ejecutivo</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Profesionales comprometidos con tu éxito y la excelencia en el servicio
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
                <h3 className="text-2xl font-bold mb-4">Contacto Corporativo</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-center gap-3">
                    <Mail className="h-5 w-5 text-secondary" />
                    <span className="text-lg">contacto@mardecortez.com</span>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <Phone className="h-5 w-5 text-secondary" />
                    <span className="text-lg">+52 622 123 4500</span>
                  </div>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  Dominio corporativo: @mardecortez.com
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <div className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">¿Listo para trabajar con nosotros?</h2>
          <p className="text-muted-foreground mb-8">
            Únete a las empresas que confían en Mar de Cortez para sus operaciones marítimas
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/">
              <Button size="lg" className="bg-secondary hover:bg-secondary/80">
                Solicitar Registro
              </Button>
            </Link>
            <Link to="/login">
              <Button size="lg" variant="outline">
                Iniciar Sesión
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
