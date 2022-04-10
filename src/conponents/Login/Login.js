import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {

    const { signInWithGoogle, user } = useFirebase()
    return (
        <div>

            <h1>This Is Login {user?.displayName}</h1>
            <div style={{ margin: '20px' }}>
                <button onClick={signInWithGoogle}>Sign In With Google</button>
            </div>


            <form >

                <input type="email" placeholder='Your Email' />
                <br />
                <input type="password" placeholder='your Password' />
                <br />

                <input onClick={signInWithGoogle} type="button" value="Login" />


            </form>

        </div>
    );
};

export default Login;