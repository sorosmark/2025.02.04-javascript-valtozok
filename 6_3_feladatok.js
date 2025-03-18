// 1-2feladat
let szam1 = prompt("szam(1): ")
parseInt(szam1)
if(-30 < szam1 && szam1 < 40)
{
    console.log("A szam -30, 40 kozott van")
}
else
{
    console.log("A szam nincs -30, 40 kozott")
}

let szam2 = prompt("szam(2): ")
parseInt(szam2)

if(szam1 > szam2)
{
    console.log(`A ${szam1} nagyobb mint a ${szam2}`)
}
else if(szam2 > szam1)
{
    console.log(`A ${szam2} nagyobb mint a ${szam1}`)
}
else
{
    console.log("A ketto szam egyenlo")
}


// 3.feladat

let x = prompt("szam(3): ")
parseInt(x)
if(x < 0)
{
    console.log("negativ")
}
else if(x > 0)
{
    console.log("pozitiv")
}
else
{
    console.log("nulla")
}

// 4.feladat
function egesz (num)
{
    if(num % 1 == 0)return true
    else return false
}
let egesz = prompt("szam(4): ", 0)



// 5.feladat
let szam4 = prompt("szam(5): ")
parseInt(szam4)
let szam5 = prompt("szam(5): ")
parseInt(szam5)
if(szam4 > szam5)
{
    console.log(`A(z) ${szam4} > ${szam5}`)
}
else if(szam5 > szam4)
{
    console.log(`A(z) ${szam5} > ${szam4}`)
}

// 6.feladat
let eletkor = prompt("eletkor")
parseInt(eletkor)
if(eletkor >= 0 && eletkor <= 6)
{
    console.log("gyerek")
}
else if(eletkor >= 7 && eletkor <= 18)
{
    console.log("iskolas")
}
else if(eletkor >= 19 && eletkor <= 60)
{
    console.log("dolgozo")
}
else if(eletkor > 60)
{
    console.log("nyugdijas")
}