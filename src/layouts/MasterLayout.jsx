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
      <div className="flex flex-col min-h-screen bg-gray-50">
        {/* Navbar */}
        <Navbars />

        {/* Main content */}
        <main className="flex-1 mt-16 md:mt-20 px-4 md:px-8 py-6">
          <Outlet />
        </main>

        {/* Footer */}
        <footer className="bg-blue-600 text-white text-center py-6 mt-auto">
          &copy; {new Date().getFullYear()} TeamYearng. All rights reserved.
        </footer>
      </div>
    </TemplateLoading>
  );
};

export default MasterLayout;
