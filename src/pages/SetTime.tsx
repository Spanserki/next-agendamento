import { Box, Button, Checkbox, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import { MultiStep } from "@ignite-ui/react";
import { ArrowRight } from "phosphor-react";

const constentDays = [
    { id: 1, day: 'Segunda-feira', startTime: '8:00h', endTime: '15:00h' },
    { id: 2, day: 'Terça-feira', startTime: '8:00h', endTime: '15:00h' },
    { id: 3, day: 'Quarta-feira', startTime: '8:00h', endTime: '15:00h' },
    { id: 4, day: 'Quinta-feira', startTime: '8:00h', endTime: '15:00h' },
    { id: 5, day: 'Sexta-feira', startTime: '8:00h', endTime: '15:00h' },
    { id: 6, day: 'Sábado', startTime: '8:00h', endTime: '15:00h' },
    { id: 7, day: 'Domingo', startTime: '8:00h', endTime: '15:00h' },
]


export default function SetTime() {

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
                    <Heading>Quase lá</Heading>

                    <Text
                        mt={3}
                        color='gray.400'
                    >
                        Defina o intervalo de horários que você está disponível em cada dia da semana.
                    </Text>
                </Box>

                <MultiStep size={4} currentStep={3} />
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
                    flexDir='column'
                    w='100%'
                    alignItems='center'
                    justifyContent='space-between'
                    borderRadius={8}
                >
                    {
                        constentDays.map(day => {
                            return (
                                <Flex
                                    key={day.id}
                                    w='100%'
                                    alignItems='center'
                                    justifyContent='space-between'
                                    p={3}
                                    border='2px solid RGBA(0, 0, 0, 0.16)'
                                >
                                    <Flex
                                        gap={2}
                                    >
                                        <Checkbox
                                            borderColor='gray.500'
                                            colorScheme='green'
                                            borderRadius={2}
                                        />
                                        <Text>{day.day}</Text>
                                    </Flex>

                                    <Flex
                                    gap={2}>
                                        <Flex
                                            bgColor='RGBA(0, 0, 0, 0.24)'
                                            p='5px 10px 5px 10px'
                                            borderRadius={5}
                                        >
                                            <Text>{day.startTime}</Text>
                                        </Flex>
                                        <Flex
                                            bgColor='RGBA(0, 0, 0, 0.24)'
                                            p='5px 10px 5px 10px'
                                            borderRadius={5}
                                        >
                                            <Text>{day.endTime}</Text>
                                        </Flex>


                                    </Flex>
                                </Flex>
                            )
                        })
                    }

                </Flex>

                <Button
                    fontSize='sm'
                    type="submit"
                    bgColor='green.700'
                    _hover={{ opacity: '0.7' }}
                >
                    Próximo passo
                    <Icon as={ArrowRight} ml={2} />
                </Button>
            </Flex>
        </Flex>
    )
}