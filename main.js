console.log('Name: Shaniece Cole'.toUpperCase());
console.log('Career: front end web developer/ student');
console.log('Description: Student learning coding to develop websites'.toUpperCase());
console.log('My Interests:');
console.log('*makeup');
console.log('*writing');
console.log('*coding');
console.log('*reading');
console.log('My Previous Experience:');

function displayPosition (companyname, jobtitle, description){
    console.log('*' + jobtitle + ' at '+ companyname + '-' + description);
}
displayPosition('Home Depot', 'Freight Associate', 'stocking and unloading trucks');

displayPosition('Marshalls', 'Stockroom Associate', 'processing clothings to be placed on the sales floor');

displayPosition('Kay Jewlers', 'Key Holder', 'carried out manager duties by processing orders, shipping out orders, setting goals, and meeting those goals');

console.log('My Skills:');


function displaySkill(skillName, isCool) {
    if(isCool===true){
        console.log('Check It:' + skillName);
    }else{
        console.log(skillname);
    }
}

displaySkill('Customer Service', false);
displaySkill('Team building', true);
displaySkill('JavaScript',false);
displaySkill('HTML', true);
displaySkill('Materialize', false);




