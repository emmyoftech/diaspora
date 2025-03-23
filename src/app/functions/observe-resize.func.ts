export function observeResize(element: HTMLElement, cb: (pbsererEntry: ResizeObserverEntry) => void) {
    const resizer = new ResizeObserver((entries) => {
        for (const element of entries) {
            cb(element)
            console.log("hello")
        }
    })

    resizer.observe(element)
}``