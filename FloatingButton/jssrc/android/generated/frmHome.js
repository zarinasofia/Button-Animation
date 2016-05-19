function addWidgetsfrmHome() {
    frmHome.setDefaultUnit(kony.flex.DP);
    var flxImgs1 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "35%",
        "id": "flxImgs1",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox",
        "top": "0%",
        "width": "100%"
    }, {}, {});
    flxImgs1.setDefaultUnit(kony.flex.DP);
    var Image07c12fd711ad543 = new kony.ui.Image2({
        "height": "100%",
        "id": "Image07c12fd711ad543",
        "isVisible": true,
        "left": "0%",
        "skin": "slImage",
        "src": "download_3_.png",
        "top": "0.00%",
        "width": "64%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var Image0545b07b0b0db43 = new kony.ui.Image2({
        "height": "100%",
        "id": "Image0545b07b0b0db43",
        "isVisible": true,
        "left": "64%",
        "skin": "slImage",
        "src": "images_3_.png",
        "top": "0%",
        "width": "36%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxImgs1.add(
    Image07c12fd711ad543, Image0545b07b0b0db43);
    var flxImgs2 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "35%",
        "id": "flxImgs2",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox",
        "top": "35%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxImgs2.setDefaultUnit(kony.flex.DP);
    var Image09d666b2fefa940 = new kony.ui.Image2({
        "height": "100%",
        "id": "Image09d666b2fefa940",
        "isVisible": true,
        "left": "-0.03%",
        "skin": "slImage",
        "src": "images_1_.png",
        "top": "0.00%",
        "width": "40%"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var CopyImage0f8416377768445 = new kony.ui.Image2({
        "height": "100%",
        "id": "CopyImage0f8416377768445",
        "isVisible": true,
        "left": "40%",
        "skin": "slImage",
        "src": "images_2_.png",
        "top": "0%",
        "width": "60%"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxImgs2.add(
    Image09d666b2fefa940, CopyImage0f8416377768445);
    var flxImgs3 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "30%",
        "id": "flxImgs3",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox",
        "top": "70%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flxImgs3.setDefaultUnit(kony.flex.DP);
    var Image0021c2a15cbed4c = new kony.ui.Image2({
        "height": "100%",
        "id": "Image0021c2a15cbed4c",
        "isVisible": true,
        "left": "0%",
        "skin": "slImage",
        "src": "images.png",
        "top": "0%",
        "width": "100%"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxImgs3.add(
    Image0021c2a15cbed4c);
    var flxIcons = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "65%",
        "id": "flxIcons",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "80%",
        "skin": "slFbox",
        "top": "30%",
        "width": "18%",
        "zIndex": 1
    }, {}, {});
    flxIcons.setDefaultUnit(kony.flex.DP);
    var imgShare = new kony.ui.Image2({
        "height": "14%",
        "id": "imgShare",
        "isVisible": true,
        "left": "5%",
        "onTouchEnd": AS_Image_ac37104f19f64b66a71b5477025a52ed,
        "skin": "slImage",
        "src": "share.png",
        "top": "85%",
        "width": "84%",
        "zIndex": 20
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var imgLinkedIn = new kony.ui.Image2({
        "height": "15%",
        "id": "imgLinkedIn",
        "isVisible": true,
        "left": "0%",
        "onTouchEnd": AS_Image_902173e1daa94dd5b5fe3f4b958d504e,
        "skin": "slImage",
        "src": "linkedin_active.png",
        "top": "85%",
        "width": "100%"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var imgTwitter = new kony.ui.Image2({
        "height": "15%",
        "id": "imgTwitter",
        "isVisible": true,
        "left": "0%",
        "onTouchEnd": AS_Image_9a805958761849859428318ca2e81b51,
        "skin": "slImage",
        "src": "twitter_active.png",
        "top": "85%",
        "width": "100%"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var imgAmazon = new kony.ui.Image2({
        "height": "15%",
        "id": "imgAmazon",
        "isVisible": true,
        "left": "0%",
        "onTouchEnd": AS_Image_9166f653110e4f34aeeb2423e652c26d,
        "skin": "slImage",
        "src": "amazon_active.png",
        "top": "85%",
        "width": "100%"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var imgGoogle = new kony.ui.Image2({
        "height": "15%",
        "id": "imgGoogle",
        "isVisible": true,
        "left": "0%",
        "onTouchEnd": AS_Image_0edeba2cb87e4199b22a7aed561c092b,
        "skin": "slImage",
        "src": "facebook_active.png",
        "top": "85%",
        "width": "100%"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var imgFacebook = new kony.ui.Image2({
        "height": "15%",
        "id": "imgFacebook",
        "isVisible": true,
        "left": "0%",
        "onTouchEnd": AS_Image_3dc1d1217ed043a899a2ae5e3b9398e4,
        "skin": "slImage",
        "src": "google_active.png",
        "top": "85%",
        "width": "100%"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    flxIcons.add(
    imgShare, imgLinkedIn, imgTwitter, imgAmazon, imgGoogle, imgFacebook);
    frmHome.add(
    flxImgs1, flxImgs2, flxImgs3, flxIcons);
};

function frmHomeGlobals() {
    frmHome = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmHome,
        "enabledForIdleTimeout": false,
        "id": "frmHome",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": true,
        "skin": "CopyslForm0995264a5d16e4f"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "footerOverlap": false,
        "headerOverlap": false,
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarSkin": "slTitleBar",
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE
    });
    frmHome.info = {
        "kuid": "e1ea8388309f4acf81ab18ada841acb7"
    };
};