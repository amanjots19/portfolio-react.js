import React, { Component } from 'react'
import facebook from '../assets/icons/facebook.svg'
import github from '../assets/icons/github.svg'
import instagram from '../assets/icons/instagram.svg'
import pin from '../assets/icons/pin.svg'
import tie from '../assets/icons/tie.svg'
import mightycoder from '../assets/mighty-coder.svg'
import resume from '../assets/Resume.pdf'
import {motion} from 'framer-motion'

const Sidebar = ()=> {
    const handleemailMe=()=>{
        window.open("mailto:singh.amanjot2000@gmail.com")
    }
    const sidebar_variant={
        hidden:{
            x:'-20vw',
           

        },
        visible:{
            x:0,
            transition:{
                delay:0.1,duration:0.5,type:'spring'
            }
        }
    }
        return (
            <motion.div className="sidebar"
                variants={sidebar_variant}
                initial='hidden'
                animate='visible'
            >
                <img src={mightycoder} alt="avtar" className="sidebar__avtar"/>
                <div className="sidebar__name">Amanjot <span>Singh</span></div>
                <div className="sidebar__item sidebar__title">Web Developer</div>
                <a href={resume} download="Resume.pdf">
                    <div className="sidebar__item resume">
                        <img src={tie} alt="resume" className="sidebar_icon "/>Download Resume
                    </div>
                </a>
                <figure className="sidebar__social-icons my-2">
                    <a href=""><img src={facebook} alt="facebook" className="sidebar_icon  mr-3"/></a>
                    <a href=""><img src={instagram} alt="instagram" className="sidebar_icon"/></a>
                </figure>
                <div className="sidebar_contact">
                    <div className="sidebar__item sidebar__github">
                        <a href=""><img src={github} alt="github" className="sidebar_icon mr-3"/>github</a>
                    </div>
                    <div className="sidebar__location">
                        <img src={pin} alt="" className="sidebar_icon mr-3"/>Delhi,India</div>
                        <div className="sidebar__item">singh.amanjot2000@gmail.com</div>
                        <div className="sidebar__item">8587020853</div>
                </div>
                <div className="sidebar__item sidebar__email" onClick={handleemailMe}>email me</div>
            </motion.div>
        )
    
}

export default Sidebar
