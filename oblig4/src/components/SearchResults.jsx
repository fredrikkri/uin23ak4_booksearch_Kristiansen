import Bookcard from "./Bookcard";

export default function SearchResults({content}){
    const allBooks = content?.docs;
    console.log(content?.docs)

    return (
    <span className="display-Books">
        {allBooks?.map(singleBook => 
        <Bookcard className="card" 
            key={singleBook?._version_} 
            title={singleBook?.title} 
            first_publish_year={singleBook?.first_publish_year}
            author_name={singleBook?.author_name}
            ratings_average={singleBook?.ratings_average}
            coverImage={singleBook?.cover_i}
            isbn={singleBook?.isbn}>
        </Bookcard>)}
    </span>
    )
}