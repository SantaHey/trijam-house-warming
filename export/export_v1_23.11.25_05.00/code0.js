gdjs.JnCode = {};
gdjs.JnCode.GDMeuble_95952Objects1= [];
gdjs.JnCode.GDMeuble_95952Objects2= [];
gdjs.JnCode.GDMeuble_95952Objects3= [];
gdjs.JnCode.GDBord_9595appartsObjects1= [];
gdjs.JnCode.GDBord_9595appartsObjects2= [];
gdjs.JnCode.GDBord_9595appartsObjects3= [];
gdjs.JnCode.GDMeuble1Objects1= [];
gdjs.JnCode.GDMeuble1Objects2= [];
gdjs.JnCode.GDMeuble1Objects3= [];
gdjs.JnCode.GDDrawerObjects1= [];
gdjs.JnCode.GDDrawerObjects2= [];
gdjs.JnCode.GDDrawerObjects3= [];
gdjs.JnCode.GDCanap_95233Objects1= [];
gdjs.JnCode.GDCanap_95233Objects2= [];
gdjs.JnCode.GDCanap_95233Objects3= [];
gdjs.JnCode.GDTableObjects1= [];
gdjs.JnCode.GDTableObjects2= [];
gdjs.JnCode.GDTableObjects3= [];
gdjs.JnCode.GDBureauObjects1= [];
gdjs.JnCode.GDBureauObjects2= [];
gdjs.JnCode.GDBureauObjects3= [];
gdjs.JnCode.GDChaiseObjects1= [];
gdjs.JnCode.GDChaiseObjects2= [];
gdjs.JnCode.GDChaiseObjects3= [];
gdjs.JnCode.GDPlanteObjects1= [];
gdjs.JnCode.GDPlanteObjects2= [];
gdjs.JnCode.GDPlanteObjects3= [];
gdjs.JnCode.GDPianoObjects1= [];
gdjs.JnCode.GDPianoObjects2= [];
gdjs.JnCode.GDPianoObjects3= [];
gdjs.JnCode.GDLivreObjects1= [];
gdjs.JnCode.GDLivreObjects2= [];
gdjs.JnCode.GDLivreObjects3= [];
gdjs.JnCode.GDT_95233l_95233Objects1= [];
gdjs.JnCode.GDT_95233l_95233Objects2= [];
gdjs.JnCode.GDT_95233l_95233Objects3= [];
gdjs.JnCode.GDTapisObjects1= [];
gdjs.JnCode.GDTapisObjects2= [];
gdjs.JnCode.GDTapisObjects3= [];


