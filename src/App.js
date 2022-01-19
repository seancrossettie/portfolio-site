import 'firebase/auth';
import firebase from 'firebase/compat/app';
import { useEffect, useState } from 'react';
import Container from './components/layouts/Container';

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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container user={user}>
    </Container>
  );
}

export default App;
