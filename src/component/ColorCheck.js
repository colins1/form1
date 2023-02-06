import React from 'react';

class ColorCheck extends React.Component {
    state = {
        backgraund : 'white',
        code : ''
    }

    hex2rgb(e) {
        e.preventDefault();
        let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : null;
    }


    render() {
        return (
            <div>
                <input onChange={this.hex2rgb} />
                <p>{this.state.code}</p>
            </div>
        )
    }
}

export default ColorCheck