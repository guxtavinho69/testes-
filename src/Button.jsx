import './Button.css'
function Button(props){
    const titulo = props.titulo;
    const descricao = props.descricao;
    return(
        <button className='title'>                
        
        <p>{titulo}</p>
                {descricao}
        </button>
    );
}

export default Button;