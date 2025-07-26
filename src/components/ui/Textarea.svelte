<script lang="ts">
  import { textarea } from '@/components/ui/theme/textarea';  
  import type { TextareaVariants } from '@/components/ui/theme/textarea';
  import type { HTMLTextareaAttributes } from 'svelte/elements';
  
  type $$Props = HTMLTextareaAttributes & TextareaVariants & {
    value?: string;
  }
  
  export let variant: $$Props['variant'] = 'default';
  export let value: $$Props['value'] = '';
</script>

<textarea 
  bind:value 
  class={textarea({ variant, class: $$props.class})} 
  {...$$restProps}
>
  {value}
</textarea>