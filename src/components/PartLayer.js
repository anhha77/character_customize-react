import React from "react";

function PartLayer({ item, index, category }) {
  return (
    <>
      <img
        src={`./images/character/${category}/${item}.png`}
        alt=""
        width="260"
        className="img-avatar"
        style={{
          position: "absolute",
          zIndex: index,
        }}
      />
    </>
  );
}

export default PartLayer;
