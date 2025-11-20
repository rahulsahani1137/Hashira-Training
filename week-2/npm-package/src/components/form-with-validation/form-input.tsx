import { useState } from "react";
import { cn } from "../../utils/cn";
import { validator, type ValidationResult } from "../../utils/validator";
import { useDebounce } from "../../hooks/use-debounce";

const FormInput = ({ className, placeholder, inputLabel, type, ...props }: { className?: string, placeholder: string, inputLabel: string, type: "email" | "phone" }) => {
  const [error, setError] = useState<ValidationResult>();
  
  interface ValidationEvent {
    target: {
      value: string;
    };
  }
  
  // const debouncedValidInputCheck = useDebounce(handleValidInputCheck);
  
  const handleValidInputCheck = (e: ValidationEvent): void => {
    const value = e.target.value;
    const validationError = validator(type, value);
    setError(validationError);
  }

  return (
    <div>
      <label className="text-base font-semibold tracking-tight">{inputLabel}</label>
      <input
        type={type}
        placeholder={placeholder}
        onChange={handleValidInputCheck}
        className={cn(
          "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          error?.isValid === false && "border-red-500 border-2 focus-visible:border-red-500",
          error?.isValid === true && "border-green-500 border-2 focus-visible:border-green-500",
          className
        )}
        {...props}
      />
      <span className="flex flex-wrap font-semibold text-red-600 w-fit">{error?.error || ""}</span>
    </div>
  )
}
export { FormInput }