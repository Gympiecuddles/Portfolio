import React from 'react'
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { GiDiamonds } from 'react-icons/gi';

const TechBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 800px;
    height: 600px;
    outline: 5px #006e5f solid;
    outline-offset: -20px;
    border-radius: 30px;
    background-color: #ffffff;
    span {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 200px;
      height: 50px;
      outline: 2px #3d3c00 solid;
      outline-offset: -7px;
      border-radius: 5px;
      background-color: #006e5f;
      z-index: 3;
      h4 {
        margin-top: 9px;
        font-size: 20px;
        color: #f2fedc;
      }
    }
    h5 {
      margin: 0;
      margin-top: 10px;
      width: 100%;
      font-size: 15px;
      font-weight: 600;
      text-align: center;
    }
    ul {
      width: 80%;
      height: 100px;
      display: flex;
      justify-content: center;
      li {
        margin-right: 40px;
        padding: 11px;
        width: 400px;
        height: 90px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        text-align: center;
        font-size: 14px;
        border: 1px #3d3c00 solid;
        border-radius: 5px;
        background-color: #fcfff7;
      }
    }
    @media (max-width: 2424px) {
      width: 700px;
    }
    @media (max-width: 2140px) {
      width: 600px;
    }
    @media (max-width: 1846px) {
      width: 450px;
      height: 550px;
      ul {
        padding: 0;
        li {
          margin-right: 5px;
          height: 80px;
        }
      }
    }
`;

const Diamond = styled(GiDiamonds)`
  font-size: 14px;
