"use client"
//reset function re-renders the component
export default function Error({error, reset} : {error: Error; reset: () => void}) {
  return <div> {error.message} <button onClick={reset}>Try Again</button></div>
  
}

