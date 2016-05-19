/*************************************************************************************
 * Function:animate()
 * Description: function for animating the buttons upwards and downwards.
 * Author: Kony
 *************************************************************************************/
var check = true;

function animate() {
    if (check === true) {
        check = false;
        rotateFlex();
        frmHome.imgLinkedIn.animate(
        kony.ui.createAnimation({
            100: {
                top: "0%",
                "stepConfig": {}
            }
        }), {
            delay: 0,
            fillMode: kony.anim.FILL_MODE_FORWARDS,
            duration: 0.1
        }, {
            animationEnd: function() {}
        });
        frmHome.imgTwitter.animate(
        kony.ui.createAnimation({
            100: {
                top: "17%",
                "stepConfig": {}
            }
        }), {
            delay: 0,
            fillMode: kony.anim.FILL_MODE_FORWARDS,
            duration: 0.1
        }, {
            animationEnd: function() {}
        });
        frmHome.imgAmazon.animate(
        kony.ui.createAnimation({
            100: {
                top: "34%",
                "stepConfig": {}
            }
        }), {
            delay: 0,
            fillMode: kony.anim.FILL_MODE_FORWARDS,
            duration: 0.1
        }, {
            animationEnd: function() {}
        });
        frmHome.imgFacebook.animate(
        kony.ui.createAnimation({
            100: {
                top: "51%",
                "stepConfig": {}
            }
        }), {
            delay: 0,
            fillMode: kony.anim.FILL_MODE_FORWARDS,
            duration: 0.1
        }, {
            animationEnd: function() {}
        });
        frmHome.imgGoogle.animate(
        kony.ui.createAnimation({
            100: {
                top: "68%",
                "stepConfig": {}
            }
        }), {
            delay: 0,
            fillMode: kony.anim.FILL_MODE_FORWARDS,
            duration: 0
        }, {
            animationEnd: function() {}
        });
    } else {
        check = true;
        rotateFlex();
        //frmHome.flxIcons.imgShare.src="close.png";
        frmHome.imgLinkedIn.animate(
        kony.ui.createAnimation({
            100: {
                top: "85%",
                "stepConfig": {}
            }
        }), {
            delay: 0,
            fillMode: kony.anim.FILL_MODE_FORWARDS,
            duration: 0.1
        }, {
            animationEnd: function() {}
        });
        frmHome.imgTwitter.animate(
        kony.ui.createAnimation({
            100: {
                top: "85%",
                "stepConfig": {}
            }
        }), {
            delay: 0,
            fillMode: kony.anim.FILL_MODE_FORWARDS,
            duration: 0.2
        }, {
            animationEnd: function() {}
        });
        frmHome.imgAmazon.animate(
        kony.ui.createAnimation({
            100: {
                top: "85%",
                "stepConfig": {}
            }
        }), {
            delay: 0,
            fillMode: kony.anim.FILL_MODE_FORWARDS,
            duration: 0.3
        }, {
            animationEnd: function() {}
        });
        frmHome.imgGoogle.animate(
        kony.ui.createAnimation({
            100: {
                top: "85%",
                "stepConfig": {}
            }
        }), {
            delay: 0,
            fillMode: kony.anim.FILL_MODE_FORWARDS,
            duration: 0.4
        }, {
            animationEnd: function() {}
        });
        frmHome.imgFacebook.animate(
        kony.ui.createAnimation({
            100: {
                top: "85%",
                "stepConfig": {}
            }
        }), {
            delay: 0,
            fillMode: kony.anim.FILL_MODE_FORWARDS,
            duration: 0.5
        }, {
            animationEnd: function() {}
        });
    }
}
/*************************************************************************************
 * Function:rotateFlex()
 * Description: function for rotating the share button and changing the share icon to close icon.
 * Author: Kony
 *************************************************************************************/
var check1;

function rotateFlex() {
    if (check1 === true) {
        check1 = false;
        var trans100 = kony.ui.makeAffineTransform();
        trans100.rotate(0);
        frmHome["imgShare"].animate(
        kony.ui.createAnimation({
            "100": {
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                },
                "transform": trans100
            }
        }), {
            "delay": 0,
            //  "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.25
        }, {
            animationEnd: function image() {
                frmHome.flxIcons.imgShare.src = "share.png";
            }
        });
    } else {
        check1 = true;
        var trans = kony.ui.makeAffineTransform();
        trans.rotate(-45);
        frmHome["imgShare"].animate(
        kony.ui.createAnimation({
            "100": {
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                },
                "transform": trans
            }
        }), {
            "delay": 0,
            //  "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.25
        }, {
            animationEnd: function image() {
                frmHome.flxIcons.imgShare.src = "close.png";
            }
        });
    }
}