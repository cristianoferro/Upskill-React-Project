import React from 'react';
import { motion } from 'framer-motion';

  const pathVariants = {
    hidden: {
      opacity:0,
      pathLength: 0
    },
    visible: { 
      pathLength:1,
      opacity:1,
      transition: {
        duration:2,
        ease: "easeInOut"
      }
    },
    exit:{
      pathLength:0,
    }
  }


const Login = () => {

    return(
        
          <motion.svg className="svg-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 843 335"
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            drag
            dragConstraints={{left:0, top:0, right:0, bottom:0}}
            dragElastic={0.1}
            exit="exit"
            
          >

          <g>
            <motion.path  variants={pathVariants} className="svg-test-style"  d="M436.493,330.57 422.59,264.603 
              406.383,264.603 393.104,330.57 	"/>
            <motion.path  variants={pathVariants} className="svg-test-style"  d="M397.114,330.57 409.167,268.47 
              414.415,268.47 419.875,268.47 432.45,330.57 	"/>
            <motion.path  variants={pathVariants} className="svg-test-style"  d="M401.124,330.57 411.833,272.339 
              414.424,272.339 417.125,272.339 428.408,330.57 	"/>
            <motion.path  variants={pathVariants} className="svg-test-style"  d="M405.133,330.57 414.434,276.207 
              424.365,330.57 	"/>
            <motion.path  variants={pathVariants} className="svg-test-style"  d="M421.453,313.842 414.781,313.842 
              408.109,313.842 	"/>
            <motion.path  variants={pathVariants} className="svg-test-style"  d="M420.895,310.811 414.764,310.811 
              408.633,310.811 	"/>
            <motion.path  variants={pathVariants} className="svg-test-style"  d="M420.336,307.779 414.746,307.779 
              409.156,307.779 	"/>
            <motion.path  variants={pathVariants} className="svg-test-style"  d="M421.863,316.874 414.746,316.874 
              407.629,316.874 	"/>
          </g>
          <g>
            <motion.path  variants={pathVariants} className="svg-test-style"  d="M468.379,330.57l-10.039-25.72h-3.967v-8.886
              h8.676c1.109,0,1.881-0.191,2.296-0.573c0.424-0.385,0.631-1.133,0.631-2.251v-16.521c0-1.109-0.207-1.859-0.631-2.242
              c-0.415-0.383-1.187-0.574-2.296-0.574h-8.676v56.768"/>
            <motion.path  variants={pathVariants} className="svg-test-style"  d="M450.365,330.57v-59.834h13.868
              c3.271,0,5.054,1.277,5.331,3.833c0.283,0.255,0.42,1.482,0.42,2.223v16.08c0,1.081,0.047,1.285,0.016,2.004
              c-0.036,0.82,0.073,2.18-1.406,3.016c-1.485,0.839-4.043,0.733-5.406,0.828c-1.341,0.094-5.344,0.219-5.344,0.219l0.011,3.104
              l3.521-0.072l11.325,28.602"/>
            <motion.path  variants={pathVariants} className="svg-test-style"  d="M446.357,330.57v-62.901h19.062
              c5.431,0,8.228,2.363,8.366,7.091c0.141,0.128,0.21,1.834,0.21,2.203v15.641c0,0.373,0.02,2.007-0.073,2.85
              c-0.08,0.727-0.389,2.085-0.828,2.891c-0.633,1.161-2.031,2.362-4.641,2.922c-0.965,0.207-1.635,0.433-3.188,0.569l0.392,1.009
              l0.344,0.813l11.024,26.914"/>
            <motion.path  variants={pathVariants} className="svg-test-style"  d="M442.351,330.57v-65.968h24.253
              c7.593,0,11.401,3.448,11.401,10.349v19.55c0,5.713-2.553,9.062-7.635,10.035l10.977,26.034"/>
          </g>
          <g>
            <motion.path  variants={pathVariants} className="svg-test-style"  d="M499.247,298.299 509.295,298.299 
              515.636,298.299 	"/>
            <motion.path  variants={pathVariants} className="svg-test-style"  d="M499.068,295.199 509.225,295.199 
              515.636,295.199 	"/>
            <motion.path  variants={pathVariants} className="svg-test-style"  d="M498.889,292.1 509.154,292.1 
              515.636,292.1 	"/>
            <motion.path  variants={pathVariants} className="svg-test-style"  d="M498.889,301.399 509.154,301.399 
              515.636,301.399 	"/>
            <motion.path  variants={pathVariants} className="svg-test-style"  d="M519.5,330.57h-32.194v-65.968h31.355"/>
            <motion.path  variants={pathVariants} className="svg-test-style"  d="M518.661,267.669h-27.315v59.835H519.5"/>
            <motion.path  variants={pathVariants} className="svg-test-style"  d="M518.661,270.736h-23.274v53.703H519.5"/>
            <motion.path  variants={pathVariants} className="svg-test-style"  d="M518.661,273.803 499.427,273.803 
              499.427,321.374 519.5,321.374 	"/>
          </g>
          <g>
            <motion.path  variants={pathVariants} className="svg-test-style"  d="M391.222,264.603l-11.6,65.968h-15.264
              l-7.425-46.525l-7.321,46.525h-15.26l-11.604-65.968"/>
            <motion.path  variants={pathVariants} className="svg-test-style"  d="M326.893,264.602l10.212,62.648h9.853
              l8.876-54.167l2.604-0.021l8.604,54.188h9.875l10.333-62.648"/>
            <motion.path  variants={pathVariants} className="svg-test-style"  d="M331.038,264.603l8.696,59.147h4.641l8.844-55.28
              h7.563l8.969,55.28h4.505l9.022-59.147"/>
            <motion.path  variants={pathVariants} className="svg-test-style"  d="M335.183,264.603 341.987,318.128 
              350.661,264.603 363.309,264.603 371.886,318.128 379.305,264.603 	"/>
          </g>
          <motion.path  variants={pathVariants} className="svg-test-style"  d="M425.892,237.701
            c-0.917,3.499-2.745,6.255-5.48,8.267c-2.733,2.012-6.016,3.02-9.85,3.02c-3.133,0-5.935-0.699-8.406-2.103
            c-2.474-1.395-4.402-3.334-5.775-5.819c-1.383-2.489-2.074-5.326-2.074-8.524c0-3.186,0.691-6.039,2.074-8.539
            c1.373-2.504,3.301-4.455,5.775-5.849c2.472-1.395,5.273-2.097,8.406-2.097c3.834,0,7.117,1.017,9.85,3.044
            c2.735,2.023,4.563,4.789,5.48,8.287"/>
          <motion.path  variants={pathVariants} className="svg-test-style"  d="M421.563,227.387
            c-0.779-2.425-2.149-4.321-4.105-5.688c-1.958-1.362-4.274-2.051-6.944-2.051c-2.776,0-5.12,0.826-7.148,2.316
            c-1.593,1.17-2.869,2.612-3.748,4.443c-0.867,1.806-1.307,3.852-1.307,6.134c0,2.289,0.436,4.331,1.307,6.129
            c0.875,1.823,2.156,3.258,3.748,4.429c2.028,1.492,4.372,2.316,7.148,2.316c2.67,0,4.986-0.68,6.944-2.038
            c1.956-1.362,3.327-3.251,4.105-5.677"/>
          <motion.path  variants={pathVariants} className="svg-test-style"  d="M417.233,227.387
            c-0.641-1.352-1.554-2.377-2.731-3.089c-1.182-0.697-2.533-1.057-4.039-1.057c-2.419,0-4.383,0.845-5.889,2.534
            c-1.506,1.686-2.26,3.946-2.26,6.766c0,2.826,0.754,5.084,2.26,6.774c1.506,1.684,3.47,2.53,5.889,2.53
            c1.506,0,2.856-0.352,4.039-1.057c1.178-0.712,2.091-1.735,2.731-3.088"/>
          <motion.path  variants={pathVariants} className="svg-test-style"  d="M482.807,235.356h-10.541"/>
          <motion.path  variants={pathVariants} className="svg-test-style"  d="M472.266,232.316 480.281,232.316 
            482.807,232.316 "/>
          <motion.path  variants={pathVariants} className="svg-test-style"  d="M472.266,229.276 480.278,229.276 
            482.807,229.276 "/>
          <motion.path  variants={pathVariants} className="svg-test-style"  d="M450.865,235.356h-12.27"/>
          <motion.path  variants={pathVariants} className="svg-test-style"  d="M438.596,232.316 448.34,232.316 
            450.865,232.316 "/>
          <motion.path  variants={pathVariants} className="svg-test-style"  d="M438.596,229.276 448.337,229.276 
            450.865,229.276 "/>
          <motion.path  variants={pathVariants} className="svg-test-style"  d="M484.193,222.733h-11.928v4.322v15.391h11.928"/>
          <motion.path  variants={pathVariants} className="svg-test-style"  d="M484.193,245.601h-15.869v-20.32v-5.701h15.869"/>
          <motion.path  variants={pathVariants} className="svg-test-style"  d="M484.193,248.756 464.384,248.756 
            464.384,216.426 484.193,216.426 "/>
          <motion.path  variants={pathVariants} className="svg-test-style"  d="M350.651,216.426l-12.524,15.841l12.987,16.489"/>
          <motion.path  variants={pathVariants} className="svg-test-style"  d="M346.301,248.756l-12.646-16.356l12.369-15.974"/>
          <motion.path  variants={pathVariants} className="svg-test-style"  d="M341.487,248.756 329.184,232.531 
            341.396,216.426 "/>
          <motion.path  variants={pathVariants} className="svg-test-style"  d="M330.828,216.426v32.33"/>
          <motion.path  variants={pathVariants} className="svg-test-style"  d="M326.893,216.426v32.33"/>
          <motion.path  variants={pathVariants} className="svg-test-style"  d="M322.958,216.426v32.33"/>
          <motion.path  variants={pathVariants} className="svg-test-style"  d="M362.713,216.426v32.33"/>
          <motion.path  variants={pathVariants} className="svg-test-style"  d="M358.778,216.426v32.33"/>
          <motion.path  variants={pathVariants} className="svg-test-style"  d="M354.843,216.426v32.33"/>
          <motion.path  variants={pathVariants} className="svg-test-style"  d="M391.688,222.733h-25.015"/>
          <motion.path  variants={pathVariants} className="svg-test-style"  d="M366.673,219.58h13.632h11.382"/>
          <motion.path  variants={pathVariants} className="svg-test-style"  d="M366.673,216.426 380.326,216.426 
            391.688,216.426 "/>
          <motion.path  variants={pathVariants} className="svg-test-style"  d="M383.24,222.733v26.022"/>
          <motion.path  variants={pathVariants} className="svg-test-style"  d="M379.305,222.733v26.022"/>
          <motion.path  variants={pathVariants} className="svg-test-style"  d="M375.37,222.733v26.022"/>
          <motion.path  variants={pathVariants} className="svg-test-style"  d="M438.596,216.426v32.33"/>
          <motion.path  variants={pathVariants} className="svg-test-style"  d="M434.66,216.426v32.33"/>
          <motion.path  variants={pathVariants} className="svg-test-style"  d="M430.726,216.426v32.33"/>
          <motion.path  variants={pathVariants} className="svg-test-style"  d="M458.735,216.426v32.33"/>
          <motion.path  variants={pathVariants} className="svg-test-style"  d="M454.801,216.426v32.33"/>
          <motion.path  variants={pathVariants} className="svg-test-style"  d="M450.865,216.426v32.33"/>
          <motion.path  variants={pathVariants} className="svg-test-style"  d="M518.218,216.426v32.33"/>
          <motion.path  variants={pathVariants} className="svg-test-style"  d="M514.283,216.426v32.33"/>
          <motion.path  variants={pathVariants} className="svg-test-style"  d="M510.348,216.426v32.33"/>
          <motion.path  variants={pathVariants} className="svg-test-style"  d="M497.177,216.426v32.33"/>
          <motion.path  variants={pathVariants} className="svg-test-style"  d="M493.242,216.426v32.33"/>
          <motion.path  variants={pathVariants} className="svg-test-style"  d="M489.307,216.426v32.33"/>
          <motion.path  variants={pathVariants} className="svg-test-style"  d="M510.348,248.756l-13.179-19.94"/>
          <motion.path  variants={pathVariants} className="svg-test-style"  d="M497.169,222.621 504.672,233.998 
            510.348,242.605 "/>
          <motion.path  variants={pathVariants} className="svg-test-style"  d="M497.169,216.426 504.682,227.844 
            510.348,236.455 "/>
          <motion.path variants={pathVariants} className="svg-test-style"  d="M321.857,255.604h197.25"/>
          <motion.path variants={pathVariants} className="svg-test-style"  d="M321.857,257.979h197.25"/>
          </motion.svg>
    )
}

export default Login;