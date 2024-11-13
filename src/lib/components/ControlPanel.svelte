<script lang="ts">
	export let operand1: string | number;
	export let operand2: string | number;
	export let operator: string;
	export let result: number | string; 
	export let isNotFirst: boolean;
	export let expression: string | number;

	
	const items: string[] = [
		"DEL",
		"C",
		"%",
		"/",
		"7",
		"8",
		"9",
		"*",
		"4",
		"5",
		"6",
		"-",
		"1",
		"2",
		"3",
		"+",
		"0",
		"00",
		"="
	];

	function handleButton(curItem: string) {

		switch(curItem){
			case "/":
				operator+=curItem;
				break
			case "+":
				operator+=curItem;
				break
			case "-":
				operator+=curItem;
				break
			case "%":
				operator+=curItem;
				break
			case "*":
				operator+=curItem;
				break
			case "DEL":
				result ="";
				operand1="";
				operand2="";
				operator="";
				break
			case "=":
				switch(operator){
					case "+":
						result = Number(operand1) + Number(operand2)
						isNotFirst = true;
						break
					case "/":
						result = Number(operand1) / Number(operand2)
						break
					case "*":
						result = Number(operand1) * Number(operand2)
						break
					case "-":
						result = Number(operand1) - Number(operand2)
						break
					case "%":
						result = Number(operand1) % Number(operand2)
						break
					default:
						break
				}
			default:
				if(isNotFirst === false){
					if((operator).length === 0 && curItem !== "="){
						operand1+=curItem;
					}else{
						operand2+=curItem;
					}
				}
				else{
					operand1+=curItem;
				}
		}
		
	}
</script>

<section class="control-panel">
	{#each items as currentItem}
		{#if currentItem === "00"}
			<button
				type="button"
				class="knopka-new double-zero"
				on:click={() => handleButton(currentItem)}>{currentItem}</button
			>
		{:else}
			<button type="button" class="knopka-new" on:click={() => handleButton(currentItem)}
				>{currentItem}</button
			>
		{/if}
	{/each}
</section>

<style>
	.control-panel {
		font-family: "Roboto", "Arial", sans-serif;
		font-size: 60px;
		background-color: rgb(204, 20, 20);
		width: 360px;
		border: 10px solid;
		border-bottom-left-radius: 10px;
		border-bottom-right-radius: 10px;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		padding-inline: 0;
	}
	.knopka-new {
		margin: 3px;
		font-size: 24px;
		border: 2px solid black;
		padding: 0px;
		height: 75px;
		width: 75px;
		background-color: rgb(34, 184, 189);
		color: black;
		border-radius: 5px;
		box-shadow: 10px 5px 5px black;
	}
	.knopka-new:hover {
		background-color: rgb(19, 215, 221);
	}
	.knopka-new:active {
		background-color: rgb(42, 101, 103);
	}
	.double-zero {
		width: 170px;
	}
</style>
