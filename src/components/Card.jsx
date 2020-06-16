
const Card = (props)=>{
    const char = props.content.length

    return(
        
        <div className="card" style={{
            overflowY : char > 100 ? 'scroll' : 'hidden'
        }}>
            <h2 className="card-title">
                {props.title || 'title card' }
            </h2>
            <hr/>
            <p className='card-content'>
                {props.content || 'ini adalah default value dari card content..'}
            </p>
            <small className='date'>
                {props.date || 'now'}
            </small>

        </div>
    )

}