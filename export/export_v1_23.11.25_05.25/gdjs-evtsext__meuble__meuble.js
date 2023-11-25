
gdjs.evtsExt__Meuble__Meuble = gdjs.evtsExt__Meuble__Meuble || {};

/**
 * Behavior generated from 
 */
gdjs.evtsExt__Meuble__Meuble.Meuble = class Meuble extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__Meuble__Meuble.Meuble.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.ID = behaviorData.ID !== undefined ? behaviorData.ID : Number("") || 0;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.ID !== newBehaviorData.ID)
      this._behaviorData.ID = newBehaviorData.ID;

    return true;
  }

  // Properties:
  
  _getID() {
    return this._behaviorData.ID !== undefined ? this._behaviorData.ID : Number("") || 0;
  }
  _setID(newValue) {
    this._behaviorData.ID = newValue;
  }
}

/**
 * Shared data generated from 
 */
gdjs.evtsExt__Meuble__Meuble.Meuble.SharedData = class MeubleSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__Meuble__Meuble.Meuble.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._Meuble_MeubleSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._Meuble_MeubleSharedData = new gdjs.evtsExt__Meuble__Meuble.Meuble.SharedData(
      initialData
    );
  }
  return instanceContainer._Meuble_MeubleSharedData;
}

// Methods:
gdjs.evtsExt__Meuble__Meuble.Meuble.prototype.Activer_si_cliqu_233Context = {};
gdjs.evtsExt__Meuble__Meuble.Meuble.prototype.Activer_si_cliqu_233Context.GDObjectObjects1= [];
gdjs.evtsExt__Meuble__Meuble.Meuble.prototype.Activer_si_cliqu_233Context.GDObjectObjects2= [];
gdjs.evtsExt__Meuble__Meuble.Meuble.prototype.Activer_si_cliqu_233Context.GDObjectObjects3= [];


