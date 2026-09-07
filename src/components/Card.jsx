import React from "react";
import Paragraph from "./Paragraph";

function Card({
  title,
  text
}) {

  return (

    <div className="card">

      <h3>
        {title}
      </h3>

      <Paragraph>
        {text}
      </Paragraph>

    </div>

  );
}

export default Card;