import { useState } from "react"
export default function SearchBar(){
    
return(
    <>
        <h3>Search for books</h3>
        <form>
            <label htmlFor="search">Søk etter bok:</label>
            <input type="text" id="search" placeholder="James Bond..." ></input>
            <input type="submit" value="Søk"></input>
        </form>
    </>)
}