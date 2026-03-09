# Mar de Cortez - PRD (Product Requirements Document)

## Descripción del Proyecto
Aplicación web de e-procurement marítimo inspirada en seaproc.com, con tres portales principales: Cliente, Proveedor y Administrador.

## Stack Tecnológico
- **Backend:** FastAPI (Python)
- **Frontend:** React con TailwindCSS + Shadcn/UI
- **Database:** MongoDB
- **Autenticación:** JWT con roles

---

## Funcionalidades Implementadas ✅

### Portal de Cliente
- [x] Crear órdenes de compra
- [x] Seleccionar productos de catálogo existente
- [x] Agregar productos personalizados (nombre, descripción, cantidad, imagen)
- [x] Número de orden generado automáticamente
- [x] Usuario solicitante asignado automáticamente
- [x] **Precios ocultos** - Los clientes no ven precios al crear órdenes
- [x] Pestaña de "Seguimiento" para ver estado de órdenes

### Portal de Proveedor
- [x] Ver órdenes de clientes relevantes
- [x] Actualizar estado de órdenes
- [x] Gestionar catálogo de productos propio
- [x] Sistema de precios avanzado (precio base + ganancia % o fijo + IVA)
- [x] Gestionar categorías propias

### Portal de Administrador
- [x] Dashboard con estadísticas generales
- [x] Gestionar solicitudes de registro
- [x] CRUD completo de usuarios (Clientes y Proveedores)
- [x] CRUD completo de productos con precios avanzados
- [x] **Buscador de productos** por nombre/descripción/SKU
- [x] **Filtro de productos por categoría**
- [x] **Precio final visible** en lista de productos
- [x] Gestionar todas las categorías
- [x] Gestionar órdenes (editar/eliminar solo si están canceladas)

### Flujo de Registro
- [x] Formulario de solicitud de acceso en landing page
- [x] Solicitudes aparecen en portal admin para aprobación/rechazo

---

## Credenciales de Prueba

| Rol | Email | Contraseña |
|-----|-------|------------|
| Admin | skylinksonora@gmail.com | Edel1ewy |
| Cliente | roberto@oceanicexplorer.com | TestClient123! |

---

## Tareas Pendientes (Backlog)

### P1 - Próximas
- [ ] Integrar servicio de envío de correos (Resend/SendGrid) para notificaciones
- [ ] Funcionalidad "Guardar como Borrador" en creación de órdenes

### P2 - Futuras
- [ ] Plantillas de órdenes para compras frecuentes
- [ ] Log de auditoría para portal admin
- [ ] Exportar reportes del dashboard a PDF/Excel

---

## Arquitectura de Archivos

```
/app
├── backend/
│   ├── .env
│   ├── requirements.txt
│   └── server.py
└── frontend/
    ├── .env
    ├── package.json
    └── src/
        ├── App.js
        ├── components/
        │   ├── Footer.js
        │   ├── LanguageSelector.js  <-- NUEVO
        │   └── Sidebar.js
        ├── i18n/                     <-- NUEVO
        │   ├── LanguageContext.js
        │   └── translations.js
        └── pages/
            ├── Landing.js
            ├── Login.js
            ├── QuienesSomos.js
            ├── cliente/
            │   ├── CrearOrden.js
            │   ├── Seguimiento.js
            │   └── ClienteHome.js
            ├── proveedor/
            │   ├── Ordenes.js
            │   ├── Productos.js
            │   └── ProveedorHome.js
            └── admin/
                ├── AdminHome.js
                ├── ManageCategories.js
                ├── ManageOrders.js
                ├── ManageProducts.js
                ├── ManageUsers.js
                └── RegistrationRequests.js
```

---

## Última Actualización
**Fecha:** Marzo 2026
**Cambios:**

