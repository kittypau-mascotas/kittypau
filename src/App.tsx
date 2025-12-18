import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Dashboard from "@/pages/Dashboard";
import Sensors from "@/pages/Sensors";
import Analytics from "@/pages/Analytics";
import Alerts from "@/pages/Alerts";
import Settings from "@/pages/Settings";
import Register from "@/pages/Register";
import Login from "@/pages/Login";
import LandingPage from "@/pages/LandingPage";
import Devices from "@/pages/Devices";
import AddDevice from "@/pages/AddDevice";
import Mascotas from "@/pages/Mascotas";
import Planes from "@/pages/Planes";
import Users from "@/pages/Users";
import RegisterEarlyAdopter from "@/pages/RegisterEarlyAdopter";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";
import { useState, useEffect } from "react";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";

function AppLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex flex-col h-screen bg-[#FFFAF7]">
      <Header onMenuToggle={toggleSidebar} />
      
      <div className="flex flex-1 overflow-hidden">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        
        <main className="flex-1 overflow-y-auto p-4 lg:p-6">
          <div className="container mx-auto">
            {children}
          </div>
        </main>
      </div>
      
      {isMobile && <MobileNav />}
    </div>
  );
}

// Componente para proteger rutas
function PrivateRoute({ component: Component }: { component: React.ComponentType }) {
  const { isAuthenticated, loading } = useAuth();
  const [, setLocation] = useLocation();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      setLocation("/login");
    }
  }, [isAuthenticated, loading, setLocation]);

  // Mostrar un indicador de carga mientras se verifica la autenticación
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#F87A6D]"></div>
      </div>
    );
  }

  // Si está autenticado, renderizar el componente
  return isAuthenticated ? <Component /> : null;
}

function Router() {
  // Determina si la ruta es /login o /register para no mostrar el AppLayout en estas páginas
  const [location, setLocation] = useLocation();
  const { isAuthenticated, loading } = useAuth();
  
  // If loading, show nothing or a spinner
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#F87A6D]"></div>
      </div>
    );
  }

  // If authenticated and at the root, redirect to dashboard
  if (isAuthenticated && location === "/") {
    setLocation("/dashboard");
    return null; // Or a loading spinner
  }

  // If not authenticated and at the root, show LandingPage
  if (!isAuthenticated && location === "/") {
    return <LandingPage />;
  }

  // For login and register pages (always accessible)
  if (location === "/register" || location === "/login" || location === "/register-early-adopter") {
    return (
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/register-early-adopter" component={RegisterEarlyAdopter} />
      </Switch>
    );
  }

  // Para las demás rutas, usamos el AppLayout normal con rutas protegidas
  return (
    <AppLayout>
      <Switch>
        <Route path="/dashboard">
          <PrivateRoute component={Dashboard} />
        </Route>
        <Route path="/devices">
          <PrivateRoute component={Devices} />
        </Route>
        <Route path="/devices/add">
          <PrivateRoute component={AddDevice} />
        </Route>
        <Route path="/mascotas">
          <PrivateRoute component={Mascotas} />
        </Route>
        <Route path="/sensors">
          <PrivateRoute component={Sensors} />
        </Route>
        <Route path="/analytics">
          <PrivateRoute component={Analytics} />
        </Route>
        <Route path="/alerts">
          <PrivateRoute component={Alerts} />
        </Route>
        <Route path="/settings">
          <PrivateRoute component={Settings} />
        </Route>
        <Route path="/planes">
          <PrivateRoute component={Planes} />
        </Route>
        <Route path="/users">
          <PrivateRoute component={Users} />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </AppLayout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router />
        <Toaster />
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
