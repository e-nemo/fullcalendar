
fcViews.resourceWeek = ResourceWeekView;

function ResourceWeekView(element, calendar) {
	var t = this;
	
	
	// exports
	t.render = render;
	
	
	// imports
	ResourceView.call(t, element, calendar, 'resourceWeek');
	var opt = t.opt;
	var renderBasic = t.renderBasic;
	var formatDates = calendar.formatDates;
	var getResources = t.getResources;
	
	
	function render(date, delta) {
		if (delta) {
			var start = addDays(date, delta * opt('paginateResourceWeek'));
			var end = addDays(cloneDate(start), 7);
		}
		else {
			var start = addDays(cloneDate(date), -((date.getDay() - opt('firstDay') + 7) % 7));
			var end = addDays(cloneDate(start), 7);
		}

		var visStart = cloneDate(start);
		var visEnd = cloneDate(end);
		var weekends = opt('weekends');
		if (!weekends) {
			skipWeekend(visStart);
			skipWeekend(visEnd, -1, true);
		}
		t.title = formatDates(
			visStart,
			addDays(cloneDate(visEnd), -1),
			opt('titleFormat')
		);
		t.start = start;
		t.end = end;
		t.visStart = visStart;
		t.visEnd = visEnd;
		renderBasic(getResources.length, getResources.length, weekends ? 7 : 5, false);
	}
	
	
}
