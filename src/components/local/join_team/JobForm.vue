<template>
  <div class="join">
    <div
      class="join-col flex-col mx-auto"
      style="
        width: 90%;
        border-top-left-radius: 12px !important;
        border-top-right-radius: 12px !important;
        overflow: hidden;
      "
    >
      <img
        :src="job.image"
        style="
          width: 100%;
          height: auto;
          object-fit: cover;
          object-position: center;
          max-height: 50vh;
          border-radius: 12px !important;
        "
        class="d-none d-md-block"
        alt="blog iamge"
      />
      <img
        :src="job.image"
        style="
          width: 100%;
          height: auto;
          max-height: 50vh;
          object-fit: cover;
          object-position: center;
          border-radius: 0 !important;
        "
        alt="blog iamge"
        class="d-block d-md-none"
      />
      <div class="container-cust">
        <p class="head">{{ $t("job-name") }}</p>
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
        <div class="contact-form mx-auto w-75">
          <div
            class="frm row d-flex flex-row gap-md-0 flex-wrap align-items-center justify-content-center"
          >
            <span class="col-12 col-sm-6 p-3">
              <InptField
                v-model="formData.name"
                :holder="`${$t('name')}`"
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
            <span class="col-12 col-sm-6 p-3">
              <InptField
                v-model="formData.email"
                :holder="`${$t('email')}`"
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
            <span class="col-12 col-sm-6 p-3">
              <InptField
                v-model="formData.graduationYear"
                :holder="`${$t('graduation')}`"
                :appear="checkErrName(['graduationYear']) ? 'err-border' : ''"
              ></InptField>
              <span
                class="center-row justify-content-start"
                style="margin-top: -1rem; margin-bottom: 1rem"
                v-for="(err, i) in validationObj.$errors"
                :key="i"
                ><span v-if="err.$property == 'graduationYear'" class="err-msg">
                  {{ err.$message }}
                </span></span
              >
            </span>

            <span class="col-12 col-sm-6 p-3">
              <InptField
                v-model="formData.qualification"
                :holder="`${$t('qualification')}`"
                :appear="checkErrName(['qualification']) ? 'err-border' : ''"
              ></InptField>
              <span
                class="center-row justify-content-start"
                style="margin-top: -1rem; margin-bottom: 1rem"
                v-for="(err, i) in validationObj.$errors"
                :key="i"
                ><span v-if="err.$property == 'qualification'" class="err-msg">
                  {{ err.$message }}
                </span></span
              >
            </span>
            <span class="col-12 col-sm-6 p-3">
              <InptField
                v-model="formData.phone"
                :holder="`${$t('phone')}`"
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
            <span class="col-12 col-sm-6 p-3">
              <UploadeFile @fileData="formData.cvFile = $event"></UploadeFile>
              <img
                v-if="formData.cvFile"
                class="mt-3"
                :src="formData.cvFile"
                alt=""
                style="max-width: 10rem; border-radius: 0.7rem"
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

          <button v-if="!isLoading" type="submit" class="send-btn my-5 w-100">
            {{ $t("send") }}
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

<style lang="scss" scoped></style>
<!-- v1 -->
