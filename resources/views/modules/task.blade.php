@extends("layouts.app")
@section("javascript")
<script>
    window.userInfo = @json($data);
</script>
@endsection