`;

export default function Tech() {
  return (
        <TechBox>
            <span>
                <h4><Diamond /> Technologies <Diamond /></h4>
            </span>
            <h5>Fundamental's</h5>
            <ul>
              <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="75"
                height="55"
                viewBox="0 0 1052 1052"
              >
                <path 
                  fill="#f0db4f" 
                  d="M0 0h1052v1052H0z"
                  ></path>
                <motion.path
                  d="M965.9 801.1c-7.7-48-39-88.3-131.7-125.9-32.2-14.8-68.1-25.399-78.8-49.8-3.8-14.2-4.3-22.2-1.9-30.8 6.9-27.9 40.2-36.6 66.6-28.6 17 5.7 33.1 18.801 42.8 39.7 45.4-29.399 45.3-29.2 77-49.399-11.6-18-17.8-26.301-25.4-34-27.3-30.5-64.5-46.2-124-45-10.3 1.3-20.699 2.699-31 4-29.699 7.5-58 23.1-74.6 44-49.8 56.5-35.6 155.399 25 196.1 59.7 44.8 147.4 55 158.6 96.9 10.9 51.3-37.699 67.899-86 62-35.6-7.4-55.399-25.5-76.8-58.4-39.399 22.8-39.399 22.8-79.899 46.1 9.6 21 19.699 30.5 35.8 48.7 76.2 77.3 266.899 73.5 301.1-43.5 1.399-4.001 10.6-30.801 3.199-72.101zm-394-317.6h-98.4c0 85-.399 169.4-.399 254.4 0 54.1 2.8 103.7-6 118.9-14.4 29.899-51.7 26.2-68.7 20.399-17.3-8.5-26.1-20.6-36.3-37.699-2.8-4.9-4.9-8.7-5.601-9-26.699 16.3-53.3 32.699-80 49 13.301 27.3 32.9 51 58 66.399 37.5 22.5 87.9 29.4 140.601 17.3 34.3-10 63.899-30.699 79.399-62.199 22.4-41.3 17.6-91.3 17.4-146.6.5-90.2 0-180.4 0-270.9z"
                  stroke="#fff"
                  initial={{ fill: "#000000" }}
                  animate={{ fill: "#ffffff" }}
                  transition={{ default: {duration: 2, repeat: Infinity, repeatType: "mirror", ease: "easeInOut"}, 
                  fill: { duration: 2, repeat: Infinity, repeatType: "mirror" }}}
                ></motion.path>
              </svg>
                ES5-7
              </li>
              <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="75"
                fill="none"
                viewBox="0 0 124 141.53"
              >
                <path
                  fill="#1b73ba"
                  d="M10.383 126.892L0 0l124 .255-10.979 126.637-50.553 14.638z"
                ></path>
                <path
                  fill="#1c88c7"
                  d="M62.468 129.275V12.085l51.064.17-9.106 104.85z"
                ></path>
                <motion.path
                  d="M100.851 27.064H22.298l2.128 15.318h37.276l-36.68 15.745 2.127 14.808h54.043l-1.958 20.68-18.298 3.575-16.595-4.255-1.277-11.745H27.83l2.042 24.426 32.681 9.106 31.32-9.957 4-47.745H64.765l36.085-14.978z"
                  stroke="#fff"
                  strokeWidth="2"
                  initial={{ pathLength: 0, opacity: 0, fill: "rgba(255, 255, 255, 0)" }}
                  animate={{ pathLength: 1, opacity: 1, fill: "rgba(255, 255, 255, 1)" }}
                  transition={{ default: {duration: 2, repeat: Infinity, repeatType: "mirror", ease: "easeInOut"}, 
                  fill: { duration: 2, repeat: Infinity, repeatType: "mirror", ease: [1, 0, 0.8, 1]}}}
                ></motion.path>
              </svg>
                CSS
              </li>
              <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="75"
                fill="none"
                viewBox="0 0 124 141.532"
              >
                <path
                  fill="#e34f26"
                  d="M10.383 126.894L0 0l124 .255-10.979 126.639-50.553 14.638z"
                ></path>
                <path
                  fill="#ef652a"
                  d="M62.468 129.277V12.085l51.064.17-9.106 104.851z"
                ></path>
                <motion.path
                  d="M99.49 41.362l1.446-15.49H22.383l4.34 47.49h54.213L78.81 93.617l-17.362 4.68-17.617-5.106-.936-12.085H27.319l2.128 24.681 32 8.936 32.255-8.936 4.34-48.17H41.107L39.49 41.362z"
                  stroke="#fff"
                  strokeWidth="2"
                  initial={{ pathLength: 0, opacity: 0, fill: "rgba(255, 255, 255, 0)" }}
                  animate={{ pathLength: 1, opacity: 1, fill: "rgba(255, 255, 255, 1)" }}
                  transition={{ default: {duration: 2, repeat: Infinity, repeatType: "mirror", ease: "easeInOut"}, 
                  fill: { duration: 2, repeat: Infinity, repeatType: "mirror", ease: [1, 0, 0.8, 1]}}}
                ></motion.path>
              </svg>
                HTML
              </li>
            </ul>
            <h5>Library's</h5>
            <ul>
              <li>
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="175.7 78 490.6 436.9"
              >
                <g fill="#61dafb">
                  <motion.path 
                  d="M666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9V78c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6V78.5c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zM421.2 430c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24s9.5 15.8 14.4 23.4zM420.7 163c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6s22.9-35.6 58.3-50.6c8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zM310 490c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6z"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear"}}
                  ></motion.path>
                  <circle cx="420.9" cy="296.5" r="45.7"></circle>
                </g>
              </svg>
                React
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="95"
                  height="70"
                  viewBox="0 0 318 318"
                >       
                  <defs>
                    <path id="a" d="M0 0h318v318H0z"></path>
                    <mask id="b" width="318" height="318" x="0" y="0" fill="#fff">
                      <use xlinkHref="#a"></use>
                    </mask>
                  </defs>
                  <g fill="none" fillRule="evenodd">
                    <use
                      stroke="#4a4a4a"
                      strokeWidth="8"
                      mask="url(#b)"
                      xlinkHref="#a"
                    ></use>
                    <motion.path
                      fill="#4a4a4a"
                      d="M44.284 229.416c-4.428 0-7.344 2.376-7.344 5.544 0 2.808 1.728 4.68 5.652 5.76 3.564 1.008 4.32 1.512 4.32 3.096 0 1.44-1.332 2.304-3.384 2.304-1.944 0-3.708-.756-5.184-1.872l-2.304 2.592c1.764 1.584 4.32 2.7 7.596 2.7 4.356 0 8.028-2.088 8.028-6.048 0-3.384-2.196-4.968-6.084-6.012-3.24-.9-3.996-1.476-3.996-2.736 0-1.152 1.044-1.908 2.88-1.908 1.692 0 3.204.54 4.788 1.548l1.8-2.7c-1.8-1.404-4.032-2.268-6.768-2.268zm20.412 15.732l1.62 2.952c-1.368.972-3.096 1.44-4.788 1.44-3.744-.036-5.724-2.16-5.724-6.228v-10.044h-2.988v-3.312h2.988v-4.212l4.608-.54v4.752h4.428l-.468 3.312h-3.96v9.936c0 1.872.612 2.628 2.016 2.628.72 0 1.44-.216 2.268-.684zm19.62-15.192l-6.192 19.116c-1.44 4.464-4.248 7.344-9.9 7.776l-.468-3.348c3.78-.576 5.004-1.8 6.084-4.5h-1.584l-6.048-19.044h4.896l4.14 15.984 4.32-15.984zm7.308 19.584a7.55 7.55 0 003.06-.648l-.972-3.24c-.324.108-.648.18-1.08.18-.756 0-1.08-.432-1.08-1.332v-22.68l-4.608.504v22.32c0 3.132 1.764 4.896 4.68 4.896zm21.744-10.512c0 .612-.072 1.368-.108 1.872h-11.952c.324 3.888 2.16 5.148 4.68 5.148 1.692 0 3.096-.54 4.752-1.692l1.908 2.628c-1.872 1.512-4.176 2.556-7.056 2.556-5.904 0-9.072-3.924-9.072-9.936 0-5.796 3.06-10.188 8.46-10.188 5.328 0 8.388 3.6 8.388 9.612zm-4.572-1.116v-.216c0-3.132-1.116-5.004-3.708-5.004-2.16 0-3.528 1.44-3.78 5.22zm20.124-16.092l4.608.504V249h-4.068l-.324-2.412c-1.152 1.728-2.988 2.952-5.436 2.952-4.752 0-7.236-3.996-7.236-10.044 0-5.868 2.952-10.08 7.668-10.08 2.016 0 3.6.864 4.788 2.052zm-3.924 24.228c1.692 0 2.844-.828 3.924-2.448v-8.712c-1.008-1.224-2.088-2.016-3.636-2.016-2.376 0-3.96 2.016-3.96 6.588 0 4.896 1.404 6.588 3.672 6.588zM44.44 265.416c-5.472 0-8.892 4.14-8.892 10.224s3.42 9.9 8.928 9.9c2.448 0 4.428-.792 6.156-2.196l-2.052-2.916c-1.404.9-2.412 1.368-3.852 1.368-2.592 0-4.284-1.62-4.284-6.228 0-4.572 1.62-6.516 4.284-6.516 1.44 0 2.592.432 3.852 1.368l2.052-2.772c-1.8-1.548-3.708-2.232-6.192-2.232zm17.316 0c5.616 0 8.928 3.816 8.928 10.044 0 6.012-3.348 10.08-8.964 10.08s-8.964-3.816-8.964-10.08c0-5.976 3.348-10.044 9-10.044zm0 3.492c-2.7 0-4.14 2.052-4.14 6.552 0 4.572 1.404 6.588 4.104 6.588s4.104-2.052 4.104-6.588-1.404-6.552-4.068-6.552zm33.444-3.492c-2.52 0-4.284 1.224-5.724 3.204-.72-2.016-2.376-3.204-4.608-3.204-2.412 0-4.14 1.116-5.508 3.024l-.36-2.484h-3.996V285h4.608v-13.248c1.044-1.764 2.016-2.88 3.636-2.88 1.116 0 2.088.684 2.088 3.06V285h4.608v-13.248c1.044-1.764 2.016-2.88 3.6-2.88 1.152 0 2.088.684 2.088 3.06V285h4.608v-13.788c0-3.6-2.016-5.796-5.04-5.796zm20.268 0c4.968 0 7.056 3.924 7.056 10.008 0 5.832-2.7 10.116-7.524 10.116-1.944 0-3.6-.684-4.788-2.088v8.892l-4.608.504v-26.892h4.032l.252 2.34c1.512-1.98 3.528-2.88 5.58-2.88zm-1.764 16.596c2.52 0 3.996-1.944 3.996-6.552 0-4.824-1.296-6.588-3.6-6.588-1.62 0-2.988 1.116-3.888 2.592v8.568c.9 1.332 2.052 1.98 3.492 1.98zm21.132-16.596c5.616 0 8.928 3.816 8.928 10.044 0 6.012-3.348 10.08-8.964 10.08s-8.964-3.816-8.964-10.08c0-5.976 3.348-10.044 9-10.044zm0 3.492c-2.7 0-4.14 2.052-4.14 6.552 0 4.572 1.404 6.588 4.104 6.588s4.104-2.052 4.104-6.588-1.404-6.552-4.068-6.552zm23.4-3.492c-2.412 0-4.32 1.116-5.796 3.024l-.36-2.484h-3.996V285h4.608v-13.248c1.116-1.764 2.34-2.88 3.996-2.88 1.44 0 2.34.684 2.34 3.06V285h4.608v-13.788c0-3.636-1.98-5.796-5.4-5.796zm26.388 9.612c0 .612-.072 1.368-.108 1.872h-11.952c.324 3.888 2.16 5.148 4.68 5.148 1.692 0 3.096-.54 4.752-1.692l1.908 2.628c-1.872 1.512-4.176 2.556-7.056 2.556-5.904 0-9.072-3.924-9.072-9.936 0-5.796 3.06-10.188 8.46-10.188 5.328 0 8.388 3.6 8.388 9.612zm-4.572-1.116v-.216c0-3.132-1.116-5.004-3.708-5.004-2.16 0-3.528 1.44-3.78 5.22zm18.864-8.496c-2.412 0-4.32 1.116-5.796 3.024l-.36-2.484h-3.996V285h4.608v-13.248c1.116-1.764 2.34-2.88 3.996-2.88 1.44 0 2.34.684 2.34 3.06V285h4.608v-13.788c0-3.636-1.98-5.796-5.4-5.796zm20.052 15.732c-.828.468-1.548.684-2.268.684-1.404 0-2.016-.756-2.016-2.628v-9.936h3.96l.468-3.312h-4.428v-4.752l-4.608.54v4.212h-2.988v3.312h2.988v10.044c0 4.068 1.98 6.192 5.724 6.228 1.692 0 3.42-.468 4.788-1.44zm10.224-15.732c-4.428 0-7.344 2.376-7.344 5.544 0 2.808 1.728 4.68 5.652 5.76 3.564 1.008 4.32 1.512 4.32 3.096 0 1.44-1.332 2.304-3.384 2.304-1.944 0-3.708-.756-5.184-1.872l-2.304 2.592c1.764 1.584 4.32 2.7 7.596 2.7 4.356 0 8.028-2.088 8.028-6.048 0-3.384-2.196-4.968-6.084-6.012-3.24-.9-3.996-1.476-3.996-2.736 0-1.152 1.044-1.908 2.88-1.908 1.692 0 3.204.54 4.788 1.548l1.8-2.7c-1.8-1.404-4.032-2.268-6.768-2.268zM79.8 87.2l-36.2 22.5 36.2 22.9-3.7 4.6-37.7-23.6v-7.9l38.1-23.6m189.3 22.7v7.8l-37.7 23.6-3.7-4.9 36.1-22.6L224.4 86l3.2-4.9"
                      initial={{ x: 8 }}
                      animate={{ x: -8 }}
                      transition={{ duration: 1, repeat: Infinity, repeatType: "mirror" }}
                    ></motion.path>
                    <text
                      fill="#000"
                      fontFamily="AppleColorEmoji, Apple Color Emoji"
                      fontSize="100"
                      letterSpacing="0.5"
                      transform="translate(38 44)"
                    >
                      <tspan x="70" y="100">
                        💅
                      </tspan>
                    </text>
                  </g>
                </svg>
                Styled Components
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="75"
                  viewBox="0 0 126 126"
                >
                  <motion.path
                    d="M0 122V0l61 61 61-61v122L91.5 91.5 61 122 30.5 91.5z"
                    strokeWidth="2"
                    initial={{ pathLength: 0, opacity: .5, scale: .8 }}
                    animate={{ pathLength: 1, opacity: 1, scale: 1 }}
                    transition={{ default: {duration: 2, repeat: Infinity, repeatType: "mirror", ease: "easeInOut"}, 
                    fill: { duration: 2, repeat: Infinity, repeatType: "mirror", ease: [1, 0, 0.8, 1]}}}
                  ></motion.path>
                </svg>
                  Framer Motion
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="75"
                  fill="none"
                  viewBox="27 26 173.23 174.94"
                >
                  <g
                    fillRule="evenodd"
                    stroke="#000"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    strokeWidth="4"
                    clipRule="evenodd"
                  >
                    <motion.path 
                      d="M70.213 200.94L27 26l173.23 49.874z"
                      stroke="#000000"
                      strokeWidth="4"
                      initial={{ pathLength: 0, opacity: 0}}
                      animate={{ pathLength: 1, opacity: 1}}
                      transition={{ default: {duration: 2, repeat: Infinity, repeatType: "mirror", ease: "easeInOut"}}}
                    ></motion.path>
                    <path d="M113.583 50.942l21.591 87.496-86.567-24.945z"></path>
                    <path d="M92.103 125.36L81.379 81.895l43.008 12.346zM70.651 38.483l10.724 43.465-43.008-12.346zm86.012 24.777l10.724 43.465-43.008-12.346zm-64.555 62.13l10.724 43.465-43.008-12.346z"></path>
                  </g>
                </svg>
                  Three.js
              </li>
            </ul>
            <h5>Tool's</h5>
            <ul style={{ width: "200px" }}>
              <li>
              <svg
                style={{paddingLeft: "15px"}}
                xmlns="http://www.w3.org/2000/svg"
                width="75"
                height="60"
                preserveAspectRatio="xMinYMin meet"
                viewBox="0 0 256 256"
              >
                <motion.path
                  fill="#DE4C36"
                  d="M251.172 116.594L139.4 4.828c-6.433-6.437-16.873-6.437-23.314 0l-23.21 23.21 29.443 29.443c6.842-2.312 14.688-.761 20.142 4.693 5.48 5.489 7.02 13.402 4.652 20.266l28.375 28.376c6.865-2.365 14.786-.835 20.269 4.657 7.663 7.66 7.663 20.075 0 27.74-7.665 7.666-20.08 7.666-27.749 0-5.764-5.77-7.188-14.235-4.27-21.336l-26.462-26.462-.003 69.637a19.82 19.82 0 015.188 3.71c7.663 7.66 7.663 20.076 0 27.747-7.665 7.662-20.086 7.662-27.74 0-7.663-7.671-7.663-20.086 0-27.746a19.654 19.654 0 016.421-4.281V94.196a19.378 19.378 0 01-6.421-4.281c-5.806-5.798-7.202-14.317-4.227-21.446L81.47 39.442 4.83 116.077c-6.44 6.443-6.44 16.884 0 23.322l111.774 111.768c6.435 6.438 16.873 6.438 23.316 0l111.251-111.249c6.438-6.44 6.438-16.887 0-23.324"
                  stroke="#DE4C36"
                  strokeWidth="2"
                  initial={{ rotateX: 0 }}
                  animate={{ rotateX: 400 }}
                  transition={{ duration: 4, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
                ></motion.path>
              </svg>
                Git
              </li>
            </ul>
        </TechBox>
  )
}