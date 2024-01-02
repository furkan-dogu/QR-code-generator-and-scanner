import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import QRCode from "react-qr-code";
import { IoMdDownload } from "react-icons/io";

const Generator = () => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const download = () => {
    const svg = document.getElementById("QRCode");
    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      const pngFile = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.download = "QRCode";
      downloadLink.href = `${pngFile}`;
      downloadLink.click();
    };
    img.src = `data:image/svg+xml;base64,${btoa(svgData)}`;
  };

  return (
    <div className="generator">
      <h2>QR Code Generator</h2>

      <div
        style={{
          height: "auto",
          margin: "0 auto",
          maxWidth: 64,
          width: "100%",
        }}
      >
        <QRCode
          size={256}
          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
          value={inputValue}
          viewBox={`0 0 256 256`}
          id="QRCode"
        />
      </div>

      <div className="generator-input">
        <input type="text" onChange={(e) => setInputValue(e.target.value)} />
        <button type="button" onClick={download}><IoMdDownload /></button>
      </div>

      <button className="back-btn" type="button" onClick={() => navigate("/")}>
        Back
      </button>
    </div>
  );
};

export default Generator;
