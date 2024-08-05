let menuBox = "off";
if(window.innerWidth < 600){
    menuBox = "off";
    document.getElementById("menuBoxBackSupportBox").style.display = "none";
}
else if(window.innerWidth > 600){
    menuBox = "on";
    document.getElementById("menuBoxBackSupportBox").style.display = "block"
}

let homeContainAllVideosDetails = {}
let musicContainVideosDetails = {}
let educationContainVideosDetails = {}
let movieContainVideoDetails = {}
let animationContainVideoDetails = {}
let sportsContainVideosDetails = {}
let rellsContainVideosDetails = {}

let subscriptionContainAllChanelDetails = {}
let myOwnGetAllVideosDetails = {}
let allMyGetWatchVideos = {}
let allMyGetLikedVideos = {}


let presentContain = "containFeedDiv1";
let containTypeForRefresh = "home";
let containFeedDiv1List = {"123456":{id:"123456",thumbnail:"https://res.cloudinary.com/dt2ytxjlw/image/upload/c_thumb,w_200,g_face/v1721377204/kb8pxdjophogtklbc6rm.jpg",chanelLogo:"WIN_20240421_11_30_13_Pro.jpg",videoTitle:"hello guys this the first video of this chanel.",url:"https://res.cloudinary.com/dt2ytxjlw/video/upload/v1721377929/bfaniljgjdyvfnldbkv2.mp4",fullname:"MYTUBE", views:"1.1k",time:"1 day"}}
let presentRunningVideo = {};
let onlineStatus = "off";
if(navigator.onLine == true){
    document.getElementById("noInternetStatusPage").style.display = "none"
    onlineStatus = "on";
}
window.addEventListener("online",()=>{
    if (onlineStatus == "off"){
        
        document.getElementById("noInternetStatusPage").style.display = "none";
        onlineStatus = "on";
    }
    
})
window.addEventListener("offline",()=>{
    
    if (onlineStatus == "on"){
        document.getElementById("noInternetStatusPage").style.display = "flex";
        onlineStatus = "off";
    }
})


function massageBox(mas){
    document.getElementById("massageAlertBoxId").style.display = "flex";
    document.getElementById("massageAlertBoxId").innerHTML = mas;
    setTimeout(()=>{
        document.getElementById("massageAlertBoxId").style.display = "none"
    },800)
}

