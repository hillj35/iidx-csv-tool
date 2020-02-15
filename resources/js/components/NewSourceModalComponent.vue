<template>
    <div>
        <b-modal id="bv-modal-example" hide-footer>
            <template v-slot:modal-title>
            Add a new score source.
            </template>
            <div class="d-block text-center">
                <new-source-form-component 
                    :create="this.create"
                    :options="this.options"
                    :source_id="this.source_id"/>
            </div>
        </b-modal>
    </div>
</template>

<script>
export default {
    props: {
        create: {
            type: Boolean,
            default: true
        },
        options: {
            type: Object,
            default: {}
        },
        source_id: {
            type: Number,
            default: -1
        }
    }
}
</script>