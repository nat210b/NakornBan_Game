<script setup lang="ts">
import { ref } from 'vue'
import MainPage from './menuPages/MainPage.vue'
import FriendRequest from './menuPages/FriendRequest.vue'

const currentPage = ref<'main' | 'friend-request'>('main')
const sidebarMenuItems = [
    { id: 'online', label: 'Online Officers', icon: 'group', count: 12, page: 'main' },
    { id: 'friend-request', label: 'Friend Requests', icon: 'person_add', page: 'friend-request' },
    { id: 'squad-chat', label: 'Squad Chat', icon: 'forum', page: null },
    { id: 'recent-reports', label: 'Recent Reports', icon: 'history_edu', page: null },
]

const handleMenuClick = (page: string | null) => {
    if (page && (page === 'main' || page === 'friend-request')) {
        currentPage.value = page
    }
}
</script>

<template>
    <div
        class="bg-[#101622] text-white overflow-hidden h-screen flex font-display selection:bg-[#1152d4] selection:text-white">
        <aside class="w-80 shrink-0 flex flex-col border-r border-[#282e39] bg-[#111318] h-full z-20">
            <div class="p-6 border-b border-[#282e39]">
                <div class="flex gap-4 items-center">
                    <div class="relative">
                        <div class="bg-center bg-no-repeat bg-cover rounded-full size-12 border-2 border-[#282e39]"
                            style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuD323Ekwo6pCJfAjDjjGVV9-FaB94r7YqFx23pIE708Etn5lncR-Z95-JCMK2UKcwXTWHRzoDZnJmz_Y8S25uam0j94Ei6UW7H6fJjxEZ6zUfmj-KdpFRxCPqdNhhgnBU2ubz_6I4bVb-A_1neMManmKxKU5d1T2gQnV1fYfJBU7LUQjUJtFb0chvERY7sveJhPJd4BLiHteQhCCq2TyUZRtgVlxzeMaizrW18GrqBLSkj1-9xlqfjYwSnQyMHmxdag3UUPonJsu0k')">
                        </div>
                        <div
                            class="absolute bottom-0 right-0 size-3 bg-green-500 border-2 border-[#111318] rounded-full">
                        </div>
                    </div>
                    <div class="flex flex-col">
                        <h1 class="text-white text-base font-bold leading-normal">Officer Somchai</h1>
                        <p class="text-[#d97706] text-xs font-medium uppercase tracking-wider">Rank: Inspector</p>
                    </div>
                </div>
                <div class="mt-6">
                    <button
                        class="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#1152d4] hover:bg-blue-600 transition-colors text-white text-sm font-bold leading-normal tracking-[0.015em] shadow-lg shadow-blue-900/20">
                        <span class="truncate">Invite Friend</span>
                    </button>
                </div>
            </div>
            <nav class="flex-1 overflow-y-auto p-4 flex flex-col gap-2">
                <button v-for="menu in sidebarMenuItems" :key="menu.id"
                    class="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition text-left" :class="menu.page && currentPage === menu.page
                        ? 'bg-[#282e39] text-white hover:bg-[#323946]'
                        : 'text-[#9da6b9] hover:bg-[#282e39] hover:text-white'
                        " type="button" @click="handleMenuClick(menu.page)">
                    <span class="material-symbols-outlined"
                        :class="menu.page && currentPage === menu.page ? 'text-white' : 'text-[#9da6b9]'">
                        {{ menu.icon }}
                    </span>
                    <p class="text-sm font-medium leading-normal flex-1">{{ menu.label }}</p>
                    <span v-if="menu.count"
                        class="bg-green-900 text-green-300 text-[10px] font-bold px-1.5 py-0.5 rounded">
                        {{ menu.count }}
                    </span>
                </button>
                <div class="my-2 border-t border-[#282e39]"></div>
                <p class="px-3 text-xs font-bold text-[#555f71] uppercase tracking-wider mb-1">System</p>
                <div
                    class="flex items-center gap-3 px-3 py-2 rounded-lg text-[#9da6b9] hover:bg-[#282e39] hover:text-white cursor-pointer transition">
                    <span class="material-symbols-outlined">settings</span>
                    <p class="text-sm font-medium leading-normal">Settings</p>
                </div>
            </nav>
            <div class="p-4 border-t border-[#282e39] text-center">
                <p class="text-[#555f71] text-xs">Bangkok Precinct v2.4.0</p>
            </div>
        </aside>

        <div class="flex-1 flex flex-col min-w-0 bg-[#101622] relative">
            <div class="absolute inset-0 opacity-[0.03]"
                style="background-image: radial-gradient(#ffffff 1px, transparent 1px); background-size: 24px 24px">
            </div>

            <header
                class="h-20 flex items-center justify-between px-8 border-b border-[#282e39] bg-[#111318]/90 backdrop-blur-sm z-10">
                <div class="flex items-center gap-4">
                    <div class="size-10 flex items-center justify-center bg-[#282e39] rounded-lg text-[#d97706]">
                        <span class="material-symbols-outlined text-3xl">policy</span>
                    </div>
                    <div>
                        <h2 class="text-white text-lg font-bold leading-tight tracking-[-0.015em]">CS Files: Bangkok
                        </h2>
                        <div class="flex gap-4 mt-0.5">
                            <a class="text-white text-xs font-medium hover:text-[#1152d4] transition-colors border-b border-[#1152d4]"
                                href="#">Lobby</a>
                            <a class="text-[#9da6b9] text-xs font-medium hover:text-white transition-colors"
                                href="#">Leaderboard</a>
                            <a class="text-[#9da6b9] text-xs font-medium hover:text-white transition-colors"
                                href="#">Rules</a>
                        </div>
                    </div>
                </div>
                <div class="flex items-center gap-4">
                    <div class="relative group">
                        <div
                            class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-[#9da6b9] group-focus-within:text-white">
                            <span class="material-symbols-outlined text-[20px]">search</span>
                        </div>
                        <input
                            class="bg-[#282e39] border-none text-white text-sm rounded-lg block w-64 pl-10 p-2.5 focus:ring-1 focus:ring-[#1152d4] placeholder-[#555f71]"
                            placeholder="Search Case ID or Name..." type="text" />
                    </div>
                    <button
                        class="flex items-center justify-center bg-[#1152d4] hover:bg-blue-600 text-white rounded-lg h-10 px-4 gap-2 transition-all shadow-lg shadow-blue-900/20">
                        <span class="material-symbols-outlined text-[20px]">add_circle</span>
                        <span class="text-sm font-bold">Create Case</span>
                    </button>
                    <button
                        class="flex items-center justify-center bg-[#282e39] hover:bg-[#323946] text-white rounded-lg size-10 transition-colors relative">
                        <span class="material-symbols-outlined text-[20px]">notifications</span>
                        <span
                            class="absolute top-2.5 right-2.5 size-2 bg-red-500 rounded-full border border-[#282e39]"></span>
                    </button>
                </div>
            </header>

            <MainPage v-if="currentPage === 'main'" />
            <FriendRequest v-else-if="currentPage === 'friend-request'" />
        </div>
    </div>
</template>

<style scoped>
:global(body) {
    font-family: 'Public Sans', sans-serif;
}

:global(::-webkit-scrollbar) {
    width: 8px;
    height: 8px;
}

:global(::-webkit-scrollbar-track) {
    background: #101622;
}

:global(::-webkit-scrollbar-thumb) {
    background: #282e39;
    border-radius: 4px;
}

:global(::-webkit-scrollbar-thumb:hover) {
    background: #374151;
}

.font-display {
    font-family: 'Public Sans', sans-serif;
}
</style>
