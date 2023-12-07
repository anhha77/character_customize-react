import React, { useState } from "react";
import "./App.css";
import PartList from "./components/PartList";
import PartLayer from "./components/PartLayer";

const total = {
  body: 17,
  "clothes/layer_1": 5,
  "clothes/layer_2": 5,
  "clothes/layer_3": 9,
  eyebrows: 15,
  eyes: 24,
  facial_hair: 17,
  hair: 73,
  mouths: 24,
  noses: 1,
  "accessories/earrings": 32,
  "accessories/glasses": 17,
  "accessories/hats": 28,
  "accessories/neckwear": 18,
};

const allKeys = Object.keys(total);

function App() {
  const [fashion, setFashion] = useState({
    body: Math.floor(Math.random() * 17) + 1,
    "clothes/layer_1": Math.floor(Math.random() * 5) + 1,
    "clothes/layer_2": Math.floor(Math.random() * 5) + 1,
    "clothes/layer_3": Math.floor(Math.random() * 9) + 1,
    eyebrows: Math.floor(Math.random() * 15) + 1,
    eyes: Math.floor(Math.random() * 24) + 1,
    facial_hair: Math.floor(Math.random() * 17) + 1,
    hair: Math.floor(Math.random() * 73) + 1,
    mouths: Math.floor(Math.random() * 24) + 1,
    noses: Math.floor(Math.random() * 1) + 1,
    "accessories/earrings": Math.floor(Math.random() * 32) + 1,
    "accessories/glasses": Math.floor(Math.random() * 17) + 1,
    "accessories/hats": Math.floor(Math.random() * 28) + 1,
    "accessories/neckwear": Math.floor(Math.random() * 18) + 1,
  });

  const btnRandomize = () => {
    const randomAvatar = {
      body: Math.floor(Math.random() * 17) + 1,
      "clothes/layer_1": Math.floor(Math.random() * 5) + 1,
      "clothes/layer_2": Math.floor(Math.random() * 5) + 1,
      "clothes/layer_3": Math.floor(Math.random() * 9) + 1,
      eyebrows: Math.floor(Math.random() * 15) + 1,
      eyes: Math.floor(Math.random() * 24) + 1,
      facial_hair: Math.floor(Math.random() * 17) + 1,
      hair: Math.floor(Math.random() * 73) + 1,
      mouths: Math.floor(Math.random() * 24) + 1,
      noses: Math.floor(Math.random() * 1) + 1,
      "accessories/earrings": Math.floor(Math.random() * 32) + 1,
      "accessories/glasses": Math.floor(Math.random() * 17) + 1,
      "accessories/hats": Math.floor(Math.random() * 28) + 1,
      "accessories/neckwear": Math.floor(Math.random() * 18) + 1,
    };
    setFashion(randomAvatar);
  };

  const handleImgClicked = (event, item, index) => {
    setFashion({ ...fashion, [item]: index });
  };

  return (
    <div className="App">
      <div className="title">CHARACTER</div>
      <div className="subtitle">🛠️CUSTOMIZATION🛠️</div>
      <div className="divider"></div>
      <div className="avatar-group gap-30">
        <div>
          <div className="avatar-wrapper">
            <div className="avatar">
              {allKeys.map((element, index) => (
                <PartLayer
                  item={fashion[element]}
                  index={index}
                  category={element}
                  key={Date.now() + 15 + index}
                />
              ))}
            </div>
            <div className="text-contain">
              <button onClick={btnRandomize}>RANDOMIZE!</button>
            </div>
          </div>
        </div>

        <div>
          <div className="list-section">
            <h2>Body</h2>
            <PartList
              handleImgClicked={handleImgClicked}
              selected={fashion[allKeys[0]]}
              item={allKeys[0]}
              amount={total["body"]}
              style={{ top: "-3px", left: "-4px" }}
            />
          </div>
          <div className="list-section">
            <h2>Clothing (L1)</h2>
            <PartList
              handleImgClicked={handleImgClicked}
              selected={fashion[allKeys[1]]}
              item={allKeys[1]}
              amount={total["clothes/layer_1"]}
              style={{ top: "-10px", left: "-4px" }}
            />
          </div>
          <div className="list-section">
            <h2>Clothing (L2)</h2>
            <PartList
              handleImgClicked={handleImgClicked}
              selected={fashion[allKeys[2]]}
              item={allKeys[2]}
              amount={total["clothes/layer_2"]}
              style={{ top: "-10px", left: "-4px" }}
            />
          </div>
          <div className="list-section">
            <h2>Clothing (L3)</h2>
            <PartList
              handleImgClicked={handleImgClicked}
              selected={fashion[allKeys[3]]}
              item={allKeys[3]}
              amount={total["clothes/layer_3"]}
              style={{ top: "-20px", left: "-2px" }}
            />
          </div>
          <div className="list-section">
            <h2>Eyebrows</h2>
            <PartList
              handleImgClicked={handleImgClicked}
              selected={fashion[allKeys[4]]}
              item={allKeys[4]}
              amount={total["eyebrows"]}
              style={{ top: "-3px", left: "-4px" }}
            />
          </div>
          <div className="list-section">
            <h2>Eyes</h2>
            <PartList
              handleImgClicked={handleImgClicked}
              selected={fashion[allKeys[5]]}
              item={allKeys[5]}
              amount={total["eyes"]}
              style={{ top: "-3px", left: "-4px" }}
            />
          </div>
          <div className="list-section">
            <h2>Facial Hair</h2>
            <PartList
              handleImgClicked={handleImgClicked}
              selected={fashion[allKeys[6]]}
              item={allKeys[6]}
              amount={total["facial_hair"]}
              style={{ top: "-3px", left: "-4px" }}
            />
          </div>
          <div className="list-section">
            <h2>Hair</h2>
            <PartList
              handleImgClicked={handleImgClicked}
              selected={fashion[allKeys[7]]}
              item={allKeys[7]}
              amount={total["hair"]}
              style={{ top: "0px", left: "-4px" }}
            />
          </div>
          <div className="list-section">
            <h2>Mouths</h2>
            <PartList
              handleImgClicked={handleImgClicked}
              selected={fashion[allKeys[8]]}
              item={allKeys[8]}
              amount={total["mouths"]}
              style={{ top: "-3px", left: "-4px" }}
            />
          </div>
          <div className="list-section">
            <h2>Noses</h2>
            <PartList
              handleImgClicked={handleImgClicked}
              selected={fashion[allKeys[9]]}
              item={allKeys[9]}
              amount={total["noses"]}
              style={{ top: "-3px", left: "-4px" }}
            />
          </div>
          <div className="list-section">
            <h2>Earings</h2>
            <PartList
              handleImgClicked={handleImgClicked}
              selected={fashion[allKeys[10]]}
              item={allKeys[10]}
              amount={total["accessories/earrings"]}
              style={{ top: "-3px", left: "-20px" }}
            />
          </div>
          <div className="list-section">
            <h2>Glasses</h2>
            <PartList
              handleImgClicked={handleImgClicked}
              selected={fashion[allKeys[11]]}
              item={allKeys[11]}
              amount={total["accessories/glasses"]}
              style={{ top: "-3px", left: "-4px" }}
            />
          </div>
          <div className="list-section">
            <h2>Hats</h2>
            <PartList
              handleImgClicked={handleImgClicked}
              selected={fashion[allKeys[12]]}
              item={allKeys[12]}
              amount={total["accessories/hats"]}
              style={{ top: "0px", left: "-4px" }}
            />
          </div>
          <div className="list-section">
            <h2>Neckwear</h2>
            <PartList
              handleImgClicked={handleImgClicked}
              selected={fashion[allKeys[13]]}
              item={allKeys[13]}
              amount={total["accessories/neckwear"]}
              style={{ top: "-10px", left: "-4px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
