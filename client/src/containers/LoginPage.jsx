import React, { PropTypes } from 'react';
import LoginForm from '../components/LoginForm.jsx';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            errors: {},
            user: {
                email: '',
                password: ''
            }
        };
        this.changeUser=this.changeUser.bind(this);
        this.processForm=this.processForm.bind(this);

    }
    // event handler 
    processForm(e) {
        //as there isn't yet ajax, so forbid submit
        e.preventDefault();
        // event.preventDefault method prevent the default action from happening
        console.log(`email:{this.state.user.email}`);
        console.log(`password:{this.state.user.password}`);
    }
    // event handler to handle the change of input field
    changeUser(e) {
        //get the field name
        const field = e.target.name;
        const user = this.state.user;
        //update state value
        user[field] = e.target.value;
        this.setState({ user });
    }
    render() {
        return (
        <LoginForm
            onSubmit={this.processForm}
            onChange={this.changeUser}
            user={this.state.user}
            errors={this.state.errors}
        />
        );
    }
}
export default LoginPage;