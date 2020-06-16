

// MEMBUAT FUNC COMPONENT REACT
const App = ()=>{

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

            <Card title='card pertama' />
            <Card />
            <Card title='judul ketiga' />
            <Card />
            <Card />
            <Card />

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

