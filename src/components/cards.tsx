import { CardStyle } from '../../styles/cardsStyles'

interface Props{
    url: string,
    img: string,
    title: string,
    bg: string
}

export default function Card(props:Props){
    return(
        <a href={props.url} target="_blank" rel="noreferrer">
        <CardStyle style={{backgroundImage:props.bg}} >
            
                <img src={props.img} alt="" />
                <p>{props.title}</p>   
           
        </CardStyle>
        </a>
    )
}