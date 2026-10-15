import React from 'react';

/**
 * Reusable Ashvon Technologies Brand Logo component
 * 
 * Supports different visual contexts:
 * - variant="light": Clean transparent PNG for white and light backgrounds (no glow, no card)
 * - variant="dark": Transparent PNG with subtle white edge glow for navy, dark and gradient backgrounds
 * 
 * @param {'light' | 'dark'} variant - Visual context ('light' or 'dark')
 * @param {number|string} size - Logo height in px or CSS dimension
 * @param {string} className - Optional additional CSS class names
 * @param {React.CSSProperties} style - Custom inline styles
 * @param {string} alt - Accessible image description
 */
export default function BrandLogo({
  variant = 'light',
  size = 46,
  className = '',
  style = {},
  alt = 'Ashvon Technologies Logo',
  ...rest
}) {
  const isDark = variant === 'dark';
  const heightVal = typeof size === 'number' ? `${size}px` : size;

  const glowFilter = isDark
    ? 'drop-shadow(0 0 2px rgba(255, 255, 255, 0.85)) drop-shadow(0 0 7px rgba(255, 255, 255, 0.30))'
    : 'none';

  return (
    <img
      src="/assets/3D_illustration.png"
      alt={alt}
      className={`ashvon-logo ashvon-logo--${variant} ${className}`.trim()}
      style={{
        height: heightVal,
        width: 'auto',
        objectFit: 'contain',
        display: 'block',
        flexShrink: 0,
        background: 'transparent',
        border: 'none',
        borderRadius: 0,
        boxShadow: 'none',
        padding: 0,
        filter: glowFilter,
        ...style
      }}
      {...rest}
    />
  );
}
