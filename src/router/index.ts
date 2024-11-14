import { createRouter, createWebHistory } from "vue-router"
import CreateEntryView from "../views/entries/CreateEntryView.vue"
import ShowEntriesView from "../views/entries/ShowEntriesView.vue"

const routes = [
    { path: '/', component: CreateEntryView },
    { path: '/new-entry', component: CreateEntryView },
    { path: '/entries-list', component: ShowEntriesView }
]

const router = createRouter({
    history: createWebHistory('/Shapp/'),
    routes
})

export default router