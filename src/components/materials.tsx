import MaterialStyles from "../../styles/titlesStyle"


interface Props{
    title: string,
    description: string
    link: string
}

export default function Titles(props:Props){
    return(
        <MaterialStyles>
            <section>
                <a href={props.link}>
                    <p className='title'>{props.title}</p>
                </a>     
                <div className="description">          
                    <p className='description_text'>{props.description}</p>
                </div>
            </section>
        </MaterialStyles>
    )
}