import React, { FC } from 'react';
import { CustomIcon } from '../CustomIcon';
import { calendar } from 'react-icons-kit/icomoon/calendar';
import { plus } from 'react-icons-kit/icomoon/plus';
import { minus } from 'react-icons-kit/icomoon/minus';
import { list2 } from 'react-icons-kit/icomoon/list2';
import { archive } from 'react-icons-kit/fa/archive';
import './main.scss';

export const PlusIcon: React.FC<{ size?: number }> = (props: {
  size?: number;
}) => <CustomIcon icon={plus} label="" classStyle="plus-icon" />;

export const MinusIcon: React.FC<{ size?: number }> = (props: {
  size?: number;
}) => <CustomIcon icon={minus} label="" classStyle="minus-icon" />;

export const StoreIcon = () => (
  <CustomIcon icon={archive} label="Store" classStyle="icon" />
);
export const ListIcon = () => (
  <CustomIcon icon={list2} label="Shopping" classStyle="icon" />
);

export const CalendarIcon = () => (
  <CustomIcon icon={calendar} label="Notify" classStyle="icon" />
);
