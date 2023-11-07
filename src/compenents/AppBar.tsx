import React from 'react';
import { Box, StatusBar, Text } from 'native-base';



export default function AppBar() {

    return (
        <>
            <StatusBar backgroundColor="#3700B3" barStyle="light-content" />
            <Box safeAreaTop backgroundColor="violet.600" height={'40px'} width={'100%'} justifyContent={'center'} alignItems={'center'}>
                <Text color={'white'} fontWeight={'bold'} fontSize={'20px'}>Hero Mobile Legends</Text>
            </Box>
        </>
    )
}