'use client'

import { Flex, Stack, Textarea, Button } from '@chakra-ui/react'
import { register } from 'module'
import { Input } from '../Input/index';
import React from 'react'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form'
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

export default function Contact() {

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema)
  });
  const { errors } = formState;

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    console.log(values);
  }

 
 


  return (
    <Flex
        borderRadius={8}
        flexDir='column'
        onSubmit={handleSubmit(handleSignIn)}
        as='form'
        >

        <Flex
        width='100%'
        justify='center'
        align='center'
        borderRadius={8}
        flexDir={['column','row']}
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing='4' mb={['4', 0]} mr={[0, '4']}>
          <Input
          size={['md','lg']}
           placeholder='Nome*'
            error={errors.email}
            {...register('name')}
          />
          <Input
            size={['md','lg']}
            placeholder='E-mail*'
            type='email'
            error={errors.email}
            {...register('email')}
          />
          <Input
           placeholder='Empresa*'
           size={['md','lg']}
            error={errors.company}
            {...register('company')}
          />
        </Stack>
        
        <Stack spacing='4'>
          <Input
          size={['md','lg']}
           placeholder='Telefone*'
            error={errors.telephone}
            {...register('telephone')}
          />
          <Input
          size={['md','lg']}
           placeholder='Cidade*'
            error={errors.city}
            {...register('city')}
          />
          <Input
          size={['md','lg']}
           placeholder='Segmento*'
          error={errors.segmentation}
          {...register('segmentation')}
          />
        </Stack>
        </Flex>
        <Textarea placeholder='Informações adicionais' mt='4' maxWidth={[250,550]} alignSelf='center' resize='none'  _placeholder={{  color: 'white' }} textColor='white'{...register('description')}/>
        <Button
          type='submit'
          mt='6'
          alignSelf={['center']}
          width='200px'
          colorScheme='green'
          size='md'
          mb='10'
          isLoading={formState.isSubmitting}
        >
          Enviar
        </Button>
        </Flex>
  )
}
