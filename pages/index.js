import { useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import tw from 'tailwind-styled-components'
// import Map from './components/Map'
import Link from 'next/link'
import mapboxgl from 'mapbox-gl'
import React from 'react';
import { initializeApp } from 'firebase/app';
import { auth } from '../firebase'
import { provider } from '../firebase'
import { getAuth, signOut } from 'firebase/auth';
import { useRouter } from 'next/router';
import HospitalList from '../pages/Hospitals';
import dynamic from 'next/dynamic';


// const Map = dynamic(() => import('../pages/components/Map'), { ssr: false });
const Map2 = dynamic(() => import('../pages/components/Map2'), { ssr: false });

mapboxgl.accessToken = 'pk.eyJ1IjoiYXJnaGFkaXAiLCJhIjoiY2xobHdoZmc3MTV1aTNqbnhmbDgydjU4eSJ9.dQeMUNENDkyWKH-Jwody_A'


export default function Home() {
  // what are components? Reusable ui element
  const router = useRouter();
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Handle successful logout
        console.log('Logged out');
      })
      .catch((error) => {
        // Handle logout error
        console.error('Error logging out:', error);
      });

    // Redirect to the login page
    router.push('/login');
  };

  // const handleBookNow = () => {
  //   router.push('./maps.html');
  // };

  return (
    <Wrapper>
      <Map2 />
      <ActionItems>
        {/* Header */}
        <Header>
          {/* Self closing tag */}
          <UberLogo src='https://tse2.mm.bing.net/th?id=OIP.Aj9Xo7hOJ1krMLJ3V0qYoAAAAA&pid=Api&P=0' />
          {/* <Profile>
            <Name>Arghadip Chatterjee</Name>
            <UserImage src='https://lh3.googleusercontent.com/a-/AOh14GiD9MBH2IcIdXX8uw40dBSdCkjbAbabGqJPsXaE=s96-c' />
          </Profile> */}

          <Profile>
            <Name>Arghadip Chatterjee</Name>
            <UserImage src="https://lh3.googleusercontent.com/a-/AOh14GiD9MBH2IcIdXX8uw40dBSdCkjbAbabGqJPsXaE=s96-c" onClick={handleLogout} />
          </Profile>

        </Header>
        <ActionButtons>
          <Link href="/confirm">
            <ActionButton>
              <ActionButtonImage src='https://tse1.mm.bing.net/th?id=OIP.RtG7DTgjwxp14Z8-orzKcgHaHa&pid=Api&P=0' />
              Book Now
            </ActionButton>
          </Link>
          {/* <Link href="../pages/maps.html">
            <ActionButton>
              <img src="https://tse1.mm.bing.net/th?id=OIP.RtG7DTgjwxp14Z8-orzKcgHaHa&pid=Api&P=0" alt="Book Now" />
              Book Now
            </ActionButton>
          </Link> */}
          {/* <ActionButton>
            <ActionButtonImage src='https://i.ibb.co/n776JLm/bike.png' />
            Wheels
          </ActionButton>
          <ActionButton>
            <ActionButtonImage src='https://i.ibb.co/5RjchBg/uberschedule.png' />
            Reserve
          </ActionButton> */}
          <Link href="/Hospitals">
          <ActionButton>Emergency Contacts</ActionButton>
          </Link>
          

        </ActionButtons>


        {/* ActionButtons */}
        {/* InputButton */}
      </ActionItems>
    </Wrapper>
  )
}

const Wrapper = tw.div`
  flex flex-col h-screen 
`

const ActionItems = tw.div`
  flex-1 p-4
`

const Header = tw.div`
flex justify-between items-center
`

const UberLogo = tw.img`
h-28 
`

const Profile = tw.div`
flex items-center
`

const Name = tw.div`
mr-4 w-20 text-sm
`

const UserImage = tw.img`
h-12 w-12 rounded-full border border-gray-200 p-px
`

const ActionButtons = tw.div`
flex
`

const ActionButton = tw.div`
flex bg-gray-200 flex-1 m-1 h-32 items-center flex-col justify-center rounded-lg transform hover:scale-105 transition text-xl
`

const ActionButtonImage = tw.img`
h-3/5
`

// const InputButton = tw.div`
// h-20 bg-gray-200 text-2xl p-4 flex items-center mt-8 justify-center
// `
