const todoPool = [
  "Buy 2kg rice at ₹60/kg",
  "Pick up 1 litre milk for ₹50",
  "Pay electricity bill",
  "Buy 3 packets of biscuits at ₹20 each",
  "Book train tickets to Chennai",
  "Get 5 apples at ₹30/kg (1kg approx)",
  "Pay monthly rent ₹10,000",
  "Buy 2 shampoo bottles at ₹150 each",
  "Refill petrol 5 litres at ₹110/litre",
  "Call plumber to fix sink",
  "Buy 12 eggs for ₹6 each",
  "Pay internet bill ₹799",
  "Clean the study table",
  "Buy 500g sugar at ₹45/kg",
  "Get medicine worth ₹350"
];


export function getRandomToDo(){
  const randomNum=Math.floor(Math.random()*todoPool.length);
  return todoPool[randomNum];
}