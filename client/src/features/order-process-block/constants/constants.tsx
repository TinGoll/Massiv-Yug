import React, { ReactNode } from "react";
import { TextCardItem } from "./text-card-item";
import ApproveFileIcon from "../../../assets/icons/approve-file-icon";
import BookmarkIcon from "../../../assets/icons/bookmark-icon";
import LocationIcon from "../../../assets/icons/location-icon";
import RulerIcon from "../../../assets/icons/ruler-icon";
import StarIcon from "../../../assets/icons/star-icon";
import TransformIcon from "../../../assets/icons/transform-icon";






export const arrayCardItems: TextCardItem[] = [
  {
    title: "Дизайн-проект",
    icon: <BookmarkIcon />,
    number: 1,
    text: "Присылаете нам проект или спецификацию с размерами, если готов. Или мы разрабатываем его в любом удобном для Вас формате: выезд дизайнера на объект, онлайн-проектирование.",
  },
  {
    title:"Замер",
    icon:<RulerIcon/>,
    number:2,
    text:"Наши замерщики приедут в удобное для Вас время и произведут замер фактических параметров помещения. Если нам нужно повторить уже готовые в интерьере изделия, забираем образец."
  },
  {
    title:"Договор",
    icon:<ApproveFileIcon/>,
    number:3,
    text:"Далее наши специалисты связываются, согласовывают все детали до мельчайших подробностей, заключаем договор, принимаем оплату и приступаем к следующему этапу."
  },
  {
    title:"Производство",
    icon:<TransformIcon/>,
    number:4,
    text:"После заключения договора и оплаты проект отправляется на производство. За всеми этапами Вы можете следить в Личном кабинете или подписаться на рассылку. Также, по требованию готовы предоставить фото и видео процесса. "
  },
  {
    title:"Доставка и монтаж",
    icon:<LocationIcon/>,
    number:5,
    text:"Доставим в любое удобное для Вас время и воплотим задуманное под ключ."
  },
  {
    title:"Хотите приехать на экскурсию?",
    icon:<StarIcon/>,    
    text:"У нас вы сможете посмотреть вживую на одно из крупнейших на Юге России производств мебельных фасадов из массива.",    
  },  
  
];





