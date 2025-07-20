// Sistema simples de blog usando arquivos JSON
export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  category: string
  readTime: string
  publishedAt: string
  author: string
  tags: string[]
  featured: boolean
}

export interface Resource {
  id: string
  title: string
  description: string
  type: "PDF" | "Audio" | "Video" | "Template"
  downloadUrl: string
  category: string
  featured: boolean
}

// Dados dos posts (ela pode editar este arquivo)
export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Como Reconhecer Sinais de Ansiedade",
    excerpt: "Aprenda a identificar os primeiros sinais da ansiedade e como lidar com eles no dia a dia.",
    content: `
# Como Reconhecer Sinais de Ansiedade

A ansiedade é uma resposta natural do nosso corpo, mas quando se torna excessiva, pode prejudicar nossa qualidade de vida.

## Sinais Físicos
- Coração acelerado
- Suor excessivo
- Tremores
- Dificuldade para respirar

## Sinais Emocionais
- Preocupação constante
- Medo sem motivo aparente
- Irritabilidade
- Dificuldade de concentração

## O que fazer?
1. **Respire profundamente** - Técnica 4-7-8
2. **Pratique mindfulness** - Foque no presente
3. **Busque ajuda profissional** - Não hesite em procurar apoio

Lembre-se: você não está sozinha nessa jornada! 💚
    `,
    category: "Saúde Mental",
    readTime: "5 min",
    publishedAt: "2024-01-15",
    author: "Psicóloga",
    tags: ["ansiedade", "saúde mental", "bem-estar"],
    featured: true,
  },
  {
    id: "2",
    title: "Construindo Autoestima Após um Relacionamento Abusivo",
    excerpt: "Passos importantes para reconstruir sua confiança e amor próprio após experiências difíceis.",
    content: `
# Reconstruindo sua Autoestima

Sair de um relacionamento abusivo é um ato de coragem imenso. Agora é hora de se reconectar consigo mesma.

## Passos para a Cura
1. **Reconheça sua força** - Você teve coragem de sair
2. **Seja paciente consigo** - A cura leva tempo
3. **Cerque-se de apoio** - Família, amigos, profissionais
4. **Redescubra seus gostos** - O que te faz feliz?

## Exercícios Práticos
- Escreva 3 qualidades suas todos os dias
- Pratique atividades que te dão prazer
- Estabeleça limites saudáveis
- Celebre pequenas conquistas

Você merece amor, respeito e felicidade! 🌻
    `,
    category: "Autoestima",
    readTime: "8 min",
    publishedAt: "2024-01-10",
    author: "Psicóloga",
    tags: ["autoestima", "relacionamento abusivo", "cura"],
    featured: true,
  },
]

// Recursos disponíveis
export const resources: Resource[] = [
  {
    id: "1",
    title: "Guia de Auto Amor",
    description: "Exercícios práticos para desenvolver uma relação mais amorosa consigo mesma",
    type: "PDF",
    downloadUrl: "/resources/guia-auto-amor.pdf",
    category: "Autoestima",
    featured: true,
  },
  {
    id: "2",
    title: "Técnicas de Relaxamento",
    description: "Métodos simples para reduzir ansiedade e encontrar paz interior",
    type: "Audio",
    downloadUrl: "/resources/relaxamento.mp3",
    category: "Ansiedade",
    featured: true,
  },
]
