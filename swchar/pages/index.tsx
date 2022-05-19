import type { NextPage } from "next";
import Head from "next/head";
import CharacterAvatar from "../components/CharacterAvatar";
import Header from "../components/Header";
import { Container, Box, Typography } from "@mui/material";
import { ICharacter } from "../interfaces/Types";
import BoxChar from "../components/BoxChar";
import { useEffect, useState } from "react";
import Link from "next/link";
import Pagination from "../components/Pagination";
import Loading from "../helpers/Loading";

const Home: NextPage<{ characters: ICharacter[] }> = () => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [actualPage, setActualPage] = useState(1);
  const [totalNumberOfCharacters, setTotalNumberOfCharacters] = useState(0);

  const charactersPerPage: number = 10;
  const totalPages: number = Math.ceil(
    totalNumberOfCharacters / charactersPerPage,
  );

  useEffect(() => {
    const fetchCharacters = async () => {
      setIsLoading(true);
      const response = await fetch(
        `https://swapi.dev/api/people/?page=${actualPage}`,
      );
      const { count, results } = await response.json();

      setCharacters(results);
      setTotalNumberOfCharacters(count);
      setIsLoading(false);
    };

    fetchCharacters();
  }, [actualPage]);

  return (
    <Box>
      <Head>
        <title>SW Characters</title>
        <meta name="description" content="Star Wars Characters" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Header />
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            {isLoading ? (
              <Loading width={100} height={100} />
            ) : (
              characters.map((character: any) => {
                const id = character.url.replace(/\D/g, "");
                return (
                  <BoxChar key={character.name}>
                    <CharacterAvatar
                      gender={character.gender}
                      hair_color={character.hair_color}
                      skin_color={character.skin_color}
                      width="100"
                      height="100"
                    />
                    <Box marginLeft={2}>
                      <Typography variant="h4">{character.name}</Typography>
                      <Link href={`/character/${id}`} passHref>
                        <Typography
                          component="a"
                          variant="inherit"
                          color="#626E7C"
                          sx={{ ":hover": { color: "#DAAF3B" } }}
                        >
                          More details
                        </Typography>
                      </Link>
                    </Box>
                  </BoxChar>
                );
              })
            )}
          </Box>
          <Box>
            <Pagination
              actualPage={actualPage}
              setActualPage={setActualPage}
              totalPages={totalPages}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
