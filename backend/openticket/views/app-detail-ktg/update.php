<?php

use yii\helpers\Html;

/* @var $this yii\web\View */
/* @var $model backend\openticket\models\AppDetailKtg */

$this->title = 'Update App Detail Ktg: ' . $model->ID;
$this->params['breadcrumbs'][] = ['label' => 'App Detail Ktgs', 'url' => ['index']];
$this->params['breadcrumbs'][] = ['label' => $model->ID, 'url' => ['view', 'id' => $model->ID]];
$this->params['breadcrumbs'][] = 'Update';
?>
<div class="app-detail-ktg-update">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
