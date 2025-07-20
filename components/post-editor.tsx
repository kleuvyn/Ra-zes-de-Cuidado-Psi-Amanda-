"use client"

import { useState, ChangeEvent } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Plus, Edit, Trash2, Save, Eye } from "lucide-react"

interface Post {
  id: number
  title: string
  category: string
  excerpt: string
  content: string
  status: string
  date: string
  views: number
  readTime?: string
  tags?: string
}

export function PostEditor() {
  const [isEditing, setIsEditing] = useState(false)
  const [editingPost, setEditingPost] = useState<Post | null>(null)

  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      title: "Como Reconhecer Sinais de Ansiedade",
      category: "Saúde Mental",
      excerpt: "Aprenda a identificar os primeiros sinais da ansiedade e como lidar com eles no dia a dia.",
      content: "Conteúdo completo do artigo 1",
      status: "Publicado",
      date: "2024-01-15",
      views: 245,
      readTime: "5 min",
      tags: "ansiedade, saúde mental",
    },
    {
      id: 2,
      title: "Construindo Autoestima Após um Relacionamento Abusivo",
      category: "Autoestima",
      excerpt: "Passos importantes para reconstruir sua confiança e amor próprio após experiências difíceis.",
      content: "Conteúdo completo do artigo 2",
      status: "Publicado",
      date: "2024-01-10",
      views: 189,
      readTime: "7 min",
      tags: "autoestima, relacionamentos",
    },
    {
      id: 3,
      title: "A Importância do Autocuidado para Mães",
      category: "Maternidade",
      excerpt: "Por que cuidar de si mesma não é egoísmo, mas necessidade para ser uma mãe presente.",
      content: "Conteúdo completo do artigo 3",
      status: "Rascunho",
      date: "2024-01-08",
      views: 0,
      readTime: "4 min",
      tags: "maternidade, autocuidado",
    },
  ])

  // Estado para os campos do formulário
  const [formData, setFormData] = useState({
    title: "",
    category: "Saúde Mental",
    excerpt: "",
    content: "",
    status: "Rascunho",
    readTime: "",
    tags: "",
  })

  // Abrir o editor para um novo post
  const handleNewPost = () => {
    setFormData({
      title: "",
      category: "Saúde Mental",
      excerpt: "",
      content: "",
      status: "Rascunho",
      readTime: "",
      tags: "",
    })
    setEditingPost(null)
    setIsEditing(true)
  }

  // Abrir o editor para editar um post existente
  const handleEditPost = (post: Post) => {
    setFormData({
      title: post.title,
      category: post.category,
      excerpt: post.excerpt,
      content: post.content,
      status: post.status,
      readTime: post.readTime || "",
      tags: post.tags || "",
    })
    setEditingPost(post)
    setIsEditing(true)
  }

  // Apagar um post da lista
  const handleDeletePost = (postId: number) => {
    if (confirm("Tem certeza que deseja apagar este artigo?")) {
      setPosts(posts.filter((p) => p.id !== postId))
      if (editingPost?.id === postId) {
        setIsEditing(false)
        setEditingPost(null)
      }
    }
  }

  // Atualizar os campos do formulário
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  // Salvar o post (novo ou editado)
  const handleSave = () => {
    if (!formData.title.trim()) {
      alert("O título é obrigatório!")
      return
    }

    if (editingPost) {
      // Atualizar post existente
      setPosts((prev) =>
        prev.map((p) =>
          p.id === editingPost.id
            ? { ...p, ...formData }
            : p
        )
      )
    } else {
      // Criar novo post
      const newPost: Post = {
        id: posts.length ? Math.max(...posts.map(p => p.id)) + 1 : 1,
        ...formData,
        date: new Date().toISOString().slice(0, 10),
        views: 0,
      }
      setPosts((prev) => [...prev, newPost])
    }

    setIsEditing(false)
    setEditingPost(null)
  }

  // Cancelar edição
  const handleCancel = () => {
    setIsEditing(false)
    setEditingPost(null)
  }

  if (isEditing) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-800">{editingPost ? "Editar Artigo" : "Novo Artigo"}</h2>
          <Button variant="outline" onClick={handleCancel} className="border-gray-300 bg-transparent">
            Voltar
          </Button>
        </div>

        <Card className="border-green-200">
          <CardContent className="p-6 space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="title">Título do Artigo</Label>
                <Input
                  id="title"
                  placeholder="Digite o título do seu artigo"
                  value={formData.title}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor="category">Categoria</Label>
                <select
                  id="category"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={formData.category}
                  onChange={handleChange}
                >
                  <option>Saúde Mental</option>
                  <option>Autoestima</option>
                  <option>Relacionamentos</option>
                  <option>Maternidade</option>
                  <option>Ansiedade</option>
                  <option>Depressão</option>
                </select>
              </div>
            </div>

            <div>
              <Label htmlFor="excerpt">Resumo (aparece na lista de artigos)</Label>
              <Textarea
                id="excerpt"
                rows={2}
                placeholder="Escreva um resumo atrativo do seu artigo..."
                value={formData.excerpt}
                onChange={handleChange}
              />
            </div>

            <div>
              <Label htmlFor="content">Conteúdo do Artigo</Label>
              <Textarea
                id="content"
                rows={12}
                placeholder={`Escreva seu artigo aqui...

Dicas de formatação:
# Título Principal
## Subtítulo
**Texto em negrito**
*Texto em itálico*

- Lista de itens
- Outro item

1. Lista numerada
2. Segundo item`}
                value={formData.content}
                onChange={handleChange}
              />
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="readTime">Tempo de Leitura</Label>
                <Input
                  id="readTime"
                  placeholder="5 min"
                  value={formData.readTime}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor="tags">Tags (separadas por vírgula)</Label>
                <Input
                  id="tags"
                  placeholder="ansiedade, bem-estar, saúde"
                  value={formData.tags}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor="status">Status</Label>
                <select
                  id="status"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  value={formData.status}
                  onChange={handleChange}
                >
                  <option>Rascunho</option>
                  <option>Publicado</option>
                  <option>Agendado</option>
                </select>
              </div>
            </div>

            <div className="flex space-x-4">
              <Button className="bg-green-600 hover:bg-green-700" onClick={handleSave}>
                <Save className="mr-2 h-4 w-4" />
                Salvar Artigo
              </Button>
              <Button
                variant="outline"
                className="border-blue-200 text-blue-600 hover:bg-blue-50 bg-transparent"
                onClick={() => alert("Visualização não implementada")}
              >
                <Eye className="mr-2 h-4 w-4" />
                Visualizar
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Gerenciar Artigos</h2>
        <Button className="bg-green-600 hover:bg-green-700" onClick={handleNewPost}>
          <Plus className="mr-2 h-4 w-4" />
          Novo Artigo
        </Button>
      </div>

      <div className="grid gap-6">
        {posts.map((post) => (
          <Card key={post.id} className="border-green-200 hover:shadow-lg transition-shadow">
            <CardHeader className="flex justify-between items-center">
              <div>
                <Badge variant={post.status === "Publicado" ? "default" : "outline"} className="mb-1">
                  {post.status}
                </Badge>
                <h3 className="text-lg font-semibold text-gray-800">{post.title}</h3>
                <p className="text-sm text-gray-600">
                  {post.category} - {post.date} - {post.views} visualizações - {post.readTime}
                </p>
                <p className="text-sm text-gray-600">Tags: {post.tags}</p>
              </div>
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleEditPost(post)}
                  title="Editar"
                  aria-label={`Editar artigo ${post.title}`}
                >
                  <Edit className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleDeletePost(post.id)}
                  title="Excluir"
                  aria-label={`Excluir artigo ${post.title}`}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}
