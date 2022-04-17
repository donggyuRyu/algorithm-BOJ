function findClosestNumber (nums) {
    let absArr = []
    let result = []
    let minindex = 0
    for(let i =0;i<nums.length;i++){
        absArr.push(Math.abs(nums[i]))
    }
    for(let i =0;i<nums.length;i++){
        if(absArr[i] === Math.min(...absArr)){
            minindex = i
            result.push(nums[minindex])
        }
    }
    result.sort((a,b)=>b-a)
    return result[0]
};

findClosestNumber([2,1,1,-1,100000])