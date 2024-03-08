import useImgdata from "./hooks/useImgdata";
import ImgCard from "./componets/ImgCard";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import { useState } from "react";
import ImgSerch from "./componets/ImgSerch";

function App() {
  const [term, setTerm] = useState("random");
  const { load, data, hits, error } = useImgdata(
    `https://pixabay.com/api/?key=42594942-5d75d40a93595e710f456c124&q=${term}&image_type=photo&pretty=true`
  );

  if (load) {
    return <div className="App">Loading...</div>;
  }

  if (error) {
    return <div className="App">Error fetching images.</div>;
  }

  if (hits.length === 0) {
    return <div className="App">No images found.</div>;
  }

  console.log(data);

  return (
    <div className="App">
      <div>
        <ImgSerch className="Search" imgSerch={(serch) => setTerm(serch)} />
      </div>
      <div className="App mt-4">
        {hits.map((image) => (
          <div key={image.id}>
            <ImgCard imgdata={image} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
