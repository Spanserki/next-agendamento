import { Box, Button, Flex, Heading, Icon, Text, useToast } from "@chakra-ui/react";
import { MultiStep } from "@ignite-ui/react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { ArrowRight, CheckCircle } from "phosphor-react";

export default function ConnectGoogle() {

    const session = useSession()
    const router = useRouter()

    const hasAuthError = !!router.query.error
    const isAuthenticated = session.status === 'authenticated'

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
                    <Heading>Conecte sua agenda!</Heading>

                    <Text
                        mt={3}
                        color='gray.400'
                    >
                        Conecte o seu calendário para verificar automaticamente as horas ocupadas e os novos eventos à medida em que são agendados.
                    </Text>
                </Box>

                <MultiStep size={4} currentStep={2} />
            </Flex>

            <Flex
                flexDir='column'
                p={8}
                bgColor='gray.800'
                w={550}
                borderRadius={8}
                gap={5}
            >
                <Flex
                    w='100%'
                    alignItems='center'
                    justifyContent='space-between'
                    border='1px solid #2D3748'
                    borderRadius={8}
                    p={5}
                >
                    <Text>Google Calendar</Text>

                    {
                        isAuthenticated ? (
                            <Button
                                fontSize='sm'
                                type="submit"
                                bgColor='gray.800'
                                _hover={{ bgColor: 'transparent' }}
                                isDisabled
                            >
                                Conectado
                                <Icon as={CheckCircle} ml={2} color='green' fontSize={20}/>
                            </Button>
                        ) : (
                            <Button
                                fontSize='sm'
                                type="submit"
                                bgColor='green.700'
                                _hover={{ opacity: '0.7' }}

                                onClick={() => signIn('google')}

                                isDisabled={isAuthenticated}
                            >
                                Conectar
                                <Icon as={ArrowRight} ml={2} />
                            </Button>
                        )
                    }

                </Flex>

                {hasAuthError && (
                    <Text
                        fontSize='sm'
                        color='red.300'
                    >
                        Falha ao se conectar ao Google, verifique se você habilitou as permissões de acesso ao Google Calendar.
                    </Text>
                )}

                <Button
                    fontSize='sm'
                    type="submit"
                    bgColor='green.700'
                    _hover={{ opacity: '0.7' }}

                    isDisabled={!isAuthenticated}
                >
                    Próximo passo
                    <Icon as={ArrowRight} ml={2} />
                </Button>
            </Flex>
        </Flex>
    )
}