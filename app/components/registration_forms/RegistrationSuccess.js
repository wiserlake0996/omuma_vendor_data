var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require("react-router");
var { Router,
      Route,
      IndexRoute,
      IndexLink,
      Link,browserHistory, hashHistory  } = ReactRouter;

class RegistrationSuccess extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="container">
                <p> Form submission successful, click <Link to="/">here </Link> to add another vendor or just close the page if done </p>
            </div>
        );
    }

}

module.exports = RegistrationSuccess;