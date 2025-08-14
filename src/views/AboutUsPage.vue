<script setup>
import CloudImage from '@/components/CloudImage.vue';
import TeamCard from '@/components/TeamCard.vue';
import { team } from '@/data/team.js';
import Btn from '@/components/Button.vue';
</script>

<template>
	<div class="row">
		<div class="col-50">
			<div class="content-wrapper">
				<div class="text-wrapper">
					<h1>About Us</h1>
					<p>McGill Chinese Students’ Society (MCSS) is the largest and most influential cultural student organization in Eastern Canada. We strive to enrich student life at McGill by creating meaningful experiences that celebrate Chinese heritage, foster personal and academic growth, and build lasting friendships. Whether it’s through festive cultural events, fun nights out, or casual dinners, our goal is to create a welcoming and dynamic space for students from all backgrounds.</p>
					<p>Founded in 1944, MCSS serves a vibrant community of over 1,500 active members. As a non-profit organization officially recognized under the Students' Society of McGill University (SSMU), all proceeds from our events are reinvested to support charitable causes and enhance future programming for our members.</p>
					<p>Whether you're looking to connect with your culture, meet new people, or simply get more out of your university experience, MCSS welcomes you to be part of our story.</p>
				</div>
			</div>
		</div>
		<div class="col-50">
			<div class="polaroid-wrapper">
				<CloudImage class="page_polaroid" imageName="team/group" />
			</div>
		</div>
	</div>
	<div class="row">
		<div class="col-35">
			<div class="content-wrapper">
				<div class="text-wrapper">
					<h2>Exec Team</h2>
					<p>2024 - 2025</p>
					<p>Want to join the fam?</p>
					<Btn label="Learn more about recruitment" variant="primary" to="recruitment"/>
				</div>
			</div>
		</div>
	</div>
	<div class="row">
		<div class="content-wrapper" style="width: 100%">
			<div class="team-grid">
				<TeamCard v-for="member in team" :key="member" :teamMember="member"/>
			</div>
		</div>
	</div>
</template>

<style scoped>

.polaroid-wrapper {
	width: fill;
	margin: var(--padding-lg);
}

.page_polaroid {
	width: 100%;
	
}

.team-grid {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
	gap: var(--padding-md);
}

@media (max-width: 768px) {
	.team-grid {
		grid-template-columns: repeat(2, 1fr); /* force 2 per row */
	}
}

</style>