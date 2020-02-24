<template>
    <div>
        <b-card :header="'DJ ' + user.name" class="text-center">
            <b-card img-src="QPRO" img-alt="QPro"> </b-card>
            <b-card-text>SP rank: </b-card-text>
            <b-card-text>DP rank: </b-card-text>
            <b-card-text>Avg BPI: </b-card-text>
        </b-card>
    </div>
</template>

<script>
export default {
    props: {
        user: {
            type: Object
        }
    }
}
</script>