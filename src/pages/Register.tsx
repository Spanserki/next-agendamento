import {
    Box,
    Button,
    Flex,
    Heading, Icon, Input,
    InputGroup,
    InputLeftAddon,
    Text
} from "@chakra-ui/react";
import { ArrowRight } from "phosphor-react";
import { zodResolver } from '@hookform/resolvers/zod';
import { MultiStep } from "@ignite-ui/react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/router";
import { useEffect } from "react";

const claimUsernameFormSchema = z.object({
    username: z.string()
        .min(3, { message: 'Mínimo 3 caracteres' })
        .regex(/^([a-z\\-]+)$/i, { message: 'Apenas letras e hifens ' })
        .transform(ussername => ussername.toLowerCase()),
    completeName: z.string()
        .min(3, { message: 'Mínimo 3 caracteres' })
        .regex(/^([a-z\\-]+)$/i, { message: 'Apenas letras e hifens ' })
        .transform(ussername => ussername.toLowerCase())
})

type ClaimUsernameFormData = z.infer<typeof claimUsernameFormSchema>

export default function Register() {

    const { register, handleSubmit, setValue, formState: { errors, isSubmitting } } = useForm<ClaimUsernameFormData>({
        resolver: zodResolver(claimUsernameFormSchema)
    })

    const router = useRouter()

    useEffect(() => {
        if (router.query.username) {
            setValue('username', String(router.query.username))
        }
    }, [router.query?.username, setValue])

    async function handlePreRegister(data: ClaimUsernameFormData) {
        console.log(data)
    }

    return (
        <Flex
            flexDir='column'
            w='100%'
            alignItems='center'
            justifyContent='center'
            margin='50px auto'
            gap={5}
        >
            <Flex
                flexDir='column'
                maxW={480}
                gap={10}
            >
                <Box>
                    <Heading>Bem-vindo ao Ignite Call!</Heading>

                    <Text
                        mt={3}
                        color='gray.400'
                    >
                        Precisamos de algumas informações para criar seu perfil! Ah, você pode editar essas informações depois.
                    </Text>
                </Box>

                <MultiStep size={4} currentStep={1} />
            </Flex>

            <Flex
                as='form'
                onSubmit={handleSubmit(handlePreRegister)}
                flexDir='column'
                p={8}
                bgColor='gray.800'
                w={550}
                borderRadius={8}
            >
                <Flex
                    flexDir='column'
                    w='100%'
                    gap={3}
                >
                    <Text>Nome de usuário</Text>

                    <InputGroup>
                        <InputLeftAddon
                            children='call.com/'
                            fontSize='sm'
                            border='none'
                            bgColor='black'
                            color='gray.500'
                        />
                        <Input
                            border='none'
                            focusBorderColor="green.700"
                            fontSize='sm'
                            bgColor='black'

                            {...register('username')}
                        />
                    </InputGroup>

                    <Text
                        pb={3}
                        fontSize={14}
                        color='red.500'
                    >
                        {errors.username?.message}
                    </Text>
                </Flex>

                <Flex
                    flexDir='column'
                    gap={3}
                >
                    <Text>Nome completo</Text>

                    <Input
                        fontSize='sm'
                        border='none'
                        bgColor='black'
                        focusBorderColor="green.700"

                        {...register('completeName')}
                    />

                    <Text
                        pb={4}
                        fontSize={14}
                        color='red.500'
                    >
                        {errors.completeName?.message}
                    </Text>
                </Flex>

                <Button
                    fontSize='sm'
                    type="submit"
                    bgColor='green.700'
                    _hover={{ opacity: '0.7' }}
                    isDisabled={isSubmitting}
                    isLoading={isSubmitting}
                >
                    Próximo passo
                    <Icon as={ArrowRight} ml={2} />
                </Button>
            </Flex>
        </Flex>
    )
}