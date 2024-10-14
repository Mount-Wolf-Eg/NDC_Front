import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { mainStore } from "./mainStore";
import axiosInstance from "./axios_instance";

export const usePackagesStore = defineStore("packageStore", {
  state: () => ({
    allPackages: [],
  }),
  actions: {
    // all admins
    async getAllPackages() {
      await axiosInstance
        .get(`${mainStore().apiLink}/admin/Packages/all`)
        .then((res) => {
          this.allPackages = res.data.data;
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
