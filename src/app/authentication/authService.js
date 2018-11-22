angular.module('app').factory('authService', ['$http', '$log', '$q', '$injector', '$rootScope', function($http, $log, $q, $injector, $rootScope) {
	    var authServiceFactory = {};
	    var UAA_Endpoint = "";
	    
	    var _authentication = {
		isAuth: false,
		userName: ''
	    };
	    
	    var authorization = "";
	    
	    var API_Endpoint = 'https://api.eu-gb.bluemix.net';  
	    //var API_Endpoint = 'https://api.run.pivotal.io';

	    $http.get(API_Endpoint+'/v2/info').success(function(response) {
		    Authorization_Endpoint = response.authorization_endpoint;
		    UAA_Endpoint = response.token_endpoint;
		    window.alert(Authorization_Endpoint);
		    window.alert(UAA_Endpoint);
		});

	    var _getCode = function() {

                var data = {
                    'client_id': 'login',
		    'response_type': 'code',
		    'scope': '',
		    'redirect_uri': '',
		    'login_hint': ''
                }
		
                // http headers                                                                    
                var headers = {
		    'Accept': 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded'
                };
		
                $http.get(UAA_Endpoint+'/oauth/authorize', data, { headers: headers }).success(function(response, status) {
			authorization = response;
			window.alert(response);
			window.alert(status);
			window.alert(response);
		    }).error(function(err, status) {
			    window.alert('Authorization ' + err + ' ' + status);
			});
	    }

	    var _getCodeApiFlow = function() {
		var data = {
                    'client_id': 'login',
                    'response_type': 'code',
                    'redirect_uri': '',
                    'state': 'rXnb68'
                }

                // http headers                                                              
		var headers = {
                    'Accept': 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded'
                };

                $http.get(UAA_Endpoint+'/oauth/authorize', data, { headers: headers }).success(function(response) {
                        authorization = response;
			window.alert(Object.keys(response));
                    }).error(function(err, status) {
                            window.alert('Authorization ' + err + ' ' + status);
                        });
	    }

	    var _implicitGrant = function() {
		var data = {
                    'client_id': 'app',
                    'response_type': 'token',
                    'redirect_uri': '',
                    'scope': '',
		    'login_hint': ''
                }

                // http headers                                                               
		var headers = {
                    'Accept': 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded'
                };

                $http.get(UAA_Endpoint+'/oauth/authorize', data, { headers: headers }).success(function(response, status) {
                        authorization = response;
                        window.alert(Object.keys(response) + ' ' + status);
                    }).error(function(err, status) {
                            window.alert('Authorization ' + err + ' ' + status);
			});
	    }

	    var _implicitGrantWithPrompt = function() {
                var data = {
                }

                // http headers                                                             
		var headers = {
                    'Accept': 'application/x-www-form-urlencoded'
                };

		var params = {
		    'client_id': 'app',
                    'response_type': 'token',
                    'redirect_uri': 'http://localhost:8000',
                    'scope': 'openid',
                    'prompt': 'none'
		}
		
                $http.get(UAA_Endpoint+'/oauth/authorize', data, { headers: headers }, params).success(function(response, status) {
                        authorization = response;
                    }).error(function(err, status) {
                            window.alert('Authorization ' + err + ' ' + status);
			});
            }

	    var _connectFlow = function() {
		var data = {
		}

		// http headers
		var headers = {
		    'Accept': 'application/json'
                };

		window.alert(Object.keys($http));

		$http.get(UAA_Endpoint+'/.well-known/openid-configuration', data, { headers: headers }).success(function(data, status, headers, config, statusText) {
                        window.alert(Object.keys($http.defaults.headers));
			window.alert(statusText);
			authorization = data;
                    }).error(function(data, status, headers, config) {
                            window.alert('Authorization ' + data + ' ' + status + ' ' + headers + ' ' + config);
                        });
	    }

	    var _login = function(loginData) {
		
		var deferred = $q.defer();
		
		// data to post                                                                  
		var data = {
		    'grant_type': 'password',
		    'username': loginData.username,
		    'password': loginData.password
		};
		
		// http headers                                                            
		var headers = {
		    'Accept': 'application/json',
		    'Content-Type': 'application/x-www-form-urlencoded',
		    'Authorization': 'Basic Y2Y6'
		};
		
		data = $.param(data);
		window.alert(data);
		window.alert(headers);
		
		$http.post(Authorization_Endpoint+'/oauth/token', data, { headers : headers }).success(function(response, status) {
			window.alert(status);
			window.alert(response.access_token);
			window.alert(response.refresh_token);
			window.alert(response.expires_in);
			window.alert(response.scope);
			window.alert(response.token_type);
			window.alert(response.id_token);
			window.alert(response.jti);
			if (response.access_token !== null) {
			    // save access token and username in session storage              
			    localStorage.setItem('accessToken', response.access_token);
			    localStorage.setItem('refreshToken', response.refresh_token);
			    localStorage.setItem('expiresIn', response.expires_in);
			    localStorage.setItem('userName', loginData.username);
			    localStorage.setItem('lastTime', Date.now());
			    
			    // set data of authentication object                                         
			    _authentication.isAuth = true;
			    _authentication.userName = loginData.username;
			    
			    deferred.resolve(response);
			} else {
			    // log in failed                                                
			    deferred.reject(response);
			}
		    }).error(function(err, status) {
			    window.alert(err + ' ' + status);
			    $log.error('Definicion del error');
			    $log.error(err);                                                   
			    
			    deferred.reject(err);
			});
		
		return deferred.promise;
	    };

	    var _client_credentials = function () {
		var deferred = $q.defer();
		var data = {
		    'grant_type': 'client_credentials',
		    'client_id': '0bac87cc-233a-4f91-b82f-75eaf3898268',
		    'token_format': 'opaque'
		}
		var headers = {
		    'Content-Type': 'application/x-www-form-urlencoded',
		    'Accept': 'application/json'
		};
		data = $.param(data);
		$http.post(UAA_Endpoint+'/oauth/token', data, { headers: headers }).success(function(response, status) {
			window.alert(status);
			window.alert(response);
			if (response.access_token != null) {
			    // save access token in session storage
			    localStorage.setItem('accessToken', response.access_token);
			    localStorage.setItem('refreshToken', response.refresh_token);
			    // set data of authentication object
			    _authentication.isAuth = true;
			    deferred.resolve(response);
			} else {
			    // log in failed
			    deferred.reject(response);
			}
		    }).error(function(err, status) {
			    window.alert(err + ' ' + status);
                            $log.error('Definicion del error');
                            $log.error(err);

			    deferred.reject(err);
			});
		return deferred.promise;
	    }
	    var _authorizationCode = function () {
		var deferred = $q.defer();
		var data = {
		    'grant_type': 'authorization_code',
		    'client_id': 'admin',
		    'client_secret': 'adminsecret'
		}
		var headers = {
		    'Content-Type': 'application/x-www-form-urlencoded',
		    'Authorization': 'Basic Y2Y6'
		};
		data = $.param(data);
		$http.post(UAA_Endpoint+'/oauth/token', data, { headers: headers }).success(function(response, status) {
			window.alert(status);
			window.alert(Object.keys(response));
			if (response.access_token != null) {
			    // save access  token in session storage
			    localStorage.setItem('accessToken', response.access_token);
			    localStorage.setItem('refreshToken', response.refresh_token);
			    // set data of authentication object
			    _authentication.isAuth = true;
			    deferred.resolve(response);
			} else {
			    // log in failed                                                
			    deferred.reject(response);
			}
                    }).error(function(err, status) {
                            window.alert(err + ' ' + status);
                            $log.error('Definicion del error');
                            $log.error(err);
			    
                            deferred.reject(err);
                        });
		return deferred.promise;
	    };
	    var _userTokenGrant = function () {
		var deferred = $q.defer();
		var data = {
		    'grant_type': 'user_token',
		    'client_id': 'app',
		    'scope': 'openid',
		    'token_format': 'jwt'
		}
		var headers = {
		    'Accept': 'application/json',
		    'Content-Type': 'application/x-www-form-urlencoded',
		    'Authorization': 'Basic Y2Y6'
		}
		data = $.param(data);
		$http.post(UAA_Endpoint+'/oauth/token', data, { headers: headers }).success(function(response, status) {
			window.alert(status);
			window.alert(' - ' + Object.keys(response));
			if (response.access_token != null) {
			    // save access token in session storage
			    localStorage.setItem('accessToken', response.access_token);
			    localStorage.setItem('refreshToken', response.refresh_token);
			    // set data of authentication cobjet
			    _authentication.isAuth = true;
			    deferred.resolve(response);
			}  else {
			    // log in failed                                             
			    deferred.reject(response);
			}
                    }).error(function(err, status) {
                            window.alert(err + ' ' + status);
                            $log.error('Definicion del error');
                            $log.error(err);
			    
                            deferred.reject(err);
			});
		return deferred.promise;
	    };
	    
	    var _saml2BearerGrant = function () {
		var deferred = $q.defer();
                var data = {
                    'grant_type': 'urn:ietf:-params:oauth:grant-type:saml2-bearer',
                    'assertion': ''
                }
                var headers = {
                    'Content-Type': 'application/x-www-form-urlencoded',
		    'Accept': 'application/json',
                    'Authorization': 'Basic Y2Y6'
                };
                data = $.param(data);
		$http.post(UAA_Endpoint+'/oauth/token/alias/okbacp.cloudfoundry-saml-login', data, { headers: headers }).success(function(response, headers) {                                                                     
			window.alert(response);
			window.alert(headers);
			if (response.access_token != null) {                               
			    // save access token in session storage                         
			    localStorage.setItem('accessToken', response.access_token);       
			    localStorage.setItem('refreshToken', response.refresh_token);         
			    // set data of authentication cobjet                         
			    _authentication.isAuth = true;                                   
			    deferred.resolve(response);                                     
			} else {                                                                 
			    // log in failed                                              
			    deferred.reject(response);                                     
			}                                                                  
		    }).error(function(err, status) {                                       
			    window.alert(err + ' ' + status);                                
			    $log.error('Definicion del error');                            
			    $log.error(err);                                               
			    deferred.reject(err);                                         
			});                                                                 
		return deferred.promise;
	    }

	    var _jwtBearerTokenGrant = function() {
		var deferred = $q.defer();
                var data = {
                    'grant_type': 'urn:ietf:-params:oauth:grant-type:jwt-bearer',
                    'assertion': '',
		    'client_id': '',
		    'client_secret': ''
		}
		var headers = {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Accept': 'application/json',
                    'Authorization': 'Basic Y2Y6'
                };
		data = $.param(data);
                $http.post(UAA_Endpoint+'/oauth/token', data, { headers: headers }).success(function(response) {
			if (response.access_token != null) {
			// save access token in session storage                               
			localStorage.setItem('accessToken', response.access_token);
			localStorage.setItem('refreshToken', response.refresh_token);

			// set data of authentication cobjet                                  
			_authentication.isAuth = true;
			deferred.resolve(response);
			} else {
			    // log in failed                                              
			    deferred.reject(response);
			}
		    }).error(function(err, status) {
			    window.alert(err + ' ' + status);
			    $log.error('Definicion del error');
			    $log.error(err);
			    deferred.reject(err);
			});
                return deferred.promise;
	    }

	    var _openIdConnect = function() {
		var deferred = $q.defer();
                var data = {
                    'grant_type': 'authorization_code',
                    'code': ''
                }
		var headers = {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Accept': 'application/json',
                    'Authorization': 'Basic Y2Y6'
                };
		data = $.param(data);
                $http.post(UAA_Endpoint+'/oauth/token', data, { headers: headers }).success(function(response) {
			if (response.access_token != null) {
			    // save access token in session storage                        
			    localStorage.setItem('accessToken', response.access_token);
			    localStorage.setItem('refreshToken', response.refresh_token);
		       
			    // set data of authentication cobjet                           
			    _authentication.isAuth = true;
			    deferred.resolve(response);
			} else {
			    // log in failed                                                
			    deferred.reject(response);
			}
		    }).error(function(err, status) {
			    window.alert(err + ' ' + status);
			    $log.error('Definicion del error');
			    $log.error(err);
			    deferred.reject(err);
			});
                return deferred.promise;
	    }
	    
	    var _revokeTokenUser = function(userId) {
		var deferred = $q.defer();
                var data = {
                }
		// http headers                                             
                var headers = {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic Y2Y6',
                    'X-Identity-Zone-Id': '',
                    'X-Identity-Zone-Subdomain': ''
		};
		$http.post(UAA_Endpoint+'/oauth/token/revoke/user/'+userId, data, { headers: headers }).success(function(response) {
			if (response.access_token != null) {
			    // save access token in session storage                      
			    localStorage.setItem('accessToken', response.access_token);
			    localStorage.setItem('refreshToken', response.refresh_token); 
			    
			    // set data of authentication cobjet                        
			    _authentication.isAuth = true;
			    deferred.resolve(response);
			} else {
			    // log in failed                                               
			    deferred.reject(response);
			}
		    }).error(function(err, status) {
			    window.alert(err + ' ' + status);
			    $log.error('Definicion del error');
			    $log.error(err);
			    deferred.reject(err);
			});
                return deferred.promise;
	    }

	    var _revokeTokenClient = function(clientId) {
		var deferred = $q.defer();
                var data = {
                }
                // http headers                                                                   
                var headers = {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic Y2Y6',
                    'X-Identity-Zone-Id': '',
                    'X-Identity-Zone-Subdomain': ''
                };
                $http.post(UAA_Endpoint+'/oauth/token/revoke/user/'+clientId, data, { headers: headers }).success(function(response) {
			if (response.access_token != null) {
			    // save access token in session storage                     
			    localStorage.setItem('accessToken', response.access_token);
			    localStorage.setItem('refreshToken', response.refresh_token);
			    
			    // set data of authentication cobjet                         
			    _authentication.isAuth = true;
			    deferred.resolve(response);
			} else {
			    // log in failed                                            
			    deferred.reject(response);
			}
		    }).error(function(err, status) {
			    window.alert(err + ' ' + status);
			    $log.error('Definicion del error');
			    $log.error(err);
			    deferred.reject(err);
			});
                return deferred.promise;
		}

	    var _revokeTokenUserClient = function(userId, clientId) {
		var deferred = $q.defer();
                var data = {
                }
                // http headers                                                            

		var headers = {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic Y2Y6',
                    'X-Identity-Zone-Id': '',
                    'X-Identity-Zone-Subdomain': ''
                };
                $http.post(UAA_Endpoint+'/oauth/token/revoke/user/'+userId+'/client/'+clientId, data, { headers: headers }).success(function(response) {
			if (response.access_token != null) {
			    // save access token in session storage                               
			    localStorage.setItem('accessToken', response.access_token);
			    localStorage.setItem('refreshToken', response.refresh_token);
			    
			    // set data of authentication cobjet                                  
			    _authentication.isAuth = true;
			    deferred.resolve(response);
			} else {
			    // log in failed                                                      
			    deferred.reject(response);
			}
		    }).error(function(err, status) {
			    window.alert(err + ' ' + status);
			    $log.error('Definicion del error');
			    $log.error(err);
			    deferred.reject(err);
			});
                return deferred.promise;
	    }

	    var _revokeSingleToken = function(tokenId) {
		var deferred = $q.defer();
                var data = {
                }
                // http headers                                                                 
                var headers = {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic Y2Y6',
                    'X-Identity-Zone-Id': '',
                    'X-Identity-Zone-Subdomain': ''
                };
		$http.post(UAA_Endpoint+'/oauth/token/revoke/'+tokenId, data, { headers : headers }).success(function(response) {
			if (response.access_token != null) {
			    // save access token in session storage				    
			    localStorage.setItem('accessToken', response.access_token);
			    localStorage.setItem('refreshToken', response.refresh_token);
		     
			    // set data of authentication cobjet	
                            
			    _authentication.isAuth = true;
			    deferred.resolve(response);
			} else {
			    // log in failed 
			    deferred.reject(response);
			}
		    }).error(function(err, status) {
			    window.alert(err + ' ' + status);
			    $log.error('Definicion del error');
			    $log.error(err);
			    deferred.reject(err);
			});
                return deferred.promise;
	    }

	    var _listTokenUser = function(userId) {
		var deferred = $q.defer();
                var data = {
                }
                // http headers                                                                   
                var headers = {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic Y2Y6',
                    'X-Identity-Zone-Id': '',
                    'X-Identity-Zone-Subdomain': ''
                };
                $http.post(UAA_Endpoint+'/oauth/token/list/user/'+userId, data, { headers : headers }).success(function(response) {
			if (response.access_token != null) {
			    // save access token in session storage	\
			    localStorage.setItem('accessToken', response.access_token);
			    localStorage.setItem('refreshToken', response.refresh_token);
			    
			    // set data of authentication cobjet                           
			    _authentication.isAuth = true;
			    deferred.resolve(response);
			} else {
			    // log in failed                                               
			    deferred.reject(response);
			}
		    }).error(function(err, status) {
			    window.alert(err + ' ' + status);
			    $log.error('Definicion del error');
			    $log.error(err);
			    deferred.reject(err);
			});
                return deferred.promise;
	    }

	    var _listTokenClient = function(clientId) {
		var deferred = $q.defer();
                var data = {
                }
                // http headers			\
		
                var headers = {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Basic Y2Y6',
                    'X-Identity-Zone-Id': '',
                    'X-Identity-Zone-Subdomain': ''
                };
                $http.post(UAA_Endpoint+'/oauth/token/list/client/'+clientId, data, { headers : headers }).success(function(response) {
			if (response.access_token != null) {
			    // save access token in session storage     \                  
			    localStorage.setItem('accessToken', response.access_token);
			    localStorage.setItem('refreshToken', response.refresh_token);
			    
			    // set data of authentication cobjet                                  
			    _authentication.isAuth = true;
			    deferred.resolve(response);
			} else {
			    // log in failed                                          
			    deferred.reject(response);
			}
		    }).error(function(err, status) {
			    window.alert(err + ' ' + status);
			    $log.error('Definicion del error');
			    $log.error(err);
			    deferred.reject(err);
			});
                return deferred.promise;
	    }
	    
	    var _checkToken = function(/*token*/) {
		var data = {
		    'token': '',//token,
		    'scopes': ''
		}

                // http headers                                                           
		var headers = {
                    'Accept': 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded'
                };

                $http.post(Authorization_Endpoint+'/check_token', data, { headers: headers }).success(function(response) {
			authorization = response;
			window.alert(response.grant_type);
		    }).error(function(err, status) {
			    window.alert('Authorization ' + err + ' ' + status);
			});
	    }

	    var _introspectToken = function(token) {
		var data = {
		    'token': ''//token,                                                   
                }

                // http headers                                                           
		var headers = {
                    'Accept': 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded'
                };

                $http.post(Authorization_Endpoint+'/introspect', data, { headers: headers }).success(function(response) {
                        authorization = response;
                        window.alert(response);
                    }).error(function(err, status) {
                            window.alert('Authorization ' + err + ' ' + status);
                        });
	    }
	    
	    var _tokenKey = function() {
		var data = { 
		}
		
		// http headers                                             
                var headers = {
                    'Accept': 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded'
                };
		
		$http.get(UAA_Endpoint+'/token_key', data, { headers: headers }).success(function(response) {
                        authorization = response;
                        window.alert();
                    }).error(function(err, status) {
                            window.alert('Authorization ' + err + ' ' + status);
                        });
	    }

	    var _logoutDo = function() {
		var data = {
                }

		// http headers                                                                   
                var headers = {
                    'Accept': 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded'
                };

		$http.get(Authorization_Endpoint+'/logout.do', data, { headers: headers }).success(function(response) {
                        authorization = response;
                        window.alert(response.value);
                    }).error(function(err, status) {
                            window.alert('Authorization ' + err + ' ' + status);
                        });
	    }

	    var _serverInformation = function() {
		var data = {
                }
		
                // http headers                                                            
		var headers = {
                    'Accept': 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded'
                };

		$http.get(Authorization_Endpoint+'/info', data, { headers: headers }).success(function(response) {
			authorization = response;
			window.alert(response.zone_name);
		    }).error(function(err, status) {
			    window.alert('Server ' + err + ' ' + status);
			});
	    }

	    var _passcode = function() {
		var data = {
                }

		// http headers                                                            
		var headers = {
                    'Accept': 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded'
                };
		
		$http.get(Authorization_Endpoint+'/passcode', data, { headers: headers }).success(function(response) {
			authorization = response;
			window.alert(response.value);
		    }).error(function(err, status) {
			    window.alert('Authorization ' + err + ' ' + status);
			});
	    }
	    
	    var _autologin = function() {
		var data = {
		    'username': 'apspoliveira@gmail.com',
                    'password': 'Love1983$'
                }
		
		// http headers                                           
                var headers = {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
		    'Authorization': 'Basic Y2Y6'
                };

		//data = $.param(data);
	     
		$http.post(UAA_Endpoint+'/autologin', data, { headers: headers }).success(function(response) {
			authorization = response;
			window.alert(response.code);
		    }).error(function(err, status) {
			    window.alert('Authorization ' + err + ' ' + status);
			});
	    }

	    var _changePasswordFlow = function() {
		var accessToken = localStorage.getItem('accessToken');

		window.alert(accessToken);

		var data = {
		    'client_id': '',
		    'redirect_uri': ''
                }

		// http headers                                                           
		var headers = {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'bearer ' + accessToken,
		    'X-Identity-Zone-Id': '',
		    'X-Identity-Zone-Subdomain': ''
                };

		$http.post(UAA_Endpoint+'/password_resets', data, { headers: headers }).success(function(response) {
			authorization = response;
			window.alert(response.code);
		    }).error(function(err, status) {
			    window.alert('Authorization ' + err + ' ' + status);
			});
	    }

	    var _refresh = function() {
		var refreshToken = localStorage.getItem('refreshToken');
		var accessToken = localStorage.getItem('accessToken');
		
		var deferred = $q.defer();
                
		// data to post                                                             
		var data = {                                                              
		    'grant_type': 'refresh_token',	
		    'refresh_token': refreshToken
		};
		
		// http headers                                                              
		var headers = {
		    'Content-Type': 'application/x-www-form-urlencoded',
		    'Authorization': 'Basic Y2Y6'
		};
		data = $.param(data);
		
		$http.post(UAA_Endpoint+'/oauth/token', data, { headers: headers }).success(function(response) {
			if (response.access_token !== null) {
			    // save access token and username in session storage                  
			    localStorage.setItem('accessToken', response.access_token);
			    localStorage.setItem('refreshToken', response.refresh_token);
			    
			    // set data of authentication object                                                             
			    _authentication.isAuth = true;
			    
			    deferred.resolve(response);
			} else {
			    // log in failed                                                                                 
			    deferred.reject(response);
			}
		    }).error(function(err, status) {
			    _logOut();
			    deferred.reject(err);
			});                                                                                     
		return deferred.promise;
	    };
	    
	    var _getClients = function() {
		var accessToken = localStorage.getItem('accessToken');
		
		var deferred = $q.defer();
		
		var data = {
		}
		
		//  http headers 
		var headers = {
		    'Accept': 'application/json',
		    'Authorization':  'bearer ' + accessToken 
		};
		
		data = $.param(data);
		
		$http.get(UAA_Endpoint+'/oauth/clients', data, { headers: headers }).success(function(response) {
			window.alert(response);
		    }).error(function(err, status) {
			    window.alert('Clients' + err + ' ' + status);
			});
	    }
	    
	    var _getUsers = function () {
		var accessToken = localStorage.getItem('accessToken');
		
		var deferred = $q.defer();

		var data = {
		}

		// http headers                                                            
		var headers = {
                    'Accept': 'application/json',
                    'Authorization': 'bearer ' + accessToken
                };

		data = $.param(data);

		$http.get(UAA_Endpoint+'/Users', data, { headers: headers }).success(function(response)  {
			window.alert(response);
                    }).error(function(err, status) {
                            window.alert('Users' + err + ' ' + status);
                        });
	    }

	    var _createIdentityZone = function() {
		var accessToken = localStorage.getItem('accessToken');

                var deferred = $q.defer();

                var data = {
		    'subdomain': '',
		    'name': '',
		    
                }

                // http headers                                                                   
                var headers = {
                    'Accept': 'application/json',
                    'Authorization': 'bearer ' + accessToken
                };

                data = $.param(data);

                $http.post(UAA_Endpoint+'/identity-zones', data, { headers: headers }).success(function(response)  {
			window.alert(response);
		    }).error(function(err, status) {
			    window.alert('Zones' + err + ' ' + status);
			});
	    }

	    var _getIdentityZone = function(zoneId) {
		var accessToken = localStorage.getItem('accessToken');

                var deferred = $q.defer();

                var data = {
                }

                // http headers                                                        
		var headers = {
                    'Accept': 'application/json',
                    'Authorization': 'bearer ' + accessToken
                };

                data = $.param(data);

                $http.get(UAA_Endpoint+'/identity-zones/'+zoneId, data, { headers: headers }).success(function(response)  {
			window.alert(response);
		    }).error(function(err, status) {
			    window.alert('Zones' + err + ' ' + status);
			});
	    }

	    var _getAllIdentityZone = function() {
		var accessToken = localStorage.getItem('accessToken');

                var deferred = $q.defer();

                var data = {
                }

                // http headers                                                            
		var headers = {
                    'Accept': 'application/json',
                    'Authorization': 'bearer ' + accessToken
                };

                data = $.param(data);

                $http.get(UAA_Endpoint+'/identity-zones', data, { headers: headers }).success(function(response)  {
			window.alert(response);
		    }).error(function(err, status) {
			    window.alert('Zones' + err + ' ' + status);
			});
	    }

	    var _updateIdentityZone = function(zoneId) {
		var accessToken = localStorage.getItem('accessToken');

                var deferred = $q.defer();

                var data = {
		    'subdomain': '',
		    'name': ''
                }

		// http headers                                                                   
                var headers = {
                    'Accept': 'application/json',
                    'Authorization': 'bearer ' + accessToken
                };

                data = $.param(data);

                $http.put(UAA_Endpoint+'/identity-zones/'+zoneId, data, { headers: headers }).success(function(response)  {
			window.alert(response);
		    }).error(function(err, status) {
			    window.alert('Zones' + err + ' ' + status);
			});
	    }

	    var _deleteIdentityZone = function(zoneId) {
		var accessToken = localStorage.getItem('accessToken');

                var deferred = $q.defer();

                var data = {
                }

                // http headers                                                          
		var headers = {
                    'Accept': 'application/json',
                    'Authorization': 'bearer ' + accessToken
                };

                data = $.param(data);

                $http.delete(UAA_Endpoint+'/identity-zones/'+zoneId, data, { headers: headers }).success(function(response)  {
			window.alert(response);
		    }).error(function(err, status) {
			    window.alert('Zones' + err + ' ' + status);
			});
            }
	    
	    var _createSAMLIdentityProvider = function() {
		var accessToken = localStorage.getItem('accessToken');
		
                var deferred = $q.defer();
		
                var data = {
		    'name': '',
		    'type': 'saml',
		    'originKey': ''
		}
		
		// http headers                                                            
		var headers = {
                    'Accept': 'application/json',
                    'Authorization': 'bearer ' + accessToken,
		    'X-Identity-Zone-Id': '',
                    'X-Identity-Zone-Subdomain': ''
                };

		data = $.param(data);
		
                $http.post(UAA_Endpoint+'/identity-providers', data, { headers: headers }).success(function(response)  {
			window.alert(response);
		    }).error(function(err, status) {
			    window.alert('Identity' + err + ' ' + status);
			});
	    }

	    var _createLDAPIdentityProvider = function() {
		var accessToken = localStorage.getItem('accessToken');

                var deferred = $q.defer();

                var data = {
                    'name': '',
                    'type': 'ldap',
                    'originKey': ''
                }

                // http headers                                                                   
                var headers = {
                    'Accept': 'application/json',
                    'Authorization': 'bearer ' + accessToken,
                    'X-Identity-Zone-Id': '',
                    'X-Identity-Zone-Subdomain': ''
                };

                var params = {
                }

		data = $.param(data);

                $http.post(UAA_Endpoint+'/identity-providers', data, { headers: headers }, params).success(function(response)  {
			window.alert(response);
		    }).error(function(err, status) {
			    window.alert('Identity' + err + ' ' + status);
			});
	    }

	    var _createOAuthIdentityProvider = function() {
		var accessToken = localStorage.getItem('accessToken');

                var deferred = $q.defer();

                var data = {
                    'name': '',
                    'type': 'oauth2.0',
                    'originKey': ''
                }

                // http headers                                                  
		var headers = {
                    'Accept': 'application/json',
                    'Authorization': 'bearer ' + accessToken,
                    'X-Identity-Zone-Id': '',
                    'X-Identity-Zone-Subdomain': ''
                };

                var params = {
                }
		
		data = $.param(data);

		$http.post(UAA_Endpoint+'/identity-providers', data, { headers: headers }, params).success(function(response)  {
			window.alert(response);
		    }).error(function(err, status) {
			    window.alert('Identity' + err + ' ' + status);
			});
	    }

	    var _getAllIdentityProvider = function() {
		var accessToken = localStorage.getItem('accessToken');

                var deferred = $q.defer();

                var data = {
                }

                // http headers                                                          
		var headers = {
                    'Accept': 'application/json',
                    'Authorization': 'bearer ' + accessToken,
                    'X-Identity-Zone-Id': '',
                    'X-Identity-Zone-Subdomain': ''
                };

                var params = {
                }

                data = $.param(data);

                $http.get(UAA_Endpoint+'/identity-providers', data, { headers: headers }, params).success(function(response)  {
			window.alert(response);
		    }).error(function(err, status) {
			    window.alert('Identity' + err + ' ' + status);
			});
	    }

	    var _getIdentityProvider = function(identityId) {
		var accessToken = localStorage.getItem('accessToken');

                var deferred = $q.defer();

                var data = {
                }

		// http headers                                                                   
                var headers = {
                    'Accept': 'application/json',
                    'Authorization': 'bearer ' + accessToken,
                    'X-Identity-Zone-Id': '',
                    'X-Identity-Zone-Subdomain': ''
                };

                var params = {
                }

		data = $.param(data);

                $http.get(UAA_Endpoint+'/identity-providers/'+identityId, data, { headers: headers }, params).success(function(response)  {
			window.alert(response);
		    }).error(function(err, status) {
			    window.alert('Identity' + err + ' ' + status);
			});
	    }

	    var _updateIdentityProvider = function(identityId) {
		var accessToken = localStorage.getItem('accessToken');

                var deferred = $q.defer();

                var data = {
		    'name': '',
                    'type': '',
                    'originKey': '',
		    'version': ''
		}

                // http headers                                                          
		var headers = {
                    'Accept': 'application/json',
                    'Authorization': 'bearer ' + accessToken,
                    'X-Identity-Zone-Id': '',
                    'X-Identity-Zone-Subdomain': ''
                };

                var params = {
                }

		data = $.param(data);

                $http.post(UAA_Endpoint+'/identity-providers/'+identityId, data, { headers: headers }, params).success(function(response)  {
			window.alert(response);
		    }).error(function(err, status) {
			    window.alert('Identity' + err + ' ' + status);
			});
	    }

	    var _deleteIdentityProvider = function(identityId) {
		var accessToken = localStorage.getItem('accessToken');

                var deferred = $q.defer();

                var data = {
                }

                // http headers                                                            
		var headers = {
                    'Accept': 'application/json',
                    'Authorization': 'bearer ' + accessToken,
                    'X-Identity-Zone-Id': '',
                    'X-Identity-Zone-Subdomain': ''
                };

                var params = {
                }

                data = $.param(data);

                $http.delete(UAA_Endpoint+'/identity-providers/'+identityId, data, { headers: headers }, params).success(function(response)  {
			window.alert(response);
		    }).error(function(err, status) {
			    window.alert('Identity' + err + ' ' + status);
			});
	    }

	    var _forcePasswordChange = function(identityId) {
		var accessToken = localStorage.getItem('accessToken');

		window.alert(accessToken);

                var deferred = $q.defer();

                var data = {
		    'requirePasswordChange': true
		}

                // http headers                                                             
		var headers = {
                    'Accept': 'application/json',
                    'Authorization': 'bearer ' + accessToken,
                    'X-Identity-Zone-Id': '',
                    'X-Identity-Zone-Subdomain': ''
                };

                var params = {
                }

                //data = $.param(data);

                $http.patch(UAA_Endpoint+'/identity-providers/'+identityId+'/status', data, { headers: headers }, params).success(function(response)  {
			window.alert(response);
		    }).error(function(err, status) {
			    window.alert('Identity' + err + ' ' + status);
			});
	    }

	    var _initiateIDPLoginFlow = function(entityId) {
		var accessToken = localStorage.getItem('accessToken');

		var deferred = $q.defer();

                var data = {
		   
                }

                // http headers                                                            
		var headers = {
                    'Accept': 'application/json',
                    'Authorization': 'bearer ' + accessToken
                };

		var params = {
		    'sp': entityId     
		}

                data = $.param(data);

                $http.get(UAA_Endpoint+'/saml/idp/initiate', data, { headers: headers }, params).success(function(response)  {
			window.alert(response);
		    }).error(function(err, status) {
			    window.alert('Service' + err + ' ' + status);
			});
	    }

	    var _listServices = function() {
		var accessToken = localStorage.getItem('accessToken');

		var deferred = $q.defer();

                var data = {
                }

                // http headers                                                                   
                var headers = {
                    'Accept': 'application/json',
                    'Authorization': 'bearer ' + accessToken,
		    'X-Identity-Zone-Id': '',
		    'X-Identity-Zone-Subdomain': ''
		};

                data = $.param(data);

                $http.get(UAA_Endpoint+'/saml/service-providers', data, { headers: headers }).success(function(response)  {
			window.alert(response);
		    }).error(function(err, status) {
			    window.alert('Service' + err + ' ' + status);
			});
	    }

	    var _getService = function(serviceId) {
		var accessToken = localStorage.getItem('accessToken');

		var deferred = $q.defer();

                var data = {
                }

                // http headers                                                            
		var headers = {
                    'Accept': 'application/json',
                    'Authorization': 'bearer ' + accessToken,
                    'X-Identity-Zone-Id': '',
                    'X-Identity-Zone-Subdomain': ''
                };

                data = $.param(data);

                $http.get(UAA_Endpoint+'/saml/service-providers/'+serviceId, data, { headers: headers }).success(function(response)  {
			window.alert(response);
		    }).error(function(err, status) {
			    window.alert('Service' + err + ' ' + status);
			});
	    }

	    var _createService = function() {
		var accessToken = localStorage.getItem('accessToken');

		var deferred = $q.defer();

                var data = {
                }

                // http headers                                                             
		var headers = {
                    'Accept': 'application/json',
                    'Authorization': 'bearer ' + accessToken,
                    'X-Identity-Zone-Id': '',
                    'X-Identity-Zone-Subdomain': ''
                };

		data = $.param(data);

		$http.post(UAA_Endpoint+'/saml/service-providers', data, { headers : headers }).success(function(response)  {
			window.alert(response);
		    }).error(function(err, status) {
			    window.alert('Service' + err + ' ' + status);
			});
	    }

	    var _updateService = function(serviceId) {
		var accessToken = localStorage.getItem('accessToken');

		var deferred = $q.defer();

                var data = {
		    'name': '',
		    'config': ''
                }

                // http headers                                                                   
                var headers = {
                    'Accept': 'application/json',
                    'Authorization': 'bearer ' + accessToken,
                    'X-Identity-Zone-Id': '',
                    'X-Identity-Zone-Subdomain': ''
                };

                data = $.param(data);

		$http.put(UAA_Endpoint+'/saml/service-providers/'+serviceId, data, { headers : headers }).success(function(response)  {
			window.alert(response);
		    }).error(function(err, status) {
			    window.alert('Service' + err + ' ' + status);
			});
	    }

	    var _deleteService = function(serviceId) {
		var accessToken = localStorage.getItem('accessToken');

		var deferred = $q.defer();

                var data = {
                }

                // http headers                                                          
		var headers = {
                    'Accept': 'application/json',
                    'Authorization': 'bearer ' + accessToken,
                    'X-Identity-Zone-Id': '',
                    'X-Identity-Zone-Subdomain': ''
		};

		data = $.param(data);

                $http.delete(UAA_Endpoint+'/saml/service-providers/'+serviceId, data, { headers : headers }).success(function(response)  {
			window.alert(response);
		    }).error(function(err, status) {
			    window.alert('Service' + err + ' ' + status);
			});
	    }
	    
	    var _createMFA = function() {
		var accessToken = localStorage.getItem('accessToken');

                var deferred = $q.defer();

                var data = {
                }

		// http headers                                                                   
                var headers = {
                    'Accept': 'application/json',
                    'Authorization': 'bearer ' + accessToken,
		    'X-Identity-Zone-Id': ''
                };

		data = $.param(data);

		$http.post(UAA_Endpoint+'/mfa-providers', data, { headers: headers }).success(function(response)  {
			window.alert(response);
		    }).error(function(err, status) {
			    window.alert('MFA' + err + ' ' + status);
			});
	    }

	    var _getMFA = function(identityZoneId) {
		var accessToken = localStorage.getItem('accessToken');

                var deferred = $q.defer();

                var data = {
                }

                // http headers                                                            
		var headers = {
		    'Authorization': 'bearer ' + accessToken,
		    'X-Identity-Zone-Id': ''
		}

		$http.get(UAA_Endpoint+'/mfa-providers/'+identityZoneId, data, { headers: headers }).success(function(response)  {
			window.alert(response);
		    }).error(function(err, status) {
			    window.alert('MFA' + err + ' ' + status);
			});
	    }

	    var _deleteMFA = function(identityZoneId) {
		var accessToken = localStorage.getItem('accessToken');

                var deferred = $q.defer();

                var data = {
                }

                // http headers                                                                   
                var headers = {
                    'Authorization': 'bearer ' + accessToken,
                    'X-Identity-Zone-Id': ''
                }

		$http.delete(UAA_Endpoint+'/mfa-providers/'+identityZoneId, data, { headers: headers}).success(function(response)  {
			window.alert(response);
		    }).error(function(err, status) {
			    window.alert('MFA' + err + ' ' + status);
			});
	    }

	    var _listMFA = function() {
		var accessToken = localStorage.getItem('accessToken');

                var deferred = $q.defer();

                var data = {
                }

                // http headers                                                            
		var headers = {
                    'Authorization': 'bearer ' + accessToken,
                    'X-Identity-Zone-Id': ''
                }

		$http.get(UAA_Endpoint+'/mfa-providers', data, { headers: headers}).success(function(response)  {
			window.alert(response);
		    }).error(function(err, status) {
			    window.alert('MFA' + err + ' ' + status);
			});
	    }

	    var _getUser = function(uaaGuid) {
		var accessToken = localStorage.getItem('accessToken');
		
		var deferred = $q.defer();
		
                var data = {
                }
		
		// http headers                                                                   
                var headers = {
                    'Accept': 'application/json',
                    'Authorization': 'Basic Y2Y6'
                };

                data = $.param(data);

		$http.get(UAA_Endpoint+'/Users'+'/'+uaaGuid, data, { headers: headers }).success(function(response)  {
			window.alert(response);
		    }).error(function(err, status) {
			    window.alert('Users ' + err + ' ' + status);
			});
	    }

	    var _addUser = function(uaaOptions) {
		var accessToken = localStorage.getItem('accessToken');

		window.alert(accessToken);

                var deferred = $q.defer();

                var data = uaaOptions;

		// http headers                                             
		var headers = {
                    'Accept': 'application/json',
		    'Authorization': 'bearer ' + accessToken
                };

		data = $.param(data);
		
		$http.post(UAA_Endpoint+'/Users', data, { headers: headers }).success(function(response)  {
			window.alert(response);
		    }).error(function(err, status) {
			    window.alert('Users ' + err + ' ' + status);
			});
	    }

	    var _removeUser = function(uaaGuid) {
		var accessToken = localStorage.getItem('accessToken');

		var deferred = $q.defer();

                var data = {
                }

		// http headers                                                            
		var headers = {
                    'Accept': 'application/json',
                    'Authorization': 'bearer ' + accessToken
                };
		data = $.param(data);
		
                $http.delete(UAA_Endpoint+'/Users/'+uaaGuid, data, { headers: headers }).success(function(response)  {
			window.alert(response);
		    }).error(function(err, status) {
			    window.alert('Users ' + err + ' ' + status);
			});
			}

	    var _updatePassword = function(uaaGuid) {
		var accessToken = localStorage.getItem('accessToken');
		
                var deferred = $q.defer();
		
                var data = {
                }
		
		// http headers                                             
                var headers = {
                    'Accept': 'application/json',
                    'Authorization': 'bearer ' + accessToken
                };
		data = $.param(data);
		
                $http.put(UAA_Endpoint+'/Users/'+uaaGuid+'/password', data, { headers: headers }).success(function(response)  {
			window.alert(response);
		    }).error(function(err, status) {
			    window.alert('Users ' + err + ' ' + status);
			});				
	    }

	    var _updateUser = function(uaaGuid, uaaOptions) {
		var accessToken = localStorage.getItem('accessToken');
		
		var deferred = $q.defer();
		
                var data = {
		}
		
		// http headers                                                                   
                var headers = {
                    'Accept': 'application/json',
                    'Authorization': 'bearer ' + accessToken
		};
                data = $.param(data);

		$http.put(UAA_Endpoint+'/Users/'+uaaGuid, data, { headers: headers }).success(function(response)  {
			window.alert(response);
		    }).error(function(err, status) {
			    window.alert('Users ' + err + ' ' + status);
			});
            }

	    var _patchUser = function(uaaGuid, uaaOptions) {
		var accessToken = localStorage.getItem('accessToken');

                var deferred = $q.defer();

                var data = {
		}

		// http headers                                                         
                var headers = {
                    'Accept': 'application/json',
                    'Authorization': 'bearer ' + accessToken
		};
                data = $.param(data);

                $http.patch(UAA_Endpoint+'/Users/'+uaaGuid, data, { headers: headers }).success(function(response)  {
			window.alert(response);
		    }).error(function(err, status) {
			    window.alert('Users ' + err + ' ' + status);
			});
	    }

	    var _userInfo = function() {
		var accessToken = localStorage.getItem('accessToken');

                var deferred = $q.defer();

                var data = '';

                // http headers                                                                   
                var headers = {
                    'Accept': 'application/json',
                    'Authorization': 'bearer ' + accessToken
                };
                data = $.param(data);

		$http.get(UAA_Endpoint+'/userinfo', data, { headers: headers }).success(function(response)  {
			window.alert(response);
		    }).error(function(err, status) {
			    window.alert('Users ' + err + ' ' + status);
			});
			}

	    var _unlockAccount = function(uaaGuid) {
		var accessToken = localStorage.getItem('accessToken');

                var deferred = $q.defer();

		var data = {
		    'locked': 'false'
		}

		// http headers                                                            
                var headers = {
                    'Accept': 'application/json',
                    'Authorization': 'bearer ' + accessToken
                };
                data = $.param(data);
		
		$http.patch(UAA_Endpoint+'/Users/'+uaaGuid+'/status', data, { headers: headers }).success(function(response)  {
			window.alert(response);
		    }).error(function(err, status) {
			    window.alert('Users ' + err + ' ' + status);
			});
	    }

	    var _expirePassword = function(uaaGuid) {
		var accessToken = localStorage.getItem('accessToken');

                var deferred = $q.defer();

                var data = {
                    'passwordChangeRequired': 'true'
		}
		
		// http headers                                                                   
                var headers = {
                    'Accept': 'application/json',
                    'Authorization': 'bearer ' + accessToken
                };
                data = $.param(data);

		$http.patch(UAA_Endpoint+'/Users/'+uaaGuid+'/status', data, { headers: headers }).success(function(response)  {
                        window.alert(response);
                    }).error(function(err, status) {
                            window.alert('Users ' + err + ' ' + status);
                        });
	    }   

	    var _getUserVerificationLink = function(uaaGuid) {
		var accessToken = localStorage.getItem('accessToken');

                var deferred = $q.defer();

		var data = {
            
                }

                // http headers                                                       
		var headers = {
                    'Accept': 'application/json',
                    'Authorization': 'bearer ' + accessToken
                };
                data = $.param(data);

		$http.get(UAA_Endpoint+'/Users/'+uaaGuid+'/verify-link', data, { headers: headers }).success(function(response)  {
                        window.alert(response);
                    }).error(function(err, status) {
                            window.alert('Users ' + err + ' ' + status);
                        });
	    }

	    var _verifyUser = function(uaaGuid) {
		var accessToken = localStorage.getItem('accessToken');
		
                var deferred = $q.defer();
		
		var data = {
		    
                }
		
		// http headers                                                             
		var headers = {
                    'Accept': 'application/json',
                    'Authorization': 'bearer ' + accessToken
                };
                data = $.param(data);
		
		$http.get(UAA_Endpoint+'/Users/'+uaaGuid+'/verify', data, { headers: headers}).success(function(response)  {
			window.alert(response);
		    }).error(function(err, status) {
			    window.alert('Users ' + err + ' ' + status);
			});
	    }

	    var _deleteMFA = function(uaaGuid) {
		var accessToken = localStorage.getItem('accessToken');

                var deferred = $q.defer();

                var data = {

                }

                // http headers                                                                   
                var headers = {
                    'Accept': 'application/json',
                    'Authorization': 'bearer ' + accessToken
                };
                data = $.param(data);

		$http.delete(UAA_Endpoint+'/Users/'+uaaGuid+'/mfa', data, { headers: headers}).success(function(response)  {
			window.alert(response);
		    }).error(function(err, status) {
			    window.alert('Users ' + err + ' ' + status);
			});		
	    }

	    var _createGroup = function(uaaOptions) {
		var accessToken = localStorage.getItem('accessToken');

		var deferred = $q.defer();

                var data = {
		}

                // http headers                                                          
		var headers = {
                    'Accept': 'application/json',
                    'Authorization': 'bearer ' + accessToken
                };

                data = $.param(data);

		$http.post(UAA_Endpoint+'/Groups', data, { headers: headers }).success(function(response)  {
			window.alert(response);
		    }).error(function(err, status) {
			    window.alert('Groups ' + err + ' ' + status);
			});
            }

	    var _getGroup = function(uaaGuid) {
		var accessToken = localStorage.getItem('accessToken');

                var deferred = $q.defer();

		var data = {
		}
		
		// http headers                                                                   
                var headers = {
                    'Accept': 'application/json',
                    'Authorization': 'bearer ' + accessToken
                };

                data = $.param(data);

                $http.get(UAA_Endpoint+'/Groups/'+uaaGuid, data, { headers: headers }).success(function(response)  {
			window.alert(response);
		    }).error(function(err, status) {
			    window.alert('Groups ' + err + ' ' + status);
			});
	    }

	    var _updateGroup = function(uaaGuid, uaaOptions) {
		var accessToken = localStorage.getItem('accessToken');

                var deferred = $q.defer();

                var data = {
		}

		// http headers                                                            
		var headers = {
                    'Accept': 'application/json',
                    'Authorization': 'bearer ' + accessToken
                };

		data = $.param(data);

                $http.put(UAA_Endpoint+'/Groups/'+uaaGuid, data, { headers: headers }).success(function(response)  {
			window.alert(response);
		    }).error(function(err, status) {
			    window.alert('Groups ' + err + ' ' + status);
			});
	    }

	    var _patchGroup = function(uaaGuid, uaaOptions) {
		var accessToken = localStorage.getItem('accessToken');

                var deferred = $q.defer();
		
                var data = {
		}
		
		// http headers                                                             
		var headers = {
                    'Accept': 'application/json',
                    'Authorization': 'bearer ' + accessToken
                };

                data = $.param(data);

		$http.patch(UAA_Endpoint+'/Groups/'+uaaGuid, data, { headers: headers }).success(function(response)  {
			window.alert(response);
		    }).error(function(err, status) {
			    window.alert('Groups ' + err + ' ' + status);
			});
	    }

	    var _deleteGroup = function(uaaGuid) {
		var accessToken = localStorage.getItem('accessToken');

                var deferred = $q.defer();

                var data = {
		}

                // http headers                                                                   
                var headers = {
                    'Accept': 'application/json',
                    'Authorization': 'bearer ' + accessToken
                };

                data = $.param(data);

		$http.delete(UAA_Endpoint+'/Groups/'+uaaGuid, data, { headers: headers }).success(function(response)  {
			window.alert(response);
		    }).error(function(err, status) {
			    window.alert('Groups ' + err + ' ' + status);
			});
	    }

	    var _listGroups = function() {
		var accessToken = localStorage.getItem('accessToken');

                var deferred = $q.defer();

                var data = {
	    
                }
		
		// http headers                                                               
		
		var headers = {
                    'Accept': 'application/json',
                    'Authorization': 'bearer ' + accessToken
                };

		data = $.param(data);

                $http.get(UAA_Endpoint+'/Groups', data, { headers: headers }).success(function(response)  {
			window.alert(response);
		    }).error(function(err, status) {
			    window.alert('Groups ' + err + ' ' + status);
			});
	    }

	    var _checkMembership = function(memberId, groupId) {
		var accessToken = localStorage.getItem('accessToken');

                var deferred = $q.defer();

                var data = {

                }

                // http headers                                                                  
                var headers = {
                    'Accept': 'application/json',
                    'Authorization': 'bearer ' + accessToken
                };

                data = $.param(data);

                $http.get(UAA_Endpoint+'/Groups/'+groupId+'/members/'+memberId, data, { headers: headers }).success(function(response)  {
			window.alert(response);
		    }).error(function(err, status) {
			    window.alert('Groups ' + err + ' ' + status);
			});
	    }

	    var _addMember = function(uaaGuid, uaaOptions) {
		var accessToken = localStorage.getItem('accessToken');

                var deferred = $q.defer();

                var data = {
		}

                // http headers                                                            
		var headers = {
                    'Accept': 'application/json',
                    'Authorization': 'bearer ' + accessToken
                };

                data = $.param(data);
		
		$http.post(UAA_Endpoint+'/Groups/'+uaaGuid+'/members', data, { headers: headers }).success(function(response)  {
			window.alert(response);
		    }).error(function(err, status) {
			    window.alert('Groups ' + err + ' ' + status);
			});
	    }

	    var _removeMember = function(groupId, memberId) {
		var accessToken = localStorage.getItem('accessToken');

                var deferred = $q.defer();

		var data = {
		    
		}
		
		var headers = {
		    'Accept': 'application/json',
                    'Authorization': 'bearer ' + accessToken
		}
		
		data = $.param(data);
		
		$http.delete(UAA_Endpoint+'/Groups/'+groupId+'/members/'+memberId, data, { headers: headers }).success(function(response)  {											
			window.alert(response);
		    }).error(function(err, status) {
			    window.alert('Groups ' + err + ' ' + status);
			});
	    }

	    var _listMembers = function(uaaGuid) {
		var accessToken = localStorage.getItem('accessToken');

                var deferred = $q.defer();

                var data = {

                }

                // http headers                                                                  
                var headers = {
                    'Accept': 'application/json',
                    'Authorization': 'bearer ' + accessToken
                };

                data = $.param(data);

                $http.get(UAA_Endpoint+'/Groups/'+uaaGuid+'/members/', data, { headers: headers }).success(function(response)  {
			window.alert(response);
		    }).error(function(err, status) {
			    window.alert('Groups ' + err + ' ' + status);
			});
			}

	    var _groupsExternal = function(uaaOptions) {
		
		var accessToken = localStorage.getItem('accessToken');
	    
                var deferred = $q.defer();
		
                var data = { 
		}
		
                // http headers                                                                  
                var headers = {
                    'Accept': 'application/json',
                    'Authorization': 'bearer ' + accessToken
                };
		
                data = $.param(data);
		
                $http.post(UAA_Endpoint+'/Groups/External', data, { headers: headers }).success(function(response)  {
			window.alert(response);
		    }).error(function(err, status) {
			    window.alert('Groups ' + err + ' ' + status);
			});
	    }

	    var _createClient = function(uaaOptions) {
		var accessToken = localStorage.getItem('accessToken');
		
                var deferred = $q.defer();
		
		var data = {
		}
		
                // http headers                                                                  
                var headers = {
                    'Accept': 'application/json',
                    'Authorization': 'bearer ' + accessToken
                };
		
                data = $.param(data);
		
		$http.post(UAA_Endpoint+'/oauth/clients', data, { headers: headers }).success(function(response)  {
			window.alert(response);
		    }).error(function(err, status) {
			    window.alert('Clients ' + err + ' ' + status);
			});
	    }
	    
	    var _getClient = function(uaaGuid, uaaOptions) {
		var accessToken = localStorage.getItem('accessToken');
		
                var deferred = $q.defer();
		
                var data = {
		}

                // http headers                                                                  
                var headers = {
                    'Accept': 'application/json',
                    'Authorization': 'bearer ' + accessToken
                };
		
                data = $.param(data);
		
                $http.get(UAA_Endpoint+'/oauth/clients/'+uaaGuid, data, { headers: headers }).success(function(response)  {
			window.alert(response.name);
			window.alert(response.lastModified);
		    }).error(function(err, status) {
			    window.alert('Clients ' + err + ' ' + status);
			});
	    }

	    var _updateClient = function(uaaGuid, uaaOptions) {
		var accessToken = localStorage.getItem('accessToken');
		
                var deferred = $q.defer();
		
                var data = {
		}
		
                // http headers                                                                  
                var headers = {
                    'Accept': 'application/json',
                    'Authorization': 'bearer ' + accessToken
                };
		
                data = $.param(data);

		$http.put(UAA_Endpoint+'/oauth/clients/'+uaaGuid, data, { headers: headers }).success(function(response)  {
			window.alert(response);
		    }).error(function(err, status) {
			    window.alert('Clients ' + err + ' ' + status);
			});
	    }

	    var _removeClient = function(uaaGuid, uaaOptions) {
		var accessToken = localStorage.getItem('accessToken');

                var deferred = $q.defer();

                var data = {
		}
		
                // http headers                                                                  
                var headers = {
                    'Accept': 'application/json',
                    'Authorization': 'bearer ' + accessToken
                };

                data = $.param(data);
		
                $http.put(UAA_Endpoint+'/oauth/clients/'+uaaGuid, data, { headers: headers }).success(function(response)  {
			window.alert(response);
		    }).error(function(err, status) {
			    window.alert('Clients ' + err + ' ' + status);
			});
	    }

	     var _changeSecret = function(uaaGuid, uaaOptions) {
		var accessToken = localStorage.getItem('accessToken');

                var deferred = $q.defer();

                var data = {
		}
		
                // http headers                                                                  
                var headers = {
                    'Accept': 'application/json',
                    'Authorization': 'bearer ' + accessToken
                };

                data = $.param(data);
		
		$http.put(UAA_Endpoint+'/oauth/clients/'+uaaGuid+'/secret', data, { headers: headers }).success(function(response)  {
			window.alert(response);
		    }).error(function(err, status) {
			    window.alert('Clients ' + err + ' ' + status);
			});
	    }

	     var _getMetadata = function(uaaGuid) {
		var accessToken = localStorage.getItem('accessToken');

                var deferred = $q.defer();

                var data = {
		}
		
                // http headers                                                                  
                var headers = {
                    'Accept': 'application/json',
                    'Authorization': 'bearer ' + accessToken
                };

		data = $.param(data);

                $http.get(UAA_Endpoint+'/oauth/clients/'+uaaGuid+'/meta', data, { headers: headers }).success(function(response)  {
                        window.alert(response);
                    }).error(function(err, status) {
                            window.alert('Clients ' + err + ' ' + status);
                        });
	    }

	     var _listMetadata = function() {
		var accessToken = localStorage.getItem('accessToken');

                var deferred = $q.defer();

                var data = {
		}

                // http headers                                                                  
                var headers = {
                    'Accept': 'application/json',
                    'Authorization': 'bearer ' + accessToken
                };

                data = $.param(data);

                $http.get(UAA_Endpoint+'/oauth/clients/meta', data, { headers: headers }).success(function(response)  {
			    window.alert(response);
			}).error(function(err, status) {
				window.alert('Clients ' + err + ' ' + status);
			    });
	     }

	    var _updateMetadata = function(uaaGuid) {
		var accessToken = localStorage.getItem('accessToken');

                var deferred = $q.defer();

                var data = {
		}

                // http headers                                                                  
                var headers = {
                    'Accept': 'application/json',
                    'Authorization': 'bearer ' + accessToken
                };

                data = $.param(data);

		$http.put(UAA_Endpoint+'/oauth/clients/'+uaaGuid+'/meta', data, { headers: headers }).success(function(response)  {
                            window.alert(response);
                        }).error(function(err, status) {
                                window.alert('Clients ' + err + ' ' + status);
                            });
	    }

	    var _logOut = function() {
		// remove access token and username in session storage                      
		localStorage.removeItem('accessToken');
		localStorage.removeItem('refreshToken');
		localStorage.removeItem('userName');

		// reset authentication object                                               
		_authentication.isAuth = false;
		_authentication.userName = '';
	    };

	    var _fillAuthData = function() {
		var accessToken = localStorage.getItem('accessToken');
		var refreshToken = localStorage.getItem('refreshToken');
		var userName = localStorage.getItem('userName');

		if (accessToken !== null && userName !== null) {
		    _authentication.isAuth = true;
		    _authentication.userName = userName;
		}
	    };   
		    
	    authServiceFactory.createClient = _createClient;
	    authServiceFactory.getClient = _getClient;
	    authServiceFactory.updateClient = _updateClient;
	    authServiceFactory.removeClient = _removeClient;
	    authServiceFactory.changeSecret = _changeSecret;
	    authServiceFactory.getClients = _getClients;
	    authServiceFactory.listMetadata = _listMetadata;
	    authServiceFactory.getMetadata = _getMetadata;
	    authServiceFactory.updateMetadata = _updateMetadata;
	    authServiceFactory.createGroup = _createGroup;
	    authServiceFactory.getGroup = _getGroup;
	    authServiceFactory.updateGroup = _updateGroup;
	    authServiceFactory.patchGroup = _patchGroup;
	    authServiceFactory.listGroups = _listGroups;
	    authServiceFactory.deleteGroup = _deleteGroup;
	    authServiceFactory.checkMembership = _checkMembership;
	    authServiceFactory.addMember = _addMember;
	    authServiceFactory.removeMember = _removeMember;
	    authServiceFactory.listMembers = _listMembers;
	    authServiceFactory.groupsExternal = _groupsExternal;
	    authServiceFactory.getCode = _getCode;
	    authServiceFactory.getCodeApiFlow = _getCodeApiFlow;
	    authServiceFactory.implicitGrant = _implicitGrant;
	    authServiceFactory.implicitGrantWithPrompt = _implicitGrantWithPrompt;
	    authServiceFactory.connectFlow = _connectFlow;
	    authServiceFactory.login = _login;
	    authServiceFactory.client_credentials = _client_credentials;
	    authServiceFactory.authorizationCode = _authorizationCode;
	    authServiceFactory.userTokenGrant = _userTokenGrant;
	    authServiceFactory.saml2BearerGrant = _saml2BearerGrant;
	    authServiceFactory.jwtBearerTokenGrant = _jwtBearerTokenGrant; 
	    authServiceFactory.openIdConnect = _openIdConnect;
	    authServiceFactory.revokeTokenUser = _revokeTokenUser;
	    authServiceFactory.revokeTokenClient = _revokeTokenClient;
	    authServiceFactory.revokeTokenUserClient = _revokeTokenUserClient;
	    authServiceFactory.revokeSingleToken = _revokeSingleToken;
	    authServiceFactory.listTokenUser = _listTokenUser;
	    authServiceFactory.listTokenClient = _listTokenClient;
  	    authServiceFactory.checkToken = _checkToken;
	    authServiceFactory.introspectToken = _introspectToken;
	    authServiceFactory.tokenKey = _tokenKey;
	    authServiceFactory.logoutDo = _logoutDo;
	    authServiceFactory.serverInformation = _serverInformation;
	    authServiceFactory.passcode = _passcode;
	    authServiceFactory.autologin = _autologin;
	    authServiceFactory.changePasswordFlow = _changePasswordFlow;
	    authServiceFactory.createIdentityZone = _createIdentityZone;
	    authServiceFactory.getIdentityZone = _getIdentityZone;
	    authServiceFactory.getAllIdentityZone = _getAllIdentityZone;
	    authServiceFactory.updateIdentityZone = _updateIdentityZone;
	    authServiceFactory.deleteIdentityZone = _deleteIdentityZone;
            authServiceFactory.createSAMLIdentityProvider = _createSAMLIdentityProvider;
            authServiceFactory.createLDAPIdentityProvider = _createLDAPIdentityProvider;
	    authServiceFactory.createOAuthIdentityProvider = _createOAuthIdentityProvider;
	    authServiceFactory.getAllIdentityProvider = _getAllIdentityProvider;
	    authServiceFactory.getIdentityProvider = _getIdentityProvider;
	    authServiceFactory.updateIdentityProvider = _updateIdentityProvider;
	    authServiceFactory.deleteIdentityProvider = _deleteIdentityProvider;
	    authServiceFactory.initiateIDPLoginFlow = _initiateIDPLoginFlow;
	    authServiceFactory.listServices = _listServices;
	    authServiceFactory.getService = _getService;
	    authServiceFactory.createService = _createService;
	    authServiceFactory.updateService = _updateService;
	    authServiceFactory.deleteService = _deleteService;
	    authServiceFactory.createMFA = _createMFA;
	    authServiceFactory.getMFA = _getMFA;
	    authServiceFactory.deleteMFA = _deleteMFA;
	    authServiceFactory.listMFA = _listMFA;
	    authServiceFactory.forcePasswordChange = _forcePasswordChange;
	    authServiceFactory.logoutDo = _logoutDo;
	    authServiceFactory.refresh = _refresh;
	    authServiceFactory.addUser = _addUser;
	    authServiceFactory.updateUser = _updateUser;
	    authServiceFactory.removeUser = _removeUser;
	    authServiceFactory.patchUser = _patchUser;
	    authServiceFactory.getUsers = _getUsers;
	    authServiceFactory.getUser = _getUser;
	    authServiceFactory.userInfo = _userInfo;
	    authServiceFactory.updatePassword = _updatePassword;
	    authServiceFactory.unlockAccount = _unlockAccount;
	    authServiceFactory.expirePassword = _expirePassword;
	    authServiceFactory.getUserVerificationLink = _getUserVerificationLink;
	    authServiceFactory.verifyUser = _verifyUser;
	    authServiceFactory.logOut = _logOut;
	    authServiceFactory.fillAuthData = _fillAuthData;
	    authServiceFactory.authentication = _authentication;

	    return authServiceFactory;
	}]);
