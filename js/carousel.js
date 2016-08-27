window.onload = function() {
    //轮播初始化
    var lunbo = document.getElementById('content');
    var imgs = lunbo.getElementsByTagName('img');
    var uls = lunbo.getElementsByTagName('ul');
    var lis = lunbo.getElementsByTagName('li');
    //初始状态下，一个圆圈为高亮模式
    lis[0].style.fontSize = '26px';
    lis[0].style.color = '#fff';
    //定义一个全局变量，用来进行自动轮播图片顺序的变化
    var pic_index = 1;
    //自动轮播
    var pic_time = setInterval(autobofang, 3000);

    function autobofang() {

        if (pic_index >= lis.length) {
            pic_index = 0;
        }

        change1(pic_index);
        pic_index++;
    }

    function change1(index) {
        //让所有图片都不显示，所有圆圈都为普通样式    

        for (var j = 0; j < imgs.length; j++) {
            imgs[j].style.display = 'none';
            lis[j].style.fontSize = '24px';
            lis[j].style.color = '#999';
        }

        //让选中的索引的图片显示，对应的圆圈高亮  

        imgs[index].style.display = 'block';
        lis[index].style.fontSize = '26px';
        lis[index].style.color = '#fff';

        //鼠标移入ul标签，自动播放图片暂停

        uls[0].addEventListener("mouseenter", pause, false);

        //鼠标移出ul标签，自动播放图片继续

        uls[0].addEventListener("mouseleave", go, false);

    }

    //自动播放暂停函数

    function pause(event) {
        var event = event || window.event;
        var target = event.target || event.srcElement;
        switch (target.id) {
            case "pic1":

                clearInterval(pic_time);


                break;
            case "pic2":

                clearInterval(pic_time);


                break;
            case "pic3":

                clearInterval(pic_time);


                break;
        }

    }

    //自动播放图片继续函数

    function go(event) {
        var event = event || window.event;
        var target = event.target || event.srcElement;
        var children = target.parentNode.children;
        switch (target.id) {
            case "pic1":

                pic_index = 1;

                setInterval(autobofang, 3000);

                break;
            case "pic2":

                pic_index = 2;

                setInterval(autobofang, 3000);

                break;
            case "pic3":

                pic_index = 3;

                setInterval(autobofang, 3000);

                break;
        }

    }
    /* 问题：当鼠标第一次移入ul标签时，正确，
       但是随着运行，轮播图片的变化速度非常快，而且这时点击ul标签已经不起作用了
     */

    //手动轮播
    for (var i = 0; i < lis.length; i++) {
        lis[i].addEventListener("mouseover", change, false);

    }

    function change(event) {

        var event = event || window.event;
        var target = event.target || event.srcElement;
        var children = target.parentNode.children;
        for (var i = 0; i < children.length; i++) {
            if (target == children[i]) {
                for (var j = 0; j < imgs.length; j++) {
                    imgs[j].style.display = 'none';
                    lis[j].style.fontSize = '24px';
                    lis[j].style.color = '#999';
                }
                imgs[i].style.display = 'block';
                lis[i].style.fontSize = '26px';
                lis[i].style.color = '#fff';

            }


        }
    }
}
