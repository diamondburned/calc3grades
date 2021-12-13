const totalExams = 40 + 50 + 40 + 40

function calculate(params) {
	let exams = 0;
	params.exams.forEach(grade => { exams += grade })
	exams /= totalExams

	let examP = params.target - ((params.homework / 100 * 15) + (exams * 60))
	return Math.max(examP / 25 * 100, 0)
}

function formNum(id) {
	return parseFloat(document.body.querySelector("#" + id).value)
}

function calculateHTML() {
	const params = {
		homework: formNum("homework"),
		exams: [
			formNum("exam1"),
			formNum("exam2"),
			formNum("exam3"),
			formNum("exam4"),
		],
		target: formNum("target"),
	};

	console.log(params.target)
	// Stupid JS hack: https://stackoverflow.com/a/19623253.
	let final = parseFloat(calculate(params).toFixed(2));

	document.querySelector("#output").innerHTML =
		`You must get at least <b>${final}%</b> to reach the ${params.target}% goal.`
}

// const final = calculate({
// 	target:   50, // C-
// 	homework: 97.35,
// 	exams:    [12, 33, 27, 26],
// })
// console.log(final.toFixed(2))
