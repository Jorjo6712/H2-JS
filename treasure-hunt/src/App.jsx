import { Box, Text } from '@chakra-ui/react'
import { useRef, useEffect, useCallback, useState } from 'react';
import { useToast } from '@chakra-ui/react'
import treasureMap from '../imgs/treasuremap.png'

function App() {

  const canvasRef = useRef(null)

  const toast = useToast()

  const treasureMapImage = new Image(1075,825)

  const [treasureCoordinates, setTreasureCoordinates] = useState(null)

  const handleClick = (event) => {
    const rect = canvasRef.current.getBoundingClientRect()
    let x = event.clientX - rect.left
    let y = event.clientY - rect.top
    if (!treasureCoordinates) return
    const [treasureX, treasureY] = treasureCoordinates
    const distance = Math.sqrt(Math.pow(treasureX - x, 2) + Math.pow(treasureY - y, 2))
    let clickFired = true

    countTime(15000).then((elapsedTime) => {
      clickFired = false
      if (clickFired != true) {
        toast({
          title: 'Game restart',
          position: 'top-left',
          description: `You haven't used a turn in ${Math.trunc(elapsedTime / 1000)} seconds, the treasure is now buried elsewhere.`,
          status: 'warning',
          duration: 5000,
          isClosable: false,
        })
      }
    })

    toast({
      title: 'Distance from treasure',
      position: 'top-left',
      description: distance,
      status: 'info',
      duration: 3000,
      isClosable: false,
    })

  }

  function countTime(duration) {
    return new Promise((resolve) => {
      const startTime = Date.now()
  
      setTimeout(() => {
        const elapsedTime = Date.now() - startTime
        resolve(elapsedTime)
      }, duration)
    })
  }
  
  const drawCanvas = useCallback( (ctx) => {
    treasureMapImage.src = treasureMap
    treasureMapImage.onload = () => {
      ctx.drawImage(treasureMapImage, 0, 0)
    }
  },[treasureMapImage])

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')

    const sectionWidth = 845;
    const sectionHeight = 398;
    const canvasWidth = 1075;
    const canvasHeight = 825;

    const sectionOriginX = (canvasWidth - sectionWidth) / 2;
    const sectionOriginY = (canvasHeight - sectionHeight) / 2;

    const treasureX = Math.floor(Math.random() * sectionWidth) + sectionOriginX;
    const treasureY = Math.floor(Math.random() * sectionHeight) + sectionOriginY;

    setTreasureCoordinates([treasureX, treasureY]);
    drawCanvas(context)
  }, [])

  return (
    <>
      <Text float={""}> Hi </Text>
      <Box display={"flex"} alignItems={"center"} justifyContent={"center"} m={'50px'}>
        <canvas onClick={handleClick} ref={canvasRef} width={1075} height={825}></canvas>
      </Box>
    </>
  )
}

export default App
