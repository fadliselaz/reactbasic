
//Buat component Reactnya
const MenuItem = (props)=>{

    return(
        <div className="menuItem" style={{
            width : '120px',
            height : '100%',
            // padding : '0px 10px',
            display : 'flex',
            justifyContent : 'center',
            alignItems : 'center',
            backgroundColor : `${props.color}`
        }}>
            <a href={props.to}>
                {props.menuName}
            </a>
        </div>
    )
}