import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { Gift, CheckCircle, Video, Heart, Activity, Shield, Instagram, Youtube, Linkedin } from 'lucide-react';
import Autoplay from "embla-carousel-autoplay"

const carouselImages = [
  "/carousel-images/1.jpg",
  "/carousel-images/2.jpg",
  "/carousel-images/3.png",
  "/carousel-images/4.jpg",
  "/carousel-images/5.jpg",
  "/carousel-images/6.jpg",
  "/carousel-images/7.jpg",
  "/carousel-images/8.jpg",
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Social Navbar Section */}
        <nav className="bg-white/60 backdrop-blur-sm rounded-full p-2 mt-0 mb-4 max-w-min mx-auto sticky top-4 z-50">
          <div className="flex items-center gap-2">
            <a href="https://www.instagram.com/kittypau.mascotas/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Button variant="ghost" size="icon" className="text-gray-500 hover:text-[#E1306C] transition-colors duration-300">
                <Instagram className="h-12 w-12" />
              </Button>
            </a>
            <a href="https://www.youtube.com/channel/UCYrN8v3Lb5n1B0L2QeOEcxA" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <Button variant="ghost" size="icon" className="text-gray-500 hover:text-[#FF0000] transition-colors duration-300">
                <Youtube className="h-12 w-12" />
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/kittypau-mascotas-26289539a/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Button variant="ghost" size="icon" className="text-gray-500 hover:text-[#0A66C2] transition-colors duration-300">
                <Linkedin className="h-12 w-12" />
              </Button>
            </a>
          </div>
        </nav>

        {/* Header Section */}
        <header className="pt-2 pb-12 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img src="/src/assets/logo-grande.jpg" alt="Kittypau Logo" className="w-32 h-32 sm:w-40 sm:h-40 mx-auto" />
              <h1 className="text-4xl sm:text-5xl font-bold text-[#F87A6D] mt-2">KittyPau!</h1>
            </div>
            {/* Carousel */}
            <div className="w-full md:w-1/2">
              <Carousel className="w-full" plugins={[Autoplay({ delay: 2000, stopOnInteraction: true })]} opts={{ loop: true }}>
                <CarouselContent>
                  {carouselImages.map((src, index) => (
                    <CarouselItem key={index}>
                      <Card>
                        <CardContent className="flex aspect-video items-center justify-center p-0">
                          <img src={src} alt={`Carousel Image ${index + 1}`} className="w-full h-full object-cover rounded-lg" />
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </header>

        <main className="space-y-8 pb-8">
          {/* About Section */}
          <Card className="bg-white">
            <CardHeader className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="text-center sm:text-left">
                <CardTitle className="text-2xl sm:text-3xl text-[#F87A6D]">Dispositivo IoT para Mascotas</CardTitle>
                <CardDescription>Anticípate a los problemas de salud con datos, no solo con instinto.</CardDescription>
              </div>
              <div className="flex-shrink-0">
                <Button disabled className="w-full sm:w-auto bg-[#FF847C] hover:bg-[#E56A5D]">Acceder a la App</Button>
              </div>
            </CardHeader>
            <CardContent className="grid md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center gap-2">
                <Heart className="h-10 w-10 text-[#FF847C]" />
                <h4 className="font-semibold">Salud Proactiva</h4>
                <p className="text-sm text-gray-600">Detecta cambios sutiles en el consumo de agua y alimento para una intervención temprana.</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Activity className="h-10 w-10 text-[#99B898]" />
                <h4 className="font-semibold">Análisis de Hábitos</h4>
                <p className="text-sm text-gray-600">Nuestra IA analiza patrones y te alerta sobre posibles riesgos de salud antes de que sean evidentes.</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Shield className="h-10 w-10 text-[#FECEAB]" />
                <h4 className="font-semibold">Entorno Controlado</h4>
                <p className="text-sm text-gray-600">Monitorea las condiciones ambientales para asegurar el máximo bienestar de tu compañero.</p>
              </div>
            </CardContent>
          </Card>

          {/* Early Adopter Section */}
          <Card className="bg-white">
            <div className="flex flex-col items-center gap-8 p-4 sm:p-6">
              <div className="text-center">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Únete a nuestro Programa Early Adopter</h2>
                <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
                  Sé uno de los primeros en transformar el cuidado de tu mascota. Tu feedback es clave para perfeccionar Kittypau.
                </p>
                <ul className="mt-6 space-y-4 inline-block text-left">
                  <li className="flex items-start gap-3">
                    <Gift className="h-6 w-6 text-[#FF847C] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold">Dispositivo y App Premium Gratis</h4>
                      <p className="text-sm text-gray-500">Recibe el dispositivo y acceso a la App Premium sin costo por 12 meses.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-[#99B898] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold">Valida una Solución Innovadora</h4>
                      <p className="text-sm text-gray-500">Ayúdanos a prevenir enfermedades y a validar el producto comercialmente.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="aspect-video w-full max-w-lg mx-auto">
                <iframe
                  className="w-full h-full rounded-lg shadow-md"
                  src="https://www.youtube.com/embed/T3kVEl7CE7k"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild className="bg-[#FF847C] hover:bg-[#E56A5D]">
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSd-Gr6pYmbmiPY7871SgSPRJ52ynLA1p6fL5Z6ZGhWTtLQQYw/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">Regístrate Ahora</a>
                </Button>
                <Button variant="outline"><a href="#">Leer Carta Compromiso</a></Button>
              </div>
            </div>
          </Card>
          
          {/* Videos Section */}
          <Card className="bg-[#FECEAB]">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl text-center text-[#F87A6D]">Nuestras Postulaciones</CardTitle>
              <CardDescription className="text-center text-gray-600">Conoce más sobre nuestro proyecto a través de los videos para Corfo.</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Video 1 */}
              <div className="flex flex-col items-center text-center p-4 bg-white/50 rounded-lg hover:shadow-lg transition-shadow">
                <Video className="h-10 w-10 text-[#FF847C] mb-4" />
                <h4 className="font-semibold mb-2">Demo 2 min. Semilla Inicia</h4>
                <p className="text-sm text-gray-500 mb-4">Corfo 2025</p>
                <Button variant="outline" asChild><a href="#" target="_blank" rel="noopener noreferrer">Ver Video</a></Button>
              </div>
              {/* Video 2 */}
              <div className="flex flex-col items-center text-center p-4 bg-white/50 rounded-lg hover:shadow-lg transition-shadow">
                <Video className="h-10 w-10 text-[#FF847C] mb-4" />
                <h4 className="font-semibold mb-2">Pitch 40 seg. Semilla Inicia</h4>
                <p className="text-sm text-gray-500 mb-4">Corfo 2025</p>
                <Button variant="outline" asChild><a href="https://www.youtube.com/watch?v=0LV1gTPgNlI" target="_blank" rel="noopener noreferrer">Ver Video</a></Button>
              </div>
              {/* Video 3 */}
              <div className="flex flex-col items-center text-center p-4 bg-white/50 rounded-lg hover:shadow-lg transition-shadow">
                <Video className="h-10 w-10 text-[#FF847C] mb-4" />
                <h4 className="font-semibold mb-2">Pitch 90 seg. Start-Up Build</h4>
                <p className="text-sm text-gray-500 mb-4">Corfo 2025</p>
                <Button variant="outline" asChild><a href="https://youtu.be/cYCQu3vZ6po" target="_blank" rel="noopener noreferrer">Ver Video</a></Button>
              </div>
            </CardContent>
          </Card>

        </main>

        {/* Footer Section */}
        <footer className="py-6 border-t">
          <div className="text-center">
            <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} KittyPau! Todos los derechos reservados.</p>
          </div>
        </footer>

      </div>
    </div>
  );
}