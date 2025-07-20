"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { FileText, Upload, Settings, Heart, Plus, Save, Eye, Download, Lock } from "lucide-react"
import { AdminLogin } from "@/components/admin-login"

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [activeTab, setActiveTab] = useState("dashboard")

  // Estado para posts e recursos
  const [posts, setPosts] = useState([
    {
      title: "Exemplo de Post",
      excerpt: "Descrição do post exemplo...",
      readTime: "5 min",
      category: "Exemplo",
      url: ""
    }
  ])
  const [resources, setResources] = useState([
    {
      icon: <Heart className="h-6 w-6 text-red-500" />,
      title: "Recurso Exemplo",
      description: "Descrição do recurso exemplo",
      type: "PDF Gratuito",
      color: "red",
      url: ""
    }
  ])

  // Estado para criar/editar post
  const [postForm, setPostForm] = useState({
    title: "",
    excerpt: "",
    readTime: "",
    category: "",
    url: "",
  })

  // Estado para criar/editar recurso
  const [resourceForm, setResourceForm] = useState({
    title: "",
    description: "",
    type: "",
    color: "green",
    url: "",
  })

  // Funções para manipular o formulário dos posts
  function handlePostChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target
    setPostForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleAddPost() {
    if (!postForm.title || !postForm.excerpt) {
      alert("Título e descrição são obrigatórios.")
      return
    }
    setPosts((prev) => [...prev, postForm])
    setPostForm({ title: "", excerpt: "", readTime: "", category: "", url: "" })
    alert("Post adicionado com sucesso!")
  }

  // Funções para manipular o formulário dos recursos
  function handleResourceChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target
    setResourceForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleAddResource() {
    if (!resourceForm.title || !resourceForm.description) {
      alert("Título e descrição são obrigatórios.")
      return
    }
    // Para simplificar, o ícone será um coração vermelho (você pode melhorar aqui)
    const newResource = {
      icon: <Heart className="h-6 w-6 text-red-500" />,
      ...resourceForm,
    }
    setResources((prev) => [...prev, newResource])
    setResourceForm({ title: "", description: "", type: "", color: "green", url: "" })
    alert("Recurso adicionado com sucesso!")
  }

  if (!isAuthenticated) {
    return <AdminLogin onLogin={() => setIsAuthenticated(true)} />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-amber-50">
      {/* Admin Header */}
      <header className="bg-white border-b border-green-200 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-br from-green-100 to-amber-100 rounded-full">
              <Settings className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">Painel Administrativo</h1>
              <p className="text-sm text-gray-600">Raízes de Cuidado</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open("/", "_blank")}
              className="border-green-200 text-green-600 hover:bg-green-50 bg-transparent"
            >
              <Eye className="mr-2 h-4 w-4" />
              Ver Site
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsAuthenticated(false)}
              className="border-red-200 text-red-600 hover:bg-red-50 bg-transparent"
            >
              <Lock className="mr-2 h-4 w-4" />
              Sair
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Navigation Tabs */}
        <div className="flex space-x-1 mb-8 bg-white rounded-lg p-1 border border-green-200">
          {[
            { id: "dashboard", label: "Dashboard", icon: Settings },
            { id: "posts", label: "Artigos", icon: FileText },
            { id: "resources", label: "Recursos", icon: Upload },
            { id: "settings", label: "Configurações", icon: Heart },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors ${
                activeTab === tab.id
                  ? "bg-green-100 text-green-700"
                  : "text-gray-600 hover:text-green-600 hover:bg-green-50"
              }`}
            >
              <tab.icon className="h-4 w-4" />
              <span className="text-sm font-medium">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Dashboard */}
        {activeTab === "dashboard" && (
          <div className="space-y-6">
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="border-green-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Total de Artigos</p>
                      <p className="text-2xl font-bold text-green-600">{posts.length}</p>
                    </div>
                    <FileText className="h-8 w-8 text-green-500" />
                  </div>
                </CardContent>
              </Card>

              <Card className="border-amber-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Recursos Disponíveis</p>
                      <p className="text-2xl font-bold text-amber-600">{resources.length}</p>
                    </div>
                    <Download className="h-8 w-8 text-amber-500" />
                  </div>
                </CardContent>
              </Card>

              {/* Outros cards como visualizações e contatos podem ficar estáticos */}
            </div>
          </div>
        )}

        {/* Posts Management */}
        {activeTab === "posts" && (
          <Card className="border-green-200 p-6">
            <CardHeader>
              <CardTitle className="mb-4">Gerenciar Artigos</CardTitle>
            </CardHeader>

            <div className="space-y-4 mb-6">
              <Input
                name="title"
                placeholder="Título"
                value={postForm.title}
                onChange={handlePostChange}
                className="mb-2"
              />
              <Textarea
                name="excerpt"
                placeholder="Resumo/Descrição"
                value={postForm.excerpt}
                onChange={handlePostChange}
                className="mb-2"
              />
              <Input
                name="readTime"
                placeholder="Tempo de leitura (ex: 5 min)"
                value={postForm.readTime}
                onChange={handlePostChange}
                className="mb-2"
              />
              <Input
                name="category"
                placeholder="Categoria"
                value={postForm.category}
                onChange={handlePostChange}
                className="mb-2"
              />
              <Input
                name="url"
                placeholder="URL (link do artigo)"
                value={postForm.url}
                onChange={handlePostChange}
                className="mb-2"
              />

              <Button onClick={handleAddPost} className="w-full bg-green-600 hover:bg-green-700">
                <Plus className="mr-2 h-4 w-4" />
                Adicionar Artigo
              </Button>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Artigos Cadastrados</h3>
              {posts.length === 0 && <p>Nenhum artigo cadastrado.</p>}
              {posts.map((post, i) => (
                <Card key={i} className="mb-3 border-green-200">
                  <CardContent>
                    <h4 className="font-bold">{post.title}</h4>
                    <p>{post.excerpt}</p>
                    <small className="text-gray-500">
                      {post.category} — {post.readTime}
                    </small>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Card>
        )}

        {/* Resources Management */}
        {activeTab === "resources" && (
          <Card className="border-green-200 p-6">
            <CardHeader>
              <CardTitle className="mb-4">Gerenciar Recursos</CardTitle>
            </CardHeader>

            <div className="space-y-4 mb-6">
              <Input
                name="title"
                placeholder="Título"
                value={resourceForm.title}
                onChange={handleResourceChange}
                className="mb-2"
              />
              <Textarea
                name="description"
                placeholder="Descrição"
                value={resourceForm.description}
                onChange={handleResourceChange}
                className="mb-2"
              />
              <Input
                name="type"
                placeholder="Tipo (ex: PDF Gratuito, Áudio Guiado)"
                value={resourceForm.type}
                onChange={handleResourceChange}
                className="mb-2"
              />
              <Input
                name="color"
                placeholder="Cor (ex: red, green, blue)"
                value={resourceForm.color}
                onChange={handleResourceChange}
                className="mb-2"
              />
              <Input
                name="url"
                placeholder="URL do arquivo"
                value={resourceForm.url}
                onChange={handleResourceChange}
                className="mb-2"
              />

              <Button onClick={handleAddResource} className="w-full bg-green-600 hover:bg-green-700">
                <Plus className="mr-2 h-4 w-4" />
                Adicionar Recurso
              </Button>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Recursos Cadastrados</h3>
              {resources.length === 0 && <p>Nenhum recurso cadastrado.</p>}
              {resources.map((res, i) => (
                <Card key={i} className="mb-3 border-green-200 flex items-center space-x-3">
                  <div>{res.icon}</div>
                  <div>
                    <h4 className="font-bold">{res.title}</h4>
                    <p className="text-sm">{res.description}</p>
                    <small className="text-gray-500">
                      {res.type} — Cor: {res.color}
                    </small>
                  </div>
                </Card>
              ))}
            </div>
          </Card>
        )}

        {/* Settings */}
        {activeTab === "settings" && (
          <Card className="border-green-200">
            <CardHeader>
              <CardTitle>Configurações do Site</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="site-name">Nome do Site</Label>
                    <Input id="site-name" defaultValue="Raízes de Cuidado" />
                  </div>
                  <div>
                    <Label htmlFor="site-description">Descrição</Label>
                    <Input id="site-description" defaultValue="Psicologia e Bem-estar Feminino" />
                  </div>
                  <div>
                    <Label htmlFor="author-name">Seu Nome</Label>
                    <Input id="author-name" placeholder="Digite seu nome" />
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="whatsapp">WhatsApp</Label>
                    <Input id="whatsapp" placeholder="(11) 99999-9999" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="seu@email.com" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Telefone</Label>
                    <Input id="phone" placeholder="(11) 99999-9999" />
                  </div>
                </div>
              </div>

              <div>
                <Label htmlFor="bio">Sua História/Bio</Label>
                <Textarea
                  id="bio"
                  rows={4}
                  defaultValue="Sou psicóloga em formação, nascida e criada em um acampamento do MST..."
                />
              </div>

              <Button className="bg-green-600 hover:bg-green-700">
                <Save className="mr-2 h-4 w-4" />
                Salvar Configurações
              </Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
