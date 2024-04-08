import React from "react";

export default function CtaButton({ children }) {
  return (
    <div className="bg-primary px-[2em] text-white py-[.3em] rounded-md">
      <p className="uppercase">{children}</p>
    </div>
  );
}
