import { useEffect } from "preact/hooks";

const DOMAIN = "https://mautic.int.ethswarm.org";

export const useMauticSdk = () => {
  const globalWithMautic = globalThis as typeof globalThis & {
    MauticSDK: any;
    MauticDomain: string;
    MauticLang: any;
  };

  useEffect(() => {
    if (typeof globalWithMautic.MauticSDK === "undefined") {
      const head = document.getElementsByTagName("head")[0];
      const script = document.createElement("script");

      script.type = "text/javascript";
      script.src = DOMAIN + "/media/js/mautic-form.js";
      script.onload = function () {
        globalWithMautic.MauticSDK.onLoad();
      };

      head.appendChild(script);

      globalWithMautic.MauticDomain = DOMAIN + "/index.php";
      globalWithMautic.MauticLang = {
        submittingMessage: "Please wait...",
      };
    } else {
      globalWithMautic.MauticSDK.onLoad();
    }
  }, []);
};
