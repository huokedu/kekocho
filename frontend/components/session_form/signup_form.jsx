import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';

class SignupForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount(){
    this.props.clearErrors();
  }

  update (field){
    return (e) => this.setState({[field]: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    const user = Object.assign({}, this.state );
    this.props.signup(user);
  }


  render(){
    const formType = this.props.formType === 'signup' ? 'login' : 'signup';
    const route = '/'+formType;
    const errors = this.props.errors.map((error) => (
      <li>{error}</li>
    ));
    return (
      <div>
        <div className="bg_container">
          <div className="bg_image"></div>
        </div>
        <div className="session-form-container">
          <h1 className="logo" >Kekocho</h1>
          <GreetingContainer />
          <div className="form-container">
            <h1>{this.props.formType}</h1>
            <h2 value={formType}><Link to={route}></Link></h2>
            <form className="session-form" onSubmit={this.handleSubmit}>
              <div className="session-form-inputs">
                <label><input type={'text'} placeholder={"First name"} onChange={this.update("first_name")} /> </label>
                <label><input type={'text'} placeholder={"Last name"} onChange={this.update("last_name")} /> </label>
                <label><input type={'email'} placeholder={"Email"} onChange={this.update("email")} /> </label>
                <label><input type={'password'} placeholder={"Password"} onChange={this.update("password")} /> </label>
                <input type="submit" value={this.props.formType} className="session-submit-button"/>
              </div>
            </form>
            <div className={ this.props.errors.length > 0 ? "error-style" : "" }>
              {errors}
            </div>
          </div>
        </div>
      </div>
      );
    }

  }

  export default withRouter(SignupForm);
