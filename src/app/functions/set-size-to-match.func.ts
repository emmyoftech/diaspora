export function setSizeToMatch(referenceElement: HTMLElement, target: HTMLElement) {
    const {clientWidth, clientHeight} = referenceElement

    target.style.width = (clientWidth - 10) + "px"

    target.style.height = (clientHeight - 10) + "px"
}