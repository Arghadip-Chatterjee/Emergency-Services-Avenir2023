// import React , {useEffect}from 'react'
// import tw from 'tailwind-styled-components'
// import { useRouter } from 'next/router'
// import {signInWithPopup , onAuthStateChanged} from "../node_modules/@firebase"
// const Login = () => {
//   return (
//     <Wrapper>
//         <UberLogo src='https://tse2.mm.bing.net/th?id=OIP.Aj9Xo7hOJ1krMLJ3V0qYoAAAAA&pid=Api&P=0' />
//         <Title>Login to Access Your Account </Title>
//         <br></br>
//         <HeadImage src="https://cdn2.iconfinder.com/data/icons/flat-style-svg-icons-part-1/512/user_login_man-1024.png"/>
//         <SignInButton>Sign in with Google</SignInButton>
//     </Wrapper>
//   )
// }

// export default Login

// const Wrapper = tw.div`
//     flex flex-col h-screen w-screen bg-gray-200 p-4  
// `
// const SignInButton = tw.button`
//     bg-black text-white text-center py-4 mt-8 self-center w-full
// `

// const UberLogo = tw.img`
//     h-20 w-auto object-contain self-start
// `

// const Title = tw.div `
//     text-5xl pt-4 text-gray-500
// `

// const HeadImage = tw.img `
//     object-contain w-full self-start h-40
// `

import React, { useEffect } from 'react';
import tw from 'tailwind-styled-components';
import { useRouter } from 'next/router';
import { signInWithPopup, onAuthStateChanged } from 'firebase/auth';
import { auth, provider } from '../firebase';

const Login = () => {
  const router = useRouter();

  useEffect(() => {
    // Check if the user is already logged in
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is already logged in, redirect to another page
        router.push('/');
      }
    });

    // Clean up the subscription when the component unmounts
    return () => {
      unsubscribe();
    };
  }, [router]);

  const handleSignIn = () => {
    // Sign in with Google provider
    signInWithPopup(auth, provider)
      .then((result) => {
        // Handle successful sign-in
        const user = result.user;
        console.log('Signed in:', user);
        router.push('/');
      })
      .catch((error) => {
        // Handle sign-in error
        console.error('Error signing in:', error);
      });
  };

  return (
    <Wrapper>
      <UberLogo src="https://tse2.mm.bing.net/th?id=OIP.Aj9Xo7hOJ1krMLJ3V0qYoAAAAA&pid=Api&P=0" />
      <Title>Login to Access Your Account</Title>
      <br />
      <HeadImage src="https://cdn2.iconfinder.com/data/icons/flat-style-svg-icons-part-1/512/user_login_man-1024.png" />
      <SignInButton onClick={handleSignIn}>Sign in with Google</SignInButton>
    </Wrapper>
  );
};

export default Login;

const Wrapper = tw.div`
  flex flex-col h-screen w-screen bg-gray-200 p-4  
`;

const SignInButton = tw.button`
  bg-black text-white text-center py-4 mt-8 self-center w-full
`;

const UberLogo = tw.img`
  h-20 w-auto object-contain self-start
`;

const Title = tw.div`
  text-5xl pt-4 text-gray-500
`;

const HeadImage = tw.img`
  object-contain w-full self-start h-40
`;
