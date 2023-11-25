gdjs.PrincipalCode = {};
gdjs.PrincipalCode.GDBord_9595apparts2Objects1= [];
gdjs.PrincipalCode.GDBord_9595apparts2Objects2= [];
gdjs.PrincipalCode.GDBord_9595apparts2Objects3= [];
gdjs.PrincipalCode.GDNewSpriteObjects1= [];
gdjs.PrincipalCode.GDNewSpriteObjects2= [];
gdjs.PrincipalCode.GDNewSpriteObjects3= [];
gdjs.PrincipalCode.GDNewBBTextObjects1= [];
gdjs.PrincipalCode.GDNewBBTextObjects2= [];
gdjs.PrincipalCode.GDNewBBTextObjects3= [];
gdjs.PrincipalCode.GDMeuble1Objects1= [];
gdjs.PrincipalCode.GDMeuble1Objects2= [];
gdjs.PrincipalCode.GDMeuble1Objects3= [];
gdjs.PrincipalCode.GDDrawerObjects1= [];
gdjs.PrincipalCode.GDDrawerObjects2= [];
gdjs.PrincipalCode.GDDrawerObjects3= [];
gdjs.PrincipalCode.GDCanap_95233Objects1= [];
gdjs.PrincipalCode.GDCanap_95233Objects2= [];
gdjs.PrincipalCode.GDCanap_95233Objects3= [];
gdjs.PrincipalCode.GDTableObjects1= [];
gdjs.PrincipalCode.GDTableObjects2= [];
gdjs.PrincipalCode.GDTableObjects3= [];
gdjs.PrincipalCode.GDBureauObjects1= [];
gdjs.PrincipalCode.GDBureauObjects2= [];
gdjs.PrincipalCode.GDBureauObjects3= [];
gdjs.PrincipalCode.GDChaiseObjects1= [];
gdjs.PrincipalCode.GDChaiseObjects2= [];
gdjs.PrincipalCode.GDChaiseObjects3= [];
gdjs.PrincipalCode.GDPlanteObjects1= [];
gdjs.PrincipalCode.GDPlanteObjects2= [];
gdjs.PrincipalCode.GDPlanteObjects3= [];
gdjs.PrincipalCode.GDPianoObjects1= [];
gdjs.PrincipalCode.GDPianoObjects2= [];
gdjs.PrincipalCode.GDPianoObjects3= [];
gdjs.PrincipalCode.GDLivreObjects1= [];
gdjs.PrincipalCode.GDLivreObjects2= [];
gdjs.PrincipalCode.GDLivreObjects3= [];
gdjs.PrincipalCode.GDT_95233l_95233Objects1= [];
gdjs.PrincipalCode.GDT_95233l_95233Objects2= [];
gdjs.PrincipalCode.GDT_95233l_95233Objects3= [];
gdjs.PrincipalCode.GDTapisObjects1= [];
gdjs.PrincipalCode.GDTapisObjects2= [];
gdjs.PrincipalCode.GDTapisObjects3= [];


