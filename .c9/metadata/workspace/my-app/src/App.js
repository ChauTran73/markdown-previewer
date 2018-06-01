{"changed":true,"filter":false,"title":"App.js","tooltip":"/my-app/src/App.js","value":"import React, { Component } from 'react';\nimport './App.css';\nimport marked from 'marked';\nimport  {Markup} from './Markup';\n\n\n\nclass App extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {content: \"\"};\n    this.rawMarkup = this.rawMarkup.bind(this);\n    this.changeInput = this.changeInput.bind(this);\n  }\n   rawMarkup(){\n       var rawMarkup = marked(this.state.content, {sanitize: true})\n\treturn {\n\t\t__html: rawMarkup\n\t}\n   }\n  changeInput(newContent){\n      this.setState({content: newContent});\n  }\n  \n  render() {\n    return (\n        <div className = \"container-fluid\">\n        <div className =\"row\">\n            <Markup onChange = {this.changeInput}/>\n        <div className=\"col-xs-12 col-md-6\">\n            <h1>Preview</h1>\n            <div id=\"preview\" dangerouslySetInnerHTML={this.rawMarkup()}></div>\n        </div>\n        </div>\n        </div>\n        )\n   \n  }\n  \n  \n}\n\nexport default App;\n","undoManager":{"mark":-2,"position":1,"stack":[[{"start":{"row":23,"column":2},"end":{"row":23,"column":3},"action":"insert","lines":[" "],"id":1938,"ignore":true}],[{"start":{"row":23,"column":2},"end":{"row":23,"column":3},"action":"remove","lines":[" "],"id":1939,"ignore":true}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":8,"column":22},"end":{"row":8,"column":22},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1521517639000}