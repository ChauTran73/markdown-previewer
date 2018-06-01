import React, { Component } from 'react';
import './App.css';
import marked from 'marked';
import  {Markup} from './Markup';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {content: ""};
    this.rawMarkup = this.rawMarkup.bind(this);
    this.changeInput = this.changeInput.bind(this);
  }
   rawMarkup(){
       var rawMarkup = marked(this.state.content, {sanitize: true})
	return {
		__html: rawMarkup
	}
   }
  changeInput(newContent){
      this.setState({content: newContent});
  }
  
  render() {
    return (
        <div className = "container-fluid">
        <div className ="row">
            <Markup onChange = {this.changeInput}/>
        <div className="col-xs-12 col-md-6">
            <h1>Preview</h1>
            <div id="preview" dangerouslySetInnerHTML={this.rawMarkup()}></div>
        </div>
        </div>
        </div>
        )
   
  }
  
  
}

export default App;
