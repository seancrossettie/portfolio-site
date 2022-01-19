import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { IconButton, useColorMode } from '@chakra-ui/react';
import React from 'react';

const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const iconColor = {
    light: 'black',
    dark: 'white'
  };

  return (
    <IconButton 
      aria-label={'Dark mode switch'}
      mx={[0, 0, 2]}
      variant={'ghost'}
      icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
      onClick={toggleColorMode}
      color={iconColor[colorMode]}
    />
  )
};

export default DarkModeSwitch;
