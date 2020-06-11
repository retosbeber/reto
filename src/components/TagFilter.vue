<template>
  <!-- <div> -->
  <v-container
    fluid
    class="px-0 ma-0 chip-container"
  >
    <div class="scroll-container">
      <div class="text-md-center chip-content">
        <span class="mr-2 d-sm-none d-lg-flex">
          Filter by:
        </span>
        <v-chip
          @click="allFilters = !allFilters"
        >
          <v-icon size="14" class="px-1">apps</v-icon>
          <span v-if="tagFilter.length === 0">All filters</span>
          <span v-else>Active filters ({{ tagFilter.length }})</span>
        </v-chip>
        <v-chip
          v-for="tag in tags"
          :key="tag.id"
          :class="{ 'active': isActive(tag) }"
          @click="switchTag(tag)"
        >
          {{ tag.name }}
        </v-chip>
        <span class="chip-spacer"></span>
      </div>
    </div>
  </v-container>
  <!-- </div> -->
</template>

<script type="text/javascript">
export default {
  name: 'TagFilter',
  props: {
    tags: {
      type: Array,
      default: () => ([]),
    },
  },
  data: () => ({
    tagFilter: [],
  }),
  methods: {
    isActive(tag) {
      return this.tagFilter.indexOf(tag.name) > -1;
    },
    switchTag(tag) {
      console.log(tag);
    },
  },
};
</script>