gdjs.JnCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.inventory.has(runtimeScene, "truc", "bidule");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Meuble1"), gdjs.JnCode.GDMeuble1Objects1);
{runtimeScene.getScene().getVariables().get("selectedMobilo").setNumber(1);
}{for(var i = 0, len = gdjs.JnCode.GDMeuble1Objects1.length ;i < len;++i) {
    gdjs.JnCode.GDMeuble1Objects1[i].getBehavior("Effect").enableEffect("Contour", false);
}
}}

}


};gdjs.JnCode.eventsList1 = function(runtimeScene) {

};gdjs.JnCode.mapOfGDgdjs_9546JnCode_9546GDCanap_959595233Objects1ObjectsGDgdjs_9546JnCode_9546GDTableObjects1ObjectsGDgdjs_9546JnCode_9546GDChaiseObjects1ObjectsGDgdjs_9546JnCode_9546GDBureauObjects1ObjectsGDgdjs_9546JnCode_9546GDPianoObjects1ObjectsGDgdjs_9546JnCode_9546GDPlanteObjects1ObjectsGDgdjs_9546JnCode_9546GDLivreObjects1ObjectsGDgdjs_9546JnCode_9546GDT_959595233l_959595233Objects1ObjectsGDgdjs_9546JnCode_9546GDTapisObjects1Objects = Hashtable.newFrom({"Canapé": gdjs.JnCode.GDCanap_95233Objects1, "Table": gdjs.JnCode.GDTableObjects1, "Chaise": gdjs.JnCode.GDChaiseObjects1, "Bureau": gdjs.JnCode.GDBureauObjects1, "Piano": gdjs.JnCode.GDPianoObjects1, "Plante": gdjs.JnCode.GDPlanteObjects1, "Livre": gdjs.JnCode.GDLivreObjects1, "Télé": gdjs.JnCode.GDT_95233l_95233Objects1, "Tapis": gdjs.JnCode.GDTapisObjects1});
gdjs.JnCode.mapOfGDgdjs_9546JnCode_9546GDMeuble1Objects2Objects = Hashtable.newFrom({"Meuble1": gdjs.JnCode.GDMeuble1Objects2});
gdjs.JnCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "r");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9613148);
}
}
if (isConditionTrue_0) {
}

}


};gdjs.JnCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Meuble1"), gdjs.JnCode.GDMeuble1Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__Meuble__est_cliqu_233.func(runtimeScene, gdjs.JnCode.mapOfGDgdjs_9546JnCode_9546GDMeuble1Objects2Objects, "Déplaçable", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9611620);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("selectedMobilo").setNumber(1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("selectedMobilo")) == 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Meuble1"), gdjs.JnCode.GDMeuble1Objects2);
{for(var i = 0, len = gdjs.JnCode.GDMeuble1Objects2.length ;i < len;++i) {
    gdjs.JnCode.GDMeuble1Objects2[i].getBehavior("Effect").enableEffect("Contour", true);
}
}
{ //Subevents
gdjs.JnCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("selectedMobilo")) == 1);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Meuble1"), gdjs.JnCode.GDMeuble1Objects1);
{for(var i = 0, len = gdjs.JnCode.GDMeuble1Objects1.length ;i < len;++i) {
    gdjs.JnCode.GDMeuble1Objects1[i].getBehavior("Effect").enableEffect("Contour", false);
}
}}

}


};gdjs.JnCode.eventsList4 = function(runtimeScene) {

{


gdjs.JnCode.eventsList0(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("cellSize").setNumber(90);
}{gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(runtimeScene, "UI_JN", 0, 0, 0);
}{runtimeScene.getScene().getVariables().get("selectedMobilo").setNumber(0);
}}

}


