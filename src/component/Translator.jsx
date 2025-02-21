import { useEffect } from "react";

const Translator = () => {
  useEffect(() => {
    // Remove any existing GTranslate widgets
    document.querySelectorAll(".gt-container").forEach((el) => el.remove());

    const script = document.createElement("script");
    script.src = "https://cdn.gtranslate.net/widgets/latest/lc.js";
    script.defer = true;
    document.body.appendChild(script);

    window.gtranslateSettings = {
      default_language: "en",
      languages: ["hi", "en"],
      wrapper_selector: ".gtranslate_wrapper",
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div className="gtranslate_wrapper border border-red-500"></div>;
};

export default Translator;
