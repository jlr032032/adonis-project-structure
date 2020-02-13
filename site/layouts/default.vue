<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col cols="2" class="sidebar">
          <app-menu />
        </b-col>
        <b-col cols="10" class="content">
          <nuxt />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  import AppMenu from '~/components/AppMenu.vue'
  export default {
    components: {
      AppMenu
    }
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0
  }
  .sidebar{
    background-color: #e2e6e8;
    height: 100vh;
    padding: 20px
  }
  .content{
    padding: 40px
  }
  .title{
    margin-bottom: 40px
  }
</style>
