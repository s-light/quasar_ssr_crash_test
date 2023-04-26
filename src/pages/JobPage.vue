<template>
  <q-page padding>
    <h1>Job '{{ route.params.id }}'</h1>
    <div></div>
    <pre>{{ job_structuredData }}</pre>
    <div>ping - pong..</div>
    <pre>
jobsStore.jobs
{{ jobsStore.jobs }}
        </pre
    >
  </q-page>
</template>

<script setup>
import { ref, watch, watchEffect } from "vue";
import { useRoute } from "vue-router";
import { useMeta, useQuasar } from "quasar";

// import { api } from "boot/axios";
import { useJobsStore } from "stores/jobs";
// import { storeToRefs } from "pinia";
const jobsStore = useJobsStore();

const route = useRoute();

const job = ref({});
const job_structuredData = ref({});

const $q = useQuasar();
const data = ref(null);

watch(
  () => route.params.id,
  (newJobId) => {
    // console.log(`newJobId '${newJobId}'`);
    // job_structuredData.value = jobsStore.getJobStructuredData(newJobId);
  },
  { immediate: true }
);

// https://quasar.dev/quasar-plugins/meta#introduction
useMeta(() => {
  return {
    script: {
      ldJson: {
        type: "application/ld+json",
        innerHTML: JSON.stringify(job_structuredData.value, null, 4),
      },
    },
  };
});
</script>