gdjs.evtsExt__Meuble__Meuble.Meuble.prototype.Activer_si_cliqu_233Context.mapOfGDgdjs_9546evtsExt_9595_9595Meuble_9595_9595Meuble_9546Meuble_9546prototype_9546Activer_9595si_9595cliqu_9595233Context_9546GDObjectObjects2Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__Meuble__Meuble.Meuble.prototype.Activer_si_cliqu_233Context.GDObjectObjects2});
gdjs.evtsExt__Meuble__Meuble.Meuble.prototype.Activer_si_cliqu_233Context.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "r");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(9554988);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Meuble__Meuble.Meuble.prototype.Activer_si_cliqu_233Context.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Meuble__Meuble.Meuble.prototype.Activer_si_cliqu_233Context.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Meuble__Meuble.Meuble.prototype.Activer_si_cliqu_233Context.GDObjectObjects2[i].setAngle(gdjs.evtsExt__Meuble__Meuble.Meuble.prototype.Activer_si_cliqu_233Context.GDObjectObjects2[i].getAngle() + (90));
}
}{gdjs.evtTools.debuggerTools.log("Propriété : " + gdjs.evtTools.common.toString((( gdjs.evtsExt__Meuble__Meuble.Meuble.prototype.Activer_si_cliqu_233Context.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Meuble__Meuble.Meuble.prototype.Activer_si_cliqu_233Context.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getID())), "", "");
}}

}


};gdjs.evtsExt__Meuble__Meuble.Meuble.prototype.Activer_si_cliqu_233Context.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Meuble__Meuble.Meuble.prototype.Activer_si_cliqu_233Context.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.evtsExt__Meuble__Meuble.Meuble.prototype.Activer_si_cliqu_233Context.mapOfGDgdjs_9546evtsExt_9595_9595Meuble_9595_9595Meuble_9546Meuble_9546prototype_9546Activer_9595si_9595cliqu_9595233Context_9546GDObjectObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(9554260);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Meuble__Meuble.Meuble.prototype.Activer_si_cliqu_233Context.GDObjectObjects2 */
{runtimeScene.getScene().getVariables().get("selection_variable_name").setNumber((( gdjs.evtsExt__Meuble__Meuble.Meuble.prototype.Activer_si_cliqu_233Context.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Meuble__Meuble.Meuble.prototype.Activer_si_cliqu_233Context.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getID()));
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Meuble__Meuble.Meuble.prototype.Activer_si_cliqu_233Context.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Meuble__Meuble.Meuble.prototype.Activer_si_cliqu_233Context.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Meuble__Meuble.Meuble.prototype.Activer_si_cliqu_233Context.GDObjectObjects2[i].getVariableNumber(gdjs.evtsExt__Meuble__Meuble.Meuble.prototype.Activer_si_cliqu_233Context.GDObjectObjects2[i].getVariables().get("ID")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("selection_variable_name")) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Meuble__Meuble.Meuble.prototype.Activer_si_cliqu_233Context.GDObjectObjects2[k] = gdjs.evtsExt__Meuble__Meuble.Meuble.prototype.Activer_si_cliqu_233Context.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Meuble__Meuble.Meuble.prototype.Activer_si_cliqu_233Context.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Meuble__Meuble.Meuble.prototype.Activer_si_cliqu_233Context.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Meuble__Meuble.Meuble.prototype.Activer_si_cliqu_233Context.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Meuble__Meuble.Meuble.prototype.Activer_si_cliqu_233Context.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Effect")).enableEffect("Contour", true);
}
}
{ //Subevents
gdjs.evtsExt__Meuble__Meuble.Meuble.prototype.Activer_si_cliqu_233Context.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Meuble__Meuble.Meuble.prototype.Activer_si_cliqu_233Context.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Meuble__Meuble.Meuble.prototype.Activer_si_cliqu_233Context.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__Meuble__Meuble.Meuble.prototype.Activer_si_cliqu_233Context.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__Meuble__Meuble.Meuble.prototype.Activer_si_cliqu_233Context.GDObjectObjects1[i].getVariables().get("ID")) == gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("selection_variable_name"))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Meuble__Meuble.Meuble.prototype.Activer_si_cliqu_233Context.GDObjectObjects1[k] = gdjs.evtsExt__Meuble__Meuble.Meuble.prototype.Activer_si_cliqu_233Context.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Meuble__Meuble.Meuble.prototype.Activer_si_cliqu_233Context.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Meuble__Meuble.Meuble.prototype.Activer_si_cliqu_233Context.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Meuble__Meuble.Meuble.prototype.Activer_si_cliqu_233Context.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Meuble__Meuble.Meuble.prototype.Activer_si_cliqu_233Context.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Effect")).enableEffect("Contour", false);
}
}}

}


};gdjs.evtsExt__Meuble__Meuble.Meuble.prototype.Activer_si_cliqu_233Context.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Meuble__Meuble.Meuble.prototype.Activer_si_cliqu_233Context.eventsList1(runtimeScene, eventsFunctionContext);
}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.debuggerTools.log(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("test"))), "", "");
}}

}


};

gdjs.evtsExt__Meuble__Meuble.Meuble.prototype.Activer_si_cliqu_233 = function(test, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
if (argName === "test") return test;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Meuble__Meuble.Meuble.prototype.Activer_si_cliqu_233Context.GDObjectObjects1.length = 0;
gdjs.evtsExt__Meuble__Meuble.Meuble.prototype.Activer_si_cliqu_233Context.GDObjectObjects2.length = 0;
gdjs.evtsExt__Meuble__Meuble.Meuble.prototype.Activer_si_cliqu_233Context.GDObjectObjects3.length = 0;

gdjs.evtsExt__Meuble__Meuble.Meuble.prototype.Activer_si_cliqu_233Context.eventsList2(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__Meuble__Meuble.Meuble.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("Meuble::Meuble", gdjs.evtsExt__Meuble__Meuble.Meuble);
