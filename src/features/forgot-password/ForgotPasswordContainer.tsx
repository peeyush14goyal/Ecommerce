import React, { useState, useEffect } from "react";


function ForgotPasswordContainer(this: any, props: any) {
    const [state, setState]: any = useState({
        email: "",
        password: ""
    });
    const [isPass, setPassType] = useState(true)
    const handleChange = (e: any) => {
        const { name, value } = e.target
        setState({ [name]: value })
    }

    const onPasswordVisibilityChange = () => {
        setPassType(!isPass)
    }

    const onLoginClick = () => {
        props.history.push(`/login`);
    }

    const onRegisterClick = () => {
        props.history.push(`/register`);
    }

    return (
        <div className="hold-transition login-page">
            <div className="login-box">
                <div className="login-logo">
                    <a><b>Suri</b>Consumer</a>
                </div>
                <div className="card">
                    <div className="card-body login-card-body">
                        <p className="login-box-msg">You forgot your password? Here you can easily retrieve a new password.</p>

                        <form action="recover-password.html" method="post">
                            <div className="input-group mb-3">
                                <input name="email" type="email" className="form-control" placeholder="Email" />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-envelope"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <button type="submit" className="btn btn-primary btn-block">Request new password</button>
                                </div>

                            </div>
                        </form>

                        <p className="mt-3 mb-1">
                            <a onClick={onLoginClick.bind(this)}>Login</a>
                        </p>
                        <p className="mb-0">
                            <a onClick={onRegisterClick.bind(this)} className="text-center">Register a new membership</a>
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ForgotPasswordContainer;