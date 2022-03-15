import React, { useState, useContext } from 'react';
import { Flex, FormControl, FormLabel, Stack } from '@chakra-ui/react';

import { AppContext } from '../../context/AppContext';

import StageButtonGroup from '../../shared/StageButtonGroup';

import { StyledInput, StyledTextArea } from '../../themes/styled';

export const StepOne = () => {
  const context = useContext(AppContext);

  const [buttonClick, setButtonClickStatus] = useState(false);

  return (
    <Flex
      w='100%'
      direction='column'
      px={{ base: '2rem', lg: '5rem' }}
      py='2rem'
    >
      <Stack
        mb={{ base: 10, lg: 0 }}
        direction={{ base: 'column', lg: 'row' }}
        spacing={{ base: 0, lg: 5 }}
      >
        <FormControl
          isRequired
          isInvalid={context.j_name === '' && buttonClick ? true : false}
          fontFamily='spaceMono'
          color='white'
          mb={10}
        >
          <FormLabel>Enter, Apprentice! What is your name?</FormLabel>
          <StyledInput
            placeholder='Your Name'
            onChange={context.inputChangeHandler}
            name='j_name'
            value={context.j_name}
          />
        </FormControl>

        <FormControl
          isRequired
          isInvalid={context.j_email === '' && buttonClick ? true : false}
          fontFamily='spaceMono'
          color='white'
        >
          <FormLabel>What is your email address?</FormLabel>
          <StyledInput
            type='email'
            placeholder='Your email address'
            onChange={context.inputChangeHandler}
            name='j_email'
            value={context.j_email}
          />
        </FormControl>
      </Stack>

      <FormControl
        mb={10}
        isRequired
        isInvalid={context.j_bio === '' && buttonClick ? true : false}
        fontFamily='spaceMono'
        color='white'
      >
        <FormLabel>
          What is your profession? How do you busy yourself?{' '}
        </FormLabel>
        <StyledTextArea
          placeholder='A short introduction'
          onChange={context.inputChangeHandler}
          name='j_bio'
          value={context.j_bio}
        />
      </FormControl>

      <FormControl
        mb={10}
        isRequired
        isInvalid={context.j_bio === '' && buttonClick ? true : false}
        fontFamily='spaceMono'
        color='white'
      >
        <FormLabel color='white'>How do you like to learn?</FormLabel>
        <StyledTextArea
          placeholder='Your learning goals'
          onChange={context.inputChangeHandler}
          name='j_goals'
          value={context.j_goals}
        />
      </FormControl>

      <StageButtonGroup
        formType={'join'}
        updateStage={context.updateStage}
        updateFaqModalStatus={context.updateFaqModalStatus}
        setButtonClickStatus={setButtonClickStatus}
        stageRule={
          context.j_name && context.j_email && context.j_bio && context.j_goals
        }
      />
    </Flex>
  );
};
