$w.onReady(function () {
	$w('#buyNowCollapseButton').onClick(() => {
		toggleBox($w('#buyNowStrip'), $w('#buyNowPlusSign'), $w('#buyNowMinusSign'));
	});
	$w('#rulesCollapseButton').onClick(() => {
		toggleBox($w('#rulesStrip'), $w('#rulesPlusSign'), $w('#rulesMinusSign'));
	});
	$w('#testimonyCollapseButton').onClick(() => {
		toggleBox($w('#testimonyStrip'), $w('#testimonyPlusSign'), $w('#testimonyMinusSign'));
	});
	$w('#watchCollapseButton').onClick(() => {
		toggleBox($w('#watchStrip'), $w('#watchPlusSign'), $w('#watchMinusSign'));
	});
	$w('#aboutCollapseButton').onClick(() => {
		toggleBox($w('#aboutStrip'), $w('#aboutPlusSign'), $w('#aboutMinusSign'));
	});
});

function toggleBox(boxElement, plusSign, minusSign) {
	const isCollapsed = boxElement.collapsed; 
	if (isCollapsed) {
		plusSign.hide();
		minusSign.show();
		boxElement.expand();
	} else {
		minusSign.hide();
		plusSign.show();
		boxElement.collapse();
	}
}
