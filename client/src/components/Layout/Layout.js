import React from "react";
import classes from "./Layout.module.css";
import { useCallback } from "react";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
const Layout = (props) => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <>
      {/* // <div className={classes.layout}>{props.children}</div> */}
      <Particles
        className={classes.layout}
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          // background: {
          //   color: {
          //     value: "#212121",
          //   },
          // },
          particles: {
            number: {
              value: 280,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: "#A30E3B",
            },
            // shape: {
            //   type: "circle",
            //   stroke: {
            //     width: 0,
            //     color: "#000000",
            //   },
            //   polygon: {
            //     nb_sides: 5,
            //   },
            //   image: {
            //     src: "img/github.svg",
            //     width: 100,
            //     height: 100,
            //   },
            // },
            opacity: {
              value: 0.5,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            // size: {
            //   value: 3,
            //   random: true,
            //   anim: {
            //     enable: false,
            //     speed: 40,
            //     size_min: 0.1,
            //     sync: false,
            //   },
            // },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#A30E3B",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 3,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
            // },
            // interactivity: {
            //   detect_on: "canvas",
            //   events: {
            //     onhover: {
            //       enable: false,
            //       mode: "grab",
            //     },
            //     onclick: {
            //       enable: false,
            //       mode: "push",
            //     },
            //     resize: true,
            //   },
            // fullScreen: {
            //   enable: true,
            //   zIndex: -1000,
            // },
            // modes: {
            //   grab: {
            //     distance: 140,
            //     line_linked: {
            //       opacity: 1,
            //     },
            //   },
            //   bubble: {
            //     distance: 400,
            //     size: 40,
            //     duration: 2,
            //     opacity: 8,
            //     speed: 3,
            //   },
            //   repulse: {
            //     distance: 200,
            //     duration: 0.4,
            //   },
            //   push: {
            //     particles_nb: 4,
            //   },
            //   remove: {
            //     particles_nb: 2,
            //   },
            // },
          },
          detectRetina: true,
        }}
      />
      {props.children}
    </>
  );
};

// return <div className={classes.layout}>{props.children}</div>;

export default Layout;
