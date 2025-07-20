import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Sprout, Users, ChevronRight, Phone } from "lucide-react"

export function HeroSection() {
  return (
    <section id="inicio" className="py-20 px-4 bg-gradient-to-br from-green-100 via-white to-amber-100">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-br from-green-200 to-amber-200 rounded-full">
                <Sprout className="h-16 w-16 text-green-700" />
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              Você Não Está{" "}
              <span className="bg-gradient-to-r from-green-600 to-amber-600 bg-clip-text text-transparent">
                Sozinha
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Um espaço seguro e acolhedor para mulheres que buscam apoio psicológico, bem-estar emocional e crescimento
              pessoal. Aqui, suas raízes encontram terra fértil para florescer.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="border-green-200 bg-white/80 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Heart className="h-10 w-10 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-800 mb-2">Acolhimento Gratuito</h3>
                <p className="text-sm text-gray-600">Apoio psicológico acessível para todas as mulheres</p>
              </CardContent>
            </Card>

            <Card className="border-amber-200 bg-white/80 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Users className="h-10 w-10 text-amber-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-800 mb-2">Comunidade de Apoio</h3>
                <p className="text-sm text-gray-600">Conecte-se com outras mulheres em jornada similar</p>
              </CardContent>
            </Card>

            <Card className="border-green-200 bg-white/80 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Sprout className="h-10 w-10 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-800 mb-2">Crescimento Pessoal</h3>
                <p className="text-sm text-gray-600">Ferramentas para seu desenvolvimento emocional</p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <a
                href="https://www.observatoriodamulher.df.gov.br/rede-de-enfrentamento/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-600 to-amber-600 hover:from-green-700 hover:to-amber-700 text-white px-8 py-3"
                >
                  <Heart className="mr-2 h-5 w-5" />
                  Buscar Apoio
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=5561998791063&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-green-400 text-green-700 hover:bg-green-50 px-8 py-3 bg-transparent"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Conversar Agora
                </Button>
              </a>
          </div>


          <div className="mt-8 p-4 bg-gradient-to-r from-green-50 to-amber-50 rounded-lg">
            <p className="text-sm text-gray-700">
              <strong>💚 Atendimento 100% gratuito</strong> • Psicóloga em formação • Especializada em apoio feminino
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
