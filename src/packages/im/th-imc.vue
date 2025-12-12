<template>
	<div class="th-imc">
		做测试 {{ userName }}
	</div>
</template>
<script>
export default {
	name: "THImc",
	props: {
		userName: {
			type: String,
			default: false
		}
	}
}
</script>
<style lang="scss">
</style>
