const inventory = {
  items: ["Монорельса", "Фильтр"],
  add(itemName) {
    console.log(`Adding ${itemName} to inventory`);

    this.items.push(itemName);
  },
  remove(itemName) {
    console.log(`Removing ${itemName} from inventory`);

    this.items = this.items.filter(item => item !== itemName);
  }
};

const invokeInventoryAction = function(itemName, action) {
  console.log(`Invoking action on ${itemName}`);
  action.call(inventory, itemName);
};

invokeInventoryAction("Аптечка", inventory.add);
// Invoking action on Аптечка
// Adding Аптечка to inventory

console.log(inventory.items); // ['Монорельса', 'Фильтр', 'Аптечка']

invokeInventoryAction("Фильтр", inventory.remove);
// Invoking action on Фильтр
// Removing Фильтр from inventory

console.log(inventory.items); // ['Монорельса', 'Аптечка']
