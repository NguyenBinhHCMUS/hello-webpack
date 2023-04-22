import wallpaper from "./img/cloud-upload-regular-240.png";
import bitcoinWhitepaper from "./pdfs/sample.pdf";

const domHandler = () => {
  console.log(wallpaper);
  console.log(bitcoinWhitepaper);
  document.body.style.backgroundImage = `url(${wallpaper})`;
  const link = document.createElement("a");
  link.href = bitcoinWhitepaper;
  link.textContent = "Bitcoin Whitepaper";
  document.body.appendChild(link);
};

export default domHandler;
