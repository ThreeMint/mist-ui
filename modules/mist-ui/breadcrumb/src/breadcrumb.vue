<template>
  <div class="mi-breadcrumb">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'MistBreadcrumb',
  props: {
    separator: {
      type: String,
      default: '/',
    },
    separatorClass: {
      type: String,
      default: '',
    },
  },
  provide() {
    return {
      mistBreadcrumb: this,
    }
  },
}
</script>
