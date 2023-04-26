<template>
  <q-layout view="lHh Lpr lFf">
    <q-btn
      flat
      dense
      round
      icon="menu"
      aria-label="Menu"
      @click="toggleLeftDrawer"
      class="fixed-top q-ma-sm"
      style="z-index: 10000"
    >
    </q-btn>
    <!--
        :mini="miniState"
        @mouseover="miniState = false"
        @mouseout="miniState = true"
        mini-to-overlay
        overlay
        -->
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      elevated
      persistent
    >
      <q-list class="q-pt-xl q-pb-xl">
        <EssentialNavigation />

        <q-item> </q-item>

        <q-item-label header class="fixed-bottom">
          {{ appinfo.productName }} v{{ appinfo.version }}
          <br />
          <a
            target="_blank"
            :href="
              appinfo.git_commit.gitUrl + `/commit/` + appinfo.git_commit.hash
            "
            :title="appinfo.git_commit.subject"
          >
            {{
              appinfo.git_commit.gitTag
                ? appinfo.git_commit.gitTag
                : appinfo.git_commit.gitBranch
            }}
            {{ appinfo.git_commit.gitTag ? "" : appinfo.git_commit.shortHash }}
            {{ appinfo.git_commit.committer.relativeDate }}
          </a>
          <br />
          Quasar v{{ $q.version }}
        </q-item-label>
      </q-list>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import { date } from "quasar";

import EssentialNavigation from "components/EssentialNavigation.vue";

const leftDrawerOpen = ref(false);
// console.log(`leftDrawerOpen: ${leftDrawerOpen.value}`);

const toggleLeftDrawer = function () {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};

const appinfo = process.env.appinfo;
// console.log(`appinfo: ${JSON.stringify(appinfo, null, 4)}`);
// console.log("commit date", appinfo.git_commit.committer.date.toString());
const git_commit_date = appinfo.git_commit.committer.date;
// const git_commit_date = new Date(appinfo.git_commit.committer.date + 1);
// console.log("git_commit_date", git_commit_date);
// const commit_date_format = date.formatDate(commit_date, "YYYY-MM-DD HH:mm:ss");
// console.log("commit_date_format", commit_date_format);
</script>
