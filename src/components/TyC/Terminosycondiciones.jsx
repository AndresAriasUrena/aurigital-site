import React from "react";
import pdfFile from "./Docs/TérminosyCondicionesES.pdf";

const Terminosycondiciones = () => {
  return (
    <div className="h-screen w-full bg-gray-100">
      <div className="block lg:hidden h-full">
        <iframe
          src={`https://drive.google.com/viewerng/viewer?embedded=true&url=${encodeURIComponent(
            window.location.origin + pdfFile
          )}`}
          className="w-full h-full"
          title="Términos y Condiciones - Móvil"
          frameBorder="0"
        >
          Tu navegador no soporta visualizar PDFs.{" "}
          <a href={pdfFile} download>
            Descargar PDF
          </a>.
        </iframe>
      </div>

      <div className="hidden lg:block h-full">
        <iframe
          src={pdfFile}
          className="w-full h-full"
          title="Términos y Condiciones - Desktop"
          frameBorder="0"
          scrolling="auto"
        >
          Tu navegador no soporta visualizar PDFs.{" "}
          <a href={pdfFile} download>
            Descargar PDF
          </a>.
        </iframe>
      </div>
    </div>
  );
};

export default Terminosycondiciones;
