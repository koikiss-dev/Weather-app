import React from "react";

const FooterMain = () => {
  return (
    <footer className="absolute bottom-0  bg-gradient-to-r from-prpleInit-272  to-prpleEnd-586 w-full">
      <span className="text-2xl flex justify-center py-4 text-white font-bold">
        Made by JorgeDevJ with{" "}
        <box-icon
          name="heart"
          type="solid"
          size="md"
          color="#ff0000"
        ></box-icon>
      </span>
    </footer>
  );
};

export default FooterMain;
