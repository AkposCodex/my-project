<script>
export default {
  data() {
    return {
      dropdownPopoverShow: false,
    };
  },
  computed: {},
  methods: {
    // toggleDropdown: function (event) {
    //   event.preventDefault();
    //   if (this.dropdownPopoverShow) {
    //     this.dropdownPopoverShow = false;
    //   } else {
    //     this.dropdownPopoverShow = true;
    //     createPopper(this.$refs.btnDropdownRef, this.$refs.popoverDropdownRef, {
    //       placement: "bottom-start",
    //     });
    //   }
    // },
  },
};
</script>

<template>
  <nav class="px-10 py-4 dark:bg-transparent w-4/5 ml-64 text-black">
    <div
      class="flex justify-between w-full relative items-center space-x-6"
    >
      <!-- <div class="w-32">
        <router-link to="/"
          ><img
            src="@/assets/icons/snappypayv1.svg"
            alt=""
        /></router-link>
      </div> -->

      <h1 class="text-6xl pt-6">Dashboard</h1>
      <div class="flex items-center space-x-2">
        <h1 class="text-4xl">Good Morning, David</h1>
        <a href="/table"><img src="@/assets/icons/sun.png" alt="" width="64" height="64" /></a>
      </div>
      <a
        href="#menu"
        class="text-blueGray-500 hidden block"
        ref="btnDropdownRef"
        v-on:click="toggleDropdown($event)"
      >
        <div class="items-center flex">
          <span
            class="w-16 h-16 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full"
          >
            <img
              alt="..."
              class="w-full rounded-md align-middle border-none p-3"
              src="@/assets/icons/menu.svg"
            />
          </span>
        </div>
      </a>
      <div
        ref="popoverDropdownRef"
        class="bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        v-bind:class="{
          hidden: !dropdownPopoverShow,
          block: dropdownPopoverShow,
        }"
      >
        <router-link
          to="/about-us"
          @click="menu = false"
          class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          >About Us</router-link
        >
        <router-link
          to="/product"
          @click="menu = false"
          class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          >Products</router-link
        >
        <router-link
          to="/dash"
          @click="menu = false"
          class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          >Dashboard</router-link
        >
        <router-link
          to="/contact"
          @click="menu = false"
          class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          >Contact</router-link
        >
        <router-link
          v-if="user"
          @click="menu = false"
          to="/checkout"
          class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          >Cart</router-link
        >
        <a
          href="#"
          v-if="user"
          @click="logout()"
          class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          >Log Out</a
        >
        <a
          href="#"
          v-if="!user"
          @click="
            btnClick();
            menu = false;
          "
          class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          >Log In</a
        >
      </div>
    </div>
  </nav>
</template>
