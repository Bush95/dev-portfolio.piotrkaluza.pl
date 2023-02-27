import { useCallback, useRef } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesData from '../misc/banner-particles.json';
import "../scss/sections/banner.scss"

export default function Banner() {
    const bannerRef = useRef(null);
    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await container.canvas.element.classList.add('loaded');
    }, []);

    const scrollBtnEvent = () => {
        const nextElement = bannerRef.current.nextElementSibling;
        if (!nextElement) return false;

        window.scrollTo({
            top: nextElement.offsetTop,
            behavior: "smooth"
        });
    }

    return (
        <header ref={bannerRef} className="banner">
            <Particles className="banner__particles" id="tsparticles" options={particlesData} init={particlesInit} loaded={particlesLoaded} />
            <div className="banner__content">
                <h1 data-aos="fade-up">Hello! My name is <span className="c-featured">Piotr Kałuża</span>.</h1>
                <p data-aos="fade-up" data-aos-delay="200">I'm a Front-End Developer</p>
                <button data-aos="fade-up" data-aos-delay="300" onClick={scrollBtnEvent} type="button" className="banner__btn"></button>
            </div>
        </header>
    )
}
