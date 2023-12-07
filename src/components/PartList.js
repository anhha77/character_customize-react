import React from "react";

function PartList({ item, amount, style, selected, handleImgClicked }) {
  const itemAvatar = [];
  for (let i = 1; i <= amount; i++) {
    itemAvatar.push(
      <div
        className={`clickable square ${selected === i ? "selected" : ""}`}
        key={Date.now() + i}
        onClick={(event) => handleImgClicked(event, item, i)}
      >
        <img
          src={`./images/character/${item}/${i}.png`}
          alt=""
          className="img-center"
          height="60"
          style={style}
        />
      </div>
    );
  }

  return <div className="list">{itemAvatar}</div>;
}

export default PartList;
