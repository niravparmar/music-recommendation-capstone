import { atom } from "recoil";

export const playState = atom({
  key: "playState",
  default: false,
});

export const playingTrackState = atom({
  key: "playingTrackState",
  default: "",
});

export const textState = atom({
  key: 'textState', // unique ID (with respect to other atoms/selectors)
  default: 'login', // default value (aka initial value)
});

export const useremail = atom({
  key: 'useremail', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
});
