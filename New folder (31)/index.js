// I. მარტივი დავალებები (1–20)
// a= Number(prompt("enter any number "))
// 1. შემთხვევითი რიცხვი
// შექმენით შემთხვევითი მთელი რიცხვი 1-დან 100-მდე.
// let any = Math.floor(Math.random()*100)+1
// console.log(any)
// 2. კამათელი
// დააგენერირეთ შემთხვევითი რიცხვი 1-დან 6-მდე.
// let any1 = Math.floor(Math.random()*6)+1
// console.log(any1)

// 3. შემთხვევითი რიცხვი
// დააგენერირეთ შემთხვევითი რიცხვი 50-დან 150-მდე.
// let any2 = Math.floor(Math.random()*101)+50
// console.log(any2)
// 4. უარყოფითი და დადებითი რიცხვები
// მომხმარებელს შეაყვანინეთ რიცხვი და Math.abs()-ის გამოყენებით გამოიტანეთ მისი დადებითი მნიშვნელობა.
// console.log(Math.abs(a))
// 5. კვადრატი
// მომხმარებელს შეაყვანინეთ რიცხვი და იპოვეთ მისი კვადრატი Math.pow()-ით.
// console.log(Math.pow(a))

// 6. კუბი
// მომხმარებელს შეაყვანინეთ რიცხვი და იპოვეთ მისი კუბი.
// console.log(a**3)


// 7. კვადრატული ფესვი
// მომხმარებელს შეაყვანინეთ რიცხვი და იპოვეთ მისი კვადრატული ფესვი.
// console.log(Math.sqrt(a))


// 8. დამრგვალება
// მომხმარებელს შეაყვანინეთ ათწილადი რიცხვი და დაამრგვალეთ Math.round()-ით.
// console.log(Math.round(a))

// 9. ქვემოთ დამრგვალება
// მომხმარებელს შეაყვანინეთ ათწილადი რიცხვი და გამოიყენეთ Math.floor().
// console.log(Math.floor(a))


// // 10. ზემოთ დამრგვალება
// // მომხმარებელს შეაყვანინეთ ათწილადი რიცხვი და გამოიყენეთ Math.ceil().
// console.log(Math.ceil(a))

// 11. ათწილადის მოცილება
// გამოიყენეთ Math.trunc() და მოაცილეთ რიცხვს ათწილადი ნაწილი.

// console.log(Math.trunc(a))

// // 12. რიცხვის ნიშანი
// // გამოიყენეთ Math.sign() და დაადგინეთ, რიცხვი დადებითია, უარყოფითი თუ ნული.
// console.log(Math.sign(a))


// // 13. უდიდესი რიცხვი
// // მოცემულია სამი რიცხვი. იპოვეთ უდიდესი Math.max()-ით.
// let nums = [1 , 2 , 3]

// console.log(Math.max(...nums))
// // 14. უმცირესი რიცხვი
// // მოცემულია სამი რიცხვი. იპოვეთ უმცირესი Math.min()-ით.
// console.log(Math.min(...nums))

// // 15. PI
// // გამოიტანეთ Math.PI კონსოლში.
// console.log(Math.PI)
// 16. წრის ფართობი
// მომხმარებელს შეაყვანინეთ წრის რადიუსი და გამოთვალეთ ფართობი.

// ფორმულა: S = PI * r².
// let s =Math.PI * Math.pow(a , 2) 
// console.log(s )
// 17. წრის სიგრძე
// მომხმარებელს შეაყვანინეთ რადიუსი და გამოთვალეთ წრეწირის სიგრძე.

// ფორმულlet s =Math.PI * Math.pow(a , 2) 


// 18. ტექსტის რიცხვად გადაქცევა
// მოცემულია "250". გადააქციეთ Number()-ით რიცხვად და დაუმატეთ 50.
// let num = "250"
// let numNumber= Number(num)
// let sum =  numNumber+50
// console.log(sum)
// // 19. რიცხვის ტექსტად გადაქცევა
// // მოცემულია რიცხვი 2026. გადააქციეთ String()-ით ტექსტად.
// let num1 = 2026
// let numString = String(num1)
// console.log(numString)
// // 20. მონაცემის ტიპი
// // შექმენით ცვლადები String, Number, Boolean და Array ტიპებით. შეამოწმეთ თითოეულის ტიპი typeof-ით.
// let string= "string"
// let number = 12
// let boolean = true
// let nums1 = [1 , 2 , 3]

