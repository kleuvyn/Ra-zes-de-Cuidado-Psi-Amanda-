import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function ArtigosPage() {
  // Simule os artigos — na prática você pode buscar via API ou importar JSON
  const [articles] = useState([
    {
      title: "Como Reconhecer Sinais de Ansiedade",
      excerpt: "Aprenda a identificar os primeiros sinais da ansiedade e como lidar com eles no dia a dia.",
      readTime: "5 min",
      category: "Saúde Mental",
      url: "https://seusite.com/artigos/ansiedade",
    },
    {
      title: "Construindo Autoestima Após um Relacionamento Abusivo",
      excerpt: "Passos importantes para reconstruir sua confiança e amor próprio após experiências difíceis.",
      readTime: "8 min",
      category: "Autoestima",
      url: "https://seusite.com/artigos/autoestima",
    },
    {
      title: "A Importância do Autocuidado para Mães",
      excerpt: "Por que cuidar de si mesma não é egoísmo, mas necessidade para ser uma mãe presente.",
      readTime: "6 min",
      category: "Maternidade",
      url: "", // Sem link ainda
    },
  ])

  return (
    <section className="min-h-screen bg-white py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Artigos</h1>

        <div className="grid gap-6">
          {articles.map((article, i) => (
            <Card key={i} className="border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between mb-2">
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">{article.category}</span>
                  <span className="text-xs text-gray-500">{article.readTime}</span>
                </div>
                <CardTitle className="text-xl">{article.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-700">{article.excerpt}</p>
                {article.url ? (
                  <a href={article.url} target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-green-200 hover:bg-green-50 bg-transparent"
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
                    className="border-gray-300 bg-gray-100 cursor-not-allowed text-gray-400"
                  >
                    Em breve
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link href="/">
            <Button variant="outline" className="border-amber-300 text-amber-700 hover:bg-amber-50 bg-transparent">
              Voltar para o Início
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
