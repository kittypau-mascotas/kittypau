import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

interface ActivityChartProps {
  data?: Array<{ name: string; [key: string]: number | string }>;
}

export default function ActivityChart({ data }: ActivityChartProps) {
  //todo: remove mock functionality
  const mockData = data || [
    { name: 'Lun', Luna: 65, Max: 45 },
    { name: 'Mar', Luna: 59, Max: 52 },
    { name: 'Mié', Luna: 80, Max: 68 },
    { name: 'Jue', Luna: 81, Max: 72 },
    { name: 'Vie', Luna: 56, Max: 48 },
    { name: 'Sáb', Luna: 55, Max: 60 },
    { name: 'Dom', Luna: 40, Max: 38 },
  ];

  return (
    <Card className="card-data border-0" data-testid="chart-activity">
      <CardHeader>
        <CardTitle>Actividad Semanal</CardTitle>
        <CardDescription>Nivel de actividad de tus mascotas</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={mockData}>
            <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Luna" stroke="hsl(var(--chart-1))" strokeWidth={2} name="Luna (Gato)" />
            <Line type="monotone" dataKey="Max" stroke="hsl(var(--chart-3))" strokeWidth={2} name="Max (Perro)" />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
