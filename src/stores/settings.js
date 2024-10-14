import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { mainStore } from "./mainStore";
import axiosInstance from "./axios_instance";

export const useSettingsStore = defineStore("settingStore", {
  state: () => ({
    allContacts: [],
  }),
  actions: {
    // all admins
    async getAllContacts() {
      await axiosInstance
        .get(`${mainStore().apiLink}/admin/Settings/all`)
        .then((res) => {
          this.allContacts = res.data.data[0].settings;
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
