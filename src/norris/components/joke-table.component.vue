<script>


export default {
  name: "joke-table",
  props: {jokes:Array}
}
</script>

<template>
  <pv-data-table :value="jokes" stripedRows tableStyle="min-width: 50rem" autoLayout class="p-datatable-responsive bg-white" >
    <pv-column field="id" header="ID"></pv-column>
    <pv-column field="category" header="Category"></pv-column>
    <pv-column field="iconUrl" header="Icon Url"></pv-column>
    <pv-column field="value" header="Value"></pv-column>
  </pv-data-table>
</template>

<style scoped>

</style>