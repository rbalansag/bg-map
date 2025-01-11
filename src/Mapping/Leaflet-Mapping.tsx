import React from 'react';

export interface LeafletMappingProps {
  message: string;
}

export const LeafletMapping: React.FC<LeafletMappingProps> = ({ message }) => {
  return <div>{message}</div>;
};
