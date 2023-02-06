import React from 'react';

function hex2rgb(c) {
    e.preventDefault(c);
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(c);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

function ColorCheck () {

    state = {
        backgraund : white,
        code : hex
    }

    return (
        <div>
            <input onChange={hex2rgb} />
            <p>{state.code}</p>
        </div>
    )

}

export default ColorCheck