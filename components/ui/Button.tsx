import React, { useState, useEffect } from 'react';
import { cn } from '../../lib/utils';

interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  as?: 'button' | 'div' | 'a';
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export const Button = React.forwardRef<HTMLElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', as = 'button', children, disabled, ...props }, ref) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [canHover, setCanHover] = useState(true);
    const [isPressed, setIsPressed] = useState(false);

    // Detect if device supports hover
    useEffect(() => {
      const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
      setCanHover(mediaQuery.matches);

      const handler = (e: MediaQueryListEvent) => setCanHover(e.matches);
      mediaQuery.addEventListener('change', handler);
      return () => mediaQuery.removeEventListener('change', handler);
    }, []);

    const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
      if (disabled || !canHover) return;
      const { clientX, clientY } = e;
      const { width, height, left, top } = e.currentTarget.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      setPosition({ x: x * 0.15, y: y * 0.15 });
    };

    const reset = () => setPosition({ x: 0, y: 0 });

    // Touch handlers for mobile active state
    const handleTouchStart = () => {
      if (!canHover && !disabled) setIsPressed(true);
    };

    const handleTouchEnd = () => {
      if (!canHover) setIsPressed(false);
    };

    const variants = {
      primary: 'bg-gradient-to-r from-medical-blue-lighter to-trust-teal text-white shadow-md hover:shadow-lg hover:shadow-medical-blue-lighter/20 border-0',
      secondary: 'bg-white text-medical-blue border border-medical-blue hover:bg-slate-50 shadow-sm hover:shadow-md',
      outline: 'bg-transparent border border-white/30 text-white hover:bg-white/10 backdrop-blur-sm'
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg'
    };

    const Component = as as any;

    return (
      <Component
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={reset}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={handleTouchEnd}
        style={{
          transform: disabled
            ? 'none'
            : canHover
              ? `translate(${position.x}px, ${position.y}px)`
              : isPressed
                ? 'scale(0.98)'
                : 'none'
        }}
        className={cn(
          'relative rounded-xl font-semibold transition-all duration-200 overflow-hidden group inline-flex items-center justify-center cursor-pointer select-none',
          'focus-visible:ring-2 focus-visible:ring-medical-blue-lighter focus-visible:ring-offset-2',
          variants[variant],
          sizes[size],
          disabled && 'opacity-50 cursor-not-allowed pointer-events-none grayscale',
          !canHover && 'touch-active',
          className
        )}
        disabled={disabled}
        {...props}
      >
        {/* Shine effect - only on hover-capable devices */}
        {!disabled && canHover && (
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
              transform: 'translateX(-100%)',
              animation: 'none',
            }}
          />
        )}
        <span className="relative z-10 flex items-center gap-2 justify-center pointer-events-none">{children}</span>
      </Component>
    );
  }
);
Button.displayName = 'Button';