// Your code here

class Polygon {

   constructor(sides) {
      this.sides = sides
   
   }
   get countSides() {
      return this.sides.length
   }


   get perimeter() {
     let sidesTotal = this.sides.reduce(function(total, amount){
        return total + amount
     })
     return sidesTotal
   }
}

class Triangle extends Polygon {
   get isValid() {
   
    let side1 = this.sides[0]
    let side2 = this.sides[1]
    let side3 = this.sides[2]
    return ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1))
  }
}

class Square extends Polygon {
   get isValid() {
      if (this.sides[0] == this.sides[1] && this.sides[0] == this.sides[2] && this.sides[2] == this.sides[3]) {
         return true 
      }
      else {
          return false
      }
   }
   get area() {
      let area = this.sides[0] * this.sides[1]
      return area
   }
}