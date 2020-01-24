<template>
  <div :class="$style.app">
        <home-section
      image="https://images.unsplash.com/photo-1549082984-1323b94df9a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=512&q=60"
      alternative
    >
    <br />
    <div :class="$style.logo"></div>
    <br />
      <vue-headline level="2">Contact Us</vue-headline>
      <br />
      <vue-headline level="3">Please send emil to info@robosa.co.za</vue-headline>

    </home-section>
  </div>
</template>

<script lang="ts">
import VueHeadline from '@components/VueHeadline/VueHeadline.vue';

export default {
  metaInfo: {
    title: 'ROBOSA - Contact Us',
    meta: [
      {
        name: 'robots',
        content: 'NOINDEX,NOFOLLOW',
      },
    ],
  },
  name: 'Contact',
  components: { VueHeadline },
  props: {},
  data(): any {
    return {};
  },
  computed: {},
  methods: {},
};
</script>

<style lang="scss" module>
@import '~@/app/shared/design-system';

.error {
  padding-top: $nav-bar-height;
  text-align: center;
  width: 300px;
  height: 300px;
  margin: auto;
  margin-top: 25%;
}
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  text-align: center;
}

.content {
  flex: 1;
}
.logo {
  position: relative;
  top: $space-4;
  width: $space-24;
  height: $space-24;
}
</style>
