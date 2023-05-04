import { Slider, SliderTrack, SliderFilledTrack, SliderThumb, Box, Text ,Flex, Input} from "@chakra-ui/react";
import { useState } from "react";

export const ChakraSlider=(props)=> {
  const [value, setValue] = useState(props.amount||0);

  const handleChange = (newValue) => {
    setValue(newValue);
   props.onChange(newValue)
  };


  return (
    <Box width={props.width} padding={"2%"}>
    <Box display={"flex"} width={"100%"} padding={"2%"} justifyContent="space-between" fontSize={"24px"} >
          <Box fontSize={"24px"} >{props.name}</Box> 
          <Input type="number" width={"20%"} value={value} onChange={handleChange} border="1px solid black" />
</Box>
      <Slider aria-label="slider-ex-1"  colorScheme='pink'  onChange={handleChange} value={value} min={+props.min} max={+props.max} step={+props.steps}>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
      <Flex justifyContent="space-between" mt="1" fontSize="10px">
      <Text>{props.min}</Text>
       <Text>{props.max}</Text>
      </Flex>

    </Box>
  );
}
