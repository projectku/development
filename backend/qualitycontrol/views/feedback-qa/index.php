<?php

use yii\helpers\Html;
use kartik\grid\GridView;
use yii\web\View;
use yii\helpers\Url;
$this->registerJs($this->render('modal_feedback.js'),View::POS_READY);
echo $this->render('button_feedback');
echo $this->render('modal_feedback');
/* @var $this yii\web\View */
/* @var $searchModel backend\qualitycontrol\models\FeedbackQaSearch */
/* @var $dataProvider yii\data\ActiveDataProvider */

$this->title = 'Feedback Qas';
$this->params['breadcrumbs'][] = $this->title;
if (!empty($dataProviderJobdesk)) {
    $detailview=$this->render('detail_view',[
        'dataProviderJobdesk' => $dataProviderJobdesk,
    ]);
    }else{
        $detailview='';
    }
?>
<div class="feedback-qa-index">

   <h1><?= Html::encode($this->title) ?></h1>
    <?php // echo $this->render('_search', ['model' => $searchModel]); ?>
    <?= $detailview ?>
    <div class="text-right">
        <p>
            <?php
        $title= Yii::t('app','');
        $url = Url::toRoute(['/qualitycontrol/feedback-qa/pdf?id='.$dataProviderJobdesk['ID']]);
        $options1 = [
                    'id'=>'pdf',
                    'class'=>"btn btn-xs",
                    'title'=>'Print PDF',
                    'target' => '_blank',	
        ];
        $icon1 = '<span class="fa-stack fa-lg text-left">
                    <b class="fa fa-circle fa-stack-2x" style="color:red"></b>
                    <b class="fa fa fa fa-file-pdf-o fa-stack-1x" style="color:white"></b>
                    </span>
                    ';
                    $label1 = $icon1.' '.$title ;
                    echo $content = Html::a($label1,$url,$options1); ?>
            <?= tombolKomen($dataProviderJobdesk) ?>
            <?= tombolCloseCase($dataProviderJobdesk) ?>
        </p>
    </div>

    <?php 
$user = (empty(Yii::$app->user->identity->id)) ? '' : Yii::$app->user->identity->id;
$gvAttProdakHargaItem=[
    [
        'class'=>'kartik\grid\SerialColumn',
        'contentOptions'=>['class'=>'kartik-sheet-style'],
        'width'=>'10px',
        'header'=>'No.',
    ],
    [
        'attribute'=>'USER_NM',
        'label'=>'USER',
        'filterType'=>true,
        'hAlign'=>'left',
        'vAlign'=>'middle',
        'format'=>'raw',		
    ],
    [
        'attribute'=>'DESKRIPSI',
        'label'=>'DESKRIPSI',
        'filterType'=>true,
        'hAlign'=>'left',
        'vAlign'=>'middle',
        'format'=>'html',		
    ],
]; 
echo $gvAllProdakHarga=GridView::widget([
    'id'=>'gv-app-komen',
    'dataProvider' => $dataProvider,
    'filterModel' => $searchModel,
    'columns'=>$gvAttProdakHargaItem,				
    'pjax'=>true,
    'pjaxSettings'=>[
        'options'=>[
            'enablePushState'=>false,
            'id'=>'gv-app-komen',
        ],						  
    ],
    'hover'=>true,
    'responsive'=>true,
    'responsiveWrap'=>true,
    'bordered'=>true,
    'striped'=>true,
    'autoXlFormat'=>true,
    'export' => false,
    'panel'=>[''],
    'toolbar' => false,
    'panel' => [
        'type'=>'success',
        'before'=>false,
        'showFooter'=>false,
    ],
]); ?>
</div>