### Internacionalización (i18n) Completada ✅
- **3 idiomas soportados**: Inglés (en), Español (es), Chino (zh)
- **Selector de idioma** en esquina superior derecha con banderas
- **Persistencia**: El idioma seleccionado se guarda en localStorage
- **Páginas traducidas**:
  - Landing: Hero, Services, Features, Testimonials, Contact Form
  - QuienesSomos: Hero, Historia, Misión, Visión, Valores, Equipo Ejecutivo, Contacto, CTA, Certificaciones
  - Footer: Quick Links, Services, Contact Us, Newsletter, Privacy/Terms/Cookies
- **Arquitectura i18n**:
  - `/app/frontend/src/i18n/translations.js` - Todas las traducciones
  - `/app/frontend/src/i18n/LanguageContext.js` - React Context para i18n
  - `/app/frontend/src/components/LanguageSelector.js` - Componente de selección

### Rediseño Landing Page (Marzo 2026) ✅
- **Eliminado**: Botón de Login y formulario de Registration Request del Hero
- **Hero Section**: 3 botones - About Us, Our Services, Contact Us
- **Nueva sección Services** con 6 categorías de suministros marítimos:
  - Provisions (verde) - Frutas, Verduras, Pescados, Carnes
  - Personal Articles (morado) - Bebidas, Cigarrillos, Chocolates
  - Navigation Equipment (azul) - Cartas, Plotters, Radar, Comunicación
  - Consumables Cover and Machines (naranja) - EPP, Repuestos, Cables
  - Cabin (teal) - Limpieza, Cocina, Bar, Electrodomésticos
  - Rescue Equipment (rojo) - Extintores, Balsas, Botiquín
- **Nueva sección Testimonials** - "Find Out What Our Customers Say" con 3 reviews
- **Nueva sección Contact** - Formulario de contacto con nombre, email, teléfono, mensaje
- **Nuevo endpoint**: `/api/contact-messages` para recibir mensajes de contacto

### Dashboard de Análisis para Admin (Febrero 2026) ✅
- **Gráfico de Pastel**: Órdenes por Estado (Pendiente, Recibido, En Proceso, Completado, Cancelado)
- **Gráfico de Barras Horizontal**: Productos por Categoría
- **Gráfico de Área**: Tendencia Mensual (Órdenes e Ingresos)
- **Gráfico de Barras**: Top 5 Proveedores con más productos
- **Lista**: Órdenes Recientes (últimas 10)
- **Resumen**: Ingresos por Estado (Completados, En Proceso, Pendientes)
- Nuevo endpoint `/api/admin/stats/detailed` para datos de gráficos
- Librería `recharts` instalada para visualizaciones

### Página "Quiénes Somos" (`/quienes-somos`)
- Sección de Historia de la empresa (30 años de trayectoria)
- **Imagen de fondo de oficina** en Hero Section
- Misión corporativa con compromisos detallados
- Visión a 5 años
- 6 Valores Corporativos
- Sección de Ejecutivos con contacto corporativo
- **Google Maps integrado** con ubicación en Guaymas, Son.
- Dirección: Alfonso Iberri 302-336, Centro, 85400 Guaymas, Son.
- Eslogan: "Tu puerto seguro, en cualquier puerto"

### Mejoras en flujo de órdenes
- Precios ocultos al cliente hasta que el proveedor actualice
- Proveedor NO se asigna automáticamente al crear orden
- Nuevo endpoint `/api/orders/{id}/take` para que proveedores tomen órdenes
- Campo `price_confirmed` en órdenes para controlar visibilidad

---

## Cambios Anteriores (Diciembre 2025)
- Agregado buscador y filtro por categoría al portal de productos del Admin
- Precio final visible en cada producto del Admin con desglose (Base + Ganancia + IVA)
- Corregido cálculo de precio final en endpoints de Admin (create/update productos)
- Corregida visibilidad de órdenes para proveedores
- Proveedores ahora solo ven sus propios productos en su portal

## Credenciales de Prueba

| Rol | Email | Contraseña |
|-----|-------|------------|
| Admin | skylinksonora@gmail.com | Edel1ewy |
| Cliente | roberto@oceanicexplorer.com | TestClient123! |
| Proveedor | julio.canett@hotmail.com | Proveedor123! |
