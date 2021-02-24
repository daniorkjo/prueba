import logo from './logo.svg';
import './App.css';
import React from 'react';

function Saludo(props){
  
  return <h2>{props.title}</h2>
  {/*return <h2>Etiqueta en un function</h2>*/}
}
{/* en la clase de abajo hago lo mismo que en la funcion de arriba, tanto las CLASES como las FUNCIONES, son todo COMPONENTES
que puedo utilizar llamandolos con o sin parámetros */}

class Salute extends React.Component {
  
 constructor(){  
    {/* Esto lo puedo sustituir simplemente por una Class Field,
    seria quitando todo el contructor y poniendo state = { title: "titulo como estado"}
    */}
    super()
    this.state={title : "titulo como estado"}
  }

  render(){
    return (
      <h2>{this.state.title}</h2>
    )
  }
}

class Texto extends React.Component {
  render(){

    const isActivated = this.props.estaActivado ? 'Esta activado' : 'No está activado'

    return (

      <div>
        <p>{this.props.title} {this.props.numero} {JSON.stringify(this.props.boolean)} </p>
        <p>{this.props.otroTexto} {isActivated}</p>
        <p>{this.props.array.join(', ')}</p>
        <p>{this.props.objeto.key2}</p>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          
        <Salute /> {/*aqui llamo a la clase salute*/}
          
        </a> 

        <Texto 
          title='Texto' 
          numero={2} 
          boolean={true} 
          otroTexto="Más Texto" 
          estaActivado 
          array={[1,2,3]}
          objeto={{key:'valor 1', key2:'valor 2'}}/> 

        <Texto 
          title='Text' 
          numero={3} 
          boolean={true} 
          otroTexto="Más Texto" 
          estaActivado 
          array={[1,2,3]}
          objeto={{key:'valor 1', key2:'valor 2'}}/>  


      </header>
    </div>
  );
}

export default App;
