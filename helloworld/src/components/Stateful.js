import React, {Component } from 'react';

// Aqui es donde vamos a tener parte de la logica y luego ennel render vamos a tener el html que vamos a empujar a la app
class Stateful extends Component {
    constructor(props) {
        super(props); // => inicializamos props con Super
        this.state = {
            hello: 'Hello World'
        }
    }
    render() {

        return(
            <h1>{this.state.hello}</h1>
        )
    }

}

export default Stateful;















