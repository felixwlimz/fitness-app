import { Typography, Stack, Button } from "@mui/material";
import { FiTarget } from "react-icons/fi";
import { GiWeightLiftingUp } from "react-icons/gi";
import { IoIosBody } from "react-icons/io";

const Detail = ({ exerciseDetail }: { exerciseDetail: unknown }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: <IoIosBody size={30} />,
      name: bodyPart,
    },
    {
      icon: <FiTarget size={30} />,
      name: target,
    },
    {
      icon: <GiWeightLiftingUp size={30} />,
      name: equipment,
    },
  ];

  return (
    <Stack
      gap="60px"
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography variant="h3">{name}</Typography>
        <Typography variant="h6">
          Exercises keep you strong. {name} {` `} is one of the best exercise to
          target your {target}. It will help you improve your mood and gain
          energy
        </Typography>
        {extraDetail.map(({ icon, name }) => (
          <Stack key={name} direction="row" gap="24px" alignItems="center">
            <Button
              color="error"
              sx={{
                background: "#fff2db",
                borderRadius: "50%",
                width: "100px",
                height: "100px",
              }}
            >
              {icon}
            </Button>
            <Typography variant="h6" textTransform="capitalize">
              {name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
