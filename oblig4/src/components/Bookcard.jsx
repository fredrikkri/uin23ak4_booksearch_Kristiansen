export default function Bookcard({keyBook, title, first_publish_year, author_name, ratings_average, coverImage, isbn}) {
    
    console.log("isbn",isbn?.length)
    
    return (
    <>
        <article className="card" key={keyBook}>
        <h3>{title}</h3>
        <p>First publish year: {first_publish_year}</p>
        <p>Author: {author_name}</p>
        {ratings_average == null ? <p>Average rating: none</p> : <p>Average rating: {ratings_average}</p>} 
        {isbn == null ? "" : <a href={`https://www.amazon.com/s?k=${isbn?.[0]}`}>Show in Amazon</a>}
        <img src={`https://covers.openlibrary.org/b/id/${coverImage}-L.jpg`} alt={title}/>
        {/* For å få tilgang til bilder for hver bok så fulgte jeg API-dokumentasjon på openlibrary.org */}
        {/* https://openlibrary.org/dev/docs/api/covers */}
        </article>
    </>
    )
}