import TitlesStyle from "../../styles/titlesStyle"


interface Props{
    title: string,
    description: string
}

export default function Titles(props:Props){
    return(
        <TitlesStyle>
            <section>
                <li className= "title">{props.title}</li>
                <div className="description">          
                    <p className='description_text'>{props.description}</p>
                </div>
            </section>
        </TitlesStyle>
    )
}