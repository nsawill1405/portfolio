import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const ParticleBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let particles = [];
        let animationFrameId;
        let mouse = { x: null, y: null, radius: 150 };

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resizeCanvas);
        window.addEventListener('mousemove', (e) => {
            mouse.x = e.x;
            mouse.y = e.y;
        });
        resizeCanvas();

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.size = Math.random() * 2 + 1;
                this.baseColor = 'rgba(255, 255, 255, 0.5)';
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                // Bounce off edges
                if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
                if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

                // Mouse interaction
                if (mouse.x != null) {
                    let dx = mouse.x - this.x;
                    let dy = mouse.y - this.y;
                    let distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < mouse.radius) {
                        const forceDirectionX = dx / distance;
                        const forceDirectionY = dy / distance;
                        const force = (mouse.radius - distance) / mouse.radius;
                        const directionX = forceDirectionX * force * 3; // Push strength
                        const directionY = forceDirectionY * force * 3;
                        this.x -= directionX;
                        this.y -= directionY;
                    }
                }
            }

            draw() {
                ctx.fillStyle = this.baseColor;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const init = () => {
            particles = [];
            // Optimize: Cap number of particles to prevent lag on high-res screens
            // O(N^2) complexity means we must be careful with count
            const pixelCount = canvas.width * canvas.height;
            const density = 9000;
            let numberOfParticles = pixelCount / density;

            // Hard cap to maintain 60fps
            const maxParticles = 150;
            numberOfParticles = Math.min(numberOfParticles, maxParticles);

            for (let i = 0; i < numberOfParticles; i++) {
                particles.push(new Particle());
            }
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();

                // Connect particles
                // Optimization: limit connection distance checks if necessary, 
                // but with capped particles, O(N^2)/2 is acceptable (~11k checks max)
                for (let j = i; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;

                    // Quick reject before expensive sqrt
                    if (Math.abs(dx) > 100 || Math.abs(dy) > 100) continue;

                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 100) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance / 100})`;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        init();
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="absolute inset-0 w-full h-full overflow-hidden">
            <motion.div
                className="absolute inset-0 w-full h-full -z-10"
                animate={{
                    background: [
                        "linear-gradient(to bottom right, #000000, #18181b)",
                        "linear-gradient(to bottom left, #09090b, #000000)",
                        "linear-gradient(to top right, #000000, #0a0a0a)",
                        "linear-gradient(to top left, #18181b, #000000)",
                    ]
                }}
                transition={{
                    duration: 60,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "linear"
                }}
            />
            {/* Grain/Noise Overlay */}
            {/* Optimization: Use transform instead of backgroundPosition for hardware acceleration */}
            <motion.div
                className="absolute -inset-[100%] w-[300%] h-[300%] pointer-events-none z-0 opacity-[0.015]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
                animate={{
                    x: ["0%", "-10%", "5%", "-5%"],
                    y: ["0%", "10%", "-5%", "5%"]
                }}
                transition={{
                    duration: 0.2, // Faster, sharper static noise
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "linear"
                }}
            />
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-40"
            />
        </div>
    );
};

export default ParticleBackground;
