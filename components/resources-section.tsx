import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Heart, Smile, Users, Download, ExternalLink } from "lucide-react"

export function ResourcesSection() {
  const resources = [
    {
      icon: <Heart className="h-6 w-6 text-red-500" />,
      title: "Guia de Auto Amor",
      description: "Exercícios práticos para desenvolver uma relação mais amorosa consigo mesma",
      type: "PDF Gratuito",
      color: "red",
      url: "",
    },
    {
      icon: <Smile className="h-6 w-6 text-yellow-500" />,
      title: "Técnicas de Relaxamento",
      description: "Métodos simples para reduzir ansiedade e encontrar paz interior",
      type: "Áudio Guiado",
      color: "yellow",
      url: "",
    },
    {
      icon: <Users className="h-6 w-6 text-purple-500" />,
      title: "Comunicação Assertiva",
      description: "Como expressar suas necessidades de forma clara e respeitosa",
      type: "Vídeo Tutorial",
      color: "purple",
      url: "",
    },
    {
      icon: <BookOpen className="h-6 w-6 text-blue-500" />,
      title: "Diário de Gratidão",
      description: "Template para praticar gratidão e melhorar seu bem-estar emocional",
      type: "Template",
      color: "blue",
      url: "",
    },
  ]

  const articles = [
    {
      title: "Como Reconhecer Sinais de Ansiedade",
      excerpt: "Aprenda a identificar os primeiros sinais da ansiedade e como lidar com eles no dia a dia.",
      readTime: "5 min",
      category: "Saúde Mental",
      url: ""
    },
    {
      title: "Construindo Autoestima Após um Relacionamento Abusivo",
      excerpt: "Passos importantes para reconstruir sua confiança e amor próprio após experiências difíceis.",
      readTime: "8 min",
      category: "Autoestima",
      url: ""
    },
    {
      title: "A Importância do Autocuidado para Mães",
      excerpt: "Por que cuidar de si mesma não é egoísmo, mas necessidade para ser uma mãe presente.",
      readTime: "6 min",
      category: "Maternidade",
      url: ""
    },
  ]

  // Mapeia tipo do recurso para texto do botão
  const buttonTextMap: Record<string, string> = {
    "PDF Gratuito": "Baixar PDF",
    "Áudio Guiado": "Ouvir Áudio",
    "Vídeo Tutorial": "Assistir Vídeo",
    "Template": "Baixar Template",
    "default": "Acessar",
  }

  return (
    <section id="recursos" className="py-16 px-4 bg-white/50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Recursos Gratuitos</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-amber-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Materiais e conteúdos desenvolvidos especialmente para apoiar sua jornada de bem-estar e crescimento pessoal.
          </p>
        </div>

        {/* Downloadable Resources */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">Materiais para Download</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <Card key={index} className={`hover:shadow-lg transition-shadow border-${resource.color}-200`}>
                <CardHeader className="text-center pb-3">
                  <div className={`mx-auto mb-3 p-3 bg-${resource.color}-50 rounded-full w-fit`}>{resource.icon}</div>
                  <CardTitle className="text-lg">{resource.title}</CardTitle>
                  <div
                    className={`text-xs bg-${resource.color}-100 text-${resource.color}-700 px-2 py-1 rounded-full w-fit mx-auto`}
                  >
                    {resource.type}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="mb-4 text-sm">{resource.description}</CardDescription>
                  {resource.url ? (
                    <a href={resource.url} download target="_blank" rel="noopener noreferrer">
                      <Button
                        size="sm"
                        className="w-full bg-gradient-to-r from-green-500 to-amber-500 hover:from-green-600 hover:to-amber-600"
                      >
                        <Download className="mr-2 h-4 w-4" />
                        {buttonTextMap[resource.type] || buttonTextMap["default"]}
                      </Button>
                    </a>
                  ) : (
                    <Button
                      size="sm"
                      disabled
                      className="w-full border-gray-300 bg-gray-100 cursor-not-allowed text-gray-400"
                    >
                      Sem arquivo disponível
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Blog Articles */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">Artigos Recentes</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-green-200">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                      {article.category}
                    </span>
                    <span className="text-xs text-gray-500">{article.readTime}</span>
                  </div>
                  <CardTitle className="text-lg leading-tight">{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{article.excerpt}</CardDescription>
                  {article.url ? (
                    <a href={article.url} target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full border-green-200 hover:bg-green-50 bg-transparent"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Ler Artigo
                      </Button>
                    </a>
                  ) : (
                    <Button
                      variant="outline"
                      size="sm"
                      disabled
                      className="w-full border-gray-300 bg-gray-100 cursor-not-allowed text-gray-400"
                    >
                      Em breve
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <a href="/artigos">
              <Button
                variant="outline"
                className="border-amber-300 text-amber-700 hover:bg-amber-50 bg-transparent"
              >
                Ver Todos os Artigos
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}