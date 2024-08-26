<script lang="ts">
import { card } from '@/components/ui/theme/card';  
const { base, avatar, wrapper, description, infoWrapper, name, role } = card();

</script>

<figure class={base()}>
  <img
    class={avatar()}
    src="https://www.tailwind-variants.org/_next/image?url=%2Fintro-avatar.png&w=384&q=75"
    alt=""
    width="384"
    height="512"
  />
  <div class={wrapper()}>
    <blockquote>
      <p class={description()}>
        “Tailwind variants allows you to reduce repeated code in your project
        and make it more readable. They fixed the headache of building a
        design system with TailwindCSS.”
      </p>
    </blockquote>
    <figcaption class={infoWrapper()}>
      <div class={name()}>Zoey Lang</div>
      <div class={role()}>Full-stack developer, NextUI</div>
    </figcaption>
  </div>
</figure>
