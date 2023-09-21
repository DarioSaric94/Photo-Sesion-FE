import { Box, Grid, Typography } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import ClearIcon from '@mui/icons-material/Clear';
import { ExtendedFile } from '@/utils/types';

interface ReactImageDropzoneProps {
  updateFiles: (file: File[]) => void;
}

export const ReactImageDropzone: React.FC<ReactImageDropzoneProps> = ({
  updateFiles,
}) => {
  const [files, setFiles] = useState<ExtendedFile[]>([]);
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      console.log(acceptedFiles);
      if (acceptedFiles?.length) {
        setFiles((previousFiles: ExtendedFile[]) => [
          ...previousFiles,
          ...acceptedFiles.map((file: File) =>
            Object.assign(file, {
              preview: URL.createObjectURL(file),
            })
          ),
        ]);
      }
    },
    [files]
  );

  useEffect(() => {
    updateFiles(files);
  }, [files]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const removeImageHandler = (name: string) => {
    setFiles((files: ExtendedFile[]) => {
      const updatedFiles = files.filter((file: any) => file.name !== name);
      const removedFile = files.find((file: any) => file.name === name);
      if (removedFile) {
        URL.revokeObjectURL(removedFile.preview);
      }

      return updatedFiles;
    });
  };

  return (
    <form>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Box
            {...getRootProps()}
            border={2}
            borderColor="primary.main"
            sx={{
              cursor: 'pointer',
              transition: 'color 0.3s ease-in-out',
              '&:hover': {
                borderColor: 'secondary.main',
                color: 'primary.light',
              },
            }}
          >
            <input {...getInputProps()} />
            {isDragActive ? (
              <Typography
                color="primary.main"
                fontWeight="bold"
                p={2}
                fontSize={14}
                sx={{
                  cursor: 'pointer',
                  transition: 'color 0.3s ease-in-out',
                  '&:hover': {
                    color: 'primary.light',
                  },
                }}
              >
                Prevucite fajlove ovde...
              </Typography>
            ) : (
              <Typography
                color="primary.main"
                fontWeight="bold"
                p={2}
                fontSize={14}
                sx={{
                  cursor: 'pointer',
                  transition: 'color 0.3s ease-in-out',
                  '&:hover': {
                    color: 'primary.light',
                  },
                }}
              >
                Kliknite ili povucite da biste odabrali fotografije.
              </Typography>
            )}
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Typography color="primary.main" fontWeight="bold">
            Ukupno Selektovanih Fotografija:
            <Typography
              component="span"
              ml={1}
              fontWeight="bold"
              color="primary.light"
            >
              {files.length}
            </Typography>
          </Typography>
          <Typography color="primary.main" fontWeight="bold">
            Maksimalno Dozvoljeno za vaš paket 200
          </Typography>
        </Grid>
        <Grid
          item
          mt={2}
          xs={12}
          sx={{ overflow: 'auto', maxHeight: { xs: '100%', md: '50vh' } }}
          className="container"
        >
          <Grid container spacing={3}>
            {files?.map((file: any) => {
              return (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  lg={4}
                  key={file.name}
                  position="relative"
                >
                  <img
                    src={file.preview}
                    alt={file.name}
                    className="image-preview"
                    onLoad={() => {
                      URL.revokeObjectURL(file.preview);
                    }}
                  />
                  <Box position="absolute" zIndex={2} top={10} left={10}>
                    <ClearIcon
                      color="secondary"
                      sx={{
                        bgcolor: 'secondary.light',
                        borderRadius: '50%',
                        p: 0.3,
                      }}
                      onClick={() => removeImageHandler(file.name)}
                    />
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};
