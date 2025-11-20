import * as React from "react"
import { cn } from "../../utils/cn"

const FormCard = ({ className, ...props }: React.ComponentProps<"div">) => {
    return (
        <div
            className={cn(
                "bg-[#ffffff] text-[#2f3038] flex flex-col gap-4 rounded-xl border py-4 px-2 shadow-sm",
                className
            )}
            {...props}
        />
    )
}

const FormTitle = ({ className, ...props }: React.ComponentProps<"div">) => {
    return (
        <div
            className={cn("leading-none font-semibold", className)}
            {...props}
        />
    )
}

const FormContent = ({ className, ...props }: React.ComponentProps<"div">) => {
    return (
        <div
            className={cn("px-6", className)}
            {...props}
        />
    )
}


const FormActionButton = ({ title, className, ...props }: React.ComponentProps<"button">) => {
    return (
        <button title={title} className={cn("w-full bg-[#212122] text-white py-2 rounded-md", className)} {...props}>{title}</button>
    )
}

const FormFooter = ({ className, ...props }: React.ComponentProps<"div">) => {
    return (
        <div
            className={cn("flex items-center px-6 border-t text-xs pt-2", className)}
            {...props}
        />
    )
}

export {
    FormCard,
    FormTitle,
    FormActionButton,
    FormContent,
    FormFooter
}