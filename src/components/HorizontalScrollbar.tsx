import { Box, Typography } from "@mui/material";
import BodyPart from "./BodyPart";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { useContext } from "react";
import "react-horizontal-scrolling-menu/dist/styles.css";
import ExerciseCard from "./ExerciseCard";

type HorizontalScrollProps = {
  data: unknown[];
  bodyPart: unknown;
  setBodyPart: React.Dispatch<React.SetStateAction<string>>;
  isBodyPart : boolean
};

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img
        height={40}
        width={40}
        alt="right-arrow"
        src="https://icon2.cleanpng.com/20180203/vgw/avitx5gd8.webp"
      />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img
        height={40}
        width={40}
        alt="right-arrow"
        src="https://banner2.cleanpng.com/20180427/lhe/avewdniji.webp"
      />
    </Typography>
  );
};

const HorizontalScrollbar = ({
  data,
  bodyPart,
  setBodyPart,
  isBodyPart
}: HorizontalScrollProps) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item) => (
        <Box
          key={item.id || item}
          itemID={item.id || item}
          title={item.id || item}
          m="0 40px"
        >
          {isBodyPart ? (
            <BodyPart
              item={item}
              bodyPart={bodyPart}
              setBodyPart={setBodyPart}
            />
          ) : <ExerciseCard exercise={item}/>}
        </Box>
      ))}
    </ScrollMenu>
  );
};

export default HorizontalScrollbar;
