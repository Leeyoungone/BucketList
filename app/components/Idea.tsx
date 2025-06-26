import { ChangeEvent, useState } from 'react';


export default function Idea() {
    const [value, setValue] = useState("hello world");


    const click = () => {
        alert(value);
    }

    const textChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }

    return(
        <div className = "ideaRow">
            <input 
                onChange={textChange}
                value ={value}
                />
            <button onClick={click}> Click me!</button>
        </div>
    );

}