import React, { useState } from 'react';

const Index = (props) => {

    const [drop, setDrop] = useState("");
    const [input, setInput] = useState("");

    const submitHandler = (e) => {
        console.log("wahhhhhhhhhh")
        e.preventDefault();
        console.log("ayy", drop)
        props.search(drop, input);
    }


    return (
        <div>
            <h4>Kinda works lol. May take a few calculated clicks.</h4>
            <form onSubmit={submitHandler}>
            <select value={drop} onChange={ (e) => setDrop(e.target.value)} required>
                <option value="people">People</option>
                <option value="planets">Planets</option>
            </select>
            <input type="number" value={input} onChange={ (e) => setInput(e.target.value)} required></input>
            <button type="submit">Search</button>
            </form>
        </div>
    );

}


export default Index;

