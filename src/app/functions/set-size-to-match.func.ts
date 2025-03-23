export function setSizeToMatch(referenceElement: HTMLElement, target: HTMLElement) {
    const {clientWidth, clientHeight} = referenceElement

    target.style.width = clientWidth + "px"

    target.style.height = clientHeight + "px"
}