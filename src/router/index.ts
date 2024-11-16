import { createRouter, createWebHistory } from "vue-router"
import Menu from "../views/Menu.vue"
import CreateEntryView from "../views/entries/CreateEntryView.vue"
import ShowEntriesView from "../views/entries/ShowEntriesView.vue"
import SettlementView from "../views/entries/SettlementView.vue"

const routes = [
    { path: '/', component: Menu },
    { path: '/new-entry', component: CreateEntryView },
    { path: '/entries-list', component: ShowEntriesView },
    { path: '/settlement', component: SettlementView }
]

const router = createRouter({
    history: createWebHistory('/Shapp/'),
    routes
})

export default router