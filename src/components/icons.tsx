import React from "react"

export type IconProps = React.HTMLAttributes<HTMLElement> & {
  variant?: 'is-small' | 'is-medium' | 'is-large';
  className?: string;
}

export const Icons = {
  logo: ({ variant, className, ...props }: IconProps) => (
    <i 
      className={`nes-icon trophy ${variant || ''} ${className || ''}`} 
      {...props} 
    />
  ),
  chevronRight: ({ variant, className, ...props }: IconProps) => (
    <i 
      className={`nes-icon caret-right ${variant || ''} ${className || ''}`} 
      {...props} 
    />
  ),
  // Adding more NES.css icons for additional options
  heart: ({ variant, className, ...props }: IconProps) => (
    <i 
      className={`nes-icon heart ${variant || ''} ${className || ''}`} 
      {...props} 
    />
  ),
  star: ({ variant, className, ...props }: IconProps) => (
    <i 
      className={`nes-icon star ${variant || ''} ${className || ''}`} 
      {...props} 
    />
  ),
  like: ({ variant, className, ...props }: IconProps) => (
    <i 
      className={`nes-icon like ${variant || ''} ${className || ''}`} 
      {...props} 
    />
  ),
  coin: ({ variant, className, ...props }: IconProps) => (
    <i 
      className={`nes-icon coin ${variant || ''} ${className || ''}`} 
      {...props} 
    />
  ),
  github: ({ variant, className, ...props }: IconProps) => (
    <i 
      className={`nes-icon github ${variant || ''} ${className || ''}`} 
      {...props} 
    />
  ),
}
