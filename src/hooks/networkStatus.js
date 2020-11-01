import { useState, useEffect } from "react";

export const useNetworkStatus = () => {
  const [online, setOnline] = useState();
  const [status, setStatus] = useState("");

  useEffect(() => {
    if(navigator.onLine === false){
        setOnline(false)
        setStatus("Offline")
    }
    const handleEvent = () => {
      if (navigator.onLine) {
        setOnline(true);
        setStatus("online");
      } else {
        setOnline(false);
        setStatus("offline");
      }
    };

    window.addEventListener("online", handleEvent);
    window.addEventListener("offline", handleEvent);

    // cleanup
    return () => {
      window.removeEventListener("online", handleEvent);
      window.removeEventListener("offline", handleEvent);
    };
  }, []);

  return [online, status, setOnline];
};
