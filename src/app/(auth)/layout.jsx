"use client";

import { useLoginFormStore } from "@/store/mainStore";
import { useEffect, createContext } from "react";

export const MyContext = createContext();

export default function AuthLayout({ children }) {
  const fetchLoginInfo = useLoginFormStore((state) => state.fetchLoginInfo);
  const strapiData = useLoginFormStore((state) => state.loginInfo);

  const baseUrl = "http://127.0.0.1:1337";
  useEffect(() => {
    const fetchData = async () => {
      await fetchLoginInfo();
    };
    fetchData();
  }, [fetchLoginInfo]);

  if (!strapiData || !strapiData.data) {
    console.error(
      "No se pudo obtener los datos de Strapi o 'data' está indefinido"
    );
    return (
      <div>
        <MyContext.Provider value={{ strapiData }}>
          <div className="flex">
            <div className="flex-1">{children}</div>
            <div className="flex-1">{"Error al cargar datos"}</div>
          </div>
        </MyContext.Provider>
      </div>
    );
  }
  const { Titulo, Descripcion, ImagenPrincipal, LogoImg } =
    strapiData.data.attributes;
  const imageUrl = baseUrl + ImagenPrincipal.data.attributes.url;
  const logoUrl = baseUrl + LogoImg.data.attributes.url;

  return (
    <div>
      <div className="flex h-screen">
        <div className="flex-1">{children}</div>
        <div className="flex-1">
          <img
            className="w-full h-full"
            src={imageUrl}
            alt="Imagen en formato animado de niños aprendiendo matemáticas"
          />
        </div>
      </div>
    </div>
  );
}
