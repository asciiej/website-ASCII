import React, { useId } from "react";

const CustomShapeDivider = ({ 
  color1 = "rgba(4, 10, 61, 1)", 
  color2 = "rgba(6, 19, 128, 1)",
  invert = false 
}) => {
  const gradientId = useId(); // Gera um ID único automaticamente

  const pathD = invert 
    ? "M0,60 C300,0 900,180 1200,60 V120 H0 Z"
    : "M0,40 C300,90 900,-40 1200,40 V120 H0 Z";

  return (
    <div
      className="custom-shape-divider-bottom-1738089707"
      style={{
        position: "absolute",
        width: "100%",
        overflow: "hidden",
        lineHeight: 0,
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        style={{
          position: "relative",
          display: "block",
          width: "100%",
          height: "57px",
        }}
      >
        <defs>
          <linearGradient id={gradientId} x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor={color1} />
            <stop offset="100%" stopColor={color2} />
          </linearGradient>
        </defs>
        <path
          d={pathD}
          fill={`url(#${gradientId})`}
        />
      </svg>
    </div>
  );
};

export default CustomShapeDivider;
