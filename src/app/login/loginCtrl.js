angular.module('app')
    .controller('LoginCtrl', ['$scope', '$location', '$route', 'authService',
			      function($scope, $location, $route, authService) { 
			$scope.loginData = {
			    username: '',
			    password: ''
			};
			
			$scope.listMembers = function() {
                            authService.listMembers.then(function(response) {
                                    $location.path('/');
                                });
                        }

			$scope.removeMember = function() {
                            authService.removeMember.then(function(response) {
                                    $location.path('/');
                                });
                        }

			$scope.checkMembership = function() {
                            authService.checkMembership.then(function(response) {
                                    $location.path('/');
                                });
                        }

			$scope.deleteGroup = function() {
                            authService.deleteGroup.then(function(response) {
                                    $location.path('/');
                                });
                        }

			$scope.patchGroup = function() {
                            authService.patchGroup.then(function(response) {
                                    $location.path('/');
                                });
                        }
			
			$scope.updateGroup = function() {
                            authService.updateGroup.then(function(response) {
                                    $location.path('/');
                                });
                        }

			$scope.getGroup = function() {
                            authService.getGroup.then(function(response) {
                                    $location.path('/');
                                });
                        }

			$scope.updateMetadata = function() {
                            authService.updateMetadata.then(function(response) {
                                    $location.path('/');
                                });
                        }

			$scope.getMetadata = function() {
                            authService.getMetadata.then(function(response) {
                                    $location.path('/');
                                });
                        }

			$scope.listMetadata = function() {
                            authService.listMetadata.then(function(response) {
                                    $location.path('/');
                                });
                        }

			$scope.changeSecret = function() {
                            authService.changeSecret.then(function(response) {
                                    $location.path('/');
                                });
                        }

			$scope.removeClient = function() {
                            authService.removeClient.then(function(response) {
                                    $location.path('/');
                                });
                        }

			$scope.updateClient = function() {
                            authService.updateClient.then(function(response) {
                                    $location.path('/');
                                });
                        }
			
			$scope.getClient = function() {
                            authService.getClient.then(function(response) {
                                    $location.path('/');
                                });
                        }

			$scope.createClient = function() {
                            authService.createClient.then(function(response) {
                                    $location.path('/');
                                });
                        }
	
			$scope.verifyUser = function() {
                            authService.verifyUser.then(function(response) {
                                    $location.path('/');
                                });
                        }

			$scope.getUserVerificationLink = function() {
                            authService.getUserVerificationLink.then(function(response) {
                                    $location.path('/');
                                });
                        }

			$scope.expirePassword = function() {
                            authService.expirePassword.then(function(response) {
                                    $location.path('/');
                                });
                        }

			$scope.unlockAccount = function() {
                            authService.unlockAccount.then(function(response) {
                                    $location.path('/');
                                });
                        }
		
			$scope.updatePassword = function() {
                            authService.updatePassword.then(function(response) {
                                    $location.path('/');
                                });
                        }

			$scope.updatePassword = function() {
                            authService.updatePassword.then(function(response) {
                                    $location.path('/');
				});
                        }

			$scope.userInfo = function() {
			    authService.userInfo.then(function(response) {
                                    $location.path('/');
                                });
			}

			$scope.patchUser = function() {
                            authService.patchUser.then(function(response) {
                                    $location.path('/');
                                });
                        }

			$scope.removeUser = function() {
                            authService.removeUser.then(function(response) {
                                    $location.path('/');
                                });
                        }

			$scope.updateUser = function() {
                            authService.updateUser.then(function(response) {
                                    $location.path('/');
                                });
                        }

			$scope.getUser = function() {
			    authService.getUser.then(function(response) {
                                    $location.path('/');
                                });
			}

			$scope.forcePasswordChange = function() {
                            authService.forcePasswordChange.then(function(response) {
                                    $location.path('/');
                                });
                        }

			$scope.listMFA = function() {
                            authService.listMFA.then(function(response) {
                                    $location.path('/');
                                });
                        }

			$scope.deleteMFA = function() {
			    authService.deleteMFA.then(function(response) {
                                    $location.path('/');
                                });
			}
	
			$scope.getMFA = function() {
			    authService.getMFA.then(function(response) {
                                    $location.path('/');
                                });
			}

			$scope.createMFA = function() {
			    authService.createMFA.then(function(response) {
                                    $location.path('/');
                                });
			}

			$scope.deleteService = function() {
			    authService.deleteService.then(function(response) {
                                    $location.path('/');
                                });
			}

			$scope.updateService = function() {
			    authService.updateService.then(function(response) {
                                    $location.path('/');
                                });
			}

			$scope.createService = function() {
			    authService.createService.then(function(response) {
                                    $location.path('/');
                                });
			}

			$scope.getService = function() {
			    authService.getService.then(function(response) {
                                    $location.path('/');
                                });
			}

			$scope.listServices = function() {
			    authService.listServices.then(function(response) {
                                    $location.path('/');
                                });
			}

			$scope.initiateIDPLoginFlow = function() {
			    authService.initiateIDPLoginFlow.then(function(response) {
                                    $location.path('/');
                                });
			}

			$scope.deleteIdentityProvider = function() {
			    authService.deleteIdentityProvider.then(function(response) {
                                    $location.path('/');
                                });
			}

			$scope.updateIdentityProvider = function() {
			    authService.updateIdentityProvider.then(function(response) {
                                    $location.path('/');
				});
			}

			$scope.getIdentityProvider = function() {
			    authService.getIdentityProvider.then(function(response) {
                                    $location.path('/');
                                });
			}

			$scope.getAllIdentityProvider = function() {
			    authService.getAllIdentityProvider().then(function(response) {
                                    $location.path('/');
                                });
			}

			$scope.createOAuthIdentityProvider = function() {
			    authService.createOAuthIdentityProvider().then(function(response) {
                                    $location.path('/');
                                });
			}

			$scope.createLDAPIdentityProvider = function() {
			    authService.createLDAPIdentityProvider().then(function(response) {
                                    $location.path('/');
                                });   
			}

			$scope.createSAMLIdentityProvider = function() {
			    authService.createSAMLIdentityProvider().then(function(response) {
                                    $location.path('/');
                                });
			}

			$scope.deleteIdentityZone = function() {
			    authService.deleteIdentityZone().then(function(response) {
                                    $location.path('/');
                                });
			}

			$scope.updateIdentityZone = function() {
			    authService.updateIdentityZone().then(function(response) {
                                    $location.path('/');
                                });
			}

			$scope.getAllIdentityZone = function() {
                            authService.getAllIdentityZone().then(function(response) {
                                    $location.path('/');
                                });
                        }

			$scope.getIdentityZone = function() {
			    authService.getIdentityZone().then(function(response) {
                                    $location.path('/');
                                });
                        }
			
			$scope.createIdentityZone = function() {
                            authService.createIdentityZone().then(function(response) {
                                    $location.path('/');
                                });
                        }

			$scope.changePasswordFlow = function() {
                            authService.changePasswordFlow().then(function(response) {
                                    $location.path('/');
                                });
                        }
			
			$scope.autologin = function() {
                            authService.autologin().then(function(response) {
                                    $location.path('/');
                                });
                        }
			
			$scope.passcode = function() {
                            authService.passcode().then(function(response) {
                                    $location.path('/');
                                });
                        }
			
			$scope.serverInformation = function() {
                            authService.serverInformation().then(function(response) {
                                    $location.path('/');
                                });
                        }

			$scope.logoutDo = function() {
			    authService.logoutDo().then(function(response) {
                                    $location.path('/');
                                });
                        }

			$scope.tokenKey = function() {
                            authService.tokenKey().then(function(response) {
                                    $location.path('/');
                                });
                        }
			
			$scope.introspectToken = function() {
                            authService.introspectToken().then(function(response) {
                                    $location.path('/');
                                });
			}
			
			$scope.checkToken = function() {
                            authService.checkToken().then(function(response) {
                                    $location.path('/');
                                });
                        }

			$scope.listTokenClient = function() {
                            authService.listTokenClient().then(function(response) {
                                    $location.path('/');
                                });
                        }
			
			$scope.listTokenUser = function() {
                            authService.listTokenUser().then(function(response) {
                                    $location.path('/');
                                });
                        }

			$scope.revokeSingleToken = function() {
                            authService.revokeSingleToken().then(function(response) {
                                    $location.path('/');
                                });
                        }
			    
			$scope.revokeTokenUserClient = function() {
                            authService.revokeTokenUserClient().then(function(response) {
                                    $location.path('/');
                                });
                        }

			$scope.revokeTokenClient = function() {
                            authService.revokeTokenClient().then(function(response) {
                                    $location.path('/');
                                });
                        }

			$scope.revokeTokenUser = function() {
                            authService.revokeTokenUser().then(function(response) {
                                    $location.path('/');
                                });
                        }

			$scope.tokenKey = function() {
                            authService.tokenKey().then(function(response) {
                                    $location.path('/');
                                });
                        }

			$scope.openIdConnect = function() {
                            authService.openIdConnect().then(function(response) {
                                    $location.path('/');
                                });
                        }

			$scope.jwtBearerTokenGrant = function() {
                            authService.jwtBearerTokenGrant().then(function(response) {
                                    $location.path('/');
                                });
                        }
		      
			$scope.saml2BearerGrant = function() {
                            authService.saml2BearerGrant().then(function(response) {
                                    $location.path('/');
                                });
                        }

			$scope.userTokenGrant = function() {
			    authService.userTokenGrant().then(function(response) {
                                    $location.path('/');
                                });
			}

			$scope.authorizationCode = function() {
                            authService.authorizationCode().then(function(response) {
                                    $location.path('/');
                                });
                        }

			$scope.client_credentials = function() {
                            authService.client_credentials().then(function(response) {
                                    $location.path('/');
                                });
                        }
			
			$scope.getCodeApiFlow = function() {
                            authService.getCodeApiFlow().then(function(response) {
                                    $location.path('/');
                                });
                        }

			$scope.connectFlow = function() {
                            authService.connectFlow().then(function(response) {
                                    $location.path('/');
                                });
                        }
			
			$scope.implicitGrantWithPrompt = function() {
                            authService.implicitGrantWithPrompt().then(function(response) {
                                    $location.path('/');
                                });
                        }
			
			$scope.implicitGrant = function() {
                            authService.implicitGrant().then(function(response) {
                                    $location.path('/');
                                });
                        }

			$scope.addMember = function() {
                            authService.addMember().then(function(response) {
                                    $location.path('/');
                                });
                        }
			
			$scope.listGroups = function() {
                            authService.listGroups().then(function(response) {
                                    $location.path('/');
                                });
                        }
			
			$scope.groupsExternal = function() {
                            authService.groupsExternal().then(function(response) {
                                    $location.path('/');
                                });
			}
			
			$scope.getClients = function() {
			    authService.getClients().then(function(response) {
                                    $location.path('/');
                                });
			}

			$scope.createGroup = function() {
                            authService.createGroup().then(function(response) {
                                    $location.path('/');
                                });
                        }
			
			$scope.getCode = function() {
			    authService.getCode().then(function(response) {
				    $location.path('/');
				});
			}
			
			$scope.login = function() {
			    authService.login($scope.loginData).then(function(response) {
				    $location.path('/');
				});
			}
			
			$scope.addUser = function() {
			    authService.addUser($scope.loginData).then(function(response) {
				    $location.path('/');
                                });
			}

			$scope.getUsers = function() {
                            authService.getUsers().then(function(response) {
                                    $location.path('/');
                                });
                        }
			
			$scope.logout = function() {
			    $location.path('/login');
			    $route.reload();
			    authService.logOut();
			}
		    }]);
