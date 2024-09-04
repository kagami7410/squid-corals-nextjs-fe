"use client"
import styles from './LandingPage.module.css'
import '/app/globals.css'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import MultiColouredHammerImage from '/public/landingPageAssets/hammer-no-bg.png'
import GoldToarchImage from '/public/landingPageAssets/torch1-no-bg.png'
import GreenToarchImage from '/public/landingPageAssets/greenToarch-no-bg.jpg'
import RedBlueScolyToarchImage from '/public/landingPageAssets/scoly-red-blue.png'
import Zoa1Image from '/public/landingPageAssets/zoa1-removebg.png'
import Zoa2Image from '/public/landingPageAssets/zoa2.png'
import Zoa3Image from '/public/landingPageAssets/zoa3.png'
import ClovePolypImage from '/public/landingPageAssets/clove-polyp.png'
import Link from 'next/link'

const LandingPage = ({setAddToCartClicked, test}) => {

  const [opacityEnabled, setOpacity] = useState(0);

  const [xPosition, setXPosition] = useState(0);
  const [xPositionHammer, setXPositionHammer] = useState(0);

  const [xPositionGoldToarch, setXPositionGoldToarch] = useState(0);
  const [xPositionGreenToarch, setXPositionGreenToarch] = useState(0);
  const [xPositionRedBlueScoly, setXPositionRedBlueScoly] = useState(0);
  const [xPositionZoa1, setXPositionZoa1] = useState(0);
  const [xPositionZoa2, setXPositionZoa2] = useState(0);
  const [xPositionZoa3, setXPositionZoa3] = useState(0);
  const [xPositionClovePolyp, setXPositionClovePolyp] = useState(0);



  const [showVideo, setShowVideo] = useState('recentlyAddedCoralsContainer');


  const [border, setBorder] = useState('');
  const observedElement = useRef(null);
  let visible = 0
  
  const [isMobile, setIsMobile] = useState(false)
  const [screenSize, setScreenSize] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };
    handleResize()
    if(screenSize < 760){
        setIsMobile(true)
        console.log("Device is Mobile")
    }
    else{
        setIsMobile(false)
        console.log('Device is Desktop')
    }
}, [screenSize])



  useEffect(() => {
    // Get the new X position (for example, randomly)

    if(isMobile){
      console.log(isMobile)
      const newXPosition = 0
      setXPosition(newXPosition);
    }

    
    if(!isMobile){
      console.log("is mobile: ", isMobile)
      const newXPosition = 30
      setXPosition(newXPosition);
      setTimeout(() => {

        setXPositionHammer(5);
        setXPositionGoldToarch(25);
        setXPositionGreenToarch(-18);
        setXPositionRedBlueScoly(40)
        setXPositionZoa1(20)
        setXPositionZoa2(30)
        setXPositionZoa3(40)
        setXPositionClovePolyp(20)
        setOpacity(1)
        visible = 1;
        // setBorder('border')
  
      }, 1)
    }
    else{
          setTimeout(() => {
      setOpacity(1)
      visible = 1;

    }, 1)
    }


    // Set the new X position
  }, [isMobile]);






  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowVideo('recently-added-corals-container video-visible')

          console.log('Element is in view!');
        } else {
          setShowVideo('recently-added-corals-container ')

          console.log('Element is out of view!');
        }
      },
      {
        root: null, // Use the viewport as the root
        rootMargin: '0px',
        threshold: 0.1 // Trigger callback when 10% of the element is in view
      }
    );

    if (observedElement.current) {
      observer.observe(observedElement.current);
    }

    return () => {
      if (observedElement.current) {
        observer.unobserve(observedElement.current);
      }
    };
  }, []);

  return (
    <div className={`${styles.landingPageContainer} ${border}`}>

      <div className={`${styles.landingPageTopContainer} ${border}`}>

        <div className={`${styles.landingPageDescription} ${border} transform transition-all `}
          style={{ opacity: `${opacityEnabled}`, transitionDuration: '750ms', transform: `translateX(${xPosition}%)` }}>
          <div className={`${styles.mainHeadline} ${border}`}>Stunning eco-friendly corals for your tank!</div>
          <div className={`${styles.shortDescription} ${styles.glow} ${styles.textGlow} ${border}
            `}>- The UK’s largest sustainable coral provider</div>
          <div className={`${styles.shopCoralsButtonContainer} ${border} `}> 
          <Link href={{pathname: '/corals', query: test}} className="btn btn-lg opacity-0 sm:opacity-100  sm:btn-lg border-amber-400">Shop Corals</Link>
          </div>
        </div>


        <div className={`${styles.landingPageImageMainContainer} ${border} card`}>
          <div className={`${styles.landingPageImageContainer} ${border}`}
            style={{ opacity: `${opacityEnabled}`, transitionDuration: '750ms', transform: `translateX(-${xPositionClovePolyp}%)` }}>
            <Image className={`${styles.landingPageClovePolypContainer} ${border}`} src={ClovePolypImage} alt='clovePolypImage' />
          </div>


          <div className={`${styles.landingPageImageContainer} ${border}`}
            style={{ opacity: `${opacityEnabled}`, transitionDuration: '750ms', transform: `translateX(-${xPositionZoa3}%)` }}>
            <Image className={`${styles.landingPageZoa3Container} ${border}`} src={Zoa3Image} alt="Example" />
          </div>

          <div className={`${styles.landingPageImageContainer} ${border}`}
            style={{ opacity: `${opacityEnabled}`, transitionDuration: '650ms', transform: `translateX(-${xPositionZoa2}%)` }}>
            <Image className={`${styles.landingPageZoa2Container} ${border}`} src={Zoa2Image} alt="Example" />
          </div>
          <div className={`${styles.landingPageImageContainer} ${border}`}
            style={{ opacity: `${opacityEnabled}`, transitionDuration: '550ms', transform: `translateX(-${xPositionZoa1}%)` }}>
            <Image className={`${styles.landingPageZoa1Container} ${border}`} src={Zoa1Image} alt="Example" />
          </div>
          <div className={`${styles.landingPageImageContainer} ${border}`}
            style={{ opacity: `${opacityEnabled}`, transitionDuration: '500ms', transform: `translateX(-${xPositionGreenToarch}%)` }}>
            <Image className={`${styles.landingPageGreenToarchContainer} ${border}`} src={GreenToarchImage} alt="Example" />
          </div>
          <div className={`${styles.landingPageImageContainer} ${border}`}
            style={{ opacity: `${opacityEnabled}`, transitionDuration: '470ms', transform: `translateX(-${xPositionRedBlueScoly}%)` }}>
            <Image className={`${styles.landingPageRedBlueScolyContainer} ${border}`} src={RedBlueScolyToarchImage} alt="Example" />
          </div>
          <div className={`${styles.landingPageImageContainer} ${border}`}
            style={{ opacity: `${opacityEnabled}`, transitionDuration: '450ms', transform: `translateX(-${xPositionGoldToarch}%)` }}>
            <Image className={`${styles.landingPageGoldToarchContainer} ${border}`} src={GoldToarchImage} alt="Example" />
          </div>


          <div className={`${styles.landingPageImageContainer} ${border}`}
            style={{ opacity: `${opacityEnabled}`, transitionDuration: '420ms', transform: `rotate(35deg) translateX(-${xPositionHammer}%)` }}>
            <Image className={`${styles.landingPageMultiColouredHammerContainer} ${border}`} src={MultiColouredHammerImage} alt="Example" />
          </div>
          <div className={`${styles.showCoralsContainer} ${border}`}
           style={{ opacity: `${opacityEnabled}`, transitionDuration: '420ms', transform: `translateX(-${xPositionHammer}%)` }}>
          <Link href='/corals' className="btn opacity-90 btn-lg sm:opacity-0 border-amber-400">Shop Corals</Link>
          </div>



        </div>
      </div>


      <div className='my-20  flex-col ' ref={observedElement} >
        <h1 className=' text-center text-xl md:text-3xl'>View Our Coral Farm</h1>
        <div className='my-5 flex  justify-center items-center'>
        <video className='w-[80%] rounded-3xl  '
          src="http://localhost:8000/contents/video?videoName=video1"
          loop
          autoPlay
          controls/>

        </div>


      </div>
    </div>
  )
}

export default LandingPage
