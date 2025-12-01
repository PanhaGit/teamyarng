import { useTranslation } from "react-i18next";
import { useEffect } from "react";
const Nav = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);

    if (lng === "kh") {
      document.body.classList.add("kh-font");
    } else {
      document.body.classList.remove("kh-font");
    }

    localStorage.setItem("lang", lng);
  };

  useEffect(() => {
    const saved = localStorage.getItem("lang") || "en";
    if (saved === "kh") {
      document.body.classList.add("kh-font");
    }
  }, []);
  return (
    <>
      <div className="hidden md:flex gap-6 items-center">
        <Link
          to="/"
          className="text-blackLight font-medium hover:text-blue-600 transition"
        >
          {t("home")}
        </Link>
        <Link
          to="/about"
          className="text-blackLight font-medium hover:text-blue-600 transition"
        >
          {t("about")}
        </Link>
        <Link
          to="/contact"
          className="text-blackLight font-medium hover:text-blue-600 transition"
        >
          {t("contact")}
        </Link>
      </div>
    </>
  );
};

export default Nav;
