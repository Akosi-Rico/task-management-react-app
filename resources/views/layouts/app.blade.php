<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  @viteReactRefresh
  @vite(["resources/css/app.css", "resources/js/app.ts"])
</head>
<body>
  <div id="root"></div>
  <script>
      window.publicImagePath = @json(asset("/"));
  </script>
</body>
</html>