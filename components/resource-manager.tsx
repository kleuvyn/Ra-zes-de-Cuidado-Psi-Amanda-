"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Upload, FileText, Music, Video, Edit, Trash2, Plus } from "lucide-react"

export function ResourceManager() {
  const [isAdding, setIsAdding] = useState(false)

  const [resources] = useState([
    {
      id: 1,
      title: "Guia de Auto Amor",
      type: "PDF",
      category: "Autoestima",
      downloads: 156,
      size: "2.3 MB",
      date: "2024-01-15",
    },
    {
      id: 2,
      title: "Técnicas de Relaxamento",
      type: "Audio",
      category: "Ansiedade",
      downloads: 89,
      size: "15.2 MB",
      date: "2024-01-12",
    },
    {
      id: 3,
      title: "Diário de Gratidão",
      type: "Template",
      category: "Bem-estar",
      downloads: 234,
      size: "1.1 MB",
      date: "2024-01-10",
    },
  ])

  const getIcon = (type: string) => {
    switch (type) {
      case "PDF":
        return <FileText className="h-5 w-5 text-red-500" />
      case "Audio":
        return <Music className="h-5 w-5 text-purple-500" />
      case "Video":
        return <Video className="h-5 w-5 text-blue-500" />
      default:
        return <FileText className="h-5 w-5 text-gray-500" />
    }
  }

  if (isAdding) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-800">Adicionar Novo Recurso</h2>
          <Button variant="outline" onClick={() => setIsAdding(false)} className="border-gray-300 bg-transparent">
            Voltar
          </Button>
        </div>

        <Card className="border-amber-200">
          <CardContent className="p-6 space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="resource-title">Título do Recurso</Label>
                <Input id="resource-title" placeholder="Ex: Guia de Meditação" />
              </div>
              <div>
                <Label htmlFor="resource-type">Tipo de Arquivo</Label>
                <select className="w-full p-2 border border-gray-300 rounded-md">
                  <option>PDF</option>
                  <option>Audio (MP3)</option>
                  <option>Video (MP4)</option>
                  <option>Template</option>
                  <option>Imagem</option>
                </select>
              </div>
            </div>

            <div>
              <Label htmlFor="resource-description">Descrição</Label>
              <Textarea
                id="resource-description"
                rows={3}
                placeholder="Descreva o que este recurso oferece e como pode ajudar..."
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="resource-category">Categoria</Label>
                <select className="w-full p-2 border border-gray-300 rounded-md">
                  <option>Autoestima</option>
                  <option>Ansiedade</option>
                  <option>Bem-estar</option>
                  <option>Relacionamentos</option>
                  <option>Maternidade</option>
                  <option>Crescimento Pessoal</option>
                </select>
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="featured" className="rounded" />
                <Label htmlFor="featured">Recurso em destaque</Label>
              </div>
            </div>

            <div className="border-2 border-dashed border-amber-300 rounded-lg p-8 text-center">
              <Upload className="h-12 w-12 text-amber-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Fazer Upload do Arquivo</h3>
              <p className="text-gray-600 mb-4">Arraste e solte seu arquivo aqui ou clique para selecionar</p>
              <Button className="bg-amber-600 hover:bg-amber-700">Selecionar Arquivo</Button>
              <p className="text-xs text-gray-500 mt-2">Formatos aceitos: PDF, MP3, MP4, DOC, JPG, PNG (máx. 50MB)</p>
            </div>

            <Button className="bg-green-600 hover:bg-green-700">
              <Plus className="mr-2 h-4 w-4" />
              Adicionar Recurso
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">Gerenciar Recursos</h2>
        <Button onClick={() => setIsAdding(true)} className="bg-amber-600 hover:bg-amber-700">
          <Plus className="mr-2 h-4 w-4" />
          Novo Recurso
        </Button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource) => (
          <Card key={resource.id} className="border-amber-200">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                {getIcon(resource.type)}
                <Badge variant="secondary">{resource.type}</Badge>
              </div>
              <CardTitle className="text-lg">{resource.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm text-gray-600 mb-4">
                <div className="flex justify-between">
                  <span>Categoria:</span>
                  <span>{resource.category}</span>
                </div>
                <div className="flex justify-between">
                  <span>Downloads:</span>
                  <span>{resource.downloads}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tamanho:</span>
                  <span>{resource.size}</span>
                </div>
                <div className="flex justify-between">
                  <span>Data:</span>
                  <span>{resource.date}</span>
                </div>
              </div>

              <div className="flex space-x-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1 border-blue-200 text-blue-600 hover:bg-blue-50 bg-transparent"
                >
                  <Edit className="mr-1 h-3 w-3" />
                  Editar
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="border-red-200 text-red-600 hover:bg-red-50 bg-transparent"
                >
                  <Trash2 className="h-3 w-3" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
