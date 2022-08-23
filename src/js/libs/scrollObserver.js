/**
 * Observing the position of the current element who has
 * data-awa attributes
 * the attributes value is set to in the class of the current element
 * so you can define your own css on your custom attributes
 */
export class ScrollObserver {
  constructor({ once, rootMargin, elementRatio }) {
    this.once = once;
    (this.rootMargin = rootMargin), (this.elementRatio = elementRatio);
  }

  observe = (element, awaProperty) => {
    const delay = element.getAttribute("data-awa-delay");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setTimeout(() => {
            if (entry.isIntersecting) {
              entry.target.classList.remove("pre-awa-hidden");
              entry.target.classList.remove("awa-hidden");
              entry.target.classList.toggle(awaProperty);
              if (this.once) observer.unobserve(element);
            } else {
              element.classList.toggle("awa-hidden");
            }
          }, parseInt(delay) * 1000);
        });
      },
      {
        rootMargin: this.rootMargin,
        threshold: this.elementRatio,
      }
    );
    observer.observe(element);
  };
}

/**
 * delay work only if user set the awa-delay attributes
 * i won't add another css style for this cuz setTimeout
 * does the job :)
 */
