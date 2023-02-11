import React from 'react';

class ColorCheck extends React.Component {
    state = {
        backgraund : 'white',
        vision : '',
    }

    componentWillMount = (cr) => {
        document.body.style.backgroundColor = cr;
    }

    hex2rgb = (e) => {
        if (e.target.selectionEnd === 7) {
            let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e.target.value);
            if (result) {
                this.componentWillMount(result.input);
            let results = {
                    r: parseInt(result[1], 16),
                    g: parseInt(result[2], 16),
                    b: parseInt(result[3], 16)
                }
                this.setState({backgraund: `rgb(${results.r},${results.g},${results.b})`, vision: 1});
                return result;
            }
            else {
                this.setState({backgraund: `red`, vision: 2});
                this.componentWillMount(`red`);
            }
        }else if (e.target.selectionEnd > 7)
        {
            this.setState({backgraund: `red`, vision: 2});
            this.componentWillMount(`red`);
        }
        else{
            this.setState({backgraund: `white`, vision: ''});
            this.componentWillMount(`white`);
        }
    }


    render() {
        return (
            <div>
                <input onChange={this.hex2rgb} />
                <p>{this.state.vision === 2 ? 'Ошибка' : this.state.vision === '' ? '' : this.state.backgraund}</p>
            </div>
        )
    }
}     

export default ColorCheck