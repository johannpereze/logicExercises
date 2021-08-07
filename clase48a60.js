const sumaConCallback = async (callback) => {
  try {
    let result = await callback(0);
    console.log(result.result);
    
    result = await callback(1);
    console.log(result.result);
    
    result = await callback(2);
    console.log(result.result);
    
    result = await callback(3);
    console.log(result.result);
    
    result = await callback(4);
    console.log(result.result);
    
    result = await callback(5);
    console.log(result.result);
    
    result = await callback(6);
    console.log(result.result);
    
  } catch (error) {
    console.error(error);
  }
};

const suma = (value) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        value,
        result: value + 1,
      });
    }, Math.random() * 1000);
  });
};

sumaConCallback(suma);

// console.log(suma(10));

// const ensayo = ()=>{
//   setTimeout(() => {
//     console.log("hola");
//   }, Math.random() * 3000);
// }

// ensayo()
