<template>
  <div
    class="responsive-nav"
    :style="{
      backgroundColor: route.name === 'home' ? '' : '#0477BE',
      position: route.name === 'home' ? 'absolute' : 'sticky',
    }"
    style="z-index: 999; padding-top: 2rem; top: 0; left: 0; width: 100%"
  >
    <div class="nav px-5">
      <div
        class="flex-row justify-content-start"
        style="margin-inline-end: auto"
        @click="router.push({ name: 'home' })"
      >
        <img
          :src="allContacts.logo"
          alt="website logo"
          style="width: 20rem; height: 3.9rem"
        />
      </div>
      <button @click="showNavMenu = !showNavMenu">
        <svg
          style="width: 5rem; height: 5rem"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 18L20 18"
            stroke="#000000"
            stroke-width="2"
            stroke-linecap="round"
          />
          <path
            d="M4 12L20 12"
            stroke="#000000"
            stroke-width="2"
            stroke-linecap="round"
          />
          <path
            d="M4 6L20 6"
            stroke="#000000"
            stroke-width="2"
            stroke-linecap="round"
          />
        </svg>
      </button>
    </div>
    <div class="nav-body" v-if="showNavMenu">
      <div class="h-100" style="position: relative">
        <svg
          style="
            width: 5rem;
            height: 5rem;
            position: absolute;
            top: 30px;
            left: 30px;
            cursor: pointer;
          "
          @click="showNavMenu = !showNavMenu"
          fill="#fff"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 14.545L1.455 16 8 9.455 14.545 16 16 14.545 9.455 8 16 1.455 14.545 0 8 6.545 1.455 0 0 1.455 6.545 8z"
            fill-rule="evenodd"
          />
        </svg>
        <div class="nav-content mx-auto">
          <ul class="nav-list list-unstyled">
            <li
              class="nav-list-item"
              @click="
                router.push({ name: 'home' }), (showNavMenu = !showNavMenu)
              "
            >
              الرئيسية
            </li>
            <li
              class="nav-list-item"
              @click="
                router.push({ name: 'about' }), (showNavMenu = !showNavMenu)
              "
            >
              من نحن
            </li>
            <li
              class="nav-list-item"
              @click="router.push({ name: 'packages' })"
            >
              الباقات
            </li>
            <li
              class="nav-list-item"
              @click="
                router.push({ name: 'join' }), (showNavMenu = !showNavMenu)
              "
            >
              توظيف
            </li>
            <li
              class="nav-list-item"
              @click="
                router.push({ name: 'blog' }), (showNavMenu = !showNavMenu)
              "
            >
              المدونة
            </li>
            <li class="nav-list-item">
              <ul class="nav-list d-flex flex-column gap-5">
                <button
                  type="button"
                  class="nav-list-item"
                  data-bs-toggle="collapse"
                  data-bs-target="#demo"
                >
                  الخدمات
                </button>
                <ul id="demo" class="collapse">
                  <li
                    v-for="(servic, j) in allServices.slice(-3)"
                    :key="j"
                    class="nav-sub-item pb-4 text-center fs-1"
                    @click="
                      router.push({
                        name: 'service',
                        query: { service: servic.id },
                      }),
                        (showNavMenu = !showNavMenu)
                    "
                  >
                    {{ servic.name }}
                  </li>
                  <li
                    class="nav-sub-item pb-4 text-center fs-1"
                    @click="
                      router.push({
                        name: 'serviceCards',
                      }),
                        (showNavMenu = !showNavMenu)
                    "
                  >
                    المزيد
                  </li>
                </ul>
              </ul>
            </li>
            <ul class="nav-list d-flex flex-column gap-5">
              <button
                type="button"
                class="nav-list-item"
                data-bs-toggle="collapse"
                data-bs-target="#demo1"
              >
                عربي
              </button>
              <ul id="demo1" class="collapse">
                <li
                  @click="setLanguage('ar'), ($i18n.locale = `ar`)"
                  class="nav-sub-item pb-4 text-center fs-1"
                >
                  AR
                </li>
                <li
                  @click="setLanguage('en'), ($i18n.locale = `en`)"
                  class="nav-sub-item pb-4 text-center fs-1"
                >
                  EN
                </li>
              </ul>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useSettingsStore } from "@/stores/settings";
import { storeToRefs } from "pinia";
import { useStaticPagesStore } from "@/stores/staticPages";
const { allContacts } = storeToRefs(useSettingsStore());
const { allServices } = storeToRefs(useStaticPagesStore());

onMounted(async () => {
  await useSettingsStore().getAllContacts();
});

const lang = ref("AR");

const setLanguage = (lan) => {
  if (lan == "ar") {
    document.querySelector("html").setAttribute("dir", "rtl"),
      sessionStorage.setItem("lang", "ar");
    lang.value = "AR";
    window.location.reload();
  } else {
    document.querySelector("html").setAttribute("dir", "ltr"),
      sessionStorage.setItem("lang", "en");
    lang.value = "EN";
    window.location.reload();
  }
};

const route = useRoute();
const router = useRouter();
const showNavMenu = ref(false);
const show = ref(false);
</script>

<style lang="scss" scoped></style>
