document.addEventListener("alpine:init", () => {
  Alpine.data("emblaGalleryCarousel", () => ({
    embla: null,
    isPlaying: true,
    modalOpen: false,
    canScrollPrev: false,
    canScrollNext: false,
    modalImage: "",
    scrollSnaps: [],
    selectedIndex: 0,

    // initialization
    init() {
      this.$nextTick(() => {
        const viewportNode = this.$refs.emblaNode;
        const plugins = [
          EmblaCarouselAutoplay({
            delay: 4000,
            stopOnInteraction: true,
          }),
        ];
        this.embla = EmblaCarousel(
          viewportNode,
          { slidesToScroll: 1 },
          plugins
        );

        const autoplay = this.embla.plugins().autoplay;
        this.isPlaying = autoplay.isPlaying();

        this.embla.on("autoplay:play", () => {
          this.isPlaying = true;
        });

        this.embla.on("autoplay:stop", () => {
          this.isPlaying = false;
        });

        // scroll statuses
        this.updateScrollStatus();
        this.embla
          .on("scroll", this.updateScrollStatus.bind(this))
          .on("reInit", this.updateScrollStatus.bind(this));

        // dot statuses
        this.updateDotState();
        this.embla
          .on("select", this.updateDotState.bind(this))
          .on("reInit", this.updateDotState.bind(this));
      });
    },

    scrollTo(index) {
      this.embla.scrollTo(index);
      this.embla.plugins().autoplay.stop();
      this.embla.plugins().autoplay.reset();
    },
    // scroll previous
    prev() {
      this.embla.scrollPrev();
      this.embla.plugins().autoplay.stop();
    },

    // scroll next
    next() {
      this.embla.scrollNext();
      this.embla.plugins().autoplay.stop();
    },
    // play autoplay
    play() {
      this.embla.plugins().autoplay.play();
    },
    // pause autoplay
    pause() {
      this.embla.plugins().autoplay.stop();
    },
    // update dot status
    updateDotState() {
      this.scrollSnaps = this.embla.scrollSnapList();
      this.selectedIndex = this.embla.selectedScrollSnap();
    },

    // update scroll status
    updateScrollStatus() {
      if (this.embla) {
        this.canScrollPrev = this.embla.canScrollPrev();
        this.canScrollNext = this.embla.canScrollNext();
      }
    },
  }));
});
