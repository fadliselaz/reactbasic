

// MEMBUAT FUNC COMPONENT REACT
const App = ()=>{

    const waktu = Date.now()
    const dummyNote = [
        {
            id : 1,
            title : 'ini note pertama',
            content : 'ini adalah note pertama saya..',
            date : waktu
        },
        {
            id : 2,
            title : 'ini note kedua',
            content : 'ini adalah note kedua saya..',
            date : waktu
        },
        {
            id : 3,
            title : 'ini note ketiga',
            content : 'ini adalah note ketiga saya..',
            date : waktu
        }
    ]



    return (
        <>
        <div className="navbar" >
            <h1 className="brand">
                jvalley
            </h1>

            <div className="menu">
                <a href="#">home</a>
                <a href="#">about</a>
                <a href="#">contact</a>
                <a href="#">gallery</a>
            </div>
        </div>

        <div className="container">

            {dummyNote.map( (e)=>{
                return(
                    <Card id={e.id} title={e.title} content={e.content} date={e.date}/>
                )
            })}

        </div>


        <div className="footer" >
            <small>@jvalley2020</small>
        </div>

        </>
    )
}

// SELEKSI ELEMENT UNTUK PENEMPATAN RENDER
const root = document.getElementById('root')

//PROSES RENDERING
ReactDOM.render( <App /> , root )

