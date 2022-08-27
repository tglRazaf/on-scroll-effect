/**
 * Observing the position of the current element who has
 * data-ose attributes
 * the attributes value is set to in the class of the current element
 * so you can define your own css on your custom attributes
 */
export class ScrollObserver {

  constructor({ once, topOffset, bottomOffset, elementRatio }) {
    this.once = once;
    this.topOffset = topOffset, 
    this.bottomOffset = bottomOffset
    this.elementRatio = elementRatio
  }

  observe = (element, oseProperty) => {
    const delay = element.getAttribute("data-ose-delay");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setTimeout(() => {
            if (entry.isIntersecting) {
              entry.target.classList.remove("pre-ose-hidden");
              entry.target.classList.remove("ose-hidden");
              entry.target.classList.toggle(oseProperty);
              if (this.once) observer.unobserve(element);
            } else {
              element.classList.toggle("ose-hidden");
            }
          }, parseInt(delay) * 1000);
        });
      },
      {
        rootMargin: `${this.topOffset}px 0px ${this.bottomOffset}px 0px`,
        threshold: this.elementRatio,
      }
    );
    observer.observe(element);
  };
}

/**
 * delay work only if user set the ose-delay attributes
 * i won't add another css style for this cuz setTimeout
 * does the job :)
 */
