import angular from 'angular';
import { MainController } from './controllers/main';

angular
	.module('app', [])
	.controller('MainController', MainController)