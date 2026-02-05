<script setup lang="ts"></script>

<template>
  <section class="page">
    <header class="page__header">
      <p class="page__eyebrow">Welcome back</p>
      <h1 class="page__title">Login</h1>
      <p class="page__subtitle">Sign in to continue to your account.</p>
    </header>

    <form class="card" aria-label="Login form">
      <label class="field">
        <span class="field__label">Email</span>
        <input class="field__input" type="email" name="email" autocomplete="email" required />
      </label>

      <label class="field">
        <span class="field__label">Password</span>
        <input
          class="field__input"
          type="password"
          name="password"
          autocomplete="current-password"
          required
        />
      </label>

      <button class="button" type="submit">Sign in</button>
    </form>
  </section>
</template>

<style scoped>
.page {
  min-height: 100vh;
  padding: 56px 20px;
  display: grid;
  place-items: center;
  background: radial-gradient(circle at top, #f5f2ea 0%, #e9e3d8 45%, #d7cfc1 100%);
  color: #1f1b16;
  font-family: 'Bitter', 'Georgia', serif;
}

.page__header {
  text-align: center;
  margin-bottom: 28px;
}

.page__eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.16em;
  font-size: 0.75rem;
  margin: 0 0 8px;
}

.page__title {
  font-size: clamp(2rem, 5vw, 3rem);
  margin: 0 0 8px;
}

.page__subtitle {
  margin: 0;
  color: #4b4033;
}

.card {
  width: min(380px, 92vw);
  padding: 28px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.84);
  box-shadow: 0 20px 45px rgba(31, 27, 22, 0.18);
  display: grid;
  gap: 18px;
}

.field {
  display: grid;
  gap: 6px;
}

.field__label {
  font-size: 0.9rem;
  color: #42362b;
}

.field__input {
  padding: 12px 14px;
  border-radius: 12px;
  border: 1px solid #c7b7a5;
  background: #fffaf4;
  font-size: 1rem;
}

.field__input:focus {
  outline: 2px solid #a2763c;
  border-color: transparent;
}

.button {
  padding: 12px 16px;
  border-radius: 999px;
  border: none;
  background: #a2763c;
  color: #fffaf4;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
}

.button:hover {
  filter: brightness(1.05);
}
</style>
