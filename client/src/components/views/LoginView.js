import React from 'react';

const LoginView = () => {
    return (
        <div className="login-view">
            <h1>Login</h1>
            <form action="" method="post">
                <h2>Enter your credentials below</h2>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" required id="username" placeholder="Enter username" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" required id="password" placeholder="Enter password" />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    )
};

export default LoginView;
