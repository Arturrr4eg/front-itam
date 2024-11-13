<script lang="ts">
	import InfoPanel from "../../lib/components/InfoPanel.svelte";
	import ControlPanel from "../../lib/components/ControlPanel.svelte";
	let operand1: string | number = "";
	let operator: string = "";
	let operand2: string | number = "";
    let result: number | string = "Start";
	let expression: number | string = '';
	let isNotFirst: boolean = false;
</script>

<InfoPanel {result} {operand1} {operand2} {operator} />
<ControlPanel bind:result bind:operand1 bind:operand2 bind:operator bind:expression bind:isNotFirst/>
