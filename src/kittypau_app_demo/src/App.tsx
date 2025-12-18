import { Switch, Route, useLocation } from 'wouter';
import { queryClient } from './lib/queryClient';
import { QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { AuthProvider } from '@/contexts/AuthContext';
import AppLayout from '@/components/AppLayout';
import PrivateRoute from '@/components/PrivateRoute';

import NotFound from '@/pages/not-found';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import Dashboard from '@/pages/Dashboard';
import Devices from '@/pages/Devices';
import AddDevice from '@/pages/AddDevice';
import Mascotas from '@/pages/Mascotas';
import Sensors from '@/pages/Sensors';
import Analytics from '@/pages/Analytics';
import Alerts from '@/pages/Alerts';
import Settings from '@/pages/Settings';
import Planes from '@/pages/Planes';
import Users from '@/pages/Users';

function Router() {
  const [location] = useLocation();

  if (location === '/register' || location === '/' || location === '/login') {
    return (
      <Switch>
        <Route path="/" component={Login} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    );
  }

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
      <TooltipProvider>
        <AuthProvider>
          <Router />
          <Toaster />
        </AuthProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
