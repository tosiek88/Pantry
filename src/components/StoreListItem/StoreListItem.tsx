import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import { Category } from '../Category/Category';
import { ItemControl } from '../ItemControl/ItemControl';
import { ListItemContent } from '../ListItemContent/ListItemContent';
import './main.scss';
import vegetables from '../../asset/icons/PNG  64 x 64/vegetables.png';
import dairy from '../../asset/icons/PNG  64 x 64/dairy.png';

export interface StoreListItemProps {
  categoryLabel: string;
}

export const StoreListItem: React.FC<StoreListItemProps> = ({
  categoryLabel,
}: StoreListItemProps) => {
  return (
    <ListItem>
      <Category label={categoryLabel} />
      <ListItemContent />
      <ItemControl />
    </ListItem>
  );
};
