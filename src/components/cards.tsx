import { CardStyle } from '../../styles/cardsStyles'

interface Props{
    url: string,
    img: string,
    title: string,
    bg: string,
    warning: string
}

export default function Card(props:Props){
    return(
        <a href={props.url} target="_blank" rel="noreferrer">
        <CardStyle style={{backgroundImage:props.bg}} >
            
                <img src={props.img} alt="" />
                <p>{props.title}</p> 
                <p className='warning'>{props.warning}</p>
           
        </CardStyle>
        </a>
    )
}