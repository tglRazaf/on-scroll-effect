// import styles from '../css/awa.css'

import {ScrollObserver} from './scrollObserver.js'
const elements = document.querySelectorAll('*')

export default class AWA {
    static init = ({
        once = options.once,
        rootMargin = options.rootMargin, 
        elementRatio = options.elementRatio,
    }) => {
        const observer = new ScrollObserver({once, rootMargin, elementRatio})
        elements.forEach(element => {
            const awaProperty = element.getAttribute('data-awa')
            if(awaProperty){
                element.classList.add('pre-awa-hidden')
                observer.observe(element, awaProperty)
            }
        });
    }
}

/**
 * Default options
 */
const options = {
    once: true,
    rootMargin: `${window.innerHeight}px 0px 0px 0px`, 
    elementRatio: 1,
}