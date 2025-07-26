<script lang="ts">
  import { input } from '@/components/ui/theme/input';  
  import type { InputVariants } from '@/components/ui/theme/input';
  import type { HTMLInputAttributes } from 'svelte/elements';
  
  type $$Props = HTMLInputAttributes & InputVariants & {
    value?: string;
  }
  
  export let variant: $$Props['variant'] = 'default';
  export let size: $$Props['size'] = 'default';
  export let value: $$Props['value'] = '';
</script>

<input 
  bind:value 
  class={input({ variant, size, class: $$props.class})} 
  {...$$restProps}
/>