const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
	if(members == undefined) {
		return '';
	}
	else {
		var answer = "";
		for(var i = 0; i < members.length; i++) {
			var member = members[i];
			if(typeof(member) == "string") {
				var ans = member.split('');
				for(var j = 0; j < ans.length; j++) {
					if(ans[j] != " ") {
						answer += ans[j];
						break;
					}
				}
			}
		}
		answer = answer.toUpperCase();
		return answer.split('').sort().join('');
	}
};
