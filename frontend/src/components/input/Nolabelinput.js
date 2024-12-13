import './Input.js'

export default function Nolableinput(props){

    return(
        <>
            <input value={props.value} size={props.size} className='nolabelinput' placeholder={props.placeholder} type={props.type} name={props.name}></input> 
        </>
    )

}