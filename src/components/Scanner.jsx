import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Scanner = () => {
  const [scanResult, setScanResult] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", {
      qrbox: {
        width: 250,
        height: 250,
      },
      fps: 5,
    });

    scanner.render(success, error);

    function success(result) {
      scanner.clear();
      setScanResult(result);
    }

    function error(err) {
      console.warn(err);
    }
  }, []);

  return (
    <div className="scanner">
      <h2>QR Code Scanner</h2>
      <div className="scanner-div">
        {scanResult ? (
          <div>
            <h4>Success:</h4>
            <p>{scanResult}</p>
          </div>
        ) : (
          <div id="reader"></div>
        )}
      </div>

      <button className="back-btn" type="button" onClick={() => navigate("/")}>
        Back
      </button>
    </div>
  );
};

export default Scanner;
