import React from "react";
import pdfFile from "./Docs/Terms&ConditionsEN.pdf";

const Termsandconditions = () => {
  return (
    <div className="h-screen w-full bg-gray-100">
      <div className="block lg:hidden h-full">
        <iframe
          src={`https://drive.google.com/viewerng/viewer?embedded=true&url=${encodeURIComponent(
            window.location.origin + pdfFile
          )}`}
          className="w-full h-full"
          title="Terms and Conditions - Mobile"
          frameBorder="0"
        >
          Your browser does not support PDF viewing.{" "}
          <a href={pdfFile} download>
            Download PDF
          </a>.
        </iframe>
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
