<template>
  <VueTableLite
    :is-loading="table.isLoading"
    :columns="table.columns"
    :rows="table.rows"
    :total="table.totalRecordCount"
    :sortable="table.sortable"
    @do-search="doSearch"
    @is-finished="table.isLoading = false"
  />
</template>
<script>
import VueTableLite from "vue3-table-lite";
import { defineComponent, reactive } from "vue";
import axios from "axios";

export default {
  name: "App",
  components: { VueTableLite },
  setup() {
    // Init Your table settings
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
          id: 1,
          name: "",
          email: "dsdsdsds",
        },
        {
          id: 2,
          name: "",
          email: "dsdsdsds",
        },
        {
          id: 3,
          name: "",
          email: "dsdsdsds",
        },
        {
          id: 10,
          name: "",
          email: "dsdsdsds",
        },
      ],
      totalRecordCount: 0,
      sortable: {
        order: "id",
        sort: "asc",
      },
    });

    /**
     * Table search event
     */
    const doSearch = (offset, limit, order, sort) => {
      table.isLoading = true;

      // Start use axios to get data from Server
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
        // Point: your response is like it on this example.
        //   {
        //   rows: [{
        //     id: 1,
        //     name: 'jack',
        //     email: 'example@example.com'
        //   },{
        //     id: 2,
        //     name: 'rose',
        //     email: 'example@example.com'
        //   }],
        //   count: 2,
        //   ...something
        // }

        // refresh table rows
        table.rows = response.rows;
        table.totalRecordCount = response.count;
        table.sortable.order = order;
        table.sortable.sort = sort;
      });
      // End use axios to get data from Server
    };

    /**
     * Table search finished event
     */
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
};
</script>
