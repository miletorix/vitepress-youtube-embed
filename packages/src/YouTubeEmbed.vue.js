/// <reference types="C:/Users/user1/Desktop/vitepress-youtube-embed/packages/node_modules/@vue/language-core/types/template-helpers.d.ts" />
/// <reference types="C:/Users/user1/Desktop/vitepress-youtube-embed/packages/node_modules/@vue/language-core/types/props-fallback.d.ts" />
import { computed } from 'vue';
const props = defineProps({
    videoId: {
        type: String,
        required: true,
    }
});
const computedSrc = computed(() => {
    const base = `https://www.youtube.com/embed/${props.videoId}`;
    const params = '?modestbranding=1&rel=0';
    return base + params;
});
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
/** @type {__VLS_StyleScopedClasses['video-container']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "video-container" },
});
/** @type {__VLS_StyleScopedClasses['video-container']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.iframe, __VLS_intrinsics.iframe)({
    src: (__VLS_ctx.computedSrc),
    frameborder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowfullscreen: true,
    title: "YouTube video player",
});
// @ts-ignore
[computedSrc,];
const __VLS_export = (await import('vue')).defineComponent({
    props: {
        videoId: {
            type: String,
            required: true,
        }
    },
});
export default {};