let importantURL = {
    mainURL:"https://998ee7f7-cfcc-4190-aa81-30a4f6f75f62-00-2ms17jin26ghp.pike.replit.dev/",
    post:{
        register:"/user/register",
        login:"",
        logout:"",
        deleteAccount:"",
        uploadVideo:"",
        addAvatarOfChanel:"",
    },
    get:{
        
    }
}
function createCookie(name,value,days) {
    if (days) {
       var date = new Date();
       date.setTime(date.getTime()+(days*24*60*60*1000));
       var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    document.cookie = name+"="+value+expires+";";
}
function setHTMLtagByCheckingAccountDetails(){
    let account_status = window.localStorage.getItem("status");
    if(account_status == "login"){
        document.getElementById("mainMyChanelPage").style.display = "flex";
        document.getElementById("register1").style.display = "none";
        document.getElementById("login1").style.display = "none";
        document.getElementById("accountProfileDetails").children[0].children[1].innerHTML = window.localStorage.getItem("username")
        document.getElementById("accountProfileDetails").children[1].children[1].innerHTML = window.localStorage.getItem("fullname")
        if(window.localStorage.getItem("avatarProfile")){
            document.getElementById("profileImageIdInput1").style.display = "block";
            document.getElementById("profileImageIdInput1").src = window.localStorage.getItem("avatarProfile");
            
        }
        
       
       
    }
    else if(account_status == "registered"){
        document.getElementById("mainMyChanelPage").style.display = "none";
        document.getElementById("mainProfilePage").style.display = "none";
        document.getElementById("register1").style.display = "none";
        document.getElementById("register2").style.display = "none";
        document.getElementById("login1").style.display = "flex";
        document.getElementById("login2").style.display = "flex";
    }
    else if(account_status == undefined){
        document.getElementById("mainMyChanelPage").style.display = "none";
        document.getElementById("mainProfilePage").style.display = "none";
        document.getElementById("register1").style.display = "flex";
        document.getElementById("register2").style.display = "flex";
        document.getElementById("login1").style.display = "none";
        document.getElementById("login2").style.display = "none";
    }
}
setHTMLtagByCheckingAccountDetails()
window.onresize = ()=>{
    if(window.innerWidth < 600  ){
        menuBox = "off";
        document.getElementById("menuBoxDiv").style.display = "none";
        document.getElementById("menuBoxBackSupportBox").style.display = "none";
    }
    else if(window.innerWidth > 600){
        document.getElementById("searchPage").style.display = "none";
        document.getElementById("containFeedDiv1").style.display = "block";
        if(menuBox == "on"){
            menuBox = "on";
            document.getElementById("menuBoxDiv").style.display = "block";
            document.getElementById("menuBoxBackSupportBox").style.display = "block";
        }      
    }
}
function meunButFuction(){
        if(menuBox == "off"){
            menuBox = "on";
            document.getElementById("menuBoxDiv").style.display = "block";
            document.getElementById("menuBoxBackSupportBox").style.display = "block"
        }
        else if(menuBox == "on"){
            menuBox = "off";
            document.getElementById("menuBoxDiv").style.display = "none";
            document.getElementById("menuBoxBackSupportBox").style.display = "none";
        }
   
   
}
function searchButToPage(){
    document.getElementById(presentContain).style.display = "none";
    presentContain = "searchPage";
    document.getElementById("searchPage").style.display = "block";

}
let buttonTopage = {HOME:"containFeedDiv1",MUSIC:"containFeedDiv1",MOVIE:"containFeedDiv1",RELLS:"containFeedDiv1",EDUCATION:"containFeedDiv1",ANIMATION:"containFeedDiv1",SPORTS:"containFeedDiv1",SUBSCRIPTION:"subsciptionPage",LIBRARY:"libraryPage",MYCHANEL:"mychanelePage",SETTING:"settingPage"}
document.getElementById("menuBoxDiv").addEventListener("click",(e)=>{
    if(e.target?.id == "menuBoxDiv"){
        
        return null;
    }
    if(e.target.innerHTML == "HOME"){
        containTypeForRefresh = "home";
        document.getElementById(buttonTopage[e.target.innerHTML]).innerHTML = "";
        
    }
    else if(e.target.innerHTML == "MUSIC"){
        containTypeForRefresh = "music";
        document.getElementById(buttonTopage[e.target.innerHTML]).innerHTML = "";
    }
    else if(e.target.innerHTML == "MOVIE"){
        containTypeForRefresh = "movie";
        document.getElementById(buttonTopage[e.target.innerHTML]).innerHTML = "";
    }
    else if(e.target.innerHTML == "RELLS"){
        containTypeForRefresh = "rells";
        document.getElementById(buttonTopage[e.target.innerHTML]).innerHTML = "";
    }
    else if(e.target.innerHTML == "EDUCATION"){
        containTypeForRefresh = "education";
        document.getElementById(buttonTopage[e.target.innerHTML]).innerHTML = "";
    }
    else if(e.target.innerHTML == "ANIMATION"){
        containTypeForRefresh = "animation";
        document.getElementById(buttonTopage[e.target.innerHTML]).innerHTML = "";
    }
    else if(e.target.innerHTML == "SPORTS"){
        containTypeForRefresh = "sports";
        document.getElementById(buttonTopage[e.target.innerHTML]).innerHTML = "";
    }
    document.getElementById(presentContain).style.display = "none";
    presentContain = buttonTopage[e.target.innerHTML];
    document.getElementById(buttonTopage[e.target.innerHTML]).style.display = "block";
    menuBox = "off";
    document.getElementById("menuBoxDiv").style.display = "none";
    
    document.getElementById("menuBoxBackSupportBox").style.display = "none";

})
function addVideoFeedToVideoCard(videoDetails){
    document.getElementById("containFeedDiv1").innerHTML += `<div id = ${videoDetails.id} class = "feedVideoCardClass"><img src = ${videoDetails.thumbnail} class = "feedVideoThumbnailClass"/><img src = ${videoDetails.chanelLogo} class = "feedVideochanelLogoClass"/><p class = "feedVideoTitleClass">${videoDetails.videoTitle}</p><p class = "feedVideoCNVTClass">${videoDetails.fullname} - ${videoDetails.views} views - ${videoDetails.time} ago</p></div>`;
}
addVideoFeedToVideoCard({id:"123456",thumbnail:"https://res.cloudinary.com/dt2ytxjlw/image/upload/c_thumb,w_200,g_face/v1721377204/kb8pxdjophogtklbc6rm.jpg",chanelLogo:"WIN_20240421_11_30_13_Pro.jpg",videoTitle:"subscription hello guys this the first video of this chanel.",url:"https://res.cloudinary.com/dt2ytxjlw/video/upload/v1721377929/bfaniljgjdyvfnldbkv2.mp4",fullname:"MYTUBE", views:"1.1k",time:"1 day"})
addVideoFeedToVideoCard({id:"123456",thumbnail:"https://res.cloudinary.com/dt2ytxjlw/image/upload/c_thumb,w_200,g_face/v1721377204/kb8pxdjophogtklbc6rm.jpg",chanelLogo:"WIN_20240421_11_30_13_Pro.jpg",videoTitle:"subscription hello guys this the first video of this chanel.",url:"https://res.cloudinary.com/dt2ytxjlw/video/upload/v1721377929/bfaniljgjdyvfnldbkv2.mp4",fullname:"MYTUBE", views:"1.1k",time:"1 day"})
addVideoFeedToVideoCard({id:"123456",thumbnail:"https://res.cloudinary.com/dt2ytxjlw/image/upload/c_thumb,w_200,g_face/v1721377204/kb8pxdjophogtklbc6rm.jpg",chanelLogo:"WIN_20240421_11_30_13_Pro.jpg",videoTitle:"subscription hello guys this the first video of this chanel.",url:"https://res.cloudinary.com/dt2ytxjlw/video/upload/v1721377929/bfaniljgjdyvfnldbkv2.mp4",fullname:"MYTUBE", views:"1.1k",time:"1 day"})
addVideoFeedToVideoCard({id:"123456",thumbnail:"https://res.cloudinary.com/dt2ytxjlw/image/upload/c_thumb,w_200,g_face/v1721377204/kb8pxdjophogtklbc6rm.jpg",chanelLogo:"WIN_20240421_11_30_13_Pro.jpg",videoTitle:"subscription hello guys this the first video of this chanel.",url:"https://res.cloudinary.com/dt2ytxjlw/video/upload/v1721377929/bfaniljgjdyvfnldbkv2.mp4",fullname:"MYTUBE", views:"1.1k",time:"1 day"})

document.getElementById("containFeedDiv1").addEventListener("click",(e)=>{
    let videoId = "";
    if(e.target.className == "feedVideoCardClass"){
       videoId = e.target.id;
    }
    else if(e.target.className == "containClass"){
        return null;
    }
    else {
        videoId = e.target.parentNode.id;
    }
    presentRunningVideo = containFeedDiv1List[videoId]
    document.getElementById(presentContain).style.display = "none";
    presentContain = "videoRunningPage";
    console.log(presentRunningVideo)
    document.getElementById("videoBar").src = presentRunningVideo["url"];
    document.getElementById("videoBar").poster = presentRunningVideo["thumbnail"];
    document.getElementById("videoRunningPage").style.display = "block";
    
})


let downContainHeight1 = (document.getElementById("containFeedDiv1").scrollHeight - (document.getElementById("containFeedDiv1").scrollTop + 583));
let upperContainHeight1 = document.getElementById("containFeedDiv1").scrollTop; 

document.getElementById("containFeedDiv1").addEventListener("scroll",(e)=>{
            
            if((document.getElementById("containFeedDiv1").scrollTop - upperContainHeight1) ==  downContainHeight1){

                console.log("fetch")

                let data;
                if(containTypeForRefresh == "home"){
                    data = {id:"123456",thumbnail:"https://res.cloudinary.com/dt2ytxjlw/image/upload/c_thumb,w_200,g_face/v1721377204/kb8pxdjophogtklbc6rm.jpg",chanelLogo:"WIN_20240421_11_30_13_Pro.jpg",videoTitle:"home hello guys this the first video of this chanel.",url:"https://res.cloudinary.com/dt2ytxjlw/video/upload/v1721377929/bfaniljgjdyvfnldbkv2.mp4"};
                }
                else{
                    data = {id:"123456",thumbnail:"https://res.cloudinary.com/dt2ytxjlw/image/upload/c_thumb,w_200,g_face/v1721377204/kb8pxdjophogtklbc6rm.jpg",chanelLogo:"WIN_20240421_11_30_13_Pro.jpg",videoTitle:containTypeForRefresh,url:"https://res.cloudinary.com/dt2ytxjlw/video/upload/v1721377929/bfaniljgjdyvfnldbkv2.mp4"};
                }
        
    
                containFeedDiv1List[data.id] = data;
                addVideoFeedToVideoCard(data)
                
                
                downContainHeight1 = (document.getElementById("containFeedDiv1").scrollHeight - (document.getElementById("containFeedDiv1").scrollTop + 583));
                upperContainHeight1 = document.getElementById("containFeedDiv1").scrollTop;

                if(downContainHeight1 == 0){
                    setTimeout(()=>{
                        massageBox("no videos")
                    },2000) // violation
                    return null;
                }
                
            }
            
})
function formDataPostFunction(fromwhere){
    let url = "";
    let payload = {username:"Akash maity",fullname:"Akash maity",passward:12345};
    if(fromwhere == "register1Form" || fromwhere == "register2Form"){
        url = "https://998ee7f7-cfcc-4190-aa81-30a4f6f75f62-00-2ms17jin26ghp.pike.replit.dev/user/register";
        payload = {username: (document.getElementById("username1").value || document.getElementById("username2").value),fullname:(document.getElementById("fullname1").value || document.getElementById("fullname2").value),passward:(document.getElementById("passward1").value || document.getElementById("passward2").value)};

    }
    else if(fromwhere == "login1Form" || fromwhere == "login2Form"){
        url = "https://998ee7f7-cfcc-4190-aa81-30a4f6f75f62-00-2ms17jin26ghp.pike.replit.dev/user/login";
        payload = {username: (document.getElementById("username3").value || document.getElementById("username4").value),passward:(document.getElementById("passward3").value || document.getElementById("passward4").value)};
    }
    else if(fromwhere == "logoutAccount"){
        url = "https://998ee7f7-cfcc-4190-aa81-30a4f6f75f62-00-2ms17jin26ghp.pike.replit.dev/user/logout";
        payload = {username:window.localStorage.getItem("username"),passward:window.localStorage.getItem("passward")}
    }
    else if(fromwhere == "deleteAccount"){
        url = "https://998ee7f7-cfcc-4190-aa81-30a4f6f75f62-00-2ms17jin26ghp.pike.replit.dev/user/deleteAccount";
        payload = {username:window.localStorage.getItem("username"),passward:window.localStorage.getItem("passward")}
    }
    
   
    fetch(url, {
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },        
        method: 'POST',
        body:JSON.stringify(payload )
      })
        
        .then(data => data.json())
        .then(data => {
            if(fromwhere == "register1Form" || fromwhere == "register2Form"){
                if(data["massage"] == "registered"){
                    window.localStorage.setItem("status","registered")
                    setHTMLtagByCheckingAccountDetails()
                }
                else{
                    alert(data["massage"])
                }
            }
            else if(fromwhere == "login1Form" || fromwhere == "login2Form"){
                if(data["massage"] == "login"){
                    window.localStorage.setItem("status","login")
                    window.localStorage.setItem("mytube_token",data["mytube_token"])
                    window.localStorage.setItem("username",data["username"])
                    window.localStorage.setItem("passward",data["passward"])
                    window.localStorage.setItem("fullname",data["fullname"])

                    setHTMLtagByCheckingAccountDetails()
                }
                else{
                    alert(data["massage"])
                    
                }
            }
            else if(fromwhere == "logoutAccount"){
                if(data["massage"] == "logout"){                   
                    window.localStorage.clear()
                    window.localStorage.setItem("status","registered")
                    setHTMLtagByCheckingAccountDetails()
                }
                else{
                    alert(data["massage"])
                    
                }
            }
            else if(fromwhere == "deleteAccount"){
                if(data["massage"] == "deleteAccount"){                   
                    window.localStorage.clear()
                    setHTMLtagByCheckingAccountDetails()
                }
                else{
                    alert(data["massage"])
                    
                }
            }
        })
        .catch((err)=>{
            console.log(err)
        });
        
        
       
}










