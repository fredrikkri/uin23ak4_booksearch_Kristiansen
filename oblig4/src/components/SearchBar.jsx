import { useState } from "react"
export default function SearchBar({query, setQuery}){
    const [search, setSearch] = useState("")
    
    const handleSubmit = (e)=>{
        e.preventDefault()
        setQuery(search)
    }    

    const handleChange = (event)=>{
        setSearch(event.target.value)
    }

    const handleClick = (title)=>{
        setCurrentId(title)
        localStorage.setItem("karakterID", title)
    }

return(
    <>
        <h2>Search for books</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="search"></label>
            <input type="text" id="search" placeholder="James Bond..." onChange={handleChange}></input>
            <input type="submit" value="Søk"></input>
        </form>
        <ul>
            {query?.map(book => <li key={book._version_}><Link to={book.title} onClick={()=>handleClick(book._version_)}>{book.title}</Link></li>)}
        </ul>
    </>)
}