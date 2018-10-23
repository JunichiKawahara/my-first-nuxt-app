<template>
    <section class="container">
    <div>
        <h3>{{ user.id }}</h3>
        <img src:="user.profile_image_url" width="120" alt="">
        <p>{{ user.description || 'No description' }}</p>
        <p>
            <nuxt-link to="/">
                <small><b> トップへ戻る</b></small>
            </nuxt-link>
        </p>
    </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            userId: this.$route.params.id
        }
    }
}
</script>
