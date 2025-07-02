<script setup>
import Btn from '@/components/Button.vue';
import EventImages from '@/components/EventImages.vue';
import { events } from '@/data/events.js';

</script>

<template>
	<div class="row">
		<div class="col-35">
			<div class="content-wrapper">
				<div class="text-wrapper">
					<h1>Events</h1>
					<p>We host a wide range of events, including parties, cultural celebrations, competitions, and more!</p>
					<p>Follow us on Instagram (@mcssfam) for our latest events and club updates!</p>
				</div>
				<Btn label="Instagram" variant="primary" href="https://www.instagram.com/mcssfam/" target="_blank" class="instagram-btn"/>
			</div>
		</div>
	</div>
	<div class="row">
		<EventImages v-for="year in events" :key="year.span" :year="year"/>
	</div>
</template>

<style scoped>
.row {
	width: 100%;
}
.instagram-btn {
	background-image: linear-gradient(to right, #ffa052, #D90392);
}
.instagram-btn:hover {
	background-image: linear-gradient(to right, #dc8945, #ba017d);
}

</style>