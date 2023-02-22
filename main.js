let b = Number(prompt(" enter your namber "));
if (b < 50 && b > 23) {
  alert("OK");
} else {
  alert("error");
}
let a = prompt(
  " Введи мову на українській: Німецька , Англійська , Індонезійська "
);
if (a == "Англійська") {
  let c = prompt(" Введіть слова: яблуко , машина , телефон , ноутбук ");
  if (c == "яблуко") {
    alert("apple");
  } else if (c == "ноутбук") {
    alert(" laptop ");
  } else if (c == "машина") {
    alert(" car ");
  } else if (c == "телефон") {
    alert("fhone");
  } else ("error");
}
 else if (a == "Німецька" ) {
  let c = prompt(" Введіть слова: яблуко , машина , телефон , ноутбук ");
  if (c == "яблуко") {
    alert("Apfel");
  } else if (c == "ноутбук") {
    alert(" laptop ");
  } else if (c == "машина") {
    alert(" Maschine ");
  } else if (c == "телефон") {
    alert("Telefon");
  } else ("error");
}
else if (a ==  "індонезійська") {
  let c = prompt(" Введіть слова: яблуко , машина , телефон , ноутбук ");
  if (c == "яблуко") {
    alert("Apel");
  } else if (c == "ноутбук") {
    alert(" laptop ");
  } else if (c == "машина") {
    alert(" mesin ");
  } else if (c == "телефон") {
    alert("Telepon");
  } else ("error");
}
else ("error")

