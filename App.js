import React, {useEffect, useState} from 'react';
import { Router } from './src/routes';
<<<<<<< Updated upstream

=======
import { UserInfoProvider } from './src/contexts/UserInfoProvider';
import Splash from "./src/assets/images/splash.png";
import AnimatedSplash from "react-native-animated-splash-screen";



const App = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
        setIsLoaded(true);
    }, 2000)
  });
>>>>>>> Stashed changes

  return (
<<<<<<< Updated upstream
    <Router/>
    // <Registration/>
=======
    <>
    <AnimatedSplash>
      isLoaded={isLoaded}
      logoImage={Splash}
      backgroundColor={"#fff"}
      logoHeigh={150}
      logoWidth={150}
    </AnimatedSplash>
    


    <UserInfoProvider>
      <Router/>
    </UserInfoProvider>

    </>
>>>>>>> Stashed changes
  )
}