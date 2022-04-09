import React from 'react';

const Registration = () => {
    return (
        <div>

            <h3>Registration</h3>

            <form >

                <input type="text" placeholder='Your Name' />
                <br />
                <input type="email" placeholder='Your Email' />
                <br />
                <input type="password" placeholder='your Password' />
                <br />

                <input type="button" value="Registration" />


            </form>



        </div>
    );
};

export default Registration;