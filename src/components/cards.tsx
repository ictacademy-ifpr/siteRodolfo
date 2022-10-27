import { CardStyle } from '../../styles/cardsStyles'
import { url } from 'inspector'

interface Props{
    url: string,
    img: string,
    title: string
}

export default function Card(props:Props){
    return(
        <CardStyle >
            <a href={props.url} target="_blank">
                <div style={{backgroundImage:props.img}} className='card_img'>
                    <p>{props.title}</p>
                </div>
            </a>
        </CardStyle>
    )
}