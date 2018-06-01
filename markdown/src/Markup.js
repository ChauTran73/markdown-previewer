import React, {Component} from 'react';


export class Markup extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        const content = e.target.value;
        this.props.onChange(content);
    }
    render(){
        return(<div className="col-xs-12 col-md-6">
            <h1>Markdown Input</h1>
            <textarea onChange = {this.handleChange} id="markdown"></textarea>
        </div>)
    }
}