import { useEffect, useState } from 'react';
import { VStack, HStack, Text, Divider, ScrollView, Box, SunIcon, Icon, Input, Image, Spinner } from 'native-base';
import axios from 'axios';
import { MaterialIcons } from '@expo/vector-icons';

// Define the structure of the hero data
interface HeroData {
    hero_id: number;
    hero_name: string;
    hero_role: string;
    hero_specially: string;
}

export default function Content() {
    const [dataHero, setData] = useState<HeroData[]>([]);
    const [filteredHero, setFilteredHero] = useState<HeroData[]>([]);
    const [keyword, setKeyword] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);

    // Fetch hero data when component mounts
    useEffect(() => {
        setLoading(true); // Start loading
        axios.get('https://api.dazelpro.com/mobile-legends/hero')
            .then((response) => {
                setData(response.data.hero);
                setFilteredHero(response.data.hero);
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                setLoading(false); // End loading
            });
    }, []);

    // Handle search input end editing
    const handleSearchHero = () => {
        setLoading(true); // Start loading
        const keywordLower = keyword.toLowerCase();
        const filteringHero = dataHero.filter((hero: HeroData) =>
            hero.hero_name.toLowerCase().includes(keywordLower)
        );

        setFilteredHero(filteringHero);
        setLoading(false); // End loading
    };

    // Show spinner while loading
    if (loading) {
        return <Spinner size="lg" />;
    }

    // Render hero list or filtered results
    return (
        <Box padding={5}>
            <VStack w="100%" space={2} alignSelf="center">
                <Image
                    src='https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2021/02/15/401255779.jpg'
                    alt="Alternate Text"
                    size="lg"
                    w={"100%"}
                    rounded={5}
                />
                <Box my={2} width={"100%"} justifyContent={"start"} alignItems={"start"}>
                    <Text textAlign={"justify"}>Cari Hero favorit kalian, dan lihat apa saja kemampuannya! dan mulailah bermain game moba kok analog.</Text>
                </Box>
                <Input
                    mb={5}
                    value={keyword}
                    onChangeText={setKeyword}
                    onEndEditing={handleSearchHero} // Search when the user submits the input
                    placeholder="Search Your Hero"
                    width="100%"
                    borderRadius="full"
                    py="3"
                    px="1"
                    fontSize="14"
                    InputLeftElement={<Icon m="2" ml="3" size="6" color="violet.400" as={<MaterialIcons name="search" />} />}
                    InputRightElement={<Icon m="2" mr="3" size="6" color="violet.400" as={<MaterialIcons name="mic" />} />}
                />
            </VStack>
            <ScrollView showsVerticalScrollIndicator={false}>
                {filteredHero.map((hero) => (
                    <VStack key={hero.hero_id} space={1} divider={<Divider />} w="100%">
                        <HStack justifyContent="space-between" alignItems={"center"}>
                            <Box display={"flex"} flexDirection={"row"} alignItems={"center"} width={"100%"} my={2} background={"violet.600"} p={2} rounded={10} shadow={3}>
                                <Box>
                                    <Image
                                        src='https://cdn.icon-icons.com/icons2/1736/PNG/512/4043232-avatar-batman-comics-hero_113278.png'
                                        alt="Hero Avatar"
                                        size="sm"
                                    />
                                </Box>
                                <Box color={"white"} ml={5}>
                                    <Text color={"white"} fontWeight={"bold"}>Name: {hero.hero_name}</Text>
                                    <Text color={"white"}><SunIcon size="sm" mt="0.5" color="red.500" /> {hero.hero_role}</Text>
                                    <Text color={"white"}>Specially: {hero.hero_specially}</Text>
                                </Box>
                            </Box>
                        </HStack>
                    </VStack>
                ))}
            </ScrollView>
        </Box>
    );
}
