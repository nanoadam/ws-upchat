<template>
  <router-view />
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Jura:wght@300;400;500;600;700&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Jura', sans-serif;
  background: black;
  color: white;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin-top: 0.5rem;
  margin-bottom: 1rem;
}

p {
  display: block;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

label {
  display: block;
  padding-bottom: 0.4rem;
}

.form-group {
  margin: 1rem 0;
}

.card {
  margin: 0.5rem;
  background: #333;
  padding: 1rem;
}

input[type='text'],
input[type='password'] {
  width: 100%;
  padding: 0.5rem 1rem;
  border: none;
}

input:focus {
  box-shadow: 4px 4px 4px blueviolet;
}

button,
a,
.btn {
  width: 100%;
  display: block;
  padding: 0.5rem 1rem;
  border: none;
  background: #222;
  color: white;
}
</style>
