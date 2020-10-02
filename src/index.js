
// You should implement your task here.

module.exports = function towelSort(matrix) {
    newArray = [];
    
    if (Array.isArray(matrix)) {matrix.forEach((element1, index) => {
        if (Array.isArray(element1)) { 
            if (index % 2 === 1) element1 = element1.reverse();
            element1.forEach(element2 => {
                newArray.push(element2);
            }); 
        }
    }); }  
    return newArray;
}
