import *as DB1 from '../DataBase/DataBase1.json';
﻿import *as DB2 from '../DataBase/DataBase2.json'; 

// Находим индекс нужного обьекта в DB1
let findindexDB1 = p1 => DB1.default.findIndex(item => (p1 === item.ValP1));

// Расчет прочности поврежденного бетона 
let strUnDamConcrete = (obj, p2) => (obj.ValUnDamConcrete - (((p2 - 1.1) / 0.01) * obj.ValCoef)).toFixed(0);

// Находим индекс нужного обьекта в DB2
let findindexDB2 = val => DB2.default.findIndex(item => (val >= item.min && val < item.max));

// Нахождение прочности бетона опор по маркам. 
function strDamConcrete(obj, val) {
  let result = '';
  let dif = val - obj.min;
   if(val > 400) {
    result = 'Прочность соответствует проектной нагрузке.';
   } else if(val < 100) {
      result = 'Бетон полностью исчерпал несущую способность.';
     } else {
        result = `Остаточная несущая способность для разных типов опор<br> СЖБК-4,5(УОФ):  ${(dif * obj.SJ4Ucoef + obj.SJ4U).toFixed(2)}Мн<br>
                  СЖБК-4,5(ПК):  ${(dif * obj.SJ4Pcoef + obj.SJ4P).toFixed(2)}Мн<br> 
                  СЖБК-6(УОФ):  ${(dif * obj.SJ6Ucoef + obj.SJ6U).toFixed(2)}Мн<br>
                  СЖБК-6(ПК):  ${(dif * obj.SJ6Pcoef + obj.SJ6P).toFixed(2)}Мн<br> 
                  СК(У)-6(УОФ):  ${(dif * obj.SK6Ucoef + obj.SK6U).toFixed(2)}Мн<br>
                  СК(У)-8(УОФ):  ${(dif * obj.SK8Ucoef + obj.SK8U).toFixed(2)}Мн`;                   
       }
  return result;
}

function calcCon(p1, p2) {
 let objDB1 = DB1.default[findindexDB1(p1)];
 let UnDamConcrete = strUnDamConcrete(objDB1, p2); 
 let objDB2 = DB2.default[findindexDB2(UnDamConcrete)];
 return strDamConcrete(objDB2, UnDamConcrete);
}
 
 document.getElementById("button").onclick = function() {
  let result;
  let P1 = Number(document.getElementById("p1").value);
  let P2 = (document.getElementById("p2").value);
   if(P2.includes(',')){
    P2 = Number(P2.replace(/,/, '.'));
   }

  // Прочность для опор без предварительного напряжения арматуры.
  if(Number(document.getElementById("select").value) === 2) {
   result = 1.6 - P2 + 1;
   document.getElementById("result").innerHTML = `Остаточная несущая способность:  ${result.toFixed(2)}Мн`;
  } // Прочность для опор с предварительным напряжением арматуры(При показателе П1 более 36мкс).
    else if(Number(document.getElementById("select").value) === 1 && P1 >= 360) {
     result = (1.4 - P2) * 2 + 1;
     document.getElementById("result").innerHTML = `Остаточная несущая способность:  ${result.toFixed(2)}Мн`;
    } // Прочность для опор с предварительным напряжением арматуры(При показателе П1 менее 36мкс и П2 более 1,1).
      else if(Number(document.getElementById("select").value) === 1 && P1 < 360) {
       result = calcCon(P1, P2);
       document.getElementById("result").innerHTML = result;
      }
 };
