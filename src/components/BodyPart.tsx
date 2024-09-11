import { Stack, Typography } from "@mui/material";

type BodyPartProps = {
  item: unknown;
  setBodyPart: React.Dispatch<React.SetStateAction<string>>;
  bodyPart: unknown;
};

const BodyPart = ({ item, setBodyPart, bodyPart }: BodyPartProps) => {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? "4px soid #ff2625" : "",
        backgroundColor: "#fff",
        borderBottomLeftRadius: "20px",
        width: "270px",
        height: "280px",
        cursor: "pointer",
        gap: "47px",
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
    >
      <img
        src="https://png.pngtree.com/png-vector/20210310/ourmid/pngtree-weight-photography-figure-dumbbell-barbell-png-image_3017241.jpg"
        alt="dumbbell"
        style={{ width: "40px", height: "40px" }}
      />
      <Typography
        fontSize={24}
        fontWeight="bold"
        textTransform="capitalize"
        color="#3a1212"
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
