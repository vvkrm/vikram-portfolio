import { Home, Mail, Terminal, User } from "lucide-react";
import type { AppId } from "./Desktop";

export interface AppDef {
  id: AppId;
  label: string;
  Icon: typeof Home;
}

export const APPS: AppDef[] = [
  { id: "home", label: "Home", Icon: Home },
  { id: "about", label: "About", Icon: User },
  { id: "contact", label: "Contact", Icon: Mail },
  { id: "terminal", label: "Terminal", Icon: Terminal },
];
