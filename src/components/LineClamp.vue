<template>
  <div
     class="text"
     :title="(showTooltip) ? text : ''"
     @mouseover="handleMouseOver"
     @mouseleave="handleMouseLeave"
   >
    {{ text }}
  </div>
</template>

<script setup>
  import { ref } from "vue";
  // eslint-disable-next-line no-undef
  const props = defineProps({
    text: {
      Type: String,
      default: "Some Text"
    },
    lines: {
      type: Number,
      default: 2
    }
  })
  
  const showTooltip = ref(false);
  const handleMouseOver = (event) => {
    const { target } = event;
    const hasScrollWidth = target.scrollWidth > target.offsetWidth;
    const hasScrollHeight = target.scrollHeight > target.offsetHeight;
    showTooltip.value = hasScrollWidth || hasScrollHeight;
  }
  const handleMouseLeave = () => {
    showTooltip.value = false;
  }
  // eslint-disable-next-line vue/no-setup-props-destructure
  const { text, lines } = props;
</script>

<style>
  .text {
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: v-bind(lines);
    -webkit-box-orient: vertical;  
    overflow: hidden;
  }
</style>