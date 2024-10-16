<template>
  <div class="contact-us">
    <img
      src="/src/assets//contact_us/contactUs.jpg"
      alt="contact us"
      style="width: 100%"
    />
    <div class="contact-sec container-cust flex-row">
      <div
        class="contact-text flex-col align-items-start justify-content-between"
        style="width: 32%"
      >
        <span>
          لمزيد من المعلومات حول خدماتنا أو لمناقشة كيف بإمكاننا مساعدة مؤسستك
          في تحقيق أهداف الاعتماد، يرجى التواصل معنا:
        </span>

        <a
          v-if="allContacts.mainNumber"
          :href="`tel:${allContacts.mainNumber}`"
          class="Blondie"
        >
          <svg
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.94415 18.9932C6.11033 18.8637 7.26288 18.5161 8.33359 17.9641C13.0393 15.5653 16.5174 12.0215 18.4951 7.08071C18.727 6.50825 18.8497 5.89491 18.9657 5.28838C19.0475 4.85904 18.9793 4.48422 18.7543 4.12303C17.9427 2.81457 16.9811 1.62877 15.8354 0.592902C15.7263 0.497493 15.6035 0.415714 15.4944 0.320305C14.7647 -0.272593 14.1168 0.0408931 13.7349 0.552012C12.8278 1.78551 11.9822 3.0599 11.3548 4.46378C10.9319 5.40424 11.0206 5.75861 11.7912 6.4401C11.9549 6.59003 12.1322 6.73315 12.3027 6.87626C12.7938 7.29878 12.8006 7.29878 12.5346 7.91213C11.5525 10.1611 9.90897 11.7285 7.63115 12.6485C7.38564 12.7507 7.22878 12.7235 7.05829 12.5054C6.79913 12.1715 6.5127 11.8648 6.22627 11.5513C5.83072 11.1151 5.36015 10.9993 4.79411 11.2105C4.05757 11.4831 3.38241 11.858 2.72089 12.2737C2.05254 12.6962 1.39102 13.1324 0.743139 13.5821C-0.122976 14.1819 -0.232092 14.8088 0.42943 15.6062C1.52742 16.9283 2.85046 17.9914 4.344 18.8433C4.62361 19 4.67135 19 4.94415 18.9864V18.9932Z"
              fill="#121212"
            />
          </svg>
          {{ allContacts.mainNumber }}</a
        >

        <a
          href="tel:+496170961709"
          class="Blondie"
          v-if="allContacts.secondNumber"
          :href="`tel:${allContacts.secondNumber}`"
        >
          <svg
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.94415 18.9932C6.11033 18.8637 7.26288 18.5161 8.33359 17.9641C13.0393 15.5653 16.5174 12.0215 18.4951 7.08071C18.727 6.50825 18.8497 5.89491 18.9657 5.28838C19.0475 4.85904 18.9793 4.48422 18.7543 4.12303C17.9427 2.81457 16.9811 1.62877 15.8354 0.592902C15.7263 0.497493 15.6035 0.415714 15.4944 0.320305C14.7647 -0.272593 14.1168 0.0408931 13.7349 0.552012C12.8278 1.78551 11.9822 3.0599 11.3548 4.46378C10.9319 5.40424 11.0206 5.75861 11.7912 6.4401C11.9549 6.59003 12.1322 6.73315 12.3027 6.87626C12.7938 7.29878 12.8006 7.29878 12.5346 7.91213C11.5525 10.1611 9.90897 11.7285 7.63115 12.6485C7.38564 12.7507 7.22878 12.7235 7.05829 12.5054C6.79913 12.1715 6.5127 11.8648 6.22627 11.5513C5.83072 11.1151 5.36015 10.9993 4.79411 11.2105C4.05757 11.4831 3.38241 11.858 2.72089 12.2737C2.05254 12.6962 1.39102 13.1324 0.743139 13.5821C-0.122976 14.1819 -0.232092 14.8088 0.42943 15.6062C1.52742 16.9283 2.85046 17.9914 4.344 18.8433C4.62361 19 4.67135 19 4.94415 18.9864V18.9932Z"
              fill="#121212"
            />
          </svg>
          {{ allContacts.secondNumber }}
        </a>
        <a
          href="tel:+496170961709"
          class="Blondie"
          v-if="allContacts.thirdNumber"
          :href="`tel:${allContacts.thirdNumber}`"
        >
          <svg
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.94415 18.9932C6.11033 18.8637 7.26288 18.5161 8.33359 17.9641C13.0393 15.5653 16.5174 12.0215 18.4951 7.08071C18.727 6.50825 18.8497 5.89491 18.9657 5.28838C19.0475 4.85904 18.9793 4.48422 18.7543 4.12303C17.9427 2.81457 16.9811 1.62877 15.8354 0.592902C15.7263 0.497493 15.6035 0.415714 15.4944 0.320305C14.7647 -0.272593 14.1168 0.0408931 13.7349 0.552012C12.8278 1.78551 11.9822 3.0599 11.3548 4.46378C10.9319 5.40424 11.0206 5.75861 11.7912 6.4401C11.9549 6.59003 12.1322 6.73315 12.3027 6.87626C12.7938 7.29878 12.8006 7.29878 12.5346 7.91213C11.5525 10.1611 9.90897 11.7285 7.63115 12.6485C7.38564 12.7507 7.22878 12.7235 7.05829 12.5054C6.79913 12.1715 6.5127 11.8648 6.22627 11.5513C5.83072 11.1151 5.36015 10.9993 4.79411 11.2105C4.05757 11.4831 3.38241 11.858 2.72089 12.2737C2.05254 12.6962 1.39102 13.1324 0.743139 13.5821C-0.122976 14.1819 -0.232092 14.8088 0.42943 15.6062C1.52742 16.9283 2.85046 17.9914 4.344 18.8433C4.62361 19 4.67135 19 4.94415 18.9864V18.9932Z"
              fill="#121212"
            />
          </svg>
          {{ allContacts.thirdNumber }}
        </a>

        <a href="#"
          ><svg
            width="14"
            height="20"
            viewBox="0 0 14 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 20C6.76667 20 6.56667 19.9333 6.4 19.8C6.23333 19.6667 6.10833 19.4917 6.025 19.275C5.70833 18.3417 5.30833 17.4667 4.825 16.65C4.35833 15.8333 3.7 14.875 2.85 13.775C2 12.675 1.30833 11.625 0.775 10.625C0.258333 9.625 0 8.41667 0 7C0 5.05 0.675 3.4 2.025 2.05C3.39167 0.683333 5.05 0 7 0C8.95 0 10.6 0.683333 11.95 2.05C13.3167 3.4 14 5.05 14 7C14 8.51667 13.7083 9.78333 13.125 10.8C12.5583 11.8 11.9 12.7917 11.15 13.775C10.25 14.975 9.56667 15.975 9.1 16.775C8.65 17.5583 8.275 18.3917 7.975 19.275C7.89167 19.5083 7.75833 19.6917 7.575 19.825C7.40833 19.9417 7.21667 20 7 20ZM7 9.5C7.7 9.5 8.29167 9.25833 8.775 8.775C9.25833 8.29167 9.5 7.7 9.5 7C9.5 6.3 9.25833 5.70833 8.775 5.225C8.29167 4.74167 7.7 4.5 7 4.5C6.3 4.5 5.70833 4.74167 5.225 5.225C4.74167 5.70833 4.5 6.3 4.5 7C4.5 7.7 4.74167 8.29167 5.225 8.775C5.70833 9.25833 6.3 9.5 7 9.5Z"
              fill="#121212"
            />
          </svg>
          {{ allContacts.address }}
        </a>
      </div>

      <form
        id="cont-form"
        action="#"
        @submit.prevent="contacForm()"
        class="contact-form flex-col"
      >
        <span
          class="d-flex flex-column algin-items-center justify-content-center"
        >
          <input
            class="form-inpt mb-4"
            type="text"
            placeholder="الاسم"
            v-model="formData.name"
            :appear="checkErrName(['name']) ? 'err-border' : ''"
          />
          <span
            class="center-row justify-content-start"
            style="margin-top: -1rem; margin-bottom: 1rem"
            v-for="(err, i) in validationObj.$errors"
            :key="i"
            ><span v-if="err.$property == 'name'" class="err-msg">
              {{ err.$message }}
            </span></span
          >
        </span>
        <span
          class="d-flex flex-column algin-items-center justify-content-center"
        >
          <input
            class="form-inpt mb-4"
            type="text"
            placeholder="اكتب البريد الاكتروني"
            v-model="formData.email"
            :appear="checkErrName(['email']) ? 'err-border' : ''"
          />
          <span
            class="center-row justify-content-start"
            style="margin-top: -1rem; margin-bottom: 1rem"
            v-for="(err, i) in validationObj.$errors"
            :key="i"
            ><span v-if="err.$property == 'email'" class="err-msg">
              {{ err.$message }}
            </span></span
          >
        </span>

        <span
          class="d-flex flex-column algin-items-center justify-content-center"
        >
          <textarea
            class="form-inpt mb-4"
            name="message"
            id="msg"
            placeholder="اكتب رسالتك"
            v-model="formData.message"
            :appear="checkErrName(['message']) ? 'err-border' : ''"
          ></textarea>
          <span
            class="center-row justify-content-start"
            style="margin-top: -1rem; margin-bottom: 1rem"
            v-for="(err, i) in validationObj.$errors"
            :key="i"
            ><span v-if="err.$property == 'message'" class="err-msg">
              {{ err.$message }}
            </span></span
          >
        </span>
        <button v-if="!isLoading" type="submit" class="send-btn">ارسال</button>

        <button v-else class="send-btn" disabled>
          <div class="spinner-grow me-3" role="status"></div>
          <span> Loading...</span>
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useSettingsStore } from "@/stores/settings";
import { storeToRefs } from "pinia";
import { contactUsForm } from "@/stores/contactUs";
const { allContacts } = storeToRefs(useSettingsStore());
const isLoading = ref(false);
// validation
import useVuelidator from "@vuelidate/core";
import { required, minLength, maxLength, email } from "@vuelidate/validators";
required.$message = "Field is required";

