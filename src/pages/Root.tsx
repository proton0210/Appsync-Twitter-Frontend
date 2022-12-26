import React, { useContext } from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
const Root = () => {
  return (
    <Authenticator loginMechanisms={['email']}>
      {({ signOut, user }) => (
        <>
          <main>
            <h1>Hello {user?.username}</h1>
            <button onClick={signOut}>Sign out</button>
          </main>
        </>
      )}
    </Authenticator>
  );
};

export default Root;
