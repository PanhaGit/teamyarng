import { useEffect } from "react";

const DEFAULT_SITE_TITLE = "teamyearng.com";

/**
 * Custom hook to set the document title
 * @param {string} pageTitle - The title for this page
 * @param {boolean} includeSiteName - Whether to append the site name
 * @use useDocumentTitle("Special Page", false);
 */
const useDocumentTitle = (pageTitle = "", includeSiteName = true) => {
  useEffect(() => {
    const previousTitle = document.title;

    const title = pageTitle
      ? includeSiteName
        ? `${pageTitle} | ${DEFAULT_SITE_TITLE}`
        : pageTitle
      : DEFAULT_SITE_TITLE;

    document.title = title;

    return () => {
      document.title = previousTitle; // restore previous title on unmount
    };
  }, [pageTitle, includeSiteName]);
};

export default useDocumentTitle;
export { DEFAULT_SITE_TITLE };
