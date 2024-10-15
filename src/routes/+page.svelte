<script lang="js">
	import Image from "../components/Image.svelte";

	let number1 = 0;
	let number2 = 0;
</script>

<input bind:value={number1} type="number"/>
<input bind:value={number2} type="number"/>

<p>{number1} + {number2} = {number1+number2}</p>




<!-- {#if number == 10}
	<p>{number}</p>
{:else}
	<Image size={25} />
{/if}

<Image size={150} /> -->