// console.log(typeof(string) , typeof(number) , typeof(boolean) , typeof(nums1))

// // II. Math და შემთხვევითი რიცხვები (21–40)

// // 21. შემთხვევითი ფერი
// // შექმენით მასივი 5 ფერით. შემთხვევითად გამოიტანეთ ერთი ფერი.
// let colors = ["pink" , "purple" , "green" , "blue"]
// let any3 = Math.floor(Math.random()*colors.length)
// console.log(colors[any3])

// // 22. შემთხვევითი სახელი
// // შექმენით მასივი 10 სახელით და შემთხვევითად აირჩიეთ ერთი სახელი.
// let names = ["dean" , "sara" , "blue" , "gina" , "mira" , "clara" , "leon"]
// let any4 = Math.floor(Math.random()*names.length)
// console.log(names[any4])

// // 23. შემთხვევითი რიცხვების ჯამი
// // დააგენერირეთ ორი შემთხვევითი რიცხვი 1-დან 50-მდე და გამოიტანეთ მათი ჯამი.
// let any5 = Math.floor(Math.random()*50)+1
// let any6 = Math.floor(Math.random()*50)+1
// console.log(any5 , any6 , any5+ any6)

// // 24. შემთხვევითი რიცხვების სხვაობა
// // დააგენერირეთ ორი შემთხვევითი რიცხვი და იპოვეთ მათი სხვაობა.
// console.log( any5 -any6)


// // 25. შემთხვევითი რიცხვების ნამრავლი
// // დააგენერირეთ ორი შემთხვევითი რიცხვი 1-დან 20-მდე და იპოვეთ ნამრავლი.
// let any7 = Math.floor(Math.random()*20)+1
// let any8 = Math.floor(Math.random()*20)+1
// console.log(any7* any8)

// // 26. შემთხვევითი რიცხვების უდიდესი
// // დააგენერირეთ სამი შემთხვევითი რიცხვი და იპოვეთ უდიდესი.
// let any9 = Math.floor(Math.random()*100)+1
// let any10 = Math.floor(Math.random()*100)+1
// let any11 = Math.floor(Math.random()*100)+1
// console.log(Math.max(any9 , any10 , any11))
// // 27. შემთხვევითი რიცხვების უმცირესი
// // დააგენერირეთ ხუთი შემთხვევითი რიცხვი და იპოვეთ უმცირესი.
// console.log(Math.min(any9 , any10 , any11))

// // 28. შემთხვევითი პაროლი
// // შექმენით მასივი ასოებითა და ციფრებით. შემთხვევითად აირჩიეთ 8 სიმბოლო და შექმენით პაროლი.
// let alphabet = "abcdefghijklmnopqrstuvwxyz1234567890"
// let pass=""
// for (let i = 0 ; i<8; i++){
//     let any= Math.floor(Math.random()*alphabet.length)
//     pass+=alphabet[any]
// }
// console.log(pass)
// // 29. შემთხვევითი ქულა
// // დააგენერირეთ შემთხვევითი ქულა 0-დან 100-მდე. თუ ქულა 50-ზე მეტია, გამოიტანეთ Passed, სხვა შემთხვევაში Failed.
// let any12 = Math.floor(Math.random()*100)+1
// if (any12 >50){
//     console.log("you passed")
// }else{
//     console.log("you failed")
// }
// // 30. შემთხვევითი ასაკი
// // დააგენერირეთ შემთხვევითი ასაკი 1-დან 100-მდე და განსაზღვრეთ, ბავშვია, მოზარდია თუ ზრდასრული.
// if (any12 >=18){
//     console.log("adult")
// }else if(any12>=14 && any12<18){
//     console.log("teen")
// }else{
//     console.log("child")
// }
// // 31. შემთხვევითი ფასდაკლება
// // დააგენერირეთ შემთხვევითი ფასდაკლება 5%-დან 50%-მდე.
// let sale = Math.floor(Math.random()*46)+5
// console.log(sale)
// // 32. პროდუქტის ფასი
// // მოცემულია პროდუქტის ფასი. შემთხვევითად დააგენერირეთ ფასდაკლება 10%-დან 30%-მდე და გამოთვალეთ საბოლოო ფასი.
// let sale1 = Math.floor(Math.random()*21)+10
// let finalPrice = a - a*sale1/100
// console.log(finalPrice)
// // 33. შემთხვევითი ათწილადი
// // დააგენერირეთ შემთხვევითი ათწილადი რიცხვი და დაამრგვალეთ ორ ნიშნამდე toFixed()-ით.
// console.log(a.toFixed(2))
// // 34. შემთხვევითი ლუწი რიცხვი
// // დააგენერირეთ შემთხვევითი ლუწი რიცხვი 2-დან 100-მდე.
// let any13 = (Math.floor(Math.random()*50)+1) *2
// console.log(any13)
// // 35. შემთხვევითი კენტი რიცხვი
// // დააგენერირეთ შემთხვევითი კენტი რიცხვი 1-დან 99-მდე.
// let any14 = (Math.floor(Math.random()*50)) *2+1

