import firebase from "firebase";
// later update to the firebase v9
// by doing so you should use async to get the docs.
// it would be a good practice.
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DB_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_SOTRAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MSG_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
};
 
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore(firebaseApp);
const provider = new firebase.auth.GoogleAuthProvider();

export {provider, auth, db};


    // export class Firebase {
  //   app: app.app.App
  //   auth: app.auth.Auth
  //   db: app.firestore.Firestore
  //   firestore: (app?: app.app.App | undefined) => app.firestore.Firestore
  //   files: app.storage.Storage
  
  //   constructor() {
  //     app.initializeApp(firebaseConfig)
  //     this.app = app.app()
  //     this.auth = app.auth()
  //     this.db = app.firestore()
  //     this.firestore = app.firestore
  //     this.files = app.storage()
  //   }
  // }
  
  // const firebase = new Firebase()
  // export default firebase
