export default function Bookcard({keyBook, title, first_publish_year, author_name, ratings_average, coverImage, id_amazon}) {

    return (
    <>
        <article className="card" key={keyBook}>
        <h3>{title}</h3>
        <p>First publish year: {first_publish_year}</p>
        <p>Author: {author_name}</p>
        <p>Average rating: {ratings_average}</p>
        <a href={id_amazon}>Go to Amazon</a>
        <img src={`https://covers.openlibrary.org/b/id/${coverImage}-L.jpg`} alt={title}/>
        {/* For å få tilgang til bilder for hver bok så fulgte jeg API-dokumentasjon på openlibrary.org */}
        {/* https://openlibrary.org/dev/docs/api/covers */}
        </article>
    </>
    )
}