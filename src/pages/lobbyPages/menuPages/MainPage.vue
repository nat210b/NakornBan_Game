<script setup lang="ts">
const cases = [
  {
    id: 402,
    title: 'Silent Temple',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCt1UHrpyfvJlTGK68-8AAIFbZSxqIpgCTV4X530M7GS58CO8-k5W_jfjnAOJkAxeXG30ZUZ6iyK3vYM7xE79fHAU4jGbgap1nKKd7wNC9jIVND4IcQq1YI0I3wsJ6XA0mE0PLgfcb752b8H7a9KyRKrqS5JlUWWbG1CEnZ3C_Xu7RIGWd3cPX6n8hJyA5fEMqt3rkM8kE7USIKfmtmbzFYWwipHE2Xf7YGmG5oL1wjGLGYobLREUdTsR-7vq07XAxijDFuuFgAjdc',
    playersCurrent: 5,
    playersMax: 6,
    progress: 83,
    statusLabel: 'STARTING SOON',
    statusBadgeClass: 'bg-green-500/10 text-green-400 border border-green-500/20',
    progressClass: 'bg-green-500',
    cardClass: 'bg-[#1a2230] border-[#282e39] hover:border-[#1152d4]/50',
    titleClass: 'text-white group-hover:text-[#1152d4]',
    isRanked: false,
    isFull: false,
  },
  {
    id: 403,
    title: 'Night Market',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCQmxFEHJxTVTm0EiKJOqek0GDcYkAo-Lh4kRhDu_3IRFtHzp3Lj3-r8fcrPxZ4OX_YwzIDsFGusRCa7k750mB86bCxafGR0ddrPq7iB9G_QBwjGuh5RQk3Qe_oQiFNuxdeg7C9OP70t963Rtahf4zDqv0X1aMlajoVQOzHWvbhJdVFRoELc2u2Yy1kjMjKatyWSQdnBsisowCH4YcHeOE_-3T-m4n6_q-gL5wcM-prWjWYNcMl-5IZvu3prOBEWrjCWpb9CGOFPO8',
    playersCurrent: 2,
    playersMax: 8,
    progress: 25,
    statusLabel: 'WAITING',
    statusBadgeClass: 'bg-[#282e39]/80 text-[#9da6b9] border border-[#3f4755]',
    progressClass: 'bg-[#1152d4]',
    cardClass: 'bg-[#1a2230] border-[#282e39] hover:border-[#1152d4]/50',
    titleClass: 'text-white group-hover:text-[#1152d4]',
    isRanked: false,
    isFull: false,
  },
  {
    id: 404,
    title: 'River Body',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDLkN-aKWGp_c5hrLRZWgz5U1xtzCOCI3K_ScOSCLl3SznTfKHo1p8oKIiRrlhvDuqQ5IlglgjpdbDxSBpX8dUn4M3IWSTgEOoc8MVjL_yVEVOxaGlrmHaKo_PLadfp3iKR5Roj7Bw5kOCvMMLeUfPwa32CYXF9a0YU2lEOZX-ImJ8CKO1BqaeIKo2uMwyneNv7ZwZkTKORpDySa3SELxbeetqNbDBdrTE15RUDiRlBvHSJ3VtfzENxknIJmWTF0wlYuSlU4bhNsBI',
    playersCurrent: 6,
    playersMax: 6,
    progress: 100,
    statusLabel: 'IN PROGRESS',
    statusBadgeClass: 'bg-red-500/10 text-red-400 border border-red-500/20',
    progressClass: 'bg-[#282e39]',
    cardClass: 'bg-[#1a2230] border-[#282e39]',
    titleClass: 'text-white',
    isRanked: false,
    isFull: true,
  },
  {
    id: 405,
    title: 'Tuk-Tuk Chase',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAmOhHu1KKoBy_njedSsPdmBthdYQCOI7RCGs2q7m2-JtY-_hkPARFDkDjLQERchl87-empmlVL0WddC-vxBalgS014vlQRSAhyKrUeSabiLG5J6-NE6tCzMTYdpRWi3qS2f9Dc4pPK2612lYM1NEes8joQVI2ewnA_6iDH4jIjKYvoxoRAYAY9Ln8pniVckF8yq1rbY6_DLj34zaMU4c-YFWS0beMtWI55GmXgWI5YRxj-lTcAD7Da8OgEcMnGd-cR3xu4VIs0C3w',
    playersCurrent: 1,
    playersMax: 6,
    progress: 15,
    statusLabel: 'WAITING',
    statusBadgeClass: 'bg-[#282e39]/80 text-[#9da6b9] border border-[#3f4755]',
    progressClass: 'bg-[#1152d4]',
    cardClass: 'bg-[#1a2230] border-[#282e39] hover:border-[#1152d4]/50',
    titleClass: 'text-white group-hover:text-[#1152d4]',
    isRanked: false,
    isFull: false,
  },
  {
    id: 406,
    title: 'Missing Tourist',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB9Z7ydqU_RpVfB0h5Vwu-qKvzJX14aenhuMCVfgC8SmoBsapLrkokKEjLgqwnW31pyWDUUOOadrKRLR-O1rZTZ44CdJFyyZEQczL012xE2H8clrl1ayHIJvZqPQYaAibFmPtQh0wevAot_3D_SrLNM9Y_d7rfSywvlc8JOJ8qgf6kcqARZmGrsyddoas0hZRHH6aSFu8DSfDxQyBxRfRU2o0Tc0CrfFg7mdwHsFpFDXajur2M1eE00emxgyer2dMUMScOTwc78Obg',
    playersCurrent: 4,
    playersMax: 6,
    progress: 66,
    statusLabel: 'STARTING',
    statusBadgeClass: 'bg-green-500/10 text-green-400 border border-green-500/20',
    progressClass: 'bg-green-500',
    cardClass: 'bg-[#1a2230] border-[#282e39] hover:border-[#1152d4]/50',
    titleClass: 'text-white group-hover:text-[#1152d4]',
    isRanked: false,
    isFull: false,
  },
  {
    id: 407,
    title: 'Jade Heist',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCx2cr5dkuWSjpKi9CiKjJ4JeE6V3kJqLfUjHR7bzHi-Vr3nE9okQ_Y49tVuNZJeSN66qpxp4RtPLCuKbsAB67AGidWFjeWTV_4Ic3mdewu7pRINKVVtm-ZHwM-gebws4R8f6KxsGrZqkX1vzUYxaXlo7xNWqUbkiC9i50JSpwAyeY0nRT3mwyjXFjyhHXSW-2R5HayUqtXYFgk6rGGt9FJZTAXzee8MOiWuvXp4eednOjepzoIMebMDy3sNZsUA5jpKarYr_QPzto',
    playersCurrent: 3,
    playersMax: 8,
    progress: 37,
    statusLabel: 'WAITING',
    statusBadgeClass: 'bg-[#282e39]/80 text-[#9da6b9] border border-[#3f4755]',
    progressClass: 'bg-[#d97706]',
    cardClass: 'bg-[#1a2230] border-[#d97706]/30 hover:border-[#d97706]',
    titleClass: 'text-[#d97706] group-hover:text-white',
    isRanked: true,
    isFull: false,
  },
]
</script>

