import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

export default function RightBar() {
  return (
    <Box marginTop={2}>
      <Typography>Group Photos</Typography>
      <ImageList sx={{ width: 250, height: 250 }} cols={2}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  {
    img: "https://themomentum.co/wp-content/uploads/2021/11/web_4eve-1280x720.jpg",
    title: "",
  },
  {
    img: "https://static.trueplookpanya.com/tppy/member/m_545000_547500/545920/cms/images/4EVE-2.jpg",
    title: "4eve",
  },
  {
    img: "https://static.thairath.co.th/media/dFQROr7oWzulq5Fa4L9Pm2uWk1pG9M2MuF1PZRUtaSFWGTe3UGcHenqUd9VEA3048CK.jpg",
    title: "4eve",
  },
  {
    img: "https://images.workpointnews.com/workpointnews/2022/12/15113936/1671079172_43321_1663160712_14750_Jackpot_1.jpeg",
    title: "4eve",
  },
];
