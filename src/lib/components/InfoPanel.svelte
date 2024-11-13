<script lang="ts">
	export let operand1;
	export let operand2;
	export let operator;
	export let result;
</script>

{#if result === "Start"}
	<section class="second-panel panel">
		{operand1}
		{operator}
		{operand2}
	</section>
{:else}
	<section class="second-panel panel">
		{result}
	</section>
{/if}

{#if result === "Start"}
	<section class="main-panel panel">
		{operand1}
		{operator}
		{operand2}
		{result}
	</section>
{:else}
	<section class="main-panel panel">
		{operand1} 
		{operator} 
		{operand2} 
		{result}
	</section>
{/if}

<style>
	.main-panel {
		text-align: right;
		background-color: rgb(204, 20, 20);
		width: 360px;
		height: 75px;
		border-color: red;
		border-right: 10px solid;
		border-left: 10px solid;
		font-size: 60px;
	}

	.second-panel {
		text-align: end;
		background-color: rgb(204, 20, 20);
		border-top-left-radius: 10px;
		border-top-right-radius: 10px;
		width: 360px;
		height: 75px;
		border-color: red;
		border-right: 10px solid;
		border-left: 10px solid;
		border-top: 10px solid;
		font-size: 30px;
	}
</style>
