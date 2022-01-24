import { createContext, useContext } from "react";
import ActivityStore from "./activityStore";
import commentStore from "./commentStore";
import CommonStore from "./commonStore";
import ModalStore from "./modalStore";
import ProfileStore from "./profileStore";
import UserStore from "./userStore";

interface Store {
    activityStore: ActivityStore;
    userStore: UserStore;
    commonStore : CommonStore;
    modalStore : ModalStore;
    profileStore : ProfileStore;
    commentStore : commentStore;
}

export const store: Store = {
    activityStore: new ActivityStore(),
    userStore: new UserStore(),
    commonStore: new CommonStore(),
    modalStore: new ModalStore(),
    profileStore: new ProfileStore(),
    commentStore: new commentStore()
}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}