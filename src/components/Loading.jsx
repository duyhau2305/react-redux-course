import React from 'react';
import { useSelector } from 'react-redux';
import {
  Spinner
} from '@chakra-ui/react'

function Loading() {
  const isLoading = useSelector(state => state.app.isLoading);

  if(!isLoading) return null;

  return (
    <div className='loading'>
      <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='xl'
      />
    </div>
  )
}

export default Loading