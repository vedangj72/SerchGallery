import React, { useState } from "react";
import "./ImgSerch.css"; // Import the CSS file for ImgSerch styling

function ImgSerch({ imgSerch }) {
  const [serch, setserch] = useState("");
  const handlesubmit = (e) => {
    e.preventDefault();
    imgSerch(serch);
  };
  return (
    <div>
      <form onSubmit={handlesubmit} className="form">
        <input
          type="text"
          placeholder="Search..."
          className="input-group"
          onChange={(e) => setserch(e.target.value)}
        />
        <button
          onClick={handlesubmit}
          type="submit"
          className="btn btn-success"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default ImgSerch;
