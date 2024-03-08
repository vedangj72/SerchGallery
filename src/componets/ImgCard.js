import React from "react";
import "./ImgCard.css"; // Import the CSS file for ImgCard styling

function ImgCard({ imgdata }) {
  return (
    <div className="img-card ">
      <div className="card ">
        <div className="img">
          <img src={imgdata.webformatURL} alt="Sample" />
        </div>
        <div className="downbar">
          <p>
            <strong>
              <i class="bi bi-eye-fill"></i>
            </strong>
            {imgdata.views}
          </p>
          <p>
            <strong>
              <i class="bi bi-heart-fill"></i>{" "}
            </strong>
            {imgdata.likes}
          </p>
          <p>
            <strong>
              <i class="bi bi-chat-left-text-fill"></i>
            </strong>
            {imgdata.comments}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ImgCard;
