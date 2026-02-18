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

### P2 - Futuras
- [ ] Dashboard de Análisis para admin con gráficos
- [ ] Funcionalidad "Guardar como Borrador" en creación de órdenes
- [ ] Plantillas de órdenes para compras frecuentes
- [ ] Log de auditoría para portal admin

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
        │   └── Sidebar.js
        └── pages/
            ├── Landing.js
            ├── Login.js
            ├── QuienesSomos.js  <-- NUEVO
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
**Fecha:** Febrero 2026
**Cambios:**

### Dashboard de Análisis para Admin (P2) ✅
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
