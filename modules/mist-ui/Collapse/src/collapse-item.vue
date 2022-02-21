 <template>
  <div class="mi-collapse-item" :class="{ 'is-active': isShow }">
    <div
      class="mi-collapse_header"
      :class="{ 'is-active': isShow }"
      @click="handleHeaderClick"
    >
      {{ title }}
      <div class="mi-collapse__icon" :class="{ 'is-active': isShow }"></div>
    </div>

    <mist-collapse-transition>
      <div class="mi-collapse-item__wrap" v-show="isShow">
        <div class="mi-collapse_content">
          <slot></slot>
        </div>
      </div>
    </mist-collapse-transition>
  </div>
</template>

<script>
import MistCollapseTransition from 'mist-ui/src/transitions/collapse-transition'

export default {
  name: 'MistCollapseItem',

  components: {
    MistCollapseTransition,
  },

  props: {
    title: {
      type: [String, Number],
    },
  },
  data() {
    return {
      isShow: false,
    }
  },
  methods: {
    handleHeaderClick() {
      this.$parent.$emit('collapse', this.title)
      this.isShow = !this.isShow
    },
  },
}
</script>

