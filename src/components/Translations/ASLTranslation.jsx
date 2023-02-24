//#region ASLTranslations
/*This is a React component that takes in a prop called translationText 
and displays a sequence of images corresponding to each character in the 
text.
Spaces are replaced with an empty image, alphanumeric characters are
 mapped to image files with their corresponding names,
and non-alphanumeric characters are mapped to a single image file 
named "joker.png".
The images are displayed using <img> elements with unique keys, a 
src attribute set to the image file path, an alt attribute set to 
the original text, and a width of 45.
The component is exported as the default export.
*/
//#endregion

import React from "react";

const ASLTranslation = ({ translationText }) => {
  //const specialChars = ["batman", "robin", "joker", "penguin"];
  const specialChars = "joker.png";
  const imageSrcs = translationText
    .toLowerCase()
    .split("")
    .map((char) => {
      if (char === " ") {
        return "/resources/empty.png";
      } else if (/[\w]/.test(char)) {
        return `/resources/${char}.png`;
      } else if (/[^\w\s]/.test(char)) {
        //const randomIndex = Math.floor(Math.random() * specialChars.length);
        return `/resources/${specialChars}`;
      }
    });

  return (
    <div>
      {imageSrcs.map((src, index) => (
        <img key={index} src={src} alt={translationText} width={45} />
      ))}
    </div>
  );
};

export default ASLTranslation;
