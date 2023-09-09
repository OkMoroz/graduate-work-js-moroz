import React, { useEffect, useState } from "react";
import "./NotFound.css";
import notfound from "../../assets/image/notfound.jpg";

const NotFound = () => {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowImage(true);
    }, 5000);
  }, []);

  return (
    <div className="not-found-container">
      <img
        src={notfound}
        alt="404"
        className={`not-found-image ${showImage ? "show" : ""}`}
      />
      <h1 className="not-found-title">Page is not found</h1>
    </div>
  );
};

export default NotFound;
