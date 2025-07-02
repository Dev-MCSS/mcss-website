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
					<p>Founded in 1944, we provide a variety of events to over 1,500 active members and help our members succeed in school and life.</p>
					<p>Our short-term goal is to provide our students with valuable events to make their student life more meaningful, while our long-term goal is to motivate and encourage our students to give back to their community and excel academically by providing them with helpful services including seminars, lessons, and talks.</p>
					<p>MCSS is a non-profit organization registered under the Students' Society of McGill University. All our proceeds either go to charity or are used to provide our students with more valuable services.</p>
					<p>Our events range from large scale shows to career planning and information seminars. In addition, we organize dinner outings, networking opportunities and parties for our members.</p>
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
	width: 90%;
	
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