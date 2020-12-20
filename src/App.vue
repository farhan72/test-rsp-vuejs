<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
@import "https://use.fontawesome.com/releases/v5.2.0/css/all.css";
@import url("https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap");

html,
body {
  height: 100%;
  overflow-x: hidden;
}

#app {
  min-height: 100%;
  margin: 0;
  padding: 0;
}

.bg-none {
  background-color: transparent !important;
}

.cursor-pointer {
  cursor: pointer;
}

@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .col-ipad-12 {
    max-width: 100%;
    flex: 0 0 100%;
  }

  .col-ipad-10 {
    max-width: 50%;
    flex: 0 0 50%;
  }

  .top-ipad-12 {
    top: 12rem;
  }
}
</style>
