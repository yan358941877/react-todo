// 计算一个月有多少天
export default function(year, month){
    // 注意这里的month是正常的month
    let num = [31,28,31,30,31,30,31,31,30,31,30,31]
    if(month !==2){
        return num[month-1]
    }

    if(year%4==0&&year%100!==0||year%400==0){
        return num[1]+1
    }else {
        return num[1]
    }
}