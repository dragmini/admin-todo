<template>
    <button class="btn">
        <slot />
    </button>
</template>

<style lang="scss" setup>
.btn {
    background: transparent;
    border: 1px solid #001329;
    padding: 10px 5px;
    border-radius: 10px;
    transition: border 0.3s ease;
    cursor: pointer;
}

.btn:hover {
    border: 1px solid #2F83E4;
    color: #2F83E4;
}
</style>