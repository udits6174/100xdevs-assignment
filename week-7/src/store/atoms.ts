import { atom } from "recoil";

export const phoneAtom = atom({
  key: "phoneNumber",
  default: {
    phone: ""
  }
});