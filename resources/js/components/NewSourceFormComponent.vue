<template>
    <div>
        <b-form @reset="onReset" v-if="show">
            <b-form-group
                id="input-group-1"
                label="Name:"
                label-for="input-1"
                description="Name for this score source."
            >
            <b-form-input
                id="input-1"
                v-model="form.name"
                type="source_name"
                required
                placeholder="Enter name"
            >
            </b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2">
            <b-col>
            <b-form-file v-model="file" :state="Boolean(file)" required placeholder="Score Data File" id="csvFileInput" ref="file" accept=".csv"/><br>
            </b-col>
        </b-form-group>

        <b-form-group id="input-group-3">
        <b-form-checkbox v-model="form.private" id="private-3">Private</b-form-checkbox>
        </b-form-group>

        <b-button @click ="postForm" variant="primary">{{ button_text }}</b-button>
        </b-form>
        <b-card class="mt-3" header="Form Data Result">
        <pre class="m-0">{{ form }}</pre>
        </b-card>
    </div>
</template>

<script>
export default {
    props: {
        create: {
            type: Boolean
        },
        options: {
            type: Object
        },
        source_id: {
            type: Number
        }
    },

    data() {
        return {
            form: {
                name: '',
                private: false,
            },
            file: null,
            show: true,
        }
    },

    computed: {
        request() {
            if (this.create) {
                return axios.post('/api/scoresources', this.form);
            }
            else {
                return axios.put(`api/scoresources/${this.source_id}`, this.form);
            }
        },
        button_text() {
            if (this.create) {
                return 'Create';
            }
            else {
                return 'Update';
            }
        }
    },

    methods: {
        postForm() {
            this.request.then(function (response) {
                console.log(response);
            })
            .catch(function (response) {
                console.log(response);
            })
        },
        onReset() {
            // Reset our form values
            this.form.name = ''
            this.form.file = null
            this.form.private = false
            // Trick to reset/clear native browser form validation state
            this.show = false
            this.$nextTick(() => {
            this.show = true
            })
        }
    },

    mounted() {
        if (!this.create) {
            this.form = this.options;
        }
    },
}
</script>