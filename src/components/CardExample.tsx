import { card } from '@/components/ui/theme/card'
const { base, avatar, wrapper, description, infoWrapper, name, role } = card();
 
export const CardExample = () => {
  return (
    <figure className={base()}>
      <img
        className={avatar()}
        src="https://www.tailwind-variants.org/_next/image?url=%2Fintro-avatar.png&w=384&q=75"
        alt=""
        width="384"
        height="512"
      />
      <div className={wrapper()}>
        <blockquote>
          <p className={description()}>
            “Tailwind variants allows you to reduce repeated code in your project
            and make it more readable. They fixed the headache of building a
            design system with TailwindCSS.”
          </p>
        </blockquote>
        <figcaption className={infoWrapper()}>
          <div className={name()}>Zoey Lang</div>
          <div className={role()}>Full-stack developer, NextUI</div>
        </figcaption>
      </div>
    </figure>
  );
}