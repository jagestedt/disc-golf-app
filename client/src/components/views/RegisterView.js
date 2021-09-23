import React from 'react';

const RegisterView = () => {
    return (
        <div className="register-view">
            <h1>Register</h1>
            <form action="" method="post">
                <h2>Enter your credentials below</h2>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" required id="username" placeholder="Enter username" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text" required id="email" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Enter a password</label>
                    <input type="password" required id="password" placeholder="Enter password" />
                </div>
                <div className="form-group">
                    <label htmlFor="password-confirmation">Re-enter password</label>
                    <input type="password" required id="password-confirmation" placeholder="Re-enter password" />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegisterView;
