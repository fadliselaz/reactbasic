

// MEMBUAT FUNC COMPONENT REACT
const App = ()=>{

    

    const waktu = new Date().toLocaleTimeString()
    const [dummyNote, setDummyNote] = React.useState([])

    React.useEffect( ()=>{

        fetch('http://localhost:4000/notes/', {
            method : 'GET',
            mode : 'cors',
            headers : {
                "Content-Type" : "application/json"
            }
        })
        .then(res => res.json())
        .then(data => console.log(data))
        

    }, [] )
    

    return (
        <>
        <div className="navbar">
            <h1 className="brand">
                jvalley
            </h1>

            <div className="menu">
    
               
            </div>
        </div>

        <div className="container">

            <NoteInput />

            { dummyNote.map( (e)=>{  
                
                return (
                    <Card key={e.id} title={e.title} content={e.content} date={e.date}/>
                )
                
            }) }
            

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

