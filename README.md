# https://edcongress.org Clone

This is a clone of the website <https://edcongress.org>. It was asked by a teacher to create this...

## Internalization (i18n)

### Add translations for each language

Go to `i18n.js` and add properties for each language:

```diff
langs: {
  en: {
+    title: "This is the example in English",
  },
  km: {
+    title: "នេះជាឧទាហរណ៍ជាភាសាខ្មែរ",
  },
},
```

### Using the translations

To use these translations, you just simply add this attribute on any element:

```diff
+ <h1 x-text="$store.lang.langs[$store.lang.selected].title">
</h1>
```
