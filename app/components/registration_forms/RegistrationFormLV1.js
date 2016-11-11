var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require("react-router");
var { Router,
      Route,
      IndexRoute,
      IndexLink,
      Link,browserHistory, hashHistory  } = ReactRouter;

class RegistrationFormLV1 extends React.Component{

    constructor(props){
        super(props);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleFormSubmit(e){
        e.preventDefault();
        this.pageRedirect();
        //alert("Form submittion acknowledged!");
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
        return (
        <div>
                <div className="row">
                    <h3 className="col m8 offset-m3"> Registration Form </h3>
                </div>

                <div className="row">
                    <h5> Business Details </h5>
                </div>

                <div className="row">
                    <form className="s12" onSubmit={this.handleFormSubmit}>
                    <div className="row">
                        <div className="input-field col s12">
                            <input ref ="business_name" id="business_name" type="text" className="validate"/>
                        <label for="business_name">Name</label>
                        </div>
                        <div className="input-field col s12">
                            <input ref ="business_email" id="business_email" type="text" className="validate"/>
                            <label for="business_email">email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input ref="business_address" id="business_address" type="text" className="validate"/>
                            <label for="business_address">address</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons prefix">phone</i>
                            <input ref="business_contact_number" id="business_contact_number" type="text" className="validate"/>
                            <label for="business_contact_number">Contact number</label>
                        </div>
                    </div>          

                    <div className="row">
                        <div className="input-field col s12 m3">
                            <input ref="facebook" placeholder="optional" id="facebook" type="text" className="validate"/>
                            <label for="facebook">facebook</label>
                        </div>

                        <div className="input-field col s12 m3">
                            <input ref="twitter" placeholder="optional" id="twitter" type="text" className="validate"/>
                            <label for="twitter">twitter</label>
                        </div>

                        <div className="input-field col s12 m3">
                            <input ref="instagram" placeholder="optional" id="instagram" type="text" className="validate"/>
                            <label for="instagram">instagram</label>
                        </div>

                        <div className="input-field col s12 m3">
                            <input ref="snapchat" placeholder="optional" id="snapchat" type="text" className="validate"/>
                            <label for="snapchat">snapchat</label>
                        </div>
                    </div> 

                <div className="row">
                    <h5> Owner Details </h5>
                </div>


                   <div className="row">
                        <div className="input-field col s12">
                            <input ref="business_owners_name" id="business_owners_name" type="text" className="validate"/>
                            <label for="business_owners_name">owners name</label>
                        </div>
                    </div>
 

                    <div className="row">
                        <div className="input-field col s12 m6">
                            <i className="material-icons prefix">phone</i>

                            <input ref="business_owners_number" placeholder="optional" id="business_owners_number" type="text" className="validate"/>
                            <label for="business_owners_number">phone number</label>
                        </div>

                        <div className="input-field col s12 m6">
                            <i className="material-icons prefix">email</i>

                            <input ref="business_owners_email" placeholder="for app launch updates" id="business_owners_number" type="text" className="validate"/>
                            <label for="business_owners_email"> email</label>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col m4 s4 offset-m5">
                              <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                                    <i className="material-icons right">send</i>
                                </button>
                        </div>
                    </div>
                    </form>
                </div>
        </div>
        );
    }
}

RegistrationFormLV1.contextTypes ={
    router: React.PropTypes.object.isRequired
}

module.exports = RegistrationFormLV1;