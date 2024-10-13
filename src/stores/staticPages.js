import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { mainStore } from "./mainStore";
import axiosInstance from "./axios_instance";

export const useStaticPagesStore = defineStore("staticPages", {
  state: () => ({
    aboutUs: [],
    privacyPolicy: [],
    termsConditions: [],
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
          console.log(this.privacyPolicy);
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
