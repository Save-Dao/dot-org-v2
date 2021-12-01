import React, { useContext } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button
} from '@chakra-ui/react';

import { AppContext } from '../context/AppContext';

import { faq_items } from '../utils/constants';

export const FAQ = () => {
  const context = useContext(AppContext);
  return (
    <Modal
      onClose={() => context.updateFaqModalStatus(false)}
      isOpen={context.faqModalStatus}
      isCentered
      scrollBehavior='inside'
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>FAQs</ModalHeader>
        <ModalBody>
          <Accordion defaultIndex={[0]}>
            {faq_items.map((item, index) => {
              return (
                <AccordionItem key={index} fontFamily='spaceMono'>
                  <AccordionButton color='purple' textTransform='uppercase'>
                    <Box flex='1' textAlign='left'>
                      {item.q}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel pb={4}>{item.a}</AccordionPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </ModalBody>
        <ModalFooter>
          <Button
            variant='primary'
            onClick={() => {
              context.updateFaqModalStatus(false);
            }}
          >
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
