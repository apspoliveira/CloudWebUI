angular.module('app.login')
    .controller('LoginCtrl', ['$scope', '$location', '$route', '$log', 'authService',
			      function($scope, $location, $route, $log, authService) { 
			$scope.loginData = {
			    username: '',
			    password: ''
			};
			
			$scope.listMembers = function() {
                            authService.listMembers.then(function(response) {
                                    $location.path('/');
                                },
                                function (err) {
                                    $log.error(err);
                                });
                        }

			$scope.removeMember = function() {
                            authService.removeMember.then(function(response) {
                                    $location.path('/');
                                },
                                function (err) {
                                    $log.error(err);
                                });
                        }

			$scope.checkMembership = function() {
                            authService.checkMembership.then(function(response) {
                                    $location.path('/');
                                },
                                function (err) {
                                    $log.error(err);
                                });
                        }

			$scope.deleteGroup = function() {
                            authService.deleteGroup.then(function(response) {
                                    $location.path('/');
                                },
                                function (err) {
                                    $log.error(err);
                                });
                        }

			$scope.patchGroup = function() {
                            authService.patchGroup.then(function(response) {
                                    $location.path('/');
                                },
                                function (err) {
                                    $log.error(err);
                                });
                        }
			
			$scope.updateGroup = function() {
                            authService.updateGroup.then(function(response) {
                                    $location.path('/');
                                },
                                function (err) {
                                    $log.error(err);
                                });
                        }

			$scope.getGroup = function() {
                            authService.getGroup.then(function(response) {
                                    $location.path('/');
                                },
                                function (err) {
                                    $log.error(err);
                                });
                        }

			$scope.updateMetadata = function() {
                            authService.updateMetadata.then(function(response) {
                                    $location.path('/');
                                },
                                function (err) {
                                    $log.error(err);
                                });
                        }

			$scope.getMetadata = function() {
                            authService.getMetadata.then(function(response) {
                                    $location.path('/');
                                },
                                function (err) {
                                    $log.error(err);
                                });
                        }

			$scope.listMetadata = function() {
                            authService.listMetadata.then(function(response) {
                                    $location.path('/');
                                },
                                function (err) {
                                    $log.error(err);
                                });
                        }

			$scope.changeSecret = function() {
                            authService.changeSecret.then(function(response) {
                                    $location.path('/');
                                },
                                function (err) {
                                    $log.error(err);
                                });
                        }

			$scope.removeClient = function() {
                            authService.removeClient.then(function(response) {
                                    $location.path('/');
                                },
                                function (err) {
                                    $log.error(err);
                                });
                        }

			$scope.updateClient = function() {
                            authService.updateClient.then(function(response) {
                                    $location.path('/');
                                },
                                function (err) {
                                    $log.error(err);
                                });
                        }
			
			$scope.getClient = function() {
                            authService.getClient.then(function(response) {
                                    $location.path('/');
                                },
                                function (err) {
                                    $log.error(err);
                                });
                        }

			$scope.createClient = function() {
                            authService.createClient.then(function(response) {
                                    $location.path('/');
                                },
                                function (err) {
                                    $log.error(err);
                                });
                        }
	
			$scope.verifyUser = function() {
                            authService.verifyUser.then(function(response) {
                                    $location.path('/');
                                },
                                function (err) {
                                    $log.error(err);
                                });
                        }

			$scope.getUserVerificationLink = function() {
                            authService.getUserVerificationLink.then(function(response) {
                                    $location.path('/');
                                },
                                function (err) {
                                    $log.error(err);
                                });
                        }

			$scope.expirePassword = function() {
                            authService.expirePassword.then(function(response) {
                                    $location.path('/');
                                },
                                function (err) {
                                    $log.error(err);
                                });
                        }

			$scope.unlockAccount = function() {
                            authService.unlockAccount.then(function(response) {
                                    $location.path('/');
                                },
                                function (err) {
                                    $log.error(err);
                                });
                        }
		
			$scope.updatePassword = function() {
                            authService.updatePassword.then(function(response) {
                                    $location.path('/');
                                },
                                function (err) {
                                    $log.error(err);
                                });
                        }

			$scope.updatePassword = function() {
                            authService.updatePassword.then(function(response) {
                                    $location.path('/');
				},
                                function (err) {
                                    $log.error(err);
                                });
                        }

			$scope.userInfo = function() {
			    authService.userInfo.then(function(response) {
                                    $location.path('/');
                                },
                                function (err) {
                                    $log.error(err);
                                });
			}

			$scope.patchUser = function() {
                            authService.patchUser.then(function(response) {
                                    $location.path('/');
                                },
                                function (err) {
                                    $log.error(err);
                                });
                        }

			$scope.removeUser = function() {
                            authService.removeUser.then(function(response) {
                                    $location.path('/');
                                },
                                function (err) {
                                    $log.error(err);
                                });
                        }

			$scope.updateUser = function() {
                            authService.updateUser.then(function(response) {
                                    $location.path('/');
                                },
                                function (err) {
                                    $log.error(err);
                                });
                        }

			$scope.getUser = function() {
			    authService.getUser.then(function(response) {
                                    $location.path('/');
                                },
                                function (err) {
                                    $log.error(err);
                                });
			}

			$scope.forcePasswordChange = function() {
                            authService.forcePasswordChange.then(function(response) {
                                    $location.path('/');
                                },
                                function (err) {
                                    $log.error(err);
                                });
                        }

			$scope.listMFA = function() {
                            authService.listMFA.then(function(response) {
                                    $location.path('/');
                                },
                                function (err) {
                                    $log.error(err);
                                });
                        }

			$scope.deleteMFA = function() {
			    authService.deleteMFA.then(function(response) {
                                    $location.path('/');
                                },
                                function (err) {
                                    $log.error(err);
                                });
			}
	
			$scope.getMFA = function() {
			    authService.getMFA.then(function(response) {
                                    $location.path('/');
                                },
                                function (err) {
                                    $log.error(err);
                                });
			}

			$scope.createMFA = function() {
			    authService.createMFA.then(function(response) {
                                    $location.path('/');
                                },
                                function (err) {
                                    $log.error(err);
                                });
			}

			$scope.deleteService = function() {
			    authService.deleteService.then(function(response) {
                                    $location.path('/');
                                },
                                function (err) {
                                    $log.error(err);
                                });
			}

			$scope.updateService = function() {
			    authService.updateService.then(function(response) {
                                    $location.path('/');
                                },
                                function (err) {
                                    $log.error(err);
                                });
			}

			$scope.createService = function() {
			    authService.createService.then(function(response) {
                                    $location.path('/');
                                },
                                function (err) {
                                    $log.error(err);
                                });
			}

			$scope.getService = function() {
			    authService.getService.then(function(response) {
                                    $location.path('/');
                                },
                                function (err) {
                                    $log.error(err);
                                });
			}

			$scope.listServices = function() {
			    authService.listServices.then(function(response) {
                                    $location.path('/');
                                },
                                function (err) {
                                    $log.error(err);
                                });
			}

			$scope.initiateIDPLoginFlow = function() {
			    authService.initiateIDPLoginFlow.then(function(response) {
                                    $location.path('/');
                                },
                                function (err) {
                                    $log.error(err);
                                });
			}

			$scope.deleteIdentityProvider = function() {
			    authService.deleteIdentityProvider.then(function(response) {
                                    $location.path('/');
                                },
                                function (err) {
                                    $log.error(err);
                                });
			}

			$scope.updateIdentityProvider = function() {
			    authService.updateIdentityProvider.then(function(response) {
                                    $location.path('/');
				},
                                function (err) {
                                    $log.error(err);
                                });
			}

			$scope.getIdentityProvider = function() {
			    authService.getIdentityProvider.then(function(response) {
                                    $location.path('/');
                                },
                                function (err) {
                                    $log.error(err);
                                });
			}

			$scope.getAllIdentityProvider = function() {
			    authService.getAllIdentityProvider().then(function(response) {
                                    $location.path('/');
                                },
                                function (err) {
                                    $log.error(err);
                                });
			}

			$scope.createOAuthIdentityProvider = function() {
			    authService.createOAuthIdentityProvider().then(function(response) {
                                    $location.path('/');
                                },
                                function (err) {
                                    $log.error(err);
                                });
			}

			$scope.createLDAPIdentityProvider = function() {
			    authService.createLDAPIdentityProvider().then(function(response) {
                                    $location.path('/');
                                },
                                function (err) {
                                    $log.error(err);
                                });   
			}

			$scope.createSAMLIdentityProvider = function() {
			    authService.createSAMLIdentityProvider().then(function(response) {
                                    $location.path('/');
                                },
                                function (err) {
                                    $log.error(err);
                                });
			}

			$scope.deleteIdentityZone = function() {
			    authService.deleteIdentityZone().then(function(response) {
                                    $location.path('/');
                                },
                                function (err) {
                                    $log.error(err);
                                });
			}

			$scope.updateIdentityZone = function() {
			    authService.updateIdentityZone().then(function(response) {
                                    $location.path('/');
                                },
                                function (err) {
                                    $log.error(err);
                                });
			}

			$scope.getAllIdentityZone = function() {
                            authService.getAllIdentityZone().then(function(response) {
                                    $location.path('/');
                                },
                                function (err) {
                                    $log.error(err);
                                });
                        }

			$scope.getIdentityZone = function() {
			    authService.getIdentityZone().then(function(response) {
                                    $location.path('/');
                                },
                                function (err) {
                                    $log.error(err);
                                });
                        }
			
			$scope.createIdentityZone = function() {
                            authService.createIdentityZone().then(function(response) {
                                    $location.path('/');
                                },
                                function (err) {
                                    $log.error(err);
                                });
                        }

			$scope.changePasswordFlow = function() {
                            authService.changePasswordFlow().then(function(response) {
                                    $location.path('/');
                                },
                                function (err) {
                                    $log.error(err);
                                });
                        }
			
			$scope.autologin = function() {
                            authService.autologin().then(function(response) {
                                    $location.path('/');
                                },
                                function (err) {
                                    $log.error(err);
                                });
                        }
			
			$scope.passcode = function() {
                            authService.passcode().then(function(response) {
                                    $location.path('/');
                                },
                                function (err) {
                                    $log.error(err);
                                });
                        }
			
			$scope.serverInformation = function() {
                            authService.serverInformation().then(function(response) {
                                    $location.path('/');
                                },
                                function (err) {
                                    $log.error(err);
                                });
                        }

			$scope.logoutDo = function() {
			    authService.logoutDo().then(function(response) {
                                    $location.path('/');
                                },
                                function (err) {
                                    $log.error(err);
                                });
                        }

			$scope.tokenKey = function() {
                            authService.tokenKey().then(function(response) {
                                    $location.path('/');
                                },
                                function (err) {
                                    $log.error(err);
                                });
                        }
			
			$scope.introspectToken = function() {
                            authService.introspectToken().then(function(response) {
                                    $location.path('/');
                                },
                                function (err) {
                                    $log.error(err);
                                });
			}
			
			$scope.checkToken = function() {
                            authService.checkToken().then(function(response) {
                                    $location.path('/');
                                },
                                function (err) {
                                    $log.error(err);
                                });
                        }

			$scope.listTokenClient = function() {
                            authService.listTokenClient().then(function(response) {
                                    $location.path('/');
                                },
                                function (err) {
                                    $log.error(err);
                                });
                        }
			
			$scope.listTokenUser = function() {
                            authService.listTokenUser().then(function(response) {
                                    $location.path('/');
                                },
                                function (err) {
                                    $log.error(err);
                                });
                        }

			$scope.revokeSingleToken = function() {
                            authService.revokeSingleToken().then(function(response) {
                                    $location.path('/');
                                },
                                function (err) {
                                    $log.error(err);
                                });
                        }
			    
			$scope.revokeTokenUserClient = function() {
                            authService.revokeTokenUserClient().then(function(response) {
                                    $location.path('/');
                                },
                                function (err) {
                                    $log.error(err);
                                });
                        }

			$scope.revokeTokenClient = function() {
                            authService.revokeTokenClient().then(function(response) {
                                    $location.path('/');
                                },
                                function (err) {
                                    $log.error(err);
                                });
                        }

			$scope.revokeTokenUser = function() {
                            authService.revokeTokenUser().then(function(response) {
                                    $location.path('/');
                                },
                                function (err) {
                                    $log.error(err);
                                });
                        }

			$scope.tokenKey = function() {
                            authService.tokenKey().then(function(response) {
                                    $location.path('/');
                                },
                                function (err) {
                                    $log.error(err);
                                });
                        }

			$scope.openIdConnect = function() {
                            authService.openIdConnect().then(function(response) {
                                    $location.path('/');
                                },
                                function (err) {
                                    $log.error(err);
                                });
                        }

			$scope.jwtBearerTokenGrant = function() {
                            authService.jwtBearerTokenGrant().then(function(response) {
                                    $location.path('/');
                                },
                                function (err) {
                                    $log.error(err);
                                });
                        }
		      
			$scope.saml2BearerGrant = function() {
                            authService.saml2BearerGrant().then(function(response) {
                                    $location.path('/');
                                },
                                function (err) {
                                    $log.error(err);
                                });
                        }

			$scope.userTokenGrant = function() {
			    authService.userTokenGrant().then(function(response) {
                                    $location.path('/');
                                },
                                function (err) {
                                    $log.error(err);
                                });
			}

			$scope.authorizationCode = function() {
                            authService.authorizationCode().then(function(response) {
                                    $location.path('/');
                                },
                                function (err) {
                                    $log.error(err);
                                });
                        }

			$scope.client_credentials = function() {
                            authService.client_credentials().then(function(response) {
                                    $location.path('/');
                                },
                                function (err) {
                                    $log.error(err);
                                });
                        }
			
			$scope.getCodeApiFlow = function() {
                            authService.getCodeApiFlow().then(function(response) {
                                    $location.path('/');
                                },
                                function (err) {
                                    $log.error(err);
                                });
                        }

			$scope.connectFlow = function() {
                            authService.connectFlow().then(function(response) {
                                    $location.path('/');
                                },
                                function (err) {
                                    $log.error(err);
                                });
                        }
			
			$scope.implicitGrantWithPrompt = function() {
                            authService.implicitGrantWithPrompt().then(function(response) {
                                    $location.path('/');
                                },
                                function (err) {
                                    $log.error(err);
                                });
                        }
			
			$scope.implicitGrant = function() {
                            authService.implicitGrant().then(function(response) {
                                    $location.path('/');
                                },
                                function (err) {
                                    $log.error(err);
                                });
                        }

			$scope.addMember = function() {
                            authService.addMember().then(function(response) {
                                    $location.path('/');
                                },
                                function (err) {
                                    $log.error(err);
                                });
                        }
			
			$scope.listGroups = function() {
                            authService.listGroups().then(function(response) {
                                    $location.path('/');
                                },
                                function (err) {
                                    $log.error(err);
                                });
                        }
			
			$scope.groupsExternal = function() {
                            authService.groupsExternal().then(function(response) {
                                    $location.path('/');
                                },
                                function (err) {
                                    $log.error(err);
                                });
			}
			
			$scope.getClients = function() {
			    authService.getClients().then(function(response) {
                                    $location.path('/');
                                },
                                function (err) {
                                    $log.error(err);
                                });
			}

			$scope.createGroup = function() {
                            authService.createGroup().then(function(response) {
                                    $location.path('/');
                                },
                                function (err) {
                                    $log.error(err);
                                });
                        }
			
			$scope.getCode = function() {
			    authService.getCode().then(function(response) {
				    $location.path('/');
				},
				function (err) {
				    $log.error(err);
				});
			}
			
			$scope.login = function() {
			    authService.login($scope.loginData).then(function(response) {
				    $location.path('/');
				},
				function (err) {
				    $log.error(err);
				});
			}
			
			$scope.addUser = function() {
			    authService.addUser($scope.loginData).then(function(response) {
				    $location.path('/');
                                },
                                function (err) {
                                    $log.error(err);
                                });
			}

			$scope.getUsers = function() {
                            authService.getUsers().then(function(response) {
                                    $location.path('/');
                                },
                                function (err) {
                                    $log.error(err);
                                });
                        }
			
			$scope.logout = function() {
			    $location.path('/login');
			    $route.reload();
			    authService.logOut();
			}
		    }]);