export function getTradingCurrency(pair: string, name: string) {
  if(pair.startsWith(name)) {
    return pair.slice(name.length);
  } else {
    throw new Error("Sorry, can't find trading currency")
  }
}