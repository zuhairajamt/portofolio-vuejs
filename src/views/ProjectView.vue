<script>
import { computed } from "vue";
import { useRoute } from "vue-router";

export default {
    name: "App",
    setup() {
        const route = useRoute();

        const id = computed(() => route.params.id);
        return {
            id,
        };
    },
};
</script>

<template>
    <div v-if="id == 1">
        <div tabindex="-1" aria-labelledby="portfolioModal1" aria-hidden="true">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <!-- Portfolio Modal - Title-->
                        <h2 class="text-secondary text-uppercase d-flex justify-content-center" style="margin-top: 150px">GundamAPI</h2>
                        <!-- Icon Divider-->
                        <div class="divider-custom">
                            <div class="divider-custom-line"></div>
                            <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                            <div class="divider-custom-line"></div>
                        </div>
                        <!-- Portfolio Modal - Image-->
                        <img class="img-fluid rounded mb-5" src="@/assets/img/portfolio/gundam.jpg" alt="..." />
                        <!-- Portfolio Modal - Text-->
                        <p class="d-flex justify-content-center" style="font-size: 20px">API for gundam plastic models and movies. Using node js and express with mysql. </p>
                        <a href="https://github.com/zuhairajamt/GundamAPI" style="font-size: 20px; margin-bottom: 50px" class="d-flex justify-content-center">https://github.com/zuhairajamt/GundamAPI</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div v-else-if="id == 2">
        <div tabindex="-1" aria-labelledby="portfolioModal1" aria-hidden="true">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <!-- Portfolio Modal - Title-->
                        <h2 class="text-secondary text-uppercase d-flex justify-content-center" style="margin-top: 150px">RecipeAPP</h2>
                        <!-- Icon Divider-->
                        <div class="divider-custom">
                            <div class="divider-custom-line"></div>
                            <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                            <div class="divider-custom-line"></div>
                        </div>
                        <!-- Portfolio Modal - Image-->
                        <img class="img-fluid rounded mb-5" src="@/assets/img/portfolio/cake.png" alt="..." />
                        <!-- Portfolio Modal - Text-->
                        <p class="d-flex justify-content-center" style="font-size: 20px">Food and drink recipe android CRUD app using java and sqlite. </p>
                        <a href="https://github.com/zuhairajamt/RecipeAPP" style="font-size: 20px; margin-bottom: 50px" class="d-flex justify-content-center">https://github.com/zuhairajamt/RecipeAPP</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div v-else-if="id == 3">
        <div tabindex="-1" aria-labelledby="portfolioModal1" aria-hidden="true">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <!-- Portfolio Modal - Title-->
                        <h2 class="text-secondary text-uppercase d-flex justify-content-center" style="margin-top: 150px">SholatOi</h2>
                        <!-- Icon Divider-->
                        <div class="divider-custom">
                            <div class="divider-custom-line"></div>
                            <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                            <div class="divider-custom-line"></div>
                        </div>
                        <!-- Portfolio Modal - Image-->
                        <img class="img-fluid rounded mb-5" src="@/assets/img/portfolio/mosque.jpg" alt="..." />
                        <!-- Portfolio Modal - Text-->
                        <p class="d-flex justify-content-center" style="font-size: 20px">>SholatOi is prayer schedule website by region in Indonesia using PHP.</p>
                        <a href="https://github.com/zuhairajamt/SholatOi" style="font-size: 20px; margin-bottom: 50px" class="d-flex justify-content-center">https://github.com/zuhairajamt/SholatOi</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div v-else-if="id == 4">
        <div tabindex="-1" aria-labelledby="portfolioModal1" aria-hidden="true">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <!-- Portfolio Modal - Title-->
                        <h2 class="text-secondary text-uppercase d-flex justify-content-center" style="margin-top: 150px">Openmusic-API</h2>
                        <!-- Icon Divider-->
                        <div class="divider-custom">
                            <div class="divider-custom-line"></div>
                            <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                            <div class="divider-custom-line"></div>
                        </div>
                        <!-- Portfolio Modal - Image-->
                        <img class="img-fluid rounded mb-5" src="@/assets/img/portfolio/music.png" alt="..." />
                        <!-- Portfolio Modal - Text-->
                        <p class="d-flex justify-content-center" style="font-size: 20px">>API for music playlists and albums. Developed using node js with hapi framework, and postgresql</p>
                        <a href="https://github.com/zuhairajamt/GundamAPI" style="font-size: 20px; margin-bottom: 50px" class="d-flex justify-content-center">https://github.com/zuhairajamt/Openmusic-API</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div v-else-if="id == 5">
        <div tabindex="-1" aria-labelledby="portfolioModal1" aria-hidden="true">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <!-- Portfolio Modal - Title-->
                        <h2 class="text-secondary text-uppercase d-flex justify-content-center" style="margin-top: 150px">AppBelanja</h2>
                        <!-- Icon Divider-->
                        <div class="divider-custom">
                            <div class="divider-custom-line"></div>
                            <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                            <div class="divider-custom-line"></div>
                        </div>
                        <!-- Portfolio Modal - Image-->
                        <img class="img-fluid rounded mb-5" src="@/assets/img/portfolio/safe.png" alt="..." />
                        <!-- Portfolio Modal - Text-->
                        <p class="d-flex justify-content-center" style="font-size: 20px">AppBelanja is mobile app for daily expense notes made with dart and flutter. </p>
                        <a href="https://github.com/zuhairajamt/GundamAPI" style="font-size: 20px; margin-bottom: 50px" class="d-flex justify-content-center">https://github.com/zuhairajamt/AppBelanja</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div v-else-if="id == 6">
        <div tabindex="-1" aria-labelledby="portfolioModal1" aria-hidden="true">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <!-- Portfolio Modal - Title-->
                        <h2 class="text-secondary text-uppercase d-flex justify-content-center" style="margin-top: 150px">CSVFLASK</h2>
                        <!-- Icon Divider-->
                        <div class="divider-custom">
                            <div class="divider-custom-line"></div>
                            <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                            <div class="divider-custom-line"></div>
                        </div>
                        <!-- Portfolio Modal - Image-->
                        <img class="img-fluid rounded mb-5" src="@/assets/img/portfolio/submarine.png" alt="..." />
                        <!-- Portfolio Modal - Text-->
                        <p class="d-flex justify-content-center" style="font-size: 20px">CRUD web for csv using flask. </p>
                        <a href="https://github.com/zuhairajamt/GundamAPI" style="font-size: 20px; margin-bottom: 50px" class="d-flex justify-content-center">https://flasketsraja.herokuapp.com/</a>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div v-else>
        <h1 class="d-flex justify-content-center">Projectnya gak ada</h1>
    </div>
</template>