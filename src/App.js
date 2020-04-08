import React from 'react';
import ContactInfo from "./organisms/ContactInfo";
import Background from "./organisms/Background";
import SquareProfileImage from "./organisms/SquareProfileImage";
import RectangleProfileImage from "./organisms/RectangleProfileImage";

const App = () => (
    <div>
        <Background />
        <SquareProfileImage/>
        <ContactInfo/>
        <RectangleProfileImage/>
    </div>
);

export default App;
