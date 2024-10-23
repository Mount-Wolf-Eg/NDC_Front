import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { mainStore } from "./mainStore";
import axiosInstance from "./axios_instance";

export const useBlogStore = defineStore("blogStore", {
  state: () => ({
    allblogs: [],
    postsByBlog: [],
    post: [],
  }),
  actions: {
    async getAllBlogs() {
      await axiosInstance
        .get(`${mainStore().apiLink}/admin/Categories/all`)
        .then((res) => {
          this.allblogs = res.data.data;
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
    async getPostsByCategory(data) {
      await axiosInstance
        .post(`${mainStore().apiLink}/admin/CatPosts/GetCatPosts`, data)
        .then((res) => {
          this.postsByBlog = res.data.data;
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
    async getPost(id) {
      await axiosInstance
        .post(`${mainStore().apiLink}/admin/BlogPosts/one`, id)
        .then((res) => {
          this.post = res.data.data;
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
