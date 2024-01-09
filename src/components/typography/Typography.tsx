import { CSSProperties, FC, ReactNode } from 'react';

type ColorString = 'primary' | 'secondary' | 'white' | 'black';

type Props = {
  children: ReactNode;
  color?: ColorString;
  isCenter?: boolean;
  className?: string;
  style?: CSSProperties;
};

const colorFn = (color?: ColorString): string => {
  return color ? `text-${color}` : '';
};

const centerFn = (isCenter?: boolean): string => {
  return isCenter ? 'text-center' : '';
};

/**
 * H1
 */
export const H1: FC<Props> = ({ children, color, isCenter, className, style }) => {
  return (
    <h1
      style={{
        fontWeight: 'bold',
        ...style,
      }}
      className={`text-3xl ${colorFn(color)} ${centerFn(isCenter)} ${className}`}
    >
      {children}
    </h1>
  );
};

/**
 * H2
 */
export const H2: FC<Props> = ({ children, color, isCenter, className, style }) => {
  return (
    <h2
      style={{
        fontWeight: 'bold',
        ...style,
      }}
      className={`text-2xl scroll-m-20 ${colorFn(color)} ${centerFn(isCenter)} ${className}`}
    >
      {children}
    </h2>
  );
};

/**
 * H3
 */
export const H3: FC<Props> = ({ children, color, isCenter, className, style }) => {
  return (
    <h3
      style={{
        fontWeight: 500,
        ...style,
      }}
      className={`text-xl ${colorFn(color)} ${centerFn(isCenter)} ${className}`}
    >
      {children}
    </h3>
  );
};

/**
 * H4
 */
export const H4: FC<Props> = ({ children, color, isCenter, className, style }) => {
  return (
    <h4
      style={{
        fontWeight: 500,
        ...style,
      }}
      className={`text-lg ${colorFn(color)} ${centerFn(isCenter)} ${className}`}
    >
      {children}
    </h4>
  );
};

/**
 * H5
 */
export const H5: FC<Props> = ({ children, color, isCenter, className, style }) => {
  return (
    <h5
      style={{
        fontWeight: 500,
        ...style,
      }}
      className={`text-lg ${colorFn(color)} ${centerFn(isCenter)} ${className}`}
    >
      {children}
    </h5>
  );
};

/**
 * Body
 */
export const BodyTypo: FC<Props> = ({ children, color, isCenter, className, style }) => {
  return (
    <p
      style={{
        fontWeight: 400,
        ...style,
      }}
      className={`text-base ${colorFn(color)} ${centerFn(isCenter)} ${className}`}
    >
      {children}
    </p>
  );
};

/**
 * Body2
 */
export const Body2Typo: FC<Props> = ({ children, color, isCenter, className, style }) => {
  return (
    <p
      style={{
        fontWeight: 200,
        ...style,
      }}
      className={`text-base ${colorFn(color)} ${centerFn(isCenter)} ${className}`}
    >
      {children}
    </p>
  );
};

/**
 * Caption
 */
export const Caption: FC<Props> = ({ children, color, isCenter, className, style }) => {
  return (
    <p
      style={{
        fontWeight: 400,
        ...style,
      }}
      className={`text-sm ${colorFn(color)} ${centerFn(isCenter)} ${className}`}
    >
      {children}
    </p>
  );
};
