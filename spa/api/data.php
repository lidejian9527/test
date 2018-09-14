<?php 
    header('Content-Type:text/html;charset=utf-8');

    /*模拟数据*/
    $data = array(
        'thinkPad'=>array(
            'tag'=>'thinkPad',
            'list'=>array(
                array('name'=>'ThinkPad T480S超薄i7处理器','price'=>'10010'),
                array('name'=>'ThinkPad T480S超薄i5处理器','price'=>'10001'),
                array('name'=>'ThinkPad T480S超薄i3处理器','price'=>'10001'),
                array('name'=>'ThinkPad T480S超薄i1处理器','price'=>'10000')
            )
        ),
        'apple'=>array(
            'tag'=>'apple',
            'list'=>array(
                array('name'=>'apple T480S超薄i7处理器','price'=>'10010'),
                array('name'=>'apple T480S超薄i5处理器','price'=>'10001'),
                array('name'=>'apple T480S超薄i3处理器','price'=>'10001')
            )
        ),
        'dell'=>array(
            'tag'=>'dell',
            'list'=>array(
                array('name'=>'dell T480S超薄i7处理器','price'=>'10010'),
                array('name'=>'dell T480S超薄i5处理器','price'=>'10001'),
                array('name'=>'dell T480S超薄i3处理器','price'=>'10001'),
                array('name'=>'dell T480S超薄i1处理器','price'=>'10000')
            )
        ),
    );


    //根据索引获取数据
    //索引数据 tag 以get方式传递

    $tag = 'thinkPad';

    //array_key_exists 判断 某个数组 是否存在某一个key
    if(array_key_exists('tag',$_GET)){
        $tag = $_GET['tag'];
    }

    $returnData = $data[$tag];

    echo json_encode($returnData);
?>