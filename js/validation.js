function Validation() {
    this.isEmpty = function(input, divId, mess) {
        if (input === '') {
            getEle(divId).style.display = 'block';
            getEle(divId).innerHTML = mess;
            return false;
        } else {
            getEle(divId).style.display = 'none';
            getEle(divId).innerHTML = '';
            return true;
        }
    };
    this.checkDup = function(input, ID, mess, listArr) {
        isStatus = false;
        isStatus = listArr.some(function(item) {
            return item.name === input;
        });
        if (isStatus) {
            getEle(ID).style.display = "block";
            getEle(ID).innerHTML = mess;
            return false;
        }
        getEle(ID).style.display = "none";
        getEle(ID).innerHTML = "";
        return true;
    }
}