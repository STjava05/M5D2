import React, { Component } from 'react';
import fantasy from '../data/fantasy.json';
import history from '../data/history.json';
import horror from '../data/horror.json';
import romance from '../data/romance.json';
import scifi from '../data/scifi.json';
import LatestRelease from './genre/LatestRelease';



class ListBook extends Component {
//Nel metodo render, viene prima effettuata la destrutturazione della prop category per ottenere il valore della categoria selezionata
    render() {
        const {category} = this.props;
        console.log(category);
        
        //Viene utilizzato uno statement switch per determinare quale lista di libri deve essere visualizzata 
        //in base alla categoria selezionata. Ogni caso corrisponde a una categoria specifica e restituisce il componente LatestRelease passando la lista di libri corrispondente come prop listBook.
        
            switch (category) {
                    case 'fantasy':
                        return (
                            <LatestRelease listBook={fantasy} />
                        );


                    case 'history':
                        return (
                            <LatestRelease listBook={history} />
                        );

                    case 'horror':
                        return (
                            <LatestRelease listBook={horror} />
                        );

                    case 'romance':
                        return (
                            <LatestRelease listBook={romance} />
                        );

                    case 'scifi':
                        return (
                            <LatestRelease listBook={scifi} />
                        )

                    default:
                        return (
                            <LatestRelease listBook={fantasy} />
                        );
                        
                }
            
    
    }
}
export default ListBook;