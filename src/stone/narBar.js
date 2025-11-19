import { reactive } from "vue";

export const useNavBar = reactive([
    { text:"个人中心",name:"personal",isCheck: true },
])

// 添加一个tab
export const navBarAdd = (item) =>{
    
    const index = useNavBar.findIndex(i => i.name === item.index);
    
    if(index !== -1) navBarCheck(item);
    
    if(index == -1) {
        useNavBar.forEach(i => i.isCheck = false);
        useNavBar.push({ text:item.text, name:item.name ,isCheck:true})
    }
    console.log(useNavBar);
}


export const navBarCheck = (item) => {
    useNavBar.forEach(i =>{
        // 切换选中
        i.isCheck = (i.name === item.name)
    });
}

export const navBarRemove = (item,index = 0) =>{
    if(index) useNavBar.splice(index,1);
    if(item.isCheck) useNavBar[index -1].isCheck = true;
}  