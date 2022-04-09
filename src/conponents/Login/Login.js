import React from 'react';

const Login = () => {
    return (
        <div>

            <h1>This Is Login</h1>

            <form >

                <div style={{ margin: '20px' }}>
                    <input type="button" value="Google sign in" />
                </div>


                <input type="email" placeholder='Your Email' />
                <br />
                <input type="password" placeholder='your Password' />
                <br />

                <input type="button" value="Login" />


            </form>

        </div>
    );
};

export default Login;