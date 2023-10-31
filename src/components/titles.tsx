interface Props{
    title: string,
    description: string
}

export default function Titles(props:Props){
    return(
        <section>
            <div className= "title">{props.title}</div>
            <div className="description">          
                <p className='description_text'>{props.description}</p>
            </div>
        </section>
    )
}