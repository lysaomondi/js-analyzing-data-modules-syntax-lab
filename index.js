


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};
function combineUsers(...args) {
  const combineObject = {};{
  combineObject.users = [];
};

for (let i = 0; i < args.length; i++) {
  const arr = args[i];
 combineObject.users = [...combineObject.users, ...arr];
}

combineObject.merge_date =new Date().toString("M/d/yyyy");
return combineObject;
};