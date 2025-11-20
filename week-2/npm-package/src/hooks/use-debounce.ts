import { useState, useEffect } from "react";

export const useDebounce = <T>(event: T, delay = 500): T => {
    const [debouncedValue, setDebouncedValue] = useState<T>(event);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebouncedValue(event)
        }, delay);

        return () => clearTimeout(timeout);
    }, [event, delay]);
    
    return debouncedValue;
}