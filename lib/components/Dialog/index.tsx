import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const dialogVariants = cva(
  "fixed inset-0 bg-black bg-opacity-50 flex z-50 justify-center items-center transition-opacity duration-300 ease-in-out",
  {
    variants: {
      animation: {
        fade: "",
        slide: "",
      },
    },
    defaultVariants: {
      animation: "fade",
    },
  }
);

const contentVariants = cva(
  "bg-white dark:bg-black dark:bg-neutral-900 rounded-lg p-6 transition-all duration-300 ease-in-out",
  {
    variants: {
      size: {
        small: "w-1/3 max-w-md",
        medium: "w-2/3 max-w-lg",
        large: "w-full max-w-2xl",
      },
      animation: {
        fade: "opacity-0 scale-95",
        slide: "opacity-0 translate-y-10",
      },
    },
    defaultVariants: {
      size: "medium",
      animation: "fade",
    },
  }
);

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  size?: "small" | "medium" | "large";
  animation?: "fade" | "slide";
  className?: string;
}

export const Dialog = ({
  isOpen,
  onClose,
  size = "medium",
  animation = "fade",
  className = "",
}: DialogProps) => {
  return (
    <div
      className={twMerge(
        dialogVariants({ animation }),
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
      onClick={onClose}
    >
      <div
        className={twMerge(
          contentVariants({ size, animation }),
          isOpen ? "opacity-100 scale-100 translate-y-0" : "",
          className
        )}
        onClick={(e) => e.stopPropagation()} // Prevent click on modal content from closing
      >
        <h2 className="text-xl font-semibold mb-4">Modal Header</h2>
        <p className="mb-4">This is the modal content. Add any components or content here.</p>

        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};
