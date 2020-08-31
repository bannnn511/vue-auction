<template>
  <div class="admin-new">
    <div class="container">
      <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
        <ul class="admin-menu">
          <li><router-link to="/seller">View Products</router-link></li>
          <li><router-link to="/seller/new">New Product</router-link></li>
        </ul>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
.admin-menu a {
  display: block;
  background: #efdb06;
  border: 1px solid #f9e610;
  color: #3d3d3d;
  padding: 10px 15px;
  font-family: "PT Sans", sans-serif;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 12px;
  transform: scaleX(1);
  transition: transform 200ms ease-in;
}
.admin-menu a:hover {
  text-decoration: none;
  transform: scaleX(1.02);
}
.admin-new {
  border-bottom: 2px solid #f5f5f5;
  padding: 30px 0;
}
</style>
