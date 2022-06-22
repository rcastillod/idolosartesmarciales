<template>
    <div id="app">
        <navigation></navigation>
        <transition name="fade">
            <router-view />
        </transition>
    </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'

export default {
    components: {
        'navigation': Navigation
    }
}
</script>

<style>
/* -------------------------------------------------------------------------- */
/*                              CUSTOM PROPERTIES                             */
/* -------------------------------------------------------------------------- */
:root {

    /* Colors */
    --primary-color: 356 83% 51%;
    --primary-color-tint: 356 83% 56%;
    --primary-color-shade: 356 79% 45%;
    --text-color: 231 3% 43%;
    --white-color: 0 0% 100%;
    --black-color: 0 0% 0%;

    /* Font Familiy */
    --heading-font: 'Poppins', sans-serif;;
    --body-font: 'Poppins', sans-serif;

    /* Font Weights */
    --fw-thin: 100;
    --fw-light: 300;
    --fw-regular: 400;
    --fw-medium: ;
    --fw-semibold: ;
    --fw-bold: 700;
    --fw-black: ;

}

/* -------------------------------------------------------------------------- */
/*                                    RESET                                   */
/* -------------------------------------------------------------------------- */

/* https://piccalil.li/blog/a-modern-css-reset/ */

/* Box sizing rules */
*,
*::before,
*::after {
    box-sizing: border-box;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
    margin: 0;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role='list'],
ol[role='list'] {
    list-style: none;
}

ul,
ol {
    margin: 0;
    padding: 0;
    list-style-type: none;
}

/* Set core root defaults */
html,
html:focus-within,
body {
    scroll-behavior: smooth;
}

/* Set core body defaults */
body {
    color: hsl( var(--text-color) );
    font-family: var(--body-font);
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
}

main {
    position: relative;
}

section {
    height: 100%;
    padding-block-start: 9.375rem;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
    text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img,
picture {
    max-width: 100%;
    display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
    font: inherit;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
    html:focus-within {
        scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
    }
}

/* -------------------------------------------------------------------------- */
/*                               UTILITY CLASSESS                             */
/* -------------------------------------------------------------------------- */

/* General */

.flex {
    display: flex;
    gap: var(--gap, 1rem);
}

.direction-column {
    flex-direction: column;
}

.grid {
    display: grid;
    gap: var(--gap, 1rem);
}

.flow > *:where(:not(:first-child)) {
    margin-top: var(--flow-gap, 1rem);
}

.container {
    --max-width: 83.75rem;
    width: min(100% - 2rem, var(--max-width));
    margin-inline: auto;
}

.section-title {
    color: hsl( var(--white-color) );
    font-family: var(--heading-font);
    font-size: 4rem;
    font-weight: var(--fw-bold);
    letter-spacing: .325rem;
    line-height: 1.2;
    max-width: 18ch;
}
.section-title span {
    display: inline-flex;
    align-items: center;
    gap: 0.25em;
    position: relative;
}
.section-title span::after {
    content: '';
    background-color: hsl( var(--white-color) );
    height: 0.4375rem;
    width: 1.175em;
}

.btn {
    font-size: 1rem;
    padding-block: .625em;
    width: 5em;
    text-align: center;
    text-decoration: none;
}

.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
}

/* -------------------------------------------------------------------------- */
/*                                 Transition                                 */
/* -------------------------------------------------------------------------- */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
