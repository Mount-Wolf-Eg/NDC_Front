import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { mainStore } from "./mainStore";
import axiosInstance from "./axios_instance";

export const useSlidersStore = defineStore("sliderStore", {
  state: () => ({}),
  actions: {
    // all admins
    async getAllSliders() {
      await axiosInstance
        .get(`${mainStore().apiLink}/admin/slider/all`)
        .then((res) => {
          // console.log(res.data.data);
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
    // async doExportVendors() {
    //   let result;
    //   await axiosInstance
    //     .get(`${mainStore().apiLink}/admin/export`, {})
    //     .then((res) => {
    //       result = res;
    //       console.log(res.data.data);
    //       const blob = new Blob([res.data.data], {
    //         type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    //       });

    //       const link = document.createElement("a");
    //       link.href = URL.createObjectURL(blob);
    //       link.download = "Vendors-list.xlsx";

    //       document.body.appendChild(link);
    //       link.click();

    //       document.body.removeChild(link);
    //     })
    //     .catch((err) => {
    //       mainStore().showAlert(
    //         Object.values(err.response.data.errors)[0][0]
    //           ? Object.values(err.response.data.errors)[0][0]
    //           : "Something went wrong, please try again",
    //         2
    //       );
    //     });
    // },
  },
});
