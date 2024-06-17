'use client'

import React from 'react'
import { Input } from './Input'
import { Button, Flex, Stack } from '@chakra-ui/react'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Textarea } from '@chakra-ui/react'

type SignInFormData = {
  name:string;
  telephone:string;
  email: string;
  city:string;
  company:string;
  segmentation:string;
  description?: string;
}

const signInFormSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório.'),
  telephone: yup.string().required('Telefone obrigatório.'),
  city: yup.string().required('Cidade obrigatória.'),
  company: yup.string().required('Empresa obrigatória.'),
  segmentation: yup.string().required('Segmento obrigatório.'),
  description: yup.string(),
  email: yup.string().required('Email obrigatório.').email('E-mail inválido'),
  
})


export default function Form() {

  

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema)
  });
  const { errors } = formState;

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    console.log(values);
  }

  return (
    <Flex maxWidth={900} align='center' justify='center' as='form'>
      <Flex
        width='100%'
        borderRadius={8}
        flexDir='column'
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Flex
        width='100%'
        borderRadius={8}
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing='4' mr='5'>
          <Input
           placeholder='Nome*'
            error={errors.email}
            {...register('name')}
          />
          <Input
            placeholder='E-mail*'
            type='email'
            error={errors.email}
            {...register('email')}
          />
          <Input
           placeholder='Empresa*'
            error={errors.company}
            {...register('company')}
          />
        </Stack>
        
        <Stack spacing='4'>
          <Input
           placeholder='Telefone*'
            error={errors.telephone}
            {...register('telephone')}
          />
          <Input
           placeholder='Cidade*'
            error={errors.city}
            {...register('city')}
          />
          <Input
           placeholder='Segmento*'
            error={errors.segmentation}
            {...register('segmentation')}
          />
        </Stack>
        </Flex>
        <Textarea placeholder='Informações adicionais' mt='4' maxWidth={500} resize='none' {...register('description')}/>
        <Button
          type='submit'
          mt='6'
          maxWidth={200}
          colorScheme='green'
          size='lg'
          isLoading={formState.isSubmitting}
        >
          Enviar
        </Button>
      </Flex>
      
    </Flex>
  )
}
