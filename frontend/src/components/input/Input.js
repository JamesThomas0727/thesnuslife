import './Input.css'

export default function Input(props){
    return(
        <input className='input' placeholder={props.text} required></input>
    )
}