<script setup lang="ts"></script>

<template>
  <section class="page">
    <header class="page__header">
      <p class="page__eyebrow">Join us</p>
      <h1 class="page__title">Create account</h1>
      <p class="page__subtitle">Set up your profile in a minute.</p>
    </header>

    <form class="card" aria-label="Signup form">
      <label class="field">
        <span class="field__label">Full name</span>
        <input class="field__input" type="text" name="name" autocomplete="name" required />
      </label>

      <label class="field">
        <span class="field__label">Email</span>
        <input class="field__input" type="email" name="email" autocomplete="email" required />
      </label>

      <label class="field">
        <span class="field__label">Password</span>
        <input class="field__input" type="password" name="password" autocomplete="new-password" />
      </label>

      <button class="button" type="submit">Create account</button>
    </form>
  </section>
</template>

<style scoped>
.page {
  min-height: 100vh;
  padding: 56px 20px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, #f7f0eb 0%, #efe1d6 45%, #dcc5b5 100%);
  color: #261a12;
  font-family: 'Playfair Display', 'Times New Roman', serif;
}

.page__header {
  text-align: center;
  margin-bottom: 28px;
}

.page__eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-size: 0.75rem;
  margin: 0 0 8px;
}

.page__title {
  font-size: clamp(2rem, 5vw, 3rem);
  margin: 0 0 8px;
}

.page__subtitle {
  margin: 0;
  color: #5a4538;
}

.card {
  width: min(420px, 92vw);
  padding: 28px;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 18px 40px rgba(38, 26, 18, 0.2);
  display: grid;
  gap: 18px;
}

.field {
  display: grid;
  gap: 6px;
}

.field__label {
  font-size: 0.9rem;
  color: #4b3629;
}

.field__input {
  padding: 12px 14px;
  border-radius: 12px;
  border: 1px solid #d1b9a6;
  background: #fff7f0;
  font-size: 1rem;
}

.field__input:focus {
  outline: 2px solid #b56842;
  border-color: transparent;
}

.button {
  padding: 12px 16px;
  border-radius: 999px;
  border: none;
  background: #b56842;
  color: #fff7f0;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
}

.button:hover {
  filter: brightness(1.05);
}
</style>
