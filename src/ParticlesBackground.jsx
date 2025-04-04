import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
    const particlesInit = async (main) => {
        await loadFull(main);
    };

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                fullScreen: { enable: true },
                particles: {
                    number: { value: 50 },
                    shape: { type: "circle" },
                    size: { value: 3 },
                    move: {
                        enable: true,
                        speed: 2,
                        direction: "none",
                    },
                    opacity: { value: 0.5 },
                    line_linked: {
                        enable: true,
                        distance: 150,
                        color: "#ffffff",
                        opacity: 0.4,
                        width: 1,
                    },
                },
                background: {
                    color: "#282c34", // Background color
                },
            }}
        />
    );
};

export default ParticlesBackground;
