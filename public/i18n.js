document.addEventListener("alpine:init", () => {
  // Language store for entire site
  Alpine.store("lang", {
    selected: "km",
    langs: {
      en: {
        title:
          "Conference to summarize the results of the work of Education, Youth, and Sports for the academic year 2024-2025 and the direction for the academic year 2025-2026",
        km_option: "Khmer",
        en_option: "English",
        footer: "Powered by Wiki School, POSCAR Digital Co., Ltd",
      },
      km: {
        title:
          "សន្និបាតបូកសរុបលទ្ធផលការងារ អប់រំ យុវជន\nនិងកីឡា ឆ្នាំសិក្សា ២០២៤-២០២៥ និង\nទិសដៅឆ្នាំសិក្សា ២០២៥-២០២៦",
        km_option: "ភាសាខ្មែរ",
        en_option: "ភាសាអង់គ្លេស",
        footer: "រៀបចំដោយ Wiki School, POSCAR Digital Co., Ltd",
      },
    },
    open: false,
    toggle(buttonRef) {
      if (this.open) {
        return this.close(buttonRef);
      }
      buttonRef && buttonRef.focus();
      this.open = true;
    },
    close(focusAfter) {
      if (!this.open) return;
      this.open = false;
      focusAfter && focusAfter.focus();
    },
  });
});
