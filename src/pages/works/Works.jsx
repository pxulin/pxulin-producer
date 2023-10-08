import { useState, useRef, useEffect } from 'react';
/* import { Link } from 'react-router-dom'; */
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import './Works.scss';
import '../../styles/Globals.scss';

const Works = () => {

    const scaleAnimation = {
        initial: { scale: 0, x: "-50%", y: "-50%" },
        enter: { scale: 1, x: "-50%", y: "-50%", transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] } },
        closed: { scale: 0, x: "-50%", y: "-50%", transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] } }
    }

    const cursor = useRef(null);
    const cursorLabel = useRef(null);
    const [active, setActive] = useState(false);


    useEffect(() => {
        let xMoveCursor = gsap.quickTo(cursor.current, "left", { duration: 0.5, ease: "power3" })
        let yMoveCursor = gsap.quickTo(cursor.current, "top", { duration: 0.5, ease: "power3" })
        //Move cursor label
        let xMoveCursorLabel = gsap.quickTo(cursorLabel.current, "left", { duration: 0.45, ease: "power3" })
        let yMoveCursorLabel = gsap.quickTo(cursorLabel.current, "top", { duration: 0.45, ease: "power3" })

        window.addEventListener('mousemove', (e) => {
            const { pageX, pageY } = e;
            xMoveCursor(pageX)
            yMoveCursor(pageY)
            xMoveCursorLabel(pageX)
            yMoveCursorLabel(pageY)
        })
    }, [])

    return (
        <div>
            <section id="works">
                <motion.div ref={cursor} className='cursor' variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}>View</motion.div>
                <motion.div ref={cursorLabel} className='cursorLabel' variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}>View</motion.div>
                <div className="about-content">
                    <span>Selected works</span>
                </div>
                <div className="worksContent">
                    {works.map((item, index) => (
                        <>
                            <motion.div
                                key={index}
                                className="project"
                                onMouseEnter={() => {
                                    setActive(true)
                                }}
                                onMouseLeave={() => {
                                    setActive(false)
                                }}
                            >
                                <h1>{item.title}</h1>
                                <h2>{item.subTitle}</h2>
                            </motion.div>
                            <div className="border"></div>
                        </>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Works;

const works = [
    {
        title: 'Project Alpha',
        subTitle: 'Exploring New Horizons',
        link: '/recent3',
        image: '/gfx-4.png'
    },
    {
        title: 'InnovateX',
        subTitle: 'Revolutionizing Wellness',
        link: '/recent3',
        image: '/gfx-1.png'
    },
    {
        title: 'TechVenture',
        subTitle: 'The Journey of Gatha',
        link: '/recent3',
        image: '/gfx-2.png'
    },
    {
        title: 'EcoSolutions',
        subTitle: 'Sustainability in Action',
        link: '/recent3',
        image: '/gfx-5.png'
    },
];
