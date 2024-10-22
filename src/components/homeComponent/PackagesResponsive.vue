<template>
  <div style="border-radius: 16px">
    <!-- :autoplay="1000" -->
    <carousel
      :wrap-around="true"
      :transition="500"
      v-model="currentSlide"
      :breakpoints="breakpoints"
    >
      <slide v-for="(slide, i) in packagesRes" :key="i">
        <div class="package-info-respon">
          <img :src="slide.image" alt="slide img" style="width: 100%" />

          <div
            style="width: 100%"
            class="d-flex flex-column align-items-center justify-content-center"
          >
            <p class="res-head">{{ slide.name }}</p>

            <div>
              <div class="res-box">
                <p class="res-box-title">الخدمات المشمولة:</p>
                <ul class="res-box-list">
                  <li
                    v-for="(ser, j) in slide.included_services"
                    :key="j"
                    style="list-style: none"
                  >
                    {{ ser }}
                  </li>
                </ul>
              </div>

              <div class="res-box">
                <p class="res-box-title">الفئة المستهدفة :</p>
                <ul class="res-box-list" style="list-style: none">
                  <li v-for="(ser, j) in slide.target_group" :key="j">
                    {{ ser }}
                  </li>
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
import { watch } from "vue";
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

const props = defineProps({
  packagesRes: {
    type: Object,
    default: () => {
      return {};
    },
    Required: true,
  },
});

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

// const replaceData = (ser) => {
//   return JSON.parse(ser.replace(/'/g, '"'));
// };
</script>

<style lang="scss" scoped></style>
