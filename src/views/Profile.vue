<template>
    <div>
        <h2>Profile</h2>
        <p>{{currentUser.email}}</p>
    </div>
</template>

<script>
export default {
    name: 'profile',
    computed:{
        currentUser(){
            return this.$store.state.currentUser
        }
    }
}
</script>

