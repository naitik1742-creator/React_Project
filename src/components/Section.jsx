import React from "react";

function Section({
  children,
  className = "",
  id
}) {

  return (
    <section
      id={id}
      className={className}
    >
      {children}
    </section>
  );
}

export default Section;