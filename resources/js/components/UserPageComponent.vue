<template>
    <div>
        <b-row>
            <b-col class="col-lg-2">
                <b-container fluid>
                    <player-info-component :user="user"></player-info-component>
                </b-container>
            </b-col>
            <b-col class="col-lg-22">   
                <b-container fluid>     
                    <header-component></header-component>
                    <table-component></table-component>
                </b-container>
            </b-col>
        </b-row> 
    </div>
</template>

<script>
export default {
    props: {
        user: {
            type: String
        }
    }
}
</script>