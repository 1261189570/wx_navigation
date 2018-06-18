// pages/index/index.js
Page({
    /**
     * 页面的初始数据
     */
    data: {
        info:[
            [
                {
                    "img":"/images/1.jpg",
                    "name":"音乐系"
                },
                {
                    "img": "/images/1.jpg",
                    "name": "音乐系"
                },
                {
                    "img": "/images/1.jpg",
                    "name": "音乐系"
                },
                {
                    "img": "/images/1.jpg",
                    "name": "音乐系"
                }
            ],
            [
                {
                    "img": "/images/1.jpg",
                    "name": "音乐系"
                },
                {
                    "img": "/images/1.jpg",
                    "name": "音乐系"
                },
                {
                    "img": "/images/1.jpg",
                    "name": "音乐系"
                },
                {
                    "img": "/images/1.jpg",
                    "name": "更多"
                }
            ]
        ]
    },

    onJumpTap:function (e) {
        var name = e.currentTarget.dataset.name;
        console.log(name);
    }
})