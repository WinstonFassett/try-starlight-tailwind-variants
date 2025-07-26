<script lang="ts">
  import { badge } from '@/components/ui/theme/badge';  
  import type { BadgeVariants } from '@/components/ui/theme/badge';
  import type { HTMLAttributes } from 'svelte/elements';
  
  type $$Props = HTMLAttributes<HTMLDivElement> & BadgeVariants;
  
  export let variant: $$Props['variant'] = 'default';
</script>

<div class={badge({ variant, class: $$props.class})} {...$$restProps}>
  <slot />
</div>