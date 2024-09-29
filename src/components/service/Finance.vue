<template>
  <div class="rehabilitation">
    <p class="rehabilitation-title">قطاع الاستشارات المالية</p>
    <div class="rehabilitation-sec-1">
      <p class="reh-title"></p>
      <div>
        <ul>
          <li class="reh-title">الاستشارات المالية:</li>
        </ul>
        <p class="reh-text">
          نساعد عملاءنا في تطوير استراتيجيات تجارية تتماشى مع خطط تشغيلية فعّالة
          لتحقيق الأهداف الاستراتيجية والتشغيلية وتعزز النمو والاستدامة.
        </p>
      </div>
      <div>
        <ul>
          <li class="reh-title">استشارات المخاطر:</li>
        </ul>
        <p class="reh-text">
          نقدم حلول أعمال لإدارة المخاطر المالية، وتعزيز الحوكمة، وتقوية نظم
          الرقابة الداخلية.
        </p>
      </div>

      <div>
        <ul>
          <li class="reh-title">استشارات الاستثمار:</li>
        </ul>
        <p class="reh-text">
          نحدد فرص النمو ونوجه عملاءنا لاتخاذ قرارات استثمارية مدروسة.
        </p>
      </div>
      <div>
        <ul>
          <li class="reh-title">إعادة هيكلة الأعمال:</li>
        </ul>
        <p class="reh-text">
          نساعد الشركات في تحسين عملياتها وزيادة كفاءتها التنظيمية.
        </p>
      </div>
      <div>
        <ul>
          <li class="reh-title">استشارات حوكمة الشركات:</li>
        </ul>
        <p class="reh-text">
          نضع أطر عمل وفقاً لمبادئ الحوكمة تضمن الامتثال الفعال والإدارة الرشيدة
          بما يحقق توازن المصالح.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.rehabilitation {
  .rehabilitation-title {
    font-size: 3.2rem;
    font-weight: 500;
    padding: 1rem 2rem;
    line-height: 4.9rem;
    text-align: right;
    background-color: #7aaf44;
    color: #fff;
    border-inline-start: 3rem solid #0477be;
    width: fit-content;
  }
  .rehabilitation-sec-1,
  .rehabilitation-sec-2 {
    .reh-title {
      margin: 2rem 0 0;
      font-size: 2.4rem;
      font-weight: 700;
      line-height: 3.6rem;
      text-align: right;
      color: #444444;
    }
    .reh-text,
    ul li {
      font-size: 1.8rem;
      font-weight: 400;
      line-height: 3.454rem;
      text-align: right;
      color: #121212;
    }
  }
}
</style>
