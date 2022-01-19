import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, IconButton, useColorMode } from '@chakra-ui/react';
import styled from '@emotion/styled';
import React from 'react';
import { signInUser, signOutUser } from '../../helpers/auth';
import DarkModeSwitch from './DarkModeSwitch';

const Container = ({ children, user }) => {
  const { colorMode } = useColorMode();

  const bgColor = {
    light: 'white',
    dark: '#171717'
  };

  const color = {
    light: 'black',
    dark: 'white'
  };

  const StickyNav = styled(Flex)`
    position: sticky;
    z-index: 10;
    top: 0;
    backdrop-filter: saturate(180%) blur(20%);
    transition: height .5s, line-height .5s;
  `;



  return (
    <>
      <StickyNav
        flexDirection={"row"}
        justifyContent={"space-evenly"}
        alignItems={"center"}
        maxWidth={"800px"}
        minWidth={"356px"}
        width={"100%"}
        as="nav"
        px={[2, 6, 6]}
        py={2}
        mt={8}
        mb={[0, 0, 8]}
        mx={"auto"}
        bg={bgColor[colorMode]}
      >
        <Box>
          <DarkModeSwitch />
          <Button fontWeight={'light'} mx={[0, 0, 2]} variant={'ghost'}>Home</Button>
          <Button fontWeight={'light'} mx={[0, 0, 2]} variant={'ghost'}>Blog</Button>
          <Button fontWeight={'light'} mx={[0, 0, 2]} variant={'ghost'}>Portfolio</Button>
          <Button fontWeight={'light'} mx={[0, 0, 2]} variant={'ghost'}>About</Button>
          {user
            ? <IconButton mx={[0, 0, 2]} icon={<ArrowLeftIcon />} variant={'ghost'} onClick={() => signOutUser()} />
            : <IconButton mx={[0, 0, 2]} icon={<ArrowRightIcon />} variant={'ghost'} onClick={() => signInUser()} />
          }
        </Box>
      </StickyNav>
      <Flex
        as="main"
        justifyContent={"center"}
        flexDirection={"column"}
        px={[0, 4, 4]}
        mt={[4, 8, 8]}
        bgColor={bgColor[colorMode]}
        color={color[colorMode]}
      >
        {children}
      </Flex>
    </>
  )
};

export default Container;
