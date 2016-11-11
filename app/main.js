var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require("react-router");
var { Router,
      Route,
      IndexRoute,
      IndexLink,
      Link,browserHistory, hashHistory  } = ReactRouter;

var destination = document.querySelector("#entry");
var MainLayout = require('./layouts/base_layout/BaseLayout.js');
var RegFormLV1 = require('./components/registration_forms/RegistrationFormLV1.js')
var RegistrationSuccess = require('./components/registration_forms/RegistrationSuccess.js')

//                  <IndexRoute component={RegistrationFormLV1} />

ReactDOM.render(
      <Router history={hashHistory}>
            <Route path="/" component={MainLayout}>
                <IndexRoute component={RegFormLV1} />
                <Route path="registration/submission_success"  component={RegistrationSuccess} />
            </Route>

      </Router>, destination);