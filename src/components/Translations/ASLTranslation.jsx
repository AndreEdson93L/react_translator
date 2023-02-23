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
