<script setup>
import LayoutFixed from './components/LayoutFixed.vue'
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import { useCategoryStore } from '@/stores/category'

const categoryStore = useCategoryStore()
categoryStore.getCategory()
  
  
</script>

<template>
  <LayoutFixed></LayoutFixed>
  <LayoutNav></LayoutNav>
  <LayoutHeader></LayoutHeader>
  <!-- 二级路由出口 -->
   <!-- 强制销毁重建 -->
  <!-- <router-view :key="$route.fullPath" ></router-view> -->
   <router-view></router-view>
  <LayoutFooter></LayoutFooter>
</template>
