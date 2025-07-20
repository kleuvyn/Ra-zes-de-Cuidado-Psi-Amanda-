import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, Smile, Users, Phone, MessageCircle, Sprout } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: "Apoio Emocional",
      description: "Escuta acolhedora para momentos difíceis, ansiedade, depressão e questões emocionais.",
      features: ["Sessões individuais", "Apoio em crises", "Técnicas de relaxamento"],
      color: "red",
    },
    {
      icon: <Smile className="h-8 w-8 text-yellow-500" />,
      title: "Auto Amor e Autoestima",
      description: "Desenvolva uma relação saudável consigo mesma e fortaleça sua autoconfiança.",
      features: ["Exercícios de autocompaixão", "Técnicas de autoaceitação", "Fortalecimento da autoestima"],
      color: "yellow",
    },
    {
      icon: <Users className="h-8 w-8 text-purple-500" />,
      title: "Relacionamentos Saudáveis",
      description: "Orientação para construir e manter relacionamentos equilibrados e respeitosos.",
      features: ["Comunicação assertiva", "Limites saudáveis", "Resolução de conflitos"],
      color: "purple",
    },
    {
      icon: <Sprout className="h-8 w-8 text-green-500" />,
      title: "Crescimento Pessoal",
      description: "Ferramentas para seu desenvolvimento pessoal e descoberta do seu potencial.",
      features: ["Autoconhecimento", "Definição de objetivos", "Superação de traumas"],
      color: "green",
    },
  ]

  return (
    <section id="servicos" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Como Posso Te Apoiar</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-amber-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ofereço apoio psicológico gratuito e acolhedor, com foco no bem-estar emocional e crescimento pessoal de
            mulheres.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className={`hover:shadow-lg transition-shadow border-${service.color}-200`}>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className={`p-3 bg-${service.color}-50 rounded-full`}>{service.icon}</div>
                  <div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                    <Badge variant="secondary" className="mt-1">
                      Gratuito
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4 text-gray-600">{service.description}</CardDescription>

                <div className="space-y-2 mb-4">
                  <h4 className="text-sm font-medium text-gray-800">Inclui:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <div className={`w-1.5 h-1.5 bg-${service.color}-500 rounded-full`}></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                 <a
                    href="https://api.whatsapp.com/send/?phone=5561998791063&text&type=phone_number&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <Button className="w-full bg-gradient-to-r from-green-500 to-amber-500 hover:from-green-600 hover:to-amber-600">
                      Agendar Conversa
                    </Button>
                  </a>
              </CardContent>
            </Card>
          ))}
        </div>
        {/* Contact Options */}
        <div className="bg-gradient-to-r from-green-50 to-amber-50 rounded-lg p-8">
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Pronta para Começar?</h3>
            <p className="text-gray-600">Escolha a forma mais confortável para você entrar em contato</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
              <a
                href="https://api.whatsapp.com/send/?phone=5561998791063&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button 
                  size="lg"
                  variant="outline"
                  className="w-full bg-green-600 hover:bg-green-700 text-white h-16"
                >
                  <MessageCircle className="mr-3 h-5 w-5" />
                  <div className="text-left">
                    <div className="font-medium">WhatsApp</div>
                    <div className="text-sm opacity-90">Resposta rápida</div>
                  </div>
                </Button>
              </a>

              <a
                href="https://api.whatsapp.com/send/?phone=5561998791063&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-amber-300 text-amber-700 hover:bg-amber-50 h-16 bg-transparent"
                >
                  <Phone className="mr-3 h-5 w-5" />
                  <div className="text-left">
                    <div className="font-medium">Ligação</div>
                    <div className="text-sm opacity-70">Conversa direta</div>
                  </div>
                </Button>
              </a>
          </div>
        </div>
      </div>
    </section>
  )
}
