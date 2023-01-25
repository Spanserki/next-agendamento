import { border, Button, Flex, Icon, Input, InputGroup, InputLeftAddon, Text } from "@chakra-ui/react";
import { ArrowRight } from "phosphor-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from "next/router";

const claimUsernameFormSchema = z.object({
    username: z.string()
        .min(3, { message: 'Mínimo 3 caracteres' })
        .regex(/^([a-z\\-]+)$/i, { message: 'Apenas letras e hifens ' })
        .transform(ussername => ussername.toLowerCase())
})

type ClaimUsernameFormData = z.infer<typeof claimUsernameFormSchema>

export default function ClaimUsernameForm() {

    const router = useRouter()

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting }
    }
        = useForm<ClaimUsernameFormData>({

            resolver: zodResolver(claimUsernameFormSchema)
        })

    async function handlePreRegister(data: ClaimUsernameFormData) {
        const { username } = data;

        await router.push(`/Register?username=${username}`)
    }

    return (
        <Flex
            as='form'
            onSubmit={handleSubmit(handlePreRegister)}
            bgColor='gray.800'
            display='grid'
            gridTemplateColumns={{ base: '1fr', md: '1fr', lg: '1fr auto' }}
            gap={2}
            mt={4}
            p={4}
        >
            <InputGroup>
                <InputLeftAddon
                    children='Ignite.com/'
                    fontSize='sm'
                    border='none'
                    bgColor='black'
                />
                <Input
                    placeholder='seu-usuário'
                    border='none'
                    focusBorderColor="green.700"
                    fontSize='sm'
                    bgColor='black'
                    autoComplete="none"

                    {...register('username')}
                />
            </InputGroup>

            <Button
                fontSize='sm'
                type="submit"
                bgColor='green.700'
                _hover={{ opacity: '0.7' }}

                isLoading={isSubmitting}
                isDisabled={isSubmitting}
            >
                Reservar
                <Icon as={ArrowRight} ml={2} />
            </Button>

            <Text
                h={4}
                fontSize={14}
                color='red.500'
            >
                {errors.username?.message}
            </Text>
        </Flex>
    )
}