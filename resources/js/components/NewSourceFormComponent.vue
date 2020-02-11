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
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2">
        <b-col>
          <b-form-file v-model="form.file" :state="Boolean(file)" required placeholder="Score Data File" id="csvFileInput" ref="file" accept=".csv"/><br>
        </b-col>
      </b-form-group>

      <b-form-group id="input-group-3">
       <b-form-checkbox v-model="form.private" id="private-3">Private</b-form-checkbox>
      </b-form-group>

      <b-button @click ="postForm" variant="primary">Create</b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          file: null,
          private: false,
        },
        show: true
      }
    },
    methods: {
      postForm() {
        axios.post('/api/scoresources', { name: this.form.name, private: this.form.private } )
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
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
    }
  }
</script>