{


gdjs.JnCode.eventsList1(runtimeScene);
}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Bureau"), gdjs.JnCode.GDBureauObjects1);
gdjs.copyArray(runtimeScene.getObjects("Canapé"), gdjs.JnCode.GDCanap_95233Objects1);
gdjs.copyArray(runtimeScene.getObjects("Chaise"), gdjs.JnCode.GDChaiseObjects1);
gdjs.copyArray(runtimeScene.getObjects("Livre"), gdjs.JnCode.GDLivreObjects1);
gdjs.copyArray(runtimeScene.getObjects("Piano"), gdjs.JnCode.GDPianoObjects1);
gdjs.copyArray(runtimeScene.getObjects("Plante"), gdjs.JnCode.GDPlanteObjects1);
gdjs.copyArray(runtimeScene.getObjects("Table"), gdjs.JnCode.GDTableObjects1);
gdjs.copyArray(runtimeScene.getObjects("Tapis"), gdjs.JnCode.GDTapisObjects1);
gdjs.copyArray(runtimeScene.getObjects("Télé"), gdjs.JnCode.GDT_95233l_95233Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JnCode.GDCanap_95233Objects1.length;i<l;++i) {
    if ( gdjs.JnCode.GDCanap_95233Objects1[i].getBehavior("Déplaçable").isDragged() ) {
        isConditionTrue_0 = true;
        gdjs.JnCode.GDCanap_95233Objects1[k] = gdjs.JnCode.GDCanap_95233Objects1[i];
        ++k;
    }
}
gdjs.JnCode.GDCanap_95233Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.JnCode.GDTableObjects1.length;i<l;++i) {
    if ( gdjs.JnCode.GDTableObjects1[i].getBehavior("Déplaçable").isDragged() ) {
        isConditionTrue_0 = true;
        gdjs.JnCode.GDTableObjects1[k] = gdjs.JnCode.GDTableObjects1[i];
        ++k;
    }
}
gdjs.JnCode.GDTableObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.JnCode.GDChaiseObjects1.length;i<l;++i) {
    if ( gdjs.JnCode.GDChaiseObjects1[i].getBehavior("Déplaçable").isDragged() ) {
        isConditionTrue_0 = true;
        gdjs.JnCode.GDChaiseObjects1[k] = gdjs.JnCode.GDChaiseObjects1[i];
        ++k;
    }
}
gdjs.JnCode.GDChaiseObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.JnCode.GDBureauObjects1.length;i<l;++i) {
    if ( gdjs.JnCode.GDBureauObjects1[i].getBehavior("Déplaçable").isDragged() ) {
        isConditionTrue_0 = true;
        gdjs.JnCode.GDBureauObjects1[k] = gdjs.JnCode.GDBureauObjects1[i];
        ++k;
    }
}
gdjs.JnCode.GDBureauObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.JnCode.GDPianoObjects1.length;i<l;++i) {
    if ( gdjs.JnCode.GDPianoObjects1[i].getBehavior("Déplaçable").isDragged() ) {
        isConditionTrue_0 = true;
        gdjs.JnCode.GDPianoObjects1[k] = gdjs.JnCode.GDPianoObjects1[i];
        ++k;
    }
}
gdjs.JnCode.GDPianoObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.JnCode.GDPlanteObjects1.length;i<l;++i) {
    if ( gdjs.JnCode.GDPlanteObjects1[i].getBehavior("Déplaçable").isDragged() ) {
        isConditionTrue_0 = true;
        gdjs.JnCode.GDPlanteObjects1[k] = gdjs.JnCode.GDPlanteObjects1[i];
        ++k;
    }
}
gdjs.JnCode.GDPlanteObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.JnCode.GDLivreObjects1.length;i<l;++i) {
    if ( gdjs.JnCode.GDLivreObjects1[i].getBehavior("Déplaçable").isDragged() ) {
        isConditionTrue_0 = true;
        gdjs.JnCode.GDLivreObjects1[k] = gdjs.JnCode.GDLivreObjects1[i];
        ++k;
    }
}
gdjs.JnCode.GDLivreObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.JnCode.GDT_95233l_95233Objects1.length;i<l;++i) {
    if ( gdjs.JnCode.GDT_95233l_95233Objects1[i].getBehavior("Déplaçable").isDragged() ) {
        isConditionTrue_0 = true;
        gdjs.JnCode.GDT_95233l_95233Objects1[k] = gdjs.JnCode.GDT_95233l_95233Objects1[i];
        ++k;
    }
}
gdjs.JnCode.GDT_95233l_95233Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.JnCode.GDTapisObjects1.length;i<l;++i) {
    if ( gdjs.JnCode.GDTapisObjects1[i].getBehavior("Déplaçable").isDragged() ) {
        isConditionTrue_0 = true;
        gdjs.JnCode.GDTapisObjects1[k] = gdjs.JnCode.GDTapisObjects1[i];
        ++k;
    }
}
gdjs.JnCode.GDTapisObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.JnCode.GDBureauObjects1 */
/* Reuse gdjs.JnCode.GDCanap_95233Objects1 */
/* Reuse gdjs.JnCode.GDChaiseObjects1 */
/* Reuse gdjs.JnCode.GDLivreObjects1 */
/* Reuse gdjs.JnCode.GDPianoObjects1 */
/* Reuse gdjs.JnCode.GDPlanteObjects1 */
/* Reuse gdjs.JnCode.GDTableObjects1 */
/* Reuse gdjs.JnCode.GDTapisObjects1 */
/* Reuse gdjs.JnCode.GDT_95233l_95233Objects1 */
{gdjs.evtsExt__SnapToGrid__SnapObjectToVirtualGrid.func(runtimeScene, gdjs.JnCode.mapOfGDgdjs_9546JnCode_9546GDCanap_959595233Objects1ObjectsGDgdjs_9546JnCode_9546GDTableObjects1ObjectsGDgdjs_9546JnCode_9546GDChaiseObjects1ObjectsGDgdjs_9546JnCode_9546GDBureauObjects1ObjectsGDgdjs_9546JnCode_9546GDPianoObjects1ObjectsGDgdjs_9546JnCode_9546GDPlanteObjects1ObjectsGDgdjs_9546JnCode_9546GDLivreObjects1ObjectsGDgdjs_9546JnCode_9546GDT_959595233l_959595233Objects1ObjectsGDgdjs_9546JnCode_9546GDTapisObjects1Objects, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("cellSize")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("cellSize")), 0, 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


gdjs.JnCode.eventsList3(runtimeScene);
}


};

