
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation(); // Correctly place this outside of `return`

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, [pathname]); // Add `pathname` as a dependency

  return null; // The component doesn't render anything
}

export default ScrollToTop;
