import { Box,Typography } from '@mui/material'
import React from 'react'
import { ScrollMenu,VisibilityContext } from 'react-horizontal-scrolling-menu'
import BodyPart from './BodyPart'
import { useContext } from 'react'
import ExerciseCard from './ExerciseCard'

import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};


const HorizotalScrollBar = ({ data , bodyPart,setBodyPart,isBodyParts}) => {
    return (
        ///* we use a dynamic block {} inside the div on line 9. Dynamic blocks are blocks that build their structure and content on the fly when the block is rendered on the front end.

        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
            {
                data.map((item) => (
                    <Box 
                    key={item.id||item}
                    itemId={item.id||item}
                    title={item.id||item}
                    m="0 40px"
                    >
                        {isBodyParts ? <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart}/>: <ExerciseCard exercise={item}/>}
                    </Box>

                )
                )
            }

        </ScrollMenu>
    )
}

export default HorizotalScrollBar