gdjs.JnCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.JnCode.GDMeuble_95952Objects1.length = 0;
gdjs.JnCode.GDMeuble_95952Objects2.length = 0;
gdjs.JnCode.GDMeuble_95952Objects3.length = 0;
gdjs.JnCode.GDBord_9595appartsObjects1.length = 0;
gdjs.JnCode.GDBord_9595appartsObjects2.length = 0;
gdjs.JnCode.GDBord_9595appartsObjects3.length = 0;
gdjs.JnCode.GDMeuble1Objects1.length = 0;
gdjs.JnCode.GDMeuble1Objects2.length = 0;
gdjs.JnCode.GDMeuble1Objects3.length = 0;
gdjs.JnCode.GDDrawerObjects1.length = 0;
gdjs.JnCode.GDDrawerObjects2.length = 0;
gdjs.JnCode.GDDrawerObjects3.length = 0;
gdjs.JnCode.GDCanap_95233Objects1.length = 0;
gdjs.JnCode.GDCanap_95233Objects2.length = 0;
gdjs.JnCode.GDCanap_95233Objects3.length = 0;
gdjs.JnCode.GDTableObjects1.length = 0;
gdjs.JnCode.GDTableObjects2.length = 0;
gdjs.JnCode.GDTableObjects3.length = 0;
gdjs.JnCode.GDBureauObjects1.length = 0;
gdjs.JnCode.GDBureauObjects2.length = 0;
gdjs.JnCode.GDBureauObjects3.length = 0;
gdjs.JnCode.GDChaiseObjects1.length = 0;
gdjs.JnCode.GDChaiseObjects2.length = 0;
gdjs.JnCode.GDChaiseObjects3.length = 0;
gdjs.JnCode.GDPlanteObjects1.length = 0;
gdjs.JnCode.GDPlanteObjects2.length = 0;
gdjs.JnCode.GDPlanteObjects3.length = 0;
gdjs.JnCode.GDPianoObjects1.length = 0;
gdjs.JnCode.GDPianoObjects2.length = 0;
gdjs.JnCode.GDPianoObjects3.length = 0;
gdjs.JnCode.GDLivreObjects1.length = 0;
gdjs.JnCode.GDLivreObjects2.length = 0;
gdjs.JnCode.GDLivreObjects3.length = 0;
gdjs.JnCode.GDT_95233l_95233Objects1.length = 0;
gdjs.JnCode.GDT_95233l_95233Objects2.length = 0;
gdjs.JnCode.GDT_95233l_95233Objects3.length = 0;
gdjs.JnCode.GDTapisObjects1.length = 0;
gdjs.JnCode.GDTapisObjects2.length = 0;
gdjs.JnCode.GDTapisObjects3.length = 0;

gdjs.JnCode.eventsList4(runtimeScene);

return;

}

gdjs['JnCode'] = gdjs.JnCode;
