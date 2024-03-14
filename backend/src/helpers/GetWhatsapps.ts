import { where } from "sequelize";
import Whatsapp from "../models/Whatsapp";
import { logger } from "../utils/logger";

const GetWhatsapp = async (
  name:string
): Promise<Whatsapp | null> => {

  const users = await Whatsapp.findOne({
    where: {name: name}
  });
  // const user = await User.findByPk(userId, {include: ["whatsapp"]});
  // if( user === null ) {
  //   return null;
  // }

  // if(user.whatsapp !== null) {
  //   logger.info(`Found whatsapp linked to user '${user.name}' is '${user.whatsapp.name}'.`);
  // }

  return users;
};

export default GetWhatsapp;
