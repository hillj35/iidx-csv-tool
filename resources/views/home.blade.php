@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-lg-12">
            <header-component></header-component>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-2">
            <sidebar-component></sidebar-component>
        </div>
        <div class="col-lg-10">
            <table-component></table-component>
        </div>
    </div>
</div>
@endsection
