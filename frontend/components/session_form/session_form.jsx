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
    this.props.processForm(user)
      .then(() => this.props.history.push('/'));
  }

  loginLink() {
		if (this.props.formType === "login") {
			return (
        <p>
          New to Quickstarter?
          &nbsp;
          <Link to="/signup">Sign up!</Link>
        </p>
      );
		} else {
      return "";
		}
	}

  signupLink() {
    if (this.props.formType === "signup") {
      return (
        <p>
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
        <label> Name:
          <input type="text"
            value={this.state.name}
            onChange={this.update("name")}
            className="login-input" />
        </label>
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



	render() {
		return (
			<div className="login-form-container">
				<form onSubmit={this.handleSubmit} className="login-form-box">
					{this.renderErrors()}
					<div className="login-form">
            {this.loginLink()}
            {this.renderHeader()}
						<br/>
            {this.renderNameField()}
            <br/>
						<label> Email:
							<input type="text"
								value={this.state.email}
								onChange={this.update("email")}
								className="login-input" />
						</label>
						<br/>
						<label> Password:
							<input type="password"
								value={this.state.password}
								onChange={this.update("password")}
								className="login-input" />
						</label>
						<br/>
						<input type="submit" value={this.button()} />
            {this.signupLink()}
					</div>
				</form>
			</div>
		);
	}

}

export default withRouter(SessionForm);
