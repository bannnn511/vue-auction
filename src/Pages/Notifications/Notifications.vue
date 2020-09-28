<template>
  <div class="notification">
    <button class="btn-primary read-btn" v-on:click="markAllAsRead">
      Mark all as read
    </button>
    <div
      class="notification-list"
      v-for="(notification, index) in notifications"
      :key="index"
    >
      <div class="notification-item" :class="{ unread: !notification.isRead }">
        <label>{{ notification.description }}</label>
        <h5>{{ notification.createdAt }}</h5>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "notifications-list",
  created() {
    this.$store.dispatch("getNotifications");
  },
  computed: {
    notifications(): any {
      return this.$store.getters.getAllNotfications;
    },
  },
  methods: {
    markAllAsRead() {
      this.$store.dispatch("markAllAsRead");
    },
  },
});
</script>

<style scoped>
.notification {
  margin-top: 10px;
}
.notification .read-btn {
  align-self: flex-end;
}
.notification .notification-item {
  box-shadow: 0 0px 7px 0 rgba(0, 0, 0, 0.2), 0 0px 0px 0 rgba(0, 0, 0, 0.19);
  width: 50%;
  margin: 0 auto;
  margin-top: 20px;
}
.unread {
  font-weight: bold;
}
</style>
