<template>
    <div>
        <b-button id="show-btn" @click="$bvModal.show('bv-modal-example')">Add Source</b-button>

        <b-modal id="bv-modal-example" hide-footer>
            <template v-slot:modal-title>
            Add a new score source.
            </template>
            <div class="d-block text-center">
                <new-source-form-component 
                    :create="true"/>
            </div>
            <b-button class="mt-3" block @click="$bvModal.hide('bv-modal-example')">Close</b-button>
        </b-modal>
    </div>
</template>