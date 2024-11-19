import React, { useState, useEffect } from "react";

const Termsandconditions = () => {
  const pdfFile = "./Docs/Terms&ConditionsEN.pdf";
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
            title="Terms and Conditions - Mobile"
            frameBorder="0"
          >
            Your browser does not support PDF viewing.{" "}
            <a href={pdfFile} download>
              Download PDF
            </a>.
          </iframe>
        )}
      </div>

      <div className="hidden lg:block h-full">
        <iframe
          src={pdfFile}
          className="w-full h-full"
          title="Terms and Conditions - Desktop"
          frameBorder="0"
          scrolling="auto"
        >
          Your browser does not support PDF viewing.{" "}
          <a href={pdfFile} download>
            Download PDF
          </a>.
        </iframe>
      </div>
    </div>
  );
};

export default Termsandconditions;
