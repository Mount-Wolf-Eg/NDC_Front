<template>
  <div style="border-radius: 16px">
    <!-- :autoplay="1000" -->
    <carousel
      :wrap-around="true"
      :transition="500"
      v-model="currentSlide"
      :breakpoints="breakpoints"
    >
      <slide v-for="(slide, i) in slides" :key="i">
        <div class="package-info-respon">
          <img :src="slide.img" alt="slide img" style="width: 100%" />

          <div
            style="width: 100%"
            class="d-flex flex-column align-items-center justify-content-center"
          >
            <p class="res-head">{{ slide.head }}</p>

            <div>
              <div class="res-box">
                <p class="res-box-title">{{ slide.services[0].title }}</p>
                <ul
                  class="res-box-list"
                  v-for="(serv, j) in slide.services[0].list"
                  :key="j"
                >
                  <li style="list-style: none">{{ serv }}</li>
                </ul>
              </div>

              <div class="res-box">
                <p class="res-box-title">{{ slide.target[0].title }}</p>
                <ul
                  class="res-box-list"
                  v-for="(tar, k) in slide.target[0].list"
                  :key="k"
                >
                  <li style="list-style: none">{{ tar }}</li>
                </ul>
              </div>
            </div>
            <button
              @click="router.push({ name: 'contact' })"
              class="r-more-btn-w w-75"
            >
              تواصل معنا
            </button>
          </div>
        </div>
      </slide>
    </carousel>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
import { ref } from "vue";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
const currentSlide = ref(0);
const slides = ref([
  {
    head: "الباقة الأساسية للاعتماد",
    services: [
      {
        title: "الخدمات المشمولة:",
        list: [
          "تقييم أولي وتحليل الفجوات.",
          "تطوير خريطة طريق الاعتماد.",
          "دعم أساسي لإعداد الوثائق.",
          "تحديثات منتظمة والتواصل مع هيئة الاعتماد.",
        ],
      },
    ],
    target: [
      {
        title: "الفئة المستهدفة :",
        list: [
          "مراكز التدريب الصغيرة",
          "والمتوسطة التي تسعى",
          "للحصول على الاعتماد لأول مرة.",
        ],
      },
    ],
    img: "/src/assets/images/package1.jpg",
  },
  {
    head: "الباقة القياسية للاعتماد",
    services: [
      {
        title: "الخدمات المشمولة:",
        list: [
          "جميع الخدمات من الباقة الأساسية",
          "إعداد شامل للوثائق",
          "تدريب مخصص للموظفين على معايير الاعتماد",
          "التنسيق مع هيئات الاعتماد نيابةً عن مركز التدريب",
          "تدقيقات متوسطة العملية لضمان الامتثال",
        ],
      },
    ],
    target: [
      {
        title: "الفئة المستهدفة :",
        list: [
          "مراكز التدريب المتوسطة التي لديها احتياجات أكثر تعقيدًاأو تتطلب اعتمادات متعددة.",
        ],
      },
    ],
    img: "/src/assets/images/package2.jpg",
  },
  {
    head: "الباقة المميزة للاعتماد",
    services: [
      {
        title: "الخدمات المشمولة:",
        list: [
          "جميع الخدمات من الباقة القياسية",
          "تمثيل كامل كممثل مُعتمد لمركز التدريب",
          "جلسات استشارية مخصصة مع خبراء في المجال",
          "دعم بعد الاعتماد، بما في ذلك التحقق المستمر من الامتثال وخدمات إعادة الاعتماد",
          "تسريع عملية الاعتماد",
        ],
      },
    ],
    target: [
      {
        title: "الفئة المستهدفة :",
        list: [
          "مراكز التدريب الكبيرة أو تلك التي تستهدف الحصول على اعتمادات",
          "مرموقة متعددة",
        ],
      },
    ],
    img: "/src/assets/images/package3.jpg",
  },
]);

const breakpoints = ref({
  // 700px and up
  0: {
    itemsToShow: 1,
    snapAlign: "center",
  },
  // 1024 and up
  1024: {
    itemsToShow: 5,
    snapAlign: "center",
  },
});
</script>

<style lang="scss" scoped></style>
