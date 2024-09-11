import { Box, Stack, Typography } from '@mui/material'

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack gap="40px" alignItems="center" px="40px" pt="24px">
        <img
          src="https://media.istockphoto.com/id/1331186720/vector/dumbbell.jpg?s=612x612&w=0&k=20&c=ztAKf6ZaSrWTBQVW7Nj2yrEbGM0FxitFrze39W-HdMs="
          alt="logo"
          width="200px"
          height='100px'
        />
        <Typography variant='h5' pb='40px' mt='20px'>Made by Felix Winston</Typography>
      </Stack>
    </Box>
  );
}

export default Footer