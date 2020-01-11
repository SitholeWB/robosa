<template>
  <div>
    <stage :disable-particles="disableParticles" />
    <home-section
      image="https://images.unsplash.com/photo-1549082984-1323b94df9a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=512&q=60"
      alternative
    >
      <vue-headline level="2">Clients Monitoring</vue-headline>
      <br />
      <vue-headline level="3">Social Media</vue-headline>
      <ul>
        <li>We use Artificial Intelligence to monitor your company page, we check users emotions(happy/sad/angry) on your posts.</li>
        <li>We provide many ways of grouping inormation you need like grouping with emotions.</li>
        <li>We also provide a monitoring service that can be instructed to auto delete certain comments.</li>
      </ul>
      <br />
      <vue-headline level="3">Inboxes</vue-headline>
      <ul>
        <li>We collect inbox messages from different social netwok into one managable inbox, and respond to users from also support.</li>
        <li>We also provide help desk that nicely integrate with social media inboxes.</li>
      </ul>
      <br />
      <vue-headline level="3">Presetation</vue-headline>
      <p></p>
      <ul>
        <li>We present you information in an easy graphs that are easy to read and quickly get overview on customer satisfication about your company.</li>
      </ul>
    </home-section>

    <home-section
      image="https://images.unsplash.com/photo-1521790361543-f645cf042ec4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=512&q=60"
      flip
    >
      <vue-headline level="2">Automatic Services</vue-headline>
      <br />
      <p>
        We provide automation of your daily tasks, like sending invoices, payments reminders, sending birthday wishes to your clients, etc.
      </p>
      <p>Our engineers will introduce Services that will integrate with your systems, use latest technology to automate your taks and make your life easy.</p>
      </home-section>

    <home-section
      image="https://images.unsplash.com/photo-1516381548400-349d680edb56?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=512&q=60"
      flip
    >
      <vue-headline level="2">Apps for you</vue-headline>
      <br />
      <vue-headline level="3">Students Community</vue-headline>
      <br />
      <p>
      <a target="_blank" href="https://play.google.com/store/apps/details?id=com.sitholewb.StudentsCommuity&hl=en">
        Download from Google Play Store
      </a>
      </p>
      <br />

    </home-section>
  </div>
</template>

<script lang="ts">
import { mapState } from 'vuex';
import Stage from '../components/Stage/Stage.vue';
import HomeSection from '@/app/home/components/HomeSection/HomeSection.vue';
import { IState } from '@/app/state';
import VueHeadline from '@components/VueHeadline/VueHeadline.vue';

export default {
  metaInfo: {
    title: 'ROBOSA',
    meta: [
      {
        name: 'description',
        content:
          'vuesion - The most complete boilerplate for production-ready PWAs. With focus on performance, development speed, and best practices',
      },
      {
        name: 'robots',
        content: 'INDEX,FOLLOW',
      },
      {
        name: 'keywords',
        content: 'vue.js, vuex, vuex-persist, seo, server-side-rendering, isomorphic, progressive-web-app',
      },

      { name: 'og:url', content: 'https://vuesion.herokuapp.com/' },
      { name: 'og:site_name', content: 'vuesion' },
      { name: 'og:type', content: 'website' },
      { name: 'og:locale', content: 'en' },
      {
        name: 'og:title',
        content:
          'vuesion - The most complete boilerplate for production-ready PWAs. With focus on performance, development speed, and best practices',
      },
      {
        name: 'og:description',
        content:
          'vuesion - The most complete boilerplate for production-ready PWAs. With focus on performance, development speed, and best practices',
      },
      { name: 'og:image:url', content: 'https://vuesion.herokuapp.com/logo.png' },

      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:site', content: '@vuesion1' },
      { name: 'twitter:creator', content: '@vuesion1' },
      {
        name: 'twitter:title',
        content:
          'vuesion - The most complete boilerplate for production-ready PWAs. With focus on performance, development speed, and best practices',
      },
      { name: 'twitter:url', content: 'https://vuesion.herokuapp.com/' },
      { name: 'twitter:image', content: 'https://vuesion.herokuapp.com/logo.png' },
      {
        name: 'twitter:description',
        content:
          'vuesion - The most complete boilerplate for production-ready PWAs. With focus on performance, development speed, and best practices',
      },
    ],
  },
  components: {
    VueHeadline,
    HomeSection,
    Stage,
  },
  computed: {
    ...mapState({
      disableParticles: (state: IState) =>
        (state.app.config && state.app.config.features && state.app.config.features.disableParticles) || false,
    }),
  },
};
</script>