function readURL(input){

    if (input.files && input.files[0]) {

        var reader = new FileReader();
        reader.onload  =  function (e) {
            document.getElementById('profileImageIdInput1').style.display = "block";
            document.getElementById('profileImageIdInput1').src =  e.target.result;
            document.getElementById("profileImageUserName").value = localStorage.getItem("username")
            document.getElementById("profileImagePassward").value = localStorage.getItem("passward")
            document.getElementById("addProfileAvatarForm").submit()
            window.localStorage.setItem("avatarProfile",  e.target.result);
        }
        reader.readAsDataURL(input.files[0]);       
    }
}

let onChoosenOfMyChanel = 0;
let positionOfOMIN = ["videos","upload video","profile"]
document.getElementById("othersMychanelInformationNavigantionId").addEventListener("click" , (e)=>{
    if(e.target.className == "othersMychanelInformationNavigantionSubClass"){
        if(e.target.innerHTML == positionOfOMIN[onChoosenOfMyChanel]){
            return null;
        }
        if(e.target.innerHTML == "videos"){
            document.getElementById("uploadVideoSection").style.display = "none";
            document.getElementById("myChanelInformationDivIdMobile").style.display = "none";
            document.getElementById("allMyVideoListOfMyChanelDivId").style.display = "block";
            document.getElementById("othersMychanelInformationNavigantionId").children[0].style.color = " rgb(100, 70, 60)";
            document.getElementById("othersMychanelInformationNavigantionId").children[onChoosenOfMyChanel].style.color = "white";
            onChoosenOfMyChanel = 0;

        }
        
        else if(e.target.innerHTML == "upload video"){
            document.getElementById("allMyVideoListOfMyChanelDivId").style.display = "none";
            document.getElementById("myChanelInformationDivIdMobile").style.display = "none";
            document.getElementById("uploadVideoSection").style.display = "flex";
            document.getElementById("othersMychanelInformationNavigantionId").children[1].style.color = " rgb(100, 70, 60)";
            document.getElementById("othersMychanelInformationNavigantionId").children[onChoosenOfMyChanel].style.color = "white";
            onChoosenOfMyChanel = 1;
        }
        else if(e.target.innerHTML == "profile"){
            document.getElementById("allMyVideoListOfMyChanelDivId").style.display = "none";
            document.getElementById("uploadVideoSection").style.display = "none";
            document.getElementById("myChanelInformationDivIdMobile").style.display = "flex";
            document.getElementById("othersMychanelInformationNavigantionId").children[2].style.color = " rgb(100, 70, 60)";
            document.getElementById("othersMychanelInformationNavigantionId").children[onChoosenOfMyChanel].style.color = "white";
            onChoosenOfMyChanel = 2;
        }
    }
})


