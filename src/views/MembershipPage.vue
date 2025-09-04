<script setup>
import Btn from '@/components/Button.vue';
import CloudImage from '@/components/CloudImage.vue';
import PastCards from '@/components/PastCards.vue';

</script>

<template>
	<div class="row">
        <div class="col-50">
            <div class="content-wrapper">
                <div class="text-wrapper">
                    <h1>Membership</h1>
                    <p>
						MTSA, HKSN, MCSS and MECA have partnered together to bring you another joint Membership Card! With our membership card, students can get numerous 
						<a href="sponsors/" class="sponsor-link">discounts at various restaurants and stores</a>
						 across the city. We take pride in bringing our members the best deals and benefits with our annually updated list of participating sponsors.	
					</p>
					<p>
						From 2021 onwards, the East Asian Clubs of McGill have decided to team up to provide you with a collab membership card. This means higher quality collab events, less cards to carry around, and an even bigger list of sweet deals for you.
					</p>
					<p>
						By buying our card, you are also showing your support, and enabling us to keep producing banger events.
					</p>
                </div>
                <Btn label="Buy Now" variant="primary" href="https://docs.google.com/forms/d/e/1FAIpQLSdFElYEDNhXVAlUGTbM58hQRzkiW1PWmargkD0Lhls28KB0EA/viewform?fbclid=PAZXh0bgNhZW0CMTEAAacK6vJUuutmZE46DGgtigdP1UvfWCgBAfXyit5agQqqgLGMaXaS_vQdav_q0w_aem_CjsSmuhIKFy4fk1w24Mmyg" target="_default"/>
				<small>
					*Available for purchase at the start of the school year and at events throughout the year.
				</small>
            </div>
        </div>
        <div class="col-50">
			<div class="membership-card-wrapper">
        	<CloudImage class="membership-card" imageName="card/front_25-26" />
			</div>
		</div>
    </div>
	<div class="row">
		<div class="col-50">
			<div class="content-wrapper">
				<div class="text-wrapper">
					<h2>Past Cards</h2>
					<p>Every year, the graphic/media teams of each club come together to vote on a new design for the card. You can take a look at some of the designs that have won previously below.</p>
				</div>
			</div>
		</div>
	</div>
	<div class="row">
		<div class="content-wrapper" style="width: 100%">
			<PastCards />
		</div>
	</div>
</template>

<style scoped>
.sponsor-link {
	text-decoration: underline;
	color: var(--link-color)
}

.membership-card-wrapper {
	width: clamp(250px, 80%, 400px);
	margin: var(--padding-lg) auto;
}

.membership-card {
	width: 100%;
	border-radius: var(--border-radius-md);
}

</style>