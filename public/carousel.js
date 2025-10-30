document.addEventListener("alpine:init", () => {
  Alpine.data("emblaCarousel", () => ({
    emblaApi: null,
    canScrollPrev: false,
    canScrollNext: false,

    // initialization
    init() {
      this.emblaApi = EmblaCarousel(this.$refs.emblaNode, {
        watchDrag: false,
        breakpoints: {
          "(width >= 40rem)": { slidesToScroll: 1 },
          "(width > 48rem)": { slidesToScroll: 2 },
          "(width > 64rem)": { slidesToScroll: 3 },
        },
      });
      this.updateScrollStatus();
      this.emblaApi.on("scroll", this.updateScrollStatus.bind(this));
      this.emblaApi.on("reInit", this.updateScrollStatus.bind(this));
    },

    // update scroll status
    updateScrollStatus() {
      if (this.emblaApi) {
        this.canScrollPrev = this.emblaApi.canScrollPrev();
        this.canScrollNext = this.emblaApi.canScrollNext();
      }
    },

    scrollPrev() {
      if (this.emblaApi) {
        this.emblaApi.scrollPrev();
      }
    },

    scrollNext() {
      if (this.emblaApi) {
        this.emblaApi.scrollNext();
      }
    },
  }));
});
