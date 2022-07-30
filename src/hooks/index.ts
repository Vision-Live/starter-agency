import { auth } from "$lib/lucia";

export const handler = auth.handleAuth;
export const getSession = auth.getAuthSession;