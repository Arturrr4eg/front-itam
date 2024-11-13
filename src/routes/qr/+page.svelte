<script lang="ts">
    let url:string;
</script>

<input bind:value={url}/>
<img src={`https://qrtag.net/api/qr(_transparent)(_[size]).[png|svg](?url=[URL])`} alt="wow"/>