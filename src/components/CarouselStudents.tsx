import React from "react";
import styled from "styled-components";
import {
  FirstText,
  SecondText
} from "../styles/HomeStyles";

const CarouselImage = styled.img`
  width: 50%;
  height: auto;
  border-radius: 10px;
  cursor: pointer;
`;

export const CardStudentsCarousel = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-left: 80px;
  gap: 80px;
  width: 80%;
  height: 568px;
  left: 126px;
  top: 0px;
`;

export const TextCardStudentsCarousel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 74px;
  text-align: left;
  width: 515px;
  height: 550px;
  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const StudentNameCarousel = styled.div`
  width: 296px;
  height: 2px;
  text-align: left;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 5px;
  color: #ffffff;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

type StudentCarouselItemProps = {
  image: string;
  name: string;
  headline: string;
  description: string;
};

const StudentCarouselItem: React.FC<StudentCarouselItemProps> = ({
  image,
  name,
  headline,
  description,
}) => {
  return (
    <CardStudentsCarousel>
      <CarouselImage src={image} alt={name} />
      <TextCardStudentsCarousel>
        {headline && <FirstText>{headline}</FirstText>}
        {name && <StudentNameCarousel>{name}</StudentNameCarousel>}
        {description && <SecondText>{description}</SecondText>}
      </TextCardStudentsCarousel>
    </CardStudentsCarousel>
  );
};

export default StudentCarouselItem;
