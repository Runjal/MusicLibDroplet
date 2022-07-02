const express=require("express");

const router=express.Router();

const{getBookmarkData,getUserById,resolvemedia, getUser,getAllCategoryProducts,getProductById,getFile,savePlayList,getActiveMusicArray, getIndexPageData}=require("../controllers/userController")
const {isSignedIn,isAuthenticated}=require("../controllers/authController")
const {getAllCategory ,getCategoryById} =require("../controllers/adminController")

router.param("userId",getUserById)
router.param("categoryId",getCategoryById)
router.param("productId",getProductById)

router.get("/user/:userId",isSignedIn,isAuthenticated,getUser)
router.get("/user/media/getIndexPageData",getIndexPageData);
router.get("/user/media/resolvemedia",resolvemedia);
//router.get("/user/media/getIndexMediaData",getIndexMediaData);
router.get("/user/getactivemusicarray/:userId",isSignedIn,isAuthenticated,getActiveMusicArray)
//router.get("/user/getmedia/:userId",isSignedIn,isAuthenticated,getactiveMedia)
router.get("/user/getcategory/:userId",isSignedIn,isAuthenticated,getAllCategory);
router.post("/user/sendbookmark/:userId",isSignedIn,isAuthenticated,getBookmarkData)
router.get("/user/:userId/:categoryId", isSignedIn,isAuthenticated,getAllCategoryProducts)

router.get("/user/getproduct/:userId/:productId",getFile)

router.patch("/user/savedata/:userId/:productId",isSignedIn,isAuthenticated,savePlayList)

//router.get("/user/media/getImage",getImage);
//router.get("/user/media/getVedio",getVedio);
//router.get("/user/media/getAudio",getAudio);



//do come here later to add lastactvity route
//router.post("/user/:userId/activeplay")



module.exports=router;