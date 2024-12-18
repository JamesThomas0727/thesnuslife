import './Button.css'

export default function Button(props){
    return(
        <div className="button">
            {props.text}
        </div>
    )
}