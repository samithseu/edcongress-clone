document.addEventListener("alpine:init", () => {
  Alpine.data("emblaCarousel", () => ({
    emblaApi: null,
    canScrollPrev: false,
    canScrollNext: false,
    scrollSnaps: [],
    selectedIndex: 0,

    // initialization
    init() {
      this.$nextTick(() => {
        this.emblaApi = EmblaCarousel(this.$refs.emblaNode, {
          watchDrag: true,
          slidesToScroll: 1,
          breakpoints: {
            "(min-width: 48rem)": { watchDrag: false, slidesToScroll: 2 },
            "(min-width: 64rem)": { slidesToScroll: 3 },
          },
        });

        // scroll statuses
        this.updateScrollStatus();
        this.emblaApi
          .on("scroll", this.updateScrollStatus.bind(this))
          .on("reInit", this.updateScrollStatus.bind(this));

        // dot statuses
        this.updateDotState();
        this.emblaApi
          .on("select", this.updateDotState.bind(this))
          .on("reInit", this.updateDotState.bind(this));
      });
    },

    // update dot statuses
    updateDotState() {
      this.scrollSnaps = this.emblaApi.scrollSnapList();
      this.selectedIndex = this.emblaApi.selectedScrollSnap();
    },

    scrollTo(index) {
      this.emblaApi.scrollTo(index);
    },

    // update scroll status
    updateScrollStatus() {
      if (this.emblaApi) {
        this.canScrollPrev = this.emblaApi.canScrollPrev();
        this.canScrollNext = this.emblaApi.canScrollNext();
      }
    },
    // scroll previous
    scrollPrev() {
      if (this.emblaApi) {
        this.emblaApi.scrollPrev();
      }
    },
    // scroll next
    scrollNext() {
      if (this.emblaApi) {
        this.emblaApi.scrollNext();
      }
    },
  }));
});
