import { UploadFile } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'

interface Props {
    setFiles: (files: any) => void;
}

export default function MyDropzone({setFiles}: Props) {
    const dzStyles = {
        border: 'dashed 3px #eee',
        borderColor: '#eee',
        borderRadius: '5px',
        textAlign: 'center' as 'center',
        height: '200px'
    }

    const dzActive = {
        borderColor: 'green'
    }

    const onDrop = useCallback(acceptedFiles => {
        setFiles(acceptedFiles.map((file: any) => 
            Object.assign(file, { preview: URL.createObjectURL(file) } 
        )))
   } , [setFiles])

    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

    return (
        <div {...getRootProps()} style={isDragActive ? {...dzStyles, ...dzActive} : {...dzStyles}}>
            <input {...getInputProps()} />
            <Box pt={5}>
                <UploadFile sx={{ fontSize: '3em' }} />
                <Typography variant='h6' children={'Drop Image Here'} />
            </Box>
            
        </div>
    )
}