const formData = ref({
  name: "",
  email: "",
  message: "",
});

const validationRules = ref({
  name: { required, minLength: minLength(3), maxLength: maxLength(50) },
  message: { required, minLength: minLength(10), maxLength: maxLength(500) },
  email: { required, email },
});

const checkErrName = (key) => {
  return validationObj.value.$errors.find((err) => err.$property == key);
};

const validationObj = useVuelidator(validationRules, formData);

const contacForm = async () => {
  isLoading.value = true;
  const result = await validationObj.value.$validate();
  if (result) {
    const res = await contactUsForm().sendMessage({
      name: formData.value.name,
      email: formData.value.email,
      message: formData.value.message,
    });
    if (res) {
      formData.value = {
        name: "",
        email: "",
        message: "",
      };
    }
    validationObj.value.$reset();
    document.getElementById("cont-form").reset();
  }
  isLoading.value = false;
};
</script>

<style lang="scss" scoped>
.contact-us {
  .contact-sec {
    margin: 5rem auto;
    justify-content: space-between;
    .contact-text {
      font-size: 2.4rem;
      font-weight: 700;
      line-height: 3.6rem;
      text-align: right;
      gap: 1rem;
    }
    .contact-form {
      .form-inpt {
        border: 1px solid #0477be;
        width: 69.6rem;
        height: 5rem;
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
  a {
    font-size: 18px;
    font-weight: 400;
    line-height: 34.54px;
    text-align: right;
  }
}
</style>
