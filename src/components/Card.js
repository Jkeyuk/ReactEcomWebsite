import React from "react";

export default function Card({ name, price, imgUrl }) {
  return (
    <div>
      <img src={imgUrl} alt={name} width={250} height={250} />
      {name}
      <br />
      {price}
    </div>
  );
}
