<script setup>
import Sponsors from '@/components/Sponsors.vue';
import { sponsors } from '@/data/sponsors.js';

</script>

<template>
	<div class="row">
		<div class="col-35">
			<div class="content-wrapper">
				<div class="text-wrapper">
					<h1>Sponsors</h1>
					<p>Exclusive discounts for members</p>
				</div>
			</div>
		</div>
		<Sponsors v-for="type in sponsors" :key="type.span" :type="type"/>
	</div>
</template>