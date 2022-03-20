<template>
  <span class="mi-breadcrumb__item">
    <span :class="['mi-breadcrumb__inner', to ? 'is-link' : '']" ref="link">
      <slot></slot>
    </span>
    <i
      v-if="separatorClass"
      class="mi-breadcrumb__separator"
      :class="separatorClass"
    ></i>
    <span v-else class="mi-breadcrumb__separator">{{ separator }}</span>
  </span>
</template>

<script>
export default {
  name: 'MistBreadcrumbItem',
  props: {
    to: {},
  },
  data() {
    return {
      separator: '',
      separatorClass: '',
    }
  },
  inject: ['mistBreadcrumb'],
  mounted() {
    this.separator = this.mistBreadcrumb.separator
    this.separatorClass = this.mistBreadcrumb.separatorClass
    const linkDom = this.$refs.link
    linkDom.addEventListener('click', (_) => {
      const { to, $router } = this
      if (!to || !$router) return
      $router.push(to)
    })
  },
}
</script>
