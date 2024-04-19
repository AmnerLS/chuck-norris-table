import { createApp } from 'vue'
import './style.css'
import App from './app.vue'
import PrimeVue from "primevue/config";

import 'primevue/resources/themes/md-light-indigo/theme.css';
import 'primevue/resources/primevue.min.css';

import 'primeicons/primeicons.css';

import 'primeflex/primeflex.css';
import Toolbar from "primevue/toolbar";
import Button from "primevue/button";
import Card from "primevue/card";
import SelectButton from "primevue/selectbutton";
import DataTable from "primevue/datatable";
import Column from "primevue/column";



const app=createApp(App);

app.use(PrimeVue, {ripple: true})
    .component('pv-card',Card)
    .component('pv-toolbar',Toolbar)
    .component('pv-button',Button)
    .component('pv-select-button',SelectButton)
    .component('pv-data-table',DataTable)
    .component('pv-column',Column);



app.mount('#app');
