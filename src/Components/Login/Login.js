import React, { useContext } from 'react';
import Navigation from '../Common/Navigation/Navigation';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    }

const Login = () => {
    const [loggedinUser, setLoggedinUser] = useContext(UserContext);

    const handleGoogleLogin = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {

            const {displayName, email} = result.user;
            const signedInUser = {name: displayName, email};
            setLoggedinUser(signedInUser);
            // history.replace(from);

        }).catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
        });
    }
    return (
        <div>
            <Navigation></Navigation>
            <button onClick={handleGoogleLogin} type="button" className="btn btn-outline-dark m-5">Login With Google</button>
        </div>
    );
};

export default Login;