# WIP Steps 

## Legacy Angular 

1. $scope 
2. Upgrade to 1.2.1 (no change)
3. Refactor sequenceCtrl to controller as 
4. Upgrade to 1.5.7 (no change)
5. Refactor sequenceCtrl to component 

## Angular 2 

1. Components and Services 
2. Injector (differences)

## Upgrade 

1. Add scripts 
2. Add upgrade adapter 
3. Remove ng-app and bootstrap 
4. Show app 
5. Replace sequenceCtrl with 2.0 component
6. Doesn't work (at the root)
7. Downgrade to directive 
8. Show running app 
9. Do same with title 
10. Now introduce app component 
11. Downgrade app component but NOT title or sequenceCtrl
12. Show running app
13. Set up title in app component to pass down
14. Set up new title in $rootScope 
15. Show binding 
