function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg); //获取url中"?"符后的字符串并正则匹配
    var context = "";
    if (r != null)
        context = decodeURIComponent(r[2]);
    reg = null;
    r = null;
    return context == null || context == "" || context == "undefined" ? "" : context;
}

// 获取查询类型的中文名称
function check_type_name_zh(type_name){
    if(type_name=='CHECK_TYPE'){
        return "检查类型列表"
    }else if(type_name=='CHECK_LEN'){
        return "检查长度列表"
    }else if(type_name=='CHECK_VAL'){
        return "检查值列表"
    }else if(type_name=='CHECK_CHAR'){
        return "检查字符列表"
    }
    return "未定义"
}

function send($,url,data,success){
    // alert(data['data'] instanceof Object)
    console.log(data)
    if(data['data'] instanceof Object){
        data['data'] = JSON.stringify(data['data'])
    }
    console.log(data)
    $.ajax({
        type: "post",
        contentType: "application/json",
        dataType: 'json',
        data:JSON.stringify(data),
        url: url,
        headers:  {Authorization: "Bearer " + localStorage.getItem('token')},
        success: function (rdata, textStatus) {
            if(rdata['state'] == 'success'){
                success(rdata['message'])
            }else{
                layer.closeAll();
                layer.msg(rdata['message'])
            }
            
        },
        complete: function (XMLHttpRequest, textStatus) {
        },
        error: function (e) {
            alert("请先对服务端地址、认证token、认证key、aes_key、aes_iv进行设定")
            layer.closeAll();
            layer.msg(e);
            // layer.msg(123)
            
            
        }
    });
}
