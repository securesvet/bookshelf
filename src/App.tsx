import { useEffect, useRef, useState } from "react";
import './App.css'
import Header from "./components/Header";
function App() {
  const changeValue = () => {
    setSearchInputValue(searchInputRef.current?.value)
  }

  const searchInputRef = useRef<HTMLInputElement>(null);
  const [searchInputValue, setSearchInputValue] = useState<String | undefined>('');
  const arrayOfWords = ["hello", "hi", "hey", "to kill a mokingbird", "divine comedy"]
  const [suggestions, setSuggestions] = useState<string[]>([])

  useEffect(() => {
    const filteredSuggestions = arrayOfWords.filter(word =>
      word.toLowerCase().includes(searchInputValue!.toLowerCase())
    )
    setSuggestions(filteredSuggestions)
  }, [searchInputValue])
  return (
    <>
    <Header/>
    <div className="container">
    <h1>Search Books Online</h1>
      <div>
        <div className="search-bar">
          <input type="search" className="search" pattern=".*\S.*" required/>
          <button className="search-btn" type="submit">
            <span>Search</span>
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
