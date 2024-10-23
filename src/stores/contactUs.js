import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { mainStore } from "./mainStore";
import axiosInstance from "./axios_instance";

export const contactUsForm = defineStore("contactUs", {
  state: () => ({
    allMessages: [],
    message: [],
    filteredMessages: [],
  }),
  actions: {
    // all messages
    async getAllMessages() {
      await axiosInstance
        .get(`${mainStore().apiLink}/Mail/show`)
        .then((res) => {
          this.allMessages = res.data.data;
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

    async getSingleMessage(data) {
      let result;
      await axiosInstance
        .post(`${mainStore().apiLink}/Mail/one`, data)
        .then((res) => {
          this.message = res.data.data;
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

    async sendMessage(data) {
      let result;
      await axiosInstance
        .post(`${mainStore().apiLink}/Mail/SendMessage`, data)
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

    async replyMessage(data) {
      let result;
      await axiosInstance
        .post(`${mainStore().apiLink}/Mail/reply`, data)
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

    async filteredMessage(data) {
      let result;
      await axiosInstance
        .post(`${mainStore().apiLink}/Mail/ShowFiltered`, data)
        .then((res) => {
          result = res;
          this.filteredMessages = res.data.data;
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
