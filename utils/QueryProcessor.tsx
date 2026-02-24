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
    var ans = 0
    for(var i = 1; i < tokens.length - 1; i++)
      ans += parseInt(tokens[i]);
    return ans.toString();
  }

  if (query.toLowerCase().includes("minus")) {
    let tokens = query.split(/\D+/);
    let num1 = parseInt(tokens[1]);
    let num2 = parseInt(tokens[2]);
    return (num1 - num2).toString();
  }

  if (query.toLowerCase().includes("multiplied")) {
    let tokens = query.split(/\D+/);
    var ans = 1;
    for(var i = 1; i < tokens.length - 1; i++)
      ans *= parseInt(tokens[i]);
    return ans.toString();
  }

  if (query.toLowerCase().includes("numbers is the largest")) {
    let tokens = query.split(/\D+/);
    var greatest = -9999;
    for(var i = 1; i < tokens.length - 1; i++)
      if(parseInt(tokens[i]) > greatest)
        greatest = parseInt(tokens[i])
    return greatest.toString();
  }

  if (query.toLowerCase().includes("square and a cube")) {
    let tokens = query.split(/\D+/);
    let squares_and_cubes = [0, 1, 64, 729, 4096, 15625, 46656]
    const ans = [];
    for(var i = 1; i < tokens.length - 1; i++)
      if(squares_and_cubes.includes(parseInt(tokens[i]))) ans.push(tokens[i]);
    ans.join(", ")
  }

  return "";
}
