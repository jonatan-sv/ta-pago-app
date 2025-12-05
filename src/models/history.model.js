export default class History {
  constructor() {
    this.list = [];
  }
  addEntry(tipo, data, label, tag) {
    const entry = { tipo, data, label, tag };
    this.list.push(entry);
  }
  addEntries(entries) {
    this.list = this.list.concat(entries);
  }
  removeEntry(index) {
    if (index < 0 || index > this.list.length) return;
    this.list.splice(index, 1);
  }
}
