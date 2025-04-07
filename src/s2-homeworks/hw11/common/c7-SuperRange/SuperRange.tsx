import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент +

                flexGrow: 1, // растянуть
                color: '#00CC22',
                height: 4,
                position: 'relative',
                padding: 0,
                margin: 0,

                '& .MuiSlider-thumb': {
                    width: 18,
                    height: 18,
                    border: '1px solid #00CC22',
                    backgroundColor: '#fff',
                    boxShadow: 'inset 0 0 0 1px #00CC22', // рамка вокруг кружка

                },
                '& .MuiSlider-thumb::before': { // точка внутри кружка
                    content: '""',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: 5,
                    height: 5,
                    transform: 'translate(-50%, -50%)',
                    borderRadius: '50%',
                    backgroundColor: '#00CC22',
                },
                '& .MuiSlider-rail': {
                     width: 110,
                    opacity: 0.5,
                    backgroundColor: 'gray',
                },
                '& .MuiSlider-track': {
                    backgroundColor: '#00CC22',
                    width: 110,
                },
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )}

export default SuperRange