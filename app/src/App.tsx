import { ChakraProvider, Heading } from "@chakra-ui/react";

function App({ text }: { text?: string }) {
  return (
    <ChakraProvider>
      <Heading as="h1">{text}</Heading>
    </ChakraProvider>
  );
}

export default App;
