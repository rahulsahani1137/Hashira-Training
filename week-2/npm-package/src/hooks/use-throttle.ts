import { useEffect, useRef, useState } from "react"

const useThrottle = <T>(value: T, delay: number = 1000) => {
    const [throttleValue, setThrottleValue] = useState(value);

    const flagRef = useRef(true);

    useEffect(() => {
        if (flagRef.current) {
            setThrottleValue(value);
            flagRef.current = false;
            setTimeout(() => {
                flagRef.current = true
            }, delay)
        }
    }, [value, delay])

    return throttleValue;
}


export { useThrottle }