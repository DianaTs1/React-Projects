import React, {useState,useEffect, useReducer} from 'react';

export const Alphabet = () => {
    const [letter, setLetter] = useState("");
    const [count, setCount] = useState(0)
    const [word, setWord] = useState("");
    
    useEffect(() => {
        setWord(prev => prev += letter)
    },[count])

    const letterHandler = (e) => {
        setLetter(e.target.value);
        setCount(prev => prev+1)
    }

    const clearHandler = (e) => {
        setWord("")
    }


    return (
        <div className='counter-albhabet-wrapper'>
            <div className="counter">
                {!word && <h1>Type your word</h1>}
                {word && <h1>{word}</h1>}
                <button onClick={letterHandler} value="a">a</button>
                <button onClick={letterHandler} value="b">b</button>
                <button onClick={letterHandler} value="c">c</button>
                <button onClick={letterHandler} value="d">d</button>
                <button onClick={letterHandler} value="e">e</button>
                <button onClick={letterHandler} value="f">f</button>
                <button onClick={letterHandler} value="g">g</button>
                <button onClick={letterHandler} value="h">h</button>
                <button onClick={letterHandler} value="i">i</button>
                <button onClick={letterHandler} value="j">j</button>
                <button onClick={letterHandler} value="k">k</button>
                <button onClick={letterHandler} value="l">l</button>
                <button onClick={letterHandler} value="m">m</button>
                <button onClick={letterHandler} value="n">n</button>
                <button onClick={letterHandler} value="o">o</button>
                <button onClick={letterHandler} value="p">p</button>
                <button onClick={letterHandler} value="q">q</button>
                <button onClick={letterHandler} value="r">r</button>
                <button onClick={letterHandler} value="s">s</button>
                <button onClick={letterHandler} value="t">t</button>
                <button onClick={letterHandler} value="u">u</button>
                <button onClick={letterHandler} value="v">v</button>
                <button onClick={letterHandler} value="w">w</button>
                <button onClick={letterHandler} value="x">x</button>
                <button onClick={letterHandler} value="y">y</button>
                <button onClick={letterHandler} value="x">x</button>
                <button onClick={clearHandler}>Clear</button>
            </div>
        </div>
    )
}
