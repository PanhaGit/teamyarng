import { Typography, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import useDocumentTitle from "../../hooks/useDocumentTitle";

const NotFoundPage = () => {
  useDocumentTitle("404 - Page Not Found | teamyearng.com");

  return (
    <div className="h-screen flex items-center justify-center bg-white px-4">
      <div className="p-8 md:p-12 text-center rounded-xl max-w-md w-full animate-fadeIn">
        <img
          src="https://cdn-icons-png.flaticon.com/512/6142/6142726.png"
          alt="Mate Illustration"
          className="w-32 h-32 mx-auto mb-4 animate-bounce"
        />
        <Typography
          variant="h1"
          color="blue-gray"
          className="mt-2 !text-3xl md:!text-4xl font-bold animate-fadeIn delay-150"
        >
          404 - Page Not Found
        </Typography>

        <Typography className="mt-4 text-gray-500 text-base md:text-lg animate-fadeIn delay-300">
          Oops! It seems our friendly mate got lost. Try refreshing the page or
          return home.
        </Typography>

        <Link to={"/"}>
          <Button
            color="blue"
            className="mt-8 px-6 py-3 hover:shadow-md transform hover:scale-105 transition-all duration-300 animate-fadeIn delay-500"
            as={Link}
            to="/"
          >
            Back Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
