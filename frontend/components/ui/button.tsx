import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  className,
  children,
  ...props
}: Props) {
  return (
    <button
      className={cn(
        "rounded-xl bg-violet-600 px-5 py-3 font-semibold text-white hover:bg-violet-700 transition",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}