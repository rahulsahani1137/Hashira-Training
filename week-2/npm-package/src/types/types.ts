import * as React from "react";

type FormInputType = {
  className?: string,
  placeholder: string,
  inputLabel: string,
  type: "email" | "phone" | "url" | "number" | "integer" | "string" | "alphanumeric" | "date"
};

interface ValidationEvent {
  target: {
    value: string;
  };
}

type FormCardProps = React.ComponentProps<"div">;

type FormTitleProps = React.ComponentProps<"div">;

type FormContentProps = React.ComponentProps<"div">;

type FormActionButtonProps = React.ComponentProps<"button"> & {
  title: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

type FormFooterProps = React.ComponentProps<"div">;

interface ValidationResult {
    isValid: boolean;
    error?: string;
}



export {
  type FormInputType,
  type FormActionButtonProps,
  type FormContentProps,
  type FormTitleProps,
  type FormCardProps,
  type FormFooterProps,
  type ValidationEvent,
  type ValidationResult
}
