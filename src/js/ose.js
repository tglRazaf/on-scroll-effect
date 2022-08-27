import "../css/ose.css";

import { ScrollObserver } from "./libs/scrollObserver.js";
const elements = document.querySelectorAll("*");

export default class OSE {
  static init = ({
    once = options.once,
    topOffset = options.topOffset,
    bottomOffset = options.bottomOffset,
    elementRatio = options.elementRatio,
  }) => {
    const observer = new ScrollObserver({ once, topOffset, bottomOffset, elementRatio });
    elements.forEach((element) => {
      const oseProperty = element.getAttribute("data-ose");
      if (oseProperty) {
        element.classList.add("pre-ose-hidden");
        observer.observe(element, oseProperty);
      }
    });
  };
}

/**
 * Default options
 */
const options = {
  once: true,
  topOffset: 0,
  bottomOffset: 0,
  elementRatio: 1,
};
