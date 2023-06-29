export default class ClassRoom {
    constructor(_maxStudentsSize) {
        {this.maxStudentsSize > 0 ? this._maxStudentsSize = _maxStudentsSize : this._maxStudentsSize = 0;}
        this.maxStudentsSize = _maxStudentsSize;
    }   
}
console.log(ClassRoom.name);