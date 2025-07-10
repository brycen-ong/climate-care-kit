<script setup lang="ts">
  import IconChevronX from '~/assets/icons/chevron-x.svg';
  import IconChevronY from '~/assets/icons/chevron-y.svg';
  import IconPlus from '~/assets/icons/plus.svg';
  import IconMinus from '~/assets/icons/minus.svg';
  import type { Icon } from '~/types';

  const props = defineProps({
    icon: String as PropType<Icon>,
  });

  const icon = computed(() => {
    switch(props.icon) {
      case 'chevron-x': return IconChevronX
      case 'chevron-y': return IconChevronY
      case 'plus': return IconPlus
      case 'minus': return IconMinus
    }
  })

</script>

<template>
  <component :is="icon"></component>
</template>