gdjs.PrincipalCode.mapOfGDgdjs_9546PrincipalCode_9546GDCanap_959595233Objects1ObjectsGDgdjs_9546PrincipalCode_9546GDTableObjects1ObjectsGDgdjs_9546PrincipalCode_9546GDChaiseObjects1ObjectsGDgdjs_9546PrincipalCode_9546GDBureauObjects1ObjectsGDgdjs_9546PrincipalCode_9546GDPianoObjects1ObjectsGDgdjs_9546PrincipalCode_9546GDPlanteObjects1ObjectsGDgdjs_9546PrincipalCode_9546GDLivreObjects1ObjectsGDgdjs_9546PrincipalCode_9546GDT_959595233l_959595233Objects1ObjectsGDgdjs_9546PrincipalCode_9546GDTapisObjects1Objects = Hashtable.newFrom({"Canapé": gdjs.PrincipalCode.GDCanap_95233Objects1, "Table": gdjs.PrincipalCode.GDTableObjects1, "Chaise": gdjs.PrincipalCode.GDChaiseObjects1, "Bureau": gdjs.PrincipalCode.GDBureauObjects1, "Piano": gdjs.PrincipalCode.GDPianoObjects1, "Plante": gdjs.PrincipalCode.GDPlanteObjects1, "Livre": gdjs.PrincipalCode.GDLivreObjects1, "Télé": gdjs.PrincipalCode.GDT_95233l_95233Objects1, "Tapis": gdjs.PrincipalCode.GDTapisObjects1});
gdjs.PrincipalCode.asyncCallback9661316 = function (runtimeScene, asyncObjectsList) {
}
gdjs.PrincipalCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.PrincipalCode.asyncCallback9661316(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.PrincipalCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Canapé"), gdjs.PrincipalCode.GDCanap_95233Objects2);
{for(var i = 0, len = gdjs.PrincipalCode.GDCanap_95233Objects2.length ;i < len;++i) {
    gdjs.PrincipalCode.GDCanap_95233Objects2[i].getBehavior("Meuble").Activer_si_cliqu_233(runtimeScene.getScene().getVariables().getFromIndex(0), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.debuggerTools.log("Sélection PR : " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))), "", "");
}
{ //Subevents
gdjs.PrincipalCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.PrincipalCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.inventory.has(runtimeScene, "ANNULER", "ANNULER");
if (isConditionTrue_0) {

{ //Subevents
gdjs.PrincipalCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.PrincipalCode.mapOfGDgdjs_9546PrincipalCode_9546GDCanap_959595233Objects2Objects = Hashtable.newFrom({"Canapé": gdjs.PrincipalCode.GDCanap_95233Objects2});
gdjs.PrincipalCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "r");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9664644);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.PrincipalCode.GDCanap_95233Objects2 */
{for(var i = 0, len = gdjs.PrincipalCode.GDCanap_95233Objects2.length ;i < len;++i) {
    gdjs.PrincipalCode.GDCanap_95233Objects2[i].setAngle(gdjs.PrincipalCode.GDCanap_95233Objects2[i].getAngle() + (90));
}
}}

}


};gdjs.PrincipalCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Canapé"), gdjs.PrincipalCode.GDCanap_95233Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("draggingNow"), false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Meuble__est_cliqu_233.func(runtimeScene, gdjs.PrincipalCode.mapOfGDgdjs_9546PrincipalCode_9546GDCanap_959595233Objects2Objects, "Déplaçable", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9662572);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("draggingNow"), true);
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Canapé"), gdjs.PrincipalCode.GDCanap_95233Objects2);
{for(var i = 0, len = gdjs.PrincipalCode.GDCanap_95233Objects2.length ;i < len;++i) {
    gdjs.PrincipalCode.GDCanap_95233Objects2[i].getBehavior("Effect").enableEffect("Contour", true);
}
}
{ //Subevents
gdjs.PrincipalCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Canapé"), gdjs.PrincipalCode.GDCanap_95233Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PrincipalCode.GDCanap_95233Objects2.length;i<l;++i) {
    if ( gdjs.PrincipalCode.GDCanap_95233Objects2[i].getBehavior("Déplaçable").wasJustDropped() ) {
        isConditionTrue_0 = true;
        gdjs.PrincipalCode.GDCanap_95233Objects2[k] = gdjs.PrincipalCode.GDCanap_95233Objects2[i];
        ++k;
    }
}
gdjs.PrincipalCode.GDCanap_95233Objects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("draggingNow"), false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 1);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Canapé"), gdjs.PrincipalCode.GDCanap_95233Objects1);
{for(var i = 0, len = gdjs.PrincipalCode.GDCanap_95233Objects1.length ;i < len;++i) {
    gdjs.PrincipalCode.GDCanap_95233Objects1[i].getBehavior("Effect").enableEffect("Contour", false);
}
}}

}


};gdjs.PrincipalCode.mapOfGDgdjs_9546PrincipalCode_9546GDTableObjects2Objects = Hashtable.newFrom({"Table": gdjs.PrincipalCode.GDTableObjects2});
gdjs.PrincipalCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "r");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9669716);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.PrincipalCode.GDTableObjects2 */
{for(var i = 0, len = gdjs.PrincipalCode.GDTableObjects2.length ;i < len;++i) {
    gdjs.PrincipalCode.GDTableObjects2[i].setAngle(gdjs.PrincipalCode.GDTableObjects2[i].getAngle() + (90));
}
}}

}


};gdjs.PrincipalCode.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Table"), gdjs.PrincipalCode.GDTableObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("draggingNow"), false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Meuble__est_cliqu_233.func(runtimeScene, gdjs.PrincipalCode.mapOfGDgdjs_9546PrincipalCode_9546GDTableObjects2Objects, "Déplaçable", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9667172);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("draggingNow"), true);
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(2);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 2;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Table"), gdjs.PrincipalCode.GDTableObjects2);
{for(var i = 0, len = gdjs.PrincipalCode.GDTableObjects2.length ;i < len;++i) {
    gdjs.PrincipalCode.GDTableObjects2[i].getBehavior("Effect").enableEffect("Contour", true);
}
}
{ //Subevents
gdjs.PrincipalCode.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Table"), gdjs.PrincipalCode.GDTableObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PrincipalCode.GDTableObjects2.length;i<l;++i) {
    if ( gdjs.PrincipalCode.GDTableObjects2[i].getBehavior("Déplaçable").wasJustDropped() ) {
        isConditionTrue_0 = true;
        gdjs.PrincipalCode.GDTableObjects2[k] = gdjs.PrincipalCode.GDTableObjects2[i];
        ++k;
    }
}
gdjs.PrincipalCode.GDTableObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("draggingNow"), false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 2);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Table"), gdjs.PrincipalCode.GDTableObjects1);
{for(var i = 0, len = gdjs.PrincipalCode.GDTableObjects1.length ;i < len;++i) {
    gdjs.PrincipalCode.GDTableObjects1[i].getBehavior("Effect").enableEffect("Contour", false);
}
}}

}


};gdjs.PrincipalCode.mapOfGDgdjs_9546PrincipalCode_9546GDBureauObjects2Objects = Hashtable.newFrom({"Bureau": gdjs.PrincipalCode.GDBureauObjects2});
gdjs.PrincipalCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "r");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9674788);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.PrincipalCode.GDBureauObjects2 */
{for(var i = 0, len = gdjs.PrincipalCode.GDBureauObjects2.length ;i < len;++i) {
    gdjs.PrincipalCode.GDBureauObjects2[i].setAngle(gdjs.PrincipalCode.GDBureauObjects2[i].getAngle() + (90));
}
}}

}


};gdjs.PrincipalCode.eventsList8 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Bureau"), gdjs.PrincipalCode.GDBureauObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("draggingNow"), false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Meuble__est_cliqu_233.func(runtimeScene, gdjs.PrincipalCode.mapOfGDgdjs_9546PrincipalCode_9546GDBureauObjects2Objects, "Déplaçable", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9672244);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("draggingNow"), true);
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(3);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 3;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Bureau"), gdjs.PrincipalCode.GDBureauObjects2);
{for(var i = 0, len = gdjs.PrincipalCode.GDBureauObjects2.length ;i < len;++i) {
    gdjs.PrincipalCode.GDBureauObjects2[i].getBehavior("Effect").enableEffect("Contour", true);
}
}
{ //Subevents
gdjs.PrincipalCode.eventsList7(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bureau"), gdjs.PrincipalCode.GDBureauObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PrincipalCode.GDBureauObjects2.length;i<l;++i) {
    if ( gdjs.PrincipalCode.GDBureauObjects2[i].getBehavior("Déplaçable").wasJustDropped() ) {
        isConditionTrue_0 = true;
        gdjs.PrincipalCode.GDBureauObjects2[k] = gdjs.PrincipalCode.GDBureauObjects2[i];
        ++k;
    }
}
gdjs.PrincipalCode.GDBureauObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("draggingNow"), false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 3);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Bureau"), gdjs.PrincipalCode.GDBureauObjects1);
{for(var i = 0, len = gdjs.PrincipalCode.GDBureauObjects1.length ;i < len;++i) {
    gdjs.PrincipalCode.GDBureauObjects1[i].getBehavior("Effect").enableEffect("Contour", false);
}
}}

}


};gdjs.PrincipalCode.mapOfGDgdjs_9546PrincipalCode_9546GDChaiseObjects2Objects = Hashtable.newFrom({"Chaise": gdjs.PrincipalCode.GDChaiseObjects2});
gdjs.PrincipalCode.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "r");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9679860);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.PrincipalCode.GDChaiseObjects2 */
{for(var i = 0, len = gdjs.PrincipalCode.GDChaiseObjects2.length ;i < len;++i) {
    gdjs.PrincipalCode.GDChaiseObjects2[i].setAngle(gdjs.PrincipalCode.GDChaiseObjects2[i].getAngle() + (90));
}
}}

}


};gdjs.PrincipalCode.eventsList10 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Chaise"), gdjs.PrincipalCode.GDChaiseObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("draggingNow"), false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Meuble__est_cliqu_233.func(runtimeScene, gdjs.PrincipalCode.mapOfGDgdjs_9546PrincipalCode_9546GDChaiseObjects2Objects, "Déplaçable", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9677316);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("draggingNow"), true);
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(4);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 4;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Chaise"), gdjs.PrincipalCode.GDChaiseObjects2);
{for(var i = 0, len = gdjs.PrincipalCode.GDChaiseObjects2.length ;i < len;++i) {
    gdjs.PrincipalCode.GDChaiseObjects2[i].getBehavior("Effect").enableEffect("Contour", true);
}
}
{ //Subevents
gdjs.PrincipalCode.eventsList9(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Chaise"), gdjs.PrincipalCode.GDChaiseObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PrincipalCode.GDChaiseObjects2.length;i<l;++i) {
    if ( gdjs.PrincipalCode.GDChaiseObjects2[i].getBehavior("Déplaçable").wasJustDropped() ) {
        isConditionTrue_0 = true;
        gdjs.PrincipalCode.GDChaiseObjects2[k] = gdjs.PrincipalCode.GDChaiseObjects2[i];
        ++k;
    }
}
gdjs.PrincipalCode.GDChaiseObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("draggingNow"), false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 4);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Chaise"), gdjs.PrincipalCode.GDChaiseObjects1);
{for(var i = 0, len = gdjs.PrincipalCode.GDChaiseObjects1.length ;i < len;++i) {
    gdjs.PrincipalCode.GDChaiseObjects1[i].getBehavior("Effect").enableEffect("Contour", false);
}
}}

}


};gdjs.PrincipalCode.mapOfGDgdjs_9546PrincipalCode_9546GDPlanteObjects2Objects = Hashtable.newFrom({"Plante": gdjs.PrincipalCode.GDPlanteObjects2});
gdjs.PrincipalCode.eventsList11 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "r");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9685116);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.PrincipalCode.GDPlanteObjects2 */
{for(var i = 0, len = gdjs.PrincipalCode.GDPlanteObjects2.length ;i < len;++i) {
    gdjs.PrincipalCode.GDPlanteObjects2[i].setAngle(gdjs.PrincipalCode.GDPlanteObjects2[i].getAngle() + (90));
}
}}

}


};gdjs.PrincipalCode.eventsList12 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Plante"), gdjs.PrincipalCode.GDPlanteObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("draggingNow"), false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Meuble__est_cliqu_233.func(runtimeScene, gdjs.PrincipalCode.mapOfGDgdjs_9546PrincipalCode_9546GDPlanteObjects2Objects, "Déplaçable", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9682388);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("draggingNow"), true);
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(5);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 5;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Plante"), gdjs.PrincipalCode.GDPlanteObjects2);
{for(var i = 0, len = gdjs.PrincipalCode.GDPlanteObjects2.length ;i < len;++i) {
    gdjs.PrincipalCode.GDPlanteObjects2[i].getBehavior("Effect").enableEffect("Contour", true);
}
}
{ //Subevents
gdjs.PrincipalCode.eventsList11(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Plante"), gdjs.PrincipalCode.GDPlanteObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PrincipalCode.GDPlanteObjects2.length;i<l;++i) {
    if ( gdjs.PrincipalCode.GDPlanteObjects2[i].getBehavior("Déplaçable").wasJustDropped() ) {
        isConditionTrue_0 = true;
        gdjs.PrincipalCode.GDPlanteObjects2[k] = gdjs.PrincipalCode.GDPlanteObjects2[i];
        ++k;
    }
}
gdjs.PrincipalCode.GDPlanteObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("draggingNow"), false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 5);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Plante"), gdjs.PrincipalCode.GDPlanteObjects1);
{for(var i = 0, len = gdjs.PrincipalCode.GDPlanteObjects1.length ;i < len;++i) {
    gdjs.PrincipalCode.GDPlanteObjects1[i].getBehavior("Effect").enableEffect("Contour", false);
}
}}

}


};gdjs.PrincipalCode.mapOfGDgdjs_9546PrincipalCode_9546GDPianoObjects2Objects = Hashtable.newFrom({"Piano": gdjs.PrincipalCode.GDPianoObjects2});
gdjs.PrincipalCode.eventsList13 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "r");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9690188);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.PrincipalCode.GDPianoObjects2 */
{for(var i = 0, len = gdjs.PrincipalCode.GDPianoObjects2.length ;i < len;++i) {
    gdjs.PrincipalCode.GDPianoObjects2[i].setAngle(gdjs.PrincipalCode.GDPianoObjects2[i].getAngle() + (90));
}
}}

}


};gdjs.PrincipalCode.eventsList14 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Piano"), gdjs.PrincipalCode.GDPianoObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("draggingNow"), false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Meuble__est_cliqu_233.func(runtimeScene, gdjs.PrincipalCode.mapOfGDgdjs_9546PrincipalCode_9546GDPianoObjects2Objects, "Déplaçable", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9687644);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("draggingNow"), true);
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(6);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 6;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Piano"), gdjs.PrincipalCode.GDPianoObjects2);
{for(var i = 0, len = gdjs.PrincipalCode.GDPianoObjects2.length ;i < len;++i) {
    gdjs.PrincipalCode.GDPianoObjects2[i].getBehavior("Effect").enableEffect("Contour", true);
}
}
{ //Subevents
gdjs.PrincipalCode.eventsList13(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Piano"), gdjs.PrincipalCode.GDPianoObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PrincipalCode.GDPianoObjects2.length;i<l;++i) {
    if ( gdjs.PrincipalCode.GDPianoObjects2[i].getBehavior("Déplaçable").wasJustDropped() ) {
        isConditionTrue_0 = true;
        gdjs.PrincipalCode.GDPianoObjects2[k] = gdjs.PrincipalCode.GDPianoObjects2[i];
        ++k;
    }
}
gdjs.PrincipalCode.GDPianoObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("draggingNow"), false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 6);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Piano"), gdjs.PrincipalCode.GDPianoObjects1);
{for(var i = 0, len = gdjs.PrincipalCode.GDPianoObjects1.length ;i < len;++i) {
    gdjs.PrincipalCode.GDPianoObjects1[i].getBehavior("Effect").enableEffect("Contour", false);
}
}}

}


};gdjs.PrincipalCode.mapOfGDgdjs_9546PrincipalCode_9546GDLivreObjects2Objects = Hashtable.newFrom({"Livre": gdjs.PrincipalCode.GDLivreObjects2});
gdjs.PrincipalCode.eventsList15 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "r");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9695260);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.PrincipalCode.GDLivreObjects2 */
{for(var i = 0, len = gdjs.PrincipalCode.GDLivreObjects2.length ;i < len;++i) {
    gdjs.PrincipalCode.GDLivreObjects2[i].setAngle(gdjs.PrincipalCode.GDLivreObjects2[i].getAngle() + (90));
}
}}

}


};gdjs.PrincipalCode.eventsList16 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Livre"), gdjs.PrincipalCode.GDLivreObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("draggingNow"), false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Meuble__est_cliqu_233.func(runtimeScene, gdjs.PrincipalCode.mapOfGDgdjs_9546PrincipalCode_9546GDLivreObjects2Objects, "Déplaçable", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9692716);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("draggingNow"), true);
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(7);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 7;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Livre"), gdjs.PrincipalCode.GDLivreObjects2);
{for(var i = 0, len = gdjs.PrincipalCode.GDLivreObjects2.length ;i < len;++i) {
    gdjs.PrincipalCode.GDLivreObjects2[i].getBehavior("Effect").enableEffect("Contour", true);
}
}
{ //Subevents
gdjs.PrincipalCode.eventsList15(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Livre"), gdjs.PrincipalCode.GDLivreObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PrincipalCode.GDLivreObjects2.length;i<l;++i) {
    if ( gdjs.PrincipalCode.GDLivreObjects2[i].getBehavior("Déplaçable").wasJustDropped() ) {
        isConditionTrue_0 = true;
        gdjs.PrincipalCode.GDLivreObjects2[k] = gdjs.PrincipalCode.GDLivreObjects2[i];
        ++k;
    }
}
gdjs.PrincipalCode.GDLivreObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("draggingNow"), false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 7);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Livre"), gdjs.PrincipalCode.GDLivreObjects1);
{for(var i = 0, len = gdjs.PrincipalCode.GDLivreObjects1.length ;i < len;++i) {
    gdjs.PrincipalCode.GDLivreObjects1[i].getBehavior("Effect").enableEffect("Contour", false);
}
}}

}


};gdjs.PrincipalCode.mapOfGDgdjs_9546PrincipalCode_9546GDT_959595233l_959595233Objects2Objects = Hashtable.newFrom({"Télé": gdjs.PrincipalCode.GDT_95233l_95233Objects2});
gdjs.PrincipalCode.eventsList17 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "r");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9697972);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.PrincipalCode.GDT_95233l_95233Objects2 */
{for(var i = 0, len = gdjs.PrincipalCode.GDT_95233l_95233Objects2.length ;i < len;++i) {
    gdjs.PrincipalCode.GDT_95233l_95233Objects2[i].setAngle(gdjs.PrincipalCode.GDT_95233l_95233Objects2[i].getAngle() + (90));
}
}}

}


};gdjs.PrincipalCode.eventsList18 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Télé"), gdjs.PrincipalCode.GDT_95233l_95233Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("draggingNow"), false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Meuble__est_cliqu_233.func(runtimeScene, gdjs.PrincipalCode.mapOfGDgdjs_9546PrincipalCode_9546GDT_959595233l_959595233Objects2Objects, "Déplaçable", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9697788);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("draggingNow"), true);
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(8);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 8;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Télé"), gdjs.PrincipalCode.GDT_95233l_95233Objects2);
{for(var i = 0, len = gdjs.PrincipalCode.GDT_95233l_95233Objects2.length ;i < len;++i) {
    gdjs.PrincipalCode.GDT_95233l_95233Objects2[i].getBehavior("Effect").enableEffect("Contour", true);
}
}
{ //Subevents
gdjs.PrincipalCode.eventsList17(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Télé"), gdjs.PrincipalCode.GDT_95233l_95233Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PrincipalCode.GDT_95233l_95233Objects2.length;i<l;++i) {
    if ( gdjs.PrincipalCode.GDT_95233l_95233Objects2[i].getBehavior("Déplaçable").wasJustDropped() ) {
        isConditionTrue_0 = true;
        gdjs.PrincipalCode.GDT_95233l_95233Objects2[k] = gdjs.PrincipalCode.GDT_95233l_95233Objects2[i];
        ++k;
    }
}
gdjs.PrincipalCode.GDT_95233l_95233Objects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("draggingNow"), false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 8);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Télé"), gdjs.PrincipalCode.GDT_95233l_95233Objects1);
{for(var i = 0, len = gdjs.PrincipalCode.GDT_95233l_95233Objects1.length ;i < len;++i) {
    gdjs.PrincipalCode.GDT_95233l_95233Objects1[i].getBehavior("Effect").enableEffect("Contour", false);
}
}}

}


};gdjs.PrincipalCode.mapOfGDgdjs_9546PrincipalCode_9546GDTapisObjects2Objects = Hashtable.newFrom({"Tapis": gdjs.PrincipalCode.GDTapisObjects2});
gdjs.PrincipalCode.eventsList19 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "r");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9672796);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.PrincipalCode.GDTapisObjects2 */
{for(var i = 0, len = gdjs.PrincipalCode.GDTapisObjects2.length ;i < len;++i) {
    gdjs.PrincipalCode.GDTapisObjects2[i].setAngle(gdjs.PrincipalCode.GDTapisObjects2[i].getAngle() + (90));
}
}}

}


};gdjs.PrincipalCode.eventsList20 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Tapis"), gdjs.PrincipalCode.GDTapisObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("draggingNow"), false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Meuble__est_cliqu_233.func(runtimeScene, gdjs.PrincipalCode.mapOfGDgdjs_9546PrincipalCode_9546GDTapisObjects2Objects, "Déplaçable", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9666980);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("draggingNow"), true);
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(9);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 9;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Tapis"), gdjs.PrincipalCode.GDTapisObjects2);
{for(var i = 0, len = gdjs.PrincipalCode.GDTapisObjects2.length ;i < len;++i) {
    gdjs.PrincipalCode.GDTapisObjects2[i].getBehavior("Effect").enableEffect("Contour", true);
}
}
{ //Subevents
gdjs.PrincipalCode.eventsList19(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Tapis"), gdjs.PrincipalCode.GDTapisObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PrincipalCode.GDTapisObjects2.length;i<l;++i) {
    if ( gdjs.PrincipalCode.GDTapisObjects2[i].getBehavior("Déplaçable").wasJustDropped() ) {
        isConditionTrue_0 = true;
        gdjs.PrincipalCode.GDTapisObjects2[k] = gdjs.PrincipalCode.GDTapisObjects2[i];
        ++k;
    }
}
gdjs.PrincipalCode.GDTapisObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("draggingNow"), false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 9);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Tapis"), gdjs.PrincipalCode.GDTapisObjects1);
{for(var i = 0, len = gdjs.PrincipalCode.GDTapisObjects1.length ;i < len;++i) {
    gdjs.PrincipalCode.GDTapisObjects1[i].getBehavior("Effect").enableEffect("Contour", false);
}
}}

}


};gdjs.PrincipalCode.eventsList21 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(runtimeScene, "UI_Principal", 0, 0, 0);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("cellSize").setNumber(90);
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("draggingNow"), false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bureau"), gdjs.PrincipalCode.GDBureauObjects1);
gdjs.copyArray(runtimeScene.getObjects("Canapé"), gdjs.PrincipalCode.GDCanap_95233Objects1);
gdjs.copyArray(runtimeScene.getObjects("Chaise"), gdjs.PrincipalCode.GDChaiseObjects1);
gdjs.copyArray(runtimeScene.getObjects("Livre"), gdjs.PrincipalCode.GDLivreObjects1);
gdjs.copyArray(runtimeScene.getObjects("Piano"), gdjs.PrincipalCode.GDPianoObjects1);
gdjs.copyArray(runtimeScene.getObjects("Plante"), gdjs.PrincipalCode.GDPlanteObjects1);
gdjs.copyArray(runtimeScene.getObjects("Table"), gdjs.PrincipalCode.GDTableObjects1);
gdjs.copyArray(runtimeScene.getObjects("Tapis"), gdjs.PrincipalCode.GDTapisObjects1);
gdjs.copyArray(runtimeScene.getObjects("Télé"), gdjs.PrincipalCode.GDT_95233l_95233Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.PrincipalCode.GDCanap_95233Objects1.length;i<l;++i) {
    if ( gdjs.PrincipalCode.GDCanap_95233Objects1[i].getBehavior("Déplaçable").isDragged() ) {
        isConditionTrue_0 = true;
        gdjs.PrincipalCode.GDCanap_95233Objects1[k] = gdjs.PrincipalCode.GDCanap_95233Objects1[i];
        ++k;
    }
}
gdjs.PrincipalCode.GDCanap_95233Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.PrincipalCode.GDTableObjects1.length;i<l;++i) {
    if ( gdjs.PrincipalCode.GDTableObjects1[i].getBehavior("Déplaçable").isDragged() ) {
        isConditionTrue_0 = true;
        gdjs.PrincipalCode.GDTableObjects1[k] = gdjs.PrincipalCode.GDTableObjects1[i];
        ++k;
    }
}
gdjs.PrincipalCode.GDTableObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.PrincipalCode.GDChaiseObjects1.length;i<l;++i) {
    if ( gdjs.PrincipalCode.GDChaiseObjects1[i].getBehavior("Déplaçable").isDragged() ) {
        isConditionTrue_0 = true;
        gdjs.PrincipalCode.GDChaiseObjects1[k] = gdjs.PrincipalCode.GDChaiseObjects1[i];
        ++k;
    }
}
gdjs.PrincipalCode.GDChaiseObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.PrincipalCode.GDBureauObjects1.length;i<l;++i) {
    if ( gdjs.PrincipalCode.GDBureauObjects1[i].getBehavior("Déplaçable").isDragged() ) {
        isConditionTrue_0 = true;
        gdjs.PrincipalCode.GDBureauObjects1[k] = gdjs.PrincipalCode.GDBureauObjects1[i];
        ++k;
    }
}
gdjs.PrincipalCode.GDBureauObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.PrincipalCode.GDPianoObjects1.length;i<l;++i) {
    if ( gdjs.PrincipalCode.GDPianoObjects1[i].getBehavior("Déplaçable").isDragged() ) {
        isConditionTrue_0 = true;
        gdjs.PrincipalCode.GDPianoObjects1[k] = gdjs.PrincipalCode.GDPianoObjects1[i];
        ++k;
    }
}
gdjs.PrincipalCode.GDPianoObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.PrincipalCode.GDPlanteObjects1.length;i<l;++i) {
    if ( gdjs.PrincipalCode.GDPlanteObjects1[i].getBehavior("Déplaçable").isDragged() ) {
        isConditionTrue_0 = true;
        gdjs.PrincipalCode.GDPlanteObjects1[k] = gdjs.PrincipalCode.GDPlanteObjects1[i];
        ++k;
    }
}
gdjs.PrincipalCode.GDPlanteObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.PrincipalCode.GDLivreObjects1.length;i<l;++i) {
    if ( gdjs.PrincipalCode.GDLivreObjects1[i].getBehavior("Déplaçable").isDragged() ) {
        isConditionTrue_0 = true;
        gdjs.PrincipalCode.GDLivreObjects1[k] = gdjs.PrincipalCode.GDLivreObjects1[i];
        ++k;
    }
}
gdjs.PrincipalCode.GDLivreObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.PrincipalCode.GDT_95233l_95233Objects1.length;i<l;++i) {
    if ( gdjs.PrincipalCode.GDT_95233l_95233Objects1[i].getBehavior("Déplaçable").isDragged() ) {
        isConditionTrue_0 = true;
        gdjs.PrincipalCode.GDT_95233l_95233Objects1[k] = gdjs.PrincipalCode.GDT_95233l_95233Objects1[i];
        ++k;
    }
}
gdjs.PrincipalCode.GDT_95233l_95233Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.PrincipalCode.GDTapisObjects1.length;i<l;++i) {
    if ( gdjs.PrincipalCode.GDTapisObjects1[i].getBehavior("Déplaçable").isDragged() ) {
        isConditionTrue_0 = true;
        gdjs.PrincipalCode.GDTapisObjects1[k] = gdjs.PrincipalCode.GDTapisObjects1[i];
        ++k;
    }
}
gdjs.PrincipalCode.GDTapisObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.inventory.has(runtimeScene, "ANNULER CONDITION", ""));
}
if (isConditionTrue_0) {
/* Reuse gdjs.PrincipalCode.GDBureauObjects1 */
/* Reuse gdjs.PrincipalCode.GDCanap_95233Objects1 */
/* Reuse gdjs.PrincipalCode.GDChaiseObjects1 */
/* Reuse gdjs.PrincipalCode.GDLivreObjects1 */
/* Reuse gdjs.PrincipalCode.GDPianoObjects1 */
/* Reuse gdjs.PrincipalCode.GDPlanteObjects1 */
/* Reuse gdjs.PrincipalCode.GDTableObjects1 */
/* Reuse gdjs.PrincipalCode.GDTapisObjects1 */
/* Reuse gdjs.PrincipalCode.GDT_95233l_95233Objects1 */
{gdjs.evtsExt__SnapToGrid__SnapObjectToVirtualGrid.func(runtimeScene, gdjs.PrincipalCode.mapOfGDgdjs_9546PrincipalCode_9546GDCanap_959595233Objects1ObjectsGDgdjs_9546PrincipalCode_9546GDTableObjects1ObjectsGDgdjs_9546PrincipalCode_9546GDChaiseObjects1ObjectsGDgdjs_9546PrincipalCode_9546GDBureauObjects1ObjectsGDgdjs_9546PrincipalCode_9546GDPianoObjects1ObjectsGDgdjs_9546PrincipalCode_9546GDPlanteObjects1ObjectsGDgdjs_9546PrincipalCode_9546GDLivreObjects1ObjectsGDgdjs_9546PrincipalCode_9546GDT_959595233l_959595233Objects1ObjectsGDgdjs_9546PrincipalCode_9546GDTapisObjects1Objects, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("cellSize")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("cellSize")), 0, 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


gdjs.PrincipalCode.eventsList2(runtimeScene);
}


{


gdjs.PrincipalCode.eventsList4(runtimeScene);
}


{


gdjs.PrincipalCode.eventsList6(runtimeScene);
}


{


gdjs.PrincipalCode.eventsList8(runtimeScene);
}


{


gdjs.PrincipalCode.eventsList10(runtimeScene);
}


{


gdjs.PrincipalCode.eventsList12(runtimeScene);
}


{


gdjs.PrincipalCode.eventsList14(runtimeScene);
}


{


gdjs.PrincipalCode.eventsList16(runtimeScene);
}


{


gdjs.PrincipalCode.eventsList18(runtimeScene);
}


{


gdjs.PrincipalCode.eventsList20(runtimeScene);
}


};

