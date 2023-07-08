<template>
    <main class="layout">
        <MainHeader class="layout__header" />
        <SideBar class="layout__sidebar" />
        <div class="layout__content">
            <slot></slot>
        </div>
    </main>
</template>

<script lang="ts" setup>
import MainHeader from '@/components/MainHeader.vue';
import SideBar from '@/components/SideBar.vue';
</script>

<style lang="scss" setup>
.layout {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "header header"
    "sidebar content";
  height: 100vh;

  &__header {
    grid-area: header;
    height: 80px;
  }

  &__sidebar {
    grid-area: sidebar;
    width: 300px;
  }

  &__content {
    grid-area: content;
  }
}

</style>