// // 36. შემთხვევითი რიცხვების საშუალო
// // დააგენერირეთ ოთხი შემთხვევითი რიცხვი და გამოთვალეთ მათი საშუალო არითმეტიკული.
// let num12 =(Math.floor(Math.random()*100)+1)
// let num13 =(Math.floor(Math.random()*100)+1)
// let num14 =(Math.floor(Math.random()*100)+1)
// let num15 =(Math.floor(Math.random()*100)+1)
// let sum1 = num12 + num13 +num14 +num15
// console.log(sum1/4)
// // 37. შემთხვევითი რიცხვების კვადრატები
// // დააგენერირეთ სამი შემთხვევითი რიცხვი და თითოეულის კვადრატი გამოიტანეთ.
// for(let i=0 ; i<3 ; i++){
//     let randomNum2 = Math.floor(Math.random()*100)+1
//     console.log(randomNum2**2)
// }

// // 38. შემთხვევითი რიცხვების ფესვები
// // დააგენერირეთ ხუთი დადებითი შემთხვევითი რიცხვი და გამოიტანეთ მათი კვადრატული ფესვები.
// for(i=0 ; i<5 ;i++){
//     let randomNum1 = Math.floor(Math.random()*100)+1
//     console.log(Math.sqrt(randomNum1))
// }
// // 39. შემთხვევითი რიცხვების დამრგვალება
// // დააგენერირეთ 10 შემთხვევითი ათწილადი რიცხვი და დაამრგვალეთ Math.ceil()-ით.
// for(let i=0 ; i<10; i++){
//     let randomNum = Math.random()*100
//     console.log(Math.ceil(randomNum))
// }
// // 40. რიცხვის გამოცნობა
// // პროგრამამ შემთხვევითად აირჩიოს რიცხვი 1-დან 20-მდე. მომხმარებელს შეაყვანინეთ რიცხვი და შეამოწმეთ, გამოიცნო თუ არა.
//     let randomNum1 = Math.floor(Math.random()*20)+1
//     if(a ===randomNum1){
//         console.log("you guessed it")
//     }else{
//         console.log("you did not guessed it")
//     }
//     console.log(randomNum1)
// // III. String და Number მეთოდები (41–55)

// // 41. parseInt()
// // მოცემულია "125.89". მიიღეთ მხოლოდ მთელი ნაწილი.
// let num2= 125.89
// console.log(parseInt(num2))

// // 42. parseFloat()
// // მოცემულია "45.78". გადააქციეთ ათწილად რიცხვად.
// let num3 = 45.78
// console.log(parseFloat(num3))

// // 43. parseInt()
// // მოცემულია "250px". მიიღეთ მხოლოდ რიცხვი.
// let num4 = "250px"
// console.log(parseInt(num4))


// // 44. parseFloat()
// // მოცემულია "19.99 GEL". მიიღეთ რიცხვითი მნიშვნელობა.
// let num5 ="19.99 GEL"
// console.log(parseFloat(num5))

// 45. isNaN()
// მომხმარებელს შეაყვანინეთ მნიშვნელობა. შეამოწმეთ, არის თუ არა ის რიცხვი.
// Elisabed
// a = prompt()
// if (isNaN(a)){
//     console.log("a isnt a number")
// }else(
//     console.log("its a number")
// )


