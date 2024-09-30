<template>
  <div class="join">
    <div class="flex-col my-5 mx-auto" style="width: 90%">
      <img src="/src/assets/joinUs/join-card.jpg" alt="blog iamge" />
      <div class="container-cust">
        <p class="head">اسم الوظيفة</p>
        <p class="job-title">مهندس مدني</p>
        <p class="job-desc">
          هنالك العديد من الأنواع المتوفرة لنصوص لوريم إيبسوم، ولكن الغالبية تم
          تعديلها بشكل ما عبر إدخال بعض النوادر أو الكلمات العشوائية إلى النص.
          إن كنت تريد أن تستخدم نص لوريم إيبسوم ما، عليك أن تتحقق أولاً أن ليس
          هناك أي كلمات أو عبارات محرجة أو غير لائقة مخبأة في هذا النص. بينما
          تعمل بعض مولّدات نصوص لوريم إيبسوم على الإنترنت على إعادة تكرار
        </p>
        <p class="foot">August 20, 2022</p>
      </div>

      <div class="join-form w-100">
        <div class="contact-form w-50 mx-auto">
          <div class="flex-row gap-4">
            <div class="flex-col gap-3" style="flex: 1">
              <input class="form-inpt" type="text" placeholder="الاسم" />
              <input
                class="form-inpt"
                type="email"
                placeholder="اكتب البريد الاكتروني"
              />
              <input class="form-inpt" type="text" placeholder="سنة التخرج " />
            </div>
            <div class="flex-col gap-3" style="flex: 1">
              <input class="form-inpt" type="text" placeholder="المؤهل" />
              <input class="form-inpt" type="text" placeholder="رقم التلفون" />
              <input class="form-inpt" type="text" placeholder="اضافة فايل" />
            </div>
          </div>

          <button class="send-btn my-5 w-100">ارسال</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
</script>

<style lang="scss" scoped>
.join {
  margin: 5rem 0 3rem;

  .head {
    width: 27.2rem;
    height: 3.9rem;
    background-color: #def1ff;
    border-radius: 9px;
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 3rem;
    text-align: center;
    line-height: 3.9rem;
    margin: 5rem auto 2rem;
  }
  .job-title {
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 3.6rem;
    text-align: center;
    margin-bottom: 2rem;
  }
  .job-desc {
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 3.454rem;
    text-align: center;
    width: 70%;
    margin: 0 auto;
  }
  .foot {
    width: 27.6rem;
    height: 2.7rem;
    border-radius: 9px;
    background-color: #def1ff;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 2.673rem;
    text-align: left;
    text-align: center;
    line-height: 2.7rem;
    margin: 3rem auto 5rem;
  }

  .contact-form {
    .form-inpt {
      border: 1px solid #0477be;
      height: 5rem;
      width: 100%;
      border-radius: 9px;
      font-size: 1.8rem;
      font-weight: 400;
      line-height: 3.454rem;
      text-align: right;
      background-color: #f4f3f3;
      padding: 0 15px;
    }
    textarea {
      width: 69.6rem !important;
      height: 11.2rem !important;
    }
    .send-btn {
      width: 69.6rem;
      height: 5.9rem;
      background-color: #0477be;
      font-size: 2.4rem;
      font-weight: 500;
      line-height: 3.6rem;
      text-align: right;
      color: #fff;
      text-align: center;
      border-radius: 12px;
    }
  }
}
</style>
