import { Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Layout from './components/Layout'
import './App.css'
import SearchResults from './components/SearchResults'
import SearchBar from './components/SearchBar'

function App() {

  const [query, setQuery] = useState("James+Bond")
  const [content, setContent] = useState([])


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
  },[query])


  return (
    <>
      <Layout>
        <Routes>
          <Route index element={<SearchBar content={content}/>}/>
          <Route index element={<SearchResults content={content}/>}/>
        </Routes>
          
      </Layout>
    </>
  )
}

export default App