// 46. Number()
// მოცემულია სამი ტექსტური რიცხვი. გადააქციეთ Number()-ით და შეკრიბეთ.
// let a = "5"
// let b = "5"
// let c = "5"
// let abc = Number(a)+ Number(b)+ Number(c)
// console.log(abc)
// 47. toFixed()
// მოცემულია 15.67891. გამოიტანეთ ორი ათწილადი ნიშნით.
// let a = 15.67891
// console.log(a.toFixed(2))

// 48. toFixed()
// მომხმარებელს შეაყვანინეთ პროდუქტის ფასი და გამოიტანეთ ორი ათწილადი ნიშნით.
// a = Number(prompt())
// console.log(a.toFixed(2))

// 49. String()
// მოცემულია რიცხვი 2026. გადააქციეთ ტექსტად და გამოიტანეთ მისი სიგრძე.
// let num = 2026
// let string = String(num)
// console.log(string.length)

// 50. typeof
// მოცემულია ცვლადები სხვადასხვა მონაცემის ტიპით. გამოიტანეთ თითოეულის ტიპი.
// let num = 546
// console.log(typeof(num))

// 51. String-ის სიგრძე
// მომხმარებელს შეაყვანინეთ სიტყვა და გამოიტანეთ რამდენი სიმბოლო აქვს.
// a = prompt
// console.log(a.length)

// 52. სიმბოლოების დათვლა
// მოცემულია სიტყვა "JavaScript". for ციკლით გამოიტანეთ თითოეული სიმბოლო ცალ-ცალკე.
// let word = "JavaScript"
// for(let i = 0 ; i <10 ; i++){
//     console.log(word[i])
// }
// 53. უკუღმა ტექსტი
// მომხმარებელს შეაყვანინეთ სიტყვა და for ციკლით გამოიტანეთ უკუღმა.
// a= prompt()
// for(let i = a.length; i >=0 ; i--){
//     console.log(a[i])
// }
// 54. ციფრების რაოდენობა
// მომხმარებელს შეაყვანინეთ რიცხვი და დათვალეთ რამდენი ციფრისგან შედგება.
// let  num = 456123
// console.log(String(num).length)

// 55. ციფრების ჯამი
// მომხმარებელს შეაყვანინეთ რიცხვი და გამოთვალეთ მისი ციფრების ჯამი.
// let a = prompt()
// let result= 0
// for (let i = 0 ;i<a.length  ; i++){
//     result+=Number(a[i])
// }
// console.log(result)
// IV. Arrays, Spread Operator და Math (56–75)

// 56. მასივის უდიდესი რიცხვი

// მოცემულია რიცხვების მასივი. იპოვეთ უდიდესი რიცხვი Math.max()-ით და Spread Operator-ით.
// let arr = [1 , 5 ,  6 , 4 ,5 ,8,23 , 8, 5, 20]
// console.log(Math.max(...arr))

// 57. მასივის უმცირესი რიცხვი
// მოცემულია რიცხვების მასივი. იპოვეთ უმცირესი რიცხვი Math.min()-ით და Spread Operator-ით.
// console.log(Math.min(...arr))

