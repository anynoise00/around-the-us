import Popup from "./Popup.js";
import { enlargedImage } from "./utils/constants.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open({ link, alt = "Uma imagem ampliada da paisagem." }) {
    enlargedImage.src = link;
    enlargedImage.alt = alt;
    console.log(link);

    super.open();
  }
}