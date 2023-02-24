import { useContext } from "react";
import Image from "next/legacy/image";
import { Card, Grid, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { ReservasContext } from "../../context/reservas";

export const ItemB = ({ reserva }: any) => {
  const { title, price, imageUrl, id } = reserva;
  const { deleteReserva } = useContext(ReservasContext);

  return (
    <Grid item xs={12} md={6}>
      <Card
        sx={{
          backgroundColor: "#eee",
        }}
      >
        <Grid container spacing={0}>
          <Grid item xs={4}>
            <Image src={imageUrl} width={680} height={1020} alt="" />
          </Grid>
          <Grid item xs={7}>
            <Typography>{title}</Typography>
            <Typography>{price}</Typography>
          </Grid>
          <Grid item xs={1}>
            <IconButton
              size="small"
              edge="end"
              onClick={() => deleteReserva(id)}
            >
              <CloseIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
};