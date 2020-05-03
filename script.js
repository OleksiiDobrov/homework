const obj = {};
const arr = [];
const f = function (name){
    return 'Hello' + name;
};

function callFn(functionToCall){
    return functionToCall('Alex');
}
callFn(f)