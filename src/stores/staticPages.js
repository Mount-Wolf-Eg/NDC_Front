import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { mainStore } from "./mainStore";
import axiosInstance from "./axios_instance";

export const useStaticPagesStore = defineStore("staticPages", {
  state: () => ({
    aboutUs: [],
    privacyPolicy: [],
    termsConditions: [],
    ourGoals: [],
    ourMission: [],
    ourVission: [],
    allServices: [],
    singleService: [],
  }),
  actions: {
    // all admins
    async getAllStatics() {
      await axiosInstance
        .get(`${mainStore().apiLink}/admin/StaticPages/all`)
        .then((res) => {
          this.aboutUs = res.data.data.find((e) => e.id == 1);
          this.termsConditions = res.data.data.find((e) => e.id == 2);
          this.privacyPolicy = res.data.data.find((e) => e.id == 3);

          this.ourVission = res.data.data.find((e) => e.id == 4);
          this.ourMission = res.data.data.find((e) => e.id == 5);
          this.ourGoals = res.data.data.find((e) => e.id == 6);
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

    async getAllServices() {
      await axiosInstance
        .get(`${mainStore().apiLink}/admin/Services/all`)
        .then((res) => {
          this.allServices = res.data.data;
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
    async getSingleService(data) {
      await axiosInstance
        .post(`${mainStore().apiLink}/admin/Services/one`, data)
        .then((res) => {
          this.singleService = res.data.data;
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
