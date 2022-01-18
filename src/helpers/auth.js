import axios from 'axios';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// Modifies outbound requests by adding Authorization header
axios.interceptors.request.use((request) => {
// Gets JWT from local storage
  const token = localStorage.getItem('token');

// Adds JWT to header in axios requests
  if (token !== null) {
    request.headers.Authorization(`Bearer ${token}`);
  }

  return request;
}, (error) => {
  return Promise.reject(error);
});

const signInUser = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
  
  // ***** This code will be used to add to my api later on
  // .then((user) => {
  //   const userInfo = {
  //     displayName: user.user?.displayName,
  //     photoURL: user.user?.photoURL,
  //     firebaseUid: user.user?.uid,
  //     email: user.user?.email
  //   }
  //   console.warn(userInfo);
  //   window.location.href='/';
  // });
};

const signOutUser = () => new Promise((resolve, reject) => {
  firebase.auth().signOut().then(resolve).catch(reject);
});

export { signInUser, signOutUser };
