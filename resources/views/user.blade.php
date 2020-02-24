@extends('layouts.app')

@section('content')
<b-container fluid>
    @if(Auth::user()->id == Request()->id)
    <b-row>
        <b-col class="col-lg-2">
            <b-container fluid>
                <b-card header="DJ {{ Auth::user()->name }}" class="text-center">
                    <b-card img-src="QPRO" img-alt="QPro"> </b-card>
                    <b-card-text>SP rank: </b-card-text>
                    <b-card-text>DP rank: </b-card-text>
                    <b-card-text>Avg BPI: </b-card-text>
                    <b-card-text id="your-account" style="color:green">This is your account!</b-card-text>
                </b-card>
            </b-container>
        </b-col>
        <b-col class="col-lg-22">   
            <b-container fluid>
                <b-card>        
                    <header-component></header-component>
                    <table-component user="{{ Auth::user()->id }}"></table-component>
                </b-card>
            </b-container>
        </b-col>
    </b-row> 
    @else
    <b-row>
        <b-col class="col-lg-2">
            <b-container fluid>
                <b-card header="DJ Name" class="text-center">
                    <b-card img-src="QPRO" img-alt="QPro"> </b-card>
                    <b-card-text>SP rank: </b-card-text>
                    <b-card-text>DP rank: </b-card-text>
                    <b-card-text>Avg BPI: </b-card-text>
                    <b-card-text id="thier-account" style="color:blue">Viewing someone else's account!</b-card-text>
                </b-card>
            </b-container>
        </b-col>
        <b-col class="col-lg-22">
        </b-col>
    </b-row>      
    @endif
</b-container>
@endsection
