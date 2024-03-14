import { Client as Session } from "whatsapp-web.js";
import { getWbot } from "../libs/wbot";
import GetDefaultWhatsApp from "./GetDefaultWhatsApp";
import Ticket from "../models/Ticket";

const GetTicketWbotCustom = async (whatsappId: number): Promise<Session> => {

  const wbot = getWbot(whatsappId);
  
  return wbot;
};

export default GetTicketWbotCustom;
