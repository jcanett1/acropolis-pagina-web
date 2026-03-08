// Traducciones para la aplicación Mar de Cortez
export const translations = {
  en: {
    // Navigation & Common
    nav: {
      home: 'Home',
      aboutUs: 'About Us',
      login: 'Login',
      logout: 'Logout',
      register: 'Register',
      dashboard: 'Dashboard',
      requests: 'Requests',
      users: 'Users',
      products: 'Products',
      orders: 'Orders',
      categories: 'Categories',
      tracking: 'Tracking',
      createOrder: 'Create Order',
      language: 'Language'
    },
    // Landing Page
    landing: {
      hero: {
        badge: '30 Years of Excellence in Maritime Services',
        title: 'Sea of Cortez',
        subtitle: 'Your trusted partner for maritime fleet supply. Total reliability, unmatched efficiency.',
        tagline: 'Your safe harbor, in any port.',
        loginBtn: 'Login',
        aboutBtn: 'About Us'
      },
      features: {
        title: 'Key Features',
        cloud: {
          title: 'Cloud Based',
          desc: 'Access your information from any device with internet.'
        },
        management: {
          title: 'Complete Management',
          desc: 'Manage orders, products and suppliers from one place.'
        },
        tracking: {
          title: 'Real-Time Tracking',
          desc: 'Track the status of your orders at every stage of the process.'
        },
        suppliers: {
          title: 'Supplier Network',
          desc: 'Connect with multiple suppliers and manage business relationships.'
        }
      },
      cta: {
        title: 'Ready to transform your purchasing management?',
        subtitle: 'Complete the form and our team will contact you.'
      },
      registration: {
        title: 'Registration Request',
        subtitle: 'Complete your details and we will contact you',
        boatName: 'Boat Name',
        boatPlaceholder: 'Ex: Neptune III',
        captainName: 'Captain Name',
        captainPlaceholder: 'Ex: John Smith',
        phone: 'Phone',
        phonePlaceholder: 'Ex: +1 123 456 7890',
        email: 'Email',
        emailPlaceholder: 'your@email.com',
        submit: 'Submit Request',
        submitting: 'Submitting...'
      },
      access: {
        title: 'Request Access',
        subtitle: 'Join our network of clients and suppliers',
        name: 'Full Name',
        boatName: 'Boat/Company Name',
        email: 'Email',
        phone: 'Phone',
        submit: 'Submit Request',
        success: 'Request submitted successfully! We will contact you soon.',
        error: 'Error submitting request'
      }
    },
    // About Us Page
    about: {
      hero: {
        badge: '30 Years of Experience',
        title: 'About Us',
        tagline: 'Your safe harbor, in any port.'
      },
      history: {
        title: 'Our History',
        p1: 'We are the strategic link and trusted provider for merchant shipping in the region. With 30 years of uninterrupted trajectory, we have established ourselves as the integral partner for vessels arriving at our port.',
        p2: 'We offer logistics solutions, supply and auxiliary services with the highest standards of efficiency, safety and punctuality.',
        p3: 'Our strength is based on an extensive network of first-class clients and suppliers, and collaboration agreements with sister ports. This allows us to guarantee fast, competitive and reliable supply, regardless of the scale or urgency of demand.',
        quote: '"We are more than a supplier; we are a partner committed to the operational continuity of your voyages."'
      },
      mission: {
        title: 'Our Mission',
        intro: 'Our mission is to be the preferred supply and services partner for merchant fleets, both at our home port and across our network of allied ports.',
        commitment: 'We commit to:',
        item1: 'Provide comprehensive logistics solutions (provisioning, fuel, spare parts, supplies) with quality, punctuality and competitiveness.',
        item2: 'Strengthen and continuously expand our collaboration network with other ports and certified suppliers.',
        item3: 'Operate with the highest standards of safety, ethics and sustainability.',
        item4: 'Anticipate industry needs with personalized and flexible service.'
      },
      vision: {
        title: 'Our Vision',
        p1: 'We aspire to be recognized, within the next five years, as the most reliable and comprehensive maritime supply network in the region.',
        p2: 'We will be the indispensable bridge between merchant vessels and the resources they need at any port in our alliance.',
        p3: 'We will lead innovation in port services, being the benchmark in efficiency, reach and strategic partnership for shipping companies worldwide.'
      },
      values: {
        title: 'Our Values',
        subtitle: 'The principles that guide each of our actions and decisions',
        trust: { title: 'Trust & Safety', desc: 'The foundation of 30 years of lasting relationships with our clients and partners.' },
        efficiency: { title: 'Efficiency & Punctuality', desc: 'On-time deliveries, every time. Committed to your operational continuity.' },
        reach: { title: 'Reach & Connection', desc: 'Strength in our network of suppliers and allied ports throughout the region.' },
        teamwork: { title: 'Teamwork', desc: 'Internal and partner collaboration to achieve exceptional results.' },
        sustainability: { title: 'Sustainability', desc: 'Commitment to responsible practices and marine environmental care.' },
        service: { title: 'Personalized Service', desc: 'Dedicated attention and solutions tailored to each client\'s needs.' }
      },
      team: {
        title: 'Our Executive Team',
        subtitle: 'Professionals committed to your success and service excellence'
      },
      contact: {
        title: 'Corporate Contact',
        domain: 'Corporate domain: @seaofcortez.com',
        viewMap: 'View on Google Maps →'
      },
      cta: {
        title: 'Ready to work with us?',
        subtitle: 'Join the companies that trust Sea of Cortez for their maritime operations',
        register: 'Request Registration',
        login: 'Login'
      },
      certifications: 'Our Certifications'
    },
    // Admin Dashboard
    admin: {
      title: 'Administration Panel',
      subtitle: 'Manage the entire Sea of Cortez system',
      stats: {
        pendingRequests: 'Pending Requests',
        totalUsers: 'Total Users',
        products: 'Products',
        orders: 'Orders',
        clients: 'clients',
        suppliers: 'suppliers'
      },
      revenue: {
        title: 'Total Revenue',
        subtitle: 'From completed orders'
      },
      charts: {
        ordersByStatus: 'Orders by Status',
        ordersByStatusDesc: 'Current distribution of orders',
        productsByCategory: 'Products by Category',
        productsByCategoryDesc: 'Number of products in each category',
        monthlyTrend: 'Monthly Trend',
        monthlyTrendDesc: 'Orders and revenue from recent months',
        topSuppliers: 'Top Suppliers',
        topSuppliersDesc: 'Suppliers with most products',
        recentOrders: 'Recent Orders',
        recentOrdersDesc: 'Last 10 orders in the system',
        revenueSummary: 'Revenue Summary by Status',
        revenueSummaryDesc: 'Revenue breakdown by order status'
      },
      status: {
        pending: 'Pending',
        received: 'Received',
        inProcess: 'In Process',
        completed: 'Completed',
        cancelled: 'Cancelled'
      }
    },
    // Client Portal
    client: {
      home: {
        title: 'Welcome',
        subtitle: 'Manage your maritime orders',
        quickActions: 'Quick Actions',
        createOrder: 'Create Order',
        createOrderDesc: 'Start a new purchase order',
        tracking: 'Tracking',
        trackingDesc: 'Monitor order status',
        catalog: 'Catalog',
        catalogDesc: 'Browse available products',
        recentOrders: 'Recent Orders',
        recentOrdersDesc: 'Your last 5 orders',
        noOrders: 'No orders yet. Create your first order!',
        waitingSupplier: 'Waiting for supplier',
        toQuote: 'To quote'
      },
      tracking: {
        title: 'Order Tracking',
        subtitle: 'Monitor the status of your purchases',
        search: 'Search by order number or supplier...',
        yourOrders: 'Your Orders',
        noOrdersFound: 'No orders found',
        noOrdersYet: 'No orders yet',
        orderNumber: 'Order Number',
        supplier: 'Supplier',
        total: 'Total',
        status: 'Status',
        created: 'Created',
        responsible: 'Responsible',
        notes: 'Notes',
        products: 'Products',
        custom: 'Custom',
        waitingSupplier: 'Waiting for supplier',
        toQuote: 'To quote',
        pendingAssignment: 'Your order is pending assignment. A supplier will take it soon and send you a quote.'
      }
    },
    // Supplier Portal
    supplier: {
      orders: {
        title: 'Manage Orders',
        subtitle: 'View and update order status',
        received: 'Orders Received',
        noOrders: 'No orders yet',
        client: 'Client',
        myOrder: 'My order',
        unassigned: 'Unassigned',
        toDefine: 'To define',
        items: 'items',
        responsible: 'Responsible',
        clientNotes: 'Client notes',
        takeOrder: 'Take Order',
        updateStatus: 'Update Status',
        uploadQuotation: 'Upload Quotation',
        updatePrices: 'Update Prices',
        takeOrderTitle: 'Take Order and Add Prices',
        updatePricesTitle: 'Update Prices',
        orderStatus: 'Order Status',
        responsibleOptional: 'Responsible (Optional)',
        productPrices: 'Product Prices',
        productPricesDesc: 'Add the unit price for each product. The client will see these prices.',
        unitPrice: 'Unit Price',
        estimatedTotal: 'Estimated Total',
        saveChanges: 'Save Changes',
        takeAndSend: 'Take Order and Send Quote'
      }
    },
    // Footer
    footer: {
      description: 'Your trusted partner for maritime fleet supply. Total reliability, unmatched efficiency.',
      quickLinks: 'Quick Links',
      home: 'Home',
      aboutUs: 'About Us',
      features: 'Features',
      contact: 'Contact',
      login: 'Login',
      contactUs: 'Contact Us',
      rights: 'All rights reserved.',
      certifications: 'Certifications',
      services: 'Services',
      orderManagement: 'Order Management',
      realTimeTracking: 'Real-Time Tracking',
      supplierNetwork: 'Supplier Network',
      analyticsReports: 'Analytics & Reports',
      support247: '24/7 Technical Support',
      newsletter: 'Subscribe to our newsletter',
      yourEmail: 'Your email',
      newsletterSuccess: 'Thanks for subscribing! We will send news to:'
    },
    // Common
    common: {
      loading: 'Loading...',
      error: 'Error',
      success: 'Success',
      save: 'Save',
      cancel: 'Cancel',
      delete: 'Delete',
      edit: 'Edit',
      view: 'View',
      back: 'Back',
      next: 'Next',
      submit: 'Submit',
      search: 'Search',
      filter: 'Filter',
      all: 'All',
      yes: 'Yes',
      no: 'No',
      quantity: 'Quantity'
    }
  },
  es: {
    // Navigation & Common
    nav: {
      home: 'Inicio',
      aboutUs: 'Quiénes Somos',
      login: 'Iniciar Sesión',
      logout: 'Cerrar Sesión',
      register: 'Registrarse',
      dashboard: 'Dashboard',
      requests: 'Solicitudes',
      users: 'Usuarios',
      products: 'Productos',
      orders: 'Órdenes',
      categories: 'Categorías',
      tracking: 'Seguimiento',
      createOrder: 'Crear Orden',
      language: 'Idioma'
    },
    // Landing Page
    landing: {
      hero: {
        badge: '30 Años de Excelencia en Servicios Marítimos',
        title: 'Mar de Cortez',
        subtitle: 'Tu socio de confianza para el abastecimiento de flotas marítimas. Confiabilidad total, eficiencia incomparable.',
        tagline: 'Tu puerto seguro, en cualquier puerto.',
        loginBtn: 'Iniciar Sesión',
        aboutBtn: 'Quiénes Somos'
      },
      features: {
        title: '¿Por Qué Elegirnos?',
        subtitle: 'Somos líderes en soluciones de e-procurement marítimo',
        feature1: {
          title: 'Logística Integral',
          desc: 'Soluciones completas de abastecimiento y servicios auxiliares'
        },
        feature2: {
          title: 'Red de Puertos Aliados',
          desc: 'Acuerdos estratégicos con puertos en toda la región'
        },
        feature3: {
          title: 'Calidad Certificada',
          desc: 'Los más altos estándares en seguridad y eficiencia'
        }
      },
      access: {
        title: 'Solicitar Acceso',
        subtitle: 'Únete a nuestra red de clientes y proveedores',
        name: 'Nombre Completo',
        boatName: 'Nombre del Barco/Empresa',
        email: 'Correo Electrónico',
        phone: 'Teléfono',
        submit: 'Enviar Solicitud',
        success: 'Solicitud enviada exitosamente',
        error: 'Error al enviar solicitud'
      }
    },
    // About Us Page
    about: {
      hero: {
        badge: '30 Años de Experiencia',
        title: 'Quiénes Somos',
        tagline: 'Tu puerto seguro, en cualquier puerto.'
      },
      history: {
        title: 'Nuestra Historia',
        p1: 'Somos el enlace estratégico y el proveedor de confianza para la navegación mercante en la región. Con 30 años de trayectoria ininterrumpida, nos hemos consolidado como el socio integral para los buques que arriban a nuestro puerto.',
        p2: 'Ofrecemos soluciones logísticas, de abastecimiento y servicios auxiliares con los más altos estándares de eficiencia, seguridad y puntualidad.',
        p3: 'Nuestra fortaleza se basa en una extensa red de clientes y proveedores de primer nivel, y en acuerdos de colaboración con puertos hermanos. Esto nos permite garantizar un suministro rápido, competitivo y confiable, sin importar la escala o urgencia de la demanda.',
        quote: '"Somos más que un proveedor; somos un partner comprometido con la continuidad operativa de sus viajes."'
      },
      mission: {
        title: 'Nuestra Misión',
        intro: 'Nuestra misión es ser el socio de abastecimiento y servicios preferido para las flotas mercantes, tanto en nuestro puerto base como en la red de puertos aliados.',
        commitment: 'Nos comprometemos a:',
        item1: 'Proveer soluciones logísticas integrales (avituallamiento, combustible, repuestos, provisiones) con calidad, puntualidad y competitividad.',
        item2: 'Fortalecer y expandir continuamente nuestra red de colaboración con otros puertos y proveedores certificados.',
        item3: 'Operar con los más altos estándares de seguridad, ética y sostenibilidad.',
        item4: 'Anticiparnos a las necesidades del sector con un servicio personalizado y flexible.'
      },
      vision: {
        title: 'Nuestra Visión',
        p1: 'Aspiramos a ser reconocidos, en los próximos cinco años, como la red de abastecimiento marítimo más confiable y de mayor cobertura en la región.',
        p2: 'Seremos el puente indispensable entre los buques mercantes y los recursos que necesitan en cualquier puerto de nuestra alianza.',
        p3: 'Lideraremos la innovación en servicios portuarios, siendo el referente en eficiencia, alcance y partnership estratégico para las navieras del mundo.'
      },
      values: {
        title: 'Nuestros Valores',
        subtitle: 'Los principios que guían cada una de nuestras acciones y decisiones',
        trust: { title: 'Confianza y Seguridad', desc: 'La base de 30 años de relaciones duraderas con nuestros clientes y socios.' },
        efficiency: { title: 'Eficiencia y Puntualidad', desc: 'Entregas a tiempo, cada vez. Comprometidos con la continuidad de sus operaciones.' },
        reach: { title: 'Alcance y Conexión', desc: 'Fortaleza en nuestra red de proveedores y puertos aliados en toda la región.' },
        teamwork: { title: 'Trabajo en Equipo', desc: 'Colaboración interna y con socios para lograr resultados excepcionales.' },
        sustainability: { title: 'Sostenibilidad', desc: 'Compromiso con prácticas responsables y el cuidado del medio ambiente marino.' },
        service: { title: 'Servicio Personalizado', desc: 'Atención dedicada y soluciones adaptadas a las necesidades de cada cliente.' }
      },
      team: {
        title: 'Nuestro Equipo Ejecutivo',
        subtitle: 'Profesionales comprometidos con tu éxito y la excelencia en el servicio'
      },
      contact: {
        title: 'Contacto Corporativo',
        domain: 'Dominio corporativo: @mardecortez.com',
        viewMap: 'Ver en Google Maps →'
      },
      cta: {
        title: '¿Listo para trabajar con nosotros?',
        subtitle: 'Únete a las empresas que confían en Mar de Cortez para sus operaciones marítimas',
        register: 'Solicitar Registro',
        login: 'Iniciar Sesión'
      },
      certifications: 'Nuestras Certificaciones'
    },
    // Admin Dashboard
    admin: {
      title: 'Panel de Administración',
      subtitle: 'Gestiona todo el sistema Mar de Cortez',
      stats: {
        pendingRequests: 'Solicitudes Pendientes',
        totalUsers: 'Usuarios Totales',
        products: 'Productos',
        orders: 'Órdenes',
        clients: 'clientes',
        suppliers: 'proveedores'
      },
      revenue: {
        title: 'Ingresos Totales',
        subtitle: 'De órdenes completadas'
      },
      charts: {
        ordersByStatus: 'Órdenes por Estado',
        ordersByStatusDesc: 'Distribución actual de las órdenes',
        productsByCategory: 'Productos por Categoría',
        productsByCategoryDesc: 'Cantidad de productos en cada categoría',
        monthlyTrend: 'Tendencia Mensual',
        monthlyTrendDesc: 'Órdenes e ingresos de los últimos meses',
        topSuppliers: 'Top Proveedores',
        topSuppliersDesc: 'Proveedores con más productos',
        recentOrders: 'Órdenes Recientes',
        recentOrdersDesc: 'Últimas 10 órdenes en el sistema',
        revenueSummary: 'Resumen de Ingresos por Estado',
        revenueSummaryDesc: 'Desglose de ingresos según estado de las órdenes'
      },
      status: {
        pending: 'Pendiente',
        received: 'Recibido',
        inProcess: 'En Proceso',
        completed: 'Completado',
        cancelled: 'Cancelado'
      }
    },
    // Client Portal
    client: {
      home: {
        title: 'Bienvenido',
        subtitle: 'Gestiona tus órdenes marítimas',
        quickActions: 'Acciones Rápidas',
        createOrder: 'Crear Orden',
        createOrderDesc: 'Inicia una nueva orden de compra',
        tracking: 'Seguimiento',
        trackingDesc: 'Monitorea el estado de tus órdenes',
        catalog: 'Catálogo',
        catalogDesc: 'Explora productos disponibles',
        recentOrders: 'Órdenes Recientes',
        recentOrdersDesc: 'Tus últimas 5 órdenes',
        noOrders: 'No tienes órdenes aún. ¡Crea tu primera orden!',
        waitingSupplier: 'Esperando proveedor',
        toQuote: 'Por cotizar'
      },
      tracking: {
        title: 'Seguimiento de Órdenes',
        subtitle: 'Monitorea el estado de tus compras',
        search: 'Buscar por número de orden o proveedor...',
        yourOrders: 'Tus Órdenes',
        noOrdersFound: 'No se encontraron órdenes',
        noOrdersYet: 'No tienes órdenes aún',
        orderNumber: 'Número de Orden',
        supplier: 'Proveedor',
        total: 'Total',
        status: 'Estado',
        created: 'Creado',
        responsible: 'Responsable',
        notes: 'Notas',
        products: 'Productos',
        custom: 'Personalizado',
        waitingSupplier: 'Esperando proveedor',
        toQuote: 'Por cotizar',
        pendingAssignment: 'Tu orden está pendiente de asignación. Un proveedor la tomará pronto y te enviará la cotización.'
      }
    },
    // Supplier Portal
    supplier: {
      orders: {
        title: 'Gestionar Órdenes',
        subtitle: 'Visualiza y actualiza el estado de las órdenes',
        received: 'Órdenes Recibidas',
        noOrders: 'No hay órdenes aún',
        client: 'Cliente',
        myOrder: 'Mi orden',
        unassigned: 'Sin asignar',
        toDefine: 'Por definir',
        items: 'items',
        responsible: 'Responsable',
        clientNotes: 'Notas del cliente',
        takeOrder: 'Tomar Orden',
        updateStatus: 'Actualizar Estado',
        uploadQuotation: 'Subir Cotización',
        updatePrices: 'Actualizar Precios',
        takeOrderTitle: 'Tomar Orden y Agregar Precios',
        updatePricesTitle: 'Actualizar Precios',
        orderStatus: 'Estado de la Orden',
        responsibleOptional: 'Responsable (Opcional)',
        productPrices: 'Precios de Productos',
        productPricesDesc: 'Agrega el precio unitario para cada producto. El cliente verá estos precios.',
        unitPrice: 'Precio Unitario',
        estimatedTotal: 'Total Estimado',
        saveChanges: 'Guardar Cambios',
        takeAndSend: 'Tomar Orden y Enviar Cotización'
      }
    },
    // Footer
    footer: {
      description: 'Tu socio de confianza para el abastecimiento de flotas marítimas. Confiabilidad total, eficiencia incomparable.',
      quickLinks: 'Enlaces Rápidos',
      home: 'Inicio',
      aboutUs: 'Quiénes Somos',
      features: 'Características',
      contact: 'Contacto',
      login: 'Iniciar Sesión',
      contactUs: 'Contáctanos',
      rights: 'Todos los derechos reservados.',
      certifications: 'Certificaciones'
    },
    // Common
    common: {
      loading: 'Cargando...',
      error: 'Error',
      success: 'Éxito',
      save: 'Guardar',
      cancel: 'Cancelar',
      delete: 'Eliminar',
      edit: 'Editar',
      view: 'Ver',
      back: 'Volver',
      next: 'Siguiente',
      submit: 'Enviar',
      search: 'Buscar',
      filter: 'Filtrar',
      all: 'Todos',
      yes: 'Sí',
      no: 'No',
      quantity: 'Cantidad'
    }
  },
  zh: {
    // Navigation & Common
    nav: {
      home: '首页',
      aboutUs: '关于我们',
      login: '登录',
      logout: '退出',
      register: '注册',
      dashboard: '仪表板',
      requests: '请求',
      users: '用户',
      products: '产品',
      orders: '订单',
      categories: '类别',
      tracking: '跟踪',
      createOrder: '创建订单',
      language: '语言'
    },
    // Landing Page
    landing: {
      hero: {
        badge: '30年卓越海事服务',
        title: '科尔特斯海',
        subtitle: '您值得信赖的海上船队供应合作伙伴。完全可靠，无与伦比的效率。',
        tagline: '您的安全港湾，在任何港口。',
        loginBtn: '登录',
        aboutBtn: '关于我们'
      },
      features: {
        title: '为什么选择我们？',
        subtitle: '我们是海事电子采购解决方案的领导者',
        feature1: {
          title: '综合物流',
          desc: '完整的供应和辅助服务解决方案'
        },
        feature2: {
          title: '联盟港口网络',
          desc: '与整个地区的港口建立战略协议'
        },
        feature3: {
          title: '认证质量',
          desc: '最高的安全和效率标准'
        }
      },
      access: {
        title: '申请访问',
        subtitle: '加入我们的客户和供应商网络',
        name: '全名',
        boatName: '船舶/公司名称',
        email: '电子邮件',
        phone: '电话',
        submit: '提交申请',
        success: '申请提交成功',
        error: '提交申请时出错'
      }
    },
    // About Us Page
    about: {
      hero: {
        badge: '30年经验',
        title: '关于我们',
        tagline: '您的安全港湾，在任何港口。'
      },
      history: {
        title: '我们的历史',
        p1: '我们是该地区商船航运的战略纽带和值得信赖的供应商。凭借30年不间断的发展历程，我们已成为抵达我们港口的船舶的综合合作伙伴。',
        p2: '我们以最高的效率、安全和准时标准提供物流解决方案、供应和辅助服务。',
        p3: '我们的优势基于广泛的一流客户和供应商网络，以及与兄弟港口的合作协议。这使我们能够保证快速、有竞争力和可靠的供应，无论需求的规模或紧迫性如何。',
        quote: '"我们不仅仅是供应商；我们是致力于您航行运营连续性的合作伙伴。"'
      },
      mission: {
        title: '我们的使命',
        intro: '我们的使命是成为商船队首选的供应和服务合作伙伴，无论是在我们的母港还是在我们的联盟港口网络中。',
        commitment: '我们承诺：',
        item1: '以质量、准时和竞争力提供综合物流解决方案（补给、燃料、备件、物资）。',
        item2: '不断加强和扩大我们与其他港口和认证供应商的合作网络。',
        item3: '以最高的安全、道德和可持续发展标准运营。',
        item4: '以个性化和灵活的服务预测行业需求。'
      },
      vision: {
        title: '我们的愿景',
        p1: '我们渴望在未来五年内成为该地区最可靠、覆盖面最广的海事供应网络。',
        p2: '我们将成为商船与其在我们联盟任何港口所需资源之间不可或缺的桥梁。',
        p3: '我们将引领港口服务创新，成为全球航运公司效率、覆盖范围和战略合作伙伴关系的标杆。'
      },
      values: {
        title: '我们的价值观',
        subtitle: '指导我们每一个行动和决策的原则',
        trust: { title: '信任与安全', desc: '与客户和合作伙伴30年持久关系的基础。' },
        efficiency: { title: '效率与准时', desc: '每次准时交付。致力于您的运营连续性。' },
        reach: { title: '覆盖与连接', desc: '我们在整个地区的供应商和联盟港口网络的优势。' },
        teamwork: { title: '团队合作', desc: '内部和合作伙伴协作以取得卓越成果。' },
        sustainability: { title: '可持续发展', desc: '致力于负责任的实践和海洋环境保护。' },
        service: { title: '个性化服务', desc: '专注的关注和适应每个客户需求的解决方案。' }
      },
      team: {
        title: '我们的执行团队',
        subtitle: '致力于您的成功和卓越服务的专业人士'
      },
      contact: {
        title: '企业联系方式',
        domain: '企业域名：@seaofcortez.com',
        viewMap: '在谷歌地图上查看 →'
      },
      cta: {
        title: '准备好与我们合作了吗？',
        subtitle: '加入信任科尔特斯海进行海事运营的公司',
        register: '申请注册',
        login: '登录'
      },
      certifications: '我们的认证'
    },
    // Admin Dashboard
    admin: {
      title: '管理面板',
      subtitle: '管理整个科尔特斯海系统',
      stats: {
        pendingRequests: '待处理请求',
        totalUsers: '总用户数',
        products: '产品',
        orders: '订单',
        clients: '客户',
        suppliers: '供应商'
      },
      revenue: {
        title: '总收入',
        subtitle: '来自已完成的订单'
      },
      charts: {
        ordersByStatus: '按状态划分的订单',
        ordersByStatusDesc: '订单的当前分布',
        productsByCategory: '按类别划分的产品',
        productsByCategoryDesc: '每个类别的产品数量',
        monthlyTrend: '月度趋势',
        monthlyTrendDesc: '近几个月的订单和收入',
        topSuppliers: '顶级供应商',
        topSuppliersDesc: '产品最多的供应商',
        recentOrders: '最近订单',
        recentOrdersDesc: '系统中的最后10个订单',
        revenueSummary: '按状态划分的收入摘要',
        revenueSummaryDesc: '按订单状态划分的收入细目'
      },
      status: {
        pending: '待处理',
        received: '已收到',
        inProcess: '处理中',
        completed: '已完成',
        cancelled: '已取消'
      }
    },
    // Client Portal
    client: {
      home: {
        title: '欢迎',
        subtitle: '管理您的海事订单',
        quickActions: '快速操作',
        createOrder: '创建订单',
        createOrderDesc: '开始新的采购订单',
        tracking: '跟踪',
        trackingDesc: '监控订单状态',
        catalog: '目录',
        catalogDesc: '浏览可用产品',
        recentOrders: '最近订单',
        recentOrdersDesc: '您最近的5个订单',
        noOrders: '暂无订单。创建您的第一个订单！',
        waitingSupplier: '等待供应商',
        toQuote: '待报价'
      },
      tracking: {
        title: '订单跟踪',
        subtitle: '监控您的采购状态',
        search: '按订单号或供应商搜索...',
        yourOrders: '您的订单',
        noOrdersFound: '未找到订单',
        noOrdersYet: '暂无订单',
        orderNumber: '订单号',
        supplier: '供应商',
        total: '总计',
        status: '状态',
        created: '创建时间',
        responsible: '负责人',
        notes: '备注',
        products: '产品',
        custom: '定制',
        waitingSupplier: '等待供应商',
        toQuote: '待报价',
        pendingAssignment: '您的订单正在等待分配。供应商将很快接受并向您发送报价。'
      }
    },
    // Supplier Portal
    supplier: {
      orders: {
        title: '管理订单',
        subtitle: '查看和更新订单状态',
        received: '收到的订单',
        noOrders: '暂无订单',
        client: '客户',
        myOrder: '我的订单',
        unassigned: '未分配',
        toDefine: '待定义',
        items: '项目',
        responsible: '负责人',
        clientNotes: '客户备注',
        takeOrder: '接受订单',
        updateStatus: '更新状态',
        uploadQuotation: '上传报价',
        updatePrices: '更新价格',
        takeOrderTitle: '接受订单并添加价格',
        updatePricesTitle: '更新价格',
        orderStatus: '订单状态',
        responsibleOptional: '负责人（可选）',
        productPrices: '产品价格',
        productPricesDesc: '为每个产品添加单价。客户将看到这些价格。',
        unitPrice: '单价',
        estimatedTotal: '预计总计',
        saveChanges: '保存更改',
        takeAndSend: '接受订单并发送报价'
      }
    },
    // Footer
    footer: {
      description: '您值得信赖的海上船队供应合作伙伴。完全可靠，无与伦比的效率。',
      quickLinks: '快速链接',
      home: '首页',
      aboutUs: '关于我们',
      features: '特点',
      contact: '联系',
      login: '登录',
      contactUs: '联系我们',
      rights: '版权所有。',
      certifications: '认证'
    },
    // Common
    common: {
      loading: '加载中...',
      error: '错误',
      success: '成功',
      save: '保存',
      cancel: '取消',
      delete: '删除',
      edit: '编辑',
      view: '查看',
      back: '返回',
      next: '下一步',
      submit: '提交',
      search: '搜索',
      filter: '筛选',
      all: '全部',
      yes: '是',
      no: '否',
      quantity: '数量'
    }
  }
};

// Nombres de idiomas para mostrar
export const languageNames = {
  en: 'English',
  es: 'Español',
  zh: '中文'
};

// Banderas de idiomas
export const languageFlags = {
  en: '🇺🇸',
  es: '🇲🇽',
  zh: '🇨🇳'
};
