/**
 * This function implents the style "{flex: 1}" on all child elements
 * ofthe parent for child elements to be same size as parent, useful for 
 * route holding components, and is best implemented in DoCheck LifeCycle
 * 
 * @param parentElement The element that holds the target elements
 * @param exceptionsTagNames The element tag names to avoid
 */
export function AllChildElementsFlexer(parentElement: HTMLElement, exceptionsTagNames: string[]) {
    
    for (let i = 0; i < parentElement.children.length; i++) {
        const currentElement = parentElement.children.item(i) as HTMLElement | undefined


        if(!currentElement) continue

        const {tagName} = currentElement

        if(exceptionsTagNames.includes(tagName.toLowerCase())) continue

        currentElement.style.flex = "1"
    }

}