<template>
  <main class="center">
    <section class="card">
      <h2>Signup</h2>
      <form @submit.prevent>
        <div class="row">
          <label for="email">Email</label>
          <input id="email" type="email" placeholder="Email" required />
        </div>
        <div class="row">
          <label for="password">Password</label>
          <input id="password" type="password" placeholder="Password" required />
        </div>
        <button class="primary" type="submit">Signup</button>
      </form>
    </section>
  </main>
</template>

<script>
export default {
  name: "SignupView"
}
</script>