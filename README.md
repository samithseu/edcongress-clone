# https://edcongress.org Clone

A clone of the website <https://edcongress.org>.

## Internalization (i18n)

### 1. Add <a href="dist/alpinejs-cdn.min.js"><b>alpinejs-cdn.min.js</b></a> and <a href="dist/i18n.js"><b>i18n.js</b></a> to HTML file

```diff
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <!-- Alpine CDN (small & fast framework) -->
+  <script defer src="/alpinejs-cdn.min.js"></script>
</head>
<body>

  <!-- translations -->
+  <script src="/i18n.js"></script>
</body>
</html>
```

### 2. Add translations for each language

Go to <a href="dist/i18n.js"><b>i18n.js</b></a> and add properties for each language:

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

### 3. Using the translations

To use these translations, just add `x-text="$store.lang.langs[$store.lang.selected].[PROPERTY]`:

```diff
<!-- example -->
+ <h1 x-text="$store.lang.langs[$store.lang.selected].title"></h1>
```
