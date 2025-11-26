// src/layouts/MasterLayout.js
import React from "react";
import { Navbar, Typography, Button } from "@material-tailwind/react";
import { Outlet, Link } from "react-router-dom";

const MasterLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar className="p-4 bg-blue-600 text-white flex justify-between">
        <Typography variant="h6">My App</Typography>
        <div className="flex gap-4">
          <Link to="/">
            <Button variant="text" className="text-white">
              Home
            </Button>
          </Link>
          <Link to="/about">
            <Button variant="text" className="text-white">
              About
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="text" className="text-white">
              Contact
            </Button>
          </Link>
        </div>
      </Navbar>

      {/* Main Content */}
      <main className="flex-1 p-4 bg-gray-100">
        <Outlet /> {/* Render child routes here */}
      </main>

      {/* Footer */}
      <footer className="p-4 bg-blue-600 text-white text-center">
        &copy; 2025 My App
      </footer>
    </div>
  );
};

export default MasterLayout;
