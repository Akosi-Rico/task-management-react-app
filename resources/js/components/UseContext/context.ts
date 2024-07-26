import { createContext, useContext } from "react";

interface ContextValue {
    value: string;
}

interface UserInfo {
    name: string;
    currentDate: string;
}

export const PublicImagePathContext = createContext<ContextValue | undefined>(undefined);
export const DataTableUrlContext = createContext<ContextValue | undefined>(undefined);
export const TaskStoreUrlContext = createContext<ContextValue | undefined>(undefined);
export const TaskDestroyUrlContext = createContext<ContextValue | undefined>(undefined);
export const RegisterUserUrlContext = createContext<ContextValue | undefined>(undefined);
export const LoginProcessUrlContext = createContext<ContextValue | undefined>(undefined);
export const TaskIndexUrlContext = createContext<ContextValue | undefined>(undefined);
export const LoginUrlContext = createContext<ContextValue | undefined>(undefined);
export const LogoutUrlContext = createContext<ContextValue | undefined>(undefined);

export const UserInfoContext = createContext<UserInfo | undefined>(undefined);
export const UserInfoUrlContext = createContext<ContextValue | undefined>(undefined);

export const usePublicPathImageContext = () => {
    const result = useContext(PublicImagePathContext);
    if (result === undefined) {
        throw new Error("usePublicPathImage must be used with a PublicImageContext!");
    }

    return result;
}

export const useDataTableUrlContext = () => {
    const result = useContext(DataTableUrlContext);
    if (result === undefined) {
        throw new Error("useDataTableUrlContext must be used with a DataTableUrlContext!");
    }

    return result;
}

export const useTaskStoreUrlContext = () => {
    const result = useContext(TaskStoreUrlContext);
    if (result === undefined) {
        throw new Error("useTaskStoreUrlContext must be used with a TaskStoreUrlContext!");
    }

    return result;
}

export const useTaskDestroyUrlContext = () => {
    const result = useContext(TaskDestroyUrlContext);
    if (result === undefined) {
        throw new Error("useTaskDestroyUrlContext must be used with a TaskDestroyUrlContext!");
    }

    return result;
}

export const useRegisterUserUrlContext = () => {
    const result = useContext(RegisterUserUrlContext);
    if (result === undefined) {
        throw new Error("useRegisterUserUrlContext must be used with a RegisterUserUrlContext!");
    }

    return result;
}

export const useLoginProcessUrlContext = () => {
    const result = useContext(LoginProcessUrlContext);
    if (result === undefined) {
        throw new Error("useLoginProcessUrlContext must be used with a LoginProcessUrlContext!");
    }

    return result;
}

export const useTaskIndexUrlContext = () => {
    const result = useContext(TaskIndexUrlContext);
    if (result === undefined) {
        throw new Error("useTaskIndexUrlContext must be used with a TaskIndexUrlContext!");
    }

    return result;
}

export const useLoginUrlContext = () => {
    const result = useContext(LoginUrlContext);
    if (result === undefined) {
        throw new Error("useLoginUrlContext must be used with a LoginUrlContext!");
    }

    return result;
}

export const useLogoutUrlContext = () => {
    const result = useContext(LogoutUrlContext);
    if (result === undefined) {
        throw new Error("useLogoutUrlContext must be used with a LogoutUrlContext!");
    }

    return result;
}

export const useUserInfoContext = () => {
    const result = useContext(UserInfoContext);
    if (result === undefined) {
        throw new Error("useUserInfoContext must be used with a UserInfoContext!");
    }

    return result;
}

export const useUserInfoUrlContext = () => {
    const result = useContext(UserInfoUrlContext);
    if (result === undefined) {
        throw new Error("useUserInfoUrlContext must be used with a UserInfoUrlContext!");
    }

    return result;
}