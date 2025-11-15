import { reactive } from "vue";

export const useUser = reactive({
    id: 1,
    userName: "屈侯",
    account: "admin",
    token: "",
    isLogining: true,
    role: "teacher"
})