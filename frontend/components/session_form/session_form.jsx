import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    if (this.props.formType === "login") {
      this.state = { email: "", password: "" };
    } else {
      this.state = { email: "", name: "", password: "" };
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    if (e.currentTarget.value === "Demo login") {
      this.props.processForm(
        { email: "guest@guest.com", password: "password" }
      );
    } else {
      this.props.processForm(user);
    }
  }

  signupLink() {
		if (this.props.formType === "login") {
			return (
        <p className="signup">
          New to Quickstarter?
          &nbsp;
          <Link to="/signup">Sign up!</Link>
        </p>
      );
		} else {
      return "";
		}
	}

  loginLink() {
    if (this.props.formType === "signup") {
      return (
        <p className="login">
          Have an account?
          &nbsp;
          <Link to="/login">Log in</Link>
        </p>
      );
    } else {
      return "";
    }
  }

	renderErrors() {
    if (this.props.errors) {
      return(
        <ul>
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
      );
    }
	}

  renderNameField() {
    if (this.props.formType === "signup") {
      return(
        <input type="text"
          value={this.state.name}
          onChange={this.update("name")}
          className="login-input" placeholder="Name" />
      );
    } else {
      return "";
    }
  }

  renderHeader() {
    if (this.props.formType === "signup") {
      return <h1>Sign up</h1>;
    } else {
      return <h1>Log in</h1>;
    }
  }

  button() {
    if (this.props.formType === "login") {
      return "Log me in!";
    } else {
      return "Create account";
    }
  }

  demoButton() {
    return "Demo login";
  }



	render() {
		return (
			<div className="login-form-container">
				<form onSubmit={this.handleSubmit} className="login-form-box">
					{this.renderErrors()}
          {this.loginLink()}
					<div className="login-form">
            {this.renderHeader()}
						<br/>
            {this.renderNameField()}
            <br/>
						<input type="text"
							value={this.state.email}
							onChange={this.update("email")}
							className="login-input" placeholder="Email" />
						<br/>
						<input type="password"
							value={this.state.password}
							onChange={this.update("password")}
							className="login-input" placeholder="Password" />
						<br/>
						<input type="submit" value={this.button()} />
						<input type="submit" value={this.demoButton()} onClick={this.handleSubmit} />
					</div>
          {this.signupLink()}
				</form>
			</div>
		);
	}

}

export default withRouter(SessionForm);
