import React from "react";
import { FaChevronDown } from "react-icons/fa";

export const ArrowIndicator = () => {
  return (
    <FaChevronDown
      color="cyan"
      className="fixed-arrow animate-flicker"
      size="4rem"
    />
  );
};
