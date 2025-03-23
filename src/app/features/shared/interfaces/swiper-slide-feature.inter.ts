export default interface SwiperSlideFeature {
    isVisible?:  boolean,

    onVisible?: () => void,

    onNotVisible?: () => void
}