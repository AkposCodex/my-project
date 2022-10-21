<template>
  <div class="dark:text-white h-[100vh] overflow-scroll bg-[#F2F2F2] w-full">
    <div
      id="sidebar"
      class="md:w-64 md:fixed h-[100vh] rounded-tr-3xl rounded-br-3xl top-10 drop-shadow-[10px_10px_5px_rgba(0,0,0,0.15)] md:block hidden bg-white dark:bg-opacity-40 p-2 text-white relative"
    >
      <div id="top" class="">
        <div
          class="w-[10rem] mt-[2rem] bg-center bg-cover rounded-xl md:w-[10rem] mx-auto my-4"
        >
          <a href="/">
            <img
              src="@/assets/icons/snappypayv1.svg"
              class="h-16 mx-auto rounded-lg"
            />
          </a>
        </div>
        <ul>
          <li class="w-4/5 mx-auto">
            <button
              class="rounded-xl text-left px-1 py-4 w-full"
              :class="{ 'bg-black bg-opacity-10': tile == 1 }"
              @click="tile = 1"
            >
              <div class="flex space-x-2 items-center">
                <img
                  src="@/assets/icons/home.png"
                  alt=""
                  width="32"
                  height="32"
                />
                <p class="text-lg text-black">Home</p>
              </div>
            </button>
          </li>
          <br />
          <li class="w-4/5 mx-auto">
            <button
              class="rounded-xl text-left px-1 py-4 w-full"
              :class="{ 'bg-black bg-opacity-10': tile == 4 }"
              @click="tile = 4"
            >
              <div class="flex space-x-2 items-center">
                <img
                  src="@/assets/icons/purchase-order.png"
                  width="32"
                  height="32"
                  alt=""
                />
                <p class="text-lg text-black">Orders</p>
              </div>
            </button>
          </li>
          <br />
          <li class="w-4/5 mx-auto">
            <button
              class="rounded-xl text-left px-1 py-4 w-full"
              :class="{ 'bg-black bg-opacity-10': tile == 2 }"
              @click="tile = 2"
            >
              <div class="flex space-x-2 items-center">
                <img
                  src="@/assets/icons/delivered-box.png"
                  width="32"
                  height="32"
                  alt=""
                />
                <p class="text-lg text-black">Inventory</p>
              </div>
            </button>
          </li>
          <br />
          <li class="w-4/5 mx-auto">
            <button
              class="rounded-xl text-left px-1 py-4 w-full"
              :class="{ 'bg-black bg-opacity-10': tile == 3 }"
              @click="tile = 3"
            >
              <div class="flex space-x-2 items-center">
                <img
                  src="@/assets/icons/order-history.png"
                  width="32"
                  height="32"
                  alt=""
                />
                <p class="text-lg text-black">Transaction History</p>
              </div>
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div id="hd-top" class="bg-main md:hidden w-full z-20 h-auto">
      <div class="flex justify-end">
        <button class="p-2" @click="visible = !visible">
          <img src="@/assets/icons/menu-50.png" alt="" width="32" height="32" />
        </button>
      </div>
      <div v-if="visible">
        <ul>
          <li class="mx-3">
            <button
              class="rounded-md p-3 text-white w-3/5"
              :class="{ 'bg-white bg-opacity-40': tile == 1 }"
              @click="
                tile = 1;
                visible = false;
              "
            >
              Orders
            </button>
          </li>
          <br />
          <li class="mx-3">
            <button
              class="rounded-md p-3 text-white w-full"
              :class="{ 'bg-white bg-opacity-40': tile == 4 }"
              @click="
                tile = 4;
                visible = false;
              "
            >
              Profile
            </button>
          </li>
          <br />
          <li class="mx-3">
            <button
              class="rounded-md p-3 text-white w-full"
              :class="{ 'bg-white bg-opacity-40': tile == 2 }"
              @click="
                tile = 2;
                visible = false;
              "
            >
              Inventory
            </button>
          </li>
          <br />
          <li class="mx-3">
            <button
              class="rounded-md p-3 text-white w-full"
              :class="{ 'bg-white bg-opacity-40': tile == 3 }"
              @click="
                tile = 3;
                visible = false;
              "
            >
              Transaction History
            </button>
          </li>
        </ul>
      </div>
    </div>
    <DashedNav />
    <div
      class="md:ml-64 p-7 w-4/5 mx-auto overflow-auto"
      id="profile"
      v-if="tile == 1"
    >
      <div class="grid gap-6 grid-cols-3 grid-rows-2 mx-auto w-full">
        <div
          class="bg-gradient-to-bl shadow-lg col-span-2 to-main from-[#88E7DB] rounded-lg flex flex-col justify-between bg-white w-full py-2 px-4 h-46"
        >
          <img src="@/assets/icons/time.png" alt="" width="52" height="52" />
          <p class="text-8xl text-center text-white">500</p>
          <p class="text-xl text-right font-bold text-white">
            Transactions Today
          </p>
        </div>
        <div
          class="rounded-lg flex flex-col w-full justify-between bg-white px-4 py-6 h-46"
        >
          <img src="@/assets/icons/money.png" alt="" width="52" height="52" />
          <p class="text-5xl text-center text-[#C7F5C7]">500,000</p>
          <p class="text-xl text-right font-bold text-black">Total Volume</p>
        </div>
        <div
          class="rounded-lg flex flex-col w-full justify-between bg-white px-4 py-6 h-46"
        >
          <img src="@/assets/icons/pos.png" alt="" width="52" height="52" />
          <p class="text-5xl text-center text-[#216C63]">4</p>
          <p class="text-xl text-right font-bold text-black">Terminals</p>
        </div>
        <div
          class="rounded-lg flex flex-col col-span-2 w-full justify-between bg-white px-4 py-6 h-46"
        >
          <div class="flex items-center justify-between text-2xl text-main">
            <img
              src="@/assets/icons/failed.png"
              alt=""
              width="52"
              height="52"
            />
            <p>96% Success rate</p>
          </div>
          <p class="text-7xl text-center text-red">4</p>
          <p class="text-xl text-right font-bold text-black">
            Failed Transactions
          </p>
        </div>
      </div>
    </div>
    <div class="md:ml-64 p-6" v-if="tile == 4" id="order-history">
      <section class="head dark:text-white">
        <h1 class="text-5xl p-6">This is your Order History</h1>
        <div class="p-6">
          <div class="flex w-full justify-center">
            <img
              src="../assets/svg/undraw_wishes_icyp.svg"
              alt=""
              width="300"
            />
          </div>
          <p class="text-center">
            You haven't bought anything yet. When you make a purchase or rent a
            terminal your orders will show up here
          </p>
        </div>
      </section>
      <div id="bot" class="w-[20rem] p-2 mx-auto my-9">
        <img src="../assets/svg/undraw_delivery_truck_vt6p.svg" alt="" />
        <!-- <img src="@/assets/svg/undraw_in_sync_re_jlqd.svg" alt=""> -->
      </div>
      <section class="orders">
        <div
          class="grid gap-3 sm:gap-9 lg:grid-cols-3 md:grid-cols-2 grid-cols-2 mx-3 my-9"
        >
          <div
            class="dark:bg-opacity-40 bg-white p-6 rounded-3xl dark:text-gray-50 w-full"
          >
            <img
              src="@/assets/images/products/Payment-Tablet-Terminal.png"
              alt=""
              class="sm:h-[150px] h-[90px] mx-auto w-[90px] md:w-[150px]"
            />
            <div class="">
              <p class="font-bold text-lg">{{}}</p>
              <div class="flex items-center space-x-3">
                <img
                  src="@/assets/icons/calendar-24.png"
                  class="h-[18px] w-[18px]"
                  alt=""
                />
                <p>{{}}</p>
              </div>
              <!-- <p>{{ orders.price }}</p>
              <p>{{ orders.qty }}</p> -->
              <br />
              <p class="text-md"></p>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div class="md:ml-64 p-6 w-4/5" v-if="tile == 3" id="transaction-history">
      <div class="md:hidden p-9 rounded-xl mx-auto bg-white">
        <h1 class="text-center text-3xl">Transaction History</h1>
        <div
          class="rounded-3xl shadow-sm justify-between px-3 py-6 bg-gray-100 m-3 flex"
        >
          <p>PURCHASE</p>
          <div class="">
            <P>Dano Milk 500g</P>
            <p class="text-[#8A8888]">15 Units</p>
          </div>
          <p class="text-green-700">₦130000</p>
        </div>
        <div
          class="rounded-3xl shadow-sm justify-between px-3 py-6 bg-gray-100 m-3 flex"
        >
          <p>TRANSFER</p>
          <div class="">
            <P>SUCCESS</P>
            <p class="text-[#8A8888]">1 units</p>
          </div>
          <p class="text-green-700">₦300</p>
        </div>
        <div
          class="rounded-3xl shadow-sm justify-between px-3 py-6 bg-gray-100 m-3 flex"
        >
          <p>TRANSFER</p>
          <div class="">
            <P>SUCCESS</P>
            <p class="text-[#8A8888]">1 units</p>
          </div>
          <p class="text-green-700">₦300</p>
        </div>
        <div
          class="rounded-3xl shadow-sm justify-between px-3 py-6 bg-gray-100 m-3 flex"
        >
          <p>TRANSFER</p>
          <div class="">
            <P>SUCCESS</P>
            <p class="text-[#8A8888]">1 units</p>
          </div>
          <p class="text-green-700">₦300</p>
        </div>
      </div>
      <div class="hidden md:block p-9 rounded-xl mx-auto bg-white">
        <h1 class="text-left p-3 text-3xl">Transaction History</h1>
        <!-- <div class="w-full bg-white">
          <table class="table-auto w-full">
            <thead class="border-b md:text-xl text-[#8A8888] border-[#C8C8C8]">
              <td>Description</td>
              <td>Quantity</td>
              <td>Date</td>
              <td>Transaction Type</td>
              <td>Amount</td>
            </thead>
            <tbody>
              <tr>
                <td class="m-0 p-3 border-b border-[#C8C8C8]">
                  <div class="flex space-x-3 items-center">
                    <img
                      src="@/assets/icons/pos-64.png"
                      alt=""
                      width="40"
                      height="40"
                      class="bg-gray-100 p-0.5 rounded-lg"
                    />
                    <p>Dano Milk</p>
                  </div>
                </td>
                <td class="p-3 border-b border-[#C8C8C8]">20</td>
                <td class="p-3 border-b border-[#C8C8C8]">2022-09-30 12:00</td>
                <td class="p-3 border-b border-[#C8C8C8]">PURCHASE</td>
                <td class="p-3 border-b border-[#C8C8C8] text-green-500">
                  3500
                </td>
              </tr>
              <tr>
                <td class="m-0 p-3 border-b border-[#C8C8C8]">
                  <div class="flex space-x-3 items-center">
                    <img
                      src="@/assets/icons/pos-64.png"
                      alt=""
                      width="40"
                      height="40"
                      class="bg-gray-100 p-0.5 rounded-lg"
                    />
                    <p>Dano Milk</p>
                  </div>
                </td>
                <td class="p-3 border-b border-[#C8C8C8]">10</td>
                <td class="p-3 border-b border-[#C8C8C8]">2022-09-30 12:00</td>
                <td class="p-3 border-b border-[#C8C8C8]">PURCHASE</td>
                <td class="p-3 border-b border-[#C8C8C8] text-green-500">
                  3500
                </td>
              </tr>
              <tr>
                <td class="m-0 p-3 border-b border-[#C8C8C8]">
                  <div class="flex space-x-3 items-center">
                    <img
                      src="@/assets/icons/send-64.png"
                      alt=""
                      width="40"
                      height="40"
                      class="bg-gray-100 p-0.5 rounded-lg"
                    />
                    <p>Akpos David</p>
                  </div>
                </td>
                <td class="p-3 border-b border-[#C8C8C8]">1</td>
                <td class="p-3 border-b border-[#C8C8C8]">2022-09-30 12:00</td>
                <td class="p-3 border-b border-[#C8C8C8]">TRANSFER</td>
                <td class="p-3 border-b border-[#C8C8C8] text-orange-500">
                  3500
                </td>
              </tr>
            </tbody>
          </table>
        </div> -->
        <VueTableLite
          :is-loading="table.isLoading"
          :columns="table.columns"
          :rows="table.rows"
          :total="table.totalRecordCount"
          :sortable="table.sortable"
          @do-search="doSearch"
          @is-finished="table.isLoading = false"
        />
      </div>
    </div>
    <div
      class="md:ml-64 p-6 w-4/5 flex flex-col space-y-3"
      v-if="tile == 2"
      id="inventory"
    >
      <div class="w-full p-9 rounded-xl mx-auto bg-white" id="overview">
        <h1 class="text-left uppercase text-3xl">Overview</h1>
        <!-- bg-gradient-to-bl shadow-lg col-span-2 to-[#F7A8C3] from-[#FFDFDF] -->
        <div class="flex space-x-6 w-4/5 mt-6 mx-auto">
          <div
            class="bg-white drop-shadow-lg rounded-lg flex flex-col justify-between bg-white w-max border border-2 border-[#C8C8C8] p-6 h-46"
          >
            <img
              src="@/assets/icons/warning.png"
              alt=""
              width="52"
              height="52"
            />
            <p class="text-xl text-left font-bold text-black">Low on Stock</p>
            <ul class="text-[#008C7C]">
              <li>Bread Loaf 30/50</li>
              <li>Heinz Mayonaise 10/30</li>
            </ul>
          </div>
          <div
            class="bg-white drop-shadow-lg rounded-lg flex flex-col justify-between bg-white w-max border border-2 border-[#C8C8C8] p-6 h-46"
          >
            <img
              src="@/assets/icons/good-quality.png"
              alt=""
              width="64"
              height="64"
            />
            <p class="text-xl text-left font-bold text-black">Fully Stocked</p>
            <ul class="text-[#008C7C]">
              <li>Bread Loaf 30/50</li>
              <li>Heinz Mayonaise 10/30</li>
            </ul>
          </div>
          <div
            class="bg-white drop-shadow-lg rounded-lg flex flex-col justify-between bg-white w-max border border-2 border-[#C8C8C8] p-6 h-46"
          >
            <img src="@/assets/icons/sold.png" alt="" width="52" height="52" />
            <p class="text-xl text-left font-bold text-black">Recent Sale</p>
            <ul class="text-[#008C7C]">
              <li>Bread Loaf 30/50</li>
              <li>Heinz Mayonaise 10/30</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="w-full p-9 rounded-xl mx-auto bg-white">
        <div id="header" class="flex justify-between p-3">
          <h1 class="text-left uppercase text-3xl">Inventory</h1>
          <button
            @click="show()"
            class="w-10 h-10 border-solid border-2 border-black dark:border-white dark:text-white text-black text-lg rounded-lg"
          >
            +
          </button>
        </div>
        <div
          class="flex border-solid justify-between items-center w-2/5 mx-auto rounded-md px-3 py-2 border-2 border-[#f2f2f2]"
        >
          <p>Filters</p>
          <div class="flex space-x-3">
            <a
              href=""
              class="border-solid w-min p-1 rounded-2xl border-2 border-[#E1E0E0]"
              >Successfull</a
            >
            <a
              href=""
              class="border-solid w-min p-1 rounded-2xl border-2 border-[#E1E0E0]"
              >Failed</a
            >
          </div>
        </div>
        <table class="table-auto w-full">
          <thead class="border-b md:text-xl border-[#C8C8C8]">
            <td class="border-b border-[#C8C8C8] md:p-4 text-[#8A8888]">
              Product Name
            </td>
            <td class="border-b border-[#C8C8C8] md:p-4 text-[#8A8888]">
              Stock
            </td>
            <td class="border-b border-[#C8C8C8] md:p-4 text-[#8A8888]">
              Cost Price(₦)
            </td>
            <td class="border-b border-[#C8C8C8] md:p-4 text-[#8A8888]">
              Unit Price(₦)
            </td>
            <td class="border-b border-[#C8C8C8] md:p-4 text-[#8A8888]">
              Actions
            </td>
          </thead>
          <tbody>
            <tr>
              <td class="border-b border-[#C8C8C8] md:p-3 mx-auto">
                Cream Cheese
              </td>
              <td class="border-b border-[#C8C8C8] md:p-3 mx-auto">500</td>
              <td class="border-b border-[#C8C8C8] md:p-3 mx-auto">200</td>
              <td class="border-b border-[#C8C8C8] md:p-3 mx-auto">500</td>
              <td class="border-b border-[#C8C8C8] md:p-3 mx-auto">
                <button @click="clear(index, items.price)" class="w-full">
                  <img
                    src="@/assets/icons/trash.svg"
                    class="mx-auto"
                    alt=""
                    width="15"
                    height="15"
                  />
                </button>
              </td>
            </tr>
            <tr>
              <td class="border-b border-[#C8C8C8] md:p-3 mx-auto">
                Cream Cheese
              </td>
              <td class="border-b border-[#C8C8C8] md:p-3 mx-auto">500</td>
              <td class="border-b border-[#C8C8C8] md:p-3 mx-auto">200</td>
              <td class="border-b border-[#C8C8C8] md:p-3 mx-auto">500</td>
              <td class="border-b border-[#C8C8C8] md:p-3 mx-auto">
                <button @click="clear(index, items.price)" class="w-full">
                  <img
                    src="@/assets/icons/trash.svg"
                    class="mx-auto"
                    alt=""
                    width="15"
                    height="15"
                  />
                </button>
              </td>
            </tr>
            <tr>
              <td class="border-b border-[#C8C8C8] md:p-3 mx-auto">
                Cream Cheese
              </td>
              <td class="border-b border-[#C8C8C8] md:p-3 mx-auto">500</td>
              <td class="border-b border-[#C8C8C8] md:p-3 mx-auto">200</td>
              <td class="border-b border-[#C8C8C8] md:p-3 mx-auto">500</td>
              <td class="border-b border-[#C8C8C8] md:p-3 mx-auto">
                <button @click="clear(index, items.price)" class="w-full">
                  <img
                    src="@/assets/icons/trash.svg"
                    class="mx-auto"
                    alt=""
                    width="15"
                    height="15"
                  />
                </button>
              </td>
            </tr>
            <tr>
              <td class="border-b border-[#C8C8C8] md:p-3 mx-auto">
                Cream Cheese
              </td>
              <td class="border-b border-[#C8C8C8] md:p-3 mx-auto">500</td>
              <td class="border-b border-[#C8C8C8] md:p-3 mx-auto">200</td>
              <td class="border-b border-[#C8C8C8] md:p-3 mx-auto">500</td>
              <td class="border-b border-[#C8C8C8] md:p-3 mx-auto">
                <button @click="clear(index, items.price)" class="w-full">
                  <img
                    src="@/assets/icons/trash.svg"
                    class="mx-auto"
                    alt=""
                    width="15"
                    height="15"
                  />
                </button>
              </td>
            </tr>
            <tr>
              <td class="border-b border-[#C8C8C8] md:p-3 mx-auto">
                Final Fantasy VII
              </td>
              <td class="border-b border-[#C8C8C8] md:p-3 mx-auto">500</td>
              <td class="border-b border-[#C8C8C8] md:p-3 mx-auto">1300</td>
              <td class="border-b border-[#C8C8C8] md:p-3 mx-auto">1700</td>
              <td class="border-b border-[#C8C8C8] md:p-3 mx-auto">
                <button @click="clear(index, items.price)" class="w-full">
                  <img
                    src="@/assets/icons/trash.svg"
                    class="mx-auto"
                    alt=""
                    width="15"
                    height="15"
                  />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
// import { useToast } from "vue-toastification";
import VueTableLite from "vue3-table-lite";
import { defineComponent, reactive } from "vue";
import axios from "axios";
export default {
  setup() {
    // Get toast interface
    // const toast = useToast();
    // return { toast };
    const table = reactive({
      isLoading: false,
      columns: [
        {
          label: "Description",
          field: "description",
          width: "3%",
          sortable: true,
          isKey: true,
        },
        {
          label: "Quantity",
          field: "quantity",
          width: "10%",
          sortable: true,
        },
        {
          label: "Date",
          field: "date",
          width: "15%",
          sortable: true,
        },
        {
          label: "Transaction Type",
          field: "type",
          width: "15%",
          sortable: true,
        },
        {
          label: "Amount",
          field: "amount",
          width: "15%",
          sortable: true,
        },
      ],
      rows: [
        {
          description: "LOREM ipsum",
          quantity: 1,
          date: "2022-10-17 11:27:13",
          type: "PURCHASE",
          amount: 3000,
        },
        {
          description: "LOREM ipsum",
          quantity: 1,
          date: "2022-10-17 11:27:13",
          type: "PURCHASE",
          amount: 3000,
        },
        {
          description: "LOREM ipsum",
          quantity: 1,
          date: "2022-10-17 11:27:13",
          type: "PURCHASE",
          amount: 3000,
        },
        {
          description: "LOREM ipsum",
          quantity: 1,
          date: "2022-10-17 11:27:13",
          type: "PURCHASE",
          amount: 3000,
        },
        {
          description: "LOREM ipsum",
          quantity: 1,
          date: "2022-10-17 11:27:13",
          type: "PURCHASE",
          amount: 3000,
        },
      ],
      totalRecordCount: 0,
      sortable: {
        order: "id",
        sort: "asc",
      },
    });
    const doSearch = (offset, limit, order, sort) => {
      table.isLoading = true;
      let url =
        "https://www.example.com/api/some_endpoint?offset=" +
        offset +
        "&limit=" +
        limit +
        "&order=" +
        order +
        "&sort=" +
        sort;
      axios.get(url).then((response) => {
        table.rows = response.rows;
        table.totalRecordCount = response.count;
        table.sortable.order = order;
        table.sortable.sort = sort;
      });
      // End use axios to get data from Server
    };
    const tableLoadingFinish = (elements) => {
      table.isLoading = false;
    };

    // Get data first
    doSearch(0, 10, "id", "asc");
    return {
      table,
      doSearch,
      tableLoadingFinish,
    };
  },
  data() {
    let newDate = new Date().toDateString();
    return {
      date: newDate.replace("2022", "22'"),
      showModal: false,
      isEditing: false,
      tile: 1,
      visible: false,
      editable1: false,
      editable2: false,
      editable3: false,
      tab: 1,
    };
  },
  components: { VueTableLite },
  computed: {
    // ...mapGetters({
    //   user: "getUserState",
    //   order: "getOrderState",
    // }),
  },
  methods: {
    show() {
      this.showModal = !this.showModal;
    },
    editing() {
      if (!this.isEditing) {
        // this.toast.warning("You are now editing your profile", {
        //   timeout: 1500,
        // });
        // // this.editing = !this.editing;
      } else {
        // this.toast.success("You are no longer editing your profile", {
        //   timeout: 1500,
        // });
      }
    },
  },
};
</script>
<style></style>
