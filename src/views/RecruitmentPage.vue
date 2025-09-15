<script setup>
import Btn from '@/components/Button.vue';
import PositionCard from '@/components/PositionCard.vue';
import { positions } from '@/data/positions.js';
import SceneAmpharos from '@/components/SceneAmpharos.vue';

</script>

<template>
	<div class="row">
		<div class="col-50">
			<div class="content-wrapper">
				<div class="text-wrapper">
					<h1>Recruitment</h1>
					<p>So you want to be part of MCSS...</p>
					<p>If you've ever wanted to be a part of a loving and caring family 🏠, have plenty fun while planning exciting events 🤪, and make friends with people that have the drippiest swag 😎, then MCSS is the perfect place for you!</p>
					<p>We have two recruitment periods that open depending on position availabilities: Fall and Winter.</p>
					<p>2025 Fall Recruitment has passed.</p>
				</div>
			</div>
		</div>
		<div class="col-50">
			<div class="content-wrapper">
				<div class="text-wrapper">
					<h2>Open Positions</h2>
					<div class="positions">
						<p>Stay tuned...</p>
						<!-- <PositionCard v-for="position in positions" :key="position" :position="position"/> -->
					</div>
				</div>
				<!-- <Btn label="Apply" variant="primary" href="https://forms.gle/HCNvXkEEZyMgb5zz6" target="_default"/>
				<div class="text-wrapper">
					<small>Application deadline: <strong>Tuesday, September 9th</strong></small>
					<small><strong>Interviews:</strong> In-person interviews will be held the week after the deadline.</small>
				</div> -->
			</div>
		</div>
	</div>
	<SceneAmpharos />
</template>

<style scoped>
.positions {
	display: flex;
	flex-direction: column;
	gap: var(--padding-sm);
}

.positions p {
	background-color: var(--gray-color);
	padding: var(--padding-xs) var(--padding-sm);
	border-radius: var(--border-radius-sm);
}


</style>