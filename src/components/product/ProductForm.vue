<template>
  <form @submit.prevent="saveProduct">
    <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
      <div class="form-group">
        <label>Name</label>
        <ValidationProvider name="name" rules="required">
          <input
            type="text"
            placeholder="Name"
            v-model="model.name"
            :class="{ 'form-control': true, error: errors.has('name') }"
          />
        </ValidationProvider>
        <span class="small text-danger" vshows="errors.has('name')"
          >Name is required</span
        >
      </div>
      <div class="form-group">
        <label>Price</label>
        <ValidationProvider name="price" rules="required">
          <input
            type="number"
            class="form-control"
            placeholder="Price"
            v-model="model.price"
            :class="{ 'form-control': true, error: erros.has('price') }"
          />
        </ValidationProvider>
        <span class="small text-danger" v-show="erros.has('price')"
          >Price is required</span
        >
      </div>
      <div class="form-group">
        <label>Manufacturer</label>
        <ValidationProvider name="price" rules="required">
          <select
            class="form-control"
            type="text"
            placeholder="Price"
            v-model="model.manufacturer"
            :class="{ 'form-control': true, error: errors.has('mamufacturer') }"
          >
            <template v-for="manufacturer in manufacturers">
              <option
                :value="manufacturer._id"
                :key="manufacturer"
                :selected="
                  manufacturer._id ==
                    (model.manufacturer && model.manufacturer._id)
                "
                >{{ manufacturer.name }}</option
              >
            </template>
          </select>
        </ValidationProvider>
        <span
          class="small text-danger"
          v-show="errors.has('manufacturer')"
        ></span>
      </div>
    </div>
    <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
      <div class="form-group">
        <label>Image</label>
        <ValidationProvider name="image" rules="required|url">
          <input
            type="text"
            lass="form-control"
            placeholder="Image"
            v-model="model.image"
            :class="{ 'form-control': true, error: errors.has('image') }"
          />
        </ValidationProvider>
        <span class="small text-danger" v-show="errors.has('image')"
          >Image is required and must be a valid URL</span
        >
      </div>
      <div class="form-group">
        <label>Description</label>
        <ValidationProvider name="description" rules="required">
          <textarea
            type="number"
            class="form-control"
            placeholder="Description"
            rows="5"
            v-model="model.description"
            :class="{ 'form-control': true, error: errors.has('description') }"
          ></textarea>
        </ValidationProvider>
        <span class="small text-danger" v-show="errors.has('description')"
          >Description is required</span
        >
      </div>
      <div class="form-group new-button">
        <button class="button">
          <i class="fa fa-pencil"></i>
          <span v-if="isEditing">Update Product</span>
          <span v-else>Add Product</span>
        </button>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: ["model", "manufacturers", "isEditing"],
  data() {
    return {
      errors: [],
    };
  },
  methods: {
    saveProduct() {
      console.log(this.errors);
    },
  },
});
</script>