// 58. მასივის ასლი
// შექმენით ერთი მასივი და  n   Spread Operator-ის გამოყენებით შექმენით მისი ასლი.
// let arr1=[5, 5 ,8 ]
// let copy= [...arr1]
// console.log(copy)
// 59. მასივების გაერთიანება
// გააერთიანეთ ორი მასივი Spread Operator-ის გამოყენებით.
// let arr1=[5, 5 ,8 ]
// let arr2=[8, 4 ,9 ]
// arr1.push(...arr2)
// console.log(arr1)
// 60. მასივის დამატება
// მოცემულია მასივი. Spread Operator-ის გამოყენებით დაამატეთ მას ახალი ელემენტი.
// let arr1=[5, 5 ,8 ]
// let add = [...arr1 , 5]
// console.log(add)
// 61. მასივის საშუალო
// მოცემულია რიცხვების მასივი. იპოვეთ ყველა ელემენტის საშუალო არითმეტიკული.
// let result=0
// for(let i = 0 ; i<arr.length; i++){
//     result+=arr[i]
// }
// let avarage = result/arr.length
// console.log(avarage)
// 62. მასივის ჯამი
// for ციკლით გამოთვალეთ მასივში არსებული ყველა რიცხვის ჯამი.
// let result1=0
// for(let i = 0 ; i<arr.length; i++){
//     result1+=arr[i]
// }
// console.log(result1)
// 63. ლუწი რიცხვები
// მოცემული მასივიდან გამოიტანეთ მხოლოდ ლუწი რიცხვები.
// for(let i = 0 ; i<arr.length; i++){
//     if(arr[i]%2===0){
//         console.log(arr[i])
//     }
// }
// 64. კენტი რიცხვები
// მოცემული მასივიდან გამოიტანეთ მხოლოდ კენტი რიცხვები.
// for(let i = 0 ; i<arr.length; i++){
//     if(arr[i]%2===1){
//         console.log(arr[i])
//     }
// }
// 65. დადებითი რიცხვები
// მოცემული მასივიდან გამოიტანეთ მხოლოდ დადებითი რიცხვები.
// for(let i = 0 ; i<arr.length; i++){
//     if(arr[i]>0){
//         console.log(arr[i])
//     }
// }
// 66. უარყოფითი რიცხვები
// მოცემული მასივიდან გამოიტანეთ მხოლოდ უარყოფითი რიცხვები.
// for(let i = 0 ; i<arr.length; i++){
//     if(arr[i]<0){
//         console.log(arr[i])
//     }
// }
// 67. რიცხვების კვადრატები
// მასივის თითოეული რიცხვის კვადრატი გამოიტანეთ ახალ მასივში.

// let arr1 = arr.map(item => item**2)
// console.log(arr1)
// 68. რიცხვების ფესვები
// მასივში არსებული ყველა რიცხვის კვადრატული ფესვი გამოიტანეთ ახალ მასივში.
// let arr2 = arr.map(item => Math.sqrt(item))
// console.log(arr2)
// 69. მასივის შემთხვევითი ელემენტი
// შექმენით 10 ელემენტიანი მასივი და შემთხვევითად აირჩიეთ ერთი ელემენტი.

// let any= Math.floor(Math.random()*9)+1
// console.log(arr[any])
// console.log(any)
// 70. მასივის შემთხვევითი რიცხვები
// შექმენით 10 ელემენტიანი მასივი, რომელშიც იქნება შემთხვევითი რიცხვები 1-დან 100-მდე.
// let arr2=[]
// for(let i=0 ;i<10; i++){
//     let any= Math.floor(Math.random()*100)+1
//     arr2.push(any)
// }
// console.log(arr2)
// 71. უდიდესი და უმცირესი
// იპოვეთ მასივის უდიდესი და უმცირესი რიცხვები. გამოიტანეთ მათი სხვაობა.
// let min=Math.min(...arr2)
// let max=Math.max(...arr2)
// let subtract = max-min
// console.log(min, max , subtract)
// // 72. მასივის შებრუნება
// // for ციკლის გამოყენებით გამოიტანეთ მასივი უკუღმა.
// for(let i=arr2.length-1 ; i>=0 ; i--){
//     console.log(arr2[i])
// }
// 73. განსხვავებული ციფრები                   
// მოცემულია რიცხვი 112233445. დათვალეთ რამდენი განსხვავებული ციფრია მასში.
// let num=112233445
// let new1 = new Set(num.toString())
// console.log(new1.size)
// 74. განმეორებული ელემენტები
// მოცემულია მასივი. იპოვეთ რომელი რიცხვები მეორდება.

// 75. მასივის გაერთიანება და დალაგება
// გააერთიანეთ ორი რიცხვების მასივი Spread Operator-ით და დაალაგეთ ზრდადობით.
// let arr1=[5, 5 ,8 ]
// let arr2=[8, 4 ,9 ]
// let merged= [...arr1 , ...arr2]
// let sorted = merged.sort((a, b)=>a-b)
// console.log(merged)
// V. for ციკლი და ლოგიკური ამოცანები (76–90)

// 76. 1-დან 100-მდე
// გამოიტანეთ ყველა რიცხვი 1-დან 100-მდე.
// for (let i=0 ; i<100 ; i++){
//   console.log(i)
// }

