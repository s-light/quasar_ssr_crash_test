<template>
    <q-item
        v-for="item in childrenCommon"
        :key="item.title"
        :to="item.path_link ? item.path_link : item.path"
        exact
    >
        <q-item-section avatar>
            <q-icon :name="item.icon" />
        </q-item-section>

        <q-item-section>
            <q-item-label>{{ item.title }}</q-item-label>
            <q-item-label caption>{{ item.caption }}</q-item-label>
        </q-item-section>
    </q-item>
</template>

<script setup>
import { childrenCommon } from "../router/routes";
</script>
