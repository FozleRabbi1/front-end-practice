import { ButtonHTMLAttributes, DetailedHTMLProps, forwardRef } from "react";
import cn from "../../Utils/cn";

type TRef = HTMLButtonElement;
type TVariant = "solid" | "outline" | "ghost";
type TButtonOptions = {
  variant?: TVariant;
};

type TButton = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  TButtonOptions;

const Button = forwardRef<TRef, TButton>(
  ({ variant = "solid", className, children, ...rest }, ref) => {
    // --------
    const getVarient = (varient: TVariant) => {
      switch (varient) {
        case "outline":
          return "btn-outline";

        case "ghost":
          return "btn-ghost";
        default:
          return "btn-solid";
      }
    };

    return (
      <button
        {...rest}
        ref={ref}
        className={cn(getVarient(variant), className)}
      >
        {children}
      </button>
    );
  }
);

export default Button;
