<script lang="ts">
	// const hexReg = new RegExp("a");
	let value = "";
	// let hex: string;
</script>

<div class="watcher">
	<div style:background-color={value}>color: {value}</div>
	<!-- <div>hex: {hex}</div> -->
	<input type="color" bind:value />
	#TODO
</div>
