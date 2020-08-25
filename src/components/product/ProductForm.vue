<template>
  <form @submit.prevent="saveProduct">
    <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
      <div class="form-group">
        <label>Name</label>
        <ValidationProvider name="name" rules="required" v-slot="{ errors }">
          <input
            type="text"
            placeholder="Name"
            class="form-control"
            :class="{ 'form-control': true, error: errors[0] }"
          />
        </ValidationProvider>
      </div>

      <div class="form-group">
        <label>Price</label>
        <ValidationProvider name="price" rules="required" v-slot="{ errors }">
          <input
            type="number"
            class="form-control"
            placeholder="Price"
            :class="{ 'form-control': true, error: errors[0] }"
          />
        </ValidationProvider>
      </div>

      <div class="form-group">
        <label>Manufacturer</label>
        <ValidationProvider
          rules="required"
          name="manufacturer"
          v-slot="{ errors }"
        >
          <select
            type="text"
            class="form-control"
            :class="{
              'form-control': true,
              error: errors[2],
            }"
          >
            <template v-for="manufacturer in manufacturers">
              <option :key="manufacturer._id" :value="manufacturer._id">{{
                manufacturer.name
              }}</option>
            </template>
          </select>
        </ValidationProvider>
      </div>
    </div>

    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
      <div class="form-group">
        <label>Image</label>
        <ValidationProvider
          name="image"
          rules="required|url"
          v-slot="{ errors }"
        >
          <input
            type="text"
            placeholder="Image"
            class="form-control"
            :class="{ 'form-control': true, error: errors[0] }"
          />
        </ValidationProvider>
      </div>

      <div class="form-group">
        <label>Description</label>
        <ValidationProvider
          name="description"
          rules="required"
          v-slot="{ errors }"
        >
          <textarea
            class="form-control"
            placeholder="Description"
            rows="5"
            :class="{
              'form-control': true,
              error: errors[0],
            }"
          ></textarea>
        </ValidationProvider>
      </div>

      <div class="form-group new-button">
        <button class="button">
          <i class="fa fa-pencil"></i>
          <!-- Conditional rendering for input text -->
          <span v-if="isEditing">Update Product</span>
          <span v-else>Add Product</span>
        </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  props: ["model", "isEditing", "manufacturers"],

  methods: {
    saveProduct() {
      this.$emit("save-product", this.model);
    },
  },
};
</script>

<style scoped>
button.button {
  background: #efdb06;
  border: 1px solid #f9e610;
  border-radius: 20px;
  padding: 10px 15px;
  font-family: "PT Sans", sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 12px;
  transition: all 200ms ease-out;
  outline: none;
}

button.button:hover {
  background: #f9e610;
}

button.button.disabled {
  background: #f9e610;
  opacity: 0.6;
  cursor: default;
}

button.button.button-danger {
  background: #ff3333;
  border: 1px solid #ff4747;
  color: #fff;
}

button.button.button-danger:hover {
  background: #ff4747;
}

.new-button {
  display: flex;
  flex-direction: row-reverse;
}

.form-control:focus {
  border-color: #f9e610;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(249, 230, 16, 0.6);
}

.form-control.error {
  border-color: #ff3333;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(255, 71, 71, 0.6);
}
</style>
