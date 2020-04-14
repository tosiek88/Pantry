import React from 'react';
import { Icon } from 'react-icons-kit';

export interface CustomIconProps {
  label: string;
  icon: {};
  size?: number;
  classStyle?: string;
}

export const CustomIcon: React.FC<CustomIconProps> = (
  props: CustomIconProps
) => {
  const size = props.size === undefined ? 40 : props.size;
  return (
    <div className={props.classStyle}>
      <>
        <p style={{ marginRight: '20px' }}>{props.label}</p>
      </>
      <div className={props.classStyle}>
        <Icon icon={props.icon} size={size} />
      </div>
    </div>
  );
};
