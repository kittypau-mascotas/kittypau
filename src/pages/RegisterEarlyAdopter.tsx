import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Link } from 'wouter';

const earlyAdopterFormSchema = z.object({
  email: z.string().email({
    message: 'Por favor, ingresa un correo electrónico válido.',
  }),
  interes_mascotas: z.string(),
  tipo_mascota: z.string(),
  expectativas: z.string().min(10, {
    message: 'Por favor, cuéntanos un poco más sobre tus expectativas (mínimo 10 caracteres).',
  }),
});

export default function RegisterEarlyAdopter() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof earlyAdopterFormSchema>>({
    resolver: zodResolver(earlyAdopterFormSchema),
    defaultValues: {
      email: '',
      interes_mascotas: '',
      tipo_mascota: '',
      expectativas: '',
    },
  });

  async function onSubmit(data: z.infer<typeof earlyAdopterFormSchema>) {
    console.log(data);
    toast({
      title: '¡Gracias por tu registro!',
      description: 'Hemos recibido tus datos. Nos pondremos en contacto contigo pronto.',
    });
    form.reset();
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-orange-50 to-orange-100 p-4">
      <Card className="w-full max-w-lg border-2 border-orange-100 shadow-lg">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl text-center">Para el registro de Early Adopter</CardTitle>
          <CardDescription className="text-center">
            ¡Sé el primero en probar Kittypau y ayúdanos a construir la mejor plataforma para el cuidado de mascotas!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Correo Electrónico</FormLabel>
                    <FormControl>
                      <Input placeholder="tu@email.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="interes_mascotas"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>¿Tienes mascotas actualmente?</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona una opción" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="si">Sí</SelectItem>
                        <SelectItem value="no">No, pero estoy interesado</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="tipo_mascota"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Si tienes, ¿qué tipo de mascota?</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona una opción" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="gato">Gato</SelectItem>
                        <SelectItem value="perro">Perro</SelectItem>
                        <SelectItem value="otro">Otro</SelectItem>
                        <SelectItem value="ninguna">Ninguna</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="expectativas"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>¿Qué te gustaría ver en Kittypau?</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Cuéntanos qué funcionalidades te serían más útiles, qué problemas buscas resolver, etc."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full bg-[#F87A6D] hover:bg-[#E56A5D]">
                Enviar Registro
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
