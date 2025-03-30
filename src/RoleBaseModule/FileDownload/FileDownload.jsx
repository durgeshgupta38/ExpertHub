import React from "react";
import { Button } from "react-bootstrap";
import { Download } from "react-bootstrap-icons";

const DownloadButton = () => {
  const downloadFile = () => {
    const fileUrl = "https://example.com/sample.pdf"; // Change URL
    const a = document.createElement("a");
    a.href = fileUrl;
    a.download = "sample.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <Button variant="primary" onClick={downloadFile} className="d-flex align-items-center">
      <Download className="me-2" /> Download File
    </Button>
  );
};

export default DownloadButton;
