
if (typeof gdjs.evtsExt__Meuble__est_cliqu_233 !== "undefined") {
  gdjs.evtsExt__Meuble__est_cliqu_233.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Meuble__est_cliqu_233 = {};
gdjs.evtsExt__Meuble__est_cliqu_233.GDMeubleObjects1= [];
gdjs.evtsExt__Meuble__est_cliqu_233.GDMeubleObjects2= [];


gdjs.evtsExt__Meuble__est_cliqu_233.mapOfGDgdjs_9546evtsExt_9595_9595Meuble_9595_9595est_9595cliqu_9595233_9546GDMeubleObjects1Objects = Hashtable.newFrom({"Meuble": gdjs.evtsExt__Meuble__est_cliqu_233.GDMeubleObjects1});
gdjs.evtsExt__Meuble__est_cliqu_233.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Meuble"), gdjs.evtsExt__Meuble__est_cliqu_233.GDMeubleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.evtsExt__Meuble__est_cliqu_233.mapOfGDgdjs_9546evtsExt_9595_9595Meuble_9595_9595est_9595cliqu_9595233_9546GDMeubleObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(9548996);
}
}
}
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.evtsExt__Meuble__est_cliqu_233.func = function(runtimeScene, Meuble, Comportement, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Meuble": Meuble
},
  _objectArraysMap: {
"Meuble": gdjs.objectsListsToArray(Meuble)
},
  _behaviorNamesMap: {
"Comportement": Comportement
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Meuble__est_cliqu_233.GDMeubleObjects1.length = 0;
gdjs.evtsExt__Meuble__est_cliqu_233.GDMeubleObjects2.length = 0;

gdjs.evtsExt__Meuble__est_cliqu_233.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__Meuble__est_cliqu_233.registeredGdjsCallbacks = [];