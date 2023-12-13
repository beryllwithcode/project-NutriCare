import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function AutoScrollTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // Return null to make this a "pure" utility component
}

export default AutoScrollTop;
