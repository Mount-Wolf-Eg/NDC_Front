import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { mainStore } from "./mainStore";
import axiosInstance from "./axios_instance";

export const useSlidersStore = defineStore("sliderStore", {
  state: () => ({
    headerSliders: [],
    testimonialsSliders: [],
    successMetrics: [],
    achievementsSliders: [],
    partnersSliders: [],
    mainResources: [],
  }),
  actions: {
    // all admins
    async getAllSliders() {
      await axiosInstance
        .get(`${mainStore().apiLink}/admin/slider/showSlidersTypes`)
        .then((res) => {
          this.headerSliders = res.data.data.header_slider;
          this.testimonialsSliders = res.data.data.testimonials;
          this.successMetrics = res.data.data.success_metrics;
          this.achievementsSliders = res.data.data.achievements;
          this.partnersSliders = res.data.data.partners;
          this.mainResources = res.data.data.main_resources;
        })
        .catch((err) => {
          mainStore().showAlert(
            Object.values(err.response.data.errors)[0][0]
              ? Object.values(err.response.data.errors)[0][0]
              : "Something went wrong, please try again",
            2
          );
        });
    },
  },
});
