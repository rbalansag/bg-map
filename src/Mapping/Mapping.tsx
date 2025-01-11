import React from 'react';

export interface MappingProps {
  message: string;
}

export const Mapping: React.FC<MappingProps> = ({ message }) => {
  return <div>{message}</div>;
};
