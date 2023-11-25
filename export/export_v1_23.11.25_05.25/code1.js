gdjs.JJCode = {};
gdjs.JJCode.GDNewTextObjects1= [];
gdjs.JJCode.GDNewTextObjects2= [];
gdjs.JJCode.GDNewBitmapTextObjects1= [];
gdjs.JJCode.GDNewBitmapTextObjects2= [];
gdjs.JJCode.GDNewBBTextObjects1= [];
gdjs.JJCode.GDNewBBTextObjects2= [];
gdjs.JJCode.GDJouerObjects1= [];
gdjs.JJCode.GDJouerObjects2= [];
gdjs.JJCode.GDMeuble1Objects1= [];
gdjs.JJCode.GDMeuble1Objects2= [];
gdjs.JJCode.GDDrawerObjects1= [];
gdjs.JJCode.GDDrawerObjects2= [];
gdjs.JJCode.GDCanap_95233Objects1= [];
gdjs.JJCode.GDCanap_95233Objects2= [];
gdjs.JJCode.GDTableObjects1= [];
gdjs.JJCode.GDTableObjects2= [];
gdjs.JJCode.GDBureauObjects1= [];
gdjs.JJCode.GDBureauObjects2= [];
gdjs.JJCode.GDChaiseObjects1= [];
gdjs.JJCode.GDChaiseObjects2= [];
gdjs.JJCode.GDPlanteObjects1= [];
gdjs.JJCode.GDPlanteObjects2= [];
gdjs.JJCode.GDPianoObjects1= [];
gdjs.JJCode.GDPianoObjects2= [];
gdjs.JJCode.GDLivreObjects1= [];
gdjs.JJCode.GDLivreObjects2= [];
gdjs.JJCode.GDT_95233l_95233Objects1= [];
gdjs.JJCode.GDT_95233l_95233Objects2= [];
gdjs.JJCode.GDTapisObjects1= [];
gdjs.JJCode.GDTapisObjects2= [];
gdjs.JJCode.GDNewSprite2Objects1= [];
gdjs.JJCode.GDNewSprite2Objects2= [];


gdjs.JJCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Jouer"), gdjs.JJCode.GDJouerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JJCode.GDJouerObjects1.length;i<l;++i) {
    if ( gdjs.JJCode.GDJouerObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.JJCode.GDJouerObjects1[k] = gdjs.JJCode.GDJouerObjects1[i];
        ++k;
    }
}
gdjs.JJCode.GDJouerObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Principal", false);
}}

}


};

gdjs.JJCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.JJCode.GDNewTextObjects1.length = 0;
gdjs.JJCode.GDNewTextObjects2.length = 0;
gdjs.JJCode.GDNewBitmapTextObjects1.length = 0;
gdjs.JJCode.GDNewBitmapTextObjects2.length = 0;
gdjs.JJCode.GDNewBBTextObjects1.length = 0;
gdjs.JJCode.GDNewBBTextObjects2.length = 0;
gdjs.JJCode.GDJouerObjects1.length = 0;
gdjs.JJCode.GDJouerObjects2.length = 0;
gdjs.JJCode.GDMeuble1Objects1.length = 0;
gdjs.JJCode.GDMeuble1Objects2.length = 0;
gdjs.JJCode.GDDrawerObjects1.length = 0;
gdjs.JJCode.GDDrawerObjects2.length = 0;
gdjs.JJCode.GDCanap_95233Objects1.length = 0;
gdjs.JJCode.GDCanap_95233Objects2.length = 0;
gdjs.JJCode.GDTableObjects1.length = 0;
gdjs.JJCode.GDTableObjects2.length = 0;
gdjs.JJCode.GDBureauObjects1.length = 0;
gdjs.JJCode.GDBureauObjects2.length = 0;
gdjs.JJCode.GDChaiseObjects1.length = 0;
gdjs.JJCode.GDChaiseObjects2.length = 0;
gdjs.JJCode.GDPlanteObjects1.length = 0;
gdjs.JJCode.GDPlanteObjects2.length = 0;
gdjs.JJCode.GDPianoObjects1.length = 0;
gdjs.JJCode.GDPianoObjects2.length = 0;
gdjs.JJCode.GDLivreObjects1.length = 0;
gdjs.JJCode.GDLivreObjects2.length = 0;
gdjs.JJCode.GDT_95233l_95233Objects1.length = 0;
gdjs.JJCode.GDT_95233l_95233Objects2.length = 0;
gdjs.JJCode.GDTapisObjects1.length = 0;
gdjs.JJCode.GDTapisObjects2.length = 0;
gdjs.JJCode.GDNewSprite2Objects1.length = 0;
gdjs.JJCode.GDNewSprite2Objects2.length = 0;

gdjs.JJCode.eventsList0(runtimeScene);

return;

}

gdjs['JJCode'] = gdjs.JJCode;
