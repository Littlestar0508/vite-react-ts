import { getUIView } from '@/homework/lib/ui-view';
import { tm } from '@/utils/tw-merge';

type NavLinkProps = React.ComponentProps<'a'> & {
  href: string;
  activeClassName?: string;
};

export default function NavLink({
  href,
  children,
  activeClassName = 'active',
  className,
  ...restProps
}: NavLinkProps) {
  const view = getUIView();
  const isActive = view.includes(href);

  return (
    <a
      href={`/?view=${href}`}
      className={tm(isActive && activeClassName, className)}
      aria-current={isActive ? 'page' : undefined}
      {...restProps}
    >
      {children}
    </a>
  );
}
