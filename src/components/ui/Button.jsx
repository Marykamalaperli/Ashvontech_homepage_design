import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  onClick,
  icon: Icon,
  iconPosition = 'right',
  className = '',
  type = 'button',
  disabled = false,
  loading = false,
  ...props
}) {
  const baseClass = `btn btn-${variant} btn-${size} ${className} ${disabled ? 'disabled' : ''}`;

  const content = (
    <>
      {loading && (
        <span
          style={{
            width: '16px',
            height: '16px',
            border: '2px solid rgba(255,255,255,0.3)',
            borderTopColor: '#FFFFFF',
            borderRadius: '50%',
            animation: 'spinSlow 0.8s linear infinite',
            display: 'inline-block',
            marginRight: '6px'
          }}
        />
      )}
      {!loading && Icon && iconPosition === 'left' && <Icon size={size === 'sm' ? 15 : size === 'lg' ? 20 : 17} />}
      <span>{children}</span>
      {!loading && Icon && iconPosition === 'right' && <Icon size={size === 'sm' ? 15 : size === 'lg' ? 20 : 17} />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={baseClass} onClick={onClick} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={baseClass} onClick={onClick} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={baseClass}
      onClick={onClick}
      disabled={disabled || loading}
      {...props}
    >
      {content}
    </button>
  );
}
