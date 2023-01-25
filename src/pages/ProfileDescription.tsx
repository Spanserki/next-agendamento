import { Box, Button, Checkbox, Flex, Heading, Icon, Image, Text, Textarea } from "@chakra-ui/react";
import { MultiStep } from "@ignite-ui/react";
import { ArrowRight } from "phosphor-react";


export default function ProfileDescription() {

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
                    <Heading>Defina sua disponibilidade</Heading>

                    <Text
                        mt={3}
                        color='gray.400'
                    >
                        Por último, uma breve descrição e uma foto de perfil.
                    </Text>
                </Box>

                <MultiStep size={4} currentStep={4} />
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
                    gap={2}
                >
                    <Text color='gray.300'>Foto de perfil</Text>

                    <Flex
                        alignItems='center'
                        gap={5}
                    >
                        <Image
                            src="https://github.com/Spanserki.png"
                            borderRadius='full'
                            maxW='80px'
                        />

                        <Button
                            bgColor='gray.800'
                            color='green.700'
                            border='2px solid #276749'
                            _hover={{ color: '#E2E8F0' }}
                        >
                            Selecionar foto
                        </Button>
                    </Flex>

                    <Flex
                        flexDir='column'
                        mt={5}
                        gap={2}
                    >
                        <Text color='gray.300'>Sobre você</Text>

                        <Textarea
                            h={150}
                            fontSize={15}
                            border='none'
                            bgColor='RGBA(0, 0, 0, 0.24)'
                            focusBorderColor="green.700"
                        />
                    </Flex>
                </Flex>

                <Button
                    fontSize='sm'
                    type="submit"
                    bgColor='green.700'
                    _hover={{ opacity: '0.7' }}
                >
                    Finalizar
                    <Icon as={ArrowRight} ml={2} />
                </Button>
            </Flex>
        </Flex>
    )
}