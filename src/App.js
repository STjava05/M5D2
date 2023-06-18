import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navBar/NavBar';
import Footer from './components/footer/Footer';

 import ListBook from './components/ListBook';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategory: "",
    }

  }
  //Viene definito il metodo setCategory che viene chiamato quando viene selezionata una categoria nella NavBar. 
  //Questo metodo riceve la categoria come argomento e aggiorna lo stato selectedCategory con la nuova categoria selezionata.
  setCategory = (category) => {
    console.log(category);
    this.setState({
      selectedCategory: category,


    });
  }
//Il metodo render viene implementato per restituire il contenuto da renderizzare nell'interfaccia utente. 
//Viene utilizzato il valore di selectedCategory nello stato per passarlo come prop al componente ListBook, che sarà responsabile di visualizzare i libri in base alla categoria selezionata.
  render() {
    const { selectedCategory } = this.state;

  return (
    <div>
      <NavBar setCategory={this.setCategory} />
       <ListBook category={selectedCategory} /> 
      
      <Footer />
      
    </div>
  );
}
}
export default App;
