<template>
  <v-row>
    <v-col md="2">
      <!-- <img src="@/assets/img/logo.png" class="logo" title="Learner"> -->
      <h1>Learner</h1>
    </v-col>
  </v-row>
</template>

<script>
function searchOpen() {
  this.searching = true;
  this.$ga.event('search', 'search_open');
}

function searchClose() {
  this.searching = false;
  this.$ga.event('search', 'search_back');
}

function searchClear() {
  this.$ga.event('search', 'search_clear');
}

function trackSearch(search) {
  this.$ga.event('search', 'search_type', search);
}

export default {
  name: 'MainTopbar',
  head: {
    title() {
      return {
        inner: 'Learner',
      };
    },
  },
  data: () => ({
    searching: false,
    tabs: 'tabs-home',
    search: '',
    tagFilter: [],
    allFilters: false,
    dialog: false,
    tabClicked: null,
  }),
  computed: {
    config() {
      // return this.$store.state.config.config;
      return this.$settings;
    },
    tagTab() {
      // return this.tabs.replace('tabs-', '');
      return this.$route.name;
    },
    tagList() {
      const tags = this.$store.getters['tags/getByTarget'](this.tagTab) || [];
      return tags;
    },
    hasFilters() {
      const hasFilters = this.tagList.length > 0;
      return hasFilters;
    },
    hasSearch() {
      const searchTabs = ['people', 'startups'];
      const tab = this.tagTab || '';
      const hasSearch = (searchTabs.indexOf(tab) > -1);
      return hasSearch;
    },
    tagTabFilter() {
      const tags = this.tagList.map((item) => item.name);
      return this.tagFilter.filter((item) => tags.indexOf(item) > -1);
    },
    searchPlaceholder() {
      return 'Try RatedPower, Andrea or UX';
    },
  },
  methods: {
    searchOpen,
    searchClose,
    searchClear,
    trackSearch,
    switchTag(name) {
      const index = this.tagFilter.indexOf(name);
      if (index === -1) {
        this.tagFilter.push(name);
        this.$ga.event('list_people', 'filter_add', name);
      } else {
        this.tagFilter.splice(index, 1);
        this.$ga.event('list_people', 'filter_remove', name);
      }
    },
    goToSearchMenu() {
      if (!this.hasSearch) {
        this.$router.push({ name: 'people' });
      }
    },
  },
  // created() {
  //   this.$store.dispatch('tags/getTags');
  // },
};
</script>
