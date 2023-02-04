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
        <div ref={bannerRef} className="banner">
            <Particles className="banner__particles" id="tsparticles" options={particlesData} init={particlesInit} loaded={particlesLoaded} />
            <div className="banner__content">
                <h1>Hello! My name is <span className="c-featured">Piotr Kałuża</span>.</h1>
                <p>I'm a Front-End Developer</p>
                <button onClick={scrollBtnEvent} type="button" className="banner__btn"></button>
            </div>
        </div>
    )
}
