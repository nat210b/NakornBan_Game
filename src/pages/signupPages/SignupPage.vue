<script setup lang="ts"></script>

<template>
  <section class="page">
    <div class="scene">
      <header class="page__header">
        <p class="page__eyebrow">CS-Files</p>
        <h1 class="page__title">Case Intake</h1>
        <p class="page__subtitle">Register as an investigator to access the archive.</p>
      </header>

      <form class="card" aria-label="Signup form">
        <label class="field">
          <span class="field__label">Investigator name</span>
          <input class="field__input" type="text" name="name" autocomplete="name" required />
        </label>

        <label class="field">
          <span class="field__label">Case ID (Email)</span>
          <input class="field__input" type="email" name="email" autocomplete="email" required />
        </label>

        <label class="field">
          <span class="field__label">Cipher key</span>
          <input class="field__input" type="password" name="password" autocomplete="new-password" />
        </label>

        <button class="button" type="submit">Open Case File</button>
      </form>
    </div>
  </section>
</template>

<style scoped>
.page {
  min-height: 100vh;
  padding: 64px 20px;
  display: grid;
  place-items: center;
  background:
    radial-gradient(circle at 20% 20%, rgba(255, 214, 134, 0.16), transparent 50%),
    radial-gradient(circle at 80% 0%, rgba(96, 140, 172, 0.2), transparent 45%),
    linear-gradient(135deg, #121111 0%, #1e1b18 50%, #24211d 100%);
  color: #f5efe8;
  font-family: 'Bitter', 'Georgia', serif;
  position: relative;
  overflow: hidden;
}

.scene {
  width: min(440px, 92vw);
  display: grid;
  gap: 24px;
  position: relative;
  z-index: 1;
}

.page::before {
  content: '';
  position: absolute;
  inset: 0;
  background: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"320\" height=\"320\" viewBox=\"0 0 320 320\"><g fill=\"none\" stroke=\"%233a342e\" stroke-width=\"1\" stroke-opacity=\"0.4\"><path d=\"M0 160h320M160 0v320\"/></g></svg>')
    center/320px 320px;
  opacity: 0.2;
  pointer-events: none;
}

.page__header {
  text-align: center;
}

.page__eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.32em;
  font-size: 0.7rem;
  margin: 0 0 10px;
  color: #d8c8b4;
}

.page__title {
  font-size: clamp(2.1rem, 6vw, 3rem);
  margin: 0 0 10px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.page__subtitle {
  margin: 0;
  color: #c8b8a5;
}

.card {
  padding: 28px;
  border-radius: 18px;
  background: rgba(18, 16, 14, 0.86);
  border: 1px solid rgba(210, 187, 158, 0.3);
  box-shadow:
    0 24px 50px rgba(0, 0, 0, 0.45),
    inset 0 0 0 1px rgba(255, 232, 200, 0.08);
  display: grid;
  gap: 18px;
}

.field {
  display: grid;
  gap: 6px;
}

.field__label {
  font-size: 0.85rem;
  color: #d3c2ad;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.field__input {
  padding: 12px 14px;
  border-radius: 12px;
  border: 1px solid rgba(210, 187, 158, 0.5);
  background: rgba(28, 24, 20, 0.8);
  color: #f8f2ea;
  font-size: 1rem;
}

.field__input:focus {
  outline: 2px solid #cda76a;
  border-color: transparent;
  box-shadow: 0 0 0 4px rgba(205, 167, 106, 0.2);
}

.button {
  padding: 12px 16px;
  border-radius: 999px;
  border: none;
  background: linear-gradient(120deg, #cda76a 0%, #a2763c 100%);
  color: #1f1b16;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
}

.button:hover {
  filter: brightness(1.08);
}
</style>
