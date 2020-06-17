
//Buat component Reactnya
const MenuItem = (props)=>{

    //Membuat sebuah Initial STATE
    const [click, setClick] = React.useState( false )
    
    return(
        <div className="menuItem" style={{
            width : '120px',
            height : '100%',
            // padding : '0px 10px',
            display : 'flex',
            justifyContent : 'center',
            alignItems : 'center',
            backgroundColor : click ? `${props.color}` : '#bebebe'
        }} onClick={ ()=>{
            setClick( !click )
            
        }  }>

            <a href={props.to}>
                {props.menuName}
            </a>
        </div>
    )
}