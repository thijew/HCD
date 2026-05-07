var player;

function onYouTubeIframeAPIReady() {
	player = new YT.Player('video-placeholder', {
		width: 600,
		height: 400,
		videoId: 'ipPC8SF6LxY',
		playerVars: {
			color: 'white',
			//start:
			//autoplay: '1'
			//playlist: 'taJ60kskkns,FG0fTKAqZ5g'
		},
		events: {
			onReady: initialize
		}
	});
}

function initialize() {
	addSpans();
	initEffectPresets();
}

function addSpans() {
	var ps = document.querySelectorAll('#closed-captions p');
	var i = 0;
	var regex = /\S+/g;

	while (i < ps.length) {
		var str = ps[i].innerText;
		var result = str.replace(regex, function (a) {
			return "<span>" + a + "</span>";
		});
		ps[i].innerHTML = result;
		ps[i].classList.add('p' + i);
		i++;
	}

	updateTimerDisplay();
}

function updateTimerDisplay() {
	var t = player.getCurrentTime();
	t = Math.floor10(t, -1);

	var i = 0;
	while (i < captions.length) {
		pTimes(i, captions[i][0], captions[i][1], t);
		i++;
	}

	i = 0;
	while (i < sounds.length) {
		sTimes(i, sounds[i], t);
		i++;
	}

	var currentSoundNum = getCurrentSoundNum(t);
	updateEQ(currentSoundNum);

	if (t < 132) {
		setTimeout(() => {
			updateTimerDisplay();
		}, 100);
	}
}

function pTimes(num, startT, endT, curT) {
	var curP = document.querySelector('.p' + num);

	if (curT > endT && !curP.classList.contains('off')) {
		curP.classList.add('off');
	}
	if (curT < endT && curP.classList.contains('off')) {
		curP.classList.remove('off');
	}
	if (curT > startT && !curP.classList.contains('on')) {
		curP.classList.add('on');
	}
	if (curT < startT && curP.classList.contains('on')) {
		curP.classList.remove('on');
	}
}

function sTimes(num, soundStarts, curT) {
	var soundClass = 'sound' + num;
	var nextSoundStarts = sounds[num + 1] !== undefined ? sounds[num + 1] : soundStarts + 2;
	var b = document.querySelector('body');

	var isActive = curT >= soundStarts && curT < nextSoundStarts;

	if (isActive && !b.classList.contains(soundClass)) {
		if (num === 9 || num === 10 || num === 11) {
			setSound(soundClass);
		} else {
			b.classList.add(soundClass);
		}
	}

	if (!isActive && b.classList.contains(soundClass)) {
		b.classList.remove(soundClass);
	}
}

function getCurrentSoundNum(curT) {
	var i = 0;

	while (i < sounds.length) {
		var soundStarts = sounds[i];
		var nextSoundStarts = sounds[i + 1] !== undefined ? sounds[i + 1] : soundStarts + 2;

		if (curT >= soundStarts && curT < nextSoundStarts) {
			return i;
		}

		i++;
	}

	return -1;
}

function updateEQ(soundNum) {
	const eq = document.getElementById('eq');
	if (!eq) return;

	const bars = eq.querySelectorAll('span');

	const patterns = {
		0: [8, 14, 10, 14, 8],
		1: [16, 24, 20, 24, 16],
		2: [24, 34, 28, 34, 24],
		3: [10, 18, 26, 18, 10],
		4: [12, 20, 28, 20, 12],
		5: [10, 16, 22, 16, 10],
		6: [18, 28, 36, 28, 18],
		7: [14, 26, 32, 26, 14],
		8: [28, 40, 36, 40, 28],
		9: [38, 14, 38, 14, 38],
		10: [40, 18, 40, 18, 40],
		11: [42, 20, 42, 20, 42],
		12: [34, 12, 34, 12, 34],
		13: [8, 8, 8, 8, 8]
	};

	if (soundNum >= 0 && patterns[soundNum]) {
		eq.classList.add('active');
		bars.forEach((bar, i) => {
			bar.style.height = patterns[soundNum][i] + 'px';
		});
	} else {
		eq.classList.remove('active');
		bars.forEach((bar) => {
			bar.style.height = '10px';
		});
	}
}

(function () {
	function decimalAdjust(type, value, exp) {
		if (typeof exp === 'undefined' || +exp === 0) {
			return Math[type](value);
		}

		value = +value;
		exp = +exp;

		if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
			return NaN;
		}

		value = value.toString().split('e');
		value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
		value = value.toString().split('e');

		return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
	}

	if (!Math.round10) {
		Math.round10 = function (value, exp) {
			return decimalAdjust('round', value, exp);
		};
	}

	if (!Math.floor10) {
		Math.floor10 = function (value, exp) {
			return decimalAdjust('floor', value, exp);
		};
	}

	if (!Math.ceil10) {
		Math.ceil10 = function (value, exp) {
			return decimalAdjust('ceil', value, exp);
		};
	}
})();

function setSound(soundClass) {
	document.body.className = document.body.className
		.replace(/\bsound\d+\b/g, '')
		.trim();

	document.body.classList.add('flash');

	setTimeout(() => {
		document.body.classList.remove('flash');
		document.body.classList.add(soundClass);
	}, 80);
}


// Slider
function initEffectPresets() {
	const buttons = document.querySelectorAll('.preset-btn');
	const body = document.body;

	if (!buttons.length) return;

	body.setAttribute('data-effects', 'medium');

	buttons.forEach((button) => {
		button.addEventListener('click', function () {
			const level = this.dataset.intensity;

			body.setAttribute('data-effects', level);

			buttons.forEach((btn) => btn.classList.remove('active'));
			this.classList.add('active');
		});
	});
}

