import './Button.css'

export default function Button(props){
    return(
        <div className="btn">
            {props.text}
        </div>
    )
}