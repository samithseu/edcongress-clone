document.addEventListener("alpine:init", () => {
  Alpine.data("emblaGalleryCarousel", () => ({
    embla: null,
    isPlaying: true,

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
      });
    },

    prev() {
      this.embla.scrollPrev();
      this.embla.plugins().autoplay.stop();
    },

    next() {
      this.embla.scrollNext();
      this.embla.plugins().autoplay.stop();
    },

    play() {
      this.embla.plugins().autoplay.play();
    },

    pause() {
      this.embla.plugins().autoplay.stop();
    },
  }));
});
