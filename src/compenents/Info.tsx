import { Box, Text, Image } from 'native-base';
import { Ionicons } from "@expo/vector-icons";


export default function Info() {
    return (
        <Box flexDirection={'column'} justifyContent={'center'} alignItems={'center'} alignContent={'center'} height={'100%'}>
            <Image
                src='https://cdn-icons-png.flaticon.com/512/7235/7235705.png'
                alt='logo'
                size='lg'
            />
            <Text fontWeight={'bold'} fontSize={'lg'} color={'purple'}>2023</Text>
            <Box flexDir={'row'}>
                <Text>Build by </Text>
                <Text fontWeight={'bold'} color={'purple'}>Marihots</Text>
                <Ionicons name="ios-heart" size={20} color="purple" />
            </Box>
        </Box>
    );
}