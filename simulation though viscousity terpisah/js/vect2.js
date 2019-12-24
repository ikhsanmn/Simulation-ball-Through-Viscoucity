//define class vect2

class Vect2 {

	constructor() {
		if(arguments.length == 0) {
			this.x = 0.0;
			this.y = 0.0;
		} else if(arguments.length == 2) {
			this.x = arguments[0];
			this.y = arguments[1];
		} else if(arguments.length == 1) {
			if(arguments[0] instanceof Vect2)
			this.x = arguments[0].x;
			this.y = arguments[0].y;
		}
	}

	


}