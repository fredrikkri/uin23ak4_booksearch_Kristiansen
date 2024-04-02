import SearchBar from "./SearchBar";

export default function Layout({children, query, setQuery}){
    return(
        <>
        <header>
            <nav>
                <h1>BookSearch</h1>
            </nav>
        </header>
        <main>
            <section className="searchBar">
                <SearchBar content={query} setQuery={setQuery}>
                </SearchBar>
            </section>
        {children}
        </main>
        </>
    )
}