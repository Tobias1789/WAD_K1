<template>
  <main class="center">
    <section class="card">
      <h2>Signup</h2>
      <form @submit.prevent="signup">
        <div class="row">
          <label for="email">Email</label>
          <input id="email" type="email" placeholder="Email" required />
        </div>
        <div class="row">
          <label for="password">Password</label>
          <input id="password" type="password" placeholder="Password" v-model="password" required />
        </div>
        <div class="error" v-if="errors.length > 0">
          <p>the password is not valid -</p>
          <p v-for="error in errors" :key="error">{{ error }}</p>
        </div>
        <button class="primary" type="submit">Signup</button>
      </form>
    </section>
  </main>
</template>

<script>
export default {
  name: "SignupView",
  data() {
    return {
      password: "",
      // conditions that the password did not satisfy (filled when Signup is clicked)
      errors: []
    }
  },
  methods: {
    signup() {
      const p = this.password
      const list = []
      if (p.length < 8 || p.length >= 15) {
        list.push("The password should be at least 8 characters and less than 15 characters")
      }
      if (!/[A-Z]/.test(p)) {
        list.push("Includes at least one uppercase alphabet character")
      }
      if ((p.match(/[a-z]/g) || []).length < 2) {
        list.push("Includes at least two lowercase alphabet characters")
      }
      if (!/[0-9]/.test(p)) {
        list.push("Includes at least one numeric value")
      }
      if (!/^[A-Z]/.test(p)) {
        list.push("It should start with an uppercase letter")
      }
      if (!p.includes("_")) {
        list.push("It should include the character _")
      }
      this.errors = list
    }
  }
}
</script>
