<script>
export default {
    name: 'STitle',
    props: {
        text: String
    }
};
</script>

<template>
    <div class="s-title">
        <h1>
            {{text}}
        </h1>
    </div>
</template>

