import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Lock, Sprout } from "lucide-react"

interface AdminLoginProps {
  onLogin: () => void
}

export function AdminLogin({ onLogin }: AdminLoginProps) {
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleLogin = () => {
    // Senhas para demonstração - em produção, usar autenticação segura!
    if (password === "raizes123" || password === "admin") {
      setError("")  // limpa erro se tiver
      onLogin()
    } else {
      setError("Senha incorreta")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-amber-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md border-green-200">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-green-100 to-amber-100 rounded-full w-fit">
            <Sprout className="h-8 w-8 text-green-600" />
          </div>
          <CardTitle className="text-2xl">Área Administrativa</CardTitle>
          <p className="text-gray-600">Raízes de Cuidado</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="password">Senha de Acesso</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Digite sua senha"
              onKeyDown={(e) => e.key === "Enter" && handleLogin()}
              autoFocus
            />
            {error && <p className="text-sm text-red-600 mt-1">{error}</p>}
          </div>

          <Button onClick={handleLogin} className="w-full bg-green-600 hover:bg-green-700" aria-label="Entrar">
            <Lock className="mr-2 h-4 w-4" />
            Entrar
          </Button>

          <div className="text-center text-xs text-gray-500">
            <p>
              Senha para teste: <code className="bg-gray-100 px-1 rounded">raizes123</code>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
