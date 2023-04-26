import { defineStore } from "pinia";

import { api } from "boot/axios";

export const useJobsStore = defineStore("jobs", {
  state: () => ({
    jobs: [],
  }),

  getters: {
    // https://pinia.vuejs.org/core-concepts/getters.html#passing-arguments-to-getters
    getJobById(state) {
      return (jobId) => {
        return state.jobs.find((job) => job.id == jobId);
      };
    },
  },

  actions: {
    jobsGet() {
      console.log(`make api request... \n`);
      console.log(`DUMMY... NOTHING HERE.. \n`);
      const request = api.get(`job`).then((response) => {
        console.log("response", response);
      });
      return request;
    },
  },
});