gdjs.PrincipalCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PrincipalCode.GDBord_9595apparts2Objects1.length = 0;
gdjs.PrincipalCode.GDBord_9595apparts2Objects2.length = 0;
gdjs.PrincipalCode.GDBord_9595apparts2Objects3.length = 0;
gdjs.PrincipalCode.GDNewSpriteObjects1.length = 0;
gdjs.PrincipalCode.GDNewSpriteObjects2.length = 0;
gdjs.PrincipalCode.GDNewSpriteObjects3.length = 0;
gdjs.PrincipalCode.GDNewBBTextObjects1.length = 0;
gdjs.PrincipalCode.GDNewBBTextObjects2.length = 0;
gdjs.PrincipalCode.GDNewBBTextObjects3.length = 0;
gdjs.PrincipalCode.GDMeuble1Objects1.length = 0;
gdjs.PrincipalCode.GDMeuble1Objects2.length = 0;
gdjs.PrincipalCode.GDMeuble1Objects3.length = 0;
gdjs.PrincipalCode.GDDrawerObjects1.length = 0;
gdjs.PrincipalCode.GDDrawerObjects2.length = 0;
gdjs.PrincipalCode.GDDrawerObjects3.length = 0;
gdjs.PrincipalCode.GDCanap_95233Objects1.length = 0;
gdjs.PrincipalCode.GDCanap_95233Objects2.length = 0;
gdjs.PrincipalCode.GDCanap_95233Objects3.length = 0;
gdjs.PrincipalCode.GDTableObjects1.length = 0;
gdjs.PrincipalCode.GDTableObjects2.length = 0;
gdjs.PrincipalCode.GDTableObjects3.length = 0;
gdjs.PrincipalCode.GDBureauObjects1.length = 0;
gdjs.PrincipalCode.GDBureauObjects2.length = 0;
gdjs.PrincipalCode.GDBureauObjects3.length = 0;
gdjs.PrincipalCode.GDChaiseObjects1.length = 0;
gdjs.PrincipalCode.GDChaiseObjects2.length = 0;
gdjs.PrincipalCode.GDChaiseObjects3.length = 0;
gdjs.PrincipalCode.GDPlanteObjects1.length = 0;
gdjs.PrincipalCode.GDPlanteObjects2.length = 0;
gdjs.PrincipalCode.GDPlanteObjects3.length = 0;
gdjs.PrincipalCode.GDPianoObjects1.length = 0;
gdjs.PrincipalCode.GDPianoObjects2.length = 0;
gdjs.PrincipalCode.GDPianoObjects3.length = 0;
gdjs.PrincipalCode.GDLivreObjects1.length = 0;
gdjs.PrincipalCode.GDLivreObjects2.length = 0;
gdjs.PrincipalCode.GDLivreObjects3.length = 0;
gdjs.PrincipalCode.GDT_95233l_95233Objects1.length = 0;
gdjs.PrincipalCode.GDT_95233l_95233Objects2.length = 0;
gdjs.PrincipalCode.GDT_95233l_95233Objects3.length = 0;
gdjs.PrincipalCode.GDTapisObjects1.length = 0;
gdjs.PrincipalCode.GDTapisObjects2.length = 0;
gdjs.PrincipalCode.GDTapisObjects3.length = 0;

gdjs.PrincipalCode.eventsList21(runtimeScene);

return;

}

gdjs['PrincipalCode'] = gdjs.PrincipalCode;
