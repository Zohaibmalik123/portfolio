import React from "react";
function Footer() {
  return (
    <footer className=" xsm:pt-16 sm:pt-20 md:pt-32 lg:pt-48 pb-10 text-gray-400 text-center flex items-center justify-center flex-col sm:text-base xsm:text-sm md:text-lg">
    <p>© {new Date().getFullYear()}. All Rights Reserved.</p>
    <p>
      Developed by <strong>Muhammad Zohaib Ali</strong>.
    </p>
  </footer>
  );
}

export default Footer;
