import React, { useState, useEffect } from 'react';

import './App.css';

import { Button } from 'react-bootstrap';
import Header from './components/Header';
import Channel from './components/Channel';

import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBvZtQvYbeMBmR3Br2dvmYDN9ZBpIB96rQ',
  authDomain: 'react-chat-31b1c.firebaseapp.com',
  projectId: 'react-chat-31b1c',
  storageBucket: 'react-chat-31b1c.appspot.com',
  messagingSenderId: '874284801384',
  appId: '1:874284801384:web:80d598275bd6c67ab10add',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider(app);
const auth = getAuth(app);

const db = getFirestore();

function App() {
  const [user, setUser] = useState(() => auth.currentUser);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user ? user : null);
    });

    return unsubscribe;
  }, []);

  async function logIn() {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.log(error);
    }
  }

  async function signOut() {
    try {
      await auth.signOut();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App">
      <Header user={user} signOut={signOut}></Header>
      {user ? (
        <Channel db={db} user={user}></Channel>
      ) : (
        <div className="login">
          <Button onClick={logIn}>Sign in</Button>
        </div>
      )}
    </div>
  );
}

export default App;
