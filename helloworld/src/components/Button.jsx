import React from 'react';

class Button extends React.Component {
    state = {
        count: 0
    }

    handleClick = () => { //=> evento para que cuando se haga un click se sume 1 manzana
        this.setState( {
            count: this.state.count + 1, 
        }) 
    }

    giveApple = () => {
        if (this.state.count > 0) {
            this.setState ({
                count: this.state.count - 1
            })
           alert('thanks for give an apple');
        }

        if(this.state.count <= 0) {
            alert('Youn dont have apples :(, press: "Agregar"')
        }
    }

    render() {
        const {count} = this.state; // desestructurar
        return(
            <div>
                <h1>Manzanas: {count} </h1>
                <button type="button" onClick={this.handleClick}>
                    Agregar
                </button>
                <button type="button" onClick={this.giveApple}>
                    Give
                </button>
            </div>
        );
    };

}


export default Button;

// STATE => un objeto al cual le podemos definir variable que pueden ser de cualquier tipo y podemos acceder dentro del componente en el momento que se imnicializa 

