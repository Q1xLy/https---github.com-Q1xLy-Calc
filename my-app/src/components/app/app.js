import { Component } from 'react';

import './app.css'
import Output from '../output-box/output-box';
import Number from '../number-box/number-box';

class App extends Component {
    constructor(props){
        
            super(props);
            this.state = {
                count : 0,
                data: [
                    {id: 'AC', style: 'circle', text: 'AC'},
                    {id: '+/-', style: 'circle', text: '+/-'},
                    {id: '%', style: 'circle', text: '%'},
                    {id: ':', style: 'circle', text: ':'},
                    {id: 7, style: 'circle', text: 7},
                    {id: 8, style: 'circle', text: 8},
                    {id: 9, style: 'circle', text: 9},
                    {id: '*', style: 'circle', text: '*'},
                    {id: 4, style: 'circle', text: 4},
                    {id: 5, style: 'circle', text: 5},
                    {id: 6, style: 'circle', text: 6},
                    {id: '-', style: 'circle', text: '-'},
                    {id: 1, style: 'circle', text: 1},
                    {id: 2, style: 'circle', text: 2},
                    {id: 3, style: 'circle', text: 3},
                    {id: '+', style: 'circle', text: '+'},
                    {id: 0, style: 'circle', text: 0},
                    {id: 10, style: 'circle', text: '00'},
                    {id: ',', style: 'circle', text: ','},
                    {id: '=', style: 'circle', text: '='},
                ]
            }
        }
    
        onClick = () => {
                const buttonText = this.text;
                this.setState({
                    count: 1
                })
        } 


    render() {
            

            const {data, count} = this.state
        return(

            

            <div className='global__box'>
                <Output num={count}/>
                <Number data={data} click={this.onClick}/>
            </div>  
        )
        
    }
       
    
}


export default App;