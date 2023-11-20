import { Box, Button, IconButton, Typography, styled, alpha } from "@mui/material";
import React, { useState } from "react";
import { PHONE_NUMBER, WHATSAPP_TEXT } from "../../constants/constants";
import { formatPhone } from "../../../../utils";
import { Whatsapp, Phone, MobileMenu } from "../../../../assets/icons";
import CloseIcon from "@mui/icons-material/Close";

const Container = styled(Box)`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100%;
  gap: 16px;
`;

const PhoneLink = styled("a")`
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 133%;
  display: flex;
  align-items: center;
  gap: 6px;
  gap: 8px;
  align-items: center;
`;

const LinkBox = styled(Box)`
  display: flex;
  align-items: center;
  ${({ theme }) => theme.breakpoints.up("laptop")} {
    position: absolute;
    top: calc(50% + 24px);
  }
`;

const WhatsAppButton = styled(Button)`
  color: #fff;
  padding: 0;
  margin: 0;
  cursor: pointer;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 133%;
  display: flex;
  align-items: center;
  gap: 6px;
`;

const HeaderActions = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const handleWhatsAppClick = () => {
    const phoneNumber = PHONE_NUMBER.slice(1);
    const message = WHATSAPP_TEXT;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <Container
      sx={{
        width: {
          mobile: "auto",
          laptop: 176,
        },
      }}
    >
      <IconButton
        size="large"
        color="inherit"
        onClick={() => setOpenMenu((prev) => !prev)}
        sx={{
          display: {
            laptop: "none",
          },
        }}
      >
        {openMenu ? (
          <CloseIcon fontSize="inherit" />
        ) : (
          <MobileMenu height={28} width={28} fill="white" />
        )}
      </IconButton>

      <Button
        variant="outlined"
        color="inherit"
        sx={{
          width: {
            mobile: "auto",
            laptop: "100%",
          },
          alignSelf: "center",
          display: {
            mobile: "none",
            laptop: "initial",
          },
        }}
      >
        ЛК Клиента
      </Button>

      <LinkBox>
        <WhatsAppButton
          variant="text"
          color="inherit"
          onClick={handleWhatsAppClick}
        >
          <Whatsapp height={30} width={30} />
          <Typography
            sx={{
              display: {
                mobile: "none",
                laptop: "block",
              },
            }}
          >
            {formatPhone(PHONE_NUMBER)}
          </Typography>
        </WhatsAppButton>

        <PhoneLink
          href={`tel:${PHONE_NUMBER}`}
          sx={{
            display: {
              mobile: "flex",
              laptop: "none",
            },
          }}
        >
          <Phone height={28} width={28} />
          <Typography
            sx={{
              display: {
                mobile: "none",
                tablet: "block",
                laptop: "none",
              },
            }}
          >
            {formatPhone(PHONE_NUMBER)}
          </Typography>
        </PhoneLink>
      </LinkBox>
    </Container>
  );
};

export default HeaderActions;
