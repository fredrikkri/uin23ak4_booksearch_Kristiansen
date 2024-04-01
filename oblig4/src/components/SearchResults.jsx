export default function SearchResults({content}){

    const docs = content?.docs;
    console.log(content?.docs)

    return (
    <section>
        <h2>Search Results</h2>
        {docs?.map(doc => 
        <article key={doc._version_}>
        <h3>{doc.title}</h3>
        <p>{doc.first_publish_year}</p>
        <p>{doc.author_name}</p>
        <p>{doc.ratings_average}</p>
        <img src={`https://covers.openlibrary.org/b/id/${doc.cover_i}-L.jpg`} alt={doc.title}/>
        </article>)}
    </section>
)}