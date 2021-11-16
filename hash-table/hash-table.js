class HashTable {
    constructor(size){
      this.data = new Array(size);
    }
  
    _hash(key) {
      let hash = 0;
      for (let i =0; i < key.length; i++){
          hash = (hash + key.charCodeAt(i) * i) % this.data.length
      }
      return hash;
    }
    set(key, value) {
        const hashKey = this._hash(key);
        this.data[hashKey] = [key, value]
        return value;
    }
    get(key) {
        const hashKey = this._hash(key);

        const length = this.data.length;

        for (let i = 0; i < length; i++) {
            if (this.data[hashKey]) {
                return this.data[hashKey][1]
            }
        }
    }
  }
  
  const myHashTable = new HashTable(50);
  myHashTable.set('grapes', 10000)
  myHashTable.get('grapes')
  myHashTable.set('apples', 9)
  myHashTable.get('apples')

  console.log(myHashTable.get('grapes'));
  