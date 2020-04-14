import React from 'react';
import { CustomIcon } from 'components/Icons/CustomIcon';
import { calendar } from 'react-icons-kit/icomoon/calendar';
import { plus } from 'react-icons-kit/icomoon/plus';
import { minus } from 'react-icons-kit/icomoon/minus';
import { list2 } from 'react-icons-kit/icomoon/list2';
import { archive } from 'react-icons-kit/fa/archive';
import './main.scss';

interface Iicon {
  size?: number;
}

export const PlusIcon: React.FC<Iicon> = (props: Iicon) => (
  <CustomIcon icon={plus} label="plus" classStyle="plus-icon" />
);

export const MinusIcon: React.FC<Iicon> = (props: Iicon) => (
  <CustomIcon icon={minus} label="" classStyle="minus-icon" />
);

export const StoreIcon = () => <CustomIcon icon={archive} label="Store" classStyle="icon" />;
export const ListIcon = () => <CustomIcon icon={list2} label="Shopping" classStyle="icon" />;

export const CalendarIcon = () => <CustomIcon icon={calendar} label="Notify" classStyle="icon" />;
