import { DB } from "./db";

export async function bootstrap() {
    await DB.init()
}