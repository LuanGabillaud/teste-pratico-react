import React from "react";
import styled from "styled-components";

const CarouselItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
`;

const CarouselImage = styled.img`
  width: 90%;
  height: auto;
  border-radius: 10px;
  cursor: pointer;
`;

type CarouselItemProps = {
  image: string;
  headline?: string;
  description?: string;
};

const CarouselItem: React.FC<CarouselItemProps> = ({
  image,
  headline,
  description,
}) => {
  return (
    <CarouselItemContainer>
      <CarouselImage src={image} alt={headline || "Carousel item"} />
      {headline && <h3>{headline}</h3>}
      {description && <p>{description}</p>}
    </CarouselItemContainer>
  );
};

export default CarouselItem;
