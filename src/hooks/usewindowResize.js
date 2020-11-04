import {useState, useEffect} from 'react'

export const useCaptureResize = () => {
    const [resize, setResize] = useState(false);

    useEffect(() => {
        const handleWindowResize = () => {
            setResize(true);
            setTimeout(() => {
                setResize(false);
            }, 1000);
        };
        window.addEventListener("resize", handleWindowResize);
        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, [resize]);

  return resize
}

