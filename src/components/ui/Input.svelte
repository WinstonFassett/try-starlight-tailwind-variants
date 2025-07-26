<script lang="ts">
  import { input } from '@/components/ui/theme/input';  
  import type { InputVariants } from '@/components/ui/theme/input';
  import type { HTMLInputAttributes } from 'svelte/elements';
  
  type $$Props = HTMLInputAttributes & InputVariants;
  
  export let variant: $$Props['variant'] = 'default';
  export let size: $$Props['size'] = 'default';
</script>

<input class={input({ variant, size, class: $$props.class})} {...$$restProps} />