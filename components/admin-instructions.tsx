import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Edit } from "lucide-react"

export function AdminInstructions() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <Card className="border-green-200">
        <CardHeader>
          <CardTitle className="flex items-center text-green-700">
            <Edit className="mr-2 h-5 w-5" />
            Como Adicionar/Editar Conteúdo
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-semibold text-green-800 mb-2">📝 Para Adicionar um Novo Post:</h3>
            <ol className="text-sm text-green-700 space-y-1 list-decimal list-inside">
              <li>
                Abra o arquivo <code className="bg-green-100 px-1 rounded">lib/blog-system.ts</code>
              </li>
              <li>
                Copie um post existente na lista <code className="bg-green-100 px-1 rounded">blogPosts</code>
              </li>
              <li>Edite o conteúdo com suas informações</li>
              <li>Salve o arquivo</li>
              <li>O site será atualizado automaticamente</li>
            </ol>
          </div>

          <div className="bg-amber-50 p-4 rounded-lg">
            <h3 className="font-semibold text-amber-800 mb-2">📁 Para Adicionar Recursos (PDFs, áudios):</h3>
            <ol className="text-sm text-amber-700 space-y-1 list-decimal list-inside">
              <li>
                Faça upload do arquivo para a pasta <code className="bg-amber-100 px-1 rounded">public/resources/</code>
              </li>
              <li>
                Adicione uma entrada na lista <code className="bg-amber-100 px-1 rounded">resources</code>
              </li>
              <li>Configure o link de download</li>
              <li>Salve e publique</li>
            </ol>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-blue-800 mb-2">✏️ Formato do Conteúdo:</h3>
            <pre className="text-xs bg-blue-100 p-2 rounded overflow-x-auto">
              {`{
  id: "3",
  title: "Seu Título Aqui",
  excerpt: "Resumo do post...",
  content: \`
# Título Principal

Seu conteúdo aqui...

## Subtítulo

- Lista de itens
- Outro item

**Texto em negrito**
*Texto em itálico*
  \`,
  category: "Categoria",
  readTime: "X min",
  publishedAt: "2024-01-20",
  author: "Seu Nome",
  tags: ["tag1", "tag2"],
  featured: true
}`}
            </pre>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
