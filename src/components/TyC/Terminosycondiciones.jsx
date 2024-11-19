import React, { useState, useEffect } from "react";

const Terminosycondiciones = () => {
  const pdfFile = "./Docs/TerminosyCondicionesES.pdf";
  const [mobilePdfSrc, setMobilePdfSrc] = useState("");

  useEffect(() => {
    const url = `https://drive.google.com/viewerng/viewer?embedded=true&url=${encodeURIComponent(
      window.location.origin + pdfFile
    )}`;
    setMobilePdfSrc(url);
  }, [pdfFile]);

  return (
    <div className="h-screen w-full bg-gray-100">
      <div className="block lg:hidden h-full">
        {mobilePdfSrc && (
          <iframe
            src={mobilePdfSrc}
            className="w-full h-full"
            title="Términos y Condiciones - Móvil"
            frameBorder="0"
          >
            Tu navegador no soporta visualizar PDFs.{" "}
            <a href={pdfFile} download>
              Descargar PDF
            </a>.
          </iframe>
        )}
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
