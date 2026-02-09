import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Icons from './Icons';

export const useScrollReveal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(node);
    return () => {
      if (node) observer.unobserve(node);
    };
  }, []);

  return [ref, isVisible];
};

export const FadeIn = ({ children, delay = 0, className = '' }) => {
  const [ref, isVisible] = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export const Button = ({
  children,
  variant = 'primary',
  onClick,
  className = '',
  icon: Icon,
  isLoading = false,
  to,
  external,
}) => {
  const base =
    'inline-flex items-center justify-center px-8 md:px-10 py-4 md:py-5 text-xs md:text-sm font-bold uppercase tracking-widest transition-all duration-300 transform group rounded-none relative overflow-hidden z-10 border';

  const styles = {
    primary:
      'bg-rose-600 border-rose-600 text-white hover:bg-rose-700 hover:border-rose-700 shadow-[0_0_20px_rgba(225,29,72,0.3)] hover:shadow-[0_0_30px_rgba(225,29,72,0.5)]',
    secondary:
      'bg-transparent border-slate-600 text-white hover:border-white hover:bg-white hover:text-slate-950',
    dark: 'bg-slate-900 border-slate-800 text-white hover:bg-slate-800',
    outline:
      'bg-transparent border-slate-300 text-slate-900 hover:bg-slate-900 hover:text-white hover:border-slate-900',
  };

  const inner = (
    <span className="relative z-10 flex items-center">
      {isLoading ? <Icons.Loader className="mr-2 w-4 h-4" /> : null}
      {children}
      {!isLoading && Icon && (
        <Icon className="ml-3 w-4 h-4 transition-transform group-hover:translate-x-1" />
      )}
    </span>
  );

  const cls = `${base} ${styles[variant]} ${className}`;

  if (to && !external) {
    return (
      <Link to={to} className={cls}>
        {inner}
      </Link>
    );
  }

  if (to && external) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer" className={cls}>
        {inner}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={cls} disabled={isLoading}>
      {inner}
    </button>
  );
};

export const Section = ({
  children,
  className = 'py-32 md:py-40',
  bg = 'transparent',
}) => (
  <section
    className={`relative z-10 ${
      bg === 'dark'
        ? 'bg-slate-950 text-white'
        : bg === 'light'
        ? 'bg-slate-50 text-slate-900'
        : 'bg-transparent text-slate-900'
    } ${className}`}
  >
    {children}
  </section>
);

export const Container = ({ children, className = '' }) => (
  <div
    className={`max-w-[1400px] mx-auto px-6 md:px-12 relative z-10 ${className}`}
  >
    {children}
  </div>
);

/**
 * SectionHeader with proper heading hierarchy.
 * `as` controls the heading tag: "h1" for the page's main heading, "h2" for section headings.
 */
export const SectionHeader = ({
  subtitle,
  title,
  light = false,
  align = 'left',
  as: Tag = 'h2',
}) => (
  <div
    className={`mb-16 md:mb-24 ${
      align === 'center' ? 'text-center' : 'text-left'
    }`}
  >
    <FadeIn>
      <p
        className={`text-xs font-bold tracking-[0.3em] uppercase mb-6 flex items-center gap-4 ${
          align === 'center' ? 'justify-center' : ''
        } ${light ? 'text-teal-400' : 'text-rose-500'}`}
      >
        <span
          className={`w-12 h-[2px] ${light ? 'bg-teal-400' : 'bg-rose-500'}`}
        ></span>
        {subtitle}
      </p>
      <Tag
        className={`text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] ${
          light ? 'text-white' : 'text-slate-950'
        }`}
      >
        {title}
      </Tag>
    </FadeIn>
  </div>
);
