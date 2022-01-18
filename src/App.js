import { Button, Text } from '@chakra-ui/react';
import 'firebase/auth';
import firebase from 'firebase/compat/app';
import { useEffect, useState } from 'react';
import { signInUser, signOutUser } from './helpers/auth';

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        setUser(authed);
        // Adds JWT token to local storage
        authed.getIdToken().then((token) => localStorage.setItem("token", token));
      } else if (user || user === null) {
        setUser(false);
      };
    });
  }, []);

  return (
    <>
      {user
        ? <> 
            <Button onClick={() => signOutUser()}>Sign Out</Button>
            <Text>{user.displayName}</Text>
            <Button onClick={()=> console.warn(user)}>Test</Button>
          </>
        : <Button onClick={() => signInUser()}>Sign In</Button>
      }
    </>
  );
}

export default App;
