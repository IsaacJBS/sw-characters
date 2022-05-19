import React from "react";
import Avatar from "avataaars";

interface Props {
  gender: string;
  hair_color: string;
  skin_color: string;
  width: string;
  height: string;
}

const CharacterAvatar = ({
  gender,
  hair_color,
  skin_color,
  width,
  height,
}: Props) => {
  const capitalizeString = (str: string) => {
    return str[0].toUpperCase() + str.substr(1);
  };

  const chooseHairAvatarAccordingGender = (gender: string) => {
    return gender === "male" ? "ShortHairShortFlat" : "LongHairCurvy";
  };

  const chooseClothesStyle = (gender: string) => {
    return gender === "male" ? "GraphicShirt" : "ShirtVNeck";
  };

  const chooseClothesColor = (gender: string) => {
    return gender === "male" ? "Heather" : "Red";
  };

  return (
    <>
      <Avatar
        style={{ width: width, height: height }}
        topType={
          gender === "n/a" ? "NoHair" : chooseHairAvatarAccordingGender(gender)
        }
        avatarStyle="Circle"
        hairColor={capitalizeString(hair_color)}
        facialHairColor={capitalizeString(hair_color)}
        eyebrowType="Default"
        skinColor={
          skin_color === "gold" ? "Yellow" : capitalizeString(skin_color)
        }
        facialHairType={gender === "male" ? "BeardLight" : "Blank"}
        clotheType={
          gender === "n/a" ? "ShirtScoopNeck" : chooseClothesStyle(gender)
        }
        clotheColor={gender === "n/a" ? "Blue01" : chooseClothesColor(gender)}
      />
    </>
  );
};

export default CharacterAvatar;
