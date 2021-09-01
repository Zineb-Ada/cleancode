class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
    this.qualityRate = -1;
    if(this.name == 'Aged Brie' || this.name == 'Backstage passes to a TAFKAL80ETC concert'){
      this.qualityRate = +1;
    }
    else if(this.name == 'Sulfuras, Hand of Ragnaros'){
      this.qualityRate = 0;
      this.sellIn = 0;
    }
    else if(this.name == 'Conjured Mana Cake'){
      this.qualityRate *= 2;
    }
  }
  updateQuality(){
    this.quality = this.qualityRate + this.quality;
  }
  checkQuality(){
    if(this.quality < 0){
      this.quality = 0;
    }
    if(this.quality > 50){
      this.quality = 50;
    }
  }
  decreaseSellIn(){
    this.sellIn = this.sellIn-1;
    if(this.sellIn <= 0 && this.qualityRate < 0){
      this.qualityRate *= 2;
    }
    if(this.name == 'Backstage passes to a TAFKAL80ETC concert'){
      if(this.sellIn <= 10){
        this.qualityRate = 2;
      }
      if(this.sellIn <= 5){
        this.qualityRate = 3;
      }
      if(this.sellIn == 0){
        this.quality = 0;
      }
    }
  } 
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        this.items[i].decreaseSellIn();
        this.items[i].updateQuality();
        this.items[i].checkQuality();
      }  
    }

    return this.items;
  }
  
}


module.exports = {
  Item,
  Shop
}
