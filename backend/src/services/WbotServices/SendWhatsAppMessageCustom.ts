// import { Message as WbotMessage } from "whatsapp-web.js";
import AppError from "../../errors/AppError";
import GetWhatsapp from "../../helpers/GetWhatsapps";
import GetTicketWbotCustom from "../../helpers/GetTicketWbotCustom";
import { Message } from "whatsapp-web.js";

interface RequestCustom {
    from: string;
    to: string;
    body: string;
}

const SendWhatsAppMessageCustom = async ({
    from,
    to,
    body
}: RequestCustom): Promise<Message> => {

    const whatsapp = await GetWhatsapp(from);

    if (!whatsapp) {
        throw new AppError("ERR_NO_WHATSAPP_LINKED");
    }
    const wbot = await GetTicketWbotCustom(whatsapp.id);
    try {

        const sentMessage = await wbot.sendMessage(`${to}@c.us`, body);
        return sentMessage;
    } catch (err) {
        throw new AppError("ERR_SENDING_WAPP_MSG");
    }
};

export default SendWhatsAppMessageCustom;
