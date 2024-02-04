import React from "react";
import { Icon } from "react-icons-kit";
import { chevronLeft } from "react-icons-kit/fa/chevronLeft";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <button className="flex gap-3" onClick={() => navigate(-1)}>
      <Icon icon={chevronLeft} size={16} />
      <h2>Back</h2>
    </button>
  );
};

export default BackButton;