function formUploadVideoInputFun(where){
    if(where == "videoFileId"){
        
        document.getElementById("notChoosenVideoDivId").style.display = "none";
        document.getElementById("notChoosenThumbnailDivId").style.display = "flex";
        document.getElementById("videoFileIdLabel").innerHTML = "CHANGE VIDEO";
    }
    else if(where == "thumbnailFileId" && document.getElementById("videoFileIdLabel").innerHTML == "CHANGE VIDEO"){

        document.getElementById("notChoosenVideoDivId").style.display = "none";
        document.getElementById("notChoosenThumbnailDivId").style.display = "none";
        document.getElementById("thumbnailFileiIdLabel").innerHTML = "CHANGE THUMBNAIL";

        let thumbnailImageFile = document.getElementById("thumbnailFileId").files[0];
        if(thumbnailImageFile){
            var reader1 = new FileReader();
            reader1.onload = (e)=>{
                document.getElementById("frontandVideoSowingImgId").src = e.target.result;
                document.getElementById("uploadVideoPogressingThumbnailId").src = e.target.result;
            }
            reader1.readAsDataURL(thumbnailImageFile)
        }
    }
}

function cancleUploadingVideo(){
    return null;
}

function uploadVideoWithDetailsToServer(username,passward,videoTitle,videoDescription,videoURL,thumbnailURL,genereOfVideo){
    const form = {username:username,passward:passward,title:videoTitle,description:videoDescription,video_url:videoURL,thumbnail_url:thumbnailURL,genare:genereOfVideo}
    fetch("https://998ee7f7-cfcc-4190-aa81-30a4f6f75f62-00-2ms17jin26ghp.pike.replit.dev/video/uploadVideo",{
       
        method:"POST",
        body:JSON.stringify(form)
    })
    .then((data)=> data.json())
    .then((data)=>{
        console.log(data)
    })
    .catch((err)=>{
        console.log(err)
    })
}

