import bcrypt from "bcryptjs";
import {prisma} from "~/server/prisma";

type userType = {
    password: string
    name: string
    email: string
}
export const saveNewUser = async (user: userType) => {
    try {
        const passwordHash = await bcrypt.hash(user.password, 12);

        return  await prisma.user.create({
            data: {
                email: user.email,
                password: passwordHash,
                name: user.name
            }
        });
    } catch (e) {
        console.log(e);

        return null;
    }
}
