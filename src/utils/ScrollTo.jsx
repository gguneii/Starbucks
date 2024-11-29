import { useEffect } from "react";

function ScrollTo( pathname, top ) {
  useEffect(() => {
    window.scrollTo({
      top,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);
}

export default ScrollTo;
