'use client'

import React from 'react'
import { Input } from './Input'
import { Button, Flex, Stack, Text } from '@chakra-ui/react'
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
    <Flex align='center' flexDir='column' justify='center' as='form'>
      <Text fontSize={['medium','large','x-large']} textAlign='center' cursor='pointer' mb={['5','10']} color='white' >Cadastre-se e saiba como proporcionar experiências incríveis.</Text>
      <Flex
        width='90%'
        flexDir={['column','row']}
        borderRadius={8}
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Flex flexDir={['column']} maxWidth={['100%','50%']} align='center' mr={['0','5']}>
          <Text fontSize={['large','x-large']} textAlign='center' cursor='pointer'  mb={['5','10']} color='white' fontWeight='bold' >AUMENTE O FLUXO DE CLIENTES EM SEU ESTABELECIMENTO.</Text>
          <Text fontSize={['small','large']} color='white' textAlign={['center','justify']}  mb={['5','10']} width={['80%']}>Disponibilize descontos exlusivos e ganhe um maior fluxo de pessoas em seu estabelecimento, gerando economia e uma experiencia fantastica aos nossos associados.</Text>
        </Flex>
        <Flex
        borderRadius={8}
        flexDir='column'
        onSubmit={handleSubmit(handleSignIn)}
      >

        <Flex
        width='100%'
        justify='flex-end'
        borderRadius={8}
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing='4' mr='5'>
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
        <Textarea placeholder='Informações adicionais' mt='4' maxWidth={500} alignSelf='flex-end' resize='none'  _placeholder={{  color: 'white' }} textColor='white'{...register('description')}/>
        <Button
          type='submit'
          mt='6'
          alignSelf={['center','flex-end']}
          width='200px'
          colorScheme='green'
          size='md'
          isLoading={formState.isSubmitting}
        >
          Enviar
        </Button>
        </Flex>
      </Flex>
      
    </Flex>
  )
}
