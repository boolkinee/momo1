import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";

type NotificationItem = {
  image: string;
  title: string;
  description: number;
  sx: unknown;
  sx1: unknown;
};
function Cardmain() {
  const user: NotificationItem[] = [
    {
      image: "/human.svg",
      title: "Employees",
      description: 96,
      sx: { backgroundColor: "#EEF3FF" },
      sx1: { color: "#5D87FF" },
    },
    {
      image: "/connect.svg",
      title: "Reports",
      description: 59,
      sx: { backgroundColor: "#EBF3FE" },
      sx1: { color: "#539BFF" },
    },
    {
      image: "/bubble.svg",
      title: "Payroll",
      description: 96,
      sx: { backgroundColor: "#E6FFFA" },
      sx1: { color: "#13DEB9" },
    },
    {
      image: "/favorites.svg",
      title: "Event",
      description: 696,
      sx: { backgroundColor: "#FBF2EF" },
      sx1: { color: "#FA896B" },
    },
    {
      image: "/briefcase.svg",
      title: "Project",
      description: 356,
      sx: { backgroundColor: "#EBF3FE" },
      sx1: { color: "#539BFF" },
    },
    {
      image: "/mailbox.svg",
      title: "Clients",
      description: 3650,
      sx: { backgroundColor: "#FEF5E5" },
      sx1: { color: "#FFAE1F" },
    },
  ];
  return (
    <>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          overflow: { xs: "auto", md: "auto", lg: "hidden" },
          width: "100%",
          justifyContent: { xs: "flex-start", lg: "center" },
          px: 2, // เพิ่ม padding ซ้ายขวาเล็กน้อยบนมือถือ
          py: 2
        }}
      >
        {user.map((item, index) => (
          <Box key={index} sx={{ flexShrink: 0 }}>
            <Card sx={{ minWidth: 180, maxWidth: 200 }}>
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  height: 150,
                  padding: 3,
                  ...(item.sx || {}),
                }}
              >
                <CardMedia sx={{ mb: 2 }}>
                  <img src={item.image} alt="" style={{ width: 60 }} />
                </CardMedia>
                <Typography sx={{ ...(item.sx1 || {}) }}>
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: 20,
                    fontWeight: 500,
                    ...(item.sx1 || {}),
                  }}
                >
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
    </>
  );
}

export default Cardmain;
