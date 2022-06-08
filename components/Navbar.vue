<template>
  <div>
    <nav>
      <ul>
        <li>
          <nuxt-link
            v-for="menu in menus" :key="menu.id" :to="{ path:menu.link }">
            {{ menu.name }}
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const menus = ref([
  { name: 'test1', link: 'test1' },
  { name: 'test2', link: 'test2' },
  { name: 'test3', link: 'test3' },
])

</script>
<style lang="scss" scoped>
// nav {
//   ul {
//     display: flex;
//     gap: 20px;
//     margin: 0;
//     padding: 0;
    // li {
      
    // }
//   }
// }
a.router-link-active {
  padding-bottom: 5px;
  border-bottom: 3px solid #cc1111;
}
a:link, a:visited, a:hover {
  text-decoration: none;
  color: green;
}
</style>