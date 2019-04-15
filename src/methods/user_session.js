
import config from '../config.json'

<<<<<<< HEAD
var auto_logout = ''
=======
>>>>>>> 143e7fc0d6e2b98d2e8ce40376ff4db57ac6e09c
export function sessioncheck(that) {
	that.isLoggedIn = that.$session.exists()
	if(that.isLoggedIn){
		if (that.$cookies.isKey('Timeout')) { // check iscookie exists
			//  means session not yet get timeout
			//  so delete this cookie and again save new one.So timer will get reset
			that.$cookies.remove('Timeout')
<<<<<<< HEAD
			clearTimeout(auto_logout)
			
			//  set new cookie with timeout. refresh timeout
			that.$cookies.set('Timeout', 'timeout', config.SESSION_TIMEOUT + 'min')
			auto_logout = setTimeout(function(){
				destroy_session(that)
			},config.SESSION_TIMEOUT * 60000)
		} 
		else
		{  // cookie not exist means session get timeout.So destroy the session manually
			destroy_session(that)
		}
	}
	else { // session not exists. So redirect to login
	// remove previously exists cookie . if browser get closed without logout.
	if (that.$cookies.isKey('Timeout')) {
		that.$cookies.remove('Timeout')
	}
	if(that.$cookies.isKey('session_exp_msg')){
		that.$cookies.remove('session_exp_msg')
	}
	that.$cookies.set('session_exp_msg','msg','1min')
	destroy_session(that)
	}
return true
}

export function destroy_session(that) {
	if(that && that.$session)
		that.$session.destroy()
	if(that && that.$cookies){
		if (that.$cookies.isKey('Timeout'))
			that.$cookies.remove('Timeout')

		if(that.$cookies.isKey('session_exp_msg'))
			that.$cookies.remove('session_exp_msg')

		that.$cookies.set('session_exp_msg','msg','1min')
	}
	window.location.href = "/login"
=======
			//  set new cookie with timeout. refresh timeout
			that.$cookies.set('Timeout', 'timeout', config.SESSION_TIMEOUT + 'min')
		} 
		else
		{  // cookie not exist means session get timeout.So destroy the session manually
		that.$session.destroy()
		window.location.href = "/login"
	}
	}
	else { // session not exists. So redirect to login
	// remove previously exists cookie . if browser get closed without logout.
		if (that.$cookies.isKey('Timeout')) {
			that.$cookies.remove('Timeout')
	}
		if(that.$cookies.isKey('session_exp_msg')){
			that.$cookies.remove('session_exp_msg')
	}
    that.$cookies.set('session_exp_msg','msg','1min')
		window.location.href = "/login"
	}
	}

export function destroy_session(that) {
	that.$session.destroy()
	if (that.$cookies.isKey('Timeout'))
		that.$cookies.remove('Timeout')
	
	if(that.$cookies.isKey('session_exp_msg'))
		that.$cookies.remove('session_exp_msg')
	
	that.$cookies.set('session_exp_msg','msg','1min')
	this.$router.push('/login');
>>>>>>> 143e7fc0d6e2b98d2e8ce40376ff4db57ac6e09c
}
