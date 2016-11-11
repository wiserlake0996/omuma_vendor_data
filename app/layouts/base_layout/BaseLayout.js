var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require("react-router");
var { Router,
      Route,
      IndexRoute,
      IndexLink,
      Link,browserHistory, hashHistory  } = ReactRouter;

class BaseLayout extends React.Component{
    constructor(props, context)
    {
        super(props);
        this.router = context.router;

    }

    pageRedirect(){
        var location = this.props.location
        if (location.state && location.state.nextPathname) {
            this.context.router.replace(location.state.nextPathname)
        } else {
            this.context.router.replace('registration/submission_success')
        }
    }

    render(){
        return(
            <div>
                <nav>
                    <div className="row">
                        <div id="logo" className="col m8 offset-m4" >
                            <img src="images/logo.png" />
                        </div>
                    </div>
                </nav>

                <section id="content" className="container">
                    {this.props.children}
                </section>
            </div>
        );
    
    }
}

BaseLayout.contextTypes ={
    router: React.PropTypes.object.isRequired
}


module.exports = BaseLayout;