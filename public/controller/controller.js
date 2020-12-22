var myApp = angular.module("myApp",[]) //

myApp.controller("mycontroller",function($scope,$http){

      $scope.add = function(){

           if($scope.name == undefined || $scope.name == ""){

                  $scope.messagename = "Enter username";
         console.log("messagephone11###");

                }
                else{
                  $scope.messagename = "";
         console.log("messagephone11%%");

                }
                if($scope.lname == undefined || $scope.lname == ""){

                  $scope.messagelname = "Enter user last name";
         console.log("messagephone1144");

                }
                else{
                  $scope.messagelname = "";
         console.log("messagephone117878");

                }
                 if($scope.phone == undefined || $scope.phone == ""){

                  $scope.messagephone = "Enter user phone number";
         console.log("messagephone11");

                }
                else{
                  $scope.messagephone = "";
         console.log("messagephone");

                }
                if($scope.messagename == "" && $scope.messagelname == "" && $scope.messagephone == ""){


         console.log("this is a add function");
       $scope.fetch() 
         $http({
               url:"/add_api",
               method:"post",
               headers:{"content-type":"application/json"},
               data:{name:$scope.name,lname:$scope.lname,phone:$scope.phone,email:$scope.email}
             }).then(function(response){
                console.log("response from server",response.data.status)
               $scope.fetch()
                   
             },function(error){
                  console.log("something went wrong")
             })
           }
         }
     
      $scope.fetch = function(){
        console.log(" fetch ===>>");
        $http({
               url:"/fetch_api",
               method:"post",
               headers:{"content-type":"application/json"},
               data:{datatosend:$scope.userdata}
             }).then(function(response){

               $scope.dataArray = response.data.data;
                console.log("response from server",$scope.dataArray)
                    
             },function(error){
                  console.log("something went wrong")
             })
      }

      
      $scope.deleteuser = function(id){
        console.log(" deleteuser ===>>",id);
        $http({
               url:"/delete_api",
               method:"post",
               headers:{"content-type":"application/json"},
               data:{id:id}
             }).then(function(response){
               // $scope.dataArray = response.data.data;
                // console.log("response from server",$scope.dataArray)
                    
               $scope.fetch()
             },function(error){
                  console.log("something went wrong")
             })
      }

      $scope.edituser = function(data){
        console.log('data: ', data);
        
        
         $scope.name = data.name;
         $scope.lname = data.lname
         $scope.phone = data.phoneno;
         $scope.email = data.email;

      }

      $scope.updateuser = function(data){
        console.log("updateuser ===",data._id);
        console.log("updateuser ===",$scope.name);
        console.log("updateuser ===",$scope.lname);
        console.log("updateuser ===",$scope.phone);
        console.log("updateuser ===",$scope.email);

        

        $http({
               url:"/update_api",
               method:"post",
               headers:{"content-type":"application/json"},
               data:{name:$scope.name,lname:$scope.lname,email:$scope.email,phone:$scope.phone,id:data._id}
             }).then(function(response){
                  console.log("shifa")
                
               $scope.fetch()
                   
             },function(error){
                  console.log("something went wrong")
             })
               $scope.fetch()
             
      }





 });

