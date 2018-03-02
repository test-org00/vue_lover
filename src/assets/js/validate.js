class Validate {
	emailNotRequired (rule, value, callback){
    if (typeof value == 'undefined' || value == '') {
      callback();
    } else {
    	if(!/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(value)){
    		callback(new Error('Incorrect email format'));
    	}
      callback();
    }
	}
}	

export default new Validate()