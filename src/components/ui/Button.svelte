<script lang="ts">
  import { button } from '@/components/ui/theme/button';  
  import type { ButtonVariants } from '@/components/ui/theme/button';
  import type { HTMLButtonAttributes } from 'svelte/elements';
  type $$Props = HTMLButtonAttributes & ButtonVariants
  export let size: $$Props['size'] = 'md';
  export let color: $$Props['color'] = 'default';
</script>


<button class={button({ size, color, class: $$props.class})}>
  <slot />
</button>
