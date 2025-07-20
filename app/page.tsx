"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Sprout, Star } from "lucide-react"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { ResourcesSection } from "@/components/resources-section"
import { ContactSection } from "@/components/contact-section"
import { EmergencySupport } from "@/components/emergency-support"
import { useState } from "react"

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-amber-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b border-green-100 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-br from-green-100 to-amber-100 rounded-full">
                <Sprout className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-green-700 to-amber-600 bg-clip-text text-transparent">
                  Raízes de Cuidado
                </h1>
                <p className="text-xs text-gray-600">Psicologia e Bem-estar Feminino</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <a
                href="#inicio"
                className="text-gray-600 hover:text-green-600 transition-colors text-sm cursor-pointer"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("inicio")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Início
              </a>
              <a
                href="#servicos"
                className="text-gray-600 hover:text-green-600 transition-colors text-sm cursor-pointer"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("servicos")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Apoio
              </a>
              <a
                href="#recursos"
                className="text-gray-600 hover:text-green-600 transition-colors text-sm cursor-pointer"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("recursos")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Recursos
              </a>
              <a
                href="#sobre"
                className="text-gray-600 hover:text-green-600 transition-colors text-sm cursor-pointer"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("sobre")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Sobre
              </a>
              <a
                href="#contato"
                className="text-gray-600 hover:text-green-600 transition-colors text-sm cursor-pointer"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Contato
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-gray-600 hover:text-green-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-green-100">
              <nav className="flex flex-col space-y-3 pt-4">
                <a
                  href="#inicio"
                  className="text-gray-600 hover:text-green-600 transition-colors text-sm cursor-pointer py-2"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById("inicio")?.scrollIntoView({ behavior: "smooth" })
                    setMobileMenuOpen(false)
                  }}
                >
                  Início
                </a>
                <a
                  href="#servicos"
                  className="text-gray-600 hover:text-green-600 transition-colors text-sm cursor-pointer py-2"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById("servicos")?.scrollIntoView({ behavior: "smooth" })
                    setMobileMenuOpen(false)
                  }}
                >
                  Apoio
                </a>
                <a
                  href="#recursos"
                  className="text-gray-600 hover:text-green-600 transition-colors text-sm cursor-pointer py-2"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById("recursos")?.scrollIntoView({ behavior: "smooth" })
                    setMobileMenuOpen(false)
                  }}
                >
                  Recursos
                </a>
                <a
                  href="#sobre"
                  className="text-gray-600 hover:text-green-600 transition-colors text-sm cursor-pointer py-2"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById("sobre")?.scrollIntoView({ behavior: "smooth" })
                    setMobileMenuOpen(false)
                  }}
                >
                  Sobre
                </a>
                <a
                  href="#contato"
                  className="text-gray-600 hover:text-green-600 transition-colors text-sm cursor-pointer py-2"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })
                    setMobileMenuOpen(false)
                  }}
                >
                  Contato
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Emergency Support Button */}
      <EmergencySupport />

      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Resources Section */}
      <ResourcesSection />

      {/* About Section */}
      <section id="sobre" className="py-16 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Sobre Mim</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-amber-500 mx-auto mb-6"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-green-50 to-amber-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Minha História</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Sou psicóloga em formação, nascida e criada em um acampamento do MST. Minha trajetória me ensinou
                    que a luta por dignidade e bem-estar vai além da terra - passa pelo cuidado com nossa mente e
                    coração.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-amber-50 to-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Minha Missão</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Acredito que toda mulher merece apoio psicológico de qualidade, independente de sua condição social.
                    Meu objetivo é criar um espaço seguro onde possamos crescer juntas, cultivando nossa saúde mental
                    como cultivamos a terra.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <Card className="border-green-200">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-green-100 to-amber-100 rounded-full w-fit">
                      <Heart className="h-8 w-8 text-green-600" />
                    </div>
                    <CardTitle className="text-lg">Valores que me Guiam</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Star className="h-4 w-4 text-amber-500" />
                        <span className="text-sm text-gray-700">Acolhimento sem julgamento</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Star className="h-4 w-4 text-amber-500" />
                        <span className="text-sm text-gray-700">Psicologia acessível para todas</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Star className="h-4 w-4 text-amber-500" />
                        <span className="text-sm text-gray-700">Respeito à diversidade</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Star className="h-4 w-4 text-amber-500" />
                        <span className="text-sm text-gray-700">Empoderamento feminino</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Star className="h-4 w-4 text-amber-500" />
                        <span className="text-sm text-gray-700">Cuidado integral</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="text-center p-6 bg-gradient-to-r from-green-100 to-amber-100 rounded-lg">
                  <p className="text-gray-700 italic">
                    "Assim como uma semente precisa de cuidado para florescer, nossa mente também merece atenção e
                    carinho para crescer."
                  </p>
                  <p className="text-sm text-gray-600 mt-2">- Com carinho ❤️</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <footer className="bg-gradient-to-r from-green-800 to-amber-700 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sprout className="h-6 w-6" />
            <span className="text-lg font-semibold">Raízes de Cuidado</span>
          </div>
          <p className="text-green-100 text-sm mb-4">Psicologia e Bem-estar Feminino • Apoio gratuito para mulheres</p>
          <div className="flex justify-center space-x-6 text-sm text-green-200">
            <span>💚 Feito com amor</span>
            <span>🌱 Para mulheres que florescem</span>
            <span>🤝 Apoio sempre gratuito</span>
          </div>
          <p className="text-xs text-green-300 mt-4">
            © 2024 Raízes de Cuidado - Todos os direitos reservados |{" "}
            <a href="/admin" className="text-green-300 hover:text-green-100 underline">
              Admin
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}
