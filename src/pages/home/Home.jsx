import "./Home.scss";
import '../../styles/Globals.scss';
import { motion } from "framer-motion";
import { RiArrowRightDownLine } from "react-icons/ri";
import { Link } from 'react-scroll'

import Loader from '../../utils/Loader/Loader'
import FramerMagnetic from "../../utils/MagneticButton/MagneticButton";
import "../../components/Arrows.scss";

const Home = () => {
  const headerContent = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        delay: 2,
      },
    }
  };


  const bottomContent = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        delay: 2,
      },
    }
  };

  return (
    <>
      <Loader section='Home section' />

      <section id="home">
        <main className="grid-layout">

          <motion.div
            variants={headerContent}
            initial="initial"
            animate="animate"
            transition='transition'
            className="header-content">
            <h1>Paulo Vitor.</h1>

            <p>A front-end developer & ux/ui designer.</p>
          </motion.div>

          <div className="bottom-content">
            <motion.div
              variants={bottomContent}
              initial="initial"
              animate="animate"
              transition='transition'
              className="text-content"
            >
              <p>
                Highly skilled at progressive enhancement, design systems & UI Engineering.
              </p>

              <p>Proven experience building successful products for clients across several countries.</p>
            </motion.div>


            <FramerMagnetic>
              <Link to="about" smooth={true} className="arrow">
                < RiArrowRightDownLine fill="#fff" size={64} />
              </Link>
            </FramerMagnetic>


          </div>
        </main>
      </section>
    </>
  );
};

export default Home;