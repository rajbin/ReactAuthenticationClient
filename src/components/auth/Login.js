import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { login } from '../../actions/authentication';

class Login extends Component {
    renderField({ label, input, type, name, meta: { error, touched } }) {
        // Define stateless component to render input and errors\
        return (
            <fieldset className="form-group">
                <label>{label}</label>
                <input
                    {...input}
                    type={type}
                    name={name}
                    className="form-control"
                />
                {touched && error && <div>{error}</div>}
            </fieldset>
        );
    }

    onFormSubmit({ email, password }) {
        // Call action creator to login the user!
        this.props.login({ email, password }, this.props.history);
    }

    render() {
        return (
            <form
                onSubmit={this.props.handleSubmit(this.onFormSubmit.bind(this))}
            >
                <Field
                    label="Email"
                    name="email"
                    component={this.renderField}
                    type="text"
                />
                <Field
                    label="Password"
                    name="password"
                    component={this.renderField}
                    type="password"
                />
                <button type="submit" className="btn btn-primary">
                    Login
                </button>
            </form>
        );
    }
}

function validate(formProps) {
    const errors = {};

    if (!formProps.email) {
        errors.email = 'Please enter an email';
    }

    if (!formProps.password) {
        errors.password = 'Please enter a password';
    }

    return errors;
}

function mapStateToProps(state) {
    return { errorMessage: state.auth.error };
}

const loginReduxForm = reduxForm({
    form: 'loginForm',
    fields: ['email', 'password'],
    validate
})(withRouter(Login));

export default connect(mapStateToProps, { login })(loginReduxForm);
