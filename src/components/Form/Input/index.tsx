'use client'

import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps, FormErrorMessage } from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";
import { FieldError } from 'react-hook-form'

type InputProps = ChakraInputProps & {
  name: string;
  error?: FieldError;
}


const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ name, error = null, ...rest }, ref) => {
  return (
    <FormControl isInvalid={!!error}>
      <ChakraInput
        name={name}
        id={name}
        variant='filled'
        size='lg'
        width='100%'
        ref={ref}
        {...rest}
      />

     {/* {!!error && (
        <FormErrorMessage>
          {error.message}
        </FormErrorMessage>
      )} */}
    </FormControl>
  )
}


export const Input = forwardRef(InputBase);