import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

export const Animations = () => {
    const text = new SplitType("#hero-text", { types: "chars" });
    const characters = document.querySelectorAll(".char");

    gsap.set(characters, { y: "100%", opacity: 0 });
    gsap.to(characters, {
        y: "0%",
        opacity: 1,
        stagger: 0.05,
        duration: 0.9,
        ease: "power3.out",
    });

    gsap.set("#nameRole", { opacity: 0, y: 20 });
    gsap.to("#nameRole", {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.5,
        ease: "power1.out",
    });

    gsap.set("#navs", { opacity: 0, y: 20 });
    gsap.to("#navs", {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.7,
        ease: "power1.out",
    });

    gsap.set("#cta", { opacity: 0, y: 20 });
    gsap.to("#cta", {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.7,
        ease: "power1.out",
    });

    gsap.set("#cvBtn", { opacity: 0, y: 20 });
    gsap.to("#cvBtn", {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.7,
        ease: "power1.out",
    });

    gsap.set("#socialLinks", { opacity: 0, y: 20 });
    gsap.to("#socialLinks", {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.7,
        ease: "power1.out",
    });

    gsap.set("#address", { opacity: 0, y: 20 });
    gsap.to("#address", {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.7,
        ease: "power1.out",
    });

    gsap.set("#description", { opacity: 0, y: 20 });
    gsap.to("#description", {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.7,
        ease: "power1.out",
    });
};

export const fadeInUp = (target, delay = 0) => {
    gsap.fromTo(
        target,
        { opacity: 0, y: 20 },
        {
            opacity: 1,
            y: 0,
            duration: 1,
            delay,
            ease: "power1.out",
            scrollTrigger: {
                trigger: target,
                start: "top 80%",
                toggleActions: "play none none none",
            },
        }
    );
};
fadeInUp("#header");
export const contactAnimations = () => {
    gsap.fromTo(
        ".contact-text",
        { opacity: 0, x: -100 },
        {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: "#contacts",
                start: "top 65%",
                toggleActions: "play none none none",
            },
        }
    );

    gsap.fromTo(
        ".cta-card",
        { opacity: 0, x: 100 },
        {
            opacity: 1,
            x: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: "#contacts",
                start: "top 65%",
                toggleActions: "play none none none",
            },
        }
    );
};

export const staggerFadeIn = (targets, delay = 0) => {
    gsap.fromTo(
        targets,
        { opacity: 0, y: 30 },
        {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            delay,
            ease: "power2.out",
            scrollTrigger: {
                trigger: targets[0]?.parentNode,
                start: "top 85%",
                toggleActions: "play none none none",
            },
        }
    );
};
export const projectCardAnimation = (target) => {
    gsap.fromTo(
        target,
        { opacity: 0, y: 50, scale: 0.95 },
        {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
                trigger: target,
                start: "top 80%",
                toggleActions: "play none none reverse",
            },
        }
    );
};

export const profileAnimations = (sectionRef) => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
        const educationCards = gsap.utils.toArray(".education-card");
        const experienceCards = gsap.utils.toArray(".experience-card");
        const certificationCards = gsap.utils.toArray(".certification-card");
        const servicesCards = gsap.utils.toArray(".services-card");

        gsap.fromTo(
            educationCards,
            { opacity: 0, x: -40 },
            {
                opacity: 1,
                x: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current.querySelector(".education-card"),
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
            }
        );

        gsap.fromTo(
            experienceCards,
            { opacity: 0, y: 40 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current.querySelector(".experience-card"),
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
            }
        );

        gsap.fromTo(
            certificationCards,
            { opacity: 0, y: 20 },
            {
                opacity: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.12,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: sectionRef.current.querySelector(".certification-card"),
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
            }
        );
        gsap.fromTo(
            servicesCards,
            { opacity: 0, y: 20 },
            {
                opacity: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.12,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: sectionRef.current.querySelector(".services-card"),
                    start: "top 80%",
                    toggleActions: "play none none none",
                },
            }
        );

    }, sectionRef);

    return () => ctx.revert();
};

export const footerAnimations = (footerRef) => {
    if (!footerRef.current) return;

    const ctx = gsap.context(() => {
        const q = gsap.utils.selector(footerRef);
        const blocks = q(".footer-animate");
        const navLinks = q(".footer-nav-item");
        const socialIcons = q(".footer-social-icon");

        gsap.set(blocks, { opacity: 0, y: 24 });
        gsap.set(navLinks, { opacity: 0, y: 12 });
        gsap.set(socialIcons, { opacity: 0, scale: 0.9 });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: footerRef.current,
                start: "top bottom",
                toggleActions: "play none none none",
            },
            defaults: { ease: "power2.out" },
        });

        tl.to(blocks, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.15,
        });

        if (navLinks.length) {
            tl.to(
                navLinks,
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.45,
                    stagger: 0.08,
                },
                "<+0.05"
            );
        }

        if (socialIcons.length) {
            tl.to(
                socialIcons,
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.45,
                    stagger: 0.1,
                    ease: "back.out(1.6)",
                },
                "<+0.05"
            );
        }
    }, footerRef);

    return () => ctx.revert();
};