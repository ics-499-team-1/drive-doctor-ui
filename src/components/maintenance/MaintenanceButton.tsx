import { useState } from "react";

interface Props {
  children: string;
  className?: string;
  outline?: string;
  text?: string,
  color?:
    | "primary"
    | "secondary"
    | "danger"
    | "success"
    | "warning"
    | "info"
    | "light"
    | "dark";
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

/**
 * It's a button. It's used in the maintenance stuff.
 */
const MaintenanceButton = ({
  children,
  className = "mx-1",
  color = "dark",
  outline = "color",
  text="light",
  onClick,
  onMouseEnter,
  onMouseLeave,
}: Props) => {
  const [buttonText, setButtonText] =useState(text);

  return (
    <button
      className={className + " btn btn-" + color + " btn-outline-"+ outline + " text-" + buttonText}
      onClick={onClick}
      onMouseEnter={() => setButtonText("white")}
      onMouseLeave={() => setButtonText('text')}
    >
      {children}
    </button>
  );
};

export default MaintenanceButton;