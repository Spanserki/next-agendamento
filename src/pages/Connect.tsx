import { Box, Button, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import { MultiStep } from "@ignite-ui/react";
import { ArrowRight } from "phosphor-react";


export default function Connect() {

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
                    <Text>Google Agenda</Text>

                    <Button
                        fontSize='sm'
                        type="submit"
                        bgColor='green.700'
                        _hover={{ opacity: '0.7' }}
                    >
                        Conectar
                        <Icon as={ArrowRight} ml={2} />
                    </Button>

                </Flex>

                <Button
                    fontSize='sm'
                    type="submit"
                    bgColor='gray.400'
                    _hover={{ opacity: '0.7' }}
                >
                    Próximo passo
                    <Icon as={ArrowRight} ml={2} />
                </Button>
            </Flex>
        </Flex>
    )
}