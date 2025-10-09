	const EARTH_RAD=6378.137;
	
	function toRadian(degrees){
		return degrees*Math.PI/180;
	}
	
	function getDistance(location,anotherLocation){
	console.log(anotherLocation);
		let y1=this.toRadian(location.latitude);
		let y2=this.toRadian(anotherLocation.latitude);
		let x1=this.toRadian(location.longitude);
		let x2=this.toRadian(anotherLocation.longitude);
//		console.log(Math.sin(y1));
//		console.log(Math.sin(y2));
//		console.log(Math.cos(y1));
//		console.log(Math.cos(y2));
		console.log(Math.acos(Math.sin(y1)*Math.sin(y2)+Math.cos(y1)*Math.cos(y2)*Math.cos(x2-x1)))
		return EARTH_RAD * Math.acos(Math.sin(y1)*Math.sin(y2)+Math.cos(y1)*Math.cos(y2)*Math.cos(x2-x1));
	}

