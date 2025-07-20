"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Phone, MessageCircle, AlertTriangle, X, Heart } from "lucide-react"

export function EmergencySupport() {
  const [showEmergency, setShowEmergency] = useState(false)

  return (
    <>
      {/* Floating Emergency Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setShowEmergency(true)}
          className="h-14 w-14 rounded-full bg-red-500 hover:bg-red-600 shadow-lg hover:shadow-xl transition-all duration-200 p-0"
          title="Preciso de Ajuda"
        >
          <Heart className="h-6 w-6 text-white" />
        </Button>
      </div>

      {/* Emergency Modal */}
      <Dialog open={showEmergency} onOpenChange={setShowEmergency}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <AlertTriangle className="h-6 w-6 text-red-500" />
                <DialogTitle className="text-red-800">Precisa de Ajuda?</DialogTitle>
              </div>

            </div>
            <DialogDescription>
              Se você está passando por um momento difícil, não hesite em buscar ajuda.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            {/* Emergency Services */}
            <div className="space-y-3">
              <p className="text-sm font-medium text-gray-700">Emergências Nacionais:</p>

              <Button
                className="w-full bg-red-500 hover:bg-red-600 text-white h-12"
                onClick={() => window.open("tel:188", "_self")}
              >
                <Phone className="mr-2 h-5 w-5" />
                CVV - Centro de Valorização da Vida - 188
              </Button>

              <Button
                className="w-full bg-purple-500 hover:bg-purple-600 text-white h-12"
                onClick={() => window.open("tel:180", "_self")}
              >
                <Phone className="mr-2 h-5 w-5" />
                Central de Atendimento à Mulher - 180
              </Button>
            </div>

            {/* Personal Support */}
            <div className="border-t pt-4 space-y-3">
              <p className="text-sm font-medium text-gray-700">Apoio Pessoal:</p>

              <Button
                variant="outline"
                className="w-full border-green-200 text-green-600 hover:bg-green-50 h-12 bg-transparent"
                onClick={() => window.open("https://wa.me/5561998791063", "_blank")}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp - Resposta Rápida
              </Button>

              <Button
                variant="outline"
                className="w-full border-amber-200 text-amber-600 hover:bg-amber-50 h-12 bg-transparent"
                onClick={() => window.open("tel:+55 61 99879-1063", "_self")}
              >
                <Phone className="mr-2 h-5 w-5" />
                Ligação Direta - (61) 99879-1063
              </Button>
            </div>

            {/* Safety Note */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
              <p className="text-xs text-yellow-800">
                <strong>💛 Você não está sozinha:</strong> Buscar ajuda é um ato de coragem. Estou aqui para te apoiar,
                sem julgamentos, com todo carinho e profissionalismo.
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
