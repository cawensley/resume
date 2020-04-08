import React from "react";

const Footer = () => {
    const currentYear = new Date().getFullYear().toString();

    return (
        <div className="o-Footer-Border w-100 text-white text-left">
            &copy;&nbsp;awensley&nbsp;{currentYear}</div>
    )
};

export default Footer;