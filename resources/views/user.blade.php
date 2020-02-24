@extends('layouts.app')

@section('content')
<b-container fluid>
    <user-page-component user="{{ Auth::user()->name }}"></user-page-component>
</b-container>
@endsection
