import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MessageCircle, Phone, Mail, Clock, Heart } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contato" className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Vamos Conversar?</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-amber-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Estou aqui para te ouvir e apoiar. Entre em contato da forma que se sentir mais confortável.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-green-50 to-amber-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <Heart className="mr-2 h-5 w-5 text-green-600" />
                Formas de Contato
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-green-100 rounded-full">
                    <MessageCircle className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">WhatsApp</p>
                    <p className="text-sm text-gray-600">(61) 99879-1063</p>
                    <p className="text-xs text-green-600">Resposta mais rápida</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-amber-100 rounded-full">
                    <Phone className="h-4 w-4 text-amber-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Telefone</p>
                    <p className="text-sm text-gray-600">(61) 99879-1063</p>
                    <p className="text-xs text-amber-600">Seg a Sex, 9h às 18h</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-purple-100 rounded-full">
                    <Mail className="h-4 w-4 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Email</p>
                    <p className="text-sm text-gray-600">raizesdecuidado@gmail.com</p>
                    <p className="text-xs text-purple-600">Resposta em até 24h</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Clock className="mr-2 h-5 w-5 text-green-600" />
                  Horários de Atendimento
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Segunda a Sexta</span>
                    <span className="font-medium">9h às 18h</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sábado</span>
                    <span className="font-medium">9h às 14h</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Domingo</span>
                    <span className="text-red-500">Fechado</span>
                  </div>
                  <div className="mt-3 p-2 bg-red-50 rounded text-xs text-red-700">
                    <strong>Emergências:</strong> WhatsApp disponível 24h
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-r from-green-100 to-amber-100 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-2">💚 Lembre-se</h4>
              <p className="text-sm text-gray-700">
                Todos os atendimentos são gratuitos. Você merece apoio e cuidado, independente de sua situação
                financeira. Estou aqui para te ajudar!
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-green-200">
            <CardHeader>
              <CardTitle className="text-xl">Envie uma Mensagem</CardTitle>
              <p className="text-sm text-gray-600">
                Conte um pouco sobre como posso te ajudar. Respondo com carinho e confidencialidade.
              </p>
            </CardHeader>
            <CardContent>
              <form
                className="space-y-4"
                onSubmit={(e) => {
                  e.preventDefault();

                  const form = e.target as HTMLFormElement;

                  const name = (form.querySelector("#name") as HTMLInputElement).value;
                  const phone = (form.querySelector("#phone") as HTMLInputElement).value;
                  const email = (form.querySelector("#email") as HTMLInputElement).value;
                  const subject = (form.querySelector("#subject") as HTMLSelectElement).value;
                  const message = (form.querySelector("#message") as HTMLTextAreaElement).value;

                  const mailto = `mailto:raizesdecuidado@gmail.com?subject=Nova mensagem de ${name}&body=` +
                    encodeURIComponent(
                      `👤 Nome: ${name}\n📱 WhatsApp: ${phone}\n📧 Email: ${email || "Não informado"}\n📝 Assunto: ${subject}\n\n💬 Mensagem:\n${message}`
                    );

                  window.location.href = mailto;
                }}
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Nome</Label>
                    <Input id="name" name="name" placeholder="Seu nome" />
                  </div>
                  <div>
                    <Label htmlFor="phone">WhatsApp</Label>
                    <Input id="phone" name="phone" placeholder="(11) 99999-9999" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email (opcional)</Label>
                  <Input id="email" name="email" type="email" placeholder="seu@email.com" />
                </div>

                <div>
                  <Label htmlFor="subject">Como posso te ajudar?</Label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full p-2 border border-gray-300 rounded-md text-sm"
                  >
                    <option>Apoio emocional</option>
                    <option>Questões de autoestima</option>
                    <option>Relacionamentos</option>
                    <option>Ansiedade/Depressão</option>
                    <option>Crescimento pessoal</option>
                    <option>Outro assunto</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="message">Sua mensagem</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Conte um pouco sobre sua situação ou dúvida. Tudo será tratado com confidencialidade."
                    rows={4}
                  />
                </div>

                <Button className="w-full bg-gradient-to-r from-green-600 to-amber-600 hover:from-green-700 hover:to-amber-700">
                  <Heart className="mr-2 h-4 w-4" />
                  Enviar Mensagem
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  Suas informações são tratadas com total confidencialidade e sigilo profissional.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
