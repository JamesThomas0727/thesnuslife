import './Textbox.css';

export default function Textbox(props){
    return (
        <p className='textbox'>
            {props.text};
        </p>
    )
}