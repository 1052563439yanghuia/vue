import { reactive } from "vue";

export const useNavBar = reactive([
    { text: "个人中心", name: "personCenter", isCheck: true },
])

export const navBarAdd = (item) => {
    const index = useNavBar.findIndex(i => i.name === item.name);
    if (index !== -1) navBarCheck(item);
    if (index === -1) {
        useNavBar.forEach(i => i.isCheck = false);
        useNavBar.push({ text: item.text, name: item.name, isCheck: true });
    }
}

export const navBarCheck = (item) => {
    useNavBar.forEach(i => {
        // 切换选中
        i.isCheck = (i.name === item.name);
    });
}

export const navBarRemove = (item, index = 0) => {
    if (index) useNavBar.splice(index, 1);
    if (item.isCheck) useNavBar[index - 1].isCheck = true;
}