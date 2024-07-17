"use client";

import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const baseUrl = "http://127.0.0.1:1337";

export default function Login() {
  const logoUrl = baseUrl + "/uploads/logo_3a362d8eac.png";

  return (
    <div className="w-full max-w-md">
      <form>
        <Card className="border-none shadow-none">
          <CardHeader className="space-y-1 flex justify-center items-center">
            <img src={logoUrl} alt="Imagen de logo" className="w-2/5" />
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Input
                id="identifier"
                name="identifier"
                type="text"
                placeholder="Usuario:"
              />
            </div>
            <div className="space-y-2">
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Contraseña:"
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col">
            <button className="w-full bg-blue-600 rounded-lg p-2 text-white font-bold">
              Ingresar
            </button>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
}
