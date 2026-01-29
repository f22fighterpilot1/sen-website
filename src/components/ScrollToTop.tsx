import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname, search, hash } = useLocation();

    useLayoutEffect(() => {
        // If navigating to an anchor, don't interfere
        if (hash) return;

        // Stop the browser from restoring old scroll positions on SPA nav
        if ("scrollRestoration" in window.history) {
            window.history.scrollRestoration = "manual";
        }

        // 1) Scroll the window/document
        const doc = document.scrollingElement || document.documentElement;
        doc.scrollTop = 0;
        document.body.scrollTop = 0;
        window.scrollTo(0, 0);

        // 2) ALSO scroll a likely inner scroll container (if you have one)
        //    Adjust selector if your scroller is different.
        const inner =
            (document.querySelector(".content") as HTMLElement | null) ||
            (document.querySelector(".app-shell") as HTMLElement | null);

        if (inner) inner.scrollTo({ top: 0, left: 0, behavior: "auto" });

        // 3) One more tick (fixes timing/layout cases)
        requestAnimationFrame(() => {
            const doc2 = document.scrollingElement || document.documentElement;
            doc2.scrollTop = 0;
            window.scrollTo(0, 0);
            if (inner) inner.scrollTo({ top: 0, left: 0, behavior: "auto" });
        });
    }, [pathname, search, hash]);

    return null;
}