<template>
    <div class="container">
        <navigation-component></navigation-component>
        <div class="columns notes-main">
            <div class="column is-4">
                <div class="columns notes-navigation">
                    <notebooks-component></notebooks-component>
                    <sections-component></sections-component>
                    <pages-component></pages-component>
                </div>
            </div>
            <editor-component></editor-component>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Buefy from 'buefy'
    import EditorComponent from './Editor.vue'
    import NavigationComponent from './Navigation.vue'
    import NotebooksComponent from './Notebooks.vue'
    import PagesComponent from './Pages.vue'
    import SectionsComponent from './Sections.vue'

    Vue.use(Buefy, {
        defaultIconPack: 'fas',
    })

    export default {
        components: {
            EditorComponent,
            NavigationComponent,
            NotebooksComponent,
            PagesComponent,
            SectionsComponent,
        },
    }
</script>

<style>
    .container {
        display: flex;
        flex-direction: column;
        height: 100vh;
    }

    .notes-main {
        height: 100%;
        margin: 0;
    }

    .notes-main.columns:last-child {
        margin-bottom: 0;
    }

    .notes-navigation {
        height: 100%;
        margin: 0;
    }

    .note-menu {
        border-right: 1px solid #cccccc;
        display: flex;
        flex-direction: column;
        padding-bottom: 0;
        padding-top: 0;
    }

    .note-menu .menu {
        flex: 1;
        overflow: auto;
    }

    .note-command {
        border-top: 1px solid #cccccc;
        cursor: pointer;
        text-align: center;
    }

    .note-title {
        text-overflow: ellipsis;
        overflow: hidden;
    }

    .selected {
        background-color: #f5f5f5;
    }

    .spinner {
        display: block;
        border: none;
        position: relative;
        top: 50%;
        transform: translateY(-50%);
    }
</style>