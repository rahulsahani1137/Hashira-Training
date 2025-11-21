import { useState } from "react"
import * as React from "react"
import { cn } from "../../utils/cn"
import { useThrottle } from "../../hooks/use-throttle"
import type { FormActionButtonProps, FormCardProps, FormContentProps, FormFooterProps, FormTitleProps } from "../../types/types"


const FormCard = ({ className, ...props }: FormCardProps) => {
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

const FormTitle = ({ className, ...props }: FormTitleProps) => {
    return (
        <div
            className={cn("leading-none font-bold text-lg  text-center self-stretch", className)}
            {...props}
        />
    )
}

const FormContent = ({ className, ...props }: FormContentProps) => {
    return (
        <div
            className={cn("px-6", className)}
            {...props}
        />
    )
}


const FormActionButton = ({ title, className, onClick, ...props }: FormActionButtonProps) => {
    const [clickCount, setClickCount] = useState(0);

    // Throttled version of the click counter
    const throttledClick = useThrottle(clickCount, 1000);

    React.useEffect(() => {
        if (throttledClick > 0) {
            // Perform actual submit logic here
            console.log("Submitted!", throttledClick);
        }
    }, [throttledClick]);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        setClickCount(prev => prev + 1);
        onClick?.(e);
    };

    return (
        <button
            title={title}
            className={cn("w-full bg-[#212122] text-white py-2 rounded-md disabled:opacity-50 disabled:cursor-not-allowed", className)}
            onClick={handleClick}
            {...props}
        >
            {title}
        </button>
    )
}

const FormFooter = ({ className, ...props }: FormFooterProps) => {
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