import { Box, Button, styled } from "@mui/material";
import React from "react";
import { PHONE_NUMBER, WHATSAPP_TEXT } from "../../constants/constants";
import { formatPhone } from "../../../../utils";
import { Whatsapp, Phone } from "../../../../assets/icons";

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100%;
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
`;

const LinkBox = styled(Box)`
  position: absolute;
  top: calc(50% + 22px);
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
  const handleWhatsAppClick = () => {
    const phoneNumber = PHONE_NUMBER.slice(1);
    const message = WHATSAPP_TEXT;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <Container sx={{ width: 176 }}>
      <Button
        variant="outlined"
        color="inherit"
        sx={{ width: "100%", alignSelf: "center" }}
      >
        ЛК Клиента
      </Button>
      <LinkBox>
        <PhoneLink href={`tel:${PHONE_NUMBER}`} sx={{ display: "none" }}>
          <Phone height={28} width={28} /> {formatPhone(PHONE_NUMBER)}
        </PhoneLink>
        <WhatsAppButton
          variant="text"
          color="inherit"
          onClick={handleWhatsAppClick}
        >
          <Whatsapp height={30} width={30} /> {formatPhone(PHONE_NUMBER)}
        </WhatsAppButton>
      </LinkBox>
    </Container>
  );
};

export default HeaderActions;