// 77. 100-დან 1-მდე
// გამოიტანეთ რიცხვები უკუღმა.
// for (let i=1000 ; i>0 ; i--){
//   console.log(i)
// }
// 78. ლუწი რიცხვები
// გამოიტანეთ ყველა ლუწი რიცხვი 1-დან 100-მდე.
// for (let i=0 ; i<100 ; i++){
//     if(i%2===0){
//         console.log(i)
//     }
// }

// 79. კენტი რიცხვები
// გამოიტანეთ ყველა კენტი რიცხვი 1-დან 100-მდე.
// for (let i=0 ; i<100 ; i++){
//     if(i%2===1){
//         console.log(i)
//     }
// }
// 80. რიცხვების ჯამი
// გამოთვალეთ 1-დან 100-მდე ყველა რიცხვის ჯამი.
// let result =0
// for (let i=0 ; i<100 ; i++){
//   result+=i
// }
// console.log(result)
// 81. შემთხვევითი რიცხვების ჯამი
// დააგენერირეთ 10 შემთხვევითი რიცხვი და გამოთვალეთ მათი ჯამი.
// let result=0

// for (let i=0 ; i<10 ; i++){
//     let randomNum=Math.floor(Math.random() *200)+1
//     result+=randomNum
// }

// console.log(result)

// 82. შემთხვევითი რიცხვების მაქსიმუმი
// დააგენერირეთ 10 შემთხვევითი რიცხვი და იპოვეთ უდიდესი.


// for (let i=0 ; i<10 ; i++){
//     let randomNum=Math.floor(Math.random() *200)+1
//     console.log(Math.max(randomNum))
// }

// 83. შემთხვევითი რიცხვების მინიმუმი
// დააგენერირეთ 10 შემთხვევითი რიცხვი და იპოვეთ უმცირესი.
// for (let i=0 ; i<10 ; i++){
//     let randomNum=Math.floor(Math.random() *200)+1
//     console.log(Math.min(randomNum))
// }
// 84. რიცხვის გამრავლების ტაბულა
// მომხმარებელს შეაყვანინეთ რიცხვი და გამოიტანეთ მისი გამრავლების ტაბულა 1-დან 10-მდე.
// a= Number(prompt())
// for (let i=1 ; i<10 ; i++){
//     console.log(a*i)
// }
// 85. რიცხვის ფაქტორიალი
// მომხმარებელს შეაყვანინეთ რიცხვი და გამოთვალეთ მისი ფაქტორიალი.
// let result =1 
// for (let i=1 ; i<=a ; i++){
//     result*=i
// }
// console.log(result)
// 86. რიცხვის ციფრები
// მომხმარებელს შეაყვანინეთ რიცხვი და გამოიტანეთ მისი თითოეული ციფრი ცალ-ცალკე.
// a= prompt()
// for (let i=0 ;i<a.length ; i++){
//     console.log(a[i])
// }

// 87. ციფრების ჯამი
// // მომხმარებელს შეაყვანინეთ მთელი რიცხვი და გამოთვალეთ მისი ციფრების ჯამი.
// a= prompt()
// let sum=0
// for (let i=0 ;i<a.length ; i++){
//     sum+=Number(a[i])
// }
// console.log(sum)
// 88. ციფრების ნამრავლი
// მომხმარებელს შეაყვანინეთ მთელი რიცხვი და გამოთვალეთ მისი ციფრების ნამრავლი.
// a= prompt()
// let sum=0
// for (let i=0 ;i<a.length ; i++){
//     sum+=Number(a[i])
// }
// console.log(sum)
// 89. რიცხვის შებრუნება
// მომხმარებელს შეაყვანინეთ რიცხვი 12345 და მიიღეთ 54321.
// a= prompt()
// let num=""
// for (let i=a.length-1 ;i>=0 ; i--){
//     num+=a[i]
// }
// console.log(num)
// 90. პალინდრომი
// შეამოწმეთ, არის თუ არა მომხმარებლის მიერ შეყვანილი რიცხვი პალინდრომი. მაგალითად: 121.
// a= prompt()
// let num=""
// for (let i=a.length-1 ;i>=0 ; i--){
//     num+=a[i]
// }
// if(num===a){
//     console.log("it is")
// }else{
//     console.log("it isn't")
// }
// VI. შედარებით რთული დავალებები (91–100)

