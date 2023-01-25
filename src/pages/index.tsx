import { Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import previewImage from '../assets/app-preview.png'
import ClaimUsernameForm from "../components/ClaimUsernameForm";

export default function Home() {
  return (
    <Flex
      maxWidth='calc(100vw - (100vw - 1160px) / 2)'
      h='100vh'
      marginLeft='auto'
      alignItems='center'
      gap={20}
    >
      <Flex
        flexDir='column'
        maxW={480}
        p='0 10px'
        gap={5}
      >
        <Heading fontSize='4xl'>Agendamento descomplicado</Heading>

        <Text
          fontSize='lg'
          color='gray.400'
        >
          Conecte seu calendário e permita que as pessoas marquem agendamentos no seu tempo livre.
        </Text>

        <ClaimUsernameForm />
      </Flex>

      <Flex>
        <Image
          src={previewImage}
          height={400}
          quality={100}
          priority
          alt="Calendário"
        />
      </Flex>
    </Flex>
  )
}
