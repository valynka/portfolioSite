import { useState, useEffect } from "react";

function useScreenVersion() {
  const version =
    document.documentElement.clientWidth < 576
      ? "xsmall"
      : document.documentElement.clientWidth < 768
      ? "small"
      : document.documentElement.clientWidth < 992
      ? "medium"
      : "lg";
  const [screenVersion, setScreenVersion] = useState(version);

  useEffect(() => {
    const handleResize = () => {
      setScreenVersion(
        document.documentElement.clientWidth < 576
          ? "xsmall"
          : document.documentElement.clientWidth < 768
          ? "small"
          : document.documentElement.clientWidth < 992
          ? "medium"
          : "lg"
      );
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenVersion;
}
export default useScreenVersion;
