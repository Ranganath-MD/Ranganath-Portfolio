import { useState, useEffect } from 'react'

const useWindowsize = () => {
    const [windowSize, setWindowSize] = useState({})
    
    useEffect(() => {
        if(window){
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }

        window.addEventListener("resize", () => handleResize())
        return () => {
            window.removeEventListener("resize", () => handleResize())
        }
    }, [])

    return windowSize
}

export default useWindowsize
