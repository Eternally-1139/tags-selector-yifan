/*
* create by yifan
* */


/*
* 全局变量
* */
var map = new Map();//存储不同类型需求的map数组
var map2 = {};//存储函数内部自增值的map数组

/*
* 初始化选择器属性
* @parameter name string 选择器名称
* @parameter number int 选择器限制个数
* */
function initSelector(name,number) {
    if(name!=""&&number!=""){
        map.put(name,number);
        if(!map2[name]){
            map2[name]=0;//初始化自增值为0
        }
        alert("初始化成功!");
    }
}

/*
* 选择目标的值
* @parameter select_number int 目标编号
* @parameter select_value string 目标的值
* @parameter name string 选择器名称
* */
function objectSelect(select_number,select_value,name) {
    var maxNum = map.get(name);
    if(maxNum){
        var content = '<div class="tags"'+'id='+select_number+name+'>' + select_value + '&nbsp;'+'<span onclick=\'removeTags('+select_number+',"'+name+'")\' class="closeTags">&times;</span>'+'</div>';
        if (map2[name] < maxNum) {
            //saveTags.push(select_value);
            $("#tags_space_" + name).append(content);
            //alert(saveTags[map2[name]]);
            $('#'+'tags_'+name+'_'+select_number).css("display","none");
            $('#'+'hidden_'+name+'_'+select_number).css("display","");
            addKey(name);
        } else {
            alert("最大限定：" + maxNum);
        }
    }else{
        alert("请先初始化选择器!");
    }

}
/*
* 删除指定标签
* @parameter select_number int 要删除的编号
* @parameter name string 不同的选择器名称
* */
function removeTags(select_number,name) {
    $('#'+select_number+name).remove();
    $('#'+'tags_'+name+'_'+select_number).css("display","");
    $('#'+'hidden_'+name+'_'+select_number).css("display","none");
    cutKey(name);
}

//数组方法
Array.prototype.indexOf = function(val) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] == val) return i;
    }
    return -1;
};

Array.prototype.remove = function(val) {
    var index = this.indexOf(val);
    if (index > -1) {
        this.splice(index, 1);
    }
};

//map方法
function Map(){
    this.container = new Object();
}


Map.prototype.put = function(key, value){
    this.container[key] = value;
};


Map.prototype.get = function(key){
    return this.container[key];
};


Map.prototype.keySet = function() {
    var keyset = new Array();
    var count = 0;
    for (var key in this.container) {
// 跳过object的extend函数
        if (key == 'extend') {
            continue;
        }
        keyset[count] = key;
        count++;
    }
    return keyset;
};


Map.prototype.size = function() {
    var count = 0;
    for (var key in this.container) {
// 跳过object的extend函数
        if (key == 'extend'){
            continue;
        }
        count++;
    }
    return count;
};


Map.prototype.remove = function(key) {
    delete this.container[key];
};


Map.prototype.toString = function(){
    var str = "";
    for (var i = 0, keys = this.keySet(), len = keys.length; i < len; i++) {
        str = str + keys[i] + "=" + this.container[keys[i]] + ";\n";
    }
    return str;
};

//map2值自增
function addKey(key) {
    map2[key]++;
}
//map2值自减
function cutKey(key) {
    map2[key]--;
}