function uploadVideoWithDetailsCLoudinaryANDSErver(){
    let videoFile = document.getElementById("videoFileId")?.files[0];
    let thumbnailFile = document.getElementById("thumbnailFileId")?.files[0];

    let videoURL = "";
    let thumbnailURL = "";

    let videoTitle = document.getElementById("titleId").value;
    let videoDescription = document.getElementById("descriptionId").value;

    let username = localStorage.getItem("username");
    let passward = localStorage.getItem("passward");

    let genereOfVideo = document.getElementById("choosenGenereForVideoPId").innerHTML;

    
    if(!videoFile){
        massageBox("enter video first")
        return null;
    }

    if(!thumbnailFile){
        massageBox("enter first thumbnail")
        return null;
    }

    if(!videoTitle){
        massageBox("enter your video title")
        return null;
    }

    if(!videoDescription){
        massageBox("enter your video description")
        return null;
    }

    if(!username || !passward){
        massageBox("you have no account")
        return null;
    }

    if(!genereOfVideo){
        massageBox("please enter your viedo genere for suggetion")
        return null;
    }
    console.log(videoFile,thumbnailFile,videoTitle,videoDescription,username,passward,genereOfVideo)
    document.getElementById("uploadVideoPogressingDivId").style.display = "flex";
    

    const formData = new FormData();
      formData.append('file',  videoFile);
      formData.append('upload_preset', 'mytubeVideo');

      const xhr = new XMLHttpRequest();
      xhr.open('POST', 'https://api.cloudinary.com/v1_1/dt2ytxjlw/video/upload', true); 

     
      xhr.upload.onprogress = function (event) {
        if (event.lengthComputable) {
          const percentComplete = Math.round((event.loaded * 100) / event.total);
          document.getElementById("pogressingDivMeterId").style.width = (percentComplete + "%");
          document.getElementById("pogressingDivMeterStatusId").innerHTML = (percentComplete + "%");
        }
      };


      xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
          const response = JSON.parse(xhr.responseText);
          videoURL = response.secure_url;

          if(videoURL){
                  const formData1 = new FormData();
                  formData1.append('file',  thumbnailFile);
                  formData1.append('upload_preset', 'mytubeThumbnail');
            
                  const xhr1 = new XMLHttpRequest();
                  xhr1.open('POST', 'https://api.cloudinary.com/v1_1/dt2ytxjlw/image/upload', true); 
            
                 
                  xhr1.upload.onprogress = function (event) {
                    if (event.lengthComputable) {
                      const percentComplete = Math.round((event.loaded * 100) / event.total);
                      document.getElementById("pogressingDivMeter2Id").style.width = (percentComplete + "%");
                      document.getElementById("pogressingDivMeterStatusId").innerHTML = "WAIT FOR A MOMENT";
                    }
                  };
            
            
                  xhr1.onload = function () {
                    if (xhr1.status >= 200 && xhr1.status < 300) {
                      const response = JSON.parse(xhr1.responseText);
                     
                      thumbnailURL = response.secure_url;
                              
                      uploadVideoWithDetailsToServer(username,passward,videoTitle,videoDescription,videoURL,thumbnailURL,genereOfVideo)
            
                    } else {
                      console.error('Upload failed:', xhr1.responseText);
                    }
                  };

                  xhr1.onloadend = function () {
                    if (xhr1.status >= 200 && xhr1.status < 300) {
                        document.getElementById("uploadVideoPogressingDivId").style.display = "none";
                    }
                  }
            
            
                  xhr1.onerror = function () {
                    console.error('Request error');
                  };
            
                  xhr1.send(formData1);

                }

        } else {
          console.error('Upload failed:', xhr.responseText);
        }
      };


      xhr.onerror = function () {
        console.error('Request error');
      };

      xhr.send(formData);
    
}

