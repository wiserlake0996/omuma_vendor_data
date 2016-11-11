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
        //this.pageRedirect();
        this.collectFormData();
    }

    collectFormData(){
        var newVendorKey = firebase.database().ref('registration_level_1/vendors').push().key;
        var updates = {};

        if(this.refs.business_name.value != ""){
            updates['registration_level_1/vendors/' + newVendorKey + "/name"] = this.refs.business_name.value;
        }if(this.refs.business_email.value != ""){
            updates['registration_level_1/vendors/' + newVendorKey + "/email"] = this.refs.business_email.value;
        }if(this.refs.business_address.value != ""){
            updates['registration_level_1/vendors/' + newVendorKey + "/address"] = this.refs.business_address.value;
        }if(this.refs.business_contact_number.value != ""){
            updates['registration_level_1/vendors/' + newVendorKey + "/phone_number"] = this.refs.business_contact_number.value;
        }if(this.refs.facebook.value != ""){
            updates['registration_level_1/vendors/' + newVendorKey + "/facebook"] = this.refs.facebook.value; 
        }if(this.refs.instagram.value != ""){
            updates['registration_level_1/vendors/' + newVendorKey + "/instagram"] = this.refs.instagram.value;
        }if(this.refs.snapchat.value != ""){
            updates['registration_level_1/vendors/' + newVendorKey + "/snapchat"] = this.refs.snapchat.value;
        }if(this.refs.twitter.value != ""){
            updates['registration_level_1/vendors/' + newVendorKey + "/twitter"] = this.refs.twitter.value;
        }if(this.refs.owners_name.value != ""){
            updates['registration_level_1/vendors/' + newVendorKey + "/owners_name"] = this.refs.owners_name.value;
        }if(this.refs.owners_email.value != ""){
            updates['registration_level_1/vendors/' + newVendorKey + "/owners_email"] = this.refs.owners_email.value ;
        }if(this.refs.owners_number.value != ""){
            updates['registration_level_1/vendors/' + newVendorKey + "/owners_number"] = this.refs.owners_number.value;
        }if(this.refs.vendor_type.value != ""){
            updates['registration_level_1/vendors/' + newVendorKey + "/vendor_type"] = this.refs.vendor_type.value;
        }if(this.refs.additional_notes.value != ""){
            updates['registration_level_1/vendors/' + newVendorKey + "/additional_information"] = this.refs.additional_information.value;
        }

        firebase.database().ref().update(updates).then(function(){
            this.pageRedirect();
        }.bind(this));
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
                            <input required ref ="business_name" id="business_name" type="text" className="validate"/>
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

                        <div className="input-field col s12">
                            <select required ref="vendor_type">
                            <option value="" disabled selected>Choose your option (required) </option>
                            <option value="product">Product Vendor</option>
                            <option value="service">Service Vendor</option>
                            <option value="location">Location Vendor</option>
                            <option value="other">Other</option>
                            </select>
                            <label>Vendor Type</label>
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
                        <div className="input-field col s12">
                            <textarea ref = "additional_information" id="additional_information" className="materialize-textarea"></textarea>
                            <label for="additional_information">Additional information</label>
                        </div>
                    </div>

                <div className="row">
                    <h5> Owner Details </h5>
                </div>


                   <div className="row">
                        <div className="input-field col s12">
                            <input ref="owners_name" id="owners_name" type="text" className="validate"/>
                            <label for="owners_name">owners name</label>
                        </div>
                    </div>
 

                    <div className="row">
                        <div className="input-field col s12 m6">
                            <i className="material-icons prefix">phone</i>

                            <input ref="owners_number" placeholder="optional" id="owners_number" type="text" className="validate"/>
                            <label for="owners_number">phone number</label>
                        </div>

                        <div className="input-field col s12 m6">
                            <i className="material-icons prefix">email</i>

                            <input required ref="owners_email" placeholder="for app launch updates" id="owners_email" type="text" className="validate"/>
                            <label for="owners_email"> email</label>
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