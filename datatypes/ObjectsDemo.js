let stdDetails = {
    
    stdId : 123,
    stdName : "Arun",
    stdBranch : "Mechanical"   

}

stdDetails = {
    stdScore : 89,
    stdId : 123,
    stdName : "Arun",
    stdBranch : "Mechanical",
    stdBranch : "Civil" 
}

/*
stdBranch : "Mechanical",
stdBranch : "Civil"  - it considered this
*/

console.log(stdDetails);