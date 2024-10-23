import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { mainStore } from "./mainStore";
import axiosInstance from "./axios_instance";

export const useCareersStore = defineStore("careerStore", {
  state: () => ({
    allCareers: [],
    job: [],
  }),
  actions: {
    async getAllCareers() {
      await axiosInstance
        .get(`${mainStore().apiLink}/admin/Careers/all`)
        .then((res) => {
          this.allCareers = res.data.data;
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
    async getJobDetails(data) {
      await axiosInstance
        .post(`${mainStore().apiLink}/admin/Careers/one`, data)
        .then((res) => {
          this.job = res.data.data;
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
    async sendJobApplication(data) {
      let result;
      await axiosInstance
        .post(`${mainStore().apiLink}/admin/CareersApplications/store`, data)
        .then((res) => {
          result = res;
        })
        .catch((err) => {
          mainStore().showAlert(
            Object.values(err.response.data.errors)[0][0]
              ? Object.values(err.response.data.errors)[0][0]
              : "Something went wrong, please try again",
            2
          );
          result = false;
        });
      return result;
    },
  },
});
