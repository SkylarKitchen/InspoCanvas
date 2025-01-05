import { useEffect } from "react";
import styles from "./useDisableScrollBounce.module.css";

export const useDisableScrollBounce = () =>
    useEffect(() => {
        // Disable scroll bounce on window to make the panning work properly
        document.body.classList.add("overflow-hidden", "overscroll-none");
        return () => {
            document.body.classList.remove("overflow-hidden", "overscroll-none");
        };
    }, []);