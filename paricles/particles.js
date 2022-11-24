window.onload = function() {
    let clause = window.innerWidth < 768;
    config.particles.number.value = clause ? 80 : 150;
    particlesJS("particle", config);
   };