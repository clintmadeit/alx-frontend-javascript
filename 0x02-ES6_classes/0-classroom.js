export default class ClassRoom {
    constructor(_maxStudentsSize, teacher, roomNumber) {
        this.maxStudentsSize = _maxStudentsSize;
        this.teacher = teacher;
        this.roomNumber = roomNumber;
    }   
}
console.log(ClassRoom.name);