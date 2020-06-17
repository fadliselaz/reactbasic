
const Card = (props)=>{
    const char = props.content.length
    const [like, setLike] = React.useState(false)

    return(
        
        <div className="card" style={{
            overflowY : char > 100 ? 'scroll' : 'hidden',
            position : 'relative'
        }}>

            <span className="material-icons" style={{
                color : like ? '#FF7979' : '#bebebe',
                cursor : 'pointer',
                position : 'absolute',
                top : '10px',
                right : '10px'
            }} onClick={ ()=>{setLike(!like)} }>
            favorite
            </span>

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