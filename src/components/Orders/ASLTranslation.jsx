import React from "react";

const ASLTranslation = ({ orderNotes }) => {
  const specialChars = ["batman", "robin", "joker", "penguin"];
  const imageSrcs = orderNotes
    .toLowerCase()
    .split("")
    .map((char) => {
      if (char === " ") {
        return "/resources/empty.png";
      } else if (/[\w]/.test(char)) {
        return `/resources/${char}.png`;
      } else if (/[^\w\s]/.test(char)) {
        const randomIndex = Math.floor(Math.random() * specialChars.length);
        return `/resources/${specialChars[randomIndex]}.png`;
      }
    });

  return (
    <div>
      {imageSrcs.map((src, index) => (
        <img key={index} src={src} alt={orderNotes} width={45} />
      ))}
    </div>
  );
};

export default ASLTranslation;
