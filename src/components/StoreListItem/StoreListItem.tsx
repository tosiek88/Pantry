import React, { useState, useContext } from 'react';
import ListItem from '@material-ui/core/ListItem';
import { Category } from '../Category/Category';
import { CATEGORY } from '../Category/Category';
import { ItemControl } from '../ItemControl/ItemControl';
import { ListItemContent } from '../ListItemContent/ListItemContent';
import './main.scss';
import vegetables from '../../asset/icons/PNG  64 x 64/vegetables.png';
import dairy from '../../asset/icons/PNG  64 x 64/dairy.png';
import { ItemsContext } from '../../App';

export interface StoreListItemProps {
  categoryLabel: string;
}

export const StoreListItem: React.FC<StoreListItemProps> = ({
  categoryLabel,
}: StoreListItemProps) => {
  const state = useContext(ItemsContext);
  console.log(state);

  const onClick = (e: any) => {
    state.setStore(state.store, state.store);
    console.log(state.store);
  };

  return (
    <ListItem>
      <button onClick={onClick}>test</button>
      <Category label={categoryLabel} />
      <ListItemContent />
      <ItemControl />
    </ListItem>
  );
};
