<template>
  <component :is="icon"></component>
</template>

<script setup lang="ts">
  import IconChevronX from '~/assets/icons/chevron-x.svg';
  import IconChevronY from '~/assets/icons/chevron-y.svg';

  type Icon = 'chevron-x' | 'chevron-y';

  const props = defineProps({
    icon: String as PropType<Icon>,
  });

  const icon = computed(() => {
    switch(props.icon) {
      case 'chevron-x': return IconChevronX
      case 'chevron-y': return IconChevronY
    }
  })

</script>