<template>
    <section class="container">
        <div>
            <h3>TEST PAGE</h3>
            <p>QIITA_TOKEN = {{ qiita_token }}</p>
        </div>
    </section>
</template>

<script>
export default {
    async asyncData({ app }) {
        const qiita_token = process.env.QIITA_TOKEN
        return { qiita_token }
    },
    async mounted() {
        console.log(
            JSON.stringify(await
            this.$axios.$get('https://qiita.com/api/v2/items?query=tag:nuxt.js'), true, '  ')
        )
    }
}
</script>
