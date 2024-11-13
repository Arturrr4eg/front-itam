<!-- <script lang="ts">
	function summ(a: number, b: number): void {
		console.log(summ(1, 2));
	}
	function printSentense(words: string | string[]) {
		if (typeof words === "string") {
			console.log(words);
		} else {
			console.log(words.join(" "));
		}
	}
	printSentense("hello my name is svelte");
	printSentense(["hello", "my", "name"]);
	function returnAnyThing<T>(num: T): T {
		return num;
	}
	function createArray<AnyType>(n: AnyType): AnyType[] {
		return [n];
	}
	type strNum = string | number;
	const numString: strNum = "123";
	type TPeople = {
		name: string;
		age: number;
		surname: string;
		hasJob: boolean;
		hasDog?: boolean;
	};
	const man: TPeople = {
		name: "john",
		age: 30,
		surname: "smith",
		hasJob: true
	};
	const man2: TPeople = {
		name: "john",
		age: 30,
		surname: "smith",
		hasJob: true,
		hasDog: true
	};
	interface IPeople {
		name: string;
		age: number;
	}
	interface IPeople {
		surname?: string
	}
	const man3: IPeople = {
		name: "john",
		age:30,
		surname: "smith"
	}
	interface IProgrammer extends IPeople{
		skills: string[];
	}
	const programmer:IProgrammer = {
		name: "john",
		age:30,
		surname: "smith",
		skills:['xui','govno','pizda']
	}
</script>

<div class="box-1"></div>
<div class = "container">
	<h2 class="container_title">Text</h2>
	<input type="text"/>
	<input type="text" class="container_inp"/>

</div>

<style lang="scss">
	.container {
		width: 100%;
		height: 200px;
		display: flex;
		justify-content: center;
		align-items: center;
		.container_title{
			color:red;
			font-size:40px;
			font-weight: bold;
		}
	}
	input{
		border: 1px solid gray;
		border-radius: 5px;
		padding: 5px;
		margin: 5px;
		&[type=text]{color: var(--brand)}
		&.container_inp{
			color: green;
			background-color: aqua;
		}
	}

	.box-1 {
		width:100px;
		height:100px;
		background-color: palevioletred;
		background-image: url(/favicon.png);
		background-repeat: no-repeat;
		background-position: 50% 50%;
	}
</style> -->

<script lang='ts'>
	let text = "";

	async function doFun() {
		let promise = fetch("https://notes.clayenkitten.dev/user/login", {
		method: "POST",
		body: JSON.stringify({login: "SuperSonic41"}),
		headers: {
			"Content-Type": "application/json",
		}
	});
	let response = await promise;
	let obj = await response.json();
	console.log(obj.token)
	}

	let token: string | null = null;
	async function list(){
		if (token === null){
			let promise = fetch("https://notes.claykitten.dev/user/login")
			
		}
	}
</script>
<button on:click={doFun}>Click</button>
<p>{text}</p>