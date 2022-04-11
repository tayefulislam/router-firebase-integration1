import { getAuth } from 'firebase/auth';
import React from 'react';
// import useFirebase from '../../hooks/useFirebase';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { useLocation, useNavigate } from 'react-router-dom';
import app from '../../firebase.init';

const auth = getAuth(app)
const Login = () => {

    // const { signInWithGoogle, user } = useFirebase()

    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    const location = useLocation()
    const navigate = useNavigate()

    const from = location?.state?.from?.pathname || '/';

    const handleSignInWithGoogle = () => {
        signInWithGoogle()
            .then(() => {
                navigate(from, { replace: true });
            })


    }


    return (
        <div>

            <h1>This Is Login {user?.displayName}</h1>
            <div style={{ margin: '20px' }}>
                <button onClick={handleSignInWithGoogle}>Sign In With Google</button>
            </div>


            <form >

                <input type="email" placeholder='Your Email' />
                <br />
                <input type="password" placeholder='your Password' />
                <br />

                {/* <input onClick={signInWithGoogle} type="button" value="Login" /> */}


            </form>

        </div>
    );
};

export default Login;