import React from "react";
import { Box, Link, Typography } from "@mui/material";

const Header = () => {
  const index = 1;
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-blue-400 py-8">
        <div className="md:float-left block">
          <Link to="/">
            <span className="cursor-pointer font-bold text-4xl text-white">
              Graph CMS
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {/* {categories.map((category, index) => ( */}
            <Link key={index} to={`/category/1`}>
              <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
                Artificial Intelligence
              </span>
            </Link>
          {/* ))} */}
        </div>
      </div>
    </div>
  );
};

export default Header;
