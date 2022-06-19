import React from 'react'
import { Link } from 'react-router-dom'
import {Button, Stack, Typography} from "@mui/material"
import { fontSize } from '@mui/system'

const ExerciseCard = ({exercise}) => {
  return (
    <Link className='exercise-card' to={`/exercise/${exercise.id}`}>
        <img src={exercise.gifUrl} alt={exercise.name} loading='lazy'/>
        <Stack direction="row">
            <Button 
            variant='contained'
            color="error"
            sx={{
                ml: '21px',
                color: '#fff',
                fontWeight: 'bold',
                fontSize: '14px',
                borderRadius: '20px',
                textTransform: 'capitalize'
            }}>
                {exercise.bodyPart}
            </Button>

            <Button 
              variant='contained'
              color="success"
            sx={{
                ml: '21px',
                color: '#fff',
                fontWeight: 'bold',
                fontSize: '14px',
                borderRadius: '20px',
                textTransform: 'capitalize'
            }}>
                {exercise.target}
            </Button>
        </Stack>
        <Typography
        ml="21px"
        color="#000"
        fontWeight="bold"
        mt="11px"
        paddingBottom='10px'
        textTransform="capitalize"
        fontSize='22px'
        >
            {exercise.name}
        </Typography>
    </Link>
  )
}

export default ExerciseCard