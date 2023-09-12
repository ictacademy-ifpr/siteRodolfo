import CollabsStyle from "../../styles/collabsStyle"

interface Props{
    photo: string,
    name: string,
    description: string,
    link: string
}

export default function Collabs(props:Props){
    return(
        <CollabsStyle>
            <div className="photo">
            <a href={props.link}>
                <img src={props.photo} />
            </a>
            </div>
            <div className="description">
                <a href={props.link}>
                    <p className='name'>{props.name}</p>
                </a>                    
                <p className='description_text'>{props.description}</p>
            </div>
        </CollabsStyle>
    )
}