// 91. შემთხვევითი კოდი
// შექმენით 6-ნიშნა შემთხვევითი კოდი. ყველა ციფრი უნდა იყოს 0-დან 9-მდე.
// let pass = ""
// for(let i=0 ; i <6; i++){
//     let any= Math.floor(Math.random()*10)
//     pass+=any
// }
// console.log(pass)
// 92. შემთხვევითი ფერების გენერატორი
// შექმენით მასივი 10 ფერით. შემთხვევითად აირჩიეთ სამი განსხვავებული ფერი.
// let colors =["blue" , "purple" , "green" , "red" , "yellow" , "magenta" , "black", "brown" , "pink" ,"white"]
// for(let i =0; i<3; i++){
//     let any= Math.floor(Math.random()*10)
//     console.log(colors[any])
// }
// 93. ქულების გენერატორი
// შექმენით 10 სტუდენტის ქულების მასივი. თითოეული ქულა უნდა იყოს შემთხვევითი 0-დან 100-მდე. გამოითვალეთ საშუალო ქულა.
// let arr=[]
// let result =0
// for(let i =0; i<10; i++){
//     let any= Math.floor(Math.random()*101)
//     arr.push(any)
// }
// console.log(arr)
// for(let i=0 ; i<arr.length ; i++){
//     result+=arr[i]
// }
// let avarage = result/arr.length
// console.log(avarage)
// 94. სტუდენტების შედეგები
// შექმენით 10 სტუდენტის ქულების მასივი. იპოვეთ უმაღლესი და უმცირესი ქულა. 
// დათვალეთ რამდენმა სტუდენტმა გადალახა 50 ქულა.
// let arr=[]
// let result=0
// for(let i =0; i<10; i++){
//     let any= Math.floor(Math.random()*101)
//     arr.push(any)
// }
// console.log(arr)
// let max= Math.max(...arr)
// let min= Math.min(...arr)

// for (let i=0 ; i<arr.length; i++){
//     if(arr[i]>50){
//         result++
//     }
// }
// console.log(result)
// 95. ფასების გენერატორი
// შექმენით 10 პროდუქტის შემთხვევითი ფასი 10-დან 500-მდე. გამოიტანეთ ყველაზე ძვირი და ყველაზე იაფი პროდუქტი.
// let arr=[]
// for(let i =0; i<10; i++){
//     let any= Math.floor(Math.random()*491)+10
//     arr.push(any)
// }
// console.log(arr)
// let max = Math.max(...arr)
// let min = Math.min(...arr)
// console.log(max, min)
// 96. პაროლის გენერატორი
// შექმენით მასივი ინგლისური ასოებითა და ციფრებით. შემთხვევითად დააგენერირეთ 8 სიმბოლოიანი პაროლი.
// let alphabet = "abcdefghijklmnopqrstuvwxyz1234567890"
// let pass=""
// for (let i = 0 ; i<8; i++){
//     let any= Math.floor(Math.random()*alphabet.length)
//     pass+=alphabet[any]
// }
// console.log(pass)

// 97. რიცხვების ანალიზი
// მომხმარებელს შეაყვანინეთ 5 რიცხვი. გამოიტანეთ:

// * მათი ჯამი;
// * საშუალო არითმეტიკული;
// * უდიდესი რიცხვი;
// * უმცირესი რიცხვი;
// * ლუწი რიცხვების რაოდენობა;
// * კენტი რიცხვების რაოდენობა.
// let result = 0
// let result1 = 0
// a= Number(prompt())
// b= Number(prompt())
// c= Number(prompt())
// d= Number(prompt())
// e= Number(prompt())
// let arr1 = []
// arr1.push(a , b , c , d , e)
// let sum = a +b + c+ d +e
// let avarage = sum / 5
// let max  = Math.max(a , b , c, d , e)
// let min  = Math.min(a , b , c, d , e)
// console.log(arr1)

