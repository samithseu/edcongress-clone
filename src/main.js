import Alpine from "alpinejs";
import { initializeCarousel } from "./assets/js/carousel.js";
import { initializeGalleryCarousel } from "./assets/js/gallery-carousel.js";
import { initializeI18n } from "./assets/js/i18n.js";
import "./style.css";

window.Alpine = Alpine;

initializeCarousel(Alpine);
initializeGalleryCarousel(Alpine);
initializeI18n(Alpine);

Alpine.start();
