
const Card = (props)=>{

    return(
        <div className="card" >
            <h2 className="cardTitle">
                {props.title || 'title card' }
            </h2>
            <hr/>
            <p>
                {props.content || 'ini adalah default value dari card content..'}
            </p>
            <small className='date'>
                {props.date || 'now'}
            </small>

        </div>
    )

}