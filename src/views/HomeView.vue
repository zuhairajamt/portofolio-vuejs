<script>

import projects from '../components/ProjectsComp.vue';

export default {
  name: 'HomePage',
  data() {
    return {
      projects
    };
  }
}
</script>

<template>
  <!-- Portfolio Section-->
  <section class="page-section portfolio" id="portfolio">
    <div class="container">
      <!-- Portfolio Section Heading-->
      <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
      <!-- Icon Divider-->
      <div class="divider-custom">
        <div class="divider-custom-line"></div>
        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
        <div class="divider-custom-line"></div>
      </div>
      <!-- Portfolio Grid Items-->
      <div class="row justify-content-center">
        <!-- Portfolio Item 1-->
          <div class="col-md-6 col-lg-4 mb-5" v-for="project in projects">
            <div class="portfolio-item mx-auto" data-bs-toggle="modal" :data-bs-target="project.target">
              <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                <div class="portfolio-item-caption-content text-center text-white"><i class="fas fa-plus fa-3x"></i>
                </div>
              </div>
              <img class="img-fluid" :src="project.img" alt="..." />
            </div>
          </div>
      </div>

    </div>
  </section>
  <!-- About Section-->
  <section class="page-section bg-primary text-white mb-0" id="about">
    <div class="container">
      <!-- About Section Heading-->
      <h2 class="page-section-heading text-center text-uppercase text-white">About</h2>
      <!-- Icon Divider-->
      <div class="divider-custom divider-light">
        <div class="divider-custom-line"></div>
        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
        <div class="divider-custom-line"></div>
      </div>
      <!-- About Section Content-->
      <div class="row">
        <div class="col-lg-4 ms-auto">
          <p class="lead">I like programming especially web and mobile programming, love to learn new things and
            challenges.</p>
        </div>
        <div class="col-lg-4 me-auto">
          <p class="lead">My hobbies are playing games, reading books, fishing and keeping hamsters</p>
        </div>
      </div>
    </div>
  </section>

</template>
