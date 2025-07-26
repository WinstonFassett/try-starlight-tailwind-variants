<script lang="ts">
  import { label } from '@/components/ui/theme/label';  
  import type { LabelVariants } from '@/components/ui/theme/label';
  import type { HTMLLabelAttributes } from 'svelte/elements';
  
  type $$Props = HTMLLabelAttributes & LabelVariants;
  
  export let variant: $$Props['variant'] = 'default';
</script>

<label class={label({ variant, class: $$props.class})} {...$$restProps}>
  <slot />
</label>