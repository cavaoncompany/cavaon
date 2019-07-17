<template>
  <div class="case-study">
    {{ study }}
  </div>
</template>

<script>
export default {
  props: {
    study: {
      type: Object,
      required: true,
      default: () => {}
    }
  }
}
</script>
