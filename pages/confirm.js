import { useEffect, useState } from 'react'
import tw from 'tailwind-styled-components'
import Map from './components/Map'
import { useRouter } from 'next/router'
// import RideSelector from './components/RideSelector'
import Link from 'next/dist/client/link'
import axios from 'axios'
import PaymentPage from './PaymentPage';

const Confirm = () => {
    const router = useRouter()
    // 🆒 Hyimen
    const { pickup, dropoff } = router.query

    const [pickupCoordinates, setPickupCoordinates] = useState()
    const [dropoffCoordinates, setDropoffCoordinates] = useState()

    const getPickupCoordinates = (pickup) => {
        // 🔥 Emeric
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
            new URLSearchParams({
                access_token: "pk.eyJ1IjoiYXJnaGFkaXAiLCJhIjoiY2xobHdoZmc3MTV1aTNqbnhmbDgydjU4eSJ9.dQeMUNENDkyWKH-Jwody_A",
                limit: 1
            })
        )
            .then(response => response.json())
            .then(data => {
                // 🚀 L M
                setPickupCoordinates(data.features[0].center);
            })
    }

    const getDropoffCoordinates = (dropoff) => {
        // 🔥 Emeric
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
            new URLSearchParams({
                access_token: "pk.eyJ1IjoiYXJnaGFkaXAiLCJhIjoiY2xobHdoZmc3MTV1aTNqbnhmbDgydjU4eSJ9.dQeMUNENDkyWKH-Jwody_A",
                limit: 1
            })
        )
            .then(response => response.json())
            .then(data => {
                // 🚀 L M
                setDropoffCoordinates(data.features[0].center)
            })
    }

    useEffect(() => {
        getPickupCoordinates(pickup);
        getDropoffCoordinates(dropoff);
    }, [pickup, dropoff])


    return (
        <Wrapper>

            <ButtonContainer>
                <Link href="/search">
                    <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
                </Link>

            </ButtonContainer>
            <Map
                pickupCoordinates={pickupCoordinates}
                dropoffCoordinates={dropoffCoordinates}
            // handleConfirm={handleConfirm}
            />
            {/* Benjamin */}
            <RideContainer>
                {/* <RideSelector /> */}
                <ConfirmButtonContainer>
                    <Link href="/PaymentPage">
                        <ConfirmButton>
                            Confirm Emergency Service
                        </ConfirmButton>
                    </Link>
                </ConfirmButtonContainer>
            </RideContainer>
        </Wrapper>
    )
}

export default Confirm


// 🚀 Sam
const ConfirmButton = tw.div`
bg-black text-white my-4 mx-4 py-4 text-center text-xl
`

const ConfirmButtonContainer = tw.div`
border-t-2

`

// Good Job Devlin
const RideContainer = tw.div`
flex-1 flex flex-col h-1/2
`

// good job Anthony
const Wrapper = tw.div`
flex h-screen flex-col
`

const ButtonContainer = tw.div`
    rounded-full absolute top-4 left-4 z-10 bg-white shadow-md cursor-pointer
`

const BackButton = tw.img`
    h-full object-contain
`


