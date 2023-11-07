import { useEffect, useState } from 'react';
import { VStack, HStack, Text, Divider, ScrollView, Box, SunIcon, Icon, Input, Image, Spinner } from 'native-base';
import axios from 'axios';
import { API } from '../libs/Api';
import { GiNinjaHeroicStance } from 'react-icons/gi';
import { MaterialIcons } from '@expo/vector-icons';

interface HeroData {
    hero_id: number;
    hero_name: string;
    hero_role: string;
    hero_specially: string
}

export default function Content() {

    const [dataHero, setData] = useState<HeroData[]>([]);
    const [filteredHero, setFilteredHero] = useState<HeroData[]>([]);
    const [keyword, setKeyword] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        axios
            .get('https://api.dazelpro.com/mobile-legends/hero')
            .then((response) => {
                setData(response.data.hero)
                setFilteredHero(response.data.hero)
                setLoading(false)
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    const handleSearchHero = () => {
        const keywordLower = keyword.toLowerCase();
        const filteringHero = dataHero.filter((hero: HeroData) => {
            return hero.hero_name.toLowerCase().includes(keywordLower);
        })

        if (filteringHero.length === 0) {
            setLoading(true)
        }

        setFilteredHero(filteringHero)

        setLoading(false)
    }

    if (loading) {
        return <Spinner size="sm" />
    }

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
                    onEndEditing={handleSearchHero}
                    placeholder="Search Your Hero"
                    width="100%"
                    borderRadius="full"
                    py="3"
                    px="1"
                    fontSize="14"
                    InputLeftElement={<Icon m="2" ml="3" size="6" color="violet.400" as={<MaterialIcons name="search" />} />}
                    InputRightElement={<Icon m="2" mr="3" size="6" color="violet.400" as={<MaterialIcons name="mic" />} />} />
            </VStack>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                {loading && <Spinner />}
                {
                    !loading && filteredHero.map((heros: any) => (
                        < VStack key={heros.hero_id} space={1} divider={< Divider />} w="100%" >
                            {loading && <Spinner />}
                            {!loading && <HStack justifyContent="space-between" alignItems={"center"}>
                                <Box display={"flex"} flexDirection={"row"} alignItems={"center"} width={"100%"} my={2} background={"violet.600"} p={2} rounded={10} shadow={3}>
                                    <Box>
                                        {/* <Text color={"white"} fontWeight={"bold"} w={"100%"}>HERO {heros.hero_id}</Text> */}
                                        {/* <GiNinjaHeroicStance color='white' size={"10px"} /> */}

                                        <Image
                                            src='https://cdn.icon-icons.com/icons2/1736/PNG/512/4043232-avatar-batman-comics-hero_113278.png'
                                            alt="Alternate Text"
                                            size="sm"
                                        />
                                    </Box>

                                    <Box color={"white"} ml={5}>
                                        <Text color={"white"} fontWeight={"bold"}>Name: {heros.hero_name}</Text>
                                        <Text color={"white"} ><SunIcon size="sm" mt="0.5" color="red.500" /> {heros.hero_role}</Text>
                                        <Text color={"white"}>Specially : {heros.hero_specially}</Text>
                                    </Box>
                                </Box>
                            </HStack>}
                        </VStack >
                    ))
                }

            </ScrollView>
        </Box>
    );
}