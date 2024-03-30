import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from 'firebase/auth'
import app from '../../firebase/firebase.init';
import { useState } from 'react';

const Login = () => {
    const [user, setUser] = useState(null)
    const auth = getAuth(app)
    // console.log(auth)
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()


    const handleGoogleAuthSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loginUser = result.user
                // console.log(loginUser)
                setUser(loginUser)
            })
            .catch(error => {
                console.log("error", error.message)
            })
    }

    const handleGithubAuthSignIn = () => {
        signInWithPopup(auth,githubProvider)
        .then(result =>{
            const loginUser = result.user
            setUser(loginUser)
        })
        .catch(error =>{
            console.log(error)
        })
    }

    const handleGoogleAuthSignOut = () => {
        signOut(auth)
            .then(result => {
                console.log(result)
                setUser(null)
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div>
            {user ?
                <button onClick={handleGoogleAuthSignOut}>Sign Out</button> :
                <>
                    <button onClick={handleGoogleAuthSignIn}>Sign In google</button>
                    <button onClick={handleGithubAuthSignIn}>Sign in Github</button>
                </>
            }

            {user && <div>
                <p>{user.displayName}</p>
                <p>{user.email}</p>
                <br />
                <img src={user.photoURL} alt="" />
            </div>}
        </div>
    );
};

export default Login;