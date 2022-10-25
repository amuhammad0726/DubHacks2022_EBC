import {
  Button,
  ChakraProvider,
  theme,
  Text,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Image,
} from '@chakra-ui/react';

import logo from './assets/earthbound-cleaning-logo.png';
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Opportunities from './components/Opportunities';
import Navbar from './components/Navbar';

const firebaseConfig = {
  apiKey: 'AIzaSyAc38gz9cW9arpQDqzvvXUeDeqyfJePBaQ',
  authDomain: 'dubhacks2022.firebaseapp.com',
  projectId: 'dubhacks2022',
  storageBucket: 'dubhacks2022.appspot.com',
  messagingSenderId: '166369939912',
  appId: '1:166369939912:web:8a06ed08971ffd4ebbf0fd',
  measurementId: 'G-KR9LGWRDLV',
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth(app);

function App() {
  const [user, loading, error] = useAuthState(auth);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    onOpen();
  }, []);

  //debugging
  useEffect(() => {
    console.log(user, loading, error);
  }, [user]);

  return (
    <ChakraProvider theme={theme}>
      {!user && !loading ? (
        <Modal isOpen={isOpen} onClose={onClose} boxSize="xl">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Earth Bound Cleaning</ModalHeader>
            <ModalBody>
              <Image src={logo} />
            </ModalBody>

            <ModalFooter>
              <Button onClick={() => signInWithRedirect(auth, provider)}>
                Google Sign In
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      ) : (
        <Opportunities />
      )}
    </ChakraProvider>
  );
}

export default App;
