
//membuat componentnya
const NoteInput = ()=>{

    const [up, setUp] = React.useState(false)

    return (
        <div className="noteInput" style={{
            right: '10px',
            bottom : up ? '-10px' : '-350px',
        }}>

                <span className="material-icons arrow" onClick={()=>{
                    setUp(!up)
                }} style={{
                    transform: up ? 'rotate(90deg)' : 'rotate(-90deg)',
                }} >
                    play_arrow
                </span>
            

            <div className="formGroup">
                <label htmlFor="title">judul</label>
                <input type="text" id='title'/>
            </div>

            <div className="formGroup">
                <label htmlFor="content">catatan</label>
                <textarea id="content" cols="30" rows="10"></textarea>
            </div>

            <div className="formGroup" >
                <button className="formButton" >masukan catatan</button>
            </div>

        </div>
    )
}