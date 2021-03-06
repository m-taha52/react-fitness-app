import React from 'react'
import { Typography, Stack, Button } from '@mui/material'
import BodyPartImage from '../assets/icons/body-part.png'
import TargetImage from '../assets/icons/target.png'
import EquipmentImage from '../assets/icons/equipment.png'


const Detail = ({exerciseDetail}) => {



  const {bodyPart, gifUrl, name, target, equipment} = exerciseDetail

  const extraDetail = [
    {
      icon: BodyPartImage,
      name:bodyPart,
      title: "Body Part"
    },
    {
      icon: TargetImage,
      name:target,
      title: "Target"
    },
    {
      icon: EquipmentImage,
      name:equipment,
      title: "Equipment"
    },

  ]


  return (
    <Stack 
    gap="60px"
    sx={{
      flexDirection: {
        lg: 'row',
        xs: 'column'
      },
      p: '20px',
      alignItems: 'center'
    }}
    >
        <img 
        src={gifUrl}
        alt={name}
        loading="lazy"
        className='detail-image'
        />
        <Stack
        sx={{
          gap: {
            lg: '35px',
            xs: '20px'
          }
        }}>

          <Typography textTransform='capitalize' variant="h4" sx={{
            fontSize: {
              lg: '40px',
              xs: '25px'
            }
          }}>
            {name}
          </Typography>
          
          <Typography variant='h6' sx={{
            fontSize: {
              lg: '25px',
              xs: '16px'
            }
          }}>
            Exercises keep you strong. {' '}
            {name} {` `} is one of the best exercises to target your {target}. 
            It will help you improve your mood and energy
          </Typography>
          {
            extraDetail.map((item) => (
              <Stack
              key={item.name}
              direction="row"
              gap="24px"
              alignItems='center'
              >
                <Button sx={{
                  background: "#fff2db",
                  borderRadius: '50%',
                  width: '100px',
                  height: '100px'
                }}>
                  <img src={item.icon} alt={bodyPart} style={{width: '50px', height: '50px'}} />
                </Button>

                <Typography variant="h6" sx={{
                  fontSize: {
                    lg: '25px',
                    xs: '15px'
                  }
                }}>
                  {item.title}:
                </Typography>

                <Typography textTransform='capitalize' variant="h5" sx={{
                  fontSize: {
                    lg: '25px',
                    xs: '15px'
                  }
                }}>
                  {(item.name)}
                </Typography>
              </Stack>
            ))
          }
        </Stack>
    </Stack>
  )
}

export default Detail