<script setup lang="ts">
const requests = [
    {
        id: 'RT9942',
        name: 'Chaiyong S.',
        quote: 'Ready to serve the precinct.',
        specialization: 'Ballistics Expert',
        image:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuAum2ya01ua_QSVvAA1V-TRnLFG1JX9bndCRv3a4jdE3EpFtImSQYxX_vhTBD-FzbFtE1noFIlb4H6a1scc7Sin6a0bCoy0eqVQZfA3rX9CXvPMXHDdTwhUqxxWOJ5Xp4-H2nowt0yehin7-cnWcZbs_s2BJEG6810ekwahjKvSqkbJ0Oa8Q7VfKH1iqzN4HXZ7R5ppAAQbPXMk0E8H03jaSZTAuSLX5uY_FSSz1E2Iv2ga2dq-1yec7fxze3YBXjERdeqOu5GZQQ0',
    },
    {
        id: 'RT1205',
        name: 'Areeya P.',
        quote: 'Transfer from Chiang Mai unit.',
        specialization: 'Forensic Analyst',
        image:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuBGHWqHqCBvYKK-vxLHsPO81_roBA9HBQ7aI_-jyQHOypLDEF9aiDXsT1DkWhnwvFn73zyMRdJyt7vPOAyWqySK781QD46e-Ajs3Y-tB3_bnkd3ftdna8QSJl7auO8CZ4Fg2L72Y8h7B43HlErNdhJxb36f78CqqofnKGWFZHnKvj5sDAywSw79ZsvIh1slmFgeYU9EPKczdhFybP2uu0JqgVEAvH0w2aPHnrhh2VI6pdhIdMX2sCSx3uBjcMcbX8yBVjmQ6rCmEtY',
    },
    {
        id: 'RT8821',
        name: 'Viroj K.',
        quote: 'Looking for a strong squad.',
        specialization: 'Field Investigator',
        image:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuDhjXk1RTnTO_lWGqYb2z_mcvNzuqQypSneCyS4LTjKDapJNikSNJJUYbvskNo6pUrZWyOd9wCQysLliG3MAiKkRy5yUBGQfL5MqOp7F7RTqrwlyVAnlQOBfQdPHf0jFbKkizOfucWgIJtny4tPjYmzy1jiD4_-88Oi_aIn7GQCKvyXH9NiMxjOeRNszVNgLTS9-aHjdEuwLqEqOMK434hlfYwzuqCCmLXmO8GSq_j42yrfMIRRaLdY6YgCQrpBWQoPKcmN_Uxdm5Y',
    },
    {
        id: 'RT0056',
        name: 'Nattapol J.',
        quote: 'Cyber-crime specialist.',
        specialization: 'Intelligence Div.',
        image:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuAcb3qXeCZMYcTKL6W77969Ft2Jf1iYeHz8yc-DVoyH1uviC0BAl085QtpTWCbfAD0_FLVjIiZDtWBVEeILLXqs_oJQP9BBSrmoI7BJ9R1jBQhK8VsmRyxePkjrhsgEn4zP3LmMLgSwMv954AVtTiPdu0BqDzOO742Yq5iTQuOOjMCQ-tLRVoIFwemC9UQ_ztY3M687cL6M0UIqJWHWEzoceHsdqLgyjBJMbrLb6Ew0OHMYp6ffQ4UiOHHNoCCVozX4DkrQM3h5w2g',
    },
]
</script>

<template>
    <main class="flex-1 overflow-y-auto p-12 relative z-0">
        <div class="max-w-6xl mx-auto">
            <div class="mb-10 flex flex-col gap-2">
                <div class="flex items-center gap-3">
                    <div class="h-8 w-1.5 bg-[#d97706]"></div>
                    <h1 class="text-white text-4xl font-bold tracking-tight">Pending Reinforcements</h1>
                </div>
                <p class="text-[#9da6b9] text-base ml-4">
                    The following officers are requesting transfer to your squad. Review their credentials carefully.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <article v-for="request in requests" :key="request.id"
                    class="p-6 rounded-lg shadow-2xl flex flex-col gap-4 transform hover:-translate-y-1 transition-all bg-[#141b26] border border-[#d97706]/20">
                    <div class="flex gap-4">
                        <div
                            class="size-24 bg-gray-900 border border-[#d97706]/40 rounded shadow-inner overflow-hidden shrink-0">
                            <img :alt="`${request.name} mugshot`"
                                class="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all"
                                :src="request.image" />
                        </div>
                        <div class="flex flex-col justify-center">
                            <span class="text-[10px] font-bold text-[#d97706] uppercase tracking-widest mb-1">
                                Badge ID #{{ request.id }}
                            </span>
                            <h3 class="text-xl font-bold text-white leading-none">{{ request.name }}</h3>
                            <p class="text-xs text-[#9da6b9] mt-2 italic">"{{ request.quote }}"</p>
                        </div>
                    </div>
                    <div class="h-px bg-[#d97706]/20 my-2"></div>
                    <div class="flex justify-between items-center">
                        <div class="flex flex-col">
                            <span class="text-[9px] uppercase font-bold text-[#555f71]">Specialization</span>
                            <span class="text-xs font-semibold text-white">{{ request.specialization }}</span>
                        </div>
                        <div class="flex gap-2">
                            <button
                                class="size-10 flex items-center justify-center rounded-lg bg-green-900/30 hover:bg-green-600 border border-green-500/30 text-green-400 hover:text-white transition-all shadow-lg"
                                title="Approve Transfer">
                                <span class="material-symbols-outlined">handshake</span>
                            </button>
                            <button
                                class="size-10 flex items-center justify-center rounded-lg bg-red-900/30 hover:bg-red-600 border border-red-500/30 text-red-400 hover:text-white transition-all shadow-lg"
                                title="Deny Request">
                                <span class="material-symbols-outlined">close</span>
                            </button>
                        </div>
                    </div>
                </article>

                <div
                    class="bg-black/20 border-2 border-dashed border-[#d97706]/20 rounded-lg flex flex-col items-center justify-center p-8 gap-4 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
                    <div
                        class="size-16 rounded-full border-2 border-[#d97706]/40 flex items-center justify-center text-[#d97706]">
                        <span class="material-symbols-outlined text-4xl">person_search</span>
                    </div>
                    <div class="text-center">
                        <p class="text-white font-bold">Search Local Directory</p>
                        <p class="text-xs text-[#555f71]">Invite other officers from the precinct</p>
                    </div>
                </div>
            </div>

            <div class="mt-16 p-6 bg-[#3b0f17]/30 border border-[#d97706]/20 rounded-lg flex items-start gap-4">
                <span class="material-symbols-outlined text-[#d97706] text-3xl">info</span>
                <div class="flex flex-col gap-1">
                    <h4 class="text-white font-bold text-sm uppercase tracking-wide">Bureau Regulation 11-B</h4>
                    <p class="text-xs text-[#9da6b9] max-w-2xl">
                        All reinforcement requests must be processed within 48 hours of filing. Approved officers will
                        gain
                        immediate access to current active case files and squad communications.
                    </p>
                </div>
            </div>
        </div>
    </main>
</template>
