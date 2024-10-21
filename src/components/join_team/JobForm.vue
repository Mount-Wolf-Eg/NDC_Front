<template>
  <div class="join">
    <div class="flex-col my-5 mx-auto" style="width: 90%">
      <img
        :src="job.image"
        style="width: 100%; max-height: 50rem; height: auto"
        alt="blog iamge"
      />
      <div class="container-cust">
        <p class="head">اسم الوظيفة</p>
        <p class="job-title">{{ job.title }}</p>
        <p class="job-desc">{{ job.description }}</p>
        <p class="foot">
          {{ moment(new Date(job?.created_at)).format("DD-MM-YYYY") }}
        </p>
      </div>

      <form
        @submit.prevent="sendApplication()"
        id="addForm"
        class="join-form w-100"
      >
        <div class="contact-form w-50 mx-auto">
          <div class="flex-row gap-4">
            <div class="flex-col gap-3" style="flex: 1">
              <span class="w-100">
                <InptField
                  v-model="formData.name"
                  :holder="'Name'"
                  :appear="checkErrName(['name']) ? 'err-border' : ''"
                ></InptField>
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
              <span class="w-100">
                <InptField
                  v-model="formData.email"
                  :holder="'Email'"
                  :appear="checkErrName(['email']) ? 'err-border' : ''"
                ></InptField>
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
              <span class="w-100">
                <InptField
                  v-model="formData.graduationYear"
                  :holder="'Graduation Year'"
                  :appear="checkErrName(['graduationYear']) ? 'err-border' : ''"
                ></InptField>
                <span
                  class="center-row justify-content-start"
                  style="margin-top: -1rem; margin-bottom: 1rem"
                  v-for="(err, i) in validationObj.$errors"
                  :key="i"
                  ><span
                    v-if="err.$property == 'graduationYear'"
                    class="err-msg"
                  >
                    {{ err.$message }}
                  </span></span
                >
              </span>
            </div>

            <div class="flex-col gap-3" style="flex: 1">
              <span class="w-100">
                <InptField
                  v-model="formData.qualification"
                  :holder="'Qualification'"
                  :appear="checkErrName(['qualification']) ? 'err-border' : ''"
                ></InptField>
                <span
                  class="center-row justify-content-start"
                  style="margin-top: -1rem; margin-bottom: 1rem"
                  v-for="(err, i) in validationObj.$errors"
                  :key="i"
                  ><span
                    v-if="err.$property == 'qualification'"
                    class="err-msg"
                  >
                    {{ err.$message }}
                  </span></span
                >
              </span>
              <span class="w-100">
                <InptField
                  v-model="formData.phone"
                  :holder="'phone'"
                  :appear="checkErrName(['phone']) ? 'err-border' : ''"
                ></InptField>
                <span
                  class="center-row justify-content-start"
                  style="margin-top: -1rem; margin-bottom: 1rem"
                  v-for="(err, i) in validationObj.$errors"
                  :key="i"
                  ><span v-if="err.$property == 'phone'" class="err-msg">
                    {{ err.$message }}
                  </span></span
                >
              </span>
              <!-- role -->
              <span class="w-100 mt-3">
                <UploadeFile @fileData="formData.cvFile = $event"></UploadeFile>
                <img
                  v-if="formData.cvFile"
                  class="mt-3"
                  :src="formData.cvFile"
                  alt=""
                  style="max-width: 10rem; border-radius: 7px"
                />
                <span
                  class="center-row justify-content-start"
                  style="margin-top: -1rem; margin-bottom: 1rem"
                  v-for="(err, i) in validationObj.$errors"
                  :key="i"
                  ><span v-if="err.$property == 'cvFile'" class="err-msg">
                    {{ err.$message }}
                  </span></span
                >
              </span>
            </div>
          </div>

          <button v-if="!isLoading" type="submit" class="send-btn my-5 w-100">
            ارسال
          </button>
          <button v-else class="send-btn my-5 w-100">
            <div class="spinner-grow me-3" role="status"></div>
            <span> Loading...</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useCareersStore } from "@/stores/careersStore";
import { storeToRefs } from "pinia";
import InptField from "@/reusables/inputs/InptField.vue";
import UploadeFile from "@/reusables/inputs/UploadeFile.vue";

import moment from "moment";

const route = useRoute();
const router = useRouter();
const { job } = storeToRefs(useCareersStore());
onMounted(async () => {
  await useCareersStore().getJobDetails({ id: route.query.job });
  if (job.value.length == 0) router.push({ name: "join" });
});

import useVuelidator from "@vuelidate/core";
import {
  required,
  minLength,
  maxLength,
  email,
  integer,
} from "@vuelidate/validators";
required.$message = "Field is required";

const isLoading = ref(false);
const formData = ref({
  name: "",
  email: "",
  phone: "",
  cvFile: "",
  graduationYear: "",
  qualification: "",
});

const validationRules = ref({
  name: { required, minLength: minLength(3), maxLength: maxLength(100) },
  email: { required, minLength: minLength(3), maxLength: maxLength(50), email },
  phone: {
    required,
    minLength: minLength(7),
    maxLength: maxLength(20),
    integer,
  },
  cvFile: { required },
  graduationYear: {
    required,
    length: 4,
    integer,
  },
  qualification: {
    required,
    minLength: minLength(3),
    maxLength: maxLength(50),
  },
});
const checkErrName = (key) => {
  return validationObj.value.$errors.find((err) => err.$property == key);
};
const validationObj = useVuelidator(validationRules, formData);
const resetFormData = () => {
  formData.value = {
    name: "",
    email: "",
    phone: "",
    cvFile: "",
    graduationYear: "",
    qualification: "",
  };
  validationObj.value.$reset();
  document.getElementById("addForm").reset();
};

const sendApplication = async () => {
  isLoading.value = true;
  const result = await validationObj.value.$validate();
  if (result) {
    const res = await useCareersStore().sendJobApplication({
      name: formData.value.name,
      email: formData.value.email,
      mobile: formData.value.phone,
      career_id: route.query.job,
      graduation_year: formData.value.graduationYear,
      academic_qualification: formData.value.qualification,
      cv_file: formData.value.cvFile,
      job_name: job.value.title,
    });
    if (res) {
      resetFormData();
    }
  }
  isLoading.value = false;
};
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
