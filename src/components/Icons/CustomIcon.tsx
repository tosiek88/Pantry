import React from 'react';
import { Icon } from 'react-icons-kit';

export interface CustomIconProps {
    label: string;
    icon: {};
    size?: number;
    classStyle?: string;
}

export const CustomIcon: React.FC<CustomIconProps> = ({ classStyle, size, label, icon }: CustomIconProps) => {
    size = size ? size : 40;
    return (
        <div className={classStyle}>
            <>
                <p style={{ marginRight: '20px' }}>{label}</p>
            </>
            <div className={classStyle}>
                <Icon icon={icon} size={size} />
            </div>
        </div>
    );
};
