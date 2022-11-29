import React, { useEffect } from 'react'
import styled from 'styled-components';
import { motion, useViewportScroll, useTransform } from 'framer-motion'
import { FiGithub, FiTwitter, FiLinkedin } from 'react-icons/fi';

//styles
const EmailBox = styled(motion.a)`  
    position: fixed;
    bottom: 0px;
    right: 4px;
    width: 300px;
    height: 200px;
    transform: scale(-1, 1);
    z-index: 2;
    cursor: pointer;
    p {
        position: absolute;
        bottom: 100px;
        right: 0px;
        font-size: 18px;
        color: black;
        transform: scale(-1, 1);
        opacity: 0;
        z-index: 2;
    }
`;

const SocialBox = styled(motion.div)`
    position: absolute;
    left: 0;
    top: 47.3%;
    display: flex;
    flex-direction: column;
    z-index: 2;
    a {
      padding-left: 15px;
      width: 60px;
      font-size: 40px;
      color: #000000;
      cursor: pointer;
    }
    @media (max-height: 1192px) {
      top: 10%;
    }
`; 

//Motion variants
const svgMotion = {
    hidden: {x: -300, y: 1000},
    visible: {x: 0, y :0, transition: { duration: 2}},
    hover: {x: 10, y: -10, transition: {duration: .2}}
}

const updateSvgMotion = {visible: {x: 0, y :0}}

const pMotion = {
    hover: {opacity: 1}
}

