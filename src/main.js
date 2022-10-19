import {createApp} from 'vue'
import App from './App.vue'
import './assets/main.css'
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import InputNumber from 'primevue/inputnumber';
import InputMask from 'primevue/inputmask';
import Dropdown from 'primevue/dropdown';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
//icons
import router from "./router";
import Toolbar from "primevue/toolbar";
import Toast from "primevue/toast";
import Sidebar from "primevue/sidebar";
import Card from "primevue/card";
import Dialog from "primevue/dialog";

import i18n from './locales/i18n';
import PrimeVue from 'primevue/config';
//import { createI18n } from 'vue-i18n'; //importa
import 'primevue/resources/themes/saga-blue/theme.css' //theme
import 'primevue/resources/primevue.min.css' //core css
import 'primeicons/primeicons.css'
import '/node_modules/primeflex/primeflex.css'
import OrderList from "primevue/orderlist";


const app = createApp(App);

app.use(PrimeVue);
app.use(i18n); //inject
app.use(router);

app.component('pv-button', Button);
app.component('pv-input-text', InputText);
app.component('pv-input-number', InputNumber);
app.component('pv-input-mask', InputMask);
app.component('pv-dropdown', Dropdown);
app.component("pv-data-table",DataTable);
app.component("pv-column",Column);
app.component("pv-toolbar",Toolbar);
app.component("pv-toast",Toast);
app.component("pv-sidebar", Sidebar);
app.component("pv-card", Card);
app.component("pv-dialog", Dialog);
app.component("pv-orderlist", OrderList);

app.mount('#app')
