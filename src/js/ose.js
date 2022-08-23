import "../css/ose.css";

import { ScrollObserver } from "./libs/scrollObserver.js";
const elements = document.querySelectorAll("*");

export default class OSE {
  static init = ({
    once = options.once,
    rootMargin = options.rootMargin,
    elementRatio = options.elementRatio,
  }) => {
    const observer = new ScrollObserver({ once, rootMargin, elementRatio });
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
  rootMargin: `${window.innerHeight}px 0px 0px 0px`,
  elementRatio: 1,
};
