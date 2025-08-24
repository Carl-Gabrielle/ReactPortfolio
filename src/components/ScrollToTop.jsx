import { useEffect } from "react";
import { useLocation, matchPath } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        const match = matchPath("/projects/:id", pathname);
        if (match) {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "instant"
            });
        }
    }, [pathname]);

    return null;
}
