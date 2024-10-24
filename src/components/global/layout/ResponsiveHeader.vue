<template>
  <div
    class="responsive-nav"
    :style="{
      backgroundColor: route.name === 'home' ? '' : '#0477BE',
      position: route.name === 'home' ? 'absolute' : 'sticky',
    }"
  >
    <div class="nav row col-12 px-4" style="transition: all 0.3s ease-in-out">
      <div
        class="col-3"
        style="margin-inline-end: auto"
        @click="router.push({ name: 'home' })"
      >
        <img
          :src="allContacts.logo"
          alt="website logo"
          style="width: auto; height: auto; max-width: 100%; max-height: 5rem"
        />
      </div>

      <button @click="showNavMenu = !showNavMenu" class="col-1">
        <svg
          style="max-width: 5rem; max-height: 5rem; height: 100%; width: auto"
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

    <!-- menu -->
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
              {{ $t("home") }}
            </li>
            <li
              class="nav-list-item"
              @click="
                router.push({ name: 'about' }), (showNavMenu = !showNavMenu)
              "
            >
              {{ $t("about") }}
            </li>
            <li
              class="nav-list-item"
              @click="router.push({ name: 'packages' })"
            >
              {{ $t("packages") }}
            </li>
            <li
              class="nav-list-item"
              @click="
                router.push({ name: 'join' }), (showNavMenu = !showNavMenu)
              "
            >
              {{ $t("join") }}
            </li>
            <li
              class="nav-list-item"
              @click="
                router.push({ name: 'blog' }), (showNavMenu = !showNavMenu)
              "
            >
              {{ $t("blog") }}
            </li>
            <li class="nav-list-item">
              <ul class="nav-list d-flex flex-column gap-5">
                <button
                  type="button"
                  class="nav-list-item"
                  data-bs-toggle="collapse"
                  data-bs-target="#demo"
                >
                  {{ $t("services") }}
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
                    v-if="allServices.length"
                    class="nav-sub-item pb-4 text-center fs-1"
                    @click="
                      router.push({
                        name: 'serviceCards',
                      }),
                        (showNavMenu = !showNavMenu)
                    "
                  >
                    {{ $t("more") }}
                  </li>
                  <li v-else class="dropdown-item bg-info">
                    {{ $t("no-data") }}
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
                {{ $t("lang") }}
                <svg
                  fill="#fff"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  style="width: 4rem; height: 4rem"
                >
                  <path
                    d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
                  />
                </svg>
              </button>
              <ul id="demo1" class="collapse">
                <li
                  @click="setLanguage('ar'), ($i18n.locale = 'ar')"
                  class="nav-sub-item pb-2 text-center"
                >
                  AR
                </li>
                <li
                  @click="setLanguage('en'), ($i18n.locale = 'en')"
                  class="nav-sub-item pb-2 text-center"
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
    lang.value = "AR";
    sessionStorage.setItem("lang", "ar");
    document.querySelector("html").setAttribute("dir", "rtl");
    window.location.reload();
  } else {
    lang.value = "EN";
    sessionStorage.setItem("lang", "en");
    document.querySelector("html").setAttribute("dir", "ltr");
    window.location.reload();
  }
};

const route = useRoute();
const router = useRouter();
const showNavMenu = ref(false);
</script>

<style lang="scss" scoped></style>
