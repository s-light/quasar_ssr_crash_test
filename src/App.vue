<template>
  <router-view />
</template>

<script>
// import { api } from "boot/axios";
// import { useJobsStore } from "stores/jobs";
// export default {
//   async preFetch({ store }) {
//     console.log("running preFetch..");
//     const jobsStore = useJobsStore(store);
//     jobsStore
//       .jobsGet()
//       .then((response) => {
//         console.log("successfully fetched jobs.");
//       })
//       .catch((error) => {
//         console.error("prefetch jobsGet:", error);
//       });
//   },
// };
</script>

<script setup>
import { useQuasar } from "quasar";

const $q = useQuasar();
$q.dark.set(true);
</script>
