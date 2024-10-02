<template>
  <div class="container-cust package-sec">
    <h3 class="package-head">الباقــات</h3>
    <p class="package-body">
      تلك الباقات مُصممة خصيصًا للسوق السعودي، بما يتماشى مع هدفنا في أن نصبح
      الممثل المُعتمد لمراكز التدريب في تعاملاتهم مع هيئات الاعتماد.
    </p>

    <div class="package-card">
      <div class="package-info">
        <span class="package-card-body w-100" style="flex: 1">
          <p class="package-card-title">الباقة الأساسية للاعتماد</p>
          <div
            class="card d-flex flex-row justify-content-start align-items-start w-100"
            style="gap: 4rem"
          >
            <span>
              <p class="card-title">الخدمات المشمولة:</p>
              <ul class="card-list">
                <li>تقييم أولي وتحليل الفجوات.</li>
                <li>تطوير خريطة طريق الاعتماد.</li>
                <li>دعم أساسي لإعداد الوثائق.</li>
                <li>-تحديثات منتظمة والتواصل مع هيئة الاعتماد.</li>
              </ul>
            </span>
            <span>
              <p class="card-title">الفئة المستهدفة :</p>
              <ul class="card-list">
                <li style="list-style: none">مراكز التدريب الصغيرة</li>
                <li style="list-style: none">والمتوسطة التي تسعى</li>
                <li style="list-style: none">للحصول على الاعتماد لأول مرة.</li>
              </ul>
            </span>
          </div>
        </span>
        <div style="position: relative; flex: 1">
          <img
            src="/src/assets/images/package1.jpg"
            style="width: 100%"
            alt="package img"
          />
          <button
            @click="router.push({ name: 'contact' })"
            class="r-more-btn-w"
            style="position: absolute; left: 10px; bottom: 10px"
          >
            تواصل معنا
          </button>
        </div>
      </div>

      <div class="package-info">
        <div style="position: relative; flex: 1">
          <img
            src="/src/assets/images/package2.jpg"
            style="width: 100%"
            alt="package img"
          />
          <button
            @click="router.push({ name: 'contact' })"
            class="r-more-btn-w"
            style="position: absolute; left: 10px; bottom: 10px"
          >
            تواصل معنا
          </button>
        </div>
        <span class="package-card-body w-100 p-5" style="flex: 1">
          <p class="package-card-title">الباقة القياسية للاعتماد</p>
          <div
            class="card d-flex flex-row justify-content-start align-items-start w-100"
            style="gap: 4rem"
          >
            <span>
              <p class="card-title">الخدمات المشمولة:</p>
              <ul class="card-list">
                <li>جميع الخدمات من الباقة الأساسية</li>
                <li>إعداد شامل للوثائق</li>
                <li>تدريب مخصص للموظفين على معايير الاعتماد</li>
                <li>التنسيق مع هيئات الاعتماد نيابةً عن مركز التدريب</li>
                <li>تدقيقات متوسطة العملية لضمان الامتثال</li>
              </ul>
            </span>
            <span>
              <p class="card-title">الفئة المستهدفة :</p>
              <ul class="card-list">
                <li style="list-style: none">
                  مراكز التدريب المتوسطة التي لديها احتياجات أكثر تعقيدًا أو
                  تتطلب اعتمادات متعددة.
                </li>
              </ul>
            </span>
          </div>
        </span>
      </div>

      <div class="package-info">
        <span class="package-card-body w-100" style="flex: 1">
          <p class="package-card-title">الباقة المميزة للاعتماد</p>
          <div
            class="card d-flex flex-row justify-content-start align-items-start w-100"
            style="gap: 4rem"
          >
            <span>
              <p class="card-title">الخدمات المشمولة:</p>
              <ul class="card-list">
                <li>جميع الخدمات من الباقة القياسية</li>
                <li>تمثيل كامل كممثل مُعتمد لمركز التدريب</li>
                <li>جلسات استشارية مخصصة مع خبراء في المجال</li>
                <li>
                  دعم بعد الاعتماد، بما في ذلك التحقق المستمر من الامتثال وخدمات
                  إعادة الاعتماد
                </li>
                <li>تسريع عملية الاعتماد</li>
              </ul>
            </span>
            <span>
              <p class="card-title">الفئة المستهدفة :</p>
              <ul class="card-list">
                <li style="list-style: none">
                  مراكز التدريب الكبيرة أو تلك التي تستهدف الحصول على اعتمادات
                </li>
                <li style="list-style: none">مرموقة متعددة</li>
              </ul>
            </span>
          </div>
        </span>
        <div style="position: relative; flex: 1">
          <img
            src="/src/assets/images/package3.jpg"
            style="width: 100%"
            alt="package img"
          />
          <button
            @click="router.push({ name: 'contact' })"
            class="r-more-btn-w"
            style="position: absolute; left: 10px; bottom: 10px"
          >
            تواصل معنا
          </button>
        </div>
      </div>
    </div>

    <!-- responsive packages -->
    <div class="resp-tap">
      <PackagesResponsive></PackagesResponsive>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import PackagesResponsive from "./PackagesResponsive.vue";
const router = useRouter();
</script>

<style lang="scss" scoped></style>
