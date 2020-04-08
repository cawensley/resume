import React from 'react';
import ProfileImageText from "./ProfileImageText";

const RectangleProfileImage = () => (
    <div className="d-none d-md-block o-RectangleProfileImage-position text-center">
        <div className="bg-primary border border-dark o-RectangleProfileImage-cardwidth">
            <img src={require(`../images/headshot_rectangle.jpg`)}
                 alt="Failed to Load"
                 className="w-100 o-RectangleProfileImage-imageheight"/>
            <ProfileImageText/>
        </div>
    </div>
);

export default RectangleProfileImage;