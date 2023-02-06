import React from 'react';

class ColorCheck extends React.Component {
    state = {
        backgraund : 'white',
        code : ''
    }

    hex2rgb = (e) => {
        let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e.target.value);
        if (result) {
           let results = {
                r: parseInt(result[1], 16),
                g: parseInt(result[2], 16),
                b: parseInt(result[3], 16)
            }
            this.setState({backgraund: `rgb(${results.r},${results.g},${results.b})`, code: results});
            return result;
        }
    }


    render() {
        return (
            <div style={{backgroundColor: this.state.backgraund}}>
                <input onChange={this.hex2rgb} />
                <p>{this.state.code.map( (itm) => `${itm}, `)}</p>
            </div>
        )
    }
}

export default ColorCheck