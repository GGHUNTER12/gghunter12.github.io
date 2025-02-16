particlesJS("particles-js", {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: { value: 0.5, random: false },
        size: { value: 3, random: true },
        move: { enable: true, speed: 2, out_mode: "bounce" } // Bounce so particles don’t disappear
    },
    interactivity: {
        detect_on: "window", // Changed to "window" to cover more areas
        events: { 
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" } // Adds a click effect for debugging
        },
        modes: { 
            repulse: { distance: 150, duration: 0.6 }, // Increased distance & duration for visibility
            push: { particles_nb: 4 } // Debugging: clicking will spawn more particles
        }
    }
});
