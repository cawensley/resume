import React from 'react';
import ProfileImageText from "./ProfileImageText";

const SquareProfileImage = () => (
    <div className="container d-block d-md-none text-center p-0">
        <div className="bg-primary border border-dark pt-4">
            <img src={require(`../images/headshot_square.jpg`)}
                 alt="Failed to Load"
                 className="o-SquareProfileImage-imagewidth"/>
            <ProfileImageText/>
        </div>
    </div>
);

export default SquareProfileImage;