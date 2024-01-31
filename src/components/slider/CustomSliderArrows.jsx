import { Icon } from "react-icons-kit";
import { chevronLeft } from "react-icons-kit/fa/chevronLeft";
import { chevronRight } from "react-icons-kit/fa/chevronRight";

export function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <Icon
      className={className}
      style={{
        ...style,
        display: "block",
        color: "white",
      }}
      size={35}
      onClick={onClick}
      icon={chevronRight}
    />
  );
}

export function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <Icon
      className={className}
      style={{
        ...style,
        display: "block",
        color: "white",
      }}
      size={35}
      onClick={onClick}
      icon={chevronLeft}
    />
  );
}
