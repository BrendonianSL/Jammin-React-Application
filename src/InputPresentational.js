import React from "react";


export default function InputPresentational(props) {
    return (
        <div>
            <form>
            <input value={props.input} type='text' id='songName' name='songName' onChange={props.handleChange}></input>
            </form>
            <p>{props.input}</p>
        </div>
    )
}