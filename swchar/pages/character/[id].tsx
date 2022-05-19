import React, { useEffect, useState } from "react";
import { ICharacter } from "../../interfaces/Types";
import { Container, Box, Typography } from "@mui/material";
import { GetServerSideProps, NextPage } from "next";
import CharacterAvatar from "../../components/CharacterAvatar";
import Header from "../../components/Header";
import DetailsRows from "../../components/DetailsRows";
import Link from "next/link";
import CustomButton from "../../components/CustomButton";
import Loading from "../../helpers/Loading";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await fetch(
    `http://swapi.dev/api/people/${context.query.id}`,
  );

  const character = await response.json();

  return {
    props: {
      character,
    },
  };
};

const CharacterPage = ({ character }: { character: ICharacter }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [homeworld, setHomeWorld] = useState("");
  const [film, setFilm] = useState("");
  const urlHomeWorld = character.homeworld;
  const urlFilms = character.films;

  useEffect(() => {
    const fetchHomeworld = async () => {
      setIsLoading(true);
      const response = await fetch(urlHomeWorld);

      const { name } = await response.json();
      setHomeWorld(name);
    };

    const fetchFirstFilm = async () => {
      const response = await fetch(urlFilms[0]);

      const { title } = await response.json();
      setFilm(title);
      setIsLoading(false);
    };

    fetchFirstFilm();

    fetchHomeworld();
  }, [urlHomeWorld, urlFilms]);

  return (
    <Box>
      <Container>
        <Header />
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="space-between"
          marginTop={10}
          alignItems="center"
          component="main"
        >
          <Box
            component="aside"
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <CharacterAvatar
              gender={character.gender}
              hair_color={character.hair_color}
              skin_color={character.skin_color}
              width="300"
              height="300"
            />
            <Typography
              marginTop={3}
              variant="h1"
              color="#DAAF3B"
              fontSize={64}
              fontFamily="sans-serif"
            >
              {character.name}
            </Typography>
          </Box>
          <Box
            component="section"
            border="1px solid grey"
            borderRadius={5}
            padding={5}
          >
            <Typography
              marginTop={3}
              marginRight={30}
              marginLeft={-3}
              variant="h6"
              color="#CFD4D8"
              fontFamily="sans-serif"
            >
              Character Details:
            </Typography>
            {isLoading ? (
              <Loading width={50} height={50} />
            ) : (
              <>
                <DetailsRows detail="Gender:" text={character.gender} />
                <DetailsRows detail="Hair Color:" text={character.hair_color} />
                <DetailsRows detail="Eye Color:" text={character.eye_color} />
                <DetailsRows
                  detail="Height:"
                  text={
                    character.height !== "unknown"
                      ? `${character.height} CM`
                      : character.height
                  }
                />
                <DetailsRows
                  detail="Mass:"
                  text={
                    character.mass !== "unknown"
                      ? `${character.mass} KG`
                      : character.mass
                  }
                />
                <DetailsRows detail="Skin Color:" text={character.skin_color} />
                <DetailsRows detail="Birth Year:" text={character.birth_year} />
                <DetailsRows detail="Homeworld:" text={homeworld} />
                <DetailsRows detail="First film:" text={film} />
              </>
            )}
          </Box>
        </Box>
        <Box marginTop={5} marginBottom={10}>
          <Link href={"/"} passHref>
            <Box component="a">
              <CustomButton text="← Back" />
            </Box>
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default CharacterPage;
