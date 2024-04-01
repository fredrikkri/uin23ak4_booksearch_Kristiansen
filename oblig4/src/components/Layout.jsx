export default function Layout({children}){
    return(
        <>
        <header>
            <nav>
                <h1>BookSearch</h1>
            </nav>
        </header>
        <main>
        {children}
        </main>
        <footer>Footer</footer>
        </>
    )
}