export default function Contact() {
    const { scrollYProgress } = useViewportScroll();
    const top = useTransform(scrollYProgress, [0, .5, 1], [960, 1660, 2170]);
    const bottom = useTransform(scrollYProgress, [0, .34, .38], [170, 570, 0]);
    const opacity = useTransform(scrollYProgress, [0, .33, .34, .38, .39, .41], [1, 1, 0, 0, .5, 1]);

    //Change transition of svgMotion after 2snpm run dev
    
    useEffect(() => {
      setTimeout(Object.assign(svgMotion, updateSvgMotion), "2000")
    })

    return (
    <>
      <EmailBox 
          href="mailto:schembri.y93@gmail.com?subject=Portfolio Message"
          style={{ bottom, opacity }}
          initial="hidden"
          animate="visible"
          whileHover="hover"
      >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="200"
            height="200"
            enableBackground="new 0 0 351.454 351.454"
            version="1.1"
            viewBox="0 0 351.454 351.454"
            xmlSpace="preserve"
            variants={svgMotion}
          >
            <path d="M350.32 23.06a3.427 3.427 0 00-3.848-.512L92.74 151.568a3.427 3.427 0 00-.304 5.936l64.276 41.476 7.948 58.456a3.42 3.42 0 003.396 2.964c.524 0 1.052-.124 1.54-.368l51.592-25.924 39.284 19.14a3.374 3.374 0 002.76.108 3.416 3.416 0 001.94-1.96S351.66 28.612 351.008 27.4l.22-.568a3.431 3.431 0 00-.908-3.772zM101.16 154.98L334.496 36.332l-176.652 155.22-56.684-36.572zm193.2-74.252l20.46-17.976-20.176 23.712a21.764 21.764 0 01-.22-5.236c.012-.192-.044-.336-.064-.5zm-3.512 10.196l-13.924 16.364-1.104-9.144a2.485 2.485 0 00-.288-.876l14.08-12.368c.156 2.052.58 4.056 1.236 6.024zm-18.164 21.344l-11.128 13.084c-.544-4.628-1.084-9.256-1.628-13.888-.016-.144-.088-.248-.124-.376l11.52-10.124c.452 3.768.908 7.536 1.36 11.304zm-15.38 18.076l-12.412 14.596c-.704-5.708-1.404-11.412-2.108-17.12-.064-.528-.292-.928-.572-1.276l13.28-11.668 1.812 15.468zm-16.64 19.564l-12.268 14.416c-.776-7.744-1.548-15.484-2.324-23.228-.012-.112-.064-.192-.088-.292l12.236-10.748c.816 6.616 1.628 13.236 2.444 19.852zm-16.596 19.5l-8.892 10.456c-1.336-8.684-2.668-17.364-4.004-26.044l10.42-9.16c.828 8.252 1.648 16.5 2.476 24.748zM211.06 184.7l-10.988 12.912c-1.004-10.46-2.012-20.924-3.016-31.388l9.836-8.644c1.388 9.04 2.78 18.08 4.168 27.12zm-15.332 18.024l-6.1 7.168c-.076.088-.128.2-.196.296-.028.04-.072.06-.096.1-.02.036-.02.072-.04.108-.04.064-.096.124-.128.192l-4.544 9.164c-1.084-13.304-2.044-26.616-2.808-39.944-.004-.06-.036-.1-.04-.156l10.82-9.508 3.132 32.58zm-32.436-6.232c-.02-.164-.124-.3-.164-.456l14.1-12.392a1690.332 1690.332 0 003.228 44.524l-10.088 20.352-7.076-52.028zm14.976 51.512l15.36-30.976 20.564 12.924-35.924 18.052zm81.844-2.552l-37.288-18.168-25.404-15.968L335.296 49.268l-75.184 196.184zM3.908 224.328c.168.024.336.04.504.04a3.433 3.433 0 003.388-2.932c.32-2.18.72-4.336 1.2-6.476a3.428 3.428 0 00-2.6-4.092 3.42 3.42 0 00-4.092 2.6 94.54 94.54 0 00-1.292 6.968 3.426 3.426 0 002.892 3.892zM4.764 250.22c1.876-.264 3.18-2 2.92-3.868a87.093 87.093 0 01-.828-12l.004-1.108a3.427 3.427 0 00-3.384-3.472h-.04a3.429 3.429 0 00-3.428 3.388L0 234.352c0 4.348.3 8.704.896 12.944a3.426 3.426 0 003.868 2.924zM155.46 287.936a3.43 3.43 0 00-4.424 1.98c-1.616 4.224-3.532 8.156-5.704 11.684a3.43 3.43 0 001.124 4.716 3.42 3.42 0 004.712-1.12c2.396-3.892 4.504-8.208 6.272-12.828a3.43 3.43 0 00-1.98-4.432zM14.856 270.04a75.557 75.557 0 01-4.712-12.16c-.524-1.82-2.428-2.84-4.248-2.336a3.424 3.424 0 00-2.328 4.252 81.589 81.589 0 005.144 13.276 3.43 3.43 0 003.076 1.912 3.428 3.428 0 003.068-4.944zM78.524 302.344a34.172 34.172 0 01-.684-1.676 3.428 3.428 0 00-1.72-6.072 39.909 39.909 0 01-.608-4.356c-.156-1.888-1.852-3.348-3.7-3.132a3.425 3.425 0 00-3.132 3.696 46.53 46.53 0 00.936 6.208 38.366 38.366 0 01-7.36 2.036A3.426 3.426 0 0059.452 303a3.438 3.438 0 003.96 2.804 45.477 45.477 0 008.204-2.216c.2.504.404 1.004.624 1.5a3.435 3.435 0 003.144 2.056c.46 0 .924-.092 1.368-.288a3.427 3.427 0 001.772-4.512zM51.024 299.292c-4.116-.52-8.152-1.716-11.996-3.544-1.704-.812-3.756-.088-4.568 1.62s-.088 3.756 1.624 4.568c4.504 2.144 9.244 3.544 14.084 4.156A3.432 3.432 0 0054 303.12a3.437 3.437 0 00-2.976-3.828zM138.308 310.728c-3.052 3.144-6.408 5.692-9.968 7.568a3.432 3.432 0 003.204 6.068c4.196-2.216 8.128-5.196 11.684-8.852a3.43 3.43 0 00-.068-4.848c-1.36-1.312-3.532-1.292-4.852.064zM24.288 284.34a65.143 65.143 0 01-3.4-4.284 3.424 3.424 0 00-4.788-.756 3.429 3.429 0 00-.752 4.792 72.531 72.531 0 003.752 4.728 54.989 54.989 0 005.964 5.94c.644.552 1.432.82 2.22.82.972 0 1.932-.412 2.612-1.204a3.428 3.428 0 00-.388-4.832 49.682 49.682 0 01-5.22-5.204zM96 277.324a3.426 3.426 0 00-4.716 1.124 50.472 50.472 0 01-1.68 2.552 49.195 49.195 0 01-6.34 7.328 3.427 3.427 0 00-.14 4.848 3.418 3.418 0 004.844.144 56.828 56.828 0 007.232-8.348 53.66 53.66 0 001.924-2.932A3.429 3.429 0 0096 277.324zM102.98 270.592c2.012-4.976 3.032-9.368 3.032-13.056 0-.628-.028-1.244-.088-1.848-.192-1.884-1.868-3.208-3.756-3.068a3.43 3.43 0 00-3.064 3.756c.04.376.056.764.056 1.16 0 2.764-.876 6.392-2.532 10.488a3.43 3.43 0 003.176 4.716 3.442 3.442 0 003.176-2.148zM94.464 318.864a31.724 31.724 0 01-9.896-7.224 3.435 3.435 0 00-4.844-.192 3.432 3.432 0 00-.192 4.848 38.452 38.452 0 0012.024 8.772c.468.224.964.328 1.452.328a3.438 3.438 0 003.108-1.972 3.432 3.432 0 00-1.652-4.56zM72.112 281.66a3.431 3.431 0 003.992-2.748c.36-1.952.86-3.904 1.476-5.8.564-1.744 1.508-4.024 2.588-6.256a3.423 3.423 0 00-1.592-4.58c-1.712-.844-3.752-.112-4.576 1.592-1.208 2.5-2.28 5.096-2.94 7.12a52.585 52.585 0 00-1.696 6.672 3.431 3.431 0 002.748 4zM81.356 257.572a3.42 3.42 0 002.14.748 3.42 3.42 0 002.676-1.288c2.916-3.644 5.788-5.648 8.088-5.648l.432-3.416-.224 3.424c1.836.108 3.52-1.312 3.644-3.2a3.43 3.43 0 00-3.196-3.644c-.076-.004-.58-.02-.656-.02-4.552 0-9.072 2.768-13.44 8.224a3.427 3.427 0 00.536 4.82zM117.784 321.888c-3.948.668-8.224.704-12.54.088-1.872-.236-3.612 1.04-3.872 2.916a3.435 3.435 0 002.912 3.88 50.71 50.71 0 007.076.504c2.58 0 5.128-.212 7.572-.632a3.423 3.423 0 002.804-3.952 3.43 3.43 0 00-3.952-2.804zM159.6 268.976c-1.852-.256-3.616 1.016-3.896 2.892a89.667 89.667 0 01-1.208 6.488 3.429 3.429 0 003.344 4.18 3.435 3.435 0 003.344-2.676c.52-2.32.956-4.66 1.3-6.992a3.421 3.421 0 00-2.884-3.892z"></path>
            <path d="M259.924 222.392c2.592-6.216 5.188-12.436 7.78-18.656 1.2-2.872-3.48-4.12-4.664-1.284-2.592 6.216-5.188 12.436-7.78 18.656-1.196 2.868 3.484 4.12 4.664 1.284zM272.896 191.3l15.564-37.308c1.2-2.872-3.48-4.12-4.664-1.284l-15.564 37.308c-1.196 2.868 3.48 4.12 4.664 1.284z"></path>
          </motion.svg>
          <motion.p variants={pMotion}>Say Hi</motion.p>
      </EmailBox>
      <SocialBox style={{top}} initial={{opacity: 0}} animate={{opacity:1}} transition={{delay: 1, duration: 2}} >
        <motion.a 
          href="https://github.com/Gympiecuddles" 
          target="_blank"
          whileHover={{ x: 10, color: "#fff24e"}}
          ><FiGithub /></motion.a>
        <motion.a 
          href="https://twitter.com/RichardSchembr1" 
          target="_blank"
          whileHover={{ x: 10, color: "#55e4e9"}}
          ><FiTwitter /></motion.a>
        <motion.a 
          href="https://www.linkedin.com/in/richard-schembri/" 
          target="_blank"
          whileHover={{ x: 10, color: "#2c54d8"}}
          ><FiLinkedin /></motion.a>
      </SocialBox>
    </>
  )
}
