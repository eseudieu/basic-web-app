export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("name")) {
    return "eseudieu";
  }

  if (query.toLowerCase().includes("what is your andrew id?")) {
    return "eseudieu";
  }

  if (query.toLowerCase().includes("plus")) {
    var tokens = query.split(/\D+/);
    var num1 = parseInt(tokens[1]);
    var num2 = parseInt(tokens[2]);
    console.log(num1);
    console.log(num2);
    return (num1 + num2).toString();
  }

  if (query.toLowerCase().includes("numbers is the largest")) {
    var tokens = query.split(/\D+/);
    console.log(tokens);
    var num1 = parseInt(tokens[1]);
    var num2 = parseInt(tokens[2]);
    var num3 = parseInt(tokens[3]);
    if(num1 > num2 && num1 > num3) return num1.toString();
    if(num2 > num1 && num2 > num3) return num2.toString();
    return num3.toString();
  }

  return "";
}
