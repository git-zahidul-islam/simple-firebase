/**
    -----------------------
        Initial installation Setup
    -----------------------
 * step 01: visit- console.firebase.google.com
 * step 02: create project (skip google Analytics)
 * step 03: Register app (create config)
 * step 04: install firebase : npm install firebase
 * step 05: add config file in your project
 * step 06: Danger, do not publish or make firebase config to public by pushing to those to github
 *                  -----------
 *                  INTEGRATION
 *                  -----------
 * step 07: Go to Doc > build > authentication > web > get start
 * step 08: Export app from the firebase.config.js file: export default app
 * step 09: login.jsx import getAuth() from firebase/auth
 * step 10: create [ const auth = getAuth() ]
 *                  ------------------
 *                  Provider setup
 *                  ------------------
 * step 11: import google auth provider & create a GoogleAuthProvider
 * step 12: use signInWithPopup & pass auth and provider
 * step 13: activate sign in method in firebase , (google,facebook,github);
 * step 14: [vite]: change 127.0.0.1 to localhost
 * --------------
 * More Auth Provider 
 * ---------------
 * step 15: activate the auth provider (create app in github, provide redirect url from firebase , get client id & client secret in github and put firebase)
 * step 16:
 * step 17:
*/