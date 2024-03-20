import { useEffect, useRef, useState } from "react";
import './App.css'
function App() {
  const changeValue = () => {
    setSearchInputValue(searchInputRef.current?.value)
  }

  const searchInputRef = useRef<HTMLInputElement>(null);
  const [searchInputValue, setSearchInputValue] = useState<String | undefined>('');
  const arrayOfWords = ["hello", "hi", "hey", "to kill a mokingbird", "divine comedy"]
  const [suggestions, setSuggestions] = useState<String[]>([])

  useEffect(() => {
    const filteredSuggestions = arrayOfWords.filter(word =>
      word.toLowerCase().includes(searchInputValue!.toLowerCase())
    )
    setSuggestions(filteredSuggestions)
  })
  return (
    <>
    <div className="input-container">
     <input onChange={changeValue} ref={searchInputRef} placeholder="Hello world!"/>
     <div className="suggestions-container">
        {suggestions.map((suggestion, index) => (
                <div key={index}>{suggestion}</div>
              ))}
     </div>
    </div>
    </>
  )
}

export default App