<template>
  <main class="flex-1 overflow-y-auto p-8 relative z-0">
    <div class="max-w-7xl mx-auto flex flex-col gap-6">
      <div class="flex flex-col gap-1">
        <h1 class="text-white text-3xl font-bold leading-tight">Active Investigations</h1>
        <p class="text-[#9da6b9] text-sm">Select a case file to join the briefing.</p>
      </div>

      <div class="flex flex-wrap gap-3 pb-2 border-b border-[#282e39]/50">
        <button
          class="flex h-9 items-center justify-center gap-x-2 rounded-full bg-[#1152d4] text-white px-4 hover:bg-blue-600 transition-colors shadow-lg shadow-blue-900/20"
        >
          <span class="material-symbols-outlined text-[18px]">grid_view</span>
          <span class="text-sm font-bold">All Cases</span>
        </button>
        <button
          class="flex h-9 items-center justify-center gap-x-2 rounded-full bg-[#282e39] text-[#9da6b9] px-4 hover:bg-[#323946] hover:text-white transition-colors border border-transparent hover:border-[#3f4755]"
        >
          <span class="material-symbols-outlined text-[18px]">star</span>
          <span class="text-sm font-medium">Beginner</span>
        </button>
        <button
          class="flex h-9 items-center justify-center gap-x-2 rounded-full bg-[#282e39] text-[#9da6b9] px-4 hover:bg-[#323946] hover:text-white transition-colors border border-transparent hover:border-[#3f4755]"
        >
          <span class="material-symbols-outlined text-[18px]">local_police</span>
          <span class="text-sm font-medium">Advanced</span>
        </button>
        <button
          class="flex h-9 items-center justify-center gap-x-2 rounded-full bg-[#282e39] text-[#d97706] px-4 hover:bg-[#323946] hover:text-white transition-colors border border-[#d97706]/20 hover:border-[#d97706]"
        >
          <span class="material-symbols-outlined text-[18px]">trophy</span>
          <span class="text-sm font-medium">Ranked</span>
        </button>
        <div class="ml-auto flex items-center gap-2 text-sm text-[#555f71]">
          <span>Sort by:</span>
          <select class="bg-transparent border-none text-[#9da6b9] font-medium focus:ring-0 cursor-pointer p-0 pr-6">
            <option>Newest</option>
            <option>Vacancies</option>
          </select>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <article
          v-for="caseItem in cases"
          :key="caseItem.id"
          class="group relative rounded-xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50 flex flex-col"
          :class="[caseItem.cardClass, caseItem.isFull ? 'cursor-not-allowed opacity-75 grayscale-[0.5]' : 'cursor-pointer']"
        >
          <div
            v-if="caseItem.isRanked"
            class="absolute top-0 left-0 bg-[#d97706] text-[#101622] text-[10px] font-bold px-2 py-1 rounded-br-lg z-20"
          >
            RANKED
          </div>
          <div class="absolute top-3 right-3 z-10">
            <span class="text-xs font-bold px-2 py-1 rounded backdrop-blur-md" :class="caseItem.statusBadgeClass">
              {{ caseItem.statusLabel }}
            </span>
          </div>
          <div class="w-full aspect-4/3 bg-cover bg-center relative" :style="{ backgroundImage: `url('${caseItem.image}')` }">
            <div class="absolute inset-0 bg-liner-to-t from-[#1a2230] to-transparent"></div>
          </div>
          <div class="p-4 flex flex-col gap-2 flex-1">
            <div class="flex justify-between items-start">
              <h3 class="text-lg font-bold transition-colors" :class="caseItem.titleClass">
                {{ caseItem.title }}
              </h3>
              <p class="text-[#555f71] text-xs font-mono">#{{ caseItem.id }}</p>
            </div>
            <div class="flex items-center gap-2 text-sm mt-auto" :class="caseItem.isFull ? 'text-red-400' : 'text-[#9da6b9]'">
              <span class="material-symbols-outlined text-[16px]">{{ caseItem.isFull ? 'lock' : 'group' }}</span>
              <span>{{ caseItem.isFull ? 'FULL' : `${caseItem.playersCurrent}/${caseItem.playersMax} Players` }}</span>
            </div>
            <div class="w-full bg-[#282e39] h-1.5 rounded-full mt-2 overflow-hidden">
              <div class="h-full rounded-full" :class="caseItem.progressClass" :style="{ width: `${caseItem.progress}%` }"></div>
            </div>
          </div>
        </article>

        <div
          class="group relative bg-[#1a2230]/50 rounded-xl overflow-hidden border border-dashed border-[#282e39] hover:border-[#1152d4] hover:bg-[#1a2230] transition-all duration-300 cursor-pointer flex flex-col items-center justify-center min-h-75"
        >
          <div class="flex flex-col items-center gap-3 text-[#555f71] group-hover:text-[#1152d4] transition-colors">
            <div
              class="size-16 rounded-full bg-[#111318] border border-[#282e39] flex items-center justify-center group-hover:scale-110 transition-transform"
            >
              <span class="material-symbols-outlined text-4xl">add</span>
            </div>
            <h3 class="text-base font-bold">Open New Case File</h3>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
