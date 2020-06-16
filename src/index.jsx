

// MEMBUAT FUNC COMPONENT REACT
const App = ()=>{

    const waktu = new Date().toLocaleDateString()
    const dummyNote = [
        {
            id : 1,
            title : 'ini note pertama',
            content : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus totam eos id quam enim vitae, ipsa quos veniam velit ad. Provident officiis tempora deserunt, quis commodi cum! Recusandae, consequatur a.',
            date : waktu
        },
        {
            id : 2,
            title : 'ini note kedua',
            content : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.',
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
                    <Card key={e.id} title={e.title} content={e.content} date={e.date}/>
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

