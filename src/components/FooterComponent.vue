<script>
import projects from '@/components/ProjectsComp.vue';

export default {
    data() {
        return {
            projects
        };
    }
}
</script>

<template>
    <!-- Footer-->
    <footer class="footer text-center">
        <div class="container">
            <div class="row d-flex justify-content-center">
                <div class="col-lg-4 mb-5 mb-lg-0">
                    <h4 class="text-uppercase mb-4">Around the Web</h4>
                    <a class="btn btn-outline-light btn-social mx-1" href="https://facebook.com"><i
                            class="fab fa-fw fa-facebook-f"></i></a>
                    <a class="btn btn-outline-light btn-social mx-1" href="https://twitter.com"><i
                            class="fab fa-fw fa-twitter"></i></a>
                    <a class="btn btn-outline-light btn-social mx-1"
                        href="https://id.linkedin.com/in/zuhairaja-musheera-tunggorono"><i
                            class="fab fa-fw fa-linkedin-in"></i></a>
                    <a class="btn btn-outline-light btn-social mx-1" href="https://github.com/zuhairajamt"><i
                            class="fab fa-fw fa-github"></i></a>
                </div>
            </div>
        </div> <!-- this div susamogus -->
    </footer>
    <!-- Copyright Section-->
    <div class="copyright py-4 text-center text-white">
        <div class="container"><small>Copyright &copy; 2022</small></div>
    </div>

    <!-- Portfolio Modals-->
    <!-- Portfolio Modal 1-->
    <div v-for="project in projects">
        <div class="portfolio-modal modal fade" :id="project.label" tabindex="-1" :aria-labelledby="project.label"
            aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header border-0"><button class="btn-close" type="button" data-bs-dismiss="modal"
                            aria-label="Close"></button></div>
                    <div class="modal-body text-center pb-5">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-8">
                                    <!-- Portfolio Modal - Title-->
                                    <h2 class="portfolio-modal-title text-secondary text-uppercase mb-0">
                                        {{project.title}}</h2>
                                    <!-- Icon Divider-->
                                    <div class="divider-custom">
                                        <div class="divider-custom-line"></div>
                                        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                                        <div class="divider-custom-line"></div>
                                    </div>
                                    <!-- Portfolio Modal - Image-->
                                    <img class="img-fluid rounded mb-5" :src="project.img" alt="..." />
                                    <!-- Portfolio Modal - Text-->
                                    <p class="mb-4">{{project.desc}}</p>
                                    <router-link :to="{name: 'projects', params: {id: project.id}}">
                                        <button class="btn btn-primary" data-bs-dismiss="modal">
                                            <i class="fa fa-info-circle"></i>
                                            Detail Project
                                        </button>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>