// for (let i=0 ; i<arr1.length ; i++){
//     if (arr1[i]%2===0){
//         result++
//     }else{
//         result1++
//     }
// }
// console.log(result , result1)
// 98. შემთხვევითი მათემატიკური ტესტი
// პროგრამამ შემთხვევითად აირჩიოს ორი რიცხვი 1-დან 20-მდე. შემთხვევითად აირჩიოს მათემატიკური მოქმედება (+, -, *).
//  მომხმარებელმა შეიყვანოს პასუხი. შეამოწმეთ სწორია თუ არა.

// let any1=Math.floor(Math.random()*20)+1
// let any2=Math.floor(Math.random()*20)+1
  
// let symbols = ["+" , "-" , "*"]
// let random = symbols[Math.floor(Math.random()*symbols.length)]
// let answer 

// console.log(random , any1 , any2)
// if(random==="+"){
//     answer=any1+any2
// }else if(random==="-"){
//     answer=any1-any2
// }else{
//     answer=any1*any2
// }

// let question =Number(prompt(`what is : ${any1} ${random} ${any2}`))
// if(answer===question){
//     console.log("it's correct")
// }else{
//     console.log("it's wrong")
// }
// 99. შემთხვევითი რიცხვების სტატისტიკა
// შექმენით 20 შემთხვევითი რიცხვის მასივი 1-დან 100-მდე. გამოიტანეთ:

// * ყველა რიცხვი;+
// * ჯამი;+
// * საშუალო;
// * უდიდესი;
// * უმცირესი;
// * ლუწების რაოდენობა;
// * კენტების რაოდენობა;
// * დადებითი რიცხვების რაოდენობა.
// let result=0
// let arr =[]
// let result1 = 0
// let result2 = 0
// let result3 = 0
// for (let i=0 ; i<20 ; i++){
//     let randomNum=Math.floor(Math.random() *100)+1
//     console.log(randomNum)
//     result+=randomNum
//     arr.push(randomNum)
// }

// console.log(result)
// console.log(result/arr.length)
// console.log(Math.max(...arr))
// console.log(Math.min(...arr))
// for(let i=0 ; i<arr.length ; i++){
//     if(arr[i]%2===0){
//         result1++
//     }else{
//         result2++
//     }
//     if(arr[i]>0){
//         result3++
//     }
// }
// console.log(result1 , result2 , result3)

// 100. დიდი მათემატიკური პროექტი
// შექმენით პროგრამა, რომელიც:
// 1. დააგენერირებს 15 შემთხვევით რიცხვს 1-დან 200-მდე.+
// 2. შეინახავს მათ მასივში.+
// 3. გამოიტანს ყველა რიცხვს.+
// 4. იპოვის უდიდეს რიცხვს Math.max()-ით.+
// 5. იპოვის უმცირეს რიცხვს Math.min()-ით.+
// 6. გამოთვლის ყველა რიცხვის ჯამს.+
// 7. გამოთვლის საშუალო არითმეტიკულს.+
// 8. გამოიტანს ყველა ლუწ რიცხვს.+
// 9. გამოიტანს ყველა კენტ რიცხვს.+
// 10. გამოთვლის რამდენი რიცხვია 100-ზე მეტი.+
// 11. თითოეული რიცხვის კვადრატს გამოიტანს.+
// 12. თითოეული რიცხვის კვადრატულ ფესვს გამოიტანს.+
// 13. გამოიტანს მასივს უკუღმა.+
// 14. იპოვის მასივში განსხვავებული რიცხვების რაოდენობას.+
// let arr = []
// let result=0
// let result1 =0
// for (let i=0 ; i<20 ; i++){
//     let randomNum=Math.floor(Math.random() *200)+1
//     arr.push(randomNum)
//     result+=randomNum

//     if(randomNum%2===0){
//         console.log(randomNum)
//     }
//     if(randomNum%2===1){
//         console.log(randomNum)
//     }
//     if(randomNum>100){
//         result1++
//     }
// }
// console.log(arr)
// console.log(Math.max(...arr))
// console.log(Math.min(...arr))
// console.log(result)
// console.log(result/arr.length)
// console.log(result1)

// for(let i =0 ; i <arr.length; i++){
//     console.log(arr[i]**2)
//     console.log(Math.sqrt(arr[i]))
// }
// for(let i=arr.length ; i>=0 ; i--){
//     console.log(arr[i])
// }
// let new1 = new Set(arr).size

// console.log(new1)