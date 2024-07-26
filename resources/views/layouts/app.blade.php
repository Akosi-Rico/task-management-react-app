<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  @viteReactRefresh
  @vite(["resources/css/app.css", "resources/js/app.ts"])
</head>
<body>
  <div id="root"></div>
  <script>
    window.publicImagePath = @json(asset("/"));
    window.datatableurl = @json(route("load.datatable"));
    window.storeUrl = @json(route("task.store"));
    window.destroyTaskUrl = @json(route("task.destroy", ""));
    window.registerUserUrl = @json(route("login.register.user"));
    window.loginProcessUrl = @json(route("login.process"));
    window.taskIndexUrl = @json(route("task.index"));
    window.loginUrl = @json(route("login"));
    window.logoutUrl = @json(route("user.logout"));
    window.userInfoUrl = @json(route("user.info"));
  </script>
  @section("javascript")

  @show
</body>
</html>