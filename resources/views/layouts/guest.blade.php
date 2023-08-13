<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <link rel="stylesheet" href="{{asset('css/aos.css')}}">
        <link rel="stylesheet" href="{{asset('css/app2.css')}}">
        <title>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <!-- Scripts -->
        @vite(['resources/css/app.css', 'resources/js/app.js'])
        @stack('head-script')
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js" deffer></script>
    </head>
    <a href="javascript:" id="return-to-top" class="left-0"><img src="img/iconup.png" alt=""></a>
    <body style="min-height: 100%; margin: 0; " id="top">
        <div class="font-sans text-gray-900 antialiased">
            {{ $slot }}
            @include('components.layout.footer')
            @stack('custom-scripts')
        </div>
        <script>
            AOS.init();
          </script>
    </body>
</html>
