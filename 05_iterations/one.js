for (let index = 0; index < 10; index++) {
  const element = index;
  if (element == 5) {
    // console.log("5 is best");
  }
  // console.log(element);
}

for (let i = 0; i < 10; i++) {
//   console.log(`OUTER LOOP ${i}`);
  for (let j = 0; j < 10; j++) {
    // console.log(`INNER LOOP ${j} and INNER LOOP ${i}`);
  }
}
for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    // console.log(`${i}*${j}=${i*j}`);
  }
}

const array=["nilendri","Asha","Natasha"]
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    // console.log(element);
}
for (let i = 1; i <=10; i++) {
    if (i==5) {
        console.log("Detected 5");
        break
    }
    console.log(`Value of i is ${i}`);
}
for (let i = 1; i <=10; i++) {
    if (i==5) {
        console.log("Detected 5");
        continue
    }
    console.log(`Value of i is ${i}`);
}