function openVideoGenereBox(){
    document.getElementById("videoGenereBoxId").style.display = "flex";
}

document.getElementById("videoGenereBoxId").addEventListener("click",(e)=>{
    if(e.target?.id == "videoGenereBoxId"){
        return null;
    }
    document.getElementById("choosenGenereForVideoPId").innerHTML = e.target.innerHTML;
    document.getElementById("videoGenereBoxId").style.display = "none";
})

function updateToServerFullName(){
    let fullname = document.getElementById("updateFullNameId").value;
    if(!fullname){
        massageBox("ENTER YOUR CHANELENAME")
        return null;
    }

    
        const form = {username:localStorage.getItem("username"),passward:localStorage.getItem("passward"),newFullName:fullname}
        fetch("https://998ee7f7-cfcc-4190-aa81-30a4f6f75f62-00-2ms17jin26ghp.pike.replit.dev/user/updateFullName",{
           
            method:"POST",
            body:JSON.stringify(form)
        })
        .then((data)=> data.json())
        .then((data)=>{
            if(data["massage"] == "success"){
                document.getElementById("accountProfileDetails").children[1].children[1].innerHTML = fullname;
                localStorage.setItem("fullname",fullname)
                document.getElementById('chaneleNameChangeBoxId').style.display = 'none';
            }
            
        })
        .catch((err)=>{
            console.log(err)
        })   

}

