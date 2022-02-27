import NextLink from 'next/link';

function Link({ href, className, children, ariaLabel }) {
  return (
    <NextLink
      href={href}
    >
      <a 
        className={className}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    </NextLink>
  );
}

export default Link;