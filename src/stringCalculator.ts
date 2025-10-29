export const add = (str: string) => {
  if (str === "") return 0;
  const sum = str.replaceAll(" ","").split(",").map(Number).reduce((a, b) => a + b, 0);
  return sum;
};

export const validateNumberString = (str:string)=>{
  if (str.trim() === "") return true;
  const regex = /^(?!,)(?!.*,,)[0-9, ]+$/;
   return !regex.test(str);
}
