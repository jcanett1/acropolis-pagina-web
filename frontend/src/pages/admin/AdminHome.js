import { useState, useEffect } from 'react';
import { API } from '@/App';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Users, Package, FileText, UserPlus, DollarSign, TrendingUp, BarChart3, PieChart, Activity } from 'lucide-react';
import { toast } from 'sonner';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  Legend,
  Area,
  AreaChart
} from 'recharts';

// Colores para los gráficos
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];
const STATUS_COLORS = {
  'Pendiente': '#f59e0b',
  'Recibido': '#3b82f6',
  'En Proceso': '#8b5cf6',
  'Completado': '#22c55e',
  'Cancelado': '#ef4444'
};

export default function AdminHome() {
  const [stats, setStats] = useState(null);
  const [detailedStats, setDetailedStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllStats();
  }, []);

  const fetchAllStats = async () => {
    try {
      const token = localStorage.getItem('token');
      
      // Fetch basic stats
      const statsResponse = await fetch(`${API}/admin/stats`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const statsData = await statsResponse.json();
      setStats(statsData);
      
      // Fetch detailed stats for charts
      const detailedResponse = await fetch(`${API}/admin/stats/detailed`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const detailedData = await detailedResponse.json();
      setDetailedStats(detailedData);
      
    } catch (error) {
      toast.error('Error al cargar estadísticas');
    } finally {
      setLoading(false);
    }
  };

  const formatMonth = (monthStr) => {
    if (!monthStr) return '';
    const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    const [year, month] = monthStr.split('-');
    return `${months[parseInt(month) - 1]} ${year.slice(2)}`;
  };

  const formatCurrency = (value) => {
    return `$${value.toLocaleString('es-MX', { minimumFractionDigits: 2 })}`;
  };

  const getStatusText = (status) => {
    const statusMap = {
      pendiente: 'Pendiente',
      recibido: 'Recibido',
      en_proceso: 'En Proceso',
      completado: 'Completado',
      cancelado: 'Cancelado'
    };
    return statusMap[status] || status;
  };

  if (loading) {
    return (
      <div className="flex justify-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="space-y-8" data-testid="admin-home">
      <div>
        <h1 className="text-4xl font-bold mb-2">Panel de Administración</h1>
        <p className="text-muted-foreground text-lg">Gestiona todo el sistema Mar de Cortez</p>
      </div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
        <Card className="card-hover" data-testid="stat-pending-requests">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Solicitudes Pendientes</CardTitle>
            <UserPlus className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{stats?.pending_requests || 0}</div>
          </CardContent>
        </Card>
        
        <Card className="card-hover" data-testid="stat-total-users">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Usuarios Totales</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{stats?.total_users || 0}</div>
            <p className="text-xs text-muted-foreground mt-1">
              {stats?.total_clients || 0} clientes, {stats?.total_suppliers || 0} proveedores
            </p>
          </CardContent>
        </Card>

        <Card className="card-hover" data-testid="stat-total-products">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Productos</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{stats?.total_products || 0}</div>
          </CardContent>
        </Card>

        <Card className="card-hover" data-testid="stat-total-orders">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Órdenes</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{stats?.total_orders || 0}</div>
          </CardContent>
        </Card>
      </div>

      {/* Revenue Card */}
      <Card data-testid="revenue-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="h-5 w-5" />
            Ingresos Totales
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-4xl font-bold text-secondary">{formatCurrency(stats?.total_revenue || 0)}</div>
          <p className="text-sm text-muted-foreground mt-2">De órdenes completadas</p>
        </CardContent>
      </Card>

      {/* Charts Section */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Órdenes por Estado - Pie Chart */}
        <Card data-testid="orders-by-status-chart">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PieChart className="h-5 w-5" />
              Órdenes por Estado
            </CardTitle>
            <CardDescription>Distribución actual de las órdenes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsPieChart>
                  <Pie
                    data={detailedStats?.orders_by_status || []}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent, status }) => `${status} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="count"
                    nameKey="status"
                  >
                    {(detailedStats?.orders_by_status || []).map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill || COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value, name) => [value, 'Órdenes']}
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--background))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                  <Legend />
                </RechartsPieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Productos por Categoría - Bar Chart */}
        <Card data-testid="products-by-category-chart">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Productos por Categoría
            </CardTitle>
            <CardDescription>Cantidad de productos en cada categoría</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={detailedStats?.products_by_category || []} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                  <XAxis type="number" />
                  <YAxis 
                    dataKey="category" 
                    type="category" 
                    width={100}
                    tick={{ fontSize: 12 }}
                  />
                  <Tooltip
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--background))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                  <Bar dataKey="count" fill="#22d3ee" radius={[0, 4, 4, 0]} name="Productos" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Revenue & Orders Trend */}
      <Card data-testid="monthly-trend-chart">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Tendencia Mensual
          </CardTitle>
          <CardDescription>Órdenes e ingresos de los últimos meses</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={(detailedStats?.monthly_data || []).map(d => ({
                ...d,
                month: formatMonth(d.month)
              }))}>
                <defs>
                  <linearGradient id="colorOrders" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1}/>
                  </linearGradient>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#22c55e" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#22c55e" stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                <YAxis yAxisId="left" tick={{ fontSize: 12 }} />
                <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 12 }} tickFormatter={(v) => `$${v}`} />
                <Tooltip
                  contentStyle={{ 
                    backgroundColor: 'hsl(var(--background))', 
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                  formatter={(value, name) => {
                    if (name === 'revenue') return [formatCurrency(value), 'Ingresos'];
                    return [value, 'Órdenes'];
                  }}
                />
                <Legend />
                <Area 
                  yAxisId="left"
                  type="monotone" 
                  dataKey="orders" 
                  stroke="#3b82f6" 
                  fillOpacity={1}
                  fill="url(#colorOrders)"
                  name="Órdenes"
                />
                <Area 
                  yAxisId="right"
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="#22c55e" 
                  fillOpacity={1}
                  fill="url(#colorRevenue)"
                  name="Ingresos"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Top Proveedores */}
        <Card data-testid="top-suppliers-chart">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Top Proveedores
            </CardTitle>
            <CardDescription>Proveedores con más productos</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={detailedStats?.top_suppliers || []}>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                  <XAxis dataKey="name" tick={{ fontSize: 10 }} angle={-15} textAnchor="end" height={60} />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--background))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                  />
                  <Bar dataKey="products" fill="#8b5cf6" radius={[4, 4, 0, 0]} name="Productos" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Órdenes Recientes */}
        <Card data-testid="recent-orders">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5" />
              Órdenes Recientes
            </CardTitle>
            <CardDescription>Últimas 10 órdenes en el sistema</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 max-h-[250px] overflow-y-auto">
              {(detailedStats?.recent_orders || []).map((order, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="flex-1">
                    <p className="font-mono text-sm font-medium">{order.order_number}</p>
                    <p className="text-xs text-muted-foreground">{order.client_name}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">{formatCurrency(order.total)}</p>
                    <span 
                      className="text-xs px-2 py-0.5 rounded-full"
                      style={{ 
                        backgroundColor: `${STATUS_COLORS[getStatusText(order.status)]}20`,
                        color: STATUS_COLORS[getStatusText(order.status)]
                      }}
                    >
                      {getStatusText(order.status)}
                    </span>
                  </div>
                </div>
              ))}
              {(!detailedStats?.recent_orders || detailedStats.recent_orders.length === 0) && (
                <p className="text-center text-muted-foreground py-8">No hay órdenes recientes</p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Revenue Summary by Status */}
      <Card data-testid="revenue-summary">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="h-5 w-5" />
            Resumen de Ingresos por Estado
          </CardTitle>
          <CardDescription>Desglose de ingresos según estado de las órdenes</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
              <p className="text-sm text-muted-foreground mb-1">Completados</p>
              <p className="text-2xl font-bold text-green-600">
                {formatCurrency(detailedStats?.revenue_by_status?.completado || 0)}
              </p>
            </div>
            <div className="p-4 rounded-lg bg-purple-500/10 border border-purple-500/20">
              <p className="text-sm text-muted-foreground mb-1">En Proceso</p>
              <p className="text-2xl font-bold text-purple-600">
                {formatCurrency(detailedStats?.revenue_by_status?.en_proceso || 0)}
              </p>
            </div>
            <div className="p-4 rounded-lg bg-amber-500/10 border border-amber-500/20">
              <p className="text-sm text-muted-foreground mb-1">Pendientes</p>
              <p className="text-2xl font-bold text-amber-600">
                {formatCurrency(detailedStats?.revenue_by_status?.pendiente || 0)}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
