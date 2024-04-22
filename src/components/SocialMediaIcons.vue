<script setup lang="ts">

</script>

<template>
  <div class="flex space-x-2">
    <a href="">
      <svg
        class="group/icon puff-in-center"
        fill="none"
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          class="group-hover/icon:fill-pink-700"
          d="M6.48193 3C5.38768 3 4.5 3.88622 4.5 4.98047C4.5 6.07472 5.38697 6.98145 6.48047 6.98145C7.57397 6.98145 8.4624 6.07472 8.4624 4.98047C8.4624 3.88697 7.57618 3 6.48193 3ZM16.1514 8.25C14.4871 8.25 13.5349 9.12034 13.0781 9.98584H13.0298V8.48291H9.75V19.5H13.1675V14.0464C13.1675 12.6094 13.2759 11.2207 15.0542 11.2207C16.8069 11.2207 16.8325 12.8592 16.8325 14.1372V19.5H20.2456H20.25V13.4487C20.25 10.4877 19.6134 8.25 16.1514 8.25ZM4.77246 8.48291V19.5H8.19287V8.48291H4.77246Z"
          fill="#D4D4D4"
        />
      </svg>
    </a>

    <a href="">
      <svg
        class="group/icon puff-in-center"
        fill="none"
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          class="group-hover/icon:fill-pink-700"
          clip-rule="evenodd"
          d="M12 3C7.02832 3 3 7.02832 3 12C3 15.9756 5.57813 19.3506 9.15527 20.54C9.60645 20.6221 9.77051 20.3467 9.77051 20.1064C9.77051 19.8926 9.76172 19.3271 9.75879 18.5771C7.25391 19.1191 6.72656 17.3701 6.72656 17.3701C6.31641 16.3301 5.72754 16.0518 5.72754 16.0518C4.91016 15.4951 5.78906 15.5068 5.78906 15.5068C6.69141 15.5713 7.16602 16.4326 7.16602 16.4326C7.96875 17.8096 9.27246 17.4111 9.78516 17.1826C9.86719 16.5996 10.1016 16.2041 10.3564 15.9785C8.3584 15.7529 6.25781 14.9795 6.25781 11.5312C6.25781 10.5469 6.60938 9.74414 7.18359 9.11426C7.09277 8.88867 6.78223 7.97168 7.27149 6.73242C7.27149 6.73242 8.02734 6.49219 9.74707 7.65527C10.4648 7.45605 11.2354 7.35645 12 7.35352C12.7646 7.35645 13.5352 7.45605 14.2529 7.65527C15.9727 6.49219 16.7256 6.73242 16.7256 6.73242C17.2178 7.97168 16.9102 8.88867 16.8164 9.11426C17.3936 9.74414 17.7393 10.5469 17.7393 11.5312C17.7393 14.9883 15.6357 15.7471 13.6318 15.9727C13.9541 16.248 14.2412 16.7988 14.2412 17.6367C14.2412 18.8408 14.2324 19.8105 14.2324 20.1064C14.2324 20.3467 14.3936 20.6279 14.8506 20.54C18.4248 19.3477 21 15.9756 21 12C21 7.02832 16.9717 3 12 3Z"
          fill="#D4D4D4"
          fill-rule="evenodd"
        />
      </svg>
    </a>

    <a href="">
      <svg
        class="group/icon puff-in-center"
        fill="none"
        height="24"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="mask0_2635_52"
          height="24"
          maskUnits="userSpaceOnUse"
          style="mask-type: alpha"
          width="24"
          x="0"
          y="0"
        >
          <rect fill="#D9D9D9" height="24" width="24" />
        </mask>
        <g mask="url(#mask0_2635_52)">
          <path
            class="group-hover/icon:fill-pink-700"
            d="M3.99997 20C3.44997 20 2.97914 19.8042 2.58747 19.4125C2.1958 19.0208 1.99997 18.55 1.99997 18V6C1.99997 5.45 2.1958 4.97917 2.58747 4.5875C2.97914 4.19583 3.44997 4 3.99997 4H20C20.55 4 21.0208 4.19583 21.4125 4.5875C21.8041 4.97917 22 5.45 22 6V18C22 18.55 21.8041 19.0208 21.4125 19.4125C21.0208 19.8042 20.55 20 20 20H3.99997ZM12 13L3.99997 8V18H20V8L12 13ZM12 11L20 6H3.99997L12 11ZM3.99997 8V6V18V8Z"
            fill="#D4D4D4"
          />
        </g>
      </svg>
    </a>
  </div>
</template>

<style scoped>

.puff-in-center:hover {
  -webkit-animation: puff-in-center 0.5s cubic-bezier(0.47, 0, 0.745, 0.715) both;
  animation: puff-in-center 0.5s cubic-bezier(0.47, 0, 0.745, 0.715) both;
}
@-webkit-keyframes puff-in-center {
  0% {
    -webkit-transform: scale(1.5);
    transform: scale(1.5);
    -webkit-filter: blur(4px);
    filter: blur(4px);
    opacity: 0;
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-filter: blur(0px);
    filter: blur(0px);
    opacity: 1;
  }
}
@keyframes puff-in-center {
  0% {
    -webkit-transform: scale(2);
    transform: scale(2);
    -webkit-filter: blur(4px);
    filter: blur(4px);
    opacity: 0;
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-filter: blur(0px);
    filter: blur(0px);
    opacity: 1;
  }
}
</style>