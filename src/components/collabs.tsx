import CollabsStyle from "../../styles/collabsStyle"

interface Props{
    photo: string,
    name: string,
    description: string
}

export default function Collabs(props:Props){
    return(
        <CollabsStyle>
            <div className="photo">
                <img src={props.photo}/>
            </div>
            <div className="description">
                <p className='name'>{props.name}</p>
                <p className='description_text'>{props.description}</p>
            </div>
        </CollabsStyle>
    )
}