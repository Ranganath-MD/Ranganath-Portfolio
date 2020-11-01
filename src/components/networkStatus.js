import React from 'react'
import { useNetworkStatus } from "../hooks/networkStatus";

const Network = () => {
  const [online, status, setOnline] = useNetworkStatus();

  return (
    <>
      <div 
          className={online ? "online" : "offline"} 
          style={{ display: online !== undefined ? "block": "none"}} >
            {
              online ? <div className="network-inner-container">
                <p>Your are back {status}</p>
                <div>
                  <button 
                    className="network-close-btn"
                    onClick={() => setOnline(undefined)}
                  >
                    <span role="img" aria-label="close">❌</span>
                  </button>
                </div>
                </div> : <div className="network-inner-container">
                <p>The internet connection appears to be {status}, check your internet connection</p>
                <div>
                  <button 
                    className="network-close-btn"
                    onClick={() => setOnline(undefined)}
                  >
                    <span role="img" aria-label="close">❌</span>
                  </button>
                </div>
                </div> 
            }
        </div>
    </>
  )
}

export default Network
