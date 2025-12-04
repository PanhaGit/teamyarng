import { Outlet } from "react-router-dom";
import TemplateLoading from "../components/TemplateLoading";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import Navbars from "../components/Navbars";

const MasterLayout = () => {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language || "en");

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLang(lng);

    if (lng === "kh") document.body.classList.add("kh-font");
    else document.body.classList.remove("kh-font");

    localStorage.setItem("lang", lng);
  };

  useEffect(() => {
    const saved = localStorage.getItem("lang") || "en";
    changeLanguage(saved);
  }, []);

  return (
    <TemplateLoading>
      <div className="flex flex-col min-h-screen">
        {/* Navbar with iOS glassmorphism */}
        <Navbars />

        {/* Main content - no padding top needed, navbar is fixed */}
        <main className="flex-1">
          <Outlet />
        </main>

        {/* Footer (optional) */}
        {/* <footer className="bg-slate-900 text-white text-center py-6 mt-auto">
          &copy; {new Date().getFullYear()} TeamYearng. All rights reserved.
        </footer> */}
      </div>
    </TemplateLoading>
  );
};

export default MasterLayout;
