import CardMidiaStyle from '../../styles/cardMediaStyle'

interface Props{
    title: string,
    text: Array<string>,
    img: string,
    index: number
}

export default function CardMidia(props:Props){
    return(
        <CardMidiaStyle>
            <div className='image'>
                <img src={props.img} alt='imagem da notícia'/>
            </div>
            <div className='text'>
                <h3>{props.title}</h3>
                <p>{props.text}</p>
            </div>
            <div className='btn'>
                <a href={`/midia/${props.index}`}>Saiba mais</a>
            </div>
        </CardMidiaStyle>
    )
}