import { Text, Container } from '@chakra-ui/react'
import { IoIosMusicalNote } from "react-icons/io";
import SoundController from './components/SoundController';

function App() {
  return (
    <>
      <Container bg={'white'} w={'full'} h={'0px'} alignItems={'center'} display={'flex-col'} justifyItems={'center'} mt={'30px'} >
        <IoIosMusicalNote size={'40px'} />
      </Container>
      <Container bg={'white'} w={'full'} h={'full'} alignItems={'center'} display={'flex-col'} justifyItems={'center'} mt={'100px'} >
        <Text fontSize={'2xl'} fontFamily={'sans-serif'} fontWeight={'bold'} mb={'20px'}> Welcome to the choir!</Text> 
        <SoundController/>
      </Container>
    </>
  )
}

export default App
