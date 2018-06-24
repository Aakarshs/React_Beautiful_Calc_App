import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
/* eslint no-eval: 0 */

class App extends React.Component {

  render() {
    return (
      
      <div className="app">
        <div className="circle"> 
            <Header />  
          </div>
        <div className = "bg"></div>
         
      </div>
    );
  }
}

//===================================================================================================================
//===================================================================================================================

class Header extends React.Component{
  constructor(props){
      super(props)

      this.state={
        text_in_box:'',
        answer:''
      };

      this.handleChange = this.handleChange.bind(this);      
      this.calculate = this.calculate.bind(this); 
      this.clears = this.clears.bind(this); 
   
  }

    handleChange(event){
        var store=this.state.text_in_box;

        this.setState({
            text_in_box:store + event.target.value
        });
    }

    calculate(event){
        var sol= eval(this.state.text_in_box)

        if(this.state.text_in_box==='1+5'){
            this.setState({
                text_in_box:'A<3E'
             });
        }

       else{    
            this.setState({
            text_in_box:sol
         });
      }
    }

    clears(){
        this.setState({
           text_in_box:'' 
        })
    }

  
  render(){
      
      return ( 
      <div>
         
      
          <div className="calc">
          <div className= "background"></div>
            <input  type="text" name="title" value={this.state.text_in_box}/>
            <p></p>
            
            <p></p>
            <button onClick={this.handleChange} value='1'> 1 </button>
            <button onClick={this.handleChange} value='2'> 2 </button>
            <button onClick={this.handleChange} value='3'> 3 </button>
            <button className="symbol" onClick={this.handleChange} value='/'> ÷ </button>
            
            <p></p>
            <button onClick={this.handleChange} value='4'> 4 </button>
            <button onClick={this.handleChange} value='5'> 5 </button>
            <button onClick={this.handleChange} value='6'> 6 </button>
            <button className="symbol" onClick={this.handleChange} value='-'> - </button>
            <p></p>

            <button onClick={this.handleChange} value='7'> 7 </button>
            <button onClick={this.handleChange} value='8'> 8 </button>
            <button onClick={this.handleChange} value='9'> 9 </button>
            <button className="symbol-x" onClick={this.handleChange} value='*'> X </button>
            
            <p></p>
            <button className="equals" onClick={this.calculate} value={this.state.text_in_box}>=</button>
            <button className="clear" onClick={this.clears}> CLS </button>
            <button className="symbol" onClick={this.handleChange} value='+'> + </button>
            
           
        </div>
        <div className="credit">Made by Routh</div>
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('root'));