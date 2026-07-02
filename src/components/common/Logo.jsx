import logo from '../../assets/images/iem_logo.png';

export default function Logo({ variant = 'dark', className = '' }) {
  const isLight = variant === 'light';

  return (
    <a
      href="#top"
      className={`flex items-center gap-2.5 ${className}`}
      aria-label="IEM Home"
    >
      <img
        src={logo}
        alt="IEM Logo"
        className={`h-14 w-auto shrink-0 object-contain ${isLight ? 'brightness-0 invert' : ''}`}
      />
    </a>
  );
}
