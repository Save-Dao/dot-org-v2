import { Flex, SimpleGrid, Image } from '@chakra-ui/react';
import Link from 'next/link';

import { theme } from '../../themes/theme';
import { Header } from '../../shared/Header';

import {
  StyledPrimaryButton,
  StyledSecondaryButton,
  StyledPrimaryHeading
} from '../../themes/styled';

export const FirstPaint = ({ windowWidth }) => {
  return (
    <SimpleGrid
      rows='1'
      placeItems='center'
      border='2px solid'
      borderColor='red'
      py='2rem'
      px={{ base: '1rem', lg: '4rem' }}
      mx='1rem'
    >
      <Header windowWidth={windowWidth} />
      <Flex
        direction={{ base: 'column-reverse', lg: 'row' }}
        alignItems='center'
        justifyContent='space-between'
      >
        <Flex
          direction='column'
          justifyContent='center'
          alignItems='start'
          maxW={{ lg: '50%' }}
        >
          <StyledPrimaryHeading maxW='720px' fontSize={{ lg: '36px' }}>
            A Decentralized Collective of Mercenaries Ready to Slay Your Web3
            Product Demons.
          </StyledPrimaryHeading>
          <Flex
            w='100%'
            mt={{ base: '2rem' }}
            direction='row'
            justifyContent={{ base: 'center', lg: 'flex-start' }}
          >
            <Link href='/hire' passHref>
              <StyledPrimaryButton
                minW={{ base: 'auto' }}
                fontSize={{ base: '16px', lg: '18px' }}
                mr='1rem'
              >
                Hire Us
              </StyledPrimaryButton>
            </Link>
            <Link href='/join' passHref>
              <StyledSecondaryButton
                minW={{ base: 'auto' }}
                fontSize={{ base: '16px', lg: '18px' }}
              >
                Join Us
              </StyledSecondaryButton>
            </Link>
          </Flex>
        </Flex>
        <Image
          src={theme.images.raidBanner}
          fallbackSrc='/assets/raid__banner.png'
          alt='raid-banner'
          width={{ base: '450px', md: '500px', lg: '550px' }}
        />
      </Flex>
    </SimpleGrid>
  );
};
