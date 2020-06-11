<template>
  <div slot="sidebar">
    <p>EL SIDEBAR!</p>
    <ul>
      <li><router-link :to="{ name: 'home' }">Home</router-link></li>
      <li><router-link :to="{ name: 'people' }">People</router-link></li>
    </ul>
  </div>
</template>
