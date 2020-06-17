

// MEMBUAT FUNC COMPONENT REACT
const App = ()=>{

    const waktu = new Date().toLocaleTimeString()
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

    const menu = [
        {
            id : 1,
            menuName : 'UTAMA',
            to : '#',
            color : '#FFC300'
        },
        {
            id : 2,
            menuName : 'ABOUT',
            to : '#',
            color : '#FF5733'
        },
        {
            id : 3,
            menuName : 'CONTACT',
            to : '#',
            color : '#C70039'
        },
        {
            id : 4,
            menuName : 'GALLERY',
            to : '#',
            color : '#FFC300'
        },

    ]

    return (
        <>
        <div className="navbar">
            <h1 className="brand">
                jvalley
            </h1>

            <div className="menu">
                
                {menu.map((e)=>{
                    return(
                    <MenuItem menuName={e.menuName} to={e.to} color={e.color} key={e.id}/>
                    )
                })}
               
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