let allMyVideosList = [];
let allMyVideosKey = [];


function addVideoFeedToVideoCard2(videoDetails){
    document.getElementById("allMyVideoListOfMyChanelDivId").innerHTML += `<div id = ${videoDetails.id} class = "feedVideoCardClass"><img src = ${videoDetails.thumbnail} class = "feedVideoThumbnailClass"/><img src = ${videoDetails.chanelLogo} class = "feedVideochanelLogoClass"/><p class = "feedVideoTitleClass">${videoDetails.videoTitle}</p><p class = "feedVideoCNVTClass">${videoDetails.fullname} - ${videoDetails.views} views - ${videoDetails.time} ago</p></div>`;
}

addVideoFeedToVideoCard2({id:"123456",thumbnail:"https://res.cloudinary.com/dt2ytxjlw/image/upload/c_thumb,w_200,g_face/v1721377204/kb8pxdjophogtklbc6rm.jpg",chanelLogo:"WIN_20240421_11_30_13_Pro.jpg",videoTitle:"subscription hello guys this the first video of this chanel.",url:"https://res.cloudinary.com/dt2ytxjlw/video/upload/v1721377929/bfaniljgjdyvfnldbkv2.mp4",fullname:"MYTUBE", views:"1.1k",time:"1 day"})
addVideoFeedToVideoCard2({id:"123456",thumbnail:"https://res.cloudinary.com/dt2ytxjlw/image/upload/c_thumb,w_200,g_face/v1721377204/kb8pxdjophogtklbc6rm.jpg",chanelLogo:"WIN_20240421_11_30_13_Pro.jpg",videoTitle:"subscription hello guys this the first video of this chanel.",url:"https://res.cloudinary.com/dt2ytxjlw/video/upload/v1721377929/bfaniljgjdyvfnldbkv2.mp4",fullname:"MYTUBE", views:"1.1k",time:"1 day"})
addVideoFeedToVideoCard2({id:"123456",thumbnail:"https://res.cloudinary.com/dt2ytxjlw/image/upload/c_thumb,w_200,g_face/v1721377204/kb8pxdjophogtklbc6rm.jpg",chanelLogo:"WIN_20240421_11_30_13_Pro.jpg",videoTitle:"subscription hello guys this the first video of this chanel.",url:"https://res.cloudinary.com/dt2ytxjlw/video/upload/v1721377929/bfaniljgjdyvfnldbkv2.mp4",fullname:"MYTUBE", views:"1.1k",time:"1 day"})
addVideoFeedToVideoCard2({id:"123456",thumbnail:"https://res.cloudinary.com/dt2ytxjlw/image/upload/c_thumb,w_200,g_face/v1721377204/kb8pxdjophogtklbc6rm.jpg",chanelLogo:"WIN_20240421_11_30_13_Pro.jpg",videoTitle:"subscription hello guys this the first video of this chanel.",url:"https://res.cloudinary.com/dt2ytxjlw/video/upload/v1721377929/bfaniljgjdyvfnldbkv2.mp4",fullname:"MYTUBE", views:"1.1k",time:"1 day"})

function allMyVideosAndShortsFetch(type){
    const form = {username:localStorage.getItem("username"),passward:localStorage.getItem("passward")}
        fetch(`https://998ee7f7-cfcc-4190-aa81-30a4f6f75f62-00-2ms17jin26ghp.pike.replit.dev/video/${type}`,{
           
            method:"POST",
            body:JSON.stringify(form)
        })
        .then((data)=> data.json())
        .then((data)=>{
            console.log(data)
            if(data["massage"] == "success"){
                allMyVideosList = data.allMyVideos;
                allMyVideosKey = data.allMyVideosKey;
                if(type == "gettingMyOwnVideo"){
                    for(let i =0;i< allMyVideosKey.length;i++){
                        addVideoFeedToVideoCard22(allMyVideosList[i])
                    }
                }
            }
            
        })////working
        .catch((err)=>{
            console.log(err)
        })   
        

}

//allMyVideosAndShortsFetch("gettingMyOwnVideo")