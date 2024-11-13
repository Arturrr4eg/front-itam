<script lang="ts">
     import { superForm } from 'sveltekit-superforms';

    export let data;

    export const colors = ["red", "black", "blue"];

    const{form: newForm, message, enhance}= superForm(data.form);
</script>

<form method="POST" use:enhance>
    <input type="text" name="name" bind:value={$newForm.name} />
    <br/>
    <label for="email">E-mail</label>
    <input type="email" name="email" bind:value={$newForm.email} />
    <div><button>Submit</button></div>
    
    
    <label for="colors">
        Цвета
    </label>
    <select multiple name="colors" bind:value={$newForm.color}>
        {#each colors as colorOption}
            <option value={colorOption} selected={$newForm.color.includes(colorOption)}>
            {colorOption}
        </option>
        {/each}

    </select>
    {#if $message}
        <p>{$message}</p>
    {/if}
</form>