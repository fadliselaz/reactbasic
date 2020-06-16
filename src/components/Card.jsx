
const Card = (props)=>{

    return(
        <div className="card">
            <h2 className="cardTitle">
                {props.title || 'title card' }
            </h2>
            <hr/>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dolorum eveniet sint consequatur quam consequuntur ab quidem esse aut illum dolores obcaecati quo accusantium laborum, blanditiis voluptatibus aspernatur ad iusto!
            </p>

        </div>
    )

}