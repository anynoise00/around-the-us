import Popup from "./Popup.js";
import { enlargedImage, enlargedImageTitle } from "../utils/constants.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open({ name, link, alt = "Uma imagem ampliada da paisagem." }) {
    enlargedImageTitle.textContent = name;
    enlargedImage.src = link;
    enlargedImage.alt = alt;

    super.open();
  }
}
