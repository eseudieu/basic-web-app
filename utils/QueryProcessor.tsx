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
    var num1 = parseInt(tokens[0]);
    var num2 = parseInt(tokens[1]);
    return (num1 + num2).toString();
  }

  return "";
}
