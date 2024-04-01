import { Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Layout from './components/Layout'
import './App.css'
import SearchResults from './components/SearchResults'

function App() {

  const [query, setQuery] = useState("James+Bond")
  const [content, setContent] = useState([])
  const [currentId, setCurrentId] = useState("")


   const getData = async()=>{
    try {
      const response = await fetch(`https://openlibrary.org/search.json?title=${query}`);
      const data = await response.json();
      setContent(data);

    } catch {
      console.error("En feil har oppstått.")
    } 
   }

   useEffect(()=>{
    getData()
    setCurrentId(localStorage.getItem("_version_"))
  },[query])

  console.log("ID", currentId)

  return (
    <>
      <Layout content={content} setQuery={setQuery}>
        <Routes>
          <Route index element={<SearchResults content={content}/>}/>
        </Routes>
      </Layout>
    </>
  )
}

export default App
