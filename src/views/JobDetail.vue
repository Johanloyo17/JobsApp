<template >
    <section>
        <Navbar/>
        <div class="detailJob">
            <div class=" detailJob_cont">
                <div class="container detailJob_head">
                    <div class="infoJob">
                        <span class="infoJob_title">{{titleJob}}</span>
                        <span class="infoJob_postulates">{{PostulatesInfo}}</span>
                    </div>
                    <div class="infoCompany">
                        <div class="infoCompany_perfilCont">
                            <div class="infoCompany_pic"></div>
                            <div class="infoCompany_info">
                                <span>{{companyName}}</span>
                                <span>{{companyOffers}}</span>
                            </div>
                        </div>
                        <!--
                        <div class="infoCompany_verification">
                            <span>Verificado</span>
                        </div>
                        -->
                    </div>
                </div>
            </div>
        </div>
        <div class=" container detailJob_body">
            <div class="shadow cardInfo">

            </div>
            <div class="shadow sideInfo">
                <div class="sideInfo_header">
                    <span class="j-title">Resumen:</span>
                </div>
                <div class="sideInfo_body">
                    <div class="resumen">
                        <!-- resumen item-->
                        <div  class="resumen_items">
                            <div class="resumen_items_head">
                                <div class="resumen_items_icon">
                                    <i class="fas fa-user-tie"></i>
                                </div>
                                <div class="resumen_items_title">
                                    <span>Cargo:</span>
                                </div>
                            </div>

                            <div class="resumen_items_descrip">
                                <span>Desarrollador Web</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <Footer></Footer>
    </section>
</template>

<script>
    import Navbar from '../components/Navbar.vue'
    import Footer from '../components/Footer'

    export default {
        components:{
            Navbar,
            Footer,
        },
        data() {
            return{
                //job data info
                titleJob:'Desarrollador web',
                PostulatesInfo:`5 candidatos`,
                rolJob:'Desarrollador Web',
                //company data info
                companyName:'McDonalds',
                companyOffers: 15 + ' Ofertas'
            }